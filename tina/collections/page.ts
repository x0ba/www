import { Collection } from "tinacms";

const Page: Collection = {
  name: "page",
  label: "Pages",
  path: "content",
  match: {
    exclude: 'posts/**/**',
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};

export default Page;
