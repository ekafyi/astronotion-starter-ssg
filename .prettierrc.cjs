/** @type {import("@types/prettier").Options} */
module.exports = {
  printWidth: 100,
  useTabs: true,
  plugins: [require.resolve("prettier-plugin-astro")],
  // plugins: ["./node_modules/prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: [".*", "*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
  ],
};
