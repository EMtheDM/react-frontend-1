import React, { useState } from "react";
import { Button, Container, TextField, Grid } from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AppBar from "../components/AppBar";
import About from "../components/About";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Link from "../components/Link";

const StyledContainer = styled(
  Container,
  {}
)({
  marginTop: 20,
  marginBottom: 20,
});

export default function Main() {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [result, setResult] = useState([]);
  const [text, setText] = useState("");

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Text copied");
  };

  const inputHandler = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrlError(false);
    setSlugError(false);

    if (url == "") {
      setUrlError(true);
    }
  };

  return (
    <>
      <AppBar />
      <Container>
        <About />
      </Container>
      {/* <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <StyledContainer maxWidth="lg">
          <Grid container spacing={3} display="inline">
            <StyledContainer>
              <TextField
                onChange={(e) => setUrl(e.target.value)}
                label="URL"
                variant="outlined"
                color="primary"
                required
                error={urlError}
              />
            </StyledContainer>
            <StyledContainer>
              <TextField
                onChange={(e) => setSlug(e.target.value)}
                label="Custom Slug"
                variant="outlined"
                color="primary"
              />
            </StyledContainer>
            <StyledContainer>
              <Button
                type="submit"
                color="success"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
              >
                Create Custom Slug
              </Button>
            </StyledContainer>
          </Grid>
        </StyledContainer>
      </form> */}

      <Container maxWidth="lg">
        <StyledContainer>
          <Grid container spacing={3}>
            <Container>
              <Grid item>
                <StyledContainer>
                  <Link />
                </StyledContainer>
              </Grid>
            </Container>
          </Grid>
        </StyledContainer>
      </Container>

      <Container maxWidth="lg">
        <StyledContainer>
          <Grid container spacing={3}>
            <Container>
              <Grid item>
                <StyledContainer>
                  <TextField
                    type="text"
                    label="New URL"
                    value={text}
                    onChange={inputHandler}
                  />
                </StyledContainer>
                <StyledContainer display="inline">
                  <Button
                    onClick={copy}
                    disabled={!text}
                    type="button"
                    color="success"
                    variant="contained"
                    startIcon={<ContentCopyIcon />}
                  >
                    Copy
                  </Button>
                </StyledContainer>
              </Grid>
            </Container>
          </Grid>
        </StyledContainer>
      </Container>
    </>
  );
}
