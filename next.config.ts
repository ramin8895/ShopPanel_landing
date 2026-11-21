import type { NextConfig } from "next";

/**
 * nexcart.ir landing = fully static site.
 * `output: "export"` writes plain HTML to ./out with the SAME URL structure as the
 * previous hand-built site (/features/torob/index.html, 404.html, ...), so nginx
 * needs no change and no Node process runs in production.
 */
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default config;
