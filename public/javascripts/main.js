
$(function(){
  var goTo = function(){
    var status = $('#status').val().trim();
    if(status === '' || isNaN(status)){
      return false;
    }
    window.location = '/status/' + status;
  };

  $('button').click(goTo);
  $('form').submit(function(){
    goTo();
    return false;
  });

});
