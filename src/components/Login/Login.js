import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import googleIcon from './googleIcon.png'
import Footer from '../Home/Footer/Footer';

// firebase.initializeApp(firebaseConfig)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

function Login() {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        photo: ""
    })

    const [signInUser, setSignInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result)
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUserToken();
                setUser(signedInUser);
                setSignInUser(signedInUser);
                history.replace(from);
                console.log(displayName, email, photoURL)
            })
            .catch(err => {
                console.log(err);
                console.log(err.message)
            })
    }
    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem("token", idToken);
            // Send token to your backend via HTTPS
            // ...
        }).catch(function (error) {
            // Handle error
        });
    }
    return (
        <div className="login-area text-center">
            <div className="pb-5">
                <h3>Please Log In Here!</h3>
                <button className="login-btn btn btn-light" onClick={googleSignIn}><span className="google-icon"><img src={googleIcon} alt="" /></span> Login with Google</button>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Login;