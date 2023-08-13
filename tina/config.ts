import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const searchIndexerToken = process.env.TINA_SEARCH_INDEXER_TOKEN

export default defineConfig({
  branch,
  // clientId: "b3225cd8-5dac-4758-af8d-f37d01483dba", // Get this from tina.io
  // token: "8012cb3d5b0712a36770b69dcf90cd435e740162", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: searchIndexerToken,
    },
  },
});
