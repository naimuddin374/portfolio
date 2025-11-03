import { Box, Chip, Typography } from "@mui/material";

const data = [
  {
    id: 1,
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    id: 2,
    category: "Frameworks",
    items: [
      "NestJS",
      "Express.js",
      "Next.js",
      "FastAPI",
      "Laravel",
      "CodeIgniter",
    ],
  },
  {
    id: 3,
    category: "Libraries/APIs",
    items: [
      "Node.js",
      "React",
      "Redux",
      "Socket.IO",
      "WebRTC",
      "OpenAI API",
      "LangChain",
    ],
  },
  {
    id: 4,
    category: "Storage",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Vector Databases",
      "Elasticsearch",
    ],
  },
  {
    id: 5,
    category: "Platforms",
    items: ["AWS", "GCP"],
  },
  {
    id: 6,
    category: "Architecture & Paradigms",
    items: [
      "Microservices",
      "Event-Driven Design",
      "RAG (Retrieval-Augmented Generation)",
      "Clean Architecture",
      "Agile Development",
    ],
  },
  {
    id: 7,
    category: "Tools",
    items: [
      "Docker",
      "Git",
      "GitHub Actions",
      "Nginx",
      "PM2",
      "RabbitMQ",
      "CI/CD Pipelines",
      "Postman",
      "Swagger",
    ],
  },
  {
    id: 8,
    category: "Testing",
    items: [
      "Jest",
      "Cypress",
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing",
    ],
  },
  {
    id: 9,
    category: "Security",
    items: [
      "JWT",
      "OAuth2",
      "Rate Limiting",
      "RBAC",
      "Encryption",
      "Decryption",
    ],
  },
  {
    id: 10,
    category: "Languages Spoken",
    items: [
      "English (Fluent)",
      "Bangla (Native)",
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
