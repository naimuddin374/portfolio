import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

const Navbar = () => {
  const navItems = [
    "Home",
    "About",
    "Education",
    "Publications",
    "Experience",
    "Contact",
  ];
  return (
    <Box bgcolor={'#007bff'} component="nav" position={'sticky'} top={0} zIndex={1000}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Shaykh Siddique
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Typography
            key={item}
              ml={2}
              sx={{ textDecoration: "none", color: "#fff" }}
              component={"a"}
              href={`#${item.toLocaleLowerCase()}`}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
