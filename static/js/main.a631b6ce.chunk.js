(this["webpackJsonpreact-piano"]=this["webpackJsonpreact-piano"]||[]).push([[0],[,,,,function(e,n,a){e.exports=a(18)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){e.exports=a.p+"static/media/do.18fd3f6f.wav"},function(e,n,a){e.exports=a.p+"static/media/re.217b943a.wav"},function(e,n,a){e.exports=a.p+"static/media/mi.1f26c778.wav"},function(e,n,a){e.exports=a.p+"static/media/fa.a787534a.wav"},function(e,n,a){e.exports=a.p+"static/media/sol.785a33d2.wav"},function(e,n,a){e.exports=a.p+"static/media/la.10af03f3.wav"},function(e,n,a){e.exports=a.p+"static/media/si.70924435.wav"},function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),i=a(2),c=a.n(i),r=(a(9),a(3)),s=(a(10),function(e){var n=e.estaSonando,a=e.nota,t=e.handleClick,i=e.handleKeyPress;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"nota ".concat(n===a.nombre&&"suena"),onClick:function(){return t(a)},onKeyPress:i},a.key,a.tieneSostenido&&o.a.createElement("div",{className:"negra"})))}),l=[{nombre:"DO",link:a(11),tieneSostenido:!0,key:"1"},{nombre:"RE",link:a(12),tieneSostenido:!0,key:"2"},{nombre:"MI",link:a(13),key:"3"},{nombre:"FA",link:a(14),tieneSostenido:!0,key:"4"},{nombre:"SOL",link:a(15),tieneSostenido:!0,key:"5"},{nombre:"LA",link:a(16),tieneSostenido:!0,key:"6"},{nombre:"SI",link:a(17),key:"7"}];var m=function(){var e=Object(t.useState)(""),n=Object(r.a)(e,2),a=n[0],i=n[1],c=function(e){i(e.nombre),new Audio(e.link).play(),setTimeout((function(){i("")}),350)},m=function(e){c(e)},d=function(e){var n=l.find((function(n){return n.key===e.key}));n&&c(n)};return Object(t.useEffect)((function(){document.addEventListener("keypress",d)}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"titulo"},o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"img"},"\ud83c\udfb6 \ud83c\udfb9 "),"Piano con React ",o.a.createElement("span",{role:"img","aria-label":"img"},"\ud83c\udfb6")),o.a.createElement("h2",null,"Hecho con ",o.a.createElement("span",{role:"icono","aria-label":"img"},"\u2764\ufe0f")," por Roc\xedo gracias a Ada ITW"),o.a.createElement("p",null," Nota: Se puede tocar con click o presionando los n\xfameros desde el 1 al 7 por cada nota \ud83d\ude09"),o.a.createElement("div",{className:"esta-sonando"},a&&'Suena la nota " '.concat(a,' "'))),o.a.createElement("div",{className:"contenedor"},l.map((function(e,n){return o.a.createElement(s,{key:n,estaSonando:a,nota:e,handleClick:m,handleKeyPress:d})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.a631b6ce.chunk.js.map