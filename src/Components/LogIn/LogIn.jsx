import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";

const LogIn = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

 
  const handleGoogleSignIn = () => {
    console.log("clicked");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Completed");
        setUser(null); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Please Log in</h2>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      <button onClick={handleSignOut}>Sign Out</button>

      {user && (
        <div>
          <h2>{user.displayName}</h2>
          <h2>{user.email}</h2>
          <img src={user.photoURL} alt="" />
          
        </div>
      )}
    </div>
  );
};

export default LogIn;
