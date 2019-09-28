import React, { Component } from "react";
import {Link} from 'react-router-dom';
import '../assests/CSS/Dashboard.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
      <div className="flex-row">
      <Link to="/prospectlist">
      <div className="card1">
       <div className="row">
         <div className="col-md-6">
         <i class="fa fa-users" aria-hidden="true" style={{textAlign:"center",marginTop:"60%",fontSize:"64px",color:"white"}}></i>

         </div>
         <div className="col-md-6">
           <h5 className="cardContent" style={{color:"white"}}>Manage Prospect</h5>
           <p style={{color:"white",fontSize:"36px",marginTop:"40%"}}>
            52
            <i class="fa fa-info-circle" aria-hidden="true"  style={{color:"white",fontSize:"18px",marginLeft:"20%"}}></i>
           </p>
         </div>
        
       </div>
      </div>
    </Link>
      <div className="card2">
      <div className="row">
         <div className="col-md-6">
         <i class="fa fa-folder-open-o" aria-hidden="true" style={{textAlign:"center",marginTop:"60%",fontSize:"64px",color:"white",marginLeft:"15%"}}></i>

         </div>
         <div className="col-md-6">
           <h5 className="cardContent" style={{color:"white"}}>Map Folders</h5>
           <p style={{color:"white",fontSize:"36px",marginTop:"40%"}}>
             1
           <i class="fa fa-info-circle" aria-hidden="true"  style={{color:"white",fontSize:"18px",marginLeft:"20%"}}></i>
           </p>
         </div>
         
       </div>
      </div>
      <div className="card3">
      <div className="row">
         <div className="col-md-6">
         <i class="fa fa-map-o" aria-hidden="true" style={{textAlign:"center",marginTop:"60%",fontSize:"64px",color:"white",marginLeft:"15%"}}></i>


         </div>
         <div className="col-md-6">
           <h5 className="cardContent" style={{color:"white"}}>Create Maps</h5>
           <p style={{color:"white",fontSize:"36px",marginTop:"40%"}}> 29
           <i class="fa fa-info-circle" aria-hidden="true"  style={{color:"white",fontSize:"18px",marginLeft:"20%"}}></i>
         </p>
         </div>
         
       </div>
      </div>
      <div className="card4">
      <div className="row">
         <div className="col-md-6">
         <i class="fa fa-hand-rock-o" aria-hidden="true" style={{textAlign:"center",marginTop:"60%",fontSize:"64px",color:"white",marginLeft:"15%"}}></i>

         </div>
         <div className="col-md-6">
           <h5 className="cardContent" style={{color:"white"}}>Doors Knocked</h5>
           <p style={{color:"white",fontSize:"36px",marginTop:"40%"}}> 12.3K
           <i class="fa fa-info-circle" aria-hidden="true"  style={{color:"white",fontSize:"18px",marginTop:"-25%",marginLeft:"10%"}}></i>
         </p>
         </div>
         
       </div>
      </div>
      <div className="card5">
      <div className="row">
         <div className="col-md-6">
         <i class="fa fa-map-marker" aria-hidden="true" style={{textAlign:"center",marginTop:"60%",fontSize:"64px",color:"white",marginLeft:"15%"}}></i>


         </div>
         <div className="col-md-6">
           <h5 className="cardContent" style={{color:"white"}}>Checkins</h5>
           <p style={{color:"white",fontSize:"36px",marginTop:"40%"}}>77
           <i class="fa fa-info-circle" aria-hidden="true"  style={{color:"white",fontSize:"18px",marginLeft:""}}></i>
           </p>
         </div>
         
       </div>
      </div>
      <div className="card6">
      <div className="row">
         <div className="col-md-6">
         <img src="https://image.flaticon.com/icons/svg/1401/1401914.svg" style={{width:"64px",height:"64px",marginTop:"60%",marginLeft:"15%"}}/>

         </div>
         <div className="col-md-6">
           <h5 className="cardContent" style={{color:"white"}}>Team</h5>
           <p style={{color:"white",fontSize:"36px",marginTop:"40%"}}> 4
           <i class="fa fa-info-circle" aria-hidden="true"  style={{color:"white",fontSize:"18px",marginLeft:"20%"}}></i>
           </p>
         </div>
         
       </div>
      </div>
      <div className="card7" style={{marginBottom:"5%"}}>
      <div className="row">
         <div className="col-md-6">
         <i class="fa fa-user-plus" aria-hidden="true" style={{textAlign:"center",marginTop:"60%",fontSize:"64px",color:"white",marginLeft:"15%"}}></i>

         </div>
         <div className="col-md-6">
           <h5 className="cardContent" style={{color:"white"}}>Follow-Up</h5>
           <p style={{color:"white",fontSize:"36px",marginTop:"40%"}}> 2
           <i class="fa fa-info-circle" aria-hidden="true"  style={{color:"white",fontSize:"18px",marginLeft:"20%"}}></i>
         </p>
         </div>
         
       </div>
      </div>
     
    </div>
    </div>
    
    
    
    );
  }
}
