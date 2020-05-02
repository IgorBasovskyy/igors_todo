import React from 'react';

import Container from 'react-bootstrap/Container';

import './Home.css';

const Home = () => {
    return (
        <div className="text-center welcome">
            <Container>
                <h2>
                    Welcome to the Igor's ToDo app!<br></br> With this wonderful application you can save your plans, responsibilities, birthdays and also your daily 
                    routine and not forget anything. You can use a wide range of functionality with which it will be even easier to not forget!
                </h2>
                <h1>Try it for FREE!</h1>
            </Container>
        </div>
    );
};

export default Home;