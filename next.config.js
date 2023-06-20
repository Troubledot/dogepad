/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["www.ffcfan.com"],
  },
  webpack: (config, { dev, isServer }) => {
    // 添加处理视频文件的 loader 配置
    config.module.rules.push({
      test: /\.(mov|mp4)$/, // 视频文件的文件类型
      use: [
        {
          loader: "file-loader", // 使用 file-loader 处理视频文件
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]", // 生成的文件路径和名称
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
