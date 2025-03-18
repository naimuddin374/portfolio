import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const data = [
  {
    id: 1,
    title: "AI-Based Auction Bidding Platform",
    date: "Vendidit",
    description:
      "An AI-driven auction bidding platform where sellers create auctions and buyers place bids. The platform uses AI to predict product prices and suggest optimal bidding strategies for buyers.",
    url: "https://www.vendidit.com",
  },
  {
    id: 2,
    title: "Online Depuzation System",
    date: "Skaribe.ai",
    description:
      "An online depuzation platform where users can create legal matters and cases, assigning them to lawyers. AI is used to predict case costs and provide suggestions for users.",
    url: "https://www.skribe.ai",
  },
  {
    id: 3,
    title: "Rabbithole Prime OTT Platform",
    date: "Rabbithole Prime",
    description:
      "An OTT platform offering movies, web series, and more. It includes a subscription management system with daily, weekly, monthly, and yearly options.",
    url: "https://www.rabbitholebd.com",
  },
  {
    id: 4,
    title:
      "Runner Automobiles: Two & Three-Wheeler Sales, Spare Parts, and Service Management with EMI System",
    date: "Runner Automobiles",
    description:
      "An online platform for purchasing two and three-wheelers, spare parts, and services, including an EMI system for financing.",
    url: "http://runnerautomobiles.com",
  },
  {
    id: 5,
    title: "Online Cattle Hut for Qurabni Eid in Bangladesh",
    date: "Bengal Meet Qurabni",
    description:
      "An online platform for purchasing cattle and managing delivery for Qurabni Eid in Bangladesh.",
    url: "https://qurbani.bengalmeat.com",
  },
];

const Projects = () => {
  return (
    <Box py={3} id="projects">
      <Typography mb={3} variant="h4">
        Projects
      </Typography>

      <Box
        ml={3.5}
        pl={3}
        borderLeft={1}
        borderColor={"red"}
        sx={{ borderWidth: "2px" }}
        position={"relative"}
      >
        {data.map((item) => (
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
              {item.title}
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
              {item.description}
            </Typography>
            <Typography component={"i"}>
              URL:{" "}
              <Typography
                sx={{ textDecoration: "none", color: "#007bff" }}
                component={"a"}
                href={item.url}
                target="_blank"
              >
                {item.url}
              </Typography>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
