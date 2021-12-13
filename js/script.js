

$(document ).ready(function(){
     $("#btn").click(function(){
        // alert("button clicked")
         //$("#more").css({"display":"flex"})
         $("#more").fadeToggle(2000)
     })
     $("#btn").mouseenter(function(){
         $(this).css({"background":"red"})
     })
     $("#btn").mouseleave(function(){
        $(this).css({"background":"white"})
    })
    $("#emil").blur(function(){
        var text=$(this).val()
        if(text.length<6){
            alert("enter valid username")
        }
    })
    $(".botm").hover(function(){
        var div = $(".botm1");       
       div.animate({left: '10px'}, "slow");
       div.animate({left: '-10px'}, "slow");
       div.animate({right: '40px'}, "slow");
        div.animate({fontSize: '18px'}, "slow");
      });
})