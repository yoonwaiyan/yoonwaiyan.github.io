---
title: 'How to Receive Emails in Your Rails Application'
slug: '/how-to-receive-emails-in-your-rails-application'
date: '2018-08-10T15:14:59.000Z'
featured: false
draft: false
tags: ['rails']
description: ''
---

There are times when a Rails app needs to receive emails to process the content, or grab the file from the attachment and process data within the file. In this case [griddler gem](https://github.com/thoughtbot/griddler) would be the best bet to parse the incoming emails with its built-in controller action, but it seems tricky to follow through the documentations and I have to adapt an apparent syntax change which caused an issue if I follow the instructions blindly. Here is my version of the guide, hope you find it helpful.

The first step is that you'll need to find an email deliver service provider to help receive and send your emails. Mailgun and SendGrid would be a good choice as they are free to use for small personal projects. After that, follow through the instructions as given by the service so that they could properly receive and send emails.

After that, you'll need to setup the service to receive emails and "forward" it to your app. To test this out, you'll need to expose your local development web server to the public through services such as [localtunnel](https://localtunnel.github.io/www/) or [ngrok](https://ngrok.com/). By default griddler gem handles the incoming emails in `/email_processor` route, so your setup should include a setting to route your emails through HTTP request to your local web server, such as `https://test-localtunnel-11.localtunnel.me/email_processor`.

Now finally it's time to dive in the code. The code snippets below are based on Mailgun service that I configured personally, feel free to substitute with other adapters available to griddler.

Add these gems to your Gemfile:

```
gem 'griddler'
gem 'griddler-mailgun'
```

And configure your griddler to use the adapter of your choice:

```ruby
Griddler.configure do |config|
  config.email_service = :mailgun
end
```

Add `mount_griddler` for the simplest configuration provided by Griddler gem by default. This handles `/email_processor` route that is handled by `Griddler::EmailsController` controller provided by the gem.

```ruby
Rails.application.routes.draw do
  # ...
  mount_griddler
end
```

Add new file named `app/models/email_processor.rb` with the following code as a template. Note that this section is different from other guides as there seems to be a new syntax being introduced in the gem, as now an instance of `EmailProcessor` class will be created before `process` instance method is called (used to be a class method).

```ruby
class EmailProcessor
  def initialize(email)
    @email = email
  end

  def process
    puts "received email from #{@email.from}:"
    p @email.body
  end
end
```

Now you can try send an email to your configured domain and observe your local webserver to make sure everything works fine. Advanced configurations (such as handling the route manually or customize your email processor class) is available at the gem README.

Hope this clarifies out the way to receive emails from your Rails app.

External Readings:
1. [Receiving Email in Your Rails App With Griddler](https://sendgrid.com/blog/receiving-email-in-your-rails-app-with-griddler/)
2. [Griddler is Better Than Ever!](https://robots.thoughtbot.com/griddler-is-better-than-ever)
3. [griddler gem](https://github.com/thoughtbot/griddler)
