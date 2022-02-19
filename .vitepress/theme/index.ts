import DefaultTheme from "vitepress/theme";
import MyLayout from "./components/MyLayout.vue";
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
import "./custom.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, siteData }) {  //router
    app.component("Archives", Archives);
    app.component("Tags", Tags);
  },
};
