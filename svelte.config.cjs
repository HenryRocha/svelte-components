const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    defaults: {
      script: "typescript",
      style: "postcss",
    },
    typescript: {
      tsconfigFile: "./tsconfig.json",
    },
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  }),
};
