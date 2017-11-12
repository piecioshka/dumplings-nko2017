// server.js
const express = require('express');
const app = express();

const serveStatic = require('serve-static');
app.use(serveStatic(__dirname + '/dist'));

// Socket.io

const http = require('http').Server(app);
const io = require('socket.io')(http);

class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(user) {
    this.users.splice(this.users.indexOf(user), 1);
  }

  getUsers() {
    return this.users.filter(item => item);
  }
}

const um = new UserManager();

io.on('connection', function (socket) {
  console.log('a client connected');

  socket.on('disconnect', function () {
    console.log('client disconnected');
  });

  socket.on('generalChannel', function (envelope) {
    console.log('message', JSON.stringify(envelope, null, 4));
    const action = envelope.action;
    const user = envelope.data;

    switch (action) {
      case 'add':
        um.addUser(user);
        console.log('Users added', JSON.stringify(user, null, 4));
        break;

      case 'remove':
        um.removeUser(user);
        console.log('Users removed', JSON.stringify(user, null, 4));
        break;

      case 'get':
        const users = um.getUsers();
        io.emit('generalChannel', users);
        console.log('Server returns: [' + users.length + ']', JSON.stringify(users, null, 4));
        break;

      default:
        console.error('unhandled message', JSON.stringify(envelope, null, 4));
    }

    io.emit('generalChannel', um.getUsers());
  });
});

const port = process.env.PORT || 5000;
http.listen(port);

console.log('Server started ' + port);
