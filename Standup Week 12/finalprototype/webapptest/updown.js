$(document).ready(function() {
    var all_ratings = []
    var total = 0;
    var average = 0;

    $('#submitrating').click(function(){
        document.getElementById('Warning').innerHTML = "";
        var total = 0;
        var average = 0;
        var rating = document.getElementById('ratingsubmission');
        var text ="";
        var i;
        for (i = 0; i < rating.length ;i++) {
            text += rating.elements[i].value;
        }
        var number = parseFloat(text);
        
        if (number >= 1 && number <= 5) {
            all_ratings.push(number);
        }else{
            document.getElementById('Warning').innerHTML = "This is not a valid output. Try a number between 1 - 5";
        };

        if (all_ratings.length > 0) {
            var j;
            for (j=0; j < all_ratings.length; j++){
                total += all_ratings[j];
            }

            average = total / all_ratings.length;
            console.log(average);
        }
    simpleaverage = average.toFixed(1);
    document.getElementById('rating').innerHTML = simpleaverage;
    var p = $( "#elevator" );
    var position = p.position();

    if (simpleaverage < 1.5){
        $('#elevator').animate({top:"380px"});
    }else if(simpleaverage < 2){
        $('#elevator').animate({top:"330px"});
    }else if(simpleaverage < 2.5){
        $('#elevator').animate({top:"280px"});
    }else if(simpleaverage < 3){
        $('#elevator').animate({top:"230px"});
    }else if(simpleaverage < 3.5){
        $('#elevator').animate({top:"180px"});
    }else if(simpleaverage < 4){
        $('#elevator').animate({top:"130px"});
    }else if(simpleaverage < 4.5){
        $('#elevator').animate({top:"80px"});
    }else{
        $('#elevator').animate({top:"30px"});
    }



    });
});