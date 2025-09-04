import { Box, Chip, Typography } from "@mui/material";

const data = [
  {
    id: 1,
    title: "Sr. Software Engineer",
    date: "Jan 2023 – Present",
    company: "Green Pants Studio",
    address: "412 Thunderbay Dr., Georgetown TX 78626, United States.",
    type: "Remote",
    url: "https://www.greenpantsstudio.com",
    achievements: [
      "Led team to deliver Vendidit auction platform features, reducing buyer interaction time by 40%.",
      "Architected full-stack apps with AWS, NextJS, and NestJS for scalable, million-request systems.",
      "Streamlined CI/CD and Docker deployments, optimizing DB queries for 3x faster APIs.",
    ],
  },
  {
    id: 1,
    title: "Senior Software Engineer",
    date: "Jan 2023 – Present",
    company: "Green Pants Studio",
    address: "412 Thunderbay Dr., Georgetown TX 78626, United States.",
    type: "Remote",
    url: "https://www.greenpantsstudio.com",
    achievements: [
      "Led team to deliver Vendidit auction platform features, reducing buyer interaction time by 40%.",
      "Architected full-stack apps with AWS, NextJS, and NestJS for scalable, million-request systems.",
      "Streamlined CI/CD and Docker deployments, optimizing DB queries for 3x faster APIs.",
    ],
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    date: "Aug 2022 – Dec 2022",
    company: "Skribe.ai",
    address:
      "13215 Bee Cave Parkway, Suite A220 Austin, Texas 78738, United States.",
    type: "Remote",
    url: "https://skribe.ai",
    achievements: [
      "Designed microservices for legal deposition platform using Node.js and PostgreSQL.",
      "Built ReactJS UI for text-video sync, enhancing accessibility for legal professionals.",
      "Improved performance with Redis caching, reducing transcript processing by 30%.",
    ],
  },
  {
    id: 3,
    title: "Senior Software Engineer",
    date: "Aug 2020 – Jul 2022",
    company: "TiCON System Ltd.",
    address:
      "House of Veritas, Level 6, House of Veritas, 8 Gareeb-e-Nawaz Ave, 8 Gareeb-e-Newaz Ave, Dhaka 1230, Bangladesh",
    type: "On-site",
    url: "https://www.ticonsys.com",
    achievements: [
      "Led frontend for Rabbithole Prime OTT platform, boosting engagement by 30%.",
      "Built custom ReactPlayer video player with real-time subscriptions, increasing retention by 25%.",
      "Optimized streaming for low-bandwidth networks via dynamic quality adjustments.",
    ],
  },
  {
    id: 4,
    title: "Software Engineer",
    date: "Jan 2018 – Jul 2020",
    company: "Beatnik",
    address: "House 106, Park Road DOHS Mohakhali, Dhaka-1206, Bangladesh",
    type: "On-site",
    url: "https://beatniktechnology.com",
    achievements: [
      "Developed e-commerce platforms (Bengal Meat, Runners Automobile) with PHP and Node.js.",
      "Built responsive frontends, boosting engagement by 35% and cutting transaction time by 20%.",
      "Implemented CI/CD and secure payment gateways for high-traffic reliability.",
    ],
  },
];

const Experience = () => {
  return (
    <Box py={8} id="experiences">
      <Typography mb={3} variant="h4">
        Experiences
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
              <Typography component={"strong"} fontWeight={700}>
                {item.company}
              </Typography>
              , {item.address} {` - (${item.type})`}
            </Typography>
            <Typography
              fontWeight={500}
              href={item.url}
              color={"#fe4747"}
              fontSize={16}
              sx={{ textDecoration: "none" }}
              variant="body1"
              className="link"
              gutterBottom
              component="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.url}
            </Typography>

            <Box component="ul" sx={{ pl: 2 }}>
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
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
