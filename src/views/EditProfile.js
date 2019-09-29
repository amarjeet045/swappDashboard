import React, { Component } from 'react'
import {Button ,Dialog,DialogActions,DialogTitle,DialogContent} from 'react-mdl';
import {TextField} from '@material-ui/core';
export default class EditProfile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
    handleOpenDialog() {
        this.setState({
          openDialog: true
        });
      }
    
      handleCloseDialog() {
        this.setState({
          openDialog: false
        });
      }
    render() {
        return (
            <div>
        <Button  onClick={this.handleOpenDialog} raised ripple  style={{borderRadius:"50%",marginLeft:"92%",marginBottom:"-2.1%",backgroundColor:"black"}}><i className="fa fa-pencil" aria-hidden="true"  style={{color:"white"}}></i>
</Button>
        <Dialog open={this.state.openDialog} style={{minWidth:"350px"}} >
        <i className="fa fa-times-circle" aria-hidden="true" onClick={this.handleCloseDialog} style={{fontSize:"18px",marginLeft:"95%"}}></i>
        <DialogTitle id="form-dialog-title" style={{color:"#01C687",textAlign:'center'}}><h6>Edit Profile</h6></DialogTitle>
        <DialogContent >
          
          <TextField
            autoFocus
            margin="dense"
            id="standard-name"
            label="Email"
            inputProps={{
              style: {fontSize: 16} 
            }}
            type="email"
            fullWidth
            
          />
          <TextField
            margin="normal"
            id="namecvv"
            label="Church Name"
            inputProps={{
              style: {fontSize: 16} 
            }}
            type="text"
            fullWidth
            
          />
         
          <TextField
            margin="normal"
            id="nameexp"
            label="Full Address"
            inputProps={{
              style: {fontSize: 16} 
            }}
            type="text"
            fullWidth
          />
          <TextField
            margin="normal"
            id="namezip"
            label="Zip Code"
            inputProps={{
              style: {fontSize: 16} 
            }}
            type="text"
            fullWidth
           
          />
          <TextField
            margin="normal"
            id="namephone"
            label="Phone"
            inputProps={{
              style: {fontSize: 16} 
            }}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
            <Button type='button' onClick={this.handleCloseDialog} style={{margin:"auto"}}>Update</Button>
        
          </DialogActions>
 
        </Dialog>
      </div>
        )
    }
}
