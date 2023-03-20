import React from 'react';
import { Card,Badge,Button } from 'react-bootstrap';

export function Pizzacard ({data,setOrdered}) {
    return (
        <Card className='h-100 shadow-sm bg-white rounded'>
            <Card.Img variant='top' src='/assets/images/pizza.png'/>
            <Card.Body className='d-flex flex-column'>
                <div className='d-flex mb-2 jistify-content-between'>
                    <Card.Title className='mb-0 font-weight-bold'>
                        {data.name}
                    </Card.Title>
                    <Badge pill className='mb-1' variant='warning'>
                        ${data.price}
                    </Badge>
                </div>
                <Card.Text className='text-secondary'>
                    {data.description}
                </Card.Text>
                <Button onClick={()=> setOrdered()}
                    className="mt-auto font-weight-bold"
                    variant='success'
                    block>
                    Order Pizza
                </Button>
            </Card.Body>
        </Card>
    )
}