import { Conteiner } from '../../components/Conteiner';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplates';

export function Home() {
  return (
    <MainTemplate>
      <Conteiner>
        <CountDown></CountDown>
      </Conteiner>
      <Conteiner>
        <MainForm></MainForm>
      </Conteiner>
    </MainTemplate>
  );
}
