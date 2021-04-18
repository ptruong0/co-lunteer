import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Landing from './screens/Landing';
import Organizer from './screens/Organizer';
import Events from './screens/Events';

import eventPlaceholders from './eventPlaceholders';


const App = () => {

    let [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [eventsToDisplay, setEventsToDisplay] = useState(null);
    let history = useHistory();
    

    const getSignUpForm = (event) => {
    setSelectedEvent(event);
  }



  useEffect(() => {
    setEvents(eventPlaceholders);
  }, []);



  const signUp = (e) => {
    e.preventDefault(); // prevent from reloading instantly
    const form = document.querySelector("#user-sign-up-form");
    const user = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      hoursToVolunteer: form.hours.value
    };
    const targetIndex = events.findIndex(ev => ev.title === selectedEvent.title && ev.organization === selectedEvent.organization);
    // do not add volunteer if they already signed up
    if (!events[targetIndex].signedUp.find(u => u.name === user.name)) {
      events[targetIndex].signedUp.push(user);
      setEvents(events);
      console.log(events);
      
      form.reset();
    }
  }

  const addEvent = (e) => {
    e.preventDefault();
    const form = document.querySelector("#organizer-new-event-form");
    const newEvent = {
      title: form.name.value,
      organization: form.org.value,
      details: form.details.value,
      date: new Date(form.date.value),
      type: form.type.value,
      imageUrl: form.imageUrl.value,
      signedUp: []
    };
    events.push(newEvent);
    setEvents(events);
    console.log(events);

    form.reset();
    
    history.push("/events");
  }

  const onFilter = (e) => {

    const option = document.querySelector("#event-filter-btns");
    console.log(option.filter.value);
    if (option.filter.value === "All")
    {
      setEventsToDisplay(null);
    } else {
      const filteredEvents = events.filter((ev) => {
          return ev.type === option.filter.value;
      });
      setEventsToDisplay(filteredEvents);
    }
    console.log(events);
    console.log(eventsToDisplay);
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/events" render={(props) => (<Events {...props} events={events} eventsToDisplay={eventsToDisplay} signUp={signUp} selectedEvent={selectedEvent} getSignUpForm={getSignUpForm} onFilter={onFilter}/>)} />
        <Route path="/organizer" render={(props) => (<Organizer {...props} addEvent={addEvent}/>)}/>
        <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;
