module.exports = {
  apps: [
    {
      name: "DVGlanding",
      port: "3000",
      exec_mode: "cluster",
      instances: "2",
      script: "./.output/server/index.mjs",
    },
  ],
};
