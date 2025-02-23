const { app, BrowserWindow } = require('electron')
const path = require('node:path')

/**
 * Initializes and opens a new browser window with defined size and loads the 
 * specified HTML file.
 */
const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, './../ressources/icon/icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  /**
   * This option controls the ribbon above the app. 
   * The following option would never display the ribbon.
   */
  mainWindow.setMenuBarVisibility(false) // set this to true to always show the ribbon
  mainWindow.setAutoHideMenuBar(false) // set this to 'true' to show the ribbon with alt

  mainWindow.loadFile('./src/assets/index.html')
}

/** Initialize the application
 * Calling the createMainWindow function when the application is ready
 */
app.whenReady().then(() => {
  createMainWindow()
  /**
   * On macOS it is common for applications and their menu bar
   * to stay active until the user quits explicitly with Cmd + Q
   * This creates a new window when none are open and the app is running in the background
   */
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
}).catch(err => {
  console.error('Error when creating the Electron window: ' + err)
})

app.on('window-all-closed', () => {
  /**
   * Quit the application when all windows are closed
   * except on macOS where it is common for applications
   * and their menu bar to stay active until the user quits
   * explicitly with Cmd + Q.
   */ 
  if (process.platform !== 'darwin') app.quit()
})
