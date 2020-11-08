import Typography from "typography"
import './global.css';
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      color: 'white'
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 900,
      textRendering: "optimizeLegibility",
      color: 'white',
      background: "linear-gradient(90deg,#ec6192 4.44%,#ec4c34 21.45%,#ffbd2b 37.21%,#ebde56 54.63%,#57c754 70.8%,#53a1eb 84.07%) 0 100% transparent no-repeat",
      backgroundClip: "text",
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',

    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
