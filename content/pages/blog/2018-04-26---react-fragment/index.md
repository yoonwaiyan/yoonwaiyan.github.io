---
title: 'Use of React.Fragment'
slug: '/react-fragment'
date: '2018-04-26T13:30:21.000Z'
featured: false
draft: false
tags: ['react', 'javascript']
description: ''
---

React developers know what does it mean when they saw this error:

> Adjacent JSX elements must be wrapped in an enclosing tag

It's simply fixed by adding `<div>` tags between the element. At least it used to be, until I saw `React.Fragment` in a blog and read the new official documentation of React. It's as simple as replacing `<div>` tag with `React.Fragment`:

```javacript
import React, { Fragment } from 'react';

const MyFragment = () => (
    return (
        <Fragment>
            <div>First div</div>
            <div>Second div</div>
        </Fragment>
    )
);

export default MyFragment;
```

The use of `<Fragment>` will not render extra `<div>` tag, which is a good news in certain case of styling.

