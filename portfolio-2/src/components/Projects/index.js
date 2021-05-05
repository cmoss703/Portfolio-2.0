function Projects(projects) {
    return (
        <>
            {projects.map(project => {
                return (
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card card-body float-left proj-card">
                            <img src={project.imgPath} style={{ height: "300px;" }} className="img-fluid m-5 mx-auto project-image"
                                alt={project.altTag} />
                            <a href={project.projectLink} className="btn proj-btn stretched-link" target="_blank" rel="noreferrer noopener">{project.projectName}</a>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Projects;