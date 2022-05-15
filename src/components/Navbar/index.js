import React from "react";

import useScrollTrigger from "@mui/material/useScrollTrigger";

import { makeStyles } from "@mui/styles";
import { Stack, Avatar, Icon, Typography } from "@mui/material";
import Theme from "../UI/Theme";
import { Link } from "react-scroll";

const scrollOffset = 0;
const scrollDuration = 2000;

const useStyles = makeStyles((theme) => ({
  acitve: {
    "& .MuiAvatar-root": {
      backgroundColor: theme.palette.common.colorPrimary,
      transition: "all 0.5s",
    },
  },
}));

export default function Navbar({ tabInfo }) {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const menu = (
    <React.Fragment>
      <Stack
        direction="row"
        spacing="30px"
        sx={{
          padding: "15px",
          borderRadius: "500px",
          backgroundColor: Theme.palette.common.colorPrimary + "80",
          position: "fixed",
          top: trigger ? "87%" : "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          transition: "all 1s",
          opacity: 0.15,
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        {tabInfo.map((item, i) => (
          <Link
            key={i}
            activeClass={classes.acitve}
            to={item.label}
            smooth={true}
            spy={true}
            duration={scrollDuration}
            offset={scrollOffset}
            spyThrottle={scrollDuration}
          >
            <Avatar
              sx={{
                cursor: "pointer",
                backgroundColor: "transparent",
                position: "relative",
                overflow: "visible",
              }}
            >
              <Icon>{item.icon}</Icon>
              {/* <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 3px)",
                  color: Theme.palette.common.colorPrimary,
                  textTransform: "uppercase",
                  fontSize: "0.6rem",
                }}
              >
                {item.label}
              </div> */}
            </Avatar>
          </Link>
        ))}
      </Stack>
    </React.Fragment>
  );
  return <React.Fragment>{menu}</React.Fragment>;
}
