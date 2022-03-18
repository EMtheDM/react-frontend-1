import { Container, Typography, Grid, Box } from "@mui/material";
import profile from "../images/rebrand-image.png";
import { styled } from "@mui/system";

const About = () => {
  const StyledContainer = styled(
    Container,
    {}
  )({
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
  });

  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Container>
            <Typography
              variant="h3"
              color="textSecondary"
              component="h3"
              fontFamily="Quicksand"
              marginBottom={3}
              justifyContent="center"
            >
              Rebrandly
            </Typography>
            <Typography
              variant="p"
              color="textPrimary"
              component="p"
              fontFamily="Quicksand"
              justifyContent="center"
            >
              Rebrandly is the industry-leading link management platform to
              brand, track and share short URLs using a custom domain name
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Container justifyContent="flex-end">
            <img src={profile} alt="Profile" />
          </Container>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default About;
