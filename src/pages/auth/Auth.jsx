import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import classes from "./Auth.module.css";
import googleIcon from "../../assets/google.svg";

const Auth = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };
  };

  // if (isAuth) {
  //   return <Navigate to="/expense-tracker" />;
  // }

  return (
    <main className={classes.container}>
      <button className={classes.login_btn}>
        <p>sign in using google</p>
        <img className={classes.image} src={googleIcon} alt="google" />
      </button>
    </main>
  );
};

export default Auth;
