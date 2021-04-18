
import Header from '../components/Header.js';
import { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';

import EventCard from '../components/EventCard';
import UserSignUp from '../components/UserSignUp';

const Events = (props) => {
    
    const [showSignUp, setShowSignUp] = useState(false);
    

    const showForm = () => {
        setShowSignUp(true);
    }

    const hideForm = () => {
        setShowSignUp(false);
    }

    useEffect(() => {
        console.log(props.events);
    })
    

    const eventComponents = props.events.map((e) => {
        return <EventCard event={e} getSignUpForm={props.getSignUpForm} showForm={showForm}/>;
    })

    return ( 
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />

        <main class="h-100">
            <h2 style={{margin: "10px", textAlign: "left", color: "black"}}>Events near me</h2>
            <Row class="d-flex justify-content-left">{eventComponents}</Row>
            
        {showSignUp ? <UserSignUp signUp={props.signUp} hideForm={hideForm} event={props.selectedEvent}/> : null}
        </main>

        <footer class="mt-auto text-white-50">
            <p>a hello:world hack in April 2021</p>
            <p>Tachpol, Philip, Sangeet</p>
        </footer>
        </div>
    );
};

export default Events;