//PascalCase
// App
// HeaderHerader
// ExmploDeComponentes
import { Fragment } from 'react/jsx-runtime';
import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Conteiner } from './components/Conteiner';

export function App() {
  return (
    <Fragment>
      <Conteiner>
        <Heading>LOGO</Heading>
      </Conteiner>

      <Conteiner>
        <Heading>MENU</Heading>
      </Conteiner>
    </Fragment>
  );
}
