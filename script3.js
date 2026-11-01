
$(document).ready(function () {

    let itemNumber = 1;

    $("#addItem").on("click", function () {
        itemNumber++;
        $("#itemList").append("<li>Item " + itemNumber + "</li>");
    });

    $("#prependItem").on("click", function () {
        itemNumber++;
        $("#itemList").prepend("<li>Item " + itemNumber + "</li>");
    });

    $("#removeItem").on("click", function () {
        $("#itemList li").last().remove();
    });


    let imageChanged = false;

    $("#changeImage").on("click", function () {
        imageChanged = !imageChanged;

        if (imageChanged) {
            $("#myImage").attr("src",
                "https://placehold.co/300x180/16a34a/ffffff?text=Image+2");
        } else {
            $("#myImage").attr("src",
                "https://placehold.co/300x180/2563eb/ffffff?text=Image+1");
        }
    });

    $("#changeLink").on("click", function () {
        $("#myLink").attr("href", "https://developer.mozilla.org/");
        $("#myLink").text("Open MDN Web Docs");
    });


    $("#nameInput").on("input", function () {
        let name = $("#nameInput").val();
        $("#nameOutput").text(name);
    });

    $("#emailInput").on("input", function () {
        let email = $("#emailInput").val();
        $("#emailOutput").text(email);
    });

});
