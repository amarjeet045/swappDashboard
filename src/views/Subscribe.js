import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent
} from "react-mdl";
import { Row, Col } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";

export default class AccountCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
        <Card
          style={{
            background: "white",
            maxWidth: "350px",
            boxShadow: "5px 5px 5px 5px gray",
            margin: "0 auto",
            height:"65px"
          }}
        >
          <Grid fluid>
            <Row>
              <Col lg={4} xs={4}>
              <img src ="https://image.flaticon.com/icons/svg/1086/1086741.svg" style={{height:"40px",width:"40px",margin:"auto",marginTop:"15%",marginLeft:"10%"}}/>
              </Col>
              <Col lg={8} xs={8}>
                <h6 style={{fontWeight:"600"}}>Subscribe
                <span
                  variant="outlined"
                  color="primary"
                  onClick={this.handleOpenDialog}
                  style={{
                    fontSize: "30px",
                    float:"right",
                    marginRight:"4%"
                  }}
                >
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
                </h6>
              </Col>
            </Row>
          </Grid>
        </Card>
        <Dialog open={this.state.openDialog} style={{ minWidth: "350px" }}>
          <i
            className="fa fa-times-circle"
            aria-hidden="true"
            onClick={this.handleCloseDialog}
            style={{ fontSize: "18px", marginLeft: "95%" }}
          ></i>
          <DialogTitle
            id="form-dialog-title"
            style={{ color: "#01C687", textAlign: "center" }}
          >
            <h6>New Church Password</h6>
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="normal"
              id="name"
              placeholder="Card Number"
              inputProps={{
                style: { fontSize: 16 }
              }}
              type="text"
              fullWidth
            />

            <TextField
              margin="normal"
              id="namecvv"
              placeholder="CVV"
              inputProps={{
                style: { fontSize: 16 }
              }}
              type="password"
              fullWidth
            />

            <TextField
              margin="normal"
              id="namec"
              placeholder="Name on Card"
              inputProps={{
                style: { fontSize: 16 }
              }}
              type="text"
              fullWidth
            />

            <TextField
              margin="normal"
              id="nameexp"
              placeholder="Password"
              inputProps={{
                style: { fontSize: 16 }
              }}
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              type="button"
              onClick={this.handleCloseDialog}
              style={{ margin: "auto" }}
            >
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
