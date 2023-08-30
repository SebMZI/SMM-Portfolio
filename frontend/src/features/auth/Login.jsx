import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  const handleSubmit = async (e) => {
    console.log(user, pwd);
    e.preventDefault();
    try {
      const userData = await login({ user: user, password: pwd }).unwrap();
      console.log(userData);
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      navigate("/dashboard");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <main className="login">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="login-title">Sign In</h1>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={userRef}
            value={user}
            onChange={handleUserInput}
            autoComplete="off"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pwd}
            required
            onChange={handlePwdInput}
          />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={errMsg ? "error" : "offscreen"} ref={errRef}>
            {errMsg}
          </div>
        )}

        <button className="signin-btn" type="submit">
          Sign In
        </button>
      </form>
    </main>
  );
};

export default Login;
