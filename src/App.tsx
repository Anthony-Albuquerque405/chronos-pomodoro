//PascalCase
// App
// HeaderHerader
// ExmploDeComponentes
import { Fragment } from 'react/jsx-runtime';
import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <Fragment>
      <Heading>
        Olá Mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia
        voluptatibus et magni ducimus? Illo soluta molestias provident quibusdam
        excepturi possimus? Repudiandae placeat voluptatibus quidem aliquid
        error pariatur repellat recusandae.
      </p>
    </Fragment>
  );
}
