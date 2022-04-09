import './App.css';
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSingIn =() =>{

    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.error('error', error);
    })
  }

  const handleSignOut =() =>{
    signOut(auth)
    .then(() =>{
      setUser({});
    })
    .catch(error =>{
      setUser({});
    })
  }
  return (
    <div className="App">
      
      {
      user.email ? <button className="btn" onClick={handleSignOut}>Sign Out</button>
      :
      <button className="btn" onClick={handleGoogleSingIn}>Google Sign In</button>
      }

      <h2>Name: {user.displayName}</h2>
      <p>I know your email: {user.email}</p>
      <p>Provider ID: {user.providerId}</p>
      <img className='userImg' src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
