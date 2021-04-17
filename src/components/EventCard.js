import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const EventCard = (props) => {
    return (

            <Card className="card">
                <Card.Img variant="top" src={props.event.imageUrl} className="event-img"/>
                <Card.Body>
                    <Card.Title>{props.event.title}</Card.Title>
                    <Card.Text class="text-secondary">{props.event.details}</Card.Text>

                </Card.Body>
                <ListGroup className="list-group-flush m-1">
                    <ListGroupItem className="event-info">{props.event.organization}</ListGroupItem>
                     <ListGroupItem className="event-info">{props.event.date.toLocaleDateString("en-US")}</ListGroupItem> 
                     <Button variant="info" className="p-0">Sign Up</Button>
                </ListGroup>
            </Card>

    );
}

export default EventCard;