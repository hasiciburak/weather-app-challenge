import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, ".")],
    prependData: `@use "@/styles/theme.module.scss" as *;`,
  },
};

export default nextConfig;
