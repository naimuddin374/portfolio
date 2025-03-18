import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const data = [
  {
    id: 1,
    category: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    id: 2,
    category: "Frameworks",
    items: ["NestJS", "Express.js", "Next.js", "gRPC"],
  },
  {
    id: 3,
    category: "Libraries/APIs",
    items: ["Node.js", "React", "Redux", "Socket.IO", "WebRTC"],
  },
  {
    id: 4,
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Lucidchart",
      "Slack",
      "Notion",
      "Jira",
      "Mongoose",
      "Nginx",
      "PM2",
    ],
  },
  {
    id: 5,
    category: "Paradigms",
    items: ["Agile", "Design Patterns", "Microservices"],
  },
  {
    id: 6,
    category: "Storage",
    items: ["MongoDB", "PostgreSQL", "MySQL", "JSON"],
  },
  {
    id: 7,
    category: "Platforms",
    items: ["AWS", "Google Cloud", "Firebase", "Heroku", "DigitalOcean"],
  },
];

const Skill = () => {
  return (
    <Box py={3} id="skills">
      <Typography mb={3} variant="h4">
        Skills
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
              {item.category}
            </Typography>
            <Chip
              sx={{
                borderRadius: 0,
                bgcolor: "#ffebeb",
                fontSize: "16px",
                textTransform: "capitalize",
                fontWeight: 400,
              }}
              label={item.items.join(", ")}
            />
            {/* <Typography display={"block"} component={"i"}>
              {item.items.join(", ")}
            </Typography> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skill;
