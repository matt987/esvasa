(function(window, undefined) {
  var dictionary = {
    "c03e9273-5e16-4a16-ac2e-a55a6caa48ec": "CO-SE",
    "e02f2b8e-7c2c-498d-8f5e-7fb6bb0f2d61": "CO-DG",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "c9255695-a820-4647-a216-25cfb23b2d42": "CS-FI",
    "7d065dfd-fc24-4dc3-8c67-60354f906654": "CO-END",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);