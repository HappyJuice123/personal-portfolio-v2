import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../backend/api";

export const Projects = ({ techStackObj, isTechStackLoading }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProjects()
      .then((data) => {
        setIsLoading(false);
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(true);
      });
  }, []);

  return !isLoading && !isTechStackLoading ? (
    <div className="mb-5 mt-5 main">
      <h2>Projects</h2>
      <img
        src={require("../avatar/avatar-projects.png")}
        alt="Project Avatar"
        className="img-fluid avatar"
      />
      <div className="d-flex justify-content-center">
        <section className="tech-icon-section">
          {Object.keys(techStackObj).map((tech) => {
            return tech !== "_id" ? (
              <div key={"All tech" + tech}>
                <img
                  src={require(`../icons/${tech}.svg`)}
                  alt={`${tech} Icon`}
                  title={tech}
                  className="tech-icon m-3 rounded-4 "
                />
                <p className="tech-text">{tech}</p>
              </div>
            ) : null;
          })}
        </section>
      </div>
      <section className="d-flex justify-content-center">
        <ul className="list-unstyled projects-section">
          {projects.map((project) => {
            return (
              <li
                key={project.id}
                className="project-card border border-white w-50 mx-auto mt-4 mb-4 rounded-5 py-auto"
                title={`View ${project.name} in More Detail`}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="nav-link fs-5 text-white project-link"
                >
                  <div className="pt-5 pb-5 " key={"testing" + project.id}>
                    <p className="fs-2 px-2">{project.name}</p>
                    <p className="p-4">
                      <img
                        src={`http://drive.google.com/uc?export=view&id=${project.img}`}
                        alt={`${project.name}`}
                        className="img-fluid rounded-4 border project-img"
                      />
                    </p>
                    <section className="d-flex justify-content-center">
                      <div className="ps-4 pe-4 tech-icon-section">
                        {project.techStack.map((tech) => {
                          return techStackObj[tech] ? (
                            <div key={project + tech}>
                              <img
                                src={require(`../icons/${tech}.svg`)}
                                alt={`${tech} Icon`}
                                title={tech}
                                className="tech-icon m-3 rounded-4"
                              />
                              <p className="tech-text">{tech}</p>
                            </div>
                          ) : (
                            <div key={project + tech}>
                              <img
                                src={require(`../icons/Tech.svg`).default}
                                alt={`${tech} Icon`}
                                title={tech}
                                className="tech-icon m-3 rounded-4"
                              />
                              <p className="tech-text">{tech}</p>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  ) : (
    <p className="pt-5">Page is Loading...</p>
  );
};
