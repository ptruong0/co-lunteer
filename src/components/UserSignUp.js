import { Form, Button, Row } from 'react-bootstrap';

const UserSignUp = (props) => {
    return (
        <Form className="sign-up-form" id="user-sign-up-form" onSubmit={(event) => {
            props.signUp(event);
            props.hideForm();
        }}>
            <h3>{props.event.title}</h3>
            <p>{props.event.organization}</p>
            <Form.Group  controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Name" required/>
            </Form.Group>
            <Form.Group controlId="formPhone">
                <Form.Label>Cell Phone Number</Form.Label>
                <Form.Control name="phone" type="tel" placeholder="(123)456-7890" required/>
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="name@example.com" />
            </Form.Group>
            
            <Form.Group controlId="formHours">
                <Form.Label>Hours</Form.Label>
                <Form.Control name="hours" type="number" min="1" max="8" defaultValue="1" required/>
            </Form.Group>
            <br />
            <Form.Group>
                <Button variant="outline-secondary" onClick={props.hideForm}>Cancel</Button>
                
                <Button type="submit" className="ml-5">Submit</Button>
            </Form.Group>
        </Form>
    );
}

export default UserSignUp;