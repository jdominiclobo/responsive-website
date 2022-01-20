import React from "react";
import { Button } from "./Button";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";

import "./Pricing.css";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div>
        <div className="pricing--section">
          <div className="pricing-wrapper">
            <h1 className="pricing--heading">
              <div className="pricing--container">
                <Link to="/signup" className="pricing--container-card">
                  <div className="pricing--container-cardInfo">
                    <div className="icon">
                      <FaFire />
                    </div>
                    <h3>Starter</h3>
                    <h4>$6.99</h4>
                    <p>per month</p>
                    <ul className="pricing--container-features">
                      <li>100 transactions</li>
                      <li>2% cashback</li>
                      <li>$10,000 limit</li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="primary">
                      Choose plan
                    </Button>
                  </div>
                </Link>
                <Link to="/signup" className="pricing--container-card">
                  <div className="pricing--container-cardInfo">
                    <div className="icon">
                      <BsXDiamondFill />
                    </div>
                    <h3>Gold</h3>
                    <h4>$15.99</h4>
                    <p>per month</p>
                    <ul className="pricing--container-features">
                      <li>1000 transactions</li>
                      <li>4% cashback</li>
                      <li>$100,000 limit</li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="blue">
                      Choose plan
                    </Button>
                  </div>
                </Link>
                <Link to="/signup" className="pricing--container-card">
                  <div className="pricing--container-cardInfo">
                    <div className="icon">
                      <GiCrystalize />
                    </div>
                    <h3>Diamond</h3>
                    <h4>$22.99</h4>
                    <p>per month</p>
                    <ul className="pricing--container-features">
                      <li>10000 transactions</li>
                      <li>8% cashback</li>
                      <li>Unlimited </li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="primary">
                      Choose plan
                    </Button>
                  </div>
                </Link>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default Pricing;
