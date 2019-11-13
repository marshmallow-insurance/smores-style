const colors = {
  white: '#ffffff',

  //Background
  bg2: '#F9F9F9',
  bg3: '#F8F6F6',

  //Grey
  grey2: '#ECECEC',
  grey3: '#E5E5E5',
  grey4: '#C1C1C1',
  grey5: '#AEAEAE',
  grey6: '#9E9E9E',
  grey7: '#818181',
  grey8: '#636768',

  //Pink
  pink2: '#FFB2B4',
  pink3: '#FF8A8D',
  pink4: '#FF7695',
  pink5: '#FF4E75',
  pink6: '#FD5064',
  pink7: '#E0364A',
  pink8: '#AB1D20',

  //Green
  green2: '',
  green3: '#A7D6C6',
  green4: '',
  green5: '#55D6AA',
  green6: '#4CB99F',
  green7: '#469389',
  green8: '#16716E',

  //Blue
  blue2: '#ACB6D8',
  blue3: '#94A0C6',
  blue4: '#6F7AA0',
  blue5: '#545E7E',
  blue6: '#363F59',
  blue7: '#112035',
  blue8: '#05090E',

  // Third-party brand colours
  stripe: '#6772E5',

  //Yellow
  yellow5: '#FFD53C',

  //Red
  red4: '#D7796A',
  red5: '#E06161',
  red7: '#D82C2C',
}

const font = {
  family: 'Gordita',

  weight: {
    normal: 400,
    medium: 500,
    bold: 500,
  },

  system:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
}

const fontStack = `font-family: ${font.family}, ${font.system};`

export const theme = {
  colors,
  font,
  fontStack,
}
