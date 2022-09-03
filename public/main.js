const {app, BrowserWindow, ipcMain} = require('electron');

let win;
function createWindow() {
    win = new BrowserWindow({
        width:1920,
        height:1080,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL(process.env.ELECTRON_START_URL || 'http://localhost:3000')

    win.on('closed', () => {
        app.quit();
    })
}

ipcMain.on('toggle-debug', (event, arg)=> {
    //디버기 툴 토글(on/off)
    win.webContents.toggleDevTools()
});

ipcMain.on('refresh', (event, arg)=> {
    //페이지 갱신
    win.reload();
});

app.on('ready', createWindow);