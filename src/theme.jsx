import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "gray.100",
                color: "gray.800",
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                rounded: "lg",
            },
            variants: {
                solid: {
                    bg: "blue.500",
                    color: "white",
                    _hover: { bg: "blue.600" },
                },
            },
        },
    },
});

export default theme;
