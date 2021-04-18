import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Landing from './screens/Landing';
import Organizer from './screens/Organizer';
import Events from './screens/Events';


const App = () => {

    let [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    let history = useHistory();

    const getSignUpForm = (event) => {
    setSelectedEvent(event);
  }



  const eventPlaceholders = [
    {
      title: "Pet Adoption Fair",
      organization: "Cal Animal Shelter",
      details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
      date: new Date("April 20, 2021 11:00:00"),
      imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fpuppies.jpg",
      signedUp: []
    },
    {
      title: "Food Distribution for Homeless ",
      organization: "Soup Kitchen",
      details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
      date: new Date("April 18, 2021 1:00:00"),
      imageUrl: "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/20171115arJubileeSoup01-1569077243.jpg",
      signedUp: []
    }, {
      title: "Pet Adoption Fair",
      organization: "Cal Animal Shelter",
      details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
      date: new Date("April 20, 2021 11:00:00"),
      imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fpuppies.jpg",
      signedUp: []
    }, {
      title: "Pet Adoption Fair",
      organization: "Cal Animal Shelter",
      details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
      date: new Date("April 20, 2021 11:00:00"),
      imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fpuppies.jpg",
      signedUp: []
    }, {
      title: "Pet Adoption Fair",
      organization: "Cal Animal Shelter",
      details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
      date: new Date("April 20, 2021 11:00:00"),
      imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fpuppies.jpg",
      signedUp: []
    }, {
      title: "Pet Adoption Fair",
      organization: "Cal Animal Shelter",
      details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
      date: new Date("April 20, 2021 11:00:00"),
      imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fpuppies.jpg",
      signedUp: []
    },]

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
      imageUrl: form.imageUrl.value,
      signedUp: []
    };
    events.push(newEvent);
    setEvents(events);
    console.log(events);

    form.reset();
    
    history.push("/events");
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/events" render={(props) => (<Events {...props} events={events} signUp={signUp} selectedEvent={selectedEvent} getSignUpForm={getSignUpForm} />)} />
        <Route path="/organizer" render={(props) => (<Organizer {...props} addEvent={addEvent}/>)}/>
        <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;
