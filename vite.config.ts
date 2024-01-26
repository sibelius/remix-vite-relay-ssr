import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import relay from 'vite-plugin-relay';

export default defineConfig({
  plugins: [remix(), tsconfigPaths(), relay],
});
