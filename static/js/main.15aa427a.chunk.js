(this["webpackJsonppanier-achats"]=this["webpackJsonppanier-achats"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"id":"prd0001","nom":"T-Shirt \xe0 col rond","prix":10.99},{"id":"prd0002","nom":"T-Shirt en col V","prix":12.95},{"id":"prd0003","nom":"Un autre t-shirt avec un nom plus long","prix":14.5},{"id":"prd0004","nom":"Chandail pour femme","prix":17.67},{"id":"prd0005","nom":"Chandail \xe0 manche longue","prix":24.95},{"id":"prd0006","nom":"G-pull temps","prix":10.95}]')},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),r=n.n(i),s=n(10),a=n.n(s),l=(n(29),n(30),n(4)),j=(n(31),n(19)),o=n.n(j),d=n(56);n(32);function u(e){var t=Object(l.a)(e.etatPanier,2),n=t[0],i=(t[1],function(e){var t={},n=Object.values(e);t.nbArticles=n.length,t.qteArticles=n.reduce((function(e,t){return t.qte+e}),0);var c=n.reduce((function(e,t){return t.prix*t.qte+e}),0);t.st=c.toFixed(2);var i=.05*c;t.tps=i.toFixed(2);var r=.09975*c;return t.tvq=r.toFixed(2),t.total=(c+i+r).toFixed(2),t}(n));return Object(c.jsxs)("div",{className:"SommairePanier"+(e.cacher?" cacher":""),children:[Object(c.jsxs)("span",{className:"nbArticles",children:["Articles diff\xe9rents : ",i.nbArticles]}),Object(c.jsxs)("span",{className:"qteArticles",children:["Articles total : ",i.qteArticles]}),Object(c.jsxs)("span",{className:"sousTotal",children:["Sous-total : ",i.st]}),Object(c.jsxs)("span",{className:"tps",children:["TPS : ",i.tps]}),Object(c.jsxs)("span",{className:"tvq",children:["TVQ : ",i.tvq]}),Object(c.jsxs)("span",{className:"total",children:["Total : ",i.total]})]})}function b(e){var t=Object(i.useState)(!0),n=Object(l.a)(t,2),r=n[0],s=n[1],a=Object(l.a)(e.etatPanier,2),j=a[0];a[1];return Object(c.jsxs)("header",{className:"Entete",children:[Object(c.jsx)("div",{children:"Logo"}),Object(c.jsxs)("ul",{className:"navPrincipale",children:[Object(c.jsx)("li",{children:"Produits"}),Object(c.jsx)("li",{children:"A propos de nous"}),Object(c.jsx)("li",{children:"Contactez-nous"})]}),Object(c.jsxs)("ul",{className:"navUtil",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)(d.a,{onClick:function(){return s(!r)},badgeContent:Object.values(j).reduce((function(e,t){return e+t.qte}),0),color:"primary",children:Object(c.jsx)(o.a,{})}),Object(c.jsx)(u,{cacher:r,etatPanier:e.etatPanier})]}),Object(c.jsx)("li",{children:"Mon compte"})]})]})}n(38);function x(e){var t=(new Date).getFullYear();return Object(c.jsxs)("footer",{children:["\xa9 ",t]})}n(39),n(40);var O=n(20),p=n.n(O);function h(e){var t=Object(i.useState)(0),n=Object(l.a)(t,2),r=n[0],s=n[1],a=Object(i.useState)("Ajouter au panier"),j=Object(l.a)(a,2),o=j[0],u=j[1];return Object(c.jsx)(d.a,{badgeContent:r,color:"secondary",children:Object(c.jsx)("button",{onClick:function(t){e.onClick(),s(r+1),u(Object(c.jsx)(p.a,{})),t.target.classList.add("rouge")},className:"BtnAjoutPanier",children:o})})}n(41);function m(e){return Object(c.jsxs)("li",{className:"Produit",children:[Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:"images-produits/"+e.id+".webp",alt:e.nom})}),Object(c.jsxs)("div",{className:"info",children:[Object(c.jsx)("h3",{children:e.nom}),Object(c.jsxs)("p",{className:"prix",children:[e.prix," $CA"]}),Object(c.jsx)(h,{onClick:function(){var t=Object(l.a)(e.etatPanier,2),n=t[0],c=t[1];n[e.id]?n[e.id].qte++:n[e.id]={prix:e.prix,qte:1},c(JSON.parse(JSON.stringify(n)))}})]})]})}var f=n(21);var v=function(e){return Object(c.jsxs)("div",{className:"ListeProduits",children:[Object(c.jsx)("h2",{children:"Produits disponibles"}),Object(c.jsx)("ul",{children:f.map((function(t){return Object(c.jsx)(m,{etatPanier:e.etatPanier,id:t.id,nom:t.nom,prix:t.prix},t.id)}))})]})};function N(){var e=Object(i.useState)({});return Object(c.jsxs)("div",{className:"Page",children:[Object(c.jsx)(b,{etatPanier:e}),Object(c.jsx)("section",{className:"contenuPrincipal",children:Object(c.jsx)(v,{etatPanier:e})}),Object(c.jsx)(x,{})]})}a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("racine"))}},[[43,1,2]]]);
//# sourceMappingURL=main.15aa427a.chunk.js.map