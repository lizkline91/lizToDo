var itemsTmpl = [
  "<% _.each(items, function(element, index, list) { %>",
  "<p data-itemid=\"<%= element._id %>\">",
  "<img id='check' class='check-button' src='images/check.png'>",
  "<input type=\"text\" class=\"item\" placeholder=\" <%= element.content %> \" />",
  "<button class=\"destroy\">X</button>",
  "</p>",
  "<hr>",
  "<% }); %>"
].join("\n");
