/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@atoms": path.resolve(__dirname, "src/components/atoms/index"),
      "@molecules": path.resolve(__dirname, "src/components/molecules/index"),
      "@organisms": path.resolve(__dirname, "src/components/organisms/index"),
      "@templates": path.resolve(__dirname, "src/components/templates/index"),
      "@interfaces": path.resolve(__dirname, "src/interfaces/index"),
      "@pages": path.resolve(__dirname, "src/pages/index"),
      "@contexts": path.resolve(__dirname, "src/contexts/index"),
      "@validators": path.resolve(__dirname, "src/validators/index"),
      "@hooks": path.resolve(__dirname, "src/hooks/index"),
    },
  },
};