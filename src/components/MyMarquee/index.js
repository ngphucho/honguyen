import React, { Fragment } from "react";
import Marque from "react-fast-marquee";
import { Box, ListItemAvatar, Avatar, ListItemText, Icon } from "@mui/material";

const data = [
  { text: "HTML", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { text: "CSS", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  {
    text: "JAVASCRIPT",
    icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  { text: "REACTJS", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  {
    text: "MATERIAL UI",
    icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    text: "BOOTSTRAP",
    icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
];

export default function MyMarquee() {
  return (
    <Fragment>
      <Marque
        pauseOnHover={true}
        gradient={false}
        style={{ overflow: "hidden" }}
      >
        {data.map((item) => (
          <Box
            sx={{
              cursor: 'default',
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0px 50px",
              color: "#fff",
              fontFamily: "'Archivo Black', sans-serif",
              minWidth: 200,
              height: 50,
              fontSize: 20,
              boxSizing: "border-box",
              transition: 'filter 1.5s',
              filter: "grayscale(100%)",
              "&:hover": { filter: "grayscale(0%)" },
            }}
          >
            <Icon
              sx={{
                textAlign: "center",
                pr: 1,
              }}
            >
              <img src={item.icon} alt="mui icon" style={{ height: "100%" }} />
            </Icon>
            {item.text}
          </Box>
        ))}
      </Marque>
    </Fragment>
  );
}
