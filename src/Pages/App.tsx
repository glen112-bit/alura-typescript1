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
  function finalizarTarea(){
    if(seleccionado){
      setSeleccionado(undefined)
      setTarefas(tareasAnteriores => 
        tareasAnteriores.map((tarea) => {
        if(tarea.id === seleccionado.id){
          return{
            ...tarea, 
            seleccionado: false,
            completado: true
          }
        }
          return tarea
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas} 
        seleccionTarea={seleccionTarea}
      />
      <Cronometro
        seleccionado={seleccionado}
        finalizarTarea = {finalizarTarea}
      />
    </div>
  );
}

export default App;
