import marked from "marked";

/**
 * 生のmarkdown をhtml のリストに変換する
 * @param {string} raw - markdown
 * @return {string[]} htmlList - htmlの文字列リスト
 */
export const convertMarkdownToHtml = (raw) => {
  marked.setOptions({headerIds:false});
  const raws = raw.split("---");
  const htmls = raws.map((markdown)=>{
    const html = marked(markdown);
    return html
  })
  return htmls;
}

