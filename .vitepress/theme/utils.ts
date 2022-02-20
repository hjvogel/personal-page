type Post = {
  frontMatter: {
    date?: string;
    title?: string;
    tags?: string[];
    description?: string;
  };
  regularPath: string;
};

export function initTags(post: Post[]) {
  const data: any = {};
  if (post && post?.length) {
    for (let i = 0; i < post?.length; i++) {
      const element = post[i];
      const tags = element.frontMatter.tags;
      if (Array.isArray(tags)) {
        tags.forEach((item) => {
          if (!data[item]) {
            data[item] = [];
          }
          data[item].push(element);
        });
      }
    }
  }
  return data;
}

export function useYearSort(_post: Post[]) {
  const data = [];
  let year = "0";
  let num = -1;
  if (_post && _post.length) {
    for (let index = 0; index < _post?.length; index++) {
      const element = _post[index];
      if (element.frontMatter.date && element.frontMatter.date.split("-")) {
        const y = element.frontMatter.date?.split("-")[0];
        if (y === year) {
          data[num].push(element);
        } else {
          num++;
          data[num] = [] as any;
          data[num].push(element);
          year = y;
        }
      }
    }
  }
  return data;
}
