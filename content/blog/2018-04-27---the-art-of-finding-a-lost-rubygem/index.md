---
title: 'The Art of Finding a Lost Ruby Gem'
slug: '/the-art-of-finding-a-lost-rubygem'
date: '2018-04-27T13:30:42.000Z'
featured: false
draft: false
tags: ['rails', 'rubygem', 'ruby']
description: ''
---

## Context
A project was remained almost untouched for a year and it was out of dust recently for migrating a deprecating API. For frontend project using React on Ruby on Rails, things are moving fast enough that [react-rails](https://github.com/reactjs/react-rails) is no longer needed and [webpacker](https://github.com/rails/webpacker) is officially introduced to use ES6 and npm libraries for the frontend pages, all this within a year. A [react-data-grid](https://github.com/adazzle/react-data-grid) npm library was found and jquery is no more needed to make things work in jquery [bootstrap-table](https://github.com/wenzhixin/bootstrap-table) is no longer needed in a React ecosystem.

Other than that, this project was using a fork of a Rails assets gem which contains the minified library of `react-bootstrap` npm library, which was removed from Github, and the [original repo](https://github.com/mariopeixoto/react-bootstrap-rails) remains unmantained. 

## Problem
We were forced to use the original repo of the gem but unfortunately there are `inputRef` errors in React Bootstrap which was hard to trace down. I asked the fork owner to recall what was changed to make it work, but we couldn't trace down what was changed in the fork. 

## Solution
One great hint to the solution of the problem is that the project works on production, so I guess the repo is somewhere inside our production server. Right after this idea popped out my mind, I did a quick tour on the production server root and pry open the gem:
```bash
$ EDITOR=vim bundle open react-bootstrap-rails
```

```vim
" ============================================================================
" Netrw Directory Listing                                        (netrw v155)
"   /var/www/the-project/shared/bundle/ruby/2.3.0/bundler/gems/react-bootstrap-rails-025316434534d
"   Sorted by      name
"   Sort sequence: [\/]$,\<core\%(\.\d\+\)\=\>,\.h$,\.c$,\.cpp$,\~\=\*$,*,\.o$,\.obj$,\.
"   Quick Help: <F1>:help  -:go up dir  D:delete  R:rename  s:sort-by  x:special
" ==============================================================================
../
...
```

The directory of the gem shows up like a puzzle game. Changed my current working directory to the gem directory:

```bash
$ cd /var/www/the-project/shared/bundle/ruby/2.3.0/bundler/gems/react-bootstrap-rails-025316434534d
```

then checked the git log to trace the latest change.
```bash
$ git log
```

Bingo! This is the lost gem we're trying to find:
```
commit 025316434534db0514edf527f336ad8e8474437c1
Author: The Fork Author <author@email.com>
Date:   Fri Jan 6 16:20:46 2017 +0800

    bump version to 0.30.7

commit 3870d765ed93d40537353216de3e36332223247b
Author: Mario Peixoto <mario.peixoto@gmail.com>
Date:   Thu Dec 29 15:57:40 2016 -0600

    Adding warning to README

```

So I quickly copied the gem to my local:
```
scp -r user@my.server.ip.address:/var/www/the-project/shared/bundle/ruby/2.3.0/bundler/gems/react-bootstrap-rails-025316434534d ~/Desktop/
```

and source it in my project's Gemfile:
```ruby
gem 'react-bootstrap-rails', path: '~/Desktop/react-bootstrap-rails-025316434534d'
```

now my local clone has finally worked! Later that I pushed the gem into a repo under the company's ownership so that we could still use it internally without being dependent to external source.

## Conclusion
The steps looks simple and trivial, but the whole process of seeking out the truth of broken frontend that's hard to trace and the lost of art of the fork feels like a puzzle game for me solve. Certain level of fun is engaged which helps with the boredom of daily coding.


Note: As you might have noticed, the exact path, project, and the information of the fork author are all modified and changed to preserve privacy.

