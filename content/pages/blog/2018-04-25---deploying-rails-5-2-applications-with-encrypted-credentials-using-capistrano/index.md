---
title: 'Deploying Rails 5.2 Applications with New Encrypted Credentials using Capistrano'
slug: '/deploying-rails-5-2-applications-with-encrypted-credentials-using-capistrano'
date: '2018-04-25T14:47:44.000Z'
featured: false
draft: false
tags: ['rails', 'capistrano', 'deployment', 'security']
description: ''
---

## Context
Rails 5.2 has been released with dozens of new features, which highlights the release of ActiveStorage and a new way to deal with encrypted credentials within the codebase. This post highlights how encrypted credentials has changed the way secret keys are managed in Rails applications and how it affects the deployment process.

Let's see what's the key difference of the credentials management between Rails 5.2 and previous versions:

### Before Rails 5.2
- `secret_key_base` was located in `config/secrets.yml`
- Every credentials have to be configured in environment variables to keep the credentials secure.
- The environment variables are all being called in `config/secrets.yml`

### Changes Introduced Since Rails 5.2
- The credentials are **encrypted in local** with the use of `config/master.key`. `config/master.key` will be ignored in git by default.
- The encrypted credentials commited to repo is the encrypted version of credentials: `config/credentials.yml.enc`
- We use the command `$ rails credentials:edit`(or `$ EDITOR=vim rails credentials:edit` if `EDITOR` is not configured) to edit the credentils.


## Deployment Issue Related to Encrypted Credentials
Problem comes in when `config/master.key` is not commited in the repo. When `config/master.key` is not found in the production server, the Rails app in the server couldn't decrypt the credentials thus the credentials couldn't be used. 

We failed to deploy to production due to this error:

```bash
ArgumentError: Missing `secret_key_base` for 'production' environment, set this string with `rails credentials:edit`
```

## Solution
There are two ways to put the master key to production server:
1. Use of environment keys (`ENV[RAILS_MASTER_KEY]`)
2. Copy `config/master.key` to your server manually without commiting to git

Solution #1 didn't work out well for capistrano in our case, thus we have used solution #2 for this app. Copying the file to production server that's being managed by capistrano means I have to configure something so that I don't copy the same key to server everytime we deploy the application. These are the steps to deploy the application successfully for the first time:

1. Copy `config/master.key` from local filesystem to the production server under `<project_root>/shared/config/master.key`.
2. Configure capistrano's `config/deploy.rb` to include this line:
    ```ruby
      set :linked_files, %w{config/master.key}
    ```
    By doing this you're telling Capistrano to symlink `config/master.key` to `<project_root>/shared/config/master.key` which contains the master key you've just copied to the server.
3. Deploy app again and verify that deployment is successful.
4. Commit this confguration changes. Don't check-in `config/master.key`!

## Conclusion
This way of how credentials are managed might seem complicated at first glance, but thinking of how they are being managed locally without exposing it in the git repo, the way of copying master key to production and sharing master key to your colleagues seems to be easier compared to setting up environment variables remotely and informing the tech team when there's any change on the credentials. It helps to secure the credentials by not exposing the credentials explicitly to each member of your team too.


## References / External Links
1. https://keithpblog.org/post/encrypted-secrets/
2. https://www.engineyard.com/blog/rails-encrypted-credentials-on-rails-5.2
