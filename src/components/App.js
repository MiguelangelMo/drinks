import React, { Fragment, useEffect, useState } from 'react';

// Components
import Header from './Header';
import Form from './Form';
import ListRecepts from './ListRecepts';

// CSS
import '../css/App.css';

//Context
import CategoriaProvider from '../context/CategoriaContext';
import RecetasProvider from '../context/RecetasContext';
import ModalProvider from '../context/ModalContext';

function App() {

  // const [drinck, handleDrinck] = useState({})

  return (
    <CategoriaProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header
            title="Recetas de Bebidas"
          />

          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <Form
                  title="Formulario Para Buscar Bebidas"
                />
              </div>
            </div>
            <div>
              <ListRecepts />
            </div>
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriaProvider>
  );
}

export default App;
