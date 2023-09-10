import { Navigate, useNavigate } from "react-router-dom";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import "./styles.css";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }

  return (
    <div className="login-page">
      <p>Sign in with google</p>
      <button className="login-with-google-btn" onClick={signIn}>
        Sign in
      </button>
    </div>
  );
};
