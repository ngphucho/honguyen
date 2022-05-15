import React from "react";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import theme from "../../components/UI/Theme";
import { Link } from "@mui/material";
import { scroller, animateScroll, Link as LinkScroll } from "react-scroll";

const scrollOffset = 0;
const scrollDuration = 2000;

export default function Follow() {
  return (
    <React.Fragment>
      <Stack
        spacing={2}
        direction="column"
        sx={{ position: "absolute", left: { xs: "5%", sm: "10%" }, bottom: 30 }}
      >
        <Link href="https://www.facebook.com/nguyen.phuc.ho.91" target="_blank">
          <FacebookIcon sx={{ color: theme.palette.common.colorPrimary }} />
        </Link>
        <Link href="https://github.com/ngphucho" target="_blank">
          <GitHubIcon sx={{ color: theme.palette.common.colorPrimary }} />
        </Link>
        <MoreVertIcon sx={{ color: theme.palette.common.colorPrimary }} />
      </Stack>
      <Stack
        spacing={1}
        sx={{
          position: "absolute",
          alignItems: "center",
          right: { xs: "5%", sm: "10%" },
          bottom: 30,
          transform: "translateX(calc(50% - 6px))",
        }}
      >
        <div
          onClick={() => {
            scroller.scrollTo("about", {
              smooth: true,
              duration: scrollDuration,
              offset: scrollOffset,
            });
          }}
          style={{
            cursor: "pointer",
            fontSize: 12,
            color: theme.palette.common.colorPrimary,
            transform: "rotate(90deg) translateX(calc(-50% + 12px))",
          }}
        >
          SCROLL DOWN
        </div>
        <KeyboardArrowDownIcon
          sx={{ color: theme.palette.common.colorPrimary, fontSize: 12 }}
        />
      </Stack>
    </React.Fragment>
  );
}
