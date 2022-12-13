import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                base: "#FBFDFF",
                primary: "#007BE2",
                secondary: "#7aafff",
                tertiary: "#AECFFF",
                white: "#FBFDFF",
                black: "#2B363F",
                red: "#FF4438",
                green: "#38FF88",
                light: "#F3F8FF",
                dark: "#384956",
                grey: "#D9D9D9",

                pastelBlue: "#194569",
                pastelYellow: "#FFE662",
                pastelGrey: "#111111",
                pastelViolet: "#B399D4",
                pastelOrange: "#FFB347",
            },
            dark: {
                base: "#2B363F",
                primary: "#007BE2",
                secondary: "#7aafff",
                tertiary: "#AECFFF",
                white: "#333333",
                black: "#FBFDFF",
                red: "#FF4438",
                green: "#38FF88",
                light: "#222222",
                dark: "#F3F8FF",
                grey: "#D9D9D9",

                pastelBlue: "#194569",
                pastelYellow: "#FFE662",
                pastelGrey: "#111111",
                pastelViolet: "#B399D4",
                pastelOrange: "#FFB347",
            },
        },
    },
});
