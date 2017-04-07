// Created by Brian Huang //

// Update large image when corresponding small image is hovered
// Add dark border when small images are hovered
// Update description of color as well
$(document).on('mouseenter','#a-small',function(){
    $("#img-lg").attr('src', 'assets/product-large-a.jpg');
    $(".color-dynamic").text("French Blue");
    $(this).addClass("add-border");
});
$(document).on('mouseout','#a-small',function(){
    $(this).removeClass("add-border");
});

$(document).on('mouseenter','#b-small',function(){
    $("#img-lg").attr('src', 'assets/product-large-b.jpg');
    $(".color-dynamic").text("Black & White Stripes");
    $(this).addClass("add-border");
});
$(document).on('mouseout','#b-small',function(){
    $(this).removeClass("add-border");
});

$(document).on('mouseenter','#c-small',function(){
    $("#img-lg").attr('src', 'assets/product-large-c.jpg');
    $(".color-dynamic").text("Yellow & White Stripes");
    $(this).addClass("add-border");
});
$(document).on('mouseout','#c-small',function(){
    $(this).removeClass("add-border");
});

$(document).on('mouseenter','#d-small',function(){
    $("#img-lg").attr('src', 'assets/product-large-d.jpg');
    $(".color-dynamic").text("Red & White Stripes");
    $(this).addClass("add-border");
});
$(document).on('mouseout','#d-small',function(){
    $(this).removeClass("add-border");
});


// Expand and collapse
$(document).ready(function(){
    $("#info-txt").on("hide.bs.collapse", function(){
        $("#info-tag").html('<span class="glyphicon glyphicon-triangle-right"></span> Collapsed');
    });
    $("#info-txt").on("show.bs.collapse", function(){
        $("#info-tag").html('<span class="glyphicon glyphicon-triangle-bottom"></span> Expanded');
    });

    $("#info-txt2").on("hide.bs.collapse", function(){
        $("#info-tag2").html('<span class="glyphicon glyphicon-triangle-right"></span> Collapsed');
    });
    $("#info-txt2").on("show.bs.collapse", function(){
        $("#info-tag2").html('<span class="glyphicon glyphicon-triangle-bottom"></span> Expanded');
    });

    $("#info-txt3").on("hide.bs.collapse", function(){
        $("#info-tag3").html('<span class="glyphicon glyphicon-triangle-right"></span> Collapsed');
    });
    $("#info-txt3").on("show.bs.collapse", function(){
        $("#info-tag3").html('<span class="glyphicon glyphicon-triangle-bottom"></span> Expanded');
    });
});