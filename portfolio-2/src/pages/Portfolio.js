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
                                <a href={project.projectLink} className="btn proj-btn stretched-link" target="_blank" rel="noreferrer noopener">{project.projectName}</a>
                            </div>
                        </div>
                            )
                        }) }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;