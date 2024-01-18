import style from '../Lista.module.scss';
import { ITarefa } from '../../../types/tarefa';

interface Props extends ITarefa {
  seleccionTarea: (tarefaSeleccionada: ITarefa) => void
}
const Item = ({tarefa, tempo, seleccionado, completado, id, seleccionTarea }: Props) => {
  return(
    <li className={`${style.item} ${seleccionado ? style.itemSelecionado : ''} 
      ${completado ? style.itemCompletado : ''}`} 
       onClick={() => !completado && seleccionTarea(
        {
          tarefa,
          tempo, 
          seleccionado, 
          completado,
          id
        }
      )
    }>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido}
        aria-label='tarrea Completada'
      ></span> }
    </li>
  )
}
export default Item
