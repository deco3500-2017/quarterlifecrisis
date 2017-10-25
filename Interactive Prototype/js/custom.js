function hideCard() {
  $(".hide").css("display", "none");
}

function shareCard() {
  $(".popup").css("display", "visible");
}

//document.getElementById("myBtn").addEventListener("click", displayDate);

function showComments(){
    console.log(this);
}

//function displayDate() {
//    var likeLabel = parseInt( document.getElementById("demo").innerHTML);
//
//    likeLabel = likeLabel + 1;
//
//    document.getElementById("demo").innerHTML = likeLabel;
//}


var class_names= document.getElementsByClassName("fa-star");

for (var i = 0; i < class_names.length; i++) {
    class_names[i].addEventListener('click', starRating);
}

var previousRating = 0;
var currentRating = 0;

function starRating() {
    var element = this;
    var newRating = parseInt(this.id);

    if(previousRating == 1 && element.classList.contains('iconActive')){
      // limit to rating of 0
            for (var i = 1; i < 6; i++) {
            document.getElementById(i).classList.remove("iconActive");
        }
        previousRating = 0;
        currentRating = 0;
        console.log(currentRating);
        document.getElementById("profileRating").innerHTML = currentRating;
        addToAvgList(currentRating);

    } else if(element.classList.contains('iconActive')){
      // lower rating
        for (var i = 5; i > newRating; i--) {
            document.getElementById(i).classList.remove("iconActive");
        }
        previousRating = newRating;
        currentRating = newRating;
        console.log(currentRating);
        document.getElementById("profileRating").innerHTML = currentRating;
        addToAvgList(currentRating);
    } else {
      // higher rating
        for (var i = 1; i < newRating + 1; i++) {
            document.getElementById(i).classList.add("iconActive");
        }
        previousRating = newRating;
        currentRating = newRating;
        console.log(currentRating);
        document.getElementById("profileRating").innerHTML = currentRating;
        addToAvgList(currentRating);
    }


}

// list of ratings
var avg_list = [];

function addToAvgList(num){
  avg_list.push(num); // add to list of ratings
  var x = getRatingAverage();
}

function getRatingAverage(){
  var total = 0; // reset total
  for (var i = 0; i < avg_list.length; i++){
    total += avg_list[i]; // iterate through avg_list
  }
  //console.log(total);
  var avg = total / avg_list.length;
  // return average
  return avg;
}








$("input").on("keydown",function search(e) {
    if(e.keyCode == 13) {
      // enter key pressed

      var comment = $(this).val();

      var appendText = comment + "<br><i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";



      var newcontent = document.createElement('div');
      newcontent.innerHTML = appendText;

      document.getElementById("commentText").appendChild(newcontent);           // Append <p> to <div> with id="myDIV"

        //alert($(this).val());
    }
});






var para = document.createElement("P");                       // Create a <p> node
var t = document.createTextNode("This is a paragraph.");      // Create a text node
para.appendChild(t);

function test(){                                     // Append the text to <p>

  document.getElementById("commentText").appendChild(para);           // Append <p> to <div> with id="myDIV"
}








function search(ele) {
    if(event.key == 'Enter') {
        document.getElementById("commentText").innerHTML = ele.value + "<br><i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>"
    }


  //var appendText = ele.value + "<br><i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";

}
