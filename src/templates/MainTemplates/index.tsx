import { Fragment } from 'react/jsx-runtime';
import { Conteiner } from '../../components/Conteiner';
import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <Fragment>
      <Conteiner>
        <Logo></Logo>
      </Conteiner>

      <Conteiner>
        <Menu></Menu>
      </Conteiner>

      {children}

      <Conteiner>
        <Footer></Footer>
      </Conteiner>
    </Fragment>
  );
}
