
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
      taskCol = $('<div class="col-10 time-block past"><textarea  id="Text' + x +'"></textarea></div>');
    } else if (moment().hour(x).format('H') === moment().format('H')) {
      taskCol = $('<div class="col-10 time-block present"><textarea class="form-control" id="Text' + x +'"></textarea></div>');
    } else {
      taskCol = $('<div class="col-10 time-block future"></div>');
    }
    const addCol = $('<div class="col-1 saveBtn fa-save fa-lg fa" id="' + x + '"><a href="#"></a></div>');
    $('.container').append($('<div class=row>')
        .append(timeCol, taskCol, addCol));
    addCol.on('click', function() {

    });
  }
};

setInterval(mainPageRender(), 60000);
