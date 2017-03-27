const {app, BrowserWindow, ipcMain} = require('electron');

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 700, height: 700 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // ipcSync
    ipcMain.on("synClick",(e, arg) =>{
      e.returnValue = arg + " & returned";
    });

    // ipcAsync
    ipcMain.on("asynClick",(e, arg) =>{
      e.sender.send ("asyncClickResponse", arg + " & returned");
    });

});
