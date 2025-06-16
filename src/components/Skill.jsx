import { Box, Chip, Typography } from "@mui/material";

const data = [
  {
    id: 1,
    category: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    id: 2,
    category: "Frameworks",
    items: ["NestJS", "Express.js", "Next.js", "gRPC", "Laravel"],
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
      "GraphQL",
      "Apollo",
      "Axios",
    ],
  },
  {
    id: 4,
    category: "Tools",
    items: [
      "AI Integration",
      "Cursor AI",
      "Developer Workflow Automation",
      "Docker",
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "RabbitMQ",
      "Mongoose",
      "Nginx",
      "Terraform",
      "Kubernetes",
      "Slack",
      "PM2",
      "Notion",
      "Jira",
      "Lucidchart",
      "Postman",
      "Swagger",
      "Whimsical",
    ],
  },
  {
    id: 5,
    category: "Paradigms",
    items: [
      "Agile",
      "Design Patterns",
      "Microservices",
      "Event-Driven Architecture",
      "Domain-Driven Design (DDD)",
    ],
  },
  {
    id: 6,
    category: "Storage",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    id: 7,
    category: "Cloud & DevOps",
    items: [
      "AWS (S3, EC2, Lambda, RDS)",
      "Google Cloud Platform (GCP)",
      "CI/CD (GitHub Actions, GitLab CI, Jenkins)",
      "Serverless",
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
    items: [
      "JWT",
      "OAuth2",
      "OWASP Security Best Practices",
      "Rate Limiting",
      "RBAC (Role-Based Access Control)",
    ],
  },
  {
    id: 10,
    category: "Algorithms & Data Structures",
    items: [
      "DSA (Data Structures & Algorithms)",
      "Dynamic Programming",
      "Sorting & Searching",
      "Concurrency & Multithreading",
    ],
  },
  {
    id: 11,
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
