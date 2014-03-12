var pomelo = require('pomelo');

/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'pomelo-failover-demo');

app.configure('production|development', 'connector', function(){
	app.set('proxyConfig',
		{
			failMode : 'failover'
		});
});


// start app
app.start();

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack);
});
