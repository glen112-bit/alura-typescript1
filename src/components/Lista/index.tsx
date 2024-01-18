import Item from "./Item";
import style from'./Lista.module.scss';
import { ITarefa } from "../../types/tarefa";

interface Props{
  tarefas: ITarefa[],
  seleccionTarea: (tarefaSeleccionada: ITarefa)=> void
}

function Lista({tarefas, seleccionTarea}: Props) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={()=> {
      }}> Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item  
            key={item.id}
            seleccionTarea={seleccionTarea}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;
