//PascalCase
// App
// HeaderHerader
// ExmploDeComponentes
import { Fragment } from 'react/jsx-runtime';
import { Conteiner } from './components/Conteiner';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

import './styles/theme.css';
import './styles/global.css';

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
            <DefaultInput
              labelText='task'
              id='meuInput'
              type='text'
              title='TITULO'
              placeholder='Digite algo'
            ></DefaultInput>
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
