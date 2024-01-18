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
  // if(seleccionado?.tempo){
    // setTempo(tempoParaSegundos(seleccionado.tempo))
  // }
  return(

    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um Card</p>
      <div className={style.relogioWrapper}>

        <Relogio tempo={tempo}/>
      </div>
      <Botao texto="Comenzar"/>
    </div>
  )
}

export default Cronometro;
