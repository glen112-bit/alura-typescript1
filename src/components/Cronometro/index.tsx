import Botao from "../Botao"
import {Relogio} from "./Relogio";
import style from './Cronometro.module.scss'
import {tempoParaSegundos} from "../../common/utils/date";
import {ITarefa} from "../../types/tarefa";
import {useEffect, useState} from "react";

interface Props{
  seleccionado:ITarefa | undefined
}
const Cronometro = ({seleccionado}: Props) => {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if(seleccionado?.tempo){
    setTempo(tempoParaSegundos(String(seleccionado?.tempo)))
    }
  },[seleccionado])
  const regresiva = (contador:number = 0) => {
    setTimeout(() => {
      if(contador > 0){
        setTempo(contador - 1)
        return regresiva(contador -1)
      }
      alert('tiempo finalizado')
    }, 1000)

  }
  // if(seleccionado?.tempo){
    // setTempo(tempoParaSegundos(seleccionado.tempo))
  // }
  return(

    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um Card</p>
      <div className={style.relogioWrapper}>

        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={()=>{regresiva(tempo)}} texto="Comenzar"/>
    </div>
  )
}

export default Cronometro;
