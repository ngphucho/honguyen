import {
  Button,
  Container,
  Fab,
  FormGroup,
  Grid,
  Input,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Contact() {
  return (
    <div className="contact">
      <Container>
        <Grid container>
          {/* Left Column */}
          <Grid item>
            <div>
              <Typography variant="h4">Contact Me</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Số 33, khu 2, ấp Phước Hội, xã Long Hưng, Biên Hòa, Đồng Nai
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText>ngphucho@gmail.com</ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText>0356046662</ListItemText>
                </ListItem>
              </List>
            </div>
          </Grid>
          {/* Right column */}
          <Grid item>
            <Typography variant="h4">Get in Touch</Typography>
            <Typography variant="caption">
              Feel free to drop me a line below!
            </Typography>
            <form>
              <FormGroup>
                <Input type="text" />
              </FormGroup>
              <FormGroup>
                <Input type="email" />
              </FormGroup>
              <FormGroup>
                <TextareaAutosize />
              </FormGroup>
              <Fab variant="extended" color="primary">
                Send
              </Fab>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
