import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

const CreateToDo = ({ createToDo }) => {
    const [show, setShow] = useState(false);

    const [toDoData, setToDoData] = useState({
        title: null,
        date: null,
        status: 'Assigned',
        estimated_time: null,
        description: null
    });

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    const handleChange = (event) => {
        const {target} = event;
        
        toDoData[target.name] = target.value;
        setToDoData(toDoData);
    };
    
    const validateToDo = () => {
        const A_TO_Z = /^[a-zA-Z\s]+$/i;

        if (!A_TO_Z.test(toDoData.title)) {
            alert('You can only write letters from A-Z');
        } else if (toDoData.date === null) {
            alert('Please fill start date');
        } else if (toDoData.estimated_time === null) {
            alert('Please set estimated time for the task');
        } else {
            setShow(false);
            createToDo(toDoData);
        }
    };

    return (
        <>
            <Button className="mt-3" variant="dark" onClick={handleShow}>
                Add ToDo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        className="mb-3"
                        type="text"
                        name="title"
                        onChange={handleChange}
                    />
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                        className="mb-3"
                        type="date"
                        name="date"
                        onChange={handleChange}
                    />
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                        as="select"
                        className="mb-3"
                        name="status"
                        onChange={handleChange}
                    >
                        <option>Assigned</option>
                        <option>Important</option>
                        <option>Done</option>
                        <option>Waiting</option>
                    </Form.Control>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                        className="mb-3"
                        type="date"
                        name="estimated_time"
                        onChange={handleChange}
                    />
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" 
                        className="mb-3"
                        name="description"
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="danger"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={validateToDo}
                    >
                        Save ToDo
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CreateToDo;