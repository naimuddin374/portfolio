import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const ProfessionalExperience = () => {
  const educationList = [
    {
      id: 1,
      header: "Graduate Research Assistant",
      date: "AAugust 2024 – Present",
      clg: "Texas A&M University",
      title: "College Station, TX, United States",
    },
    {
      id: 2,
      header: "DevOps Engineer (Identity and Access Management)",
      date: "February 2022 – May 2024",
      clg: "Prairie View A&M University",
      title: "Prairie View, TX, United States",
    },
  ];

  return (
    <Box py={3}>
      <Typography mb={3} variant="h4">
        Professional Experience
      </Typography>

      <Box
        pl={3}
        borderLeft={1}
        borderColor={"red"}
        sx={{ borderWidth: "2px" }}
        position={"relative"}
      >
        {educationList.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "flex-start",
              position: "relative",
              top: "-3px",
              marginBottom: "24px",
            }}
          >
            <Typography
              fontSize={16}
              fontWeight={700}
              textTransform={"uppercase"}
              component={"h3"}
              sx={{
                ":before": {
                  content: '""',
                  position: "absolute",
                  left: "-31px",
                  backgroundColor: " #fe4747",
                  width: "13px",
                  height: "13px",
                  borderRadius: "50%",
                  transform: "translate(-0.5px, 0.2em)",
                },
              }}
            >
              {item.header}
            </Typography>
            <Chip
              sx={{
                borderRadius: 0,
                bgcolor: "#ffebeb",
                fontSize: "16px",
                textTransform: "capitalize",
                fontWeight: 400,
              }}
              label={item.date}
            />
            <Typography display={"block"} component={"i"}>
              <Typography component={"strong"} fontWeight={700}>
                {item.clg}
              </Typography>
              , {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProfessionalExperience;
