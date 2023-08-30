import React, { useEffect, useState } from "react";
import {
  useProjectQuery,
  useUpdateProjectMutation,
} from "../../features/projects/projectsApiSlice";

const ModalEdit = ({ setModalEdit, projectId }) => {
  const { data: project, isFetching, isSuccess } = useProjectQuery(projectId);
  const [updateProject, { isLoading }] = useUpdateProjectMutation();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [website, setWebsite] = useState("");
  const [github, setGithub] = useState("");
  const [techUsed, setTechUsed] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDesc(project.shortdesc);
      setImage(project.image);
      setWebsite(project.linkwebsite);
      setGithub(project.linkgithub);
      setContent(project.content);

      if (project && project.techused) {
        const elements = project.techused[0]
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim().replace(/"/g, ""));
        const techNames = elements.map((item) => item.replace(/,/g, ""));
        setTechUsed(techNames.join(", "));
      }
    }
  }, [project]);

  const handleEdit = async (e, projectId) => {
    e.preventDefault();
    await updateProject({
      id: projectId,
      title,
      desc,
      image,
      website,
      github,
      techUsed,
      content,
    }).unwrap();
    setModalEdit(false);
  };

  return (
    <div className="modal">
      <div className="overlay" onClick={() => setModalEdit(false)}></div>
      <div className="modal-content edit">
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          isSuccess && (
            <>
              <h2>Modify</h2>
              <form className="edit-form">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  defaultValue={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="desc">Short desc</label>
                <input
                  type="text"
                  id="desc"
                  defaultValue={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  id="image"
                  defaultValue={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor="tech">Tech used</label>
                <input
                  type="text"
                  id="tech"
                  defaultValue={techUsed}
                  onChange={(e) => setTechUsed(e.target.value)}
                />
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  defaultValue={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <label htmlFor="github">GitHub</label>
                <input
                  type="text"
                  id="github"
                  defaultValue={github}
                  onChange={(e) => setGithub(e.target.value)}
                />
                <label htmlFor="content">Content</label>
                <textarea
                  name="content"
                  id="content"
                  defaultValue={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <div className="modal-btns">
                  <button
                    className="modify"
                    onClick={(e) => handleEdit(e, projectId)}
                  >
                    Modify
                  </button>
                  <button
                    className="cancel"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalEdit(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default ModalEdit;
