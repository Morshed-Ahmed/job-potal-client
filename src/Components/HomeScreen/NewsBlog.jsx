import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";

const NewsBlog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div>
      <Container sx={{ mt: 10 }}>
        <Stack sx={{ mb: 4, textAlign: "center" }}>
          <Typography sx={{ fontSize: { md: 35, xs: 25 } }}>
            News and Blog
          </Typography>
          <Typography>Get the latest news, updates and tips</Typography>
        </Stack>

        <Grid spacing={2} container>
          {blog.map((bl) => (
            <Grid key={bl.id} md={4} xs={12} item>
              <Box sx={{ border: "1px solid #ccc1c1", p: 2, borderRadius: 2 }}>
                <Stack spacing={2}>
                  <Stack spacing={2}>
                    <img
                      style={{ borderRadius: "10px" }}
                      src={bl?.img}
                      alt=""
                    />

                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {bl?.title}
                    </Typography>
                    <Typography>{bl?.description}</Typography>
                  </Stack>
                  <Stack>
                    <Stack direction={"row"} justifyContent="space-between">
                      <Stack direction={"row"} spacing={1}>
                        <Avatar
                          alt={bl?.name}
                          src="/static/images/avatar/1.jpg"
                        />
                        <Stack>
                          <Typography sx={{ fontWeight: 700 }}>
                            {bl?.name}
                          </Typography>
                          <Typography variant="body2">{bl?.date}</Typography>
                        </Stack>
                      </Stack>

                      <Typography variant="body2">
                        {bl?.read} mins read
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ alignItems: "center", my: 3 }}>
          <Button variant="contained">Load More Posts</Button>
        </Stack>
      </Container>
    </div>
  );
};

export default NewsBlog;
