import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

//Context
import { ContextModal } from '../context/ModalContext'

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Recepts = ({ resp }) => {

    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const { modal, handleState, handleModal } = useContext(ContextModal)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        handleState(null);
        handleModal([])
    };

    const showIngredients = (modal) => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (modal[`strIngredient${i}`]) {
                ingredients.push(
                    <li>
                        {modal[`strIngredient${i}`]}
                        {modal[`strMeasure${i}`]}
                    </li>
                );
            }
        }

        return ingredients;
    }

    return (
        <div className="col-md-4">
            <div className="card">

                <h2 className="card-header">
                    {resp.strDrink}
                </h2>
                <img
                    className="card-img-top"
                    src={resp.strDrinkThumb}
                    alt="Imagen Cargando..."
                />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={() => {
                            handleState(resp.idDrink)
                            handleOpen()
                        }
                        }
                    >
                        Ver Recetas
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        handleState
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{modal.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {modal.strInstructions}
                            </p>
                            <img src={modal.strDrinkThumb} alt={modal.strDrink} className="img-fluid my-4" />

                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                {showIngredients(modal)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Recepts;