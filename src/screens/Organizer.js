import Header from '../components/Header';

const Organizer = () => {
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
    )
}

export default Organizer;