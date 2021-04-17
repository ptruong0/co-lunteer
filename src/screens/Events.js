
import Header from '../components/Header.js';
import { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';

import EventCard from '../components/EventCard';

const Events = () => {
    const [events, setEvents] = useState([]);

    const eventPlaceholders = [
    {
        title: "Pet Adoption Fair",
        organization: "Cal Animal Shelter",
        details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
        date: new Date("April 20, 2021 11:00:00"),
        imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fpuppies.jpg"
    },
    {
        title: "Food Distribution for Homeless ",
        organization: "Soup Kitchen",
        details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
        date: new Date("April 18, 2021 1:00:00"),
        imageUrl: "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/20171115arJubileeSoup01-1569077243.jpg"
    },{
        title: "Pet Adoption Fair",
        organization: "Cal Animal Shelter",
        details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
        date: new Date("April 20, 2021 11:00:00"),
        imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fpuppies.jpg"
    },{
        title: "Pet Adoption Fair",
        organization: "Cal Animal Shelter",
        details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
        date: new Date("April 20, 2021 11:00:00"),
        imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fpuppies.jpg"
    },{
        title: "Pet Adoption Fair",
        organization: "Cal Animal Shelter",
        details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
        date: new Date("April 20, 2021 11:00:00"),
        imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fpuppies.jpg"
    },{
        title: "Pet Adoption Fair",
        organization: "Cal Animal Shelter",
        details: "Come help walk and feed the dogs and cats at our local animal shelter on Main Street.",
        date: new Date("April 20, 2021 11:00:00"),
        imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F01%2Fpuppies.jpg"
    },]

    useEffect(() => {
        setEvents(eventPlaceholders);
    }, []);

    const eventComponents = events.map((e) => {
        return <EventCard event={e}/>;
    })

    return ( 
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />

        <main class="h-100">
            <h1 style={{margin: "0px", textAlign: "left"}}>Events near me</h1>
            <Row class="d-flex justify-content-left">{eventComponents}</Row>
        </main>

        <footer class="mt-auto text-white-50">
            <p>a hello:world hack in April 2021</p>
            <p>Tachpol, Philip, Sangeet</p>
        </footer>
        </div>
    );
};

export default Events;