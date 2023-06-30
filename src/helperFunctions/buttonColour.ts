import { ColourTypes } from "../types";

export const buttonColour = (colourOptions?: ColourTypes) => {
  switch (colourOptions) {
    case "accent": {
      return 'border-accent-200 bg-accent-100'
    }
    case "primary": {
      return 'border-primary-400 bg-primary-300'
    }
    case "tttt": {
      return 'border-tttt-200 bg-tttt-100'
    }
    default: 
    return 'border-accent-200 bg-accent-100'
  }
}