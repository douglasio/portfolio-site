import colors from './colors';

const theme = {
    light: {
        id: 't01',
        body: {
            background: colors.light.gray,
            backgroundAlt: colors.light.lightTeal,
            paragraph: colors.black,
            muted: colors.muted.teal,
            h1: colors.bright.blue,
            h2: { text: colors.bright.lightTeal, background: colors.transparent },
            h3: colors.bright.teal,
            h4: colors.bright.blue,
            a: {
                background: colors.transparent,
                sprite: colors.bright.teal,
                text: colors.bright.blue,
                hover: {
                    background: colors.bright.lightTeal,
                    blend: 'multiply',
                    sprite: colors.bright.white,
                    text: colors.white,
                },
            },
            marker: colors.bright.teal,
        },
        button: {
            standard: {
                background: colors.vibrant.teal,
                hover: {
                    background: colors.bright.lightTeal,
                },
            },
            secondary: {
                background: colors.light.teal,
                hover: {
                    background: colors.muted.lightTeal,
                },
            }
        },
        header: {
            background: colors.vibrant.lightTeal,
            paragraph: colors.vibrant.gray,
            h1: colors.white,
        },
        main: {
            h2: { text: colors.bright.lightTeal, background: colors.muted.gray },
        },
        footer: {
            background: colors.muted.gray,
            h1: { text: colors.bright.lightTeal }
        },
        wordcloud: {
            color1: colors.bright.teal,
            color2: colors.bright.lightTeal,
        },
    },
    dark: {
        id: 't02',
        body: {
            background: colors.dark.blue,
            backgroundAlt: colors.dark.teal,
            paragraph: colors.white,
            muted: colors.muted.lightTeal,
            h1: colors.bright.lime,
            h2: { text: colors.light.teal, background: colors.transparent },
            h3: colors.light.teal,
            h4: colors.light.lightTeal,
            a: {
                background: colors.transparent,
                sprite: colors.light.blue,
                text: colors.bright.lime,
                hover: {
                    background: colors.bright.lime,
                    blend: 'difference',
                    sprite: colors.bright.lime,
                    text: colors.bright.blue,
                },
            },
            marker: colors.light.lightTeal,
        },
        button: {
            standard: {
                background: colors.vibrant.teal,
                hover: {
                    background: colors.bright.lightTeal,
                },
            },
            secondary: {
                background: colors.bright.lightTeal,
                hover: {
                    background: colors.dark.lightTeal,
                },
            }
        },
        header: {
            background: colors.bright.blue,
        },
        main: {
            h2: { text: colors.bright.lightTeal, background: colors.muted.blue },
        },
        footer: {
            background: colors.bright.blue,
            h1: { text: colors.bright.lightTeal }
        },
        wordcloud: {
            color1: colors.light.blue,
            color2: colors.bright.lightTeal,
        },
    },
};

export default theme;
