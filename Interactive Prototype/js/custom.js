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
//var avg_list = [];
var seb_avg_list = [];
var dan_avg_list = [];
var liam_avg_list = [];
var mitch_avg_list = [];
var saj_avg_list = [];

function addToAvgList(num){
    var user = getUser();
    if (user == "dan"){
        dan_avg_list.push(num);
        document.getElementById("danrating").innerHTML = getRatingAverage(dan_avg_list);
    } else if (user == "seb"){
        seb_avg_list.push(num);
        document.getElementById("sebrating").innerHTML = getRatingAverage(seb_avg_list);
    } else if (user == "liam"){
        liam_avg_list.push(num);
        document.getElementById("liamrating").innerHTML = getRatingAverage(liam_avg_list);
    }  else if (user == "saj"){
        saj_avg_list.push(num);
        document.getElementById("sanrating").innerHTML = getRatingAverage(saj_avg_list);
    } else if (user == "mitch"){
        mitch_avg_list.push(num);
        document.getElementById("mitchrating").innerHTML = getRatingAverage(mitch_avg_list);
    }

    //seb_avg_list.push(num);
   // avg_list.push(num); // add to list of ratings
 //
// get current rating for appending


}









function getRatingAverage(avg_list){
  var total = 0; // reset total
  for (var i = 0; i < avg_list.length; i++){
    total += avg_list[i]; // iterate through avg_list
  }
  //console.log(total);
  var avg = total / avg_list.length;
  // return average
  return avg;
}






//var comments = [];



$("input").on("keydown",function search(e) {
    if(e.keyCode == 13) {
        var id = $(this).attr('id');
        setUser(id);
        // enter key pressed
        var comment = $(this).val();
        if (comment != "") {
            //var appendStars = document.getElementsByClassName("fa-star");
            var clonedStars = $("i").clone();

            var appendText = comment + "<br>";//<!--i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";

            //var appendStars = "<i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";
            //  var commentRating = {appendText, appendStars, currentRating};


            // this needs to go to the stars...
            /*
                    var stars;// = "<i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";

                    switch(currentRating) {
                        case 0:
                            var stars = "<i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";
                            break;
                        case 1:
                            var stars = "<i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";
                            break;
                        case 2:
                            var stars = "<i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";
                            break;
                        case 3:
                            var stars = "<i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";
                            break;
                        case 4:
                            var stars = "<i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";
                            break;
                        case 5:
                            var stars = "<i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";
                            break;
                        default:
                            var stars = "<i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";
                    }

                    //var stars = "<i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";

            */
            /*
                         var string = stars;
                    var elements = $(string).map(function() {
                        return $('<i>').append(this).html();  // Basically `.outerHTML()`
                    });
            */

            var newcontent = document.createElement('div');
            newcontent.innerHTML = appendText + " Rating: " + currentRating; //+ stars;


            document.getElementById("commentText").appendChild(newcontent);           // Append <p> to <div> with id="myDIV"

        }
        updateAvg(id);
        //updateValue
        cleanUp();

    }//else {
       // alert("Please enter a comment!");
        //doc
    //}
});

var usr;

function setUser(id){
    switch(id) {
        case "usrseb":
            usr = "seb";
            break;
        case "usrdan":
            usr = "dan";

            break;
        case "usrliam":
            usr = "liam";

            break;
        case "usrmitch":
            usr = "mitch";

            break;
        case "usrsaj":
            usr = "saj";

            break;
        default:

    }
}

function getUser(){
    return usr;
}


function updateAverage(id){

}


function cleanUp(){
    document.getElementById("usr").value = "";
    currentRating = 0;

    // have to reset the star visual here.
    /*
    //class_names= document.getElementsByClassName("fa-star");
    currentRating = 0;
    for (var i = 0; i < class_names.length; i++) {
        //starRating();
        class_names[i].addEventListener('click', starRating);
    }*/

    //starRating();
}


$('.tag').click(function(){
    $(".newsfeed .card").hide();
    var search_term = $(this).text();
    console.log(search_term);
    console.log($("div div button:contains("+search_term+")"));
    var object = $("button:contains("+search_term+")").parent();
    $(".newsfeed").append(object);
});






function search(ele) {
    /*if(event.key == 'Enter') {
        document.getElementById("commentText").innerHTML = ele.value + "<br><i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>"
    }*/


  //var appendText = ele.value + "<br><i id='1' class='fa fa-star' aria-hidden='true'></i><i id='2' class='fa fa-star' aria-hidden='true'></i><i id='3' class='fa fa-star' aria-hidden='true'></i><i id='4' class='fa fa-star' aria-hidden='true'></i><i id='5' class='fa fa-star' aria-hidden='true'></i>";

}


