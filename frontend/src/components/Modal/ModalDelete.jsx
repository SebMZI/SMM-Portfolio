import { useDeleteProjectMutation } from "../../features/projects/projectsApiSlice";

const ModalDelete = ({ setModalDelete, projectId }) => {
  const [deleteProject, { isLoading }] = useDeleteProjectMutation();

  const handleDelete = async () => {
    await deleteProject({ id: projectId })
      .unwrap()
      .then(() => setModalDelete(false));
  };
  return (
    <div className="modal">
      <div onClick={() => setModalDelete(false)} className="overlay"></div>
      <div className="modal-content">
        <h2>Do you really want to delete this project ?</h2>
        <div className="modal-btns">
          <button
            className="delete"
            onClick={() => {
              handleDelete(projectId);
              setModalDelete(false);
            }}
          >
            Delete
          </button>
          <button className="cancel" onClick={() => setModalDelete(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
