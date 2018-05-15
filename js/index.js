$(document).ready(function() {});

function loadIt(inp) {
  $.ajax({
    url: "//en.wikipedia.org/w/api.php",
    data: {
      action: "query",
      list: "search",
      srsearch: $("#search").val(),
      format: "json",
      formatversion: 2
    },
    dataType: "jsonp",
    success: function(x) {
      $("div#mainContent").text("")
      $.each(x.query.search, function(index, value) {
        var ahref =
          "<a href=https://en.wikipedia.org/wiki/" +
          value.title.replace(/ /g, "_") +
          ">" +
          value.title +
          "</a>";

        var $newDiv = $("<div/>")
          .addClass("well elem")
          .html(
            "<div><b>" +
              ahref +
              "</b>" +
              "<br>" +
              value.snippet +
              "...<br><br></div>"
          );

        $("#mainContent").append($newDiv);
      });
    }
  });
}

$("div#mainContent").on("mouseenter", "div.elem", function() {
  $(this).css({ "border-left": "5px solid #0000cd" });
});
$("div#mainContent").on("mouseleave", "div.elem", function() {
  $(this).css({ "border-left": "" });
});
// $('textarea').bind("enterKey",function(e){
//     alert("Enter");
//     });
$("#search").keyup(function(e) {
  if (e.keyCode == 13) {
    // var inp = $("#search").val();
    // $("div#mainContent").text("");
    loadIt();
  }
});

$("#submit").click(function() {
  // var inp = $("#search").val();
  // $("div#mainContent").text("");
  loadIt();
});

$("#random").click(function() {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
});