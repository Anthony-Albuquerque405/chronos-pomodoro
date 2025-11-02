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

      <Conteiner>
        <form className='form' action=''>
          <div className='formRow'>
            <label htmlFor='meuInput'>task</label>
            <input id='meuInput' type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Conteiner>
    </Fragment>
  );
}
