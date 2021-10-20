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
            a: {
                background: colors.transparent,
                sprite: colors.bright.teal,
                text: colors.bright.blue,
                hover: {
                    background: colors.bright.blue,
                    sprite: colors.bright.white,
                    text: colors.white,
                },
            },
            marker: colors.bright.teal,
        },
        header: {
            background: colors.bright.blue,
            paragraph: colors.bright.lime,
            h1: colors.bright.gray,
        },
    },
    dark: {
        id: 't02',
        body: {
            background: colors.dark.blue,
            paragraph: colors.white,
            h1: colors.bright.lime,
            h2: colors.light.teal,
            h3: colors.light.teal,
            h4: colors.light.lightTeal,
            a: {
                background: colors.transparent,
                sprite: colors.light.blue,
                text: colors.bright.lime,
                hover: {
                    background: colors.bright.lime,
                    sprite: colors.bright.lime,
                    text: colors.bright.blue,
                },
            },
            marker: colors.light.lightTeal,
        },
        header: {
            background: colors.bright.blue,
        },
    },
};

export default theme;
