Example of using Auth0 with Redux to pass tokens for authentication.

#installing
- clone this repo
- `npm i` or use `tink` etc.
- rename `next.config.sample.js` to `next.config.js` and update the settings
- run `npm run dev` for dev environment


#what does each bit do?
`/lib/AuthService` is a wrapped around Auth0's SDK.
`/components` is designed to be display only.
`/hocs` provides higher order functions and components
 - `withLoggedInFlag` provides the `loggedIn` prop derived from the redux state
 - `withLoginAction` provides the `login` prop function which dispatches the `login` action
 - `withLoginAttemptAction` provides the `loginAttempt` prop function with dispatches the `loginAttempt` action
 - `withReduxStore` instantiates a redux store and passes it as a prop to the wrapped components
`pages` provides Next.js' page components 
 - `_app` instantiates the redux store and sets up the containers and context for use by the hocs
 - `callback` is called as part of the Auth0 setup and calls the login attempt action to let redux know that an attempt to login has been made
 - `index` provides with the login button or a message saying hi
 - 

other notable bits are the actions, reducer and store.
The only bit that's of any consequence is the actions.
The `loginAttempt` action will authenticate a hash and return either a successful or error state for an Auth0 login.
That's how we know people have logged in or not.

The `login` action uses the AuthService lib to call off to the auth SaaS to attempt a login handshake.

#todo
- persist tokens over page refreshes
- send token to the server for server rendering of authenticated routes