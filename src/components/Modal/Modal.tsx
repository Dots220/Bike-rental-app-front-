import {Button, Modal, TextField} from '@material-ui/core'
import * as React from 'react'
import classes from './Modal.module.css'
import {useAppDispatch} from '../../redux/hooks/hooks'
import {fetchBicycles, fetchRentBicycle} from "../../redux/features/bicyclesSlice";
import {Bicycles} from "../../type/bicycles";
import {useState} from "react";

interface ModalWindowPar {
    open: boolean
    bicycle: Bicycles
    handleClose: any
}

const ModalWindow: React.FC<ModalWindowPar> = ({open, bicycle, handleClose}) => {
    const dispatch = useAppDispatch()
    const [modalInp, setModalInp] = useState('')

    return (
        <Modal open={open} className={classes.root}>
            <div className={classes.container}>
                <div onClick={handleClose}>X</div>
                <input type="number" id="tentacles" name="tentacles"
                       min={1} max={20} onChange={(event) => setModalInp(event.target.value)}/>
                <Button
                    variant={'contained'}
                    onClick={() => {
                        dispatch(fetchRentBicycle({bicycle, rentTime: modalInp}))
                        handleClose()
                    }}
                >
                    Confirm
                </Button>
            </div>
        </Modal>
    )
}

export default ModalWindow