import Typography from "typography"
import './global.css';
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      color: 'white',
      background: "linear-gradient(92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%)",
      backgroundClip: "text",
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 900,
      textRendering: "optimizeLegibility",
      color: 'white',
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
