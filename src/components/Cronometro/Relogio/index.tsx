import style from './Relogio.module.scss'; 

interface Props {
  tempo: number | undefined
}

export const Relogio = ({tempo = 0}:Props) => {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60
  const [minutoDecena = 0, minutoUnidad = 0] = String(minutos).padStart(2, '0')
  const [segundoDecena = 0, segundoUnidad = 0] = String(segundos).padStart(2, '0')
  // const minutosString = String(minutos)
  // const segundosString = String(segundos)
  return(
  <>
      <span className={style.relogioNumero}>{minutoDecena}</span>
      <span className={style.relogioNumero}>{minutoUnidad}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDecena}</span>
      <span className={style.relogioNumero}>{segundoUnidad}</span> 
    </>
  )
}

