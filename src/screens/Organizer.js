import Header from '../components/Header';
import { Form, Button } from 'react-bootstrap';

const Organizer = () => {
    return (

        <div class="cover-container d-flex p-3 mx-auto flex-column" style={{ height: "100vh" }}>
            <Header />
            <h2 style={{color: "#6bffff"}}>Publish a volunteering event for your organization.</h2>
            <main class="px-3">
                <Form onSubmit={() => {}}>
                    <Form.Group controlId="formOrg">
                        <Form.Label>Organization</Form.Label>
                        <Form.Control name="org" type="text" placeholder="Organization Name" required />
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Name of Event</Form.Label>
                        <Form.Control name="name" type="text" placeholder="e.g. Cancer Research Bake Sale Fundraiser" required />
                    </Form.Group>
                    <Form.Group controlId="formLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control name="location" type="text" placeholder="e.g. UC Berkeley Memorial Glade" required />
                    </Form.Group>
                    <Form.Group controlId="formDate">
                        <Form.Label>Date of Event</Form.Label>
                        <Form.Control name="date" type="date"/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit">Post Event</Button>
                    </Form.Group>
                </Form>
            </main>

            <footer class="mt-auto text-white-50">
                <p>a hello:world hack in April 2021</p>
                <p>Tachpol, Philip, Sangeet</p>
            </footer>
        </div>
    )
}

export default Organizer;