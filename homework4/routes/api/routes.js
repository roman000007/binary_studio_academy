//router objects
const user = require('./user');
const message = require('./message');
const friends = require('./friends');

module.exports = function(app){
    app.use('/api/user', user);
    app.use('/api/message', message);
    app.use('/api/friends', friends);
}