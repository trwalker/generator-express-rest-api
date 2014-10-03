var settingsConfig = require('./app/config/settings/settingsconfig');

if(settingsConfig.settings.clusterEnabled === 1) {
  require('cluster-service').start({ workers: './app/config/workerconfig.js',
    accessKey: settingsConfig.settings.clusterAccessKey,
    host: settingsConfig.settings.hostName,
    port: settingsConfig.settings.masterPort });
}
else {
  require('./app/config/workerconfig.js');
}