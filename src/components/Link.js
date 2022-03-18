import React, { useState } from "react";
import { Button, Container, TextField, Grid } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/system";

import gql from "graphql-tag";

const StyledContainer = styled(
  Container,
  {}
)({
  marginTop: 20,
  marginBottom: 20,
});

const CREATE_SHORT_LINK = gql`
  mutation CreateLinkMutation($url: String!) {
    createLink(url: $url) {
      id
    }
  }
`;

const GET_LINK_COUNT = gql`
  query GetLinkCount {
    links: _allLinksMeta {
      count
    }
  }
`;

const createHash = (itemCount) => {
  let hashDigits = [];
  let dividend = itemCount + 1;
  let remainder = 0;
  while (dividend > 0) {
    remainder = dividend % 62;
    dividend = Math.floor(dividend / 62);
    hashDigits.unshift(remainder);
  }
  console.log(hashDigits);
  const alphabetArray =
    `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split("");

  let hashString = "";
  let i = 0;
  while (hashDigits.length > i) {
    hashString += alphabetArray[hashDigits[i]];
    i++;
  }
  return hashString;
};

const CreateShortLink = () => {
  const [url, setUrl] = useState("");
  const createShortLink = async () => {
    const linkCountQuery = await props.client.query({
      query: GET_LINK_COUNT,
    });

    const linkCount = linkCountQuery.data.links.count;
    const hash = createHash(linkCount);

    await createShortLink({
      variables: {
        url,
        hash,
      },
    });
  };

  const handleUrlInput = (e) => {
    setUrl(e.target.value);
  };

  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={3} display="inline">
        <Container>
          <Grid item>
            <StyledContainer>
              <TextField
                type="text"
                value={url}
                label="Link URL"
                onChange={handleUrlInput}
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
                onClick={createShortLink}
                disabled={!url}
              >
                Create
              </Button>
            </StyledContainer>
          </Grid>
        </Container>
      </Grid>
    </StyledContainer>
  );
};

export default CreateShortLink;
