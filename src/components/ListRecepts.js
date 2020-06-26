import React, { useContext } from 'react';
import Recepts from './Recepts';

// Context
import { ContextRecetas } from '../context/RecetasContext';

const ListRecepts = () => {

    const { recetas } = useContext(ContextRecetas);

    return (
        <div className="row mt-5">
            {recetas.map(resp => (

                <Recepts
                    key={resp.idDrink}
                    resp={resp}
                />

            ))}
        </div>
    );
}

export default ListRecepts;