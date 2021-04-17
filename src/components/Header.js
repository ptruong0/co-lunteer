const Header = () => {
    return (
        <header class="mb-auto">
            <div>
                <h3 class="float-md-start mb-0">Colunteer!</h3>
                <nav class="nav nav-masthead justify-content-center float-md-end navbar-expand-lg">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" href="/events" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link text-light dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Events
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="events_env.html">Environmental Change</a>
                                    <a class="dropdown-item" href="#">Community Engagement</a>
                                    <a class="dropdown-item" href="#">Education Support</a>
                                </div>
                            </li>
                            <li class="nav-item"><a class="nav-link text-light" href="/events">Near Me</a></li>
                            <li class="nav-item"><a class="nav-link text-light" href="/events">Host</a></li>
                            <li class="nav-item"><a class="nav-link text-light" href="/events">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;