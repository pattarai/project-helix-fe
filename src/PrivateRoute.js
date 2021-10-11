import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";

export default function PrivateRoute(props) {
  const Component = props.component;
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(false);
        setLoading(false);
      }
    });
  }, []);
  
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : user ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )}
    </>
  );
}
