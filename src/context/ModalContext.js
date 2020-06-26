import React, { createContext, useEffect, useState } from 'react';

export const ContextModal = createContext();

const ModalProvider = (props) => {

    const [idState, handleState] = useState(null)
    const [modal, handleModal] = useState([]);

    useEffect(() => {
        if (!idState) return;

        const api = async () => {
            const apis = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idState}`);
            const json = await apis.json();
            handleModal(json.drinks[0]);
        }
        api();

    }, [idState])

    return (
        <ContextModal.Provider
            value={{
                modal,

                handleState,
                handleModal,
            }}
        >
            {props.children}
        </ContextModal.Provider>
    )
}

export default ModalProvider;