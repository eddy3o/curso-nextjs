module.exports = {
  apps: [
    {
      name: 'nextjs-dev',
      script: './node_modules/next/dist/bin/next',
      interpreter: 'node',
      watch: true,
      ignore_watch: [
        'node_modules',
        '.next',
        '.git'
      ],
      env: {
        PORT: 3000,
        NODE_ENV: 'development'
      }
    }
  ]
};