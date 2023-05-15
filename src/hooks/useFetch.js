import { useState,useEffect } from "react"

export const useFetch = (url) => {
    //acá estoy creando un estado que va a representar los datos que me traigo de la API
    const [data, setData] = useState(null)

    console.log("dentro del useFetch")


    const fetchDataGenerica = async () => {
        const res = await fetch(url);
        const dataRecibida = await res.json()
        //le asigno al useState de dataGenerica el estado inicial que es la DATA que traigo de la API
        setData(dataRecibida)
    }


    //Traigo el use Effect para dentro del hook creado
    useEffect(() => {
        console.log("entre al useEffect")
        fetchDataGenerica();
    }, [])


    //tengo que retornar un objeto
    return { data }


}