import React, { Fragment, useState, useContext } from 'react';

const useDrinck = (initialState, category) => {

    const [state, handleSelect] = useState(initialState)

    const SelectBebida = () => (
        <Fragment>
            <select
                name="category"
                id="category"
                className="form-control"
                onChange={(e) => handleSelect(e.target.value)}
                value={state}
            >
                <option defaultValue="" disabled >---Selecciona---</option>
                {category.map(resp => (
                    <option key={resp.strCategory} value={resp.strCategory}>{resp.strCategory}</option>
                ))}
            </select>
        </Fragment>
    );

    return [state, SelectBebida];

}

export default useDrinck;