var button = $(".saveBtn");

$(function timeStart() {
  // TODO:  Add a listener for click events on the save button. This code should

  function saveText(event) {
    var text = $(`#text-input-${this.value}`);
    console.log(text.val());

    localStorage.setItem(this.value, text.val());
  }

  button.on("click", saveText);

  function timeSet() {
    var timeNow = dayjs().hour();
    console.log(timeSet);
  }

  // TODO:  Add code to display the current date in the header of the page.

  //current date and time
  var dateTime = dayjs().format("dddd, MMMM D hh:mm A");
  $("#currentDay").text(dateTime);

  // TODO:  Add code to get any user input that was saved in localStorage and set

  for (let index = 9; index < 18; index++) {
    var textArea = $(`#text-input-${index}`);
    var savedText = localStorage.getItem(index);

    textArea.val(savedText);

    // TODO: Add code to apply the past, present, or future class to each time

    var timeBlock = $(`#hour-${index}`);

    if (timeBlock.attr("data-hour") < dayjs().hour()) {
      timeBlock.addClass("past");
    }
    if (timeBlock.attr("data-hour") > dayjs().hour()) {
      timeBlock.addClass("future");
    }
    if (timeBlock.attr("data-hour") == dayjs().hour()) {
      timeBlock.addClass("present");
    }

    console.log(dayjs().hour());
  }
});
