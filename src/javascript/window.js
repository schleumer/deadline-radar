var app = require('app');
var BrowserWindow = require('browser-window');
var Menu = require('menu');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 600
  });
  mainWindow.loadUrl('file://' + __dirname + '/app.html');
  mainWindow.webContents.on('did-finish-load', function() {
    setTimeout(function(){ mainWindow.show(); }, 42);
  });
});