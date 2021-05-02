import projects from "../utils/projects.json";

function Portfolio() {
    return (
        <>
            <div className="card m-3 w-90">
                <div className="card-body text-center" id="portfolio-card">
                    <h1 className="mb-5 cool-font">My Portfolio</h1>

                    <h6 className="card-subtitle mb-2 text-muted">These are some of the things I've made</h6>

                    <p className="card-text">They're pretty cool, check them out!</p>

                    <div className="row mb-5">

                        {projects.map(project =>{
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card card-body float-left proj-card">
                                <img src={project.imgPath} style={{height: "300px;"}} className="img-fluid m-5 mx-auto project-image"
                                    alt={project.altTag} />
                                <a href={project.projectLink} className="btn proj-btn stretched-link" target="_blank">{project.projectName}</a>
                            </div>
                        </div>
                            )
                        }) }

                        {/* <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card card-body float-left proj-card">
                                <img src="assets/images/goal-tracker.png" style={{height: "300px;"}} className="img-fluid m-5 mx-auto project-image"
                                    alt="Goal Tracker App" />
                                <a href="https://goal-tracker-kscc.herokuapp.com/" className="btn proj-btn stretched-link" target="_blank">Goal
              Tracker App</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card card-body float-left proj-card">
                                <img src="assets/images/fanpagr.png" style={{height: "300px;"}} className="img-fluid m-5 mx-auto project-image"
                                    alt="fanPagR Fan Page Generator" />
                                <a href="https://cmoss703.github.io/fanPagR/" className="btn proj-btn stretched-link" target="_blank">Fan Page
              Generator</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card card-body float-left proj-card">
                                <img src="assets/images/burger-time.png" style={{height: "300px;"}} className="img-fluid m-5 mx-auto project-image"
                                    alt="Lady eating salad placeholder" />
                                <a href="https://cmoss-burger-time.herokuapp.com/" className="btn proj-btn stretched-link" target="_blank">Eat
              Da Burger</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card card-body float-left proj-card">
                                <img src="assets/images/weather-app.png" style={{height: "300px;"}} className="img-fluid m-5 mx-auto project-image"
                                    alt="Grandma with a gun placeholder" />
                                <a href="https://cmoss703.github.io/weather-dashboard/" className="btn proj-btn stretched-link"
                                    target="_blank">Weather Dashboard</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card card-body float-left proj-card">
                                <img src="assets/images/planner.png" style={{height: "300px;"}} className="img-fluid m-5 mx-auto project-image"
                                    alt="Donut Fingers placeholder" />
                                <a href="https://cmoss703.github.io/daily-planner/" className="btn proj-btn stretched-link"
                                    target="_blank">Daily Planner</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card card-body float-left proj-card">
                                <img src="assets/images/password-gen.png" style={{height: "300px;"}} className="img-fluid m-5 mx-auto project-image"
                                    alt="Lipstick Lady placeholder" />
                                <a href="https://cmoss703.github.io/password-generator/" className="btn proj-btn stretched-link"
                                    target="_blank">Password Generator</a>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;