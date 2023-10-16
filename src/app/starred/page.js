import * as React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import MediaCard from "@/components/MediaCard"

export default function StarredPage() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" gutterBottom>
          Starred Page
        </Typography>
        <MediaCard />
      </Box>
    </Container>
  )
}
