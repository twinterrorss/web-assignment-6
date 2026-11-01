$("#hide_btn").on("click", function(){
    $("#message").hide()
})
$("#show_btn").on("click", function(){
    $("#message").show()
})
$("#toggle_btn").on("click", function(){
    $("#message").toggle()
})

$("#hide_img").on("click", function(){
    $("#image").fadeOut(1000)
})
$("#show_img").on("click", function(){
    $("#image").fadeIn(1000)
})
$("#toggle_img").on("click", function(){
    $("#image").fadeToggle(1000)
})

$("#btn_toggle").on("click", function(){
    $("#panel").slideToggle(1000)
})
$("#btn_up").on("click", function(){
    $("#panel").slideUp(1000)
})
$("#btn_down").on("click", function(){
    $("#panel").slideDown(1000)
})