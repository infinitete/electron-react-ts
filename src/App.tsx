import React from 'react';
import './App.css';

import { Window } from './types/declarations';

const { remote } = window.electron;
const { Menu, MenuItem }  = remote;

const menu = new Menu()
menu.append(new MenuItem({ label: '操作1', click() { console.log('item 1 clicked') } }))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({ label: '您可是真牛逼呢', type: 'submenu', submenu: [
  {
    label: '帮助',
    click: async () => {
      window.electron.shell.openExternal("https://github.com")
    }
  },
  { type: 'separator' },
  { role: 'quit' }
]}))




const App: React.FC = () => {

  remote.Menu.setApplicationMenu(menu);

  window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    menu.popup({ window: remote.getCurrentWindow() })
  }, false);

  return (
    <div className="App">
      Hell World
    </div>
  );
}

export default App;
