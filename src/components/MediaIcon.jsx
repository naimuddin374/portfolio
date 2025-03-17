import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
const MediaIcon = () => {
  const mediaIcons = [
    {
      id: 1,
      icon: <GitHubIcon sx={{ fontSize: "40px" }} />,
      link: "https://github.com",
    },
    {
      id: 2,
      icon: <LinkedInIcon sx={{ fontSize: "40px" }} />,
      link: "https://linkedin.com",
    },
    {
      id: 3,
      icon: <SchoolIcon sx={{ fontSize: "40px" }} />,
      link: "https://school.com",
    },
    {
      id: 4,
      icon: <EmailIcon sx={{ fontSize: "40px" }} />,
      link: "https://gmail.com",
    },
  ];

  return (
    <Box py={3} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
      {mediaIcons.map((item) => (
        <Typography component={"a"} href={item.link} target="_blank" key={item.id}> 
          <IconButton
            key={item.id}
            size="large"
            sx={{
              bgcolor: "#007bff",
              color: "#fff",
              ":hover": {
                bgcolor: "#196fcc",
              },
            }}
          >
            {item.icon}
          </IconButton>
        </Typography>
      ))}
    </Box>
  );
};

export default MediaIcon;
