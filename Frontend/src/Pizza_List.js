/**
 * Created by diana on 12.01.16.
 */

var pizza_info = [
    {
        id:1,
        icon:'assets/images/pizza_7.jpg',
        title: "Imprezza",
        type: 'Meat',
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['куриця'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small:{
            weight: 370,
            size: 30,
            price: 99
        },
        big:{
            weight: 660,
            size: 40,
            price: 169
        },
        is_new:true,
        is_popular:true,
        filters :["meat","pineapple"]

    },
    {
        id:2,
        icon:'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'Meat',
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small:{
            weight: 460,
            size: 30,
            price: 139
        },
        big:{
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular:true,
        filters :["meat","mushroom",]
    },
    {
        id:3,
        icon:'assets/images/pizza_1.jpg',
        title: "Polo Mix",
        type: 'Meat',
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small:{
            weight: 430,
            size: 30,
            price: 115
        },
        big:{
            weight: 780,
            size: 40,
            price: 179
        },
        filters :["meat","pineapple"]
    },
    {
        id:4,
        icon:'assets/images/pizza_5.jpg',
        title: "Siciliana",
        type: 'Meat',
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small:{
            weight: 450,
            size: 30,
            price: 111
        },
        big:{
            weight: 790,
            size: 40,
            price: 169
        },
        filters :["meat", "mushroom"]
    },
    {
        id:17,
        icon:'assets/images/pizza_3.jpg',
        title: "Margaritha",
        type: 'Vegan',
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small:{
            weight: 370,
            size: 30,
            price: 89
        },
        filters :["vegan"]
    },
    {
        id:43,
        icon:'assets/images/pizza_6.jpg',
        title: "Tastes' mix",
        type: 'Meat',
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small:{
            weight: 470,
            size: 30,
            price: 115
        },
        big:{
            weight: 780,
            size: 40,
            price: 180
        },
        filters :["meat","mushroom","pineapple"]
    },
    {
        id:90,
        icon:'assets/images/pizza_8.jpg',
        title: "Dolce Mare",
        type: 'Seafood',
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: [ 'вершки']
        },
        big:{
            weight: 845,
            size: 40,
            price: 399
        },
        filters :["ocean"]
    },
    {
        id:6,
        icon:'assets/images/pizza_4.jpg',
        title: "Rosso Gusto",
        type: 'Seafood',
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small:{
            weight: 400,
            size: 30,
            price: 189
        },
        big:{
            weight: 700,
            size: 40,
            price: 299
        },
        filters :["ocean"]
    }
];

module.exports = pizza_info;