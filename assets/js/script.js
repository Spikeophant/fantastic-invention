// initalize object store of events.
if (localStorage.getItem('events') == null) {
  var events = {};
} else {
  events = JSON.parse(localStorage.getItem('events'));
}

// get the current day and display in the jumbotron.

$('#currentDay').text(moment().format('dddd, MMMM Do'));

setInterval(function() {
  $('#currentTime').text(moment().format('H:mm:ss A'));
}, 1000);


const mainPageRender = function() {
  for (let x = 7; x<19; x++) {
    let taskCol = $();
    const timeCol = $('<div class="col-1 hour"></div>')
        .text(moment().hour(x).format('h A'));
    // Make sure to make the moment output a number!
    if (Number(moment().hour(x).format('H')) < Number(moment().format('H'))) {
      taskCol = $('<textarea class="col-10 time-block past"  id="Text' + x +'"></textarea>');
    } else if (moment().hour(x).format('H') === moment().format('H')) {
      taskCol = $('<textarea class="col-10 time-block present" id="Text' + x +'"></textarea>');
    } else {
      taskCol = $('<textarea class="col-10 time-block future" id="Text' + x +'"></textarea>');
    }
    const addCol = $('<button class="btn btn-primary col-1 saveBtn fa-save fa-3x fa text-center" id="' + x + '"></button>');
    $('.container').append($('<div class=row>')
        .append(timeCol, taskCol, addCol));
    addCol.on('click', function(event) {
      if ($('#Text' + x).val() !== '') {
        events[x] = $('#Text' + x).val();
        localStorage.setItem('events', JSON.stringify(events));
      } else {
        alert('No event entered.');
      }
    });
    // Write events from storage.
    for (const key in events) {
      $('#Text' + key).val(events[key]);
    }
  }
};

setInterval(mainPageRender(), 1000);

// hook reset button click
$('#resetEvents').on('click', function() {
  events = {};
  localStorage.setItem('events', JSON.stringify(events));
  location.reload();
});
