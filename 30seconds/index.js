const htmlStr = '<p><em>lorem</em><strong>vds</strong></p>'
// 正则 
const stripHTMLTags = str => str.replace(/<[^>]*>g/, '');
