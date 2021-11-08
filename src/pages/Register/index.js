import React from "react";
import { registerBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={registerBg} alt="Register Background" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input
          type="text"
          label="Full Name"
          name="full_name"
          placeholder="your full name"
        />
        <Gap mb={18} />
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

        <Button type="button" title="register" />

        <Link title="back to login" />
      </div>
    </div>
  );
};

export default Register;
