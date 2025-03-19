import { Box, Grid2, Typography } from "@mui/material";
import React from "react";

import image from "../assets/img/IMG_5329-2.jpg";

const About = () => {
  return (
    <Box py={3} id="about">
      <Typography variant="h4" mb={3}>
        About Me
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 size={3}>
          <Box
            height={"100%"}
            p={1}
            border={1}
            borderRadius={1}
            borderColor={"rgba(0, 0, 0, .125)"}
          >
            <img
              style={{ width: "100%", objectFit: "cover", height: "100%" }}
              src={image}
              alt="Naim Photo"
            />
          </Box>
        </Grid2>
        <Grid2 size={9}>
          <Box
            p={2.5}
            border={1}
            borderRadius={1}
            borderColor={"rgba(0, 0, 0, .125)"}
          >
            <Typography mb={2} lineHeight={"30px"}>
              I’m an experienced <b>Senior Software Engineer</b> with a strong
              background in designing and developing scalable, high-performance
              applications since 2018. My expertise spans microservices
              architecture, cloud infrastructure, and CI/CD pipelines, enabling
              me to build efficient, resilient software solutions. Over the
              years, I’ve worked on auction platforms, OTT services, real-time
              communication apps, and business management solutions, using
              technologies like{" "}
              <b>
                Node.js, React, TypeScript, PostgreSQL, AWS, and Google Cloud.
              </b>
              <br />
              <br />
              Beyond coding, I love the thrill of road trips, exploring new
              places, and embracing challenges—whether in technology or on the
              open road. My passion for problem-solving, clean code, and
              continuous learning fuels my drive to deliver impactful solutions.
              Let's build something amazing together!
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default About;
