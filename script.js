// on load hande color coding and data recover yfrom local storage
$(document).ready(function() {
  var date = dayjs().format('dddd MMMM D')
  var hour =dayjs().format('H')

  $('#currentDay').text(date);
  // color code based off time of day
  function color(){
    $('.time-block').each(function(){

     if (parseInt($(this).attr("id")) < hour) {
      $(this).addClass("past")
     }

     if (parseInt($(this).attr("id")) == hour) {
      $(this).addClass("present")
     }

     if (parseInt($(this).attr("id")) > hour) {
      $(this).addClass("future")
     }
    })
  }
  // call color function
  color();
  // handle the data recovery from local storage
  function handleRecovery(){
    $('.time-block').each(function() {
      var content = localStorage.getItem($(this).attr("id"));
      if (content !== null) {
        this.children[1].textContent = content
      }
    })
  }
  handleRecovery();
});
// function for handling save content
function handleSave(event){
  console.log(event.target)
  var activity = event.target.parentElement.parentElement.getAttribute('id');
  var content = event.target.parentElement.parentElement.children[1].value;
  localStorage.setItem(activity, content);
}
// event liscener for save handling
$('.time-block').on('click', '.saveBtn', handleSave);