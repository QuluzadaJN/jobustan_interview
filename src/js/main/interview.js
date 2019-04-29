$(document).ready(function() {
    for(let i = 1; i<=6; i++){
        $("#interview_reject" + i).click(function(){
            $(".interview-card__body--" + i).css("display", "none");
            $(".interview-card__rejected--" + i).css("display", "block");
        });
    }    
});