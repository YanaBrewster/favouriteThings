// console.log("js");


// // JSON FROM EXTERNAL FILE

// var person = JSON.parse(myData);
// console.log(person);

 $(document).ready(function(){

// AJAX METHOD

$.ajax({
  url:'js/data.json',
  type:'GET',
  data:'json',
  success: function(data){
    // console.log(data);
    var i;
    for (i=0; i<data.length; i++){
      document.getElementById('result').innerHTML +=
      '<div class="col col-sm-6 col-md-4 col-lg-4 border border-secondary rounded mx-1 my-1">' +
      '<h1>' + data[i].first_name  + ' ' +
       data[i].last_name + '</h1>' +
       '<h2>' + data[i].gender + '</h2>' +
       '<h3>' + data[i].email + '<h3>' +
      '</div>';
    }

  },//success
  error:function(){
    console.log('error');
  }//error

});//ajax

});//document.ready
