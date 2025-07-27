import { Box, Grid2, Typography } from "@mui/material";

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
            {/* <Typography mb={2} lineHeight={"30px"}>
              I’m an experienced <b>Backend-Focused Full Stack Engineer</b> with
              a strong background in building scalable, high-performance systems
              since 2018. My core strengths lie in{" "}
              <b>
                Node.js, NestJS, microservices architecture, CI/CD pipelines,
                and cloud infrastructure
              </b>{" "}
              (AWS, GCP). I’ve worked extensively with{" "}
              <b>PostgreSQL, MongoDB, Redis, RabbitMQ, and Docker</b> in
              production, delivering robust solutions across domains like
              auction tech, OTT media, real-time communications, and business
              operations.
              <br />
              <br />
              While I specialize in backend engineering, I also contribute to
              modern frontend projects using{" "}
              <b>React, Next.js, and TypeScript</b>, ensuring cohesive
              end-to-end product delivery. I’m passionate about clean
              architecture, performance, and scalable code — always striving for
              engineering excellence.
              <br />
              <br />
              Beyond coding, I love road trips, exploring new places, and
              tackling challenges — whether in technology or on the open road.
              Let’s build something powerful and meaningful together!
            </Typography> */}

            <Typography mb={2} lineHeight={"30px"}>
              I’m a passionate <b>Full-Stack Engineer</b> with over{" "}
              <b>7 years</b> of professional experience designing and building
              scalable, high-performance web applications. I thrive across the
              stack — from creating intuitive UIs with{" "}
              <b>React, Next.js, and TypeScript</b> to architecting robust
              backend systems using <b>Node.js, NestJS, and PostgreSQL</b>.
              <br />
              <br />
              My work spans industries like{" "}
              <b>
                e-commerce, reverse logistics, OTT platforms, real-time
                communication,
              </b>{" "}
              and <b>enterprise automation</b>. I enjoy solving complex
              problems, delivering clean architecture, and building products
              that scale — whether solo or as part of a fast-paced, agile team.
              <br />
              <br />
              I’m also experienced in <b>DevOps practices</b> including{" "}
              <b>AWS, Docker, and CI/CD pipelines</b>, ensuring stable
              deployments and smooth developer workflows. On the backend, I
              regularly work with high-performance technologies like{" "}
              <b>Redis, RabbitMQ, and MongoDB</b> to support responsive,
              event-driven systems.
              <br />
              <br />
              Outside of work, I enjoy road trips, exploring new places, and
              taking on new challenges — both in code and in life. Let’s build
              something impactful together!
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default About;
