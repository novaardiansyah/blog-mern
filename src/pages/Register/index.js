import React from "react";
import { registerBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./style/register.css";

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
        <Gap height={18} />
        <Input
          type="email"
          label="Email Address"
          name="email"
          placeholder="your@email.com"
        />
        <Gap height={18} />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="your password"
        />
        <Gap height={30} />

        <Button type="button" title="register" />

        <Link title="back to login" />
        <Gap height={70} />
      </div>
    </div>
  );
};

export default Register;
