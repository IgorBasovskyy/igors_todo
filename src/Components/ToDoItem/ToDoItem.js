import React from 'react';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ToDoItem = ({getData}) => {

    return (
        <div className="ToDoList mt-3 w-100">
            <Container>
                <Row>
                    {getData}
                </Row>
            </Container>
        </div>
    );
}

export default ToDoItem;