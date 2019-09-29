import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";

class Setting extends React.Component {
  render() {
    return (
      <div className="content" style={{ backgroundColor: "#fff" }}>
        <Card
          style={{
            margin: "4% auto",
            fontSize: "32px",
            width: "390px",
            boxShadow: "5px",
            borderRadius: "5px"
          }}
        >
          <CardContent>
            <Typography
              variant="h3"
              component="h2"
              style={{ fontWeight: "500", textAlign: "center" }}
            >
              Settings
            </Typography>

            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item></Grid>
                <Grid item style={{ maxWidth: "330px" }}>
                  <TextField
                    autoFocus
                    margin="normal"
                    id="oldpasss"
                    placeholder="Enter old Password *"
                    type="password"
                    icon="fa fa-lock"
                    InputProps={{
                      style: { fontSize: 16, width: "330px" }
                    }}
                    fullWidth
                    required="true"
                  />
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item></Grid>
                <Grid item>
                  <TextField
                    margin="normal"
                    id="oldpasss"
                    placeholder="Enter New Password *"
                    type="password"
                    icon="fa fa-lock"
                    InputProps={{
                      style: { fontSize: 16, width: "330px" }
                    }}
                    fullWidth
                    required="true"
                  />
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item></Grid>
                <Grid item>
                  <TextField
                    margin="normal"
                    id="oldpasss"
                    placeholder="Enter New Password Again*"
                    type="password"
                    icon="fa fa-lock"
                    InputProps={{
                      style: { fontSize: 16, width: "100%", minWidth: "330px" }
                    }}
                    required="true"
                  />
                </Grid>
              </Grid>
            </div>
          </CardContent>
          <CardActions>
            <Button
              size="medium"
              style={{ margin: "0 auto", fontSize: "16px" }}
            >
              Update Setting
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default Setting;
