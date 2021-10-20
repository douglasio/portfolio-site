import colors from './colors';

const theme = {
  light: {
    id: 't01',
    body: {
      background: colors.light.gray,
      paragraph: colors.black,
      h1: colors.bright.blue,
      h2: colors.bright.lightTeal,
      h3: colors.bright.teal,
      h4: colors.bright.blue,
      marker: colors.bright.teal
    },
    header: {
        background: colors.bright.blue,
        paragraph: colors.bright.lime,
        h1: colors.bright.gray,
    }
  },
  dark: {
    id: 't02',
    body: {
      background: colors.dark.blue,
      paragraph: colors.white,
      h1: colors.bright.lime,
      h2: colors.light.teal,
      h3: colors.white,
      h4: colors.light.lightTeal,
      marker: colors.light.lightTeal
    },
    header: {
        background: colors.bright.blue
    }
  },
};

export default theme;
