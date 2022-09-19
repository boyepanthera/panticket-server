module.exports = {
  apps: [
    {
      name: 'panticket',
      script: './server.js',
      'node-args': '-r esm',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
