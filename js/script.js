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
      '<div class="col col-sm-6 col-md-4 col-lg-4 border border-info rounded mx-3 my-3 px-5 mx-5 pt-4 pb-4">' +
      '<h2>' + data[i].first_name + '</h2>'+
      '\'My gender is ' + data[i].gender + ' and my favourite colour is ' + data[i].color + '.</p>' +
      'The ' + data[i].animal + ' is my favourite animal.' +
       ' My dream holiday location is ' + data[i].holiday + ' and I would love to go there one day.\'' +
      '</div>';
    }

  },//success
  error:function(){
    console.log('error');
  }//error

});//ajax

});//document.ready
