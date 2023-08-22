import { styled } from '@mui/styles'
import { Modal } from '@mui/material';

import React from 'react'

const ModalDialogue = styled(Modal)(({ theme }) => ({
    "& .box-container": {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
}))

export default function SendMessageModalDialgoue({open, closeFunction}) {
    console.log(open, closeFunction);
    return (
        <ModalDialogue open={open} onClose={() => closeFunction()}>
            <div className='box-container'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illo explicabo nobis officia pariatur cum dignissimos? Culpa debitis laborum laboriosam minima ducimus. Necessitatibus atque commodi reiciendis quisquam, fugit provident magni.
            </div>
        </ModalDialogue>
    )
}
