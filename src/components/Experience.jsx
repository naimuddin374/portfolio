import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const data = [
  {
    id: 1,
    header: "Sr. Software Engineer",
    date: "August 2022 – Present (Remote)",
    clg: "Green Pants Studio",
    title: "412 Thunderbay Dr., Georgetown TX 78626, United States",
  },
  {
    id: 2,
    header: "Sr. Software Engineer",
    date: "August 2022 – February 2023 (Remote)",
    clg: "Skribe.ai",
    title:
      "13215 Bee Cave Parkway, Suite A220 Austin, Texas 78738, United States",
  },
  {
    id: 3,
    header: "Sr. Software Engineer",
    date: "August 2020 – August 2022",
    clg: "TiCON System Ltd.",
    title:
      "House of Veritas, Level 6, House of Veritas, 8 Gareeb-e-Nawaz Ave, 8 Gareeb-e-Newaz Ave, Dhaka 1230, Bangladesh",
  },
  {
    id: 3,
    header: "Software Engineer",
    date: "January 2018 – August 2020",
    clg: "Beatnik",
    title: "House 106, Park Road DOHS Mohakhali, Dhaka-1206, Bangladesh",
  },
];

const Experience = () => {
  return (
    <Box py={3} id="experiences">
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
              {item.header}
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
                {item.clg}
              </Typography>
              , {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
