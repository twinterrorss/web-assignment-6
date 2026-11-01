
$(document).ready(function () {


    $("#start8").on("click", function () {
        $("#box8")
            .stop(true, true)
            .css({
                left: "0px",
                top: "0px",
                width: "80px",
                height: "80px"
            })
            .animate({
                left: "140px",
                top: "50px",
                width: "130px",
                height: "130px"
            }, 1000);
    });




    $("#start9").on("click", function () {
        $("#box9")
            .stop(true, true)
            .css({
                left: "0px",
                top: "0px",
                width: "80px",
                height: "80px"
            })
            .animate({ left: "160px" }, 600)
            .animate({ top: "100px" }, 600)
            .animate({
                width: "40px",
                height: "40px"
            }, 600)
            .animate({
                left: "0px",
                top: "0px",
                width: "80px",
                height: "80px"
            }, 600);
    });




    $("#start10").on("click", function () {
        $("#box10")
            .stop(true, true)
            .css({
                left: "0px",
                top: "0px",
                width: "80px",
                height: "80px",
                opacity: 1
            })
            .animate({
                left: "150px",
                top: "60px",
                width: "140px",
                height: "140px",
                opacity: 0.3
            }, 1500);
    });

});
