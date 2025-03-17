import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const Publications = () => {
  const publicationList = [
    {
      id: 1,
      header:
        "An Enhanced Strategy of Detecting Neurological Disorders from Magnetic Resonance Images Using Deep Learning",
      date: "September 2023",
      title:
        "Shultana, S., & Frizell, S. In 2023 IEEE Sixth International Conference on Artificial Intelligence and Knowledge Engineering (AIKE) (pp. 99-104). IEEE.",
      doi: "10.1109/AIKE59827.2023.00024",
      link: "#",
    },
    {
      id: 2,
      header:
        "CVD: An improved approach of software vulnerability detection for object oriented programming languages using deep learning",
      date: "October 2022",
      title:
        "Hridoy, A. A. I., Khushbu, S. A., & Das, A. K. In Proceedings of the Future Technologies Conference (pp. 145-164), Springer Nature.",
      doi: "10.1007/978-3-031-18461-1_10",
      link: "#",
    },
  ];

  return (
    <Box py={3}>
      <Typography mb={3} variant="h4">
        Publications
      </Typography>

      <Box
        pl={3}
        borderLeft={1}
        borderColor={"red"}
        sx={{ borderWidth: "2px" }}
        position={"relative"}
      >
        {publicationList.map((item) => (
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
                Siddique, S.
              </Typography>
              , {item.title}
            </Typography>
            <Typography component={"i"}>
              Doi:{" "}
              <Typography
                sx={{ textDecoration: "none", color: "#007bff" }}
                component={"a"}
                href={item.link}
                target="_blank"
              >
                {item.doi}
              </Typography>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Publications;
