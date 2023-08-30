import { apiSlice } from "../../app/api/apiSlice";

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    projects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: (result = [], error, arg) => [
        "Project",
        ...result.map(({ id }) => ({ type: "Post", id })),
      ],
    }),
    project: builder.query({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [{ type: "Project", id: arg }],
    }),
    updateProject: builder.mutation({
      query: (post) => ({
        url: `/projects/${post.id}`,
        method: "PUT",
        body: { ...post },
      }),
      invalidatesTags: ["Project"],
    }),
    deleteProject: builder.mutation({
      query: (post) => ({
        url: `/projects/${post.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),
    addProject: builder.mutation({
      query: (post) => ({
        url: "/projects",
        method: "POST",
        body: { ...post },
      }),
    }),
    sendEmail: builder.mutation({
      query: (email) => ({
        url: "/send",
        method: "POST",
        body: { ...email },
      }),
    }),
  }),
});

export const {
  useProjectsQuery,
  useProjectQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useAddProjectMutation,
  useSendEmailMutation,
} = projectsApiSlice;
