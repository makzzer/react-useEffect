import { useState } from "react";
import { useFetch } from "./hooks/useFetch"; //exportacion nombrada



const App = () => {
  const [contador, setContador] = useState(0)
  //le pongo null al siguiente estado porque no voy a tener nada o no se que voy a tener en los datos de usuario que consumo de la api


  const aumentarCont = () => {
    setContador(contador + 1);
  }

  //voy a comentar el siguiente use effect hecho con fetch y voy a hacer otro con async y await
  /*
  useEffect(() => {
    console.log("useEffect entré ! ")
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
      .then((data) => {
        setDatosUsuarios(data)
      })
    console.log(datosUsuarios)
  }, [contador])
  */

  //uso desestructuracion sobre el objeto que me trae el fetch para obtener su propiedad data 
  const {data} = useFetch("https://jsonplaceholder.typicode.com/users")


  //para que no se ejecute todo el tiempo la funcion si la quiero sacar afuera del useEffect
  //tengo que usar el useCallback, otro hook de react que me permite que una funcion no se crée mas de una vez asi no afecto a la performance
  //nueva solucion: para que no crée la funcion a cada rato voy a crear un CUSTOM HOOK con el fetch, y lo puedo reutilizar con cualquier URL de API


  if (!data) return <div>Cargando...</div>

  return (
    <>
      <h1>Hola Use Effect</h1>
      <button onClick={aumentarCont}>elbotoncito: {contador}</button>

      <ul>
        {data.map(data => (
          <li key={data.id}> {data.name} </li>
        ))
        }
      </ul>

    </>
  )
}

export default App;