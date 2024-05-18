import React, { useState, useEffect } from 'react'; // Importamos React y las funciones necesarias

// Importamos Axios para realizar solicitudes HTTP
import axios from 'axios';

// Definimos nuestro componente como una función
const PokeAPIComponent = () => {
    // Definimos dos estados usando el hook useState:
    // pokemonData para almacenar los datos de los Pokémon
    // loading para controlar el estado de carga
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect nos permite realizar efectos secundarios en componentes funcionales
    // En este caso, utilizamos useEffect para realizar una solicitud HTTP cuando el componente se monta
    useEffect(() => {
        // Definimos una función asincrónica para realizar la solicitud a la API de PokeAPI
        const fetchData = async () => {
        try {
            // Hacemos una solicitud GET a la URL de la API de PokeAPI
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            
            // Actualizamos el estado pokemonData con los resultados de la solicitud
            // y establecemos loading en false para indicar que la carga ha terminado
            setPokemonData(response.data.results);
            setLoading(false);
        } catch (error) {
            // Manejamos cualquier error que pueda ocurrir durante la solicitud
            console.error('Error fetching data: ', error);
        }
        };

        // Llamamos a la función fetchData para iniciar la solicitud cuando el componente se monta
        fetchData();
    }, []); // El segundo argumento de useEffect es un array vacío, lo que significa que se ejecutará solo una vez

    // Retornamos el contenido del componente
    return (
        <div className=''>
        {/* Mostramos un encabezado */}
        <h1>Pokemon List</h1>
        {/* Si loading es true, mostramos un mensaje de carga, de lo contrario, mostramos la lista de Pokémon */}
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul className=''>
            {/* Mapeamos a través de pokemonData y mostramos el nombre de cada Pokémon */}
            {pokemonData.map((pokemon, index) => (
                <li key={index} className='bg-slate-400 m-2 rounded p-2'>{pokemon.name}</li>
            ))}
            </ul>
        )}
        </div>
    );
};

// Exportamos nuestro componente para que pueda ser utilizado en otros archivos
export default PokeAPIComponent;
