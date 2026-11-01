
$(document).ready(function () {

    $(".accordion-title").on("click", function () {

        let content = $(this).next(".accordion-content");

        $(".accordion-content").not(content).slideUp(400);

        content.stop(true, true).slideToggle(400);

    });

});
