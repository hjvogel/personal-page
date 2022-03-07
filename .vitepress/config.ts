import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
  return {
    lang: "en-US",
    title: "H John Vogel",
    href: "/about/Me",
    description: "John Vogel",
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/jpeg",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "John Vogel",
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
          content: "Home of John Vogel",
        },
      ],
    ],
    themeConfig: {
      logo: "/cafe.svg",
      docsDir: "/",
      lastUpdated: false,
      posts: await getPosts(),
      pageSize: 3,
      postLength: await getPostLength(),

      nav: [ 
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
    },
  };
}
export default config();