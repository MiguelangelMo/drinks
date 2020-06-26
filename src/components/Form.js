import React, { useState, useContext, useEffect } from 'react';
import { ContextCategoria } from '../context/CategoriaContext';
import { ContextRecetas } from '../context/RecetasContext';
import useDrinck from '../hooks/useDrinck';

const Form = () => {

    // Context
    const { category } = useContext(ContextCategoria);
    const { setstate, saveQuery } = useContext(ContextRecetas);

    // Hooks Select
    const [state, SelectBebida] = useDrinck('', category);

    // State
    const [request, saveRequest] = useState({
        ingredient: '',
        category: state
    });

    const handleData = (e) => {
        saveRequest({
            ...request,
            [e.target.name]: e.target.value,
            category: state,
        })
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                setstate(request);
                saveQuery(true)
            }
            }
            className="col-12"
        >
            <fieldset
                className="text-center"
            >
                <legend>Bebidas por Categorías ó Ingrediente</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input
                        type="search"
                        name="ingredient"
                        id="ingredient"
                        className="form-control"
                        placeholder="Buscar por Ingredientes"
                        onChange={handleData}
                    />
                </div>
                <div className="col-md-4">
                    <SelectBebida />
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search Drinck"
                    />
                </div>
            </div>

        </form>
    );
}

export default Form;