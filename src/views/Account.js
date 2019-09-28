import React, { Component } from 'react';

import EditProfile from './EditProfile'

export default class Account extends Component {
    render() {
        return (
            <>
            <div className="content" style={{background:"linear-gradient(to right, #6a82fb, #fc5c7d)"}}>
                <div className = "userDetail" style={{marginLeft:"25%"}} >
                    <p><i className="fa fa-user" id="user" aria-hidden="true"  ></i><span className="details">Amarjeet Singh</span></p>
                    <p><i className="fa fa-envelope-o" id="email" aria-hidden="true"><span className="detail">singhamarjeet0045@gmail.com</span></i></p>
                    <p><i className="fa fa-phone" id="phone"aria-hidden="true"><span className="detail1">8882352644</span></i></p>
                    <p><i className="fa fa-map-marker" id="location" aria-hidden="true"><span className="detail2">Faridabad</span></i></p>
                    <EditProfile />
                </div>     
            </div>
            </>
        )
    }
}
