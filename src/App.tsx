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
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';

import './styles/theme.css';
import './styles/global.css';
import { PlayCircleIcon } from 'lucide-react';

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
            <Cycles></Cycles>
          </div>

          <div className='formRow'>
            <DefaultButton
              icon={<PlayCircleIcon></PlayCircleIcon>}
              color='green'
            ></DefaultButton>
          </div>
        </form>
      </Conteiner>
    </Fragment>
  );
}
