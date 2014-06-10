function loop(){
  var mongo = require('mongodb'),
    http = require('http');
    monk = require('monk'),
    db = monk('procur-dev:Pr0cur1!@oceanic.mongohq.com:10073/app25459603'),
    collection = db.get('user'),
    io = require('socket.io').listen(1337);


  io.sockets.on('connection', function(socket){
    collection.count({}, function(err, count){
      socket.emit('count', count);
      console.log('counted');
      console.log('a thing');
    });
  });
}

loop();
