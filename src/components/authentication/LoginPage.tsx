import { useContext, useState } from "react";
import Login from "./Login";
import { userLoginIn } from "../../utilities/firebase";
import UserContext from "../UserProvider";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUserLogin = async (email: string, password: string) => {
    const {user, error} = await userLoginIn(email, password);
    if (!error) {
      setUser(user);
      navigate("/home");
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
      <Login onUserLogin={handleUserLogin} />
    </div>
  );
}
