/**
* Steps to use firebase
* 1. Create a project on console.firebase.google.com
* 2. install firebase
* 3. Register Web app in firebase
* 4. Copy firebase init with config from firebase project settings into a file firebase.init.js
* 5. export default app
* 6. import app firebase init.js into your app.js
* 7. import getAuth from firebase/auth and create auth = getAuth(app)
* 8. turn on google authentication ( firebase > authentication > enable google sing in)
* 9. Create google provider
* 10. use signInWithPopup and pass auth and provider
* 11. handle .then(if successful) and catch error ( if error )
*/