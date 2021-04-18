
import Header from '../components/Header.js';
import { useState, useEffect } from 'react';
import { Row, Container, Form } from 'react-bootstrap';
import { RadioGroup, Radio } from 'react-radio-group';

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
    
    let display = null;
    if (props.eventsToDisplay) {
        display = props.eventsToDisplay;
    } else{
        display = props.events;
    }
    const eventComponents = display.map((e) => {
        return <EventCard event={e} getSignUpForm={props.getSignUpForm} showForm={showForm}/>;
    })

    return ( 
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />

        <main class="h-100">
            <h1 style={{marginTop: "10px"}}>EVENTS NEAR ME</h1>

             <Form onChange={props.onFilter} id="event-filter-btns">
                <div key={"inline-radio"} className="mb-3"></div>
                 <Form.Check inline label="All" type="radio" name="filter" id="radioAll" value="All"/> 
                <Form.Check inline label="Environmental Change" type="radio" name="filter" value="Environmental Change" id="radioEnv" />
                <Form.Check inline label="Community Engagement" type="radio" name="filter" value="Community Engagement" id="radioComm" />
                <Form.Check inline label="Education Support" type="radio" name="filter" value="Education Support" id="radioEdu" />
             </Form>

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