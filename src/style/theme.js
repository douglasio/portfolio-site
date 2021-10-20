import colors from './colors';

const theme = {
    light: {
        id: 't01',
        body: {
            background: colors.bright.gray,
            paragraph: colors.black,
            h1: colors.bright.blue,
            h2: colors.muted.jonquil,
            h3: colors.bright.blue,
        }
    },
    dark: {
        id: 't02',
        body: {
            background: colors.dark.blue,
            paragraph: colors.white,
            h1: colors.bright.jonquil,
            h2: colors.bright.jonquil,
            h3: colors.white,
        }
    }
}

export default theme;