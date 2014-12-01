'use strict';

var $ = require('jquery');

$(document).on('ready', function(){
  $.ajax({
    type: 'GET',
    dataType: 'text',
    url: 'http://localhost:3000/ip',
    success: function(data){
      console.log(data);
      $('body').html(data);
    }
  });
});
