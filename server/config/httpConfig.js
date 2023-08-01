module.exports = {
  HTTP_API: 'https://app.magicupsell.com',
  ExtractId: function(str){
    var matches = str.match(/(\d+)/);
    if(matches) return matches[0];
  },
  CombineId: function(str){
    var str1 = "gid://shopify/ScriptTag/";
    str = str1.concat(str);
    return str;
  },
  CombinePID: function(str){
    var str1 = "gid://shopify/Product/";
    str = str1.concat(str);
    return str;
  },
};
