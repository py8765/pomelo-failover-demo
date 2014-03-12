module.exports = function(app) {
	return new ReadRemote(app);
};

var ReadRemote = function(app) {
	this.app = app;
};

ReadRemote.prototype.read = function(cb) {
	var value = 100;
	cb(value);
};