(this["webpackJsonppanier-achats"]=this["webpackJsonppanier-achats"]||[]).push([[0],{38:function(e){e.exports=JSON.parse('[{"id":"prd0001","nom":"T-Shirt \xe0 col rond","prix":10.99},{"id":"prd0002","nom":"T-Shirt en col V","prix":12.95},{"id":"prd0003","nom":"Un autre t-shirt avec un nom plus long","prix":14.5},{"id":"prd0004","nom":"Chandail pour femme","prix":17.67},{"id":"prd0005","nom":"Chandail \xe0 manche longue","prix":24.95},{"id":"prd0006","nom":"G-pull temps","prix":10.95}]')},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(1),r=c.n(a),s=c(24),i=c.n(s),o=c(19),l=(c(47),c(48),c(13)),j=(c(49),c(36)),d=c.n(j),u=c(79);c(50);function b(e){var t=Object(l.a)(e.etatPanier,2),c=t[0],a=(t[1],function(e){var t={},c=Object.values(e);t.nbArticles=c.length,t.qteArticles=c.reduce((function(e,t){return t.qte+e}),0);var n=c.reduce((function(e,t){return t.prix*t.qte+e}),0);t.st=n.toFixed(2);var a=.05*n;t.tps=a.toFixed(2);var r=.09975*n;return t.tvq=r.toFixed(2),t.total=(n+a+r).toFixed(2),t}(c));return Object(n.jsxs)("div",{className:"SommairePanier"+(e.cacher?" cacher":""),children:[Object(n.jsxs)("span",{className:"nbArticles",children:["Articles diff\xe9rents : ",a.nbArticles]}),Object(n.jsxs)("span",{className:"qteArticles",children:["Articles total : ",a.qteArticles]}),Object(n.jsxs)("span",{className:"sousTotal",children:["Sous-total : ",a.st]}),Object(n.jsxs)("span",{className:"tps",children:["TPS : ",a.tps]}),Object(n.jsxs)("span",{className:"tvq",children:["TVQ : ",a.tvq]}),Object(n.jsxs)("span",{className:"total",children:["Total : ",a.total]})]})}function p(e){var t=Object(a.useState)(!0),c=Object(l.a)(t,2),r=c[0],s=c[1],i=Object(l.a)(e.etatPanier,1)[0];return Object(n.jsxs)("header",{className:"Entete",children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.b,{to:"/",activeClassName:"navActive",exact:!0,children:"Logo"})}),Object(n.jsxs)("ul",{className:"navPrincipale",children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/nos-produits",activeClassName:"navActive",children:"Produits"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/a-propos-de-magasin",activeClassName:"navActive",children:"A propos de nous"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/contact",activeClassName:"navActive",children:"Contactez-nous"})})]}),Object(n.jsxs)("ul",{className:"navUtil",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)(u.a,{onClick:function(){return s(!r)},badgeContent:Object.values(i).reduce((function(e,t){return e+t.qte}),0),color:"primary",children:Object(n.jsx)(d.a,{})}),Object(n.jsx)(b,{cacher:r,etatPanier:e.etatPanier})]}),Object(n.jsx)("li",{children:"Mon compte"})]})]})}c(59);function x(e){var t=(new Date).getFullYear();return Object(n.jsxs)("footer",{children:["\xa9 ",t]})}c(60),c(61);function h(e){var t=e.qte,c=e.onClick,a=e.texte,r=e.couleur;return Object(n.jsx)(u.a,{badgeContent:t,color:"secondary",children:Object(n.jsx)("button",{onClick:c,className:"BtnAjoutPanier ".concat(r),children:a})})}var O=c(37),m=c.n(O);c(62);function v(e){var t=e.etatPanier,c=e.id,a=e.nom,r=e.prix,s=Object(l.a)(t,2),i=s[0],o=s[1];var j="Ajouter au panier",d=0,u="";return i[c]&&(j=Object(n.jsx)(m.a,{}),d=i[c].qte,u="rouge"),Object(n.jsxs)("li",{className:"Produit",children:[Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:"images-produits/"+c+".webp",alt:a})}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("h3",{children:a}),Object(n.jsxs)("p",{className:"prix",children:[r," $CA"]}),Object(n.jsx)(h,{onClick:function(){i[c]?i[c].qte++:i[c]={prix:r,qte:1},o(JSON.parse(JSON.stringify(i)))},texte:j,qte:d,couleur:u})]})]})}var f=c(38),N=c(28);c(66);N.a.apps.length||N.a.initializeApp({apiKey:"AIzaSyBAB1bpsWFNArALnECEKBRvNvkucnWE3eA",authDomain:"panier-achats-react.firebaseapp.com",databaseURL:"https://panier-achats-react-default-rtdb.firebaseio.com",projectId:"panier-achats-react",storageBucket:"panier-achats-react.appspot.com",messagingSenderId:"1061179620791",appId:"1:1061179620791:web:d61b330e1cda1a773d7c32",measurementId:"G-MHHR9EPPGB"});N.a.firestore;var g=function(e){return Object(n.jsxs)("div",{className:"ListeProduits",children:[Object(n.jsx)("h2",{children:"Produits disponibles"}),Object(n.jsx)("ul",{children:f.map((function(t){return Object(n.jsx)(v,{etatPanier:e.etatPanier,id:t.id,nom:t.nom,prix:t.prix},t.id)}))})]})};var A=c(5);function P(){return Object(n.jsxs)("div",{className:"Accueil",children:[Object(n.jsx)("h2",{children:"Magasin"}),Object(n.jsx)("p",{children:"Page d'accueil en construction"})]})}function C(){return Object(n.jsxs)("div",{className:"Apropos",children:[Object(n.jsx)("h2",{children:"\xc0 propos de nous"}),Object(n.jsx)("p",{children:"Bla bla bla..."})]})}function S(){return Object(n.jsxs)("div",{className:"Contact",children:[Object(n.jsx)("h2",{children:"Contactez-nous"}),Object(n.jsx)("p",{children:"Formulaire de contact \xe0 venir ..."})]})}function q(e){var t=function(e,t){var c=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem(t))||e})),n=Object(l.a)(c,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){return window.localStorage.setItem(t,JSON.stringify(r))}),[r,t]),[r,s]}({},"panier-pvt-gr1");return Object(n.jsxs)("div",{className:"Page",children:[Object(n.jsx)(p,{etatPanier:t}),Object(n.jsx)("section",{className:"contenuPrincipal",children:Object(n.jsxs)(A.c,{children:[Object(n.jsx)(A.a,{path:"/",component:P,exact:!0}),Object(n.jsx)(A.a,{path:"/nos-produits",exact:!0,children:Object(n.jsx)(g,{etatPanier:t})}),Object(n.jsx)(A.a,{path:"/a-propos-de-magasin",exact:!0,children:Object(n.jsx)(C,{})}),Object(n.jsx)(A.a,{path:"/contact",exact:!0,children:Object(n.jsx)(S,{})})]})}),Object(n.jsx)(x,{})]})}var w=-1!==window.location.href.search(/github\.io/i)?"/panier-achats-pvt-gr1":"";i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.a,{basename:w,children:Object(n.jsx)(q,{})})}),document.getElementById("racine"))}},[[65,1,2]]]);
//# sourceMappingURL=main.0fa57fa3.chunk.js.map