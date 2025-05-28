import { Box, Chip, Typography } from "@mui/material";

const data = [
  {
    id: 1,
    name: "Vendidit",
    title:
      "Vendidit is a modern AI-powered marketplace for the 105M+ resellers and consumers in the secondary market.",
    description:
      "The value of goods being returned, resold, and liquidated is estimated to be valued at around 2 Trillion in 2030. We want to make it easier for sellers to move merchandise through this market, and for buyers to tap into the market.",
    url: "https://www.vendidit.com",
  },
  {
    id: 2,
    name: "Skaribe.ai",
    title:
      "Skribe is the non-stenographic alternative to court reporting that gives you the speed, tools, and control today’s litigation demands.",
    description:
      "Capture, analyze and share legal testimony, including depositions, EUOs, and more. Powered by Zoom and integrated within Skribe, you can host your events with us and get them automatically processed and put into your Library when complete.",
    url: "https://www.skribe.ai",
  },
  {
    id: 3,
    name: "Rabbithole Prime",
    title: "Rabbithole Prime- Live Sports & Entertainment, The Way You Want",
    description:
      "Rabbitholebd is a video streaming based premium solutions that allows its subscribers to watch live Cricket and Football matches. Huge collections of Drama, Telefilms, Sports, Traveling, TV shows and many more. There are always something new to discover and contents are added in regular intervals!",
    url: "https://www.rabbitholebd.com",
  },
  {
    id: 4,
    name: "ShowTalent",
    title:
      "All Society Business & Economy Science & Technology Arts & Culture Sports & Fitness Religion. Post Your Content Here.",
    description:
      "All Society Business & Economy Science & Technology Arts & Culture Sports & Fitness Religion. Post Your Content Here.",
    url: "https://www.showtalent.org",
  },
  {
    id: 5,
    name: "Lubyc",
    title:
      "Lubyc's innovative all-in-one platform is specifically designed to meet your business's unique needs, fostering optimal growth through enhanced efficiency and productivity.",
    description:
      "Grow yourself and your business inside a verified community worldwide! Lubyc is an online multi-sided business and life management platform. A Lubyc Profile is an authenticated persona used for sharing your or your business’s online presence with others members of the Lubyc authenticated community. Through your Lubyc presence and its integrated suite of life management tools.",
    url: "https://www.lubyc.com",
  },
  {
    id: 6,
    name: "Runner Automobiles",
    title:
      "Runner Automobiles PLC, the pioneer motorcycle manufacturer and exporter started its journey back in 2000.",
    description:
      "Runner Automobiles PLC is a motorcycle and three-wheeler manufacturer based in Bangladesh. The company produces a range of motorcycles varying in size from 80 to 150 CC, and has become a major player in the sub 100 CC motorcycle segment in the country.",
    url: "http://runnerautomobiles.com",
  },
  {
    id: 7,
    name: "Bengal Meet Qurabni",
    title:
      "We at Bengal Meat, practice all-natural processes in the upbringing of the cattle, its food habit and habitat. So, all cattle in our farm grow up in freedom",
    description:
      "Bengal Meat Processing Industries Ltd. (BMPIL)  is a world-class meat industry, producing safe wholesome meat and meat-based further processed products that are of the highest quality and standard for domestic and international markets. Established in 2006 at Kashinathphpur, Santhia, Pabna, Bengal Meat is the first approved world-class abattoir in the country. Bengal Meat offers Halal, Safe, Hygienic, and Superior Quality meat and meat-based further processed products of Chicken, Cattle, Goat, Sheep, and Birds.",
    url: "https://qurbani.bengalmeat.com",
  },
];

const Projects = () => {
  return (
    <Box py={3} id="works">
      <Typography mb={3} variant="h4">
        Recent Works
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
              {item.name}
            </Typography>
            <Chip
              sx={{
                borderRadius: 0,
                bgcolor: "#ffebeb",
                fontSize: "16px",
                textTransform: "capitalize",
                fontWeight: 400,
              }}
              label={item.title}
            />
            <Typography display={"block"} component={"i"}>
              {item.description}
            </Typography>
            <Typography component={"i"}>
              URL:{" "}
              <Typography
                sx={{ textDecoration: "none", color: "#007bff" }}
                component={"a"}
                href={item.url}
                target="_blank"
              >
                {item.url}
              </Typography>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
