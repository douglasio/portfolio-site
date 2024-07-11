import colors from './colors';

const theme = {
    light: {
        id: 't01',
        body: {
            background: colors.light.ghost,
            backgroundAlt: colors.light.mist,
            paragraph: colors.black,
            muted: colors.muted.fog,
            h1: colors.bright.midnight,
            h2: { text: colors.bright.mist, background: colors.transparent },
            h3: colors.bright.fog,
            h4: colors.bright.midnight,
            a: {
                background: colors.transparent,
                sprite: colors.bright.fog,
                text: colors.bright.midnight,
                hover: {
                    background: colors.bright.mist,
                    blend: 'multiply',
                    sprite: colors.bright.white,
                    text: colors.white,
                },
            },
            marker: colors.bright.fog,
        },
        button: {
            standard: {
                text: colors.black,
                background: colors.vibrant.fog,
                hover: {
                    background: colors.bright.mist,
                },
            },
            secondary: {
                background: colors.light.fog,
                hover: {
                    background: colors.muted.mist,
                },
            },
        },
        header: {
            background: colors.vibrant.mist,
            paragraph: colors.vibrant.ghost,
            h1: colors.white,
        },
        main: {
            h2: { text: colors.bright.mist, background: colors.muted.ghost },
        },
        footer: {
            background: colors.muted.ghost,
            h1: { text: colors.bright.mist },
        },
        wordcloud: {
            color1: colors.bright.fog,
            color2: colors.bright.mist,
        },
    },
    dark: {
        id: 't02',
        body: {
            background: colors.dark.midnight,
            backgroundAlt: colors.dark.fog,
            paragraph: colors.white,
            muted: colors.muted.mist,
            h1: colors.bright.hazmat,
            h2: { text: colors.light.fog, background: colors.transparent },
            h3: colors.light.fog,
            h4: colors.light.mist,
            a: {
                background: colors.transparent,
                sprite: colors.light.midnight,
                text: colors.bright.hazmat,
                hover: {
                    background: colors.bright.hazmat,
                    blend: 'difference',
                    sprite: colors.bright.hazmat,
                    text: colors.bright.midnight,
                },
            },
            marker: colors.light.mist,
        },
        button: {
            standard: {
                text: colors.black,
                background: colors.vibrant.fog,
                hover: {
                    background: colors.bright.mist,
                },
            },
            secondary: {
                background: colors.bright.mist,
                hover: {
                    background: colors.dark.mist,
                },
            },
        },
        header: {
            background: colors.bright.midnight,
        },
        main: {
            h2: { text: colors.bright.mist, background: colors.muted.midnight },
        },
        footer: {
            background: colors.bright.midnight,
            h1: { text: colors.bright.mist },
        },
        wordcloud: {
            color1: colors.light.midnight,
            color2: colors.bright.mist,
        },
    },
};

export default theme;
