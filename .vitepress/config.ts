import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
  return {
    lang: "en-US",
    title: "John",
    href: "/about/Me",
    description: "I am John Doe",
    head: [
      [
        "link",
        {
          rel: "icon",
          // type: 'image/png',
          type: "image/jpeg",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "John Doe",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "Home",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: "Home of John Doe",
        },
      ],
    ],
    themeConfig: {
      //repo: "my/GithubSite", moved into about
      logo: "/tea.svg",
      docsDir: "/",
      // docsBranch: "master",
      lastUpdated: false,
      posts: await getPosts(),
      pageSize: 3,
      postLength: await getPostLength(),

      //       algolia: {  search tool
      //         apiKey: "xxx",
      //         indexName: "my-docs",
      //       },

      nav: [  // TODO menu or toggle & hide options of side shown (no link needed to where we are)
        {
          text: "Home",
          link: "/",
        },
        {
          text: "Tags",
          link: "/tags",
        },
        {
          text: "Hist",
          link: "/archives",
        },
	      {  // move up
          text: "About",
	link: "/about/Me",
	      },        
      ],

      // sidebar: {
      //   "./posts/": false,
      //   "/": false,
      // },
      //sidebar: false,
    },
  };
}
export default config();