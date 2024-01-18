import style from '../Lista.module.scss';
import { ITarefa } from '../../../types/tarefa';

interface Props extends ITarefa {
  seleccionTarea: (tarefaSeleccionada: ITarefa) => void
}
const Item = ({tarefa, tempo, seleccionado, completado, id, seleccionTarea }: Props) => {
  // console.log('item actual: ',{tarefa, tempo, seleccionado, completado, id, seleccionTarea })
  return(
    <li className={`${style.item} ${seleccionado ? style.itemSelecionado : ''}`} onClick={() => seleccionTarea(
        {
          tarefa,
          tempo, 
          seleccionado, 
          completado,
          id
        }
      )
    }>
      <h3>{tarefa}</h3><span>{tempo}</span></li>
  )
}
export default Item
