import { extendTheme, type ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";
import { titilliumWebSemiBold } from "./schemas/fonts/fontFaces";
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const customTheme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      titilliumWebSemiBold,
      body: {
        fontFamily: "TitilliumWebSemiBold, sans-serif",
        ".antique-white": {
          backgroundColor: "#F4F1DE"
        },
        ".terra-cotta-dark": {
          backgroundColor: "#E07A5F"
        },
        ".terra-cotta-light": {
          backgroundColor: "#f3cabf"
        },
        ".slate-blue-dark": {
          backgroundColor: "#3D405B"
        },
        ".slate-blue-light": {
          backgroundColor: "#d1d3e0"
        },
        ".sage-green": {
          backgroundColor: "#81B29A"
        },
        ".sage-green-light": {
          backgroundColor: "#d0e2d9"
        },
      },
      section: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100px",
        padding: "50px 20vw"
      }
    })
  }
});

export default customTheme;
