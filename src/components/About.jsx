import { Box, Grid2, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box py={3}>
      <Typography variant="h4" mb={3}>
        About Me
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 size={3}>
          <Box
            p={0.5}
            border={1}
            borderRadius={1}
            borderColor={"rgba(0, 0, 0, .125)"}
          >
            <img
              style={{ width: "100%" }}
              src="https://images.pexels.com/photos/8506631/pexels-photo-8506631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
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
            <Typography mb={2}>
              Hi! I'm Shaykh Siddique, a PhD student in the Department of
              Computer Science at Texas A&M University. I'm advised by Dr.
              Nitesh Saxena and co-advised by Dr. Irfan Khan in the{" "}
              <Typography
                mr={0.5}
                component={"a"}
                href="#"
                target="_blank"
                color="#007bff"
              >
                {" "}
                Security and Privacy In Emerging Computing and Networking
                Systems (SPIES)
              </Typography>
              research lab, and the{" "}
              <Typography
                mr={0.5}
                component={"a"}
                href="#"
                target="_blank"
                color="#007bff"
              >
                Clean And Resilient Energy Systems (CARES)
              </Typography>
              lab. My research interests lie in building privacy engineering
              tools using machine learning and artificial intelligence.
            </Typography>
            <Typography mb={2}>
              My passion for applying Deep Learning and Artificial Intelligence
              to real-world challenges has grown stronger as I've developed my
              skills over the years. The deeper I delve into this field, the
              more I admire its potential to elegantly address complex issues in
              areas like cybersecurity, air/marine defense systems, and computer
              vision for medical imaging.
            </Typography>
            <Typography mb={2}>
              I completed my MS in Computer Science from Prairie View A&M
              University, Texas, USA. My master’s thesis focused on applying
              machine learning to sports, where I developed predictive models
              for player performance and game outcomes. This work involved
              leveraging statistical and computational techniques to optimize
              teaming strategies in sports management.
            </Typography>
            <Typography>
              Beyond my research pursuits, I have a deep passion for traveling
              and immersing myself in nature. I find great joy in exploring new
              places and experiencing different cultures. Additionally, I enjoy
              swimming, playing badminton, and engaging in chess.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default About;
