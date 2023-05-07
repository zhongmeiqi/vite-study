import { includes } from "lodash";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import path from "path";

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "./index.html"),
        product: path.resolve(__dirname, "./src//product.html"),
      },
      output: {
        manualChunks: (id) => {
          console.log("id", id);
          // ts认为你这个不在当前环境不在es6以后，是不能使用这个方法的
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  plugins: [
    checker({
      typescript: true,
    }),
  ],
});
