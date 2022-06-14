const { app, BrowserWindow,  ipcMain} = require('electron');
const path = require('path');
const fs = require('fs');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    win.loadFile("dist/index.html")
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
}) 

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})

ipcMain.on('WRITE_FILE', (event, data) => {
    const content = fs.writeFile('dupa file', data, () => {
        console.log('done #ipcMain')
    });
    
    event.reply('WRITE_FILE', { content });
  });


  