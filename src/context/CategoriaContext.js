import React, { createContext, useState, useEffect } from "react";

// Crea el context
export const ContextCategoria = createContext();

// crear un provider
const CategoriaProvider = (props) => {

    const [category, handleCategory] = useState([]);

    useEffect(() => {
        const api = async () => {
            const api = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
            const json = await api.json();
            handleCategory(json.drinks);
        }
        api();
    }, [])

    return (
        <ContextCategoria.Provider
            value={{
                category
            }}
        >
            {props.children}
        </ContextCategoria.Provider>
    )
}

export default CategoriaProvider;
