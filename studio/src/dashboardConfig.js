export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "618082e3e0a14e009a34c803",
                  title: "Sanity Studio",
                  name: "tnooptaf-studio",
                  apiId: "3895afad-048c-44bd-82bb-b3897eb11c99",
                },
                {
                  buildHookId: "618082e3745394008d230b1c",
                  title: "Blog Website",
                  name: "tnooptaf",
                  apiId: "70d26a97-fd16-40f1-8bcd-612ab1341b7d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/evanoneil/TNOOPTAF",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://tnooptaf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
