import React from "react";
import { loginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={loginBg} alt="Register Background" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input
          type="email"
          label="Email Address"
          name="email"
          placeholder="your@email.com"
        />
        <Gap mb={18} />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="your password"
        />
        <Gap mb={30} />

        <Button type="button" title="login" />

        <Link title="don't have an account? register" />
      </div>
    </div>
  );
};

export default Login;
