var $ = require('jquery');

$(document).on('ready', function(){
  $.ajax({
    type: 'GET',
    dataType: 'text',
    url: 'http://jsonip.com',
    success: function(data){
      $('body').html(data);
    }
  });
});
