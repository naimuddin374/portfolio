import { Box, Chip, Typography } from "@mui/material";

const data = [
  {
    id: 1,
    name: "Vendidit",
    title: "AI-powered marketplace for resellers in the secondary market",
    url: "https://www.vendidit.com",
    achievements: [
      "Architected AWS infrastructure with CI/CD and autoscaling for millions of requests.",
      "Built secure token-based auth with AWS Cognito and NextJS/NestJS bulk bidding, reducing buyer time by 40%.",
      "Optimized queries for 3x faster APIs; automated fulfillment with AWS Lambda.",
    ],
  },
  {
    id: 2,
    name: "Skribe.ai",
    title: "Non-stenographic platform for legal deposition analysis",
    url: "https://live.skribe.ai",
    achievements: [
      "Designed Node.js/PostgreSQL microservices for scalable transcript processing.",
      "Developed ReactJS UI for text-video sync, enhancing legal accessibility.",
      "Improved performance with Redis caching, cutting processing time by 30%.",
    ],
  },
  {
    id: 3,
    name: "Rabbithole Prime",
    title: "Live sports and entertainment streaming platform",
    url: "https://www.rabbitholebd.com",
    achievements: [
      "Built ReactPlayer-based video player, boosting engagement by 30%.",
      "Integrated real-time subscriptions, increasing retention by 25%.",
      "Optimized streaming for low-bandwidth networks with dynamic quality.",
    ],
  },
  {
    id: 4,
    name: "Bengal Meat Qurbani",
    title: "E-commerce platform for halal meat products",
    url: "https://qurbani.bengalmeat.com",
    achievements: [
      "Developed PHP/Node.js platform with PostgreSQL, boosting engagement by 35%.",
      "Optimized APIs for catalog and payment processing, reducing transaction time by 20%.",
      "Implemented CI/CD and secure payment gateways for reliability.",
    ],
  },
  {
    id: 5,
    name: "Runners Automobile",
    title: "E-commerce platform for motorcycle and three-wheeler sales",
    url: "http://runnerautomobiles.com",
    achievements: [
      "Built responsive PHP/JavaScript frontend, improving UX and engagement by 35%.",
      "Optimized Node.js APIs for order processing, cutting transaction time by 20%.",
      "Streamlined CI/CD deployments for high-traffic reliability.",
    ],
  },
  {
    id: 6,
    name: "ShowTalent",
    title:
      "All Society Business & Economy Science & Technology Arts & Culture Sports & Fitness Religion. Post Your Content Here.",
    url: "https://www.showtalent.org",
    achievements: [
      "Built responsive PHP/JavaScript frontend, improving UX and engagement by 35%.",
      "Optimized Node.js APIs for order processing, cutting transaction time by 20%.",
      "Streamlined CI/CD deployments for high-traffic reliability.",
    ],
  },
  {
    id: 7,
    name: "Lubyc",
    title:
      "Lubyc's innovative all-in-one platform is specifically designed to meet your business's unique needs, fostering optimal growth through enhanced efficiency and productivity.",
    url: "https://www.lubyc.com",
    achievements: [
      "Built responsive PHP/JavaScript frontend, improving UX and engagement by 35%.",
      "Optimized Node.js APIs for order processing, cutting transaction time by 20%.",
    ],
  },
];

const Projects = () => {
  return (
    <Box py={8} id="works">
      <Typography mb={3} variant="h4">
        Recent Works
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
              {item.name}
            </Typography>
            <Chip
              sx={{
                borderRadius: 0,
                bgcolor: "#ffebeb",
                fontSize: "16px",
                textTransform: "capitalize",
                fontWeight: 400,
              }}
              label={item.title}
            />
            <Box component="ul" sx={{ pl: 2, mt: 1 }}>
              {item.achievements.map((achievement, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{ mb: 0.5, lineHeight: 1.6 }}
                >
                  {achievement}
                </Typography>
              ))}
            </Box>
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
