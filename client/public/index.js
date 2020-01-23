var img = $(".add");
img.click(function() {
  $("input[type='text']").fadeToggle();
});

$("input[type='text']").keypress(function(event) {
  if (event.which == "13") {
    var text = $(this).val();

    $.post("/api/items", { title: text }, function(result) {
      $(this).val("");
      $("ul").append(
        "<li>" +
          '<img class="remove" src="/shield-min.png" >' +
         '<p>' +text +'</p>'+
          "</li>"
      );
    });
  }
});

$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
});

$(".hover").on("touchstart", function(touch) {
  touch.preventDefault();
  $(this)
    .find(".deleteImg")
    .toggleClass("hovereff");
});
$(".deleteImg").on("click", function() {
  var id = this.id;
  console.log(id);
  $.ajax({
    url: "/api/items/" + id,
    type: "DELETE",
    success: result => {
      $(this)
        .parents("li")
        .fadeOut(800, function() {
          $(this).remove();
        });
      // Do something with the result
    }
  });
});
