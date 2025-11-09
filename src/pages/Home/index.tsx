import { Conteiner } from '../../components/Conteiner';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../templates/MainTemplates';

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  return (
    <MainTemplate>
      <Conteiner>
        <CountDown {...props}></CountDown>
      </Conteiner>

      <Conteiner>
        <MainForm {...props}></MainForm>
      </Conteiner>
    </MainTemplate>
  );
}
