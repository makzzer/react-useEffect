import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  //acá estoy creando un estado que va a representar los datos que me traigo de la API
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  console.log("dentro del useFetchhhhhhhhhhhhh2");

  const fetchDataGenerica = useCallback(async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw Error("error consumiendo los datos de la API");

      const dataRecibida = await res.json();
      //le asigno al useState de dataGenerica el estado inicial que es la DATA que traigo de la API
      setData(dataRecibida);
    } catch (error) {
      console.log(error.message);
      //le mando un set data con array vacio para que no explote el sitio web
      setData([])
    } finally {
      setLoading(false);
    }
  }, []);

  //Traigo el use Effect para dentro del hook creado
  useEffect(() => {
    console.log("entre al useEffecttttttttttttt");
    fetchDataGenerica();
  }, []);

  //tengo que retornar un objeto, despues desestructuro y lo obtengo
  return { data };
};
