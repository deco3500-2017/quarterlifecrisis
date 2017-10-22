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
            for (var i = 1; i < 6; i++) {
            document.getElementById(i).classList.remove("iconActive"); 
        }
        previousRating = 0;
        currentRating = 0;
        console.log(currentRating);
        document.getElementById("profileRating").innerHTML = currentRating;
    } else if(element.classList.contains('iconActive')){
        for (var i = 5; i > newRating; i--) {
            document.getElementById(i).classList.remove("iconActive"); 
        }
        previousRating = newRating;
        currentRating = newRating;
        console.log(currentRating);
        document.getElementById("profileRating").innerHTML = currentRating;
    } else {
        for (var i = 1; i < newRating + 1; i++) {
            document.getElementById(i).classList.add("iconActive"); 
        }
        previousRating = newRating;
        currentRating = newRating;
        console.log(currentRating);
        document.getElementById("profileRating").innerHTML = currentRating;
    }
}

function search(ele) {
    if(event.key === 'Enter') {
        document.getElementById("commentText").innerHTML = ele.value + "<br><i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='1' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>" 
    }
}