$(document).ready(function(){

// AJAX METHOD

$.ajax({
  url:'js/fav_data.json',
  type:'GET',
  data:'json',
  success: function(data){
    // console.log(data);
    var i;
    for (i=0; i<data.length; i++){
      document.getElementById('result').innerHTML +=
      '<div class="col col-sm-6 col-md-4 col-lg-4 border border-secondary rounded mx-1 my-1 px-4 mx-4">' +
      '<h1> Name: ' + data[i].first_name + '</h1>'+
      '<h3> Gender: ' + data[i].gender + '</h3>' +
      '<h3> Animal: ' + data[i].animal + '</h3>' +
       '<h3> Holiday: ' + data[i].holiday + '<h3>' +
       '<h3> Color: ' + data[i].color + '<h3>' +
      '</div>';
    }

  },//success
  error:function(){
    console.log('error');
  }//error

});//ajax

});//document.ready
