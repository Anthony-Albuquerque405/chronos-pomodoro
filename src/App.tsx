//PascalCase
// App
// HeaderHerader
// ExmploDeComponentes
import { Fragment } from 'react/jsx-runtime';
import { Heading } from './components/Heading';
import { Conteiner } from './components/Conteiner';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <Fragment>
      <Conteiner>
        <Logo></Logo>
      </Conteiner>

      <Conteiner>
        <Heading>MENU</Heading>
      </Conteiner>
    </Fragment>
  );
}
