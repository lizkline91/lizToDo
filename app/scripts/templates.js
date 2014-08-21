var itemsTmpl = [
  "<% _.each(items, function(element, index, list) { %>",

  "<% if(element.complete === 'false') {%>",

  "<p class='completed' data-itemid=\"<%= element._id %>\">",
  "<img id='check' class='check-button' src='images/check.png'>",
  "<input type=\"text\" class=\"item\" placeholder=\" <%= element.content %> \" />",
  "<button class=\"destroy\">X</button>",
  "</p>",
  "<hr>",


  "<% } else { %>",

  "<p class='active' data-itemid=\"<%= element._id %>\">",
  "<img class='check-button' src='images/check-green.png'>",
  "<input type=\"text\" class=\"item\" placeholder=\"<%= element.content %> \" />",
  "<button class=\"destroy\">X</button>",
  "</p>",
  "<hr>",
  "<% } %>",

  "<% }); %>",

].join("\n");
