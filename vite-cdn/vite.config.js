import { defineConfig } from "vite";

import viteCDNPlugin from "vite-plugin-cdn-import";

export default defineConfig({
  plugins: [
    viteCDNPlugin({
      modules: [
        {
          name: "lodash",
          var: "_",
          path: "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js",
        },
      ],
    }),
  ],
  //   第二步 改了rollup配置
  build: {
    rollupOptions: {
      external: ["lodash"],
      externalGlobal: {
        var: "_",
        path: "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js",
      },
    },
  },
});
