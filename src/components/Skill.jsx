import { Box, Chip, Typography } from "@mui/material";

const data = [
  {
    id: 1,
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP", "SQL"],
  },
  {
    id: 2,
    category: "Frameworks",
    items: ["NestJS", "Express.js", "Next.js", "FastAPI", "Laravel"],
  },
  {
    id: 3,
    category: "Libraries/APIs",
    items: [
      "Node.js",
      "React",
      "React Native",
      "Redux",
      "Socket.IO",
      "WebRTC",
      // "GraphQL",
      "Axios",
    ],
  },
  {
    id: 4,
    category: "Storage",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
  {
    id: 5,
    category: "Cloud & DevOps",
    items: [
      "AWS (S3, EC2, Lambda, Cognito, Scheduler, RDS)",
      "Google Cloud Platform (GCP)",
      "CI/CD (GitHub Actions, GitLab CI, Jenkins)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Serverless",
    ],
  },
  {
    id: 6,
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "RabbitMQ",
      "Mongoose",
      "Nginx",
      "Postman",
      "Swagger",
      "PM2",
      "Jira",
    ],
  },
  {
    id: 7,
    category: "Paradigms",
    items: [
      "Agile",
      "Microservices",
      "Event-Driven Architecture",
      "Domain-Driven Design",
    ],
  },
  {
    id: 8,
    category: "Testing",
    items: ["Jest", "Cypress"],
  },
  {
    id: 9,
    category: "Security",
    items: ["JWT", "OAuth2", "Rate Limiting", "RBAC"],
  },
  {
    id: 10,
    category: "Languages Spoken",
    items: [
      "Bangla (Native)",
      "English (Fluent)",
      "Hindi (Fluent)",
      "Urdu (Conversational)",
    ],
  },
];

const Skill = () => {
  return (
    <Box py={8} id="skills">
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
