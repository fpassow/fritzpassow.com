(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(23)},23:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(11),o=t.n(i),l=t(2),c=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"A Steampunk Trading Game"),n.a.createElement("p",null,"This is a classic trading game. You start with some money. Buy a ship. Buy some cargo. Sail to another port. Sell the cargo at a profit. And repeat until rich"),n.a.createElement("p",null,"Along the way, you can upgrade to bigger and faster ships so you can make money even faster."),n.a.createElement("p",null,"But you have to be quick. Your crew is eating up your supplies. When you are in port, that costs money. And at sea, you can starve."),n.a.createElement("p",null,n.a.createElement("i",null,"Note: This game currently runs client-side only. There's no server. And if you leave the page, you start over.")))},s=function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Playing the Game"),n.a.createElement("p",null,'You start with some money, measured in Florins. Ships are for sale in the upper left. Click to buy one. Any ship you can afford will have a "Buy" button based on your cash plus the value of your current ship.'),n.a.createElement("p",null,"Next, buy some cargo. You will learn the prices at each port as you play. But for now, there's no point in exploring with an empty hold. Cargos for sale are shown at the bottom of the left hand panel. Any cargo you can buy will have the local price displayed on its icon. Click to buy it and it will automatically move to fill an empty space in your ship' hold."),n.a.createElement("p",null,"Your ship is shown in the center column on a large screen, or use the PORT, SHIP, and MAP tabs on mobile."),n.a.createElement("p",null,"Be sure to buy rations for you and your crew. The game automatically buys rations for you when you are in port. But if you set sail without food, you will starve before you reach the next port. Every crewmember uses one unit of rations per day. You can click the single barrel symbol to buy one unit at a time. Or click the group to fill your ship's capacity with a single click."),n.a.createElement("p",null,"When you get a ship that needs fuel, you will find that fuel works just like rations."),n.a.createElement("p",null,"The right-most panel, or the MAP panel on mobile, shows the map of the world. When you are ready to set sail, click an arrow to move to an adjacent square. Your ship will bob over the waves for a time. How long depends on its speed. Then it will arrive in the new square and you will see a new set of arrows showing the squares you can move to."),n.a.createElement("p",null,"When you reach another port, your cargos in the SHIP panel will display the local price which you can sell them for. Click a cargo to sell it"),n.a.createElement("p",null,"Buy bigger and faster ships when you can. A ship will display a buy button when you become rich enough buy it. Note that the value of your current ship counts as a trade-in."),n.a.createElement("p",null,"And when you amass a fortune of fifty thousand florins, you win!"))},p=t(1),u=Math.random();function d(){return u++}var m={isForSale:!0,isLoaded:!1,shipId:null},h={oliveoil:"Olive oil",coal:"Coal",leopardwood:"Leopard Wood",clockworks:"Clockworks",kippers:"Kippers",fluff:"Fluff"};function y(e,a,t){var r={shipId:"ship_"+a+"_"+d(),placeId:e,shipType:a,shipName:t,food:0,cargo:[],fuel:0,isForSale:!0,isFlyer:!1};switch(a){case"fishboat":r.shipTypeName="Fish Boat",r.basePrice=500,r.crewSize=1,r.maxFuel=0,r.speed=1,r.fuelPerMove=0,r.maxCargo=4,r.maxFood=8;break;case"albionsteamclipper":r.shipTypeName="Albion Steam Clipper",r.basePrice=12e3,r.crewSize=4,r.maxFuel=7,r.speed=3,r.fuelPerMove=1,r.maxCargo=12,r.maxFood=20;break;case"enginebarge":r.shipTypeName="Engine Barge",r.basePrice=4e3,r.crewSize=2,r.maxFuel=7,r.speed=1,r.fuelPerMove=1,r.maxCargo=20,r.maxFood=14;break;case"silverzeppelin":r.shipTypeName="Silver Zeplin",r.basePrice=2e4,r.crewSize=2,r.maxFuel=10,r.speed=2,r.fuelPerMove=2,r.maxCargo=6,r.maxFood=16,r.isFlyer=!0;break;case"steamturbinehovercraft":r.shipTypeName="Steam Turbine Hovercraft",r.basePrice=5e3,r.crewSize=2,r.maxFuel=12,r.speed=3,r.fuelPerMove=3,r.maxCargo=4,r.maxFood=10,r.isFlyer=!0;break;default:alert('Unknown ship type "'+a+'"')}return r}var g=n.a.createElement("span",null,"\u0192"),f=["fishboat","albionsteamclipper","enginebarge","silverzeppelin","steamturbinehovercraft"].map(function(e){return y("bogoPlace",e,"bogoName")}),b={marginTop:"50px"},E={textAlign:"center",border:"1px solid gray",borderRadius:"20px",margin:"20px auto",padding:"10px",maxWidth:"400px"},S={margin:"20px auto"},v=function(e){var a=e.ship;return n.a.createElement("div",{style:E},n.a.createElement("img",{src:"img/"+a.shipType+"_large.png",alt:"",style:{maxWidth:"90%"}}),n.a.createElement("div",null,n.a.createElement("h3",null,a.shipTypeName),n.a.createElement("table",{border:"1",style:S},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Base Price"),n.a.createElement("td",null,a.basePrice,g)),n.a.createElement("tr",null,n.a.createElement("td",null,"Crew Size"),n.a.createElement("td",null,a.crewSize)),n.a.createElement("tr",null,n.a.createElement("td",null,"Fuel Capacity"),n.a.createElement("td",null,a.maxFuel)),n.a.createElement("tr",null,n.a.createElement("td",null,"Max Speed"),n.a.createElement("td",null,a.speed)),n.a.createElement("tr",null,n.a.createElement("td",null,"Fuel per Square Moved"),n.a.createElement("td",null,a.fuelPerMove)),n.a.createElement("tr",null,n.a.createElement("td",null,"Cargo Bays"),n.a.createElement("td",null,a.maxCargo)),n.a.createElement("tr",null,n.a.createElement("td",null,"Food Store"),n.a.createElement("td",null,a.maxFood))))))},T=function(){return n.a.createElement("div",{style:b},n.a.createElement("h2",null,"Ships"),n.a.createElement("p",null,"Here are all the ships and other vehicles available in the game. Consult this if you want to calculate exactly how much fuel or food are required for a given trip, or to understand how much money you have to accumulate to trade up to a better vehicle."),n.a.createElement("p",null,"However, as long as you keep your food and fuel supplies topped up, you can also play by just watching the UI and seeing what happens."),f.map(function(e){return n.a.createElement(v,{key:e.shipType,ship:e})}))},x={oliveoil:100,coal:50,leopardwood:200,clockworks:300,kippers:100,fluff:10},F=[{name:"Ocean",placeId:"wet_1_1",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:1,y:1,prices:{}},{name:"Ocean",placeId:"wet_1_2",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:1,y:2,prices:{}},{name:"Ocean",placeId:"wet_1_3",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:1,y:3,prices:{}},{name:"Ocean",placeId:"wet_1_4",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:1,y:4,prices:{}},{name:"Ocean",placeId:"wet_1_5",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:1,y:5,prices:{}},{name:"Ocean",placeId:"wet_1_6",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:1,y:6,prices:{}},{name:"Ocean",placeId:"wet_1_7",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:1,y:7,prices:{}},{name:"Ocean",placeId:"wet_1_8",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:1,y:8,prices:{}},{name:"Ocean",placeId:"wet_2_1",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:2,y:1,prices:{}},{name:"Point A",placeId:"pointa",placeType:"PORT",description:"Not far frmo Point B",isFuelForSale:!0,fuelPrice:10,isFoodForSale:!0,foodPrice:5,x:2,y:2,prices:Object(p.a)({},x,{fluff:70,clockworks:100})},{name:"Third Place",placeId:"thirdplace",placeType:"PORT",description:"Not home or work",isFuelForSale:!0,fuelPrice:10,isFoodForSale:!0,foodPrice:15,x:2,y:3,prices:Object(p.a)({},x,{fluff:70,leopardwood:30})},{name:"Land",placeId:"dry_2_4",placeType:"LAND",description:"Land",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:2,y:4,prices:{}},{name:"Port Harbor",placeId:"portharbor",placeType:"PORT",description:"A nice little fishing village",isFuelForSale:!0,fuelPrice:10,isFoodForSale:!0,foodPrice:5,x:2,y:5,prices:Object(p.a)({},x,{kippers:5,oliveoil:10})},{name:"Land",placeId:"dry_2_6",placeType:"LAND",description:"Land",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:2,y:6,prices:{}},{name:"Nether",placeId:"nether",placeType:"PORT",description:"A southern region",isFuelForSale:!0,fuelPrice:10,isFoodForSale:!0,foodPrice:10,x:2,y:7,prices:Object(p.a)({},x,{coal:10})},{name:"Ocean",placeId:"wet_2_8",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:2,y:8,prices:{}},{name:"Ocean",placeId:"wet_3_1",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:3,y:1,prices:{}},{name:"Point B",placeId:"pointb",placeType:"PORT",description:"Not far frmo Point A",isFuelForSale:!0,fuelPrice:10,isFoodForSale:!0,foodPrice:5,x:3,y:2,prices:Object(p.a)({},x,{fluff:70})},{name:"Land",placeId:"dry_3_3",placeType:"LAND",description:"Land",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:3,y:3,prices:{}},{name:"Land",placeId:"dry_3_4",placeType:"LAND",description:"Land",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:3,y:4,prices:{}},{name:"Heck",placeId:"heck",placeType:"PORT",description:"It's all going to here.",isFuelForSale:!0,fuelPrice:10,isFoodForSale:!0,foodPrice:5,x:3,y:5,prices:Object(p.a)({},x,{coal:10})},{name:"Land",placeId:"dry_3_6",placeType:"LAND",description:"Land",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:3,y:6,prices:{}},{name:"Gibber",placeId:"gibber",placeType:"PORT",description:"Home of a popular language.",isFuelForSale:!0,fuelPrice:10,isFoodForSale:!0,foodPrice:5,x:3,y:7,prices:Object(p.a)({},x,{fluff:2})},{name:"Ocean",placeId:"wet_3_8",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:3,y:8,prices:{}},{name:"Ocean",placeId:"wet_4_1",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:4,y:1,prices:{}},{name:"Ocean",placeId:"wet_4_2",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:4,y:2,prices:{}},{name:"Ocean",placeId:"wet_4_3",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:4,y:3,prices:{}},{name:"Ocean",placeId:"wet_4_4",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:4,y:4,prices:{}},{name:"Ocean",placeId:"wet_4_5",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:4,y:5,prices:{}},{name:"Ocean",placeId:"wet_4_",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:4,y:6,prices:{}},{name:"Ocean",placeId:"wet_4_7",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:4,y:7,prices:{}},{name:"Ocean",placeId:"wet_4_8",placeType:"AT_SEA",description:"At sea",isFuelForSale:!1,fuelPrice:-1,isFoodForSale:!1,foodPrice:-1,x:4,y:8,prices:{}}],P={oliveoil:"img/oliveoil.png",fishboat:"img/fishboat.png",albionsteamclipper:"img/albionsteamclipper.png",enginebarge:"img/enginebarge.png",silverzeppelin:"img/silverzeppelin.png",steamturbinehovercraft:"img/steamturbinehovercraft.png",coal:"img/coal.png",leopardwood:"img/leopardwood.png",clockworks:"img/clockworks.png",kippers:"img/kippers.png",fluff:"img/fluff.png"},w=["oliveoil","coal","leopardwood","clockworks","kippers","fluff"],k={display:"flex",flexWrap:"wrap"},I={margin:"5px",textAlign:"center",border:"1px solid gray",borderRadius:"10px",padding:"5px"},A=function(e){var a=e.cargoType;return n.a.createElement("div",{style:I},n.a.createElement("h3",null,h[a]),n.a.createElement("img",{src:P[a],alt:h[a]}),n.a.createElement("br",null),"Avg price: ",x[a],g)},O=function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Cargos"),n.a.createElement("p",null,"Here are the kinds of cargo you will see in the game. Each cargo image represents the amount of cargo which will fit in one cargo bay. The buying or selling price is displayed whenever a cargo can be bought or sold. So you can click on any cargo image that is displaying a price."),n.a.createElement("div",{style:k},w.map(function(e){return n.a.createElement(A,{key:e,cargoType:e})})))},_={background:"#88f",padding:"40px"},C={maxWidth:"800px",margin:"0px auto",padding:"20px",background:"white",borderRadius:"40px"},W={display:"block",margin:"0 auto",maxWidth:"90%"},M={color:"white",background:"blue",fontSize:"20px",fontWeight:"bold",borderRadius:"10px"},R=function(e){var a=e.hideWelcomePage,t=e.ticks,r=e.resetState,i=t>0?"Return to game":"Start the game";return n.a.createElement("div",{style:_},n.a.createElement("div",{style:C},n.a.createElement("div",{style:{textAligh:"right"}},n.a.createElement("button",{style:M,onClick:a},i," >>>>")),n.a.createElement("br",null),n.a.createElement("img",{src:"img/albionsteamclipper_large.png",alt:"A ship with steam and sail",style:W}),n.a.createElement("div",{style:{textAlign:"right"}},n.a.createElement("br",null),t>0?n.a.createElement("button",{onClick:r},"Clear and restart"):""),n.a.createElement(c,null),n.a.createElement(s,null),n.a.createElement(T,null),n.a.createElement(O,null),n.a.createElement("br",null),n.a.createElement("button",{style:M,onClick:a},i," >>>>")))},L={background:"#88f",color:"white",minHeight:"150px",paddingLeft:"10px",marginLeft:"10px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"};function B(e){var a=e.shipsForSale,t=e.cash,r=e.buyShip,i=!e.myShipId;return n.a.createElement("div",{style:L},n.a.createElement("h3",null,"Ships for Sale"),a.map(function(e){return n.a.createElement(z,{key:e.shipId,highlightBuyButton:i,buyShip:r,ship:e,canBuy:e.basePrice<=t})}))}var N={color:"red",background:"yellow"},j={};function z(e){var a=e.ship,t=e.canBuy,r=e.buyShip,i=e.highlightBuyButton?N:j;return n.a.createElement("div",null,n.a.createElement("img",{alt:"",src:P[a.shipType]}),a.shipTypeName," \xa0",n.a.createElement("em",null,a.shipName)," \xa0",a.basePrice,g," \xa0",t?n.a.createElement("button",{style:i,onClick:function(){r(a.shipId)}},"buy"):" ")}var H=function(e){return{height:"50px",width:"50px",background:e?"url("+P[e.cargoType]+") no-repeat":"inherit",paddingTop:"30px",fontWeight:"bold",color:"gold",textShadow:"1px 1px 2px black"}},q=function(e){var a=e.empty,t=e.aCargo,r=e.price,i=e.enabled,o=e.cargoClicked;return a?n.a.createElement("button",{title:"empty",disabled:!0,style:H(t)},"\xa0"):i?n.a.createElement("button",{title:t.cargoLabel,onClick:function(){o(t.cargoId)},style:H(t)},r,g):n.a.createElement("button",{title:t.cargoLabel,disabled:!0,style:H(t)},"\xa0")};function Y(e){var a=e.prices,t=e.hasShip,r=e.numberOfEmptyCargoBays,i=e.cargosForSale,o=e.cash,l=e.buyCargo;return n.a.createElement("div",null,n.a.createElement("h3",null,"Cargos for Sale"),i.map(function(e){var i=a[e.cargoType];return n.a.createElement(q,{key:e.cargoId,cargoClicked:l,aCargo:e,price:i,enabled:t&&i<=o&&r})}))}var G=function(e){var a=e.place,t=e.buyFood,r=e.hasShip,i=e.myShip,o=0,l=[];r&&(o=i.maxFood-i.food);for(var c=0;c<o;c++)l.push(n.a.createElement("img",{key:c,alt:"rations",src:"img/rations.png"}));var s={background:"inherit"};return a.isFoodForSale?n.a.createElement("div",null,n.a.createElement("h3",null,"Buy rations"),r?n.a.createElement("div",null,n.a.createElement("button",{style:s,onClick:function(){t(a.placeId,1)}},n.a.createElement("img",{alt:"rations",src:"img/rations.png"}),a.foodPrice," ",g)):"",o?n.a.createElement("div",null,n.a.createElement("button",{style:s,onClick:function(){t(a.placeId,o)}},l,a.foodPrice*o,"  ",g)):""):n.a.createElement("div",null," ")},D=function(e){var a=e.place,t=e.buyFuel,r=e.hasShip,i=e.myShip,o=0,l=[];r&&(o=i.maxFuel-i.fuel);for(var c=0;c<o;c++)l.push(n.a.createElement("img",{key:c,alt:"fuel",src:"img/fuel.png"}));var s={background:"inherit"};return a.isFuelForSale?n.a.createElement("div",null,n.a.createElement("h3",null,"Buy fuel"),r?n.a.createElement("div",null,n.a.createElement("button",{style:s,onClick:function(){t(a.placeId,1)}},n.a.createElement("img",{alt:"rations",src:"img/fuel.png"}),a.fuelPrice,"  ",g)):"",o?n.a.createElement("div",null,n.a.createElement("button",{style:s,onClick:function(){t(a.placeId,o)}},l,a.fuelPrice*o,"  ",g)):""):n.a.createElement("div",null," ")};function U(e,a){for(var t=0;t<a.ships.length;t++)if(a.ships[t].shipId===e)return Object(p.a)({},a.ships[t]);return null}function J(e){return e.myShipId&&U(e.myShipId,e)}function K(e,a){for(var t=0;t<a.places.length;t++)if(a.places[t].placeId===e)return Object(p.a)({},a.places[t]);return null}function V(e){return K(e.currentPlaceId,e)}function Z(e){return function(e,a){return a.ships.filter(function(a){return a.placeId===e&&a.isForSale})}(e.currentPlaceId,e)}function Q(e,a){var t=a.ships.map(function(a){return a.shipId===e.shipId?e:a});return Object(p.a)({},a,{ships:t})}function X(e,a){for(var t=0;t<a.cargos.length;t++)if(a.cargos[t].cargoId===e)return Object(p.a)({},a.cargos[t]);return null}function $(e){return function(e,a){return a.cargos.filter(function(a){return!a.isLoaded&&a.placeId===e})}(e.currentPlaceId,e)}function ee(e,a){return a.cargos.filter(function(a){return a.isLoaded&&a.shipId===e})}function ae(e){var a=J(e);if(!a)return 0;var t=ee(a.shipId,e).length;return Math.max(0,a.maxCargo-t)}function te(e){return{type:"SHOW_WELCOME_PAGE",showing:e}}function re(e,a){return{type:"MOVE_SHIP",shipId:e,placeId:a}}var ne=Object(l.b)(function(e){return{place:V(e),shipsForSale:Z(e),cargosForSale:$(e),cash:e.cash,hasShip:!!e.myShipId,myShip:J(e),numberOfEmptyCargoBays:ae(e)}},function(e){return{buyShip:function(a){e(function(e){return{type:"BUY_SHIP",shipId:e}}(a))},buyFood:function(a,t){e(function(e,a){return{type:"BUY_FOOD",placeId:e,quantity:a}}(a,t))},buyFuel:function(a,t){e(function(e,a){return{type:"BUY_FUEL",placeId:e,quantity:a}}(a,t))},buyCargo:function(a){e(function(e){return{type:"BUY_CARGO",cargoId:e}}(a))}}})(function(e){var a=e.place,t=e.cash,r=e.shipsForSale,i=e.cargosForSale,o=e.hasShip,l=e.myShip,c=e.numberOfEmptyCargoBays,s=e.buyShip,p=e.buyFood,u=e.buyFuel,d=e.buyCargo,m=t+(l?l.basePrice:0);return n.a.createElement("div",{style:{background:"#ad0"}},n.a.createElement("div",null,n.a.createElement("h2",null,a.name),n.a.createElement("h3",null,a.description)),n.a.createElement(B,{shipsForSale:r,cash:m,buyShip:s}),n.a.createElement(G,{hasShip:o,place:a,myShip:l,buyFood:p}),n.a.createElement(Y,{prices:a.prices,hasShip:o,numberOfEmptyCargoBays:c,cargosForSale:i,cash:t,buyCargo:d}),n.a.createElement(D,{hasShip:o,place:a,myShip:l,buyFuel:u}))}),ie={background:"gold",border:"5px solid brown",width:"150px",textAlign:"center",margin:"10px auto 10px auto"},oe=Object(l.b)(function(e){return{cash:e.cash}})(function(e){var a=e.cash;return n.a.createElement("div",{style:ie},"Cash: ",a," florins")}),le=function(e){for(var a=e.myShip,t=[],r=0;r<a.crewSize;r++)t.push(n.a.createElement("img",{key:r,src:"img/crew.png",alt:"crewperson"}));return n.a.createElement("div",{style:{marginTop:"5px"}},t)},ce=function(e){var a=e.myShip;if(!a.fuelPerMove)return n.a.createElement("div",null," ");for(var t=[],r=0;r<a.fuel;r++)t.push(n.a.createElement("img",{src:"img/fuel.png",alt:"Fuel barrel",key:r}));for(var i=0;i<a.maxFuel-a.fuel;i++)t.push(n.a.createElement("img",{src:"img/no_fuel.png",alt:"Empty fuel bay",key:"e"+i}));return n.a.createElement("div",{style:{border:"3px solid brown",borderRadius:"5px",padding:"3px",position:"relative",minHeight:"50px",marginTop:"5px"}},t)},se={marginTop:"5px",border:"3px solid brown",borderRadius:"5px",padding:"3px",position:"relative",minHeight:"35px"},pe=function(e){for(var a=e.myShip,t=[],r=0;r<a.food;r++)t.push(n.a.createElement("img",{src:"img/rations.png",alt:"rations",key:r}));for(var i=0;i<a.maxFood-a.food;i++)t.push(n.a.createElement("img",{src:"img/no_rations.png",alt:"Empty rations bay",key:"e"+i}));return n.a.createElement("div",{style:se},t)},ue={border:"3px solid brown",borderRadius:"5px",padding:"3px",position:"relative",minHeight:"50px"},de=function(e){for(var a=e.myShip,t=e.cargo,r=e.localPrices,i=e.sellCargo,o=[],l=0;l<a.maxCargo-t.length;l++)o.push(n.a.createElement(q,{key:l,empty:!0}));return n.a.createElement("div",{style:ue},t.map(function(e){return n.a.createElement(q,{empty:!1,key:e.cargoId,cargoClicked:i,aCargo:e,enabled:!!r[e.cargoType],price:r[e.cargoType]})}),o)},me={background:"tan",margin:"20px",borderRadius:"40px",border:"5px solid brown",padding:"20px 20px 5px 20px"},he={fontSize:"20px",fontWeight:"bold",width:"200px",textAlign:"center",margin:"10px auto 10px auto"},ye=Object(l.b)(function(e){return{cash:e.cash,myShip:J(e),cargo:ee(e.myShipId,e),localPrices:V(e).prices}},function(e){return{sellCargo:function(a){e(function(e){return{type:"SELL_CARGO",cargoId:e}}(a))}}})(function(e){e.cash;var a=e.myShip,t=e.cargo,r=e.localPrices,i=e.sellCargo;return n.a.createElement("div",{style:{background:"#88f"}},n.a.createElement("div",{style:me},n.a.createElement(de,{myShip:a,cargo:t,localPrices:r,sellCargo:i}),n.a.createElement(pe,{myShip:a}),n.a.createElement(ce,{myShip:a}),n.a.createElement(le,{myShip:a}),n.a.createElement(oe,null),n.a.createElement("div",{style:he},"{{{"," ",n.a.createElement("em",null,a.shipName)," ","}}}")))}),ge=Object(l.b)(function(e){return{cash:e.cash}})(function(e){e.cash,e.myShip;return n.a.createElement("div",{style:{background:"#88f"}},"Time to buy a ship.",n.a.createElement(oe,null))}),fe={fontWeight:"bold",border:"2px solid white",borderRadius:"4px",color:"white",paddingLeft:"5px",fontSize:"16px",width:"120px"},be={display:"inline-block",width:"60px",textAlign:"left"},Ee={display:"inline-block",width:"50px",textAlign:"right"},Se=function(e){var a=e.days,t=e.ticksToday;return n.a.createElement("div",{style:fe},n.a.createElement("div",{style:be},"Day ",a),n.a.createElement("div",{style:Ee},t,":00"))},ve={border:"1px solid blue",padding:"10px",background:"#88f"},Te={display:"grid",gridTemplateColumns:"repeat(4, 100px)",gridTemplateRows:"repeat(8, 100px)",fontWeight:"bold"},xe=function(e){var a=e.p,t=e.myShip,r=e.myPlace,i=e.isDestination,o=e.isMoving,l=e.moveShip,c="inherit";"LAND"===a.placeType&&(c="#db8"),"PORT"===a.placeType&&(c='#ad0 no-repeat url("img/port.png")');var s="1px solid blue";i&&!o&&(s="1px solid yellow");var p={border:s,background:c,gridColumn:a.x,gridRow:a.y,margin:"0px",position:"relative",backgroundPosition:"center"},u={transform:"rotate("+Pe(a,r)+"deg)",left:"25px",top:"25px",zIndex:10,position:"absolute"},d=o?"bobbing":"notbobbing";return n.a.createElement("div",{style:p,key:a.placeId,onClick:function(){i&&l(t.shipId,a.placeId)}},"PORT"===a.placeType?a.name:"",t&&t.placeId===a.placeId?n.a.createElement("img",{className:d,style:{left:"18px",top:"18px",zIndex:5,position:"absolute",border:"none"},alt:t.shipName,src:P[t.shipType]}):n.a.createElement("span",null," "),i&&!o?n.a.createElement("img",{style:u,src:"img/arrow_up.png",alt:"You can move to here"}):n.a.createElement("span",null," "))};function Fe(e,a,t){return("PORT"===e.placeType||"AT_SEA"===e.placeType||t.isFlyer)&&(!("PORT"===a.placeType&&"PORT"===e.placeType)||t.isFlyer)&&Math.abs(e.x-a.x)+Math.abs(e.y-a.y)===1}function Pe(e,a){return a.y>e.y?0:a.x>e.x?270:a.x<e.x?90:180}var we={color:"white",background:"blue",fontSize:"16px",borderRadius:"10px"},ke=Object(l.b)(function(e){return{days:e.days,ticks:e.ticks,ticksToday:e.ticksToday,places:e.places,myShip:J(e),myPlace:V(e),isMoving:e.isMoving}},function(e){return{moveShip:function(a,t){e(re(a,t))}}})(function(e){e.ticks;var a=e.days,t=e.ticksToday,r=e.places,i=e.myShip,o=e.myPlace,l=e.isMoving,c=e.moveShip,s=e.showWelcomePage;return n.a.createElement("div",{style:ve},n.a.createElement("div",{style:{display:"inline-block",width:"200px"}},n.a.createElement(Se,{days:a,ticksToday:t})),n.a.createElement("button",{onClick:s,style:we},"<< Back to home page"),n.a.createElement("div",{style:Te},r.map(function(e){return n.a.createElement(xe,{key:e.placeId,p:e,myShip:i,myPlace:o,isMoving:l,isDestination:i&&Fe(e,o,i),moveShip:c})})))}),Ie={border:"1px solid blue",background:"#88f"},Ae={display:"grid",gridTemplateColumns:"repeat(4, 25%)",gridTemplateRows:"repeat(8, 25vw)",fontWeight:"bold",width:"100%"},Oe=function(e){var a=e.p,t=e.myShip,r=e.myPlace,i=e.isDestination,o=e.isMoving,l=e.moveShip,c=e.selectShipTab,s="inherit";"LAND"===a.placeType&&(s="#db8"),"PORT"===a.placeType&&(s='#ad0 no-repeat url("img/port.png")');var p="1px solid blue";i&&!o&&(p="1px solid yellow");var u={border:p,background:s,backgroundSize:"contain",gridColumn:a.x,gridRow:a.y,margin:"0px",position:"relative",backgroundPosition:"bottom"},d={transform:"rotate("+Ce(a,r)+"deg)",left:"25%",top:"25%",width:"50%",height:"50%",zIndex:8,position:"absolute"},m=o?"bobbing":"notbobbing",h=t&&t.placeId===a.placeId,y=h&&"PORT"===a.placeType;return n.a.createElement("div",{style:u,key:a.placeId,onClick:y?c:function(){i&&l(t.shipId,a.placeId)}},"PORT"===a.placeType?a.name:"",h?n.a.createElement("img",{className:m,style:{left:"25%",top:"25%",width:"50%",height:"50%",zIndex:5,position:"absolute",border:"none"},alt:t.shipName,src:P[t.shipType]}):n.a.createElement("span",null," "),i&&!o?n.a.createElement("img",{style:d,src:"img/arrow_up.png",alt:"You can move to here"}):n.a.createElement("span",null," "))};function _e(e,a,t){return("PORT"===e.placeType||"AT_SEA"===e.placeType||t.isFlyer)&&(!("PORT"===a.placeType&&"PORT"===e.placeType)||t.isFlyer)&&Math.abs(e.x-a.x)+Math.abs(e.y-a.y)===1}function Ce(e,a){return a.y>e.y?0:a.x>e.x?270:a.x<e.x?90:180}var We={position:"fixed",top:"45px",right:"0px",zIndex:"5"},Me=Object(l.b)(function(e){return{days:e.days,ticks:e.ticks,ticksToday:e.ticksToday,places:e.places,myShip:J(e),myPlace:V(e),isMoving:e.isMoving}},function(e){return{moveShip:function(a,t){e(re(a,t))},selectShipTab:function(){e({type:"SELECT_TAB",whichTab:"SHIP"})}}})(function(e){e.ticks;var a=e.days,t=e.ticksToday,r=e.places,i=e.myShip,o=e.myPlace,l=e.isMoving,c=e.moveShip,s=e.selectShipTab;return n.a.createElement("div",{style:Ie},n.a.createElement("div",{style:We},n.a.createElement(Se,{days:a,ticksToday:t})),n.a.createElement("div",{style:Ae},r.map(function(e){return n.a.createElement(Oe,{key:e.placeId,p:e,myShip:i,myPlace:o,isMoving:l,isDestination:i&&_e(e,o,i),moveShip:c,selectShipTab:s})})))}),Re={display:"grid",gridTemplateColumns:"1fr 1fr 1fr",padding:"0px"},Le={background:"#88f",position:"absolute",top:"0px",bottom:"0px",width:"100%"},Be={background:"#668",fontWeight:"bold",fontSize:"30px",width:"28%"},Ne={background:"yellow",fontWeight:"bold",fontSize:"30px",width:"28%"},je={background:"#88f",color:"black",fontWeight:"bold",fontSize:"30px",border:"none",width:"28%"},ze={width:"16%",background:"#88f",fontWeight:"bold",fontSize:"30px",color:"yellow",border:"none"},He={position:"fixed",width:"100%",top:"0px",left:"0px",zIndex:"10"},qe=function(e){var a=e.showWelcomePage,t=e.hasShip,r=e.isInPort,i=e.screenWidth,o=e.selectPortTab,l=e.selectShipTab,c=e.selectMapTab,s=e.selectedTab;if(i>=700)return n.a.createElement("div",{style:Re},r?n.a.createElement(ne,null):n.a.createElement("div",{style:{background:"#88f"}}," "),t?n.a.createElement(ye,null):n.a.createElement(ge,null),n.a.createElement(ke,{showWelcomePage:a}));var p="PORT"===s?je:Ne,u="PORT"===s,d="SHIP"===s?je:t?Ne:Be,m=!t||"SHIP"===s,h="MAP"===s?je:Ne,y="MAP"===s;return n.a.createElement("div",{style:Le},n.a.createElement("div",{style:He},n.a.createElement("button",{disabled:u,onClick:o,style:p},"Port"),n.a.createElement("button",{disabled:m,onClick:l,style:d},"Ship"),n.a.createElement("button",{disabled:y,onClick:c,style:h},"Map"),n.a.createElement("button",{style:ze,onClick:a}," ? ")),n.a.createElement("div",{style:{height:"40px"}}," "),"PORT"===s?n.a.createElement(ne,null):"SHIP"===s?n.a.createElement(ye,null):n.a.createElement(Me,null))},Ye=Object(l.b)(function(e){return{showingWelcomePage:e.showingWelcomePage,hasShip:!!e.myShipId,isInPort:"PORT"===V(e).placeType,gameOver:e.gameOver,gameOverMessage:e.gameOverMessage,ticks:e.ticks,days:e.days,ticksToday:e.ticksToday,cash:e.cash,cashToWin:e.cashToWin,screenWidth:e.screenWidth,selectedTab:e.selectedTab}},function(e){return{showWelcomePage:function(){return e(te(!0))},hideWelcomePage:function(){return e(te(!1))},startNewGame:function(){return e({type:"START_NEW_GAME"})},selectPortTab:function(){return e({type:"SELECT_TAB",whichTab:"PORT"})},selectShipTab:function(){return e({type:"SELECT_TAB",whichTab:"SHIP"})},selectMapTab:function(){return e({type:"SELECT_TAB",whichTab:"MAP"})},resetState:function(){return e({type:"RESET_STATE"})}}})(function(e){var a=e.showingWelcomePage,t=e.showWelcomePage,r=e.hideWelcomePage,i=e.hasShip,o=e.isInPort,l=e.gameOver,c=e.gameOverMessage,s=e.cash,p=e.cashToWin,u=e.startNewGame,d=e.ticks,m=e.days,h=e.ticksToday,y=e.screenWidth,g=e.selectedTab,f=e.selectPortTab,b=e.selectShipTab,E=e.selectMapTab,S=e.resetState;return l?n.a.createElement("div",{className:"App",style:{textAlign:"center"}},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h1",null,"Game Over: ",c),n.a.createElement("button",{onClick:u},"Start a new game")):s>=p?n.a.createElement("div",{className:"App",style:{textAlign:"center"}},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h1",null,"Fifty thousand florins!"),n.a.createElement("h1",null,"Achieved on day ",m," at ",h,":00."),n.a.createElement("h1",null,"You Win !!!!!!!!!!!!!!!!"),n.a.createElement("button",{onClick:u},"Start a new game")):a?n.a.createElement("div",{className:"App"},n.a.createElement(R,{hideWelcomePage:r,ticks:d,resetState:S})):n.a.createElement("div",{className:"App"},n.a.createElement(qe,{showWelcomePage:t,hasShip:i,isInPort:o,screenWidth:y,selectedTab:g,selectPortTab:f,selectShipTab:b,selectMapTab:E}))}),Ge=t(5),De={screenWidth:window.innerWidth,showingWelcomePage:!0,selectedTab:"PORT",timeStop:!0,slowTimeCounter:0,gameOver:!1,gameOverMessage:"",ticks:0,days:0,ticksToday:0,isMoving:!1,moveEndTime:null,cash:800,cashToWin:5e4,currentPlaceId:"portharbor",defaultPlaceId:"portharbor",myShipId:null,ships:[y("portharbor","fishboat","Fishy"),y("portharbor","albionsteamclipper","Clippy"),y("heck","enginebarge","Grummpy"),y("pointa","silverzeppelin","Puffy"),y("gibber","steamturbinehovercraft","Zippy")],places:F,cargos:[{isForSale:!0,cargoId:"cargo1",cargoLabel:"Olive Oil",cargoType:"oliveoil",isLoaded:!1,placeId:"portharbor",shipId:null},{isForSale:!0,cargoId:"cargo2",cargoLabel:"Kippers",cargoType:"kippers",isLoaded:!1,placeId:"portharbor",shipId:null}],cargoProducers:[{placeId:"portharbor",period:3,cargoType:"oliveoil",quantity:1},{placeId:"gibber",period:3,cargoType:"fluff",quantity:1},{placeId:"heck",period:3,cargoType:"coal",quantity:1},{placeId:"portharbor",period:3,cargoType:"kippers",quantity:1},{placeId:"pointa",period:3,cargoType:"clockworks",quantity:1},{placeId:"thirdplace",period:3,cargoType:"leopardwood",quantity:1},{placeId:"nether",period:2,cargoType:"coal",quantity:1}]},Ue=t(13);function Je(e){var a=Object(p.a)({},e);if(a.cash>=a.cashToWin)return a.timeStop=!0,a;if(!e.isMoving){if(e.slowTimeCounter<=4)return Object(p.a)({},e,{slowTimeCounter:e.slowTimeCounter+1});a.slowTimeCounter=0}return a.screenWidth=window.innerWidth,24===(a=function(e){return a=e,a.isMoving&&a.ticks>=a.moveEndTime?Object(p.a)({},a,{isMoving:!1,moveEndTime:null}):a;var a}(a=Object(p.a)({},a,{ticks:e.ticks+1,ticksToday:e.ticksToday+1}))).ticksToday&&(a.days=a.days+1,a.ticksToday=0,a=function(e){return function(e){var a=Object(Ue.a)(e.cargos);return e.cargoProducers.forEach(function(t){if(!(e.days%t.period))for(var r=0;r<t.quantity;r++)a.push((n=t.cargoType,i=t.placeId,Object(p.a)({},m,{cargoLabel:h[n],cargoId:"cargo_"+n+"_"+d(),placeId:i,cargoType:n})));var n,i}),Object(p.a)({},e,{cargos:a})}(function(e){var a=e.cash,t=V(e),r=t.isFoodForSale,n=r?t.foodPrice:-1;if(e.myShipId){for(var i=J(e),o=i.crewSize,l=1;l<=o;l++)i.food>=1?(i.food=i.food-1,e=Q(i,e)):e=r&&a>=n?Object(p.a)({},e,{cash:a-n}):Object(p.a)({},e,{gameOver:!0,gameOverMessage:"You starved."});return e}return r&&a>=n?Object(p.a)({},e,{cash:a-n}):Object(p.a)({},e,{cash:a-n,gameOver:!0})}(e))}(a)),a}var Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,a=arguments.length>1?arguments[1]:void 0;switch(a.type,a.type){case"TICK":return e.timeStop?e:Je(e);case"SHOW_WELCOME_PAGE":return Object(p.a)({},e,{showingWelcomePage:a.showing,timeStop:a.showing});case"START_NEW_GAME":return De;case"SELECT_TAB":return Object(p.a)({},e,{selectedTab:a.whichTab});case"BUY_SHIP":var t=U(a.shipId,e),r=J(e),n=e.cash+(r?r.basePrice:0)-t.basePrice;if(n<0)return e;t.isForSale=!1;var i=Q(t,e);return i.myShipId=t.shipId,i.cash=n,r&&(r.isForSale=!0,i=Q(r,i)),i;case"BUY_FOOD":var o=J(e);if(o.food+a.quantity>o.maxFood)return e;var l=e.cash-V(e).foodPrice*a.quantity;if(l<0)return e;o.food+=a.quantity;var c=Q(o,e);return c.cash=l,c;case"BUY_FUEL":var s=J(e);if(s.fuel+a.quantity>s.maxFuel)return e;var u=e.cash-V(e).fuelPrice*a.quantity;if(u<0)return e;s.fuel+=a.quantity;var d=Q(s,e);return d.cash=u,d;case"BUY_CARGO":var m=X(a.cargoId,e),h=e.cash-K(m.placeId,e).prices[m.cargoType];if(h<=0)return e;m.isForSale=!1,m.isLoaded=!0,m.placeId=null,m.shipId=J(e).shipId;var y=function(e,a){var t=a.cargos.map(function(a){return a.cargoId===e.cargoId?e:a});return Object(p.a)({},a,{cargos:t})}(m,e);return y.cash=h,y;case"MOVE_SHIP":if(e.isMoving)return e;var g=U(a.shipId,e);if(g.fuel<g.fuelPerMove)return e;var f=Object(p.a)({},e,{isMoving:!0,moveEndTime:e.ticks+24/g.speed});return f.myShipId===a.shipId&&(f.currentPlaceId=a.placeId),g.placeId=a.placeId,g.fuel-=g.fuelPerMove,Q(g,f);case"SELL_CARGO":var b=X(a.cargoId,e),E=e.cash+V(e).prices[b.cargoType],S=function(e,a){var t=a.cargos.filter(function(a){return a.cargoId!==e.cargoId});return Object(p.a)({},a,{cargos:t})}(b,e);return S.cash=E,S;case"RESET_STATE":return De;default:return e}},Ve=function(){try{var e=localStorage.getItem("tradingGame1");if(null===e)return;return JSON.parse(e)}catch(a){return}}(),Ze=Object(Ge.b)(Ke,Ve&&Ve.places?Ve:De);Ze.subscribe(function(){var e=Ze.getState();0===e.ticksToday&&function(e){try{var a=JSON.stringify(e);localStorage.setItem("tradingGame1",a)}catch(t){}}(e)}),o.a.render(n.a.createElement(l.a,{store:Ze},n.a.createElement(Ye,null)),document.getElementById("root")),setInterval(function(){Ze.dispatch({type:"TICK"})},150)}},[[14,1,2]]]);
//# sourceMappingURL=main.5ce6b439.chunk.js.map