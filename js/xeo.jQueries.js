/**
 * Created by xeo2 on 9/17/16.
 */



jQuery(document).ready(function(){

    var minWindowHeight = 800,
        sideNavBar = $('nav');


    $(window).resize(function(){

        if(windowHeight >> minWindowHeight){
            sideNavBar.height($(window).height());
        }

    });

});