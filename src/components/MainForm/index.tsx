import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
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
        <p>Proximo intevalo é de 25 min</p>
      </div>

      <div className='formRow'>
        <Cycles></Cycles>
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon></PlayCircleIcon>}></DefaultButton>
      </div>
    </form>
  );
}
