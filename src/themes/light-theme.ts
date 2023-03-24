// pages/_app.js

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom theme values
 const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
      success: '#4ADE7B',
      warning: '#F9CB80',
      background: '#FFFFFF',
      surface: '#000000',
    },
  }
})

export default theme;