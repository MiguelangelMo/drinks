import React, { createContext, useEffect, useState } from 'react';

export const ContextRecetas = createContext();

const RecetasProvider = (props) => {

    const [recetas, saveRecetas] = useState([]);
    const [state, setstate] = useState({
        ingredient: '',
        category: '',
    });
    const [query, saveQuery] = useState(false);

    const { ingredient, category } = state;
    useEffect(() => {
        if (query) {
            const api = async () => {
                const api = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`);
                const json = await api.json();
                saveRecetas(json.drinks)
            }

            api();
        }
    }, [state])

    return (
        <ContextRecetas.Provider
            value={{
                recetas,

                setstate,
                saveQuery
            }}
        >
            {props.children}
        </ContextRecetas.Provider>
    )

}

export default RecetasProvider;