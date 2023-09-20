import { useEffect, useState } from "react";
import { getProjectByProjectId } from "../backend/api";
import { useParams } from "react-router-dom";

export const SingleProject = ({ techStackObj, isTechStackLoading }) => {
  const { id } = useParams();

  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [projectExists, setProjectExists] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProjectByProjectId(id)
      .then((data) => {
        setIsLoading(false);
        setProject(data);
        setProjectExists(true);
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err);
        setProjectExists(false);
      });
  }, [id]);

  return !projectExists ? (
    <p className="pt-5">Error 404 - This project does not exist.</p>
  ) : !isLoading && !isTechStackLoading ? (
    <section className="pt-5 mb-5 main">
      <img
        src={require("../avatar/avatar-work.PNG")}
        alt="Working Avatar"
        className="img-fluid avatar"
      />

      <div className="single-project  pt-4 pb-4 w-75 mx-auto mt-4 mb-4 rounded-5">
        <p className="fs-2 pt-4">{project.name}</p>
        <p className="p-4">
          <img
            src={`http://drive.google.com/uc?export=view&id=${project.img}`}
            alt={`${project.name}`}
            className="img-fluid rounded-4 border single-project-img"
          />
        </p>
        <p className="project-description py-3">{project.description}</p>
        <section className="d-flex justify-content-center pb-3">
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
        <div className="d-flex justify-content-center">
          <a
            href={project.github}
            className="text-decoration-none link"
            title="Opens GitHub Project in New Tab"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white link">
              GitHub -
              <img
                src={require("../icons/newTab.png")}
                alt="new tab"
                className="p-2"
              />
            </p>
          </a>
        </div>
        {project.host ? (
          <div className="d-flex justify-content-center">
            <a
              href={project.host}
              className="text-decoration-none link"
              title="Opens Hosted Project in New Tab"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-white link">
                Hosted Website -
                <img
                  src={require("../icons/newTab.png")}
                  alt="new tab"
                  className="p-2"
                />
              </p>
            </a>
          </div>
        ) : null}
      </div>
    </section>
  ) : (
    <p className="pt-5">Loading Project...</p>
  );
};
