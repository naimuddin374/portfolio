import { Box, Typography } from "@mui/material";
import coverImage from "../assets/img/my-cover.jpg";

const HeroBanner = () => {
  return (
    <Box
      id="home"
      sx={{
        position: "relative", //
        width: "100%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
                        url(${coverImage})`,
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        //                 url(https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "450px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        textAlign={"center"}
        alignSelf={"center"}
        color="#fff"
      >
        Research | Innovate | Build | Scale
        {/*  <br />
        <Typography
          variant="body1"
          textAlign={"center"}
          alignSelf={"center"}
          color="#fff"
        >
          🔹 Research – Continuously exploring new technologies and trends.{" "}
          <br />
          🔹 Innovate – Crafting creative and cutting-edge solutions. <br />
          🔹 Build – Turning ideas into high-performance applications. <br />
          🔹 Scale – Ensuring solutions are robust, scalable, and future-proof.
        </Typography> */}
      </Typography>{" "}
    </Box>
  );
};

export default HeroBanner;
