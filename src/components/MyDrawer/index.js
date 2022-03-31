import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Link } from "react-scroll";

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

export default function MyDrawer({
  dataList,
  index,
  isSpy,
  setIsSpy,
  setValue,
  setName,
}) {
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
                >
                  <ListItemText
                    sx={{ textTransform: "uppercase", textAlign: "center" }}
                  >
                    <Link
                      to={item.label}
                      smooth={true}
                      spy={true}
                      duration={600}
                      offset={-64}
                      onSetActive={() => {
                        setName(item.label);
                        setValue(item.index);
                      }}
                      onClick={() => {
                        setValue(item.index);
                        setName(item.label);
                        setIsSpy(false);
                        setTimeout(() => {
                          setIsSpy(true);
                        }, 1000);
                      }}
                    >
                      {item.label}
                    </Link>
                  </ListItemText>
                </ListItemButton>
              ))
            : null}
        </List>
      </Box>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <IconButton
        color="secondary"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
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
    </React.Fragment>
  );
}
