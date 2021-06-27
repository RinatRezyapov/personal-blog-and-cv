import Typography from "typography"
import './global.css';

export const colors = {
  backgroundColor: '#282c35',
}

const typography = new Typography({
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Amazon Ember', 'Montserrat', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      background: colors.backgroundColor,
      color: 'rgba(255, 255, 255, 1)',
    },
    a: {
      color: 'rgba(255, 255, 255, 1)',
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    h1: {
      fontWeight: 900
    }
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
