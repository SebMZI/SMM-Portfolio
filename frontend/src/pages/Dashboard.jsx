import React, { useState } from "react";
import ModalDelete from "../components/Modal/ModalDelete";
import ModalEdit from "../components/Modal/ModalEdit";
import {
  useProjectsQuery,
  useAddProjectMutation,
} from "../features/projects/projectsApiSlice";

const Dashboard = () => {
  const { data: projects, isLoading, isSuccess } = useProjectsQuery();
  const [addProject, { isFetching }] = useAddProjectMutation();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [tech, setTechUsed] = useState("");
  const [website, setWebsite] = useState("");
  const [github, setGithub] = useState("");
  const [content, setContent] = useState("");
  const techused = JSON.stringify(tech?.split(","));
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [projectId, setProjectId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProject({ title, desc, image, techused, website, github, content })
      .unwrap()
      .then(() => e.target.reset());
  };

  const handleOpenModal = (id, type) => {
    setProjectId(id);
    if (type === "delete") {
      setModalDelete(true);
    } else if (type === "edit") {
      setModalEdit(true);
    }
  };

  return (
    <main className="dashboard">
      <section className="editDeleteProject">
        <h2>My Projects</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          isSuccess && (
            <>
              {modalDelete && (
                <ModalDelete
                  setModalDelete={setModalDelete}
                  projectId={projectId}
                  setProjectId={setProjectId}
                />
              )}
              {modalEdit && (
                <ModalEdit
                  setModalEdit={setModalEdit}
                  projectId={projectId}
                  setProjectId={setProjectId}
                />
              )}
              {projects?.map((project) => (
                <article key={project._id} className="project">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-content">
                    <h2>{project.title}</h2>
                    <p>{project.shortdesc}</p>
                  </div>
                  <div className="project-icons">
                    <i
                      className="fa-regular fa-pen-to-square"
                      onClick={() => handleOpenModal(project._id, "edit")}
                    ></i>
                    <i
                      className="fa-regular fa-trash-can"
                      onClick={() => handleOpenModal(project._id, "delete")}
                    ></i>
                  </div>
                </article>
              ))}
            </>
          )
        )}
      </section>
      <section className="addProject">
        <h2>ADD PROJECT</h2>
        <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="inputContainer">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="desc">Short desc</label>
            <input
              type="text"
              id="desc"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              placeholder="https://..."
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="tech">Tech used</label>
            <input
              type="text"
              id="tech"
              placeholder="Separated by coma"
              onChange={(e) => setTechUsed(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="website">Link to webiste</label>
            <input
              type="text"
              id="webiste"
              placeholder="https://..."
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="github">Link to github</label>
            <input
              type="text"
              id="github"
              placeholder="https://..."
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          {/* <div className="errorHandler">{message}</div> */}
          <button type="submit" className="submit-btn">
            Publish Project
          </button>
        </form>
      </section>
    </main>
  );
};

export default Dashboard;
