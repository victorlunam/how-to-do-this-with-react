import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Definimos nuestro componente
const PokeAPIComponent = () => {
  // Estados para almacenar datos de los Pokémon y estado de carga
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect para ejecutar la solicitud cuando el componente se monta
    useEffect(() => {
        // Función asincrónica para obtener datos de la API
        const fetchData = async () => {
        try {
            // Solicitud inicial para obtener una lista de Pokémon
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
            const results = response.data.results;

            // Obtener detalles adicionales de cada Pokémon
            const detailedPokemonData = await Promise.all(
            results.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url);
            return {
                name: pokemon.name,
                image: pokemonDetails.data.sprites.front_default,
                };
            })
            );

            // Actualizar el estado con los datos obtenidos
            setPokemonData(detailedPokemonData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    // Llamada a la función para iniciar la solicitud
    fetchData();
  }, []); // El array vacío como segundo argumento indica que se ejecuta una vez al montar el componente

  // Retorno del componente
    return (
        <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>PokeApi</h1>
        {loading ? (
            <p>Loading...</p> // Mensaje de carga mientras se obtienen los datos
        ) : (
            <ul className='flex justify-center flex-wrap'>
            {pokemonData.map((pokemon, index) => (
                <li key={index} className='border bg-cyan-500 m-2 p-2 rounded border-black flex flex-col content-center items-center w-64'>
                <img src={pokemon.image} alt={pokemon.name} />
                <p className='font-semibold text-xl'>{pokemon.name}</p>
                <button className='border border-black rounded mt-2 px-2 hover:scale-110 transition-transform duration-300 bg-green-400'>
                    <a href={`https://www.google.com/search?q=${pokemon.name}`}>Search</a></button>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};

// Exportamos el componente para su uso en otros archivos
export default PokeAPIComponent;
