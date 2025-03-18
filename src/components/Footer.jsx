import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Typography } from "@mui/material";
import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bgcolor={"#101117"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      id="contact"
    >
      <Typography color="#ffcc00">
        Naim Uddin © {currentYear} All rights reserved
      </Typography>
      <Box display={"flex"} alignItems={"center"} gap={"60px"}>
        <Typography
          color="#fff"
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          component={"a"}
          href="https://www.linkedin.com/in/naimuddin374/"
          target="_blank"
        >
          <LinkedInIcon sx={{ fontSize: "20px" }} />
          naimuddin374
        </Typography>
        <Typography
          color="#fff"
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          component={"a"}
          href="mailto:naimuddin374@gmail.com"
        >
          <MailIcon sx={{ fontSize: "20px" }} />
          naimuddin374@gmail.com
        </Typography>
        <Typography
          color="#fff"
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          href="tel:+8801746767374"
          component={"a"}
        >
          <CallIcon sx={{ fontSize: "20px" }} />
          +880 1746-767374
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
