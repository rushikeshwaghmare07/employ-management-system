import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email.");
      return false;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Logging in with email: ", email);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-2 rounded-xl p-20 border-emerald-600">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 text-xl bg-transparent outline-none py-3 px-5 rounded-full placeholder:text-gray-500"
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 text-xl bg-transparent outline-none py-3 px-5 mt-3 rounded-full placeholder:text-gray-500"
            type="password"
            placeholder="Password"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          <button className="text-white border-none hover:bg-emerald-700 font-semibold text-lg bg-emerald-600 outline-none py-2 px-8 w-full rounded-full mt-7">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
