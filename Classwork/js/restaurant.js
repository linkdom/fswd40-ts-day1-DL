var breakfast = ["Ham & Eggs", "Rührei", "Pancakes"];
var lunch = ["Schweinsbraten", "Wiener Schnitzel", "Spaghetti Carbonara", "Lasagne", "Beef Tartare"];
var dinner = ["Gegrillter Spargel", "Geräucherte Forelle", "Hüftsteak vom BIO – Weiderind"];
var bPrice = [8.50, 9.20, 7.40];
var lPrice = [12.80, 13.20, 11.40, 15.60, 11.10];
var dPrice = [8.60, 22.60, 18.80];
var bSub = ["von drei Eiern mit Beinschinken & „Bio-Mehrsaat Brot“", "mit Frühlingsgemüse, Avocado & „Madame Crousto“", "mit Rhabarber-Himbeerröster & Schokoganache"];
var lSub = ["mit Semmelknödel und Sauerkraut", "mit Pommes Frites und Kartoffelsalat", "mit gemischtem Salat", "mit gemischtem Salat", "Kräutersenfsalat, Manchego, Steinofenbrot"];
var dSub = ["Amalfi Zitrone, Kräutergel", "Melanzani, Labneh", "Homemade Wedges, 2erlei Saucen"];
for (var i = 0; i < breakfast.length; i++) {
    var breakprice = bPrice[i].toFixed(2);
    var items = breakfast[i];
    var breaksub = bSub[i];
    var text = "\n    <div class=\"breakfast menu-restaurant\">\n      <span class=\"clearfix\">\n        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">\n        " + items + "\n        </a>\n        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n        <span class=\"menu-price\">\u20AC " + breakprice + "</span>\n      </span>\n      <span class=\"menu-subtitle\">" + breaksub + "</span>\n    </div>\n    ";
    document.getElementById("menu-wrapper").innerHTML += text;
}
for (var i = 0; i < lunch.length; i++) {
    var items = lunch[i];
    var lunprice = lPrice[i].toFixed(2);
    var lunsub = lSub[i];
    var text = "\n    <div class=\"lunch menu-restaurant\">\n      <span class=\"clearfix\">\n        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">" + items + "</a>\n        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n        <span class=\"menu-price\">\u20AC " + lunprice + "</span>\n      </span>\n      <span class=\"menu-subtitle\">" + lunsub + "</span>\n    </div>\n    ";
    document.getElementById("menu-wrapper").innerHTML += text;
}
for (var i = 0; i < dinner.length; i++) {
    var items = dinner[i];
    var dinprice = dPrice[i].toFixed(2);
    var dinsub = dSub[i];
    var text = "\n    <div class=\"dinner menu-restaurant\">\n      <span class=\"clearfix\">\n        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">" + items + "</a>\n        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n        <span class=\"menu-price\">\u20AC " + dinprice + "</span>\n      </span>\n      <span class=\"menu-subtitle\">" + dinsub + "</span>\n    </div>\n    ";
    document.getElementById("menu-wrapper").innerHTML += text;
}
