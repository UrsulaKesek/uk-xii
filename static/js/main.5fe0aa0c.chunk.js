(this["webpackJsonpuk-xii"]=this["webpackJsonpuk-xii"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),r=a.n(i),l=(a(12),a(2)),o=a(1),m=a(4),s=(a(13),a(3)),u=(a(14),function(e){var t=e.label,a=e.id,n=Object(s.a)(e,["label","id"]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"city"},t&&c.a.createElement("label",{className:"label",htmlFor:a},t),c.a.createElement("input",Object.assign({className:"input",id:a},n))))}),h=(a(15),function(e){var t=e.children,a=Object(s.a)(e,["children"]);return c.a.createElement("form",Object.assign({className:"form"},a),t)}),d=(a(16),function(e){var t=e.city,a=e.data,n=e.onClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"weather-card"},c.a.createElement("div",{className:"temp"},c.a.createElement("h1",null,"Temperature"),c.a.createElement("h2",null,a.main.temp?"".concat((a.main.temp-273.15).toFixed(0)," \xb0 C"):""),c.a.createElement("h2",null,a.main.temp?"".concat((1.8*(a.main.temp-273.15)+32).toFixed(0)," \xb0 F"):"")),c.a.createElement("button",{className:"C",onClick:n},"C"),c.a.createElement("span",null,a.main.temp_min?" Min:".concat((a.main.temp_min-273.15).toFixed(0)," \xb0 C"):""),c.a.createElement("span",null,a.main.temp_max?" Max:".concat((a.main.temp_max-273.15).toFixed(0)," \xb0 C"):""),c.a.createElement("button",{className:"F",onClick:n},"F"),c.a.createElement("h4",null,a.main.humidity?"Humidity:".concat(a.main.humidity):""),c.a.createElement("h3",null,a.rain?"Chances of rain in ".concat(t,":").concat((100*a.rain["1h"]).toFixed(0),"%"):"Chances of rain in ".concat(t," is 0%")),c.a.createElement("h2",null,a.weather[0].icon?"".concat(a.weather[0].icon):"",c.a.createElement("img",{className:"icons",src:"http://openweathermap.org/img/wn/04d.png",alt:"weather-icon"})),c.a.createElement("h5",null,a.weather[0].description?"What's it like out there:".concat(a.weather[0].description):"")))});var p=function(){var e=Object(n.useState)({city:""}),t=Object(m.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)({}),s=Object(m.a)(r,2),p=s[0],E=s[1];return c.a.createElement("div",{className:"app"},c.a.createElement("h1",null,c.a.createElement("span",{className:"stormy","aria-label":"weather-app",role:"img"},"\u26c8\ufe0f"),"Weather App",c.a.createElement("span",{className:"stormy1","aria-label":"weather-app",role:"img"},"\u26c8\ufe0f")),c.a.createElement(h,{onSubmit:function(e){e.preventDefault(),E(Object(o.a)({},p,{city:a.city,loading:!0})),fetch("".concat(window.location.protocol,"//api.openweathermap.org/data/2.5/weather?q=").concat(a.city,"&appid=").concat("8cee7f2d45cd8c8754ca127ff2455bab","&units=").concat(a.units)).then((function(e){if(e.ok)return e.json().then((function(e){E(Object(o.a)({},p,{city:a.city,weatherData:e,loading:!1,error:null}))}));E(Object(o.a)({},p,{error:e.statusText,loading:!1}))}))}},c.a.createElement(u,{id:"city",label:"Choose City",onChange:function(e){i(Object(o.a)({},a,Object(l.a)({},e.target.id,e.target.value)))},placeholder:"Insert the city name here",type:"text",city:a.city}),c.a.createElement("button",{disabled:p.loading||!a.city},p.loading?"Loading...":"Search!")),p.weatherData&&c.a.createElement(d,{city:a.city,data:p.weatherData,onClick:function(e){e.preventDefault(),E("".concat(p.main.temp))}}),p.error&&c.a.createElement("div",null,JSON.stringify(p.error)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5fe0aa0c.chunk.js.map