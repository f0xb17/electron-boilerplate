# Electron Boilerplate with Tailwind CSS

## Configure
Open ``package.json`` and change the settings according to your project. 

## Installation
```bash
$ npm install
```

## Running
```bash
$ npm run start
```

## Building

### Windows
```bash
$ npm run dist -- --win
```

### macOS
```bash
$ npm run dist -- --mac
```
Special options must be set for macOS: [Building Guide](https://www.electron.build/mac)

### Linux
```bash
$ npm run dist -- --linux
```
For build targets refer to: [Linux Build Targets](https://www.electron.build/linux.html#target)
```json
  "linux": {
    "target": [
      "dir",
      "AppImage"
    ],
    "desktop": {
      "StartupWMClass": "electron-boilerplate"
    },
    "category": "utility",
    "icon": "./ressources/icon/"
  }
```

## Tailwind CSS
```bash
$ npx @tailwindcss/cli -i ./src/assets/styles/main.css -o ./src/output/main.css --watch
```

Don't forget to generate a new Tailwind CSS file after creating your UI.
