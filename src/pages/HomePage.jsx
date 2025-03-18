import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import MediaIcon from "../components/MediaIcon";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroBanner />
      <Box px={2}>
        <MediaIcon />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Skill />
        <Divider />
        <Education />
        <Divider />
        <Projects />
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
