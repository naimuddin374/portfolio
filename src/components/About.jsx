import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion"; // For subtle animation
import image from "../assets/img/IMG_5329-2.jpg";

const About = () => {
  return (
    <Box
      py={6}
      px={{ xs: 2, sm: 4 }}
      id="about"
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: 600, textAlign: { xs: "center", sm: "left" } }}
      >
        About Me
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5} md={3}>
          <Box
            sx={{
              height: "100%",
              borderRadius: 2,
              boxShadow: 3,
              overflow: "hidden",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={image}
              alt="Naim Uddin Prince - Full Stack Developer"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7} md={9}>
          <Box
            sx={{
              p: 2.5,
              border: 1,
              borderColor: "rgba(0, 0, 0, 0.125)",
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
              I'm a <strong>Full-Stack Engineer</strong> with over 6 years of
              experience building scalable web applications using{" "}
              <strong>Node.js, NestJS, React, Next.js, TypeScript</strong>, and{" "}
              <strong>AWS</strong>. I specialize in{" "}
              <strong>microservices</strong>, <strong>CI/CD pipelines</strong>,
              and <strong>event-driven systems</strong>, delivering solutions
              for e-commerce, reverse logistics, OTT platforms, and legal tech.
              <br />
              <br />
              Notable achievements include reducing buyer interaction time by
              40% on an auction platform and boosting viewer engagement by 30%
              on an OTT streaming service. I’m skilled in{" "}
              <strong>PostgreSQL, Redis, RabbitMQ</strong>, and{" "}
              <strong>Docker</strong>, ensuring high-performance, secure
              systems. My frontend work creates intuitive, responsive UIs, while
              my backend expertise drives robust, scalable architectures.
              <br />
              <br />
              Beyond code, I love road trips and tackling challenges—let’s build
              impactful solutions together!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
