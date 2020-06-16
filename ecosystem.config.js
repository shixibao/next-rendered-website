module.exports = {
  apps: [{
    name: 'next',
    script: 'server.js',
    args: '4000',
    watch: '.',
    "env_production" : {
      "NODE_ENV": "production"
    },
  }],

  deploy : {
    production : {
      user : 'root',
      host : '39.96.51.108',
      ref  : 'origin/master',
      repo : 'https://github.com/shixibao/next-rendered-website.git',
      path : '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --unsafe-perm && npm run build && pm2 reload ecosystem.config.js --env production',
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      'pre-setup': ''
    }
  }
};
