//PascalCase
// App
// HeaderHerader
// ExmploDeComponentes
import { Fragment } from 'react/jsx-runtime';
import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('App renderizou');
  return (
    <Fragment>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia
        voluptatibus et magni ducimus? Illo soluta molestias provident quibusdam
        excepturi possimus? Repudiandae placeat voluptatibus quidem aliquid
        error pariatur repellat recusandae.
      </p>
    </Fragment>
  );
}
