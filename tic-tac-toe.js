



$(document).ready(function () {
$(handler1);
    // alert("Click To Play Tic Tac Toe!")
function handler1() {
    $(".square").one("click", handler2);
        $(".square").on( "click", function(event) {
            $(this)
                .text("O")
                .css("background-color", "red")
                .css("color", "black")
        })
        $(this).prop("disabled",true);
    }

function handler2() {
    $(".square").one("click", handler1);
            $(".square").on( "click", function(event) {
                $(this)
                    .text("X")
                    .css("background-color", "blue")
                    .css("color", "white")
            })
            $(this).prop("disabled",true);
    }
});
var values = new Array ();
$(".square").val(values);
console.log(values)
