import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginIndexPage from './components/login/';
import EntryIndexPage from './components/entry/';
import { Window } from './types/declarations';

const { remote } = window.electron;
const { Menu, MenuItem } = remote;

const menu = new Menu()
menu.append(new MenuItem({ label: '操作1', click() { console.log('item 1 clicked') } }))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({
  label: '您可是真牛逼呢', type: 'submenu', submenu: [
    {
      label: '帮助',
      click: async () => {
        window.electron.shell.openExternal("https://github.com")
      }
    },
    { type: 'separator' },
    { role: 'quit' }
  ]
}))


const App: React.FC = () => {

  remote.webContents.getAllWebContents()[0].openDevTools();
  remote.Menu.setApplicationMenu(menu);


  window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    menu.popup({ window: remote.getCurrentWindow() })
  }, false);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginIndexPage} />
        <Route path="/" exact={true} component={EntryIndexPage} />
      </Switch>
    </Router>
  );
}

export default App;
