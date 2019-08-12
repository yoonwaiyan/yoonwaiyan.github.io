---
title: 'JavaScript Promise and Async / Await Part 1: Introduction to Promise'
slug: '/introduction-to-promise'
date: '2019-05-22T10:01:00.000Z'
featured: false
draft: false
tags: ['react', 'javascript']
description: ''
---

So you've clicked the title to read this post. I know you're a JavaScript developer by then. You've probably seen "promise" and "async / await" flying everywhere in Medium and blog posts written by developers with at least a slight of knowledge about it. There's a big chance that you've been using Promise all this while with the mind of "it just works" without knowing the reason behind the `.then` chain.
In this post, we'll discover a little bit of history behind Promise, by implementing a couple of API calls to Github to retrieve a user's profile and repositories.
If you're a seasoned developer for years, you've probably attempted this at some point in your career:

```javascript
function getUser(username) {
  request("https://api.github.com/users/" + username, function(
    userError,
    userReponse,
    user
  ) {
    console.log("user", user);

    request("https://api.github.com/users/" + username + "/repos", function(
      reposError,
      reposResponse,
      repos
    ) {
      console.log("repos", repos);

      return { user: user, repos: repos };
    });
  });

  return { user: null, repos: [] };
};
```

Getting value from a function that calls API asynchronously is not an easy task. This is the value returned by calling the function above:

```javascript
var userInfo = getInfo("gaearon");
console.log(userInfo); // returns { user: null, repos: [] }
```

Due to the asynchronous nature of JavaScript language, the API calls are not handled by `getUser` function. At this point, maybe you'll try to a callback to assign a variable within the callback function:

```javascript
function getUserWithCallback(username, callback) {
  request("https://api.github.com/users/" + username, function(
    userError,
    userReponse,
    user
  ) {
    console.log("user", user);

    request("https://api.github.com/users/" + username + "/repos", function(
      reposError,
      reposResponse,
      repos
    ) {
      console.log("repos", repos);
      
      var result = { user: user, repos: repos };
      callback(result);
      
      return result;
    });
  });

  return { user: null, repos: [] };
};
```

```javascript
let callbackUserInfo;
callbackGetUser("yoonwaiyan", userInfo => {
  callbackUserInfo = userInfo;
});
console.log("callbackUserInfo", callbackUserInfo); // undefined
```


Now, the `callbackGetUser` process is way out of space and there's no way to catch it back and `console.log` merely tells you it went missing. You might think that callback works, but **declaring a function with a callback argument won't make it asynchronous**. [See here for more info](https://stackoverflow.com/questions/19083357/are-all-javascript-callbacks-asynchronous-if-not-how-do-i-know-which-are)

If you're in a hurry to get this call working, you'll probably remove the function altogether and resort in the main call instead:

```javascript
let userInfo, userRepos;
request("https://api.github.com/users/" + username, function(
  userError,
  userReponse,
  user
) {
  userInfo = user;
  console.log("userInfo", userInfo);

  request("https://api.github.com/users/" + username + "/repos", function(
    reposError,
    reposResponse,
    repos
  ) {
    userRepos = repos;
    console.log("main repos", userRepos.length);

    // future calculations or DOM manipulation
  });
});
```

Welcome to [callback hell](http://callbackhell.com/).

If you've ever code something similar to this, you feel the pain of not finding a way to reduce the nested blocks. If you're like me, feeling icky to find a solution to end this monstrous bite to stop me from the Path towards Clean Code, you've probably used Promise to chain the callbacks by using `.then`.

## Use Promise Chain for Consecutive Asynchronous Calls

Since few years ago, Promise has been the standard used in APIs provided by major library developers to an extend that it's even harder to find libraries without returning a Promise by default. Requesting user data from Github is much easier with the use of [octokit rest client](https://github.com/octokit/rest.js/).

```javascript
octokit.users
  .getByUsername({
    username
  })
  .then(({ data }) => {
    console.log("data", data);
    setUser(data);
  })
  .then(() => {
    return octokit.repos.listForUser({
      username
    });
  })
  .then(({ data }) => {
    setRepos(data);
    setLoading(false);
  })
  .catch(error => {
    console.log("error", error);
  });
```

Similar result can be obtained by using axios too, if using API client is not favorable due to certain reasons:

```javascript
let user, repos;
axios
  .get(url)
  .then(data => {
    user = data.data;
  })
  .then(() => {
    return axios.get(`${url}/repos`);
  })
  .then(data => {
    repos = data.data;
  });
```

## Create a Promise Function
From the snippet above, `axios.get` is a function that returns a Promise object. A Promise object consists of a property named `then`, with a callback constructor that returns `resolve` and `reject`. 

```javascript
let foo = new Promise(function(resolve, reject) {
  resolve('Success!');
});
```

As a rule of thumb, every Promise defined should have both `resolve` and `reject` being called. Typically `resolve` works like a function, while `reject` tells caller that something is wrong within the function.

Let's try re-implement the `getUser` function. This function does the same thing as `getUser` function we've seen earlier, with Promise implemented:

```javascript
const getUser = username => {
  return new Promise(async (resolve, reject) => {
    const url = `https://api.github.com/users/${username}`;
    let user, repos;
    axios
      .get(url)
      .then(data => {
        user = data.data;
      })
      .then(() => {
        return axios.get(`${url}/repos`);
      })
      .then(data => {
        repos = data.data;
        resolve({ user, repos });
      })
      .catch(error => {
        reject(error);
      });
  });
};
```

Now we can call `getUser` function like how we use `then` previously:

```javascript
getUser(username).then(data => {
  console.log("getUser", data);
});

// output: getUser Object {user: Object, repos: Array[30]}
```

## Promise.all

Now we're able to call `getUser` function to get both user profile and user repos. Experienced developers might noticed that Promise chain runs *linearly*. The API call to obtain user repositories only triggered after the first API call to get user profile, but the API to get user's repositories doesn't rely on what's being returned from user profile! We can now improve the performance by calling both APIs asynchronously. 
That means we're going to separate both calls to different Promise calls.

```javascript
const loadUser = octokit.users
  .getByUsername({
    username
  })
  .then(() => {
    setUser(loadUser);
  });

const loadRepos = octokit.repos
  .listForUser({
    username
  })
  .then(() => {
    setRepos(loadRepos);
  });
```

It looked syntactically correct, but now both calls are asynchronous without being controlled, which would easily obstruct the program flow in overall. You'll need a manager to consolidate both calls to return data first before proceed. Let us hire `Promise.all` to do that.

```javascript
const dataPromises = [
  octokit.users.getByUsername({
    username
  }),
  octokit.repos.listForUser({
    username
  })
];

Promise.all(dataPromises).then(allPromises => {
  const [userCall, repoCall] = allPromises;
  setUser(userCall.data);
  setRepos(repoCall.data);
  setLoading(false);
});
```

`Promise.all` will make sure every async call is finished before resolving all promises into one single array consists of the resolved data of each async call following the order in `dataPromises` array.

## Conclusion

There's a deep knowledge of asynchronous programming in JavaScript which is available to [read online for free](https://eloquentjavascript.net/11_async.html), and this blog post merely scratching the surface by introducing the practical application of Promise in our projects using Node.js or any modern JavaScript tools including frontend frameworks and libraries. Based on my personal experience, it is important to make sure every Promise is being handled, as a program might remain running indefinitely if the async calls are not being handled properly, and this is especially hard to debug if you have many async calls scattered across files within a project.

By going through the improvements from a callback hell to using `Promise.all` to run two API calls asynchronously, hope this makes things clearer for you to understand how to utilize JavaScript Promise.

## External Read and Resources

1. https://medium.freecodecamp.org/how-to-make-a-promise-out-of-a-callback-function-in-javascript-d8ec35d1f981
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
3. https://eloquentjavascript.net/11_async.html
