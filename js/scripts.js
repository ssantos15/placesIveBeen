function Entry(iLocation,iLandmark,iYear,iNotes){
  this.iLocation = iLocation;
  this.iLandmark = iLandmark;
  this.iYear = iYear;
  this.iNotes = iNotes;
}

$(document).ready(function() {
  $("#logbook").submit(function(event) {
    event.preventDefault();
    debugger;
    var iLocation = $("#location").val();
    var iLandmark = $("#landmark").val();
    var iYear = $("#year").val();
    var iNotes = $("#notes").val();

    var newEntry = new Entry(iLocation, iLandmark, iYear, iNotes);

    $("div#output").append("<br><span class='entry'>" + newEntry.iLocation + "</span>");

    $(".entry").last().click(function() {
      $("#log").toggle();
      $("#log h2").text(newEntry.iLocation);
      $(".oLocation").text(newEntry.iLocation);
      $(".oLandmark").text(newEntry.iLandmark);
      $(".oYear").text(newEntry.iYear);
      $(".oNotes").text(newEntry.iNotes);
    });
  });
});
