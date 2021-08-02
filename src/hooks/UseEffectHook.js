import { useEffect, useState } from "react";

const UseEffectHook = () => {

    const [count, setCount] = useState(0)
    const [secondCount, setSecondCount] = useState(0)
    const [time, setTime] = useState(0)
  
    /* Si un effect no tiene que ver con el otro podemos crearlos a parte, de este modo organizamos mejor el codigo. */
    /* Los efectos se ejecutan en el orden que fueron especificados. */
    useEffect(() => {
      setTimeout(() => {
        if (time >= 5) {
          console.log('Destruido.');
          return // Cuando retorna algo se le llama fase de saneamiento, donde limpia el efecto para mejorar el rendimiento.
        }
        setTime(time+1)
      }, 1000);
      console.log("Renderizado");
    }, [time])
      /* Cuando [time] cambie, se va a renderizar de nuevo el effect. */
      /* Si [] contiene varios elementos y alguno de ellos cambia, se volvera a efectuar el renderizado. */
  
    useEffect(() => {
      console.log('Segundo Effect');
      /* Fase de saneamiento */
      return () => {
      }
    }, [])

    return (
        <div>
            <button onClick={() => setCount(count+1)}>
                Agregar
            </button>
            <button onClick={() => setSecondCount(secondCount-1)}>
                Decrementar
            </button>
            <p>{count}</p>
            <p>{secondCount}</p>
            <p>Tiempo: {time}</p>
        </div>
    )
}

export default UseEffectHook
