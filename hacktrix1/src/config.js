//config.js
var convict = require('convict')

var conf = convict({
	env: {
		doc: 'The Server Environment',
		format: ['development','production'],
		default: 'production',
		env: 'NODE_ENV'
	},
	service: {
		protocol: {
			doc: 'API Connection Protocol',
			default: 'http'
		},
		host: {
			doc: 'API Host IP Address',
			default: '127.0.0.1'
		},
		port: {
			doc: 'API Port',
			default: '8081'
		}
	}
});

var env = conf.get('env');
var envConfigFile = '../config/' + env + '.json';

try {
	var files = [ envConfigFile];

	conf.loadFile(files);
}
catch(e) {
	console.error('Could not load configuration: %s', e);
}

conf.validate();

module.exports = conf;