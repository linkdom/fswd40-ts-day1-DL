var breakfast : Array<string>=["Ham & Eggs", "Rührei", "Pancakes"];
var lunch : Array<string>=["Schweinsbraten", "Wiener Schnitzel", "Spaghetti Carbonara", "Lasagne", "Beef Tartare"];
var dinner : Array<string>=["Gegrillter Spargel", "Geräucherte Forelle", "Hüftsteak vom BIO – Weiderind"];
var bPrice : number = [8.50, 9.20, 7.40];
var lPrice : number = [12.80, 13.20, 11.40, 15.60, 11.10];
var dPrice : number = [8.60, 22.60, 18.80];
var bSub : Array<string>=["von drei Eiern mit Beinschinken & „Bio-Mehrsaat Brot“", "mit Frühlingsgemüse, Avocado & „Madame Crousto“", "mit Rhabarber-Himbeerröster & Schokoganache"];
var lSub : Array<string>=["mit Semmelknödel und Sauerkraut", "mit Pommes Frites und Kartoffelsalat", "mit gemischtem Salat", "mit gemischtem Salat", "Kräutersenfsalat, Manchego, Steinofenbrot"];
var dSub : Array<string>=["Amalfi Zitrone, Kräutergel", "Melanzani, Labneh", "Homemade Wedges, 2erlei Saucen"];

for (let i = 0; i < breakfast.length; i++){
    let breakprice = bPrice[i].toFixed(2);
    let items = breakfast[i];
    let breaksub = bSub[i];
    let text = `
    <div class="breakfast menu-restaurant">
      <span class="clearfix">
        <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
        ${items}
        </a>
        <span style="left: 166px; right: 44px;" class="menu-line"></span>
        <span class="menu-price">€ ${breakprice}</span>
      </span>
      <span class="menu-subtitle">${breaksub}</span>
    </div>
    `
    document.getElementById("menu-wrapper").innerHTML += text
}

for (let i = 0; i < lunch.length; i++){
    let items = lunch[i];
    let lunprice = lPrice[i].toFixed(2);
    let lunsub = lSub[i];
    let text = `
    <div class="lunch menu-restaurant">
      <span class="clearfix">
        <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">${items}</a>
        <span style="left: 166px; right: 44px;" class="menu-line"></span>
        <span class="menu-price">€ ${lunprice}</span>
      </span>
      <span class="menu-subtitle">${lunsub}</span>
    </div>
    `
    document.getElementById("menu-wrapper").innerHTML += text
}

for (let i = 0; i < dinner.length; i++){
    let items = dinner[i];
    let dinprice = dPrice[i].toFixed(2);
    let dinsub = dSub[i];
    let text = `
    <div class="dinner menu-restaurant">
      <span class="clearfix">
        <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">${items}</a>
        <span style="left: 166px; right: 44px;" class="menu-line"></span>
        <span class="menu-price">€ ${dinprice}</span>
      </span>
      <span class="menu-subtitle">${dinsub}</span>
    </div>
    `
    document.getElementById("menu-wrapper").innerHTML += text
}
