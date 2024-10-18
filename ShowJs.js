$(document).ready(function() {          
    var PopImageOne = document.getElementById("PopImageOne");

            //Image One Click
            $("#PopImageOne").click(function() {
                $(this).css("box-shadow", "4px 4px 41px #5b8cf779");
                $("#PopImageTwo").css("box-shadow", "none");
                $("#PopImageThree").css("box-shadow", "none");
                $("#PopImageFour").css("box-shadow", "none");
                 

                //Image Scale
                $("#RoboOne").css("scale", "1");
                $("#RoboTwo").css("scale", "0");
                $("#RoboThree").css("scale", "0");
                $("#RoboFour").css("scale", "0");

                //Image Blur
                $("#RoboOne").css("filter", "blur(0px)");
                $("#RoboTwo").css("filter", "blur(15px)");
                $("#RoboThree").css("filter", "blur(15px)");
                $("#RoboFour").css("filter", "blur(15px)");
            });

            //Image Two Click

            $("#PopImageTwo").click(function() {
                $(this).css("box-shadow", "4px 4px 41px #5b8cf779");
                $("#PopImageOne").css("box-shadow", "none");
                $("#PopImageThree").css("box-shadow", "none");
                $("#PopImageFour").css("box-shadow", "none");


                //Image Scale
                $("#RoboTwo").css("scale", "1");
                $("#RoboOne").css("scale", "0");
                $("#RoboThree").css("scale", "0");
                $("#RoboFour").css("scale", "0");

                //Image Blur
                $("#RoboTwo").css("filter", "blur(0px)");
                $("#RoboOne").css("filter", "blur(15px)");
                $("#RoboThree").css("filter", "blur(15px)");
                $("#RoboFour").css("filter", "blur(15px)");
            });

            //Image Three Click

            $("#PopImageThree").click(function() {
                $(this).css("box-shadow", "4px 4px 41px #5b8cf779");
                $("#PopImageOne").css("box-shadow", "none");
                $("#PopImageTwo").css("box-shadow", "none");
                $("#PopImageFour").css("box-shadow", "none");

                //Image Scale
                $("#RoboThree").css("scale", "1");
                $("#RoboTwo").css("scale", "0");
                $("#RoboOne").css("scale", "0");
                $("#RoboFour").css("scale", "0");

                //Image Blur
                $("#RoboThree").css("filter", "blur(0px)");
                $("#RoboTwo").css("filter", "blur(15px)");
                $("#RoboOne").css("filter", "blur(15px)");
                $("#RoboFour").css("filter", "blur(15px)");
            });


            //Image Three Click

            $("#PopImageFour").click(function() {
                $(this).css("box-shadow", "4px 4px 41px #5b8cf779");
                $("#PopImageTwo").css("box-shadow", "none");
                $("#PopImageThree").css("box-shadow", "none");
                $("#PopImageOne").css("box-shadow", "none");


                //Image Scale
                $("#RoboFour").css("scale", "1");
                $("#RoboTwo").css("scale", "0");
                $("#RoboThree").css("scale", "0");
                $("#RoboOne").css("scale", "0");

                //Image Blur
                $("#RoboFour").css("filter", "blur(0px)");
                $("#RoboTwo").css("filter", "blur(15px)");
                $("#RoboThree").css("filter", "blur(15px)");
                $("#RoboOne").css("filter", "blur(15px)");
            });
        });