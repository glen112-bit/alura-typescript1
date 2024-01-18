import {useState} from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import {ITarefa} from '../types/tarefa';
import style from './style.module.scss';

function App() {
  const [tarefas, setTarefas]= useState<ITarefa[]>([])
  const [seleccionado, setSeleccionado] = useState<ITarefa>()

  function seleccionTarea(tarefaSeleccionada: ITarefa){
    setSeleccionado(tarefaSeleccionada)
    setTarefas(tareasAnteriores => tareasAnteriores.map(tarea => ({
      ...tarea,
      seleccionado: tarea.id ===tarefaSeleccionada.id ? true : false
    })) )

  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas} 
        seleccionTarea={seleccionTarea}
      />
      <Cronometro seleccionado={seleccionado}/>
    </div>
  );
}

export default App;
