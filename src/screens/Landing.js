import { Button, Row, Col, Navbar } from 'react-bootstrap';
import './Pages.css';
import Header from '../components/Header.js';


const Landing = () => {
    /*}
        // <div className="landing-page d-flex align-items-center" >
            
        //     <Col >
        //     <h1>Finding ways to give back?</h1>
        //     <h1 >Let's get started</h1>
        //     <Row className="d-flex justify-content-center align-items-center pt-5">
        //         <Button className="btn-lg blue-purple" href="/user" style={{marginRight: "300px"}}>Volunteer</Button>
        //         <Button className="btn-lg blue-purple" href="/organizer">Organizer</Button>
        //     </Row>
        //     </Col>
     </div>*/
     return (

        <div class="cover-container d-flex p-3 mx-auto flex-column" style={{height: "100vh"}}>
        <Header />

        <main class="px-3">
            <h1>Are you ready to Colunteer?</h1>
            <p class="lead">Looking to make a change in your community? <br/>
                We will help you search for a volunteering event near you!
            </p>
            <p class="lead">
                <a href="/events" class="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark">Find
                    me
                    something!</a>
            </p>
        </main>

        <footer class="mt-auto text-white-50">
            <p>a hello:world hack in April 2021</p>
            <p>Tachpol, Philip, Sangeet</p>
        </footer>
    </div>
    );
};

export default Landing;