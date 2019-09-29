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

export default class AccountChangeadmin extends Component {
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
          <Grid>
            <Row>
              <Col lg={4} xs={4}>
              <img src ="https://image.flaticon.com/icons/svg/2135/2135686.svg" style={{height:"40px",width:"40px",marginTop:"15%",marginLeft:"10%"}}/>
              </Col>
              <Col lg={8} xs={8}>
                <h6 style={{ fontSize: "14px", fontWeight: "600" }}>
                  Church Joining Password
                  <span
                    variant="outlined"
                    color="primary"
                    onClick={this.handleOpenDialog}
                    style={{
                      fontSize: "30px",
                      float: "right",
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
        <Dialog open={this.state.openDialog} style={{ minWidth: "200px" }}>
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
              margin="normal"
              id="password"
              label="New Password"
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
