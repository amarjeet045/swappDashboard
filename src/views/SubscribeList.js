import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import { Row, Col } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
    overflowX: "auto",
    fontSize: "20px",
    marginRight: "5px"
  },
  table: {
    minWidth: 450
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(2)
  }
}));

function createData(name, amount, renewal) {
  return { name, amount, renewal };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0)
];

export default function SubscriptionList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [nestedOpen, setnestedOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  function handlenestedOpen() {
    setnestedOpen(true);
  }
  function handlenestedClose() {
    setnestedOpen(false);
  }

  return (
    <>
      <div style={{ background: "#fff" }}>
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
              <img src ="https://image.flaticon.com/icons/svg/1679/1679396.svg" style={{height:"40px",width:"40px",marginTop:"15%",marginLeft:"10%"}}/>
              </Col>
              <Col lg={8} xs={8}>
                <h6 style={{fontWeight:"600"}}>Subscription Details
                <span
                  variant="outlined"
                  color="primary"
                  onClick={handleClickOpen}
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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          modal={true}
          repositionOnUpdate={false}
          autoDetectWindowHeight={false}
          autoScrollBodyContent={false}
          contentStyle={{
            width: "100%",
            maxWidth: "450px",
            maxHeight: "100% !important"
          }}
          bodyStyle={{
            maxHeight: "100% !important"
          }}
          style={{
            paddingTop: "0 !important",
            marginTop: "-85px !important",
            bottom: "0 !important",
            overflow: "scroll !important",
            height: "auto !important"
          }}
        >
          <DialogTitle
            id="form-dialog-title"
            style={{ color: "#01C687", background: "gray" }}
          >
            List of Subscription
          </DialogTitle>
          <DialogContent style={{ color: "#01C687" }}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontSize: "15px" }}>Plan Name</TableCell>
                  <TableCell align="right" style={{ fontSize: "15px" }}>
                    Amount
                  </TableCell>
                  <TableCell align="right" style={{ fontSize: "15px" }}>
                    Renewal date
                  </TableCell>
                  <TableCell align="right" style={{ fontSize: "15px" }}>
                    Remove
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontSize: "16px" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: "16px" }}>
                      {row.amount}
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: "16px" }}>
                      {row.renewal}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={handlenestedOpen}
                        color="secondary"
                        style={{ fontSize: "16px" }}
                      >
                        Cancel
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
          <DialogActions></DialogActions>
          <div>
            <Dialog
              open={nestedOpen}
              onClose={handlenestedClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are You Sure ?"}
              </DialogTitle>

              <DialogActions>
                <Button onClick={handlenestedClose} color="primary">
                  No
                </Button>
                <Button onClick={handlenestedClose} color="secondary" autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Dialog>
      </div>
    </>
  );
}
