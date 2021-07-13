// main_menu , .sub_menu
$(document).ready(function(){
    $(".main_menu>li").mouseover(function(){
        $(this).children(".sub_menu").stop().slideDown('slow');
    });
    $(".main_menu>li").mouseleave(function(){
        $(this).children(".sub_menu").stop().slideUp('fast');
    });
});

// .m_gnb_icon
$(document).ready(function(){
    $(".m_gnb_icon").toggle(
        function(){
        $("#gnb").slideDown(700);
        $(".gnb_box").slideDown(700);
    },
    function(){
        $("#gnb").slideUp(700);
        $(".gnb_box").slideUp(700);
    });

    $(".gnb_box").click(function(){
        $("#gnb").slideUp(700);
        $(".gnb_box").slideUp(700);
    });
});

// .family_brand
$(document).ready(function(){
    $(".family_brand>a").click(function(){
        $(".brand").stop().slideDown();
    });
    $(".family_brand").mouseleave(function(){
        $(".brand").stop().slideUp();
    });
});