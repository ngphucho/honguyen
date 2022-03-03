import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  listItemButton: {
    "&.MuiListItemButton-root": {
      "&:hover": {
        backgroundColor: "#424242",
      },
      "&.Mui-selected": {
        background: "black",
        
      },
    },
  },
}));

export default function MyDrawer({ dataList, index }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  const list = (
    <React.Fragment>
      <Box
        sx={{ width: 200 }}
        onClick={() => {
          toggleDrawer(false);
        }}
      >
        <List>
          {dataList
            ? dataList.map((item) => (
                <ListItemButton
                  selected={item.index === index}
                  disabled={item.index === index}
                  className={classes.listItemButton}
                  key={item.index}
                  onClick={() => {
                    navigate(item.to);
                  }}
                >
                  <ListItemText
                    sx={{ textTransform: "uppercase", textAlign: "center" }}
                  >
                    {item.label}
                  </ListItemText>
                </ListItemButton>
              ))
            : null}
        </List>
      </Box>
    </React.Fragment>
  );

  return (
    <div>
      <Button
        color="info"
        onClick={() => {
          setOpen(true);
        }}
        style={{
          position: "fixed",
          left: 0,
          top: "50%",
          transform: "translate(-50%, -50%)",
          // backgroundColor: alpha("#fff", 0.3),
          background: "radial-gradient(#838383, #212121)",
          boxShadow:
            "rgba(136, 165, 191, 0.3) 6px 2px 16px 0px, rgba(255, 255, 255, 0.5) -6px -2px 16px 0px",
          padding: "auto",
          width: 70,
          height: 70,
          borderRadius: "50%",
        }}
      >
        {">>"}
      </Button>
      <Drawer
        PaperProps={{
          style: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#212121",
            color: "#bdbdbd",
          },
        }}
        anchor="left"
        open={open}
        onClose={() => {
          toggleDrawer(false);
        }}
      >
        {list}
      </Drawer>
    </div>
  );
}
