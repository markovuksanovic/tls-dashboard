var config = {
  connection_timeout : process.env.TLS_DASHBOARD_CONNECTION_TIMEOUT || 5000,
  output_file : {
    path: process.env.TLS_DASHBOARD_OUTPUT_DIR || './web_service/js/tls-dashboard/',
    name: process.env.TLS_DASHBOARD_OUTPUT_FILENAME || 'certificates.js'
  }
};

module.exports = config;
