var hosts =  process.env.TLS_DASHBOARD_HOSTS ? process.env.TLS_DASHBOARD_HOSTS.split(',') : [
  'www.google.com',
  'www.twitter.com',
  'sha256.badssl.com',
  'expired.badssl.com',
  'self-signed.badssl.com',
  'wrong.host.badssl.com',
  'incomplete-chain.badssl.com',
  'example.dev',
  'vsaq.dev'
];
module.exports = hosts;
