import React, { Component } from "react";

import EditProfile from "./EditProfile";

import AccountchangePassword from "./AccountchangePassword";
import AccountChangeadmin from "./AccountChangeadmin";
import AccountCard from "./Subscribe";
import SubscribeList from "./SubscribeList";
import Button from '@material-ui/core/Button';
export default class Account extends Component {
  render() {
    return (
      <>
        <div
          className="content"
          style={{ background: "linear-gradient(to right, #6a82fb, #fc5c7d)" }}
        >
          <div className="userDetail" style={{ marginLeft: "25%" }}>
            <p>
              <i className="fa fa-user" id="user" aria-hidden="true"></i>
              <span className="details">Amarjeet Singh</span>
            </p>
            <p>
              <i className="fa fa-envelope-o" id="email" aria-hidden="true">
                <span className="detail">singhamarjeet0045@gmail.com</span>
              </i>
            </p>
            <p>
              <i className="fa fa-phone" id="phone" aria-hidden="true">
                <span className="detail1">8882352644</span>
              </i>
            </p>
            <p>
              <i className="fa fa-map-marker" id="location" aria-hidden="true">
                <span className="detail2">Faridabad</span>
              </i>
            </p>
            <EditProfile />
          </div>
        </div>
        <div className="">
        <Button   color="secondary" style={{marginLeft:"0.1%",fontSize:"20px",}}>My Subscription</Button>
       
        </div>
        <hr />
        <AccountchangePassword />
        <p style={{ marginTop: "1.5%" }}>
          <AccountChangeadmin />
        </p>
        <p>
          <AccountCard />{" "}
        </p>
        <p>
          <SubscribeList />
        </p>
      </>
    );
  }
}
