/**
 * Created by chaika on 02.02.16.
 */
var Templates = require('../Templates');
var PizzaCart = require('./PizzaCart');
var Pizza_List = require('../Pizza_List');


$(".all").click(function(){
    initialiseMenu();
});
$(".meat").click(function(){
    filterPizza("meat");
    $(".var").text($(".meat").text());
});
$(".seafood").click(function(){
    filterPizza("ocean");
    $(".var").text($(".seafood").text());
});
$(".pineapple").click(function(){
    filterPizza("pineapple");
    $(".var").text($(".pineapple").text());
});
$(".mushrooms").click(function(){
    filterPizza("mushroom");
    $(".var").text($(".mushrooms").text());
});
$(".vegan").click(function(){
    filterPizza("vegan");
    $(".var").text($(".vegan").text());
});
//HTML едемент куди будуть додаватися піци
var $pizza_list = $("#pizza_list");

function showPizzaList(list) {
    //Очищаємо старі піци в кошику
    $pizza_list.html("");

    //Онволення однієї піци
    function showOnePizza(pizza) {
        var html_code = Templates.PizzaMenu_OneItem({pizza: pizza});

        var $node = $(html_code);
        if (pizza.big_size)

            $node.find(".big").click(function () {
                if (check(pizza, "big_size") === false) {
                    PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Big);
                }
            });

        $node.find(".small").click(function () {
            if (check(pizza, "small_size") === false) {
                PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Small);
            }
        });

        $pizza_list.append($node);
    }

    list.forEach(showOnePizza);
}

function check(pizza, size) {
    var present = false;
    for (var i = 0; i < PizzaCart.getPizzaInCart().length; i++) {
        if (PizzaCart.checkSim(pizza, i, size)) {
            present = true;
            break;
        }
    }
    return present;
}

function filterPizza(filter) {
    //Масив куди потраплять піци які треба показати
    var pizza_shown = [];

    var q = 0;
    Pizza_List.forEach(function (pizza) {
        //Якщо піка відповідає фільтру
        //pizza_shown.push(pizza);
        if (pizza.filters.findIndex(elem => elem === filter) != -1){
            pizza_shown.push(pizza);
            q+=1;
        }


        $(".circle").text(q);
        //TODO: зробити фільтри
    });

    //Показати відфільтровані піци
    showPizzaList(pizza_shown);
}

function initialiseMenu() {
    //Показуємо усі піци
    $(".var").text("All variety");
    $("#circle").text(8);
    showPizzaList(Pizza_List)
}

exports.filterPizza = filterPizza;
exports.initialiseMenu = initialiseMenu;