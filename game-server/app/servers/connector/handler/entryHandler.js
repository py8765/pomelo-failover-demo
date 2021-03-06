module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
};

/**
 * New client entry chat server.
 *
 * @param  {Object}   msg     request message
 * @param  {Object}   session current session object
 * @param  {Function} next    next stemp callback
 * @return {Void}
 */
Handler.prototype.entry = function(msg, session, next) {
	this.app.rpc.read.readRemote.read(session, function(value) {
		console.log('read value: %s', value);
	});
  next(null, {code: 200, msg: 'game server is ok.'});
};