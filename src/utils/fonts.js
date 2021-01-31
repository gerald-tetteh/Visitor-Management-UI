import colors from "./colors";

const fontSizes = {
  fontSizeNormal: 16,
  fontSizeLarge: 32,
};

const fonts = {
  heading1: {
    textTransform: "uppercase",
    fontSize: fontSizes.fontSizeLarge,
    color: colors.neutralGrey,
  },
  regular: {
    fontSize: fontSizes.fontSizeNormal,
    color: colors.primary900,
  },
};

export default fonts;
