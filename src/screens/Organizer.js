import Header from '../components/Header';
import { Form, Button } from 'react-bootstrap';

const Organizer = (props) => {
    return (

        <div class="cover-container d-flex p-3 mx-auto flex-column" style={{ height: "100vh" }}>
            <Header />
            
            <main class="px-3">
                <div className="d-flex justify-content-center">
                <Form onSubmit={props.addEvent} id="organizer-new-event-form">
                    <h2 style={{color: "#6bffff", paddingBottom: "10px"}}>Publish a volunteering event for your organization.</h2>
                    <Form.Group controlId="formOrg">
                        <Form.Label>Organization*</Form.Label>
                        <Form.Control name="org" type="text" placeholder="e.g. Red Cross Alameda County Division" required />
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Name of Event*</Form.Label>
                        <Form.Control name="name" type="text" placeholder="e.g. Cancer Research Bake Sale Fundraiser" required />
                    </Form.Group>
                    <Form.Group controlId="formLocation">
                        <Form.Label>Location*</Form.Label>
                        <Form.Control name="location" type="text" placeholder="e.g. UC Berkeley Memorial Glade" required />
                    </Form.Group>
                    <Form.Group controlId="formDate">
                        <Form.Label>Date of Event*</Form.Label>
                        <Form.Control name="date" type="date" required/>
                    </Form.Group>
                    <Form.Group controlId="formImage">
                        <Form.Label>Image address/URL you'd like to attach</Form.Label>
                        <Form.Control name="imageUrl" type="url" placeholder="e.g. https://image/of/puppies.jpg" />
                    </Form.Group>
                    <Form.Group controlId="formDetails">
                        <Form.Label>Any other details about the event</Form.Label>
                        <Form.Control name="details" as="textarea" placeholder="e.g. Come help us sell cookies and other baked goods in the park to fight cancer. All proceeds will be donated to the American Cancer Society. 12pm - 6pm at the center of the park."/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit">Post Event</Button>
                    </Form.Group>
                </Form>
                </div>
            </main>

            <footer class="mt-auto text-white-50">
                <p>a hello:world hack in April 2021</p>
                <p>Tachpol, Philip, Sangeet</p>
            </footer>
        </div>
    )
}

export default Organizer;