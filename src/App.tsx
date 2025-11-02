//PascalCase
// App
// HeaderHerader
// ExmploDeComponentes
import { Fragment } from 'react/jsx-runtime';
import { Conteiner } from './components/Conteiner';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './components/CountDown';

export function App() {
  return (
    <Fragment>
      <Conteiner>
        <Logo></Logo>
      </Conteiner>

      <Conteiner>
        <Menu></Menu>
      </Conteiner>

      <Conteiner>
        <CountDown></CountDown>
      </Conteiner>
    </Fragment>
  );
}
