$(document).ready(function(){

  todos.init();

});

var todos = {

  url: "http://tiy-fee-rest.herokuapp.com/collections/liztodo",

  init: function () {
    this.initEvents();
    this.initStyling();
  },

  initStyling: function(){

  },

  initEvents: function(){


    $(".tasklist").on("submit", ".addNew", function (event) {
      event.preventDefault();
      var newItem = {
        content: $(".todoEntry").val(),
        active:true,
      };

      todos.createItem(newItem);

    });

    $(".wrap").on("click", ".destroy", function (event) {
      event.preventDefault();
      var itemId = $(this).closest("p").data("itemid");
      todos.deleteItem(itemId);
    });

    $(".wrap").on("click", ".check", function(event){
      $(this).closest("p").addClass("completed");
      $(this).closest("p").removeClass("active");
      var itemId = $(this).parent().data("itemid");
      var updatedItem = {
        item:$(this).parent().text(),
        active:false,
      };
      toDos.updateItem(itemId, updatedItem);
    })
  },

  render: function(template, data, $el){
    var markup = _.template(template, data);

    $el.html(markup);
  },

  getItems: function(){

    $.ajax({
      url: todos.url,
      type: 'GET',
      success: function (response) {
        var items = window.items = response;
        todos.render(itemsTmpl, items, $(".list"));
      }
    });
  },

  createItem: function(newItem){

    $.ajax({
      url: todos.url,
      data: newItem,
      type: 'POST',
      success: function (response) {
        todos.getItems();
      }
    });
  },

  deleteItem: function(itemId){

    $.ajax({
      url: todos.url + "/" + itemId,
      type: 'DELETE',
      success: function (response) {
        todos.getItems();
      }

    });
  },

  updateItem: function (itemId, updatedItem) {

    $.ajax({
      url: todos.url + "/" + itemId,
      type: 'PUT',
      data: updatedItem,
      success: function (response) {
        todos.getItems();
      }
    });
  }

};
