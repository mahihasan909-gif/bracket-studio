import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @libsql/client uses native binaries — must stay server-side only
  serverExternalPackages: ["@libsql/client"],
};

export default nextConfig;
