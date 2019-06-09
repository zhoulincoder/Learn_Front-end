const htmlStr = '<p><em>lorem</em><strong>ipsum</strong></p>';
// lorem ipsum strip tags
// 正则 replace splice 规则
const stripHTMLTagps = str => str.replace(/<[^>]*>/g, '');
