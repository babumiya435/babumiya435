import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'react-bootstrap';

export function Confirmation({toggle}){
    return (
        <Toast onClose = {()=> toggle(false)}>
            <Toast.Header>
                <strong className="mr-auto">Your order is in the oven!</strong>
                <small>
                    just now
                </small>
            </Toast.Header>
            <Toast.Body>
                Your Delicious pizaa will be with you in 30min!
            </Toast.Body>
        </Toast>
    )
}