(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{VMbq:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return k}));e("HAE/"),e("WLL4"),e("jm62"),e("8+KV"),e("0l/t"),e("ioFf"),e("rGqo"),e("yt8O"),e("Btvt"),e("RW0V");var i,r=e("CubX"),o=(e("bWfx"),e("dRSK"),e("q1tI")),s=e.n(o),a=e("ZqbR"),u=e("nOHt"),l=e("HQnQ"),c=e("JRPe"),f=e("RMmg"),m=s.a.createElement,d=function(t){var n=t.baseMetafields;return m("div",{className:"nutrition-information-base-metafields"},n.map((function(t){return m("div",{className:"nutrition-information-base-metafields__item-container",key:t.key},m("div",{className:"nutrition-information-base-metafields__item-icon"}),m(f.DangerouslySetInnerHtml,{className:"nutrition-information-base-metafields__item-header",html:t.key}),m(f.DangerouslySetInnerHtml,{className:"nutrition-information-base-metafields__item-content",html:t.value}))})))},g=e("XOff"),b=e.n(g),p=s.a.createElement,O=Object(c.injectIntl)((function(t){var n=t.handleNutrientsToggle,e=t.nutrientsMetafield,i=t.nutrientsToggled,r=t.intl.formatMessage;return p("div",{className:"nutrition-information-nutrients"},p("div",{className:"nutrition-information-nutrients__toggle-bar"},p(f.DangerouslySetInnerHtml,{className:"nutrition-information-nutrients__title",html:e.key}),p(f.Button,{onClick:n,className:b()("nutrition-information-nutrients__toggle-button",{"nutrition-information-nutrients__toggle-button--toggled":i}),ariaLabel:r({id:i?"components.sk.components.shopify.nutritionInformation.nutrients.close":"components.sk.components.shopify.nutritionInformation.nutrients.open",defaultMessage:i?"Close nutrients":"Open nutrients"})})),i?p("div",{className:"nutrition-information-nutrients__nutrients-container"},p(f.DangerouslySetInnerHtml,{html:e.value,className:"nutrition-information-nutrients__nutrients-content"})):null)})),y=s.a.createElement;!function(t){t.vitamins="vitamins",t.nutrients="nutrients",t.ingredients="ingredients"}(i||(i={}));var v=function t(n){var e=n.handleNutrientsToggle,r=n.nutrientsToggled,o=n.nutritionMetafields,s=o.find((function(t){return t.key===i.nutrients}));return o.length?y("div",{className:"nutrition-information"},y("h2",{className:"nutrition-information__header"},y(c.FormattedMessage,{id:"components.sk.components.shopify.nutritionInformation.header",defaultMessage:"Nutrients and Ingredients"})),y(t.BaseMetafields,{baseMetafields:o.filter((function(t){return t.key!==i.nutrients}))}),s?y(t.Nutrients,{nutrientsMetafield:s,handleNutrientsToggle:e,nutrientsToggled:r}):null):null};v.BaseMetafields=d,v.Nutrients=O;var j=v,h=(e("kIq+"),s.a.createElement);function _(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}var N=function t(n){var e=n.productId,i=Object(o.useState)(!1),s=i[0],c=i[1],f=Object(a.useSelector)((function(t){return t.shopify})).products.find((function(t){return t.id===e})),m=Object(a.useSelector)((function(t){return Object(l.A)(t)(Object(u.useRouter)())}))||f,d=Object(o.useMemo)((function(){return Object(l.q)(m.metafields).map((function(t){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?_(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):_(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},t,{key:t.key.toLowerCase()})}))}),[m]),g=Object(o.useCallback)((function(){c((function(t){return!t}))}),[]);return h(t.View,{handleNutrientsToggle:g,nutritionMetafields:d,nutrientsToggled:s})};N.View=j;var k=N}}]);