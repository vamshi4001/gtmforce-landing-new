module.exports = {
  plugins: [
    "preset-default",
    {
      name: "removeViewBox",
      active: false,
    },
    {
      name: "removeDimensions",
      active: true,
    },
    {
      name: "cleanupNumericValues",
      active: true,
    },
    {
      name: "convertPathData",
      active: true,
    },
    {
      name: "mergePaths",
      active: true,
    },
    {
      name: "removeUselessStrokeAndFill",
      active: true,
    },
    {
      name: "removeEmptyContainers",
      active: true,
    },
    {
      name: "removeMetadata",
      active: true,
    },
    {
      name: "removeComments",
      active: true,
    },
    {
      name: "removeDesc",
      active: true,
    },
    {
      name: "removeTitle",
      active: true,
    },
  ],
};
