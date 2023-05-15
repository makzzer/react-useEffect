import { useEffect, useState } from "react";



const App = () => {
  const [contador, setContador] = useState(0)
  //le pongo null al siguiente estado porque no voy a tener nada o no se que voy a tener en los datos de usuario que consumo de la api
  const [datosUsuarios, setDatosUsuarios] = useState(null)

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

  //El useEffect por defecto o no retorna nada o retorna una funcion
  //Por eso si uso async y await tengo que devolver el metodo
  useEffect(() => {

    async function fetchDatosUsuarios() {
      const resp = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const datosUs = await resp.json()
      setDatosUsuarios(datosUs)
    }
    fetchDatosUsuarios()


  })




  if (!datosUsuarios) return <div>Cargando...</div>

  return (
    <>
      <h1>Hola Use Effect</h1>
      <button onClick={aumentarCont}>elbotoncito: {contador}</button>

      <ul>
        {datosUsuarios.map(data => (
          <li key={data.id}> {data.name} </li>
        ))
        }
      </ul>

    </>
  )
}

export default App;