import { Roboto } from "next/font/google"
import { createTheme } from "@mui/material/styles"
import localFont from "next/font/local"

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// })

const gotham = localFont({
  src: [
    {
      path: "../fonts/GothamBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GothamMedium.ttf",
      weight: "600",
      style: "normal",
    },
  ],
})

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: gotham.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
})

export default theme
