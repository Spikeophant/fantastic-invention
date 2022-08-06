// get the current day and display in the jumbotron.

$('#currentDay').text(moment().format('dddd, MMMM Do'));

setInterval(function() {
  $('#currentTime').text(moment().format('H:mm:ss A'));
}, 1000);

const mainPageRender = function() {
  for (let x = 9; x<18; x++) {
    let taskCol = $();
    console.log(moment().format('H') > moment().hour(x).format('H'));
    console.log(moment().hour(x).format('H'));

    const timeCol = $('<div class="col-1 hour"></div>').text(moment().hour(x).format('h A'));
    if (moment().hour(x).format('H') < moment().format('H')) {
      taskCol = $('<div class="col-10 time-block past"></div>').text('test');
    } else if (moment().hour(x).format('H') === moment().format('H')) {
      taskCol = $('<div class="col-10 time-block present"></div>').text('test');
    } else {
      taskCol = $('<div class="col-10 time-block future"></div>').text('test');
    }
    const addCol = $('<div class="col-1 saveBtn"></div>');

    $('.container').append($('<div class=row>').append(timeCol, taskCol, addCol));
  }
};

mainPageRender();
