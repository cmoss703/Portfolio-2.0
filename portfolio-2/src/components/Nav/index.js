function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">CHRISTINA MOSS</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">About</a>
                        <a className="nav-link" href="portfolio.html">Portfolio</a>
                        <a className="nav-link" href="contact.html">Contact</a>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Nav;