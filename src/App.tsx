//PascalCase
// App
// HeaderHerader
// ExmploDeComponentes
import { Fragment } from 'react/jsx-runtime';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <Fragment>
      <div className='conteiner'>
        <div className='conteudo'>
          <section>LOGO</section>
        </div>
      </div>
      <div className='conteiner'>
        <div className='conteudo'>
          <section>MENU</section>
        </div>
      </div>
      <div className='conteiner'>
        <div className='conteudo'>
          <section>FORMULARIO</section>
        </div>
      </div>
      <div className='conteiner'>
        <div className='conteudo'>
          <section>FOOTER</section>
        </div>
      </div>
    </Fragment>
  );
}
