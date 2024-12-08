import { useContext, useState } from "react";
import Login from "./Login";
import { userLoginIn, userSignUp } from "../../utilities/firebase";
import UserContext from "../UserProvider";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

export default function SignUpPage() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUserSignUp = async (email: string, password: string) => {
    const {user, error} = await userSignUp(email, password);
    if (!error) {
      setUser(user);
      navigate("/onboarding");
    }
  };

  return (
    <div
      style={{
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5%",
        margin: "0px auto",
      }}
    >
      <SignUp onUserLogin={handleUserSignUp} />
    </div>
  );
}
