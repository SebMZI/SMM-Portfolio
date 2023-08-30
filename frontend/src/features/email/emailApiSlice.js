import { apiSlice } from "../../app/api/apiSlice";

export const emailApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (email) => ({
        url: "/send",
        method: "POST",
        body: { ...email },
      }),
    }),
  }),
});

export const { useEmailMutation } = emailApiSlice;
