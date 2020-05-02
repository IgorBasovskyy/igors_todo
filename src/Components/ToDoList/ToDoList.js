import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './ToDoList.css';

import ToDoItem from '../ToDoItem';

const ToDoList = ({data, deleteToDo, doneToDo}) => {

    if (!data) return null; 

    const getData = data.map((element) => {
        return (
            <Col className="col-lg-4 mb-5" key={element.id}>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title className={element.completed && 'done'}>{element.title}</Card.Title>
                        <Card.Text>
                            <b>Started:</b> {element.estimated_time}<br></br>
                            <b>Untill:</b> {element.date}
                        </Card.Text>
                        <Form.Label><b>Status:</b></Form.Label>
                        <Form.Control
                            as="select"
                            className="mb-3 mt-1"
                        >
                            <option>Important</option>
                            <option>Done</option>
                            <option>Assigned</option>
                            <option>Waiting</option>
                        </Form.Control>
                        <Card.Text>
                            {element.description}
                        </Card.Text>
                        
                        <Button
                            variant="success"
                            onClick={() => doneToDo(element.id)}
                        >
                            Done
                        </Button>{' '}
                        <Button 
                            variant="danger"
                            onClick={() => deleteToDo(element.id)}
                        >
                            Achive
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        )  
    })

    return (
        <ToDoItem getData={getData} />
    );
}

export default ToDoList;