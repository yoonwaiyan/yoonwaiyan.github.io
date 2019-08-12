---
title: 'Understanding Basics of React Context'
slug: '/understanding-basics-of-react-context'
date: '2018-06-08T13:40:25.000Z'
featured: false
draft: false
tags: ['react', 'javascript']
description: ''
---

The use of React Context with renderProps that's introduced since React v16.3 is highly being recommended in React community to pass global level variables to child components, especially when the passing of the props from parent component to deep levels of child components, for example:

The code snippet before using React Context:
```javascript
import React from 'react';
// ...

const LoggedInUser = ({ user: { name } }) => (
  <Fragment>
    <span>Logged in as {name}</span>
  </Fragment>
);

const Navbar = ({ menu, user }) => (
  <div>
    <NavigationMenu menus={menu} />
    <LoggedInUser user={user} />
  </div>
);

class Dashboard extends PureComponent {
  render() {
    const menu = [
      { name: 'Home', url: '/' },
      { name: 'Preferences', url: '/preferences' }
    ];

    // user is available at higher level of component
    const { user, posts } = this.props;

    return (
      <Fragment>
        <Navbar menu={menu} user={user} />
        {posts.map(post => <BlogPost post={post} />)}
      </Fragment>
    );
  }
}

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    fetchUser().then(user => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <Route url="/" render={() => <Dashboard user={user} />} />
      </div>
    );
  }
}

```

You'll notice the use of `user` is delegated from `Dashboard` component down to `LoggedInUser` without being used by the components along the delegation. It increases complexity when the prop is delegated in a handful of levels down especially when there are multiple props being passed down, which is the case of the React codebase of my company project.

Now we're going to replace the props delegation with React.Context. We first create an Auth React Context:
```javascript
import React, { createContext } from 'react';

const AuthContext = createContext({ isLoggedIn: false, user: {} });

export default AuthContext;
```

`createContext()` will create two sub-components: `Provider` and `Consumer`. `Consumer` provides render props of an object that contains `isLoggedIn` and `user` properties. Now we 'll consume the user object in `Navbar` and remove the props from `Dashboard`:

```javascript
import React from 'react';
import AuthContext from './AuthContext';

// ...

// use AuthContext.Consumer to obtain user object
const Navbar = ({ menu, user }) => (
  <div>
    <NavigationMenu menus={menu} />
    <AuthContext.Consumer>
      {({ isAuth, user }) => <LoggedInUser user={user} />}
    </AuthContext.Consumer>
  </div>
);

class Dashboard extends Component {
  render() {
    const menu = [
      { name: 'Home', url: '/' },
      { name: 'Preferences', url: '/preferences' }
    ];

    const { posts } = this.props;

    // now we removed user from the list of props
    return (
      <Fragment>
        <Navbar menu={menu} />
        {posts.map(post => <BlogPost post={post} />)}
      </Fragment>
    );
  }
}

// ...
```

By using `AuthContext.Consumer`, we're able to access the `user` object directly without passing it from `Dashboard` component, but when we try to log user to the console, it appears that user is an empty object. This is because the default value provided by `AuthContext` is an empty user. Now we'll set the value of user using `AuthContext.Provider`:

```javascript
// ...

class App extends Component {
  state = {
    user: {},
    isLoggedIn: false
  };

  componentDidMount() {
    fetchUser().then(user => {
      this.setState({ user, isLoggedIn: true });
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <AuthContext.Provider value={{ user, isLoggedIn }}>
          <Route url="/" component={Dashboard} />
        </AuthContext.Provider>
      </div>
    );
  }
}

// ...
```

Now we have the user information available in the Consumer! 

---

React Context is especially useful for: 

1. User authentication and routes management
2. Locale and translations management
3. Theme or display settings
4. Modal management
5. State management (instead of Redux)

The use of each example above is available in the external links provided below. Currently React Context is only used for ActionCable web socket configuration in our project as we've just upgraded the React version to version 16.3.2. There is a good chance of using it for other purposes within the project to clean up the deep delegation of certain properties.

### External links:
1. https://medium.freecodecamp.org/how-to-protect-your-routes-with-react-context-717670c4713a
2. https://codeburst.io/what-can-react-context-api-do-for-you-multi-language-text-modals-and-theme-switchers-9cfbc8e5ee5e
3. https://reactjs.org/docs/context.html