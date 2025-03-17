import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Typography } from "@mui/material";
import React from "react";
const Footer = () => {
  return (
    <Box
      bgcolor={"#101117"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
    >
      <Typography color="#ffcc00">
        Shaykh Siddique © 2024 All rights reserved
      </Typography>
      <Box display={"flex"} alignItems={"center"} gap={"60px"}>
        <Typography
          color="#fff"
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          component={"a"}
          href=""
          target="_blank"
        >
          <LinkedInIcon sx={{ fontSize: "20px" }} />
          shaykhsiddique
        </Typography>
        <Typography
          color="#fff"
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
        >
          <MailIcon sx={{ fontSize: "20px" }} />
          shaykhsiddiqee@gmail.com
        </Typography>
        <Typography
          color="#fff"
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
        >
          <CallIcon sx={{ fontSize: "20px" }} />
          +1 (979) 645-0271
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
