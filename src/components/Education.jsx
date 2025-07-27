import { Box, Chip, Typography } from "@mui/material";

const data = [
  {
    id: 1,
    header: "Bachelor of Computer Science & Engineering",
    gpa: "Grade: 3.28 out of 4.00",
    title: "Fareast International University, Dhaka, Bangladesh",
  },
  // {
  //   id: 2,
  //   header: "Bachelor of Computer Science & Engineering (Dropped)",
  //   gpa: "Years: 2017 - 2019",
  //   title: "Green University of Bangladesh, Dhaka, Bangladesh",
  // },
  {
    id: 3,
    header: "Higher Secondary School Certificate",
    gpa: "Grade: 3.68 out of 5.00",
    title: "Madaripur Technical School and College, Madaripur, Bangladesh",
  },
  {
    id: 4,
    header: "Secondary School Certificate",
    gpa: "Grade: 4.15 out of 5.00",
    title: "Kalini Model Pilot High School, Kalkini, Madaripur, Bangladesh",
  },
];

const Education = () => {
  return (
    <Box py={8} id="educations">
      <Typography mb={3} variant="h4">
        Educations
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
              label={item.gpa}
            />
            <Typography display={"block"} component={"i"}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
