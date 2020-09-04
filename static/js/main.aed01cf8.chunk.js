(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[0],{40:function(e,t,a){e.exports=a(72)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/pizza-logo.f3327011.svg"},71:function(e,t,a){e.exports=a.p+"static/media/empty-cart.db34c559.png"},72:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),i=(a(45),a(11)),o=a(16),s=a.n(o),m=function(e){var t=e.className,a=e.outline,n=e.children,r=e.onClick;return c.a.createElement("button",{onClick:r,className:s()("button",t,{"button--outline":a})},n)},u=(a(46),function(e){var t=e.id,a=e.imageUrl,r=e.name,l=e.sizes,o=e.price,u=e.types,d=e.onClickAddPizza,E=e.addedCount,p=Object(n.useState)(l[0]),C=Object(i.a)(p,2),h=C[0],b=C[1],v=Object(n.useState)(u[0]),f=Object(i.a)(v,2),y=f[0],g=f[1],_=["thin crust","regular crust"],w=[26,30,40];return c.a.createElement("div",{className:"pizza-block"},c.a.createElement("img",{className:"pizza-block__image",src:a,alt:"Pizza"}),c.a.createElement("h4",{className:"pizza-block__title"},r),c.a.createElement("div",{className:"pizza-block__selector"},c.a.createElement("ul",null,_&&_.map((function(e,t){return c.a.createElement("li",{key:e,className:s()({active:y===t,disabled:!u.includes(t)}),onClick:function(){return function(e){g(e)}(t)}},e)}))),c.a.createElement("ul",null,w&&w.map((function(e){return c.a.createElement("li",{key:e,className:s()({active:h===e,disabled:!l.includes(e)}),onClick:function(){b(e)}},e," cm.")})))),c.a.createElement("div",{className:"pizza-block__bottom"},c.a.createElement("div",{className:"pizza-block__price"},"from $",o),c.a.createElement(m,{onClick:function(){var e={id:t,imageUrl:a,name:r,price:o,size:h,type:_[y]};d(e)},className:"button--add",outline:!0},c.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})),c.a.createElement("span",null,"Add"),E?c.a.createElement("i",null,E):c.a.createElement("i",null,"0"))))}),d=u;u.defaultProps={name:"---",price:0,types:[],sizes:[],imageUrl:"image",isLoading:!1};var E=c.a.memo((function(e){var t=e.items,a=e.onClickCategory,n=e.activeCategory;return c.a.createElement("div",{className:"categories"},c.a.createElement("ul",null,c.a.createElement("li",{className:null===n?"active":"",onClick:function(){return a(null)}},"All"),t&&t.map((function(e,t){return c.a.createElement("li",{className:n===t?"active":"",onClick:function(){return a(t)},key:"".concat(e,"_").concat(t)},e)}))))}));E.defaultProps={items:[],activeCategory:null};var p=E,C=(a(47),c.a.memo((function(e){var t=e.items,a=e.onClickSortType,r=e.activeSortType,l=Object(n.useState)(!1),o=Object(i.a)(l,2),s=o[0],m=o[1],u=Object(n.useRef)(),d=t.find((function(e){return e.name===r})).name;return c.a.createElement("div",{ref:u,className:"sort"},c.a.createElement("div",{className:"sort__label"},c.a.createElement("svg",{className:s?"rotated":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})),c.a.createElement("b",null,"Sort by:"),c.a.createElement("span",{onClick:function(){m(!s)}},d)),s&&c.a.createElement("div",{className:"sort__popup"},c.a.createElement("ul",null,t&&t.map((function(e,t){return c.a.createElement("li",{onClick:function(){return function(e){var t=e.type,n=e.order,c=e.name;a({type:t,order:n,name:c}),m(!1)}(e)},key:"".concat(e.name,"_").concat(t),className:r===e.name?"active":""},e.name)})))))}))),h=a(4),b=a(37),v=a.n(b),f=function(e){return{type:"SET_PIZZAS",payload:e}},y=["Meat","Vegetarian","Grill","Spicy"],g=[{name:"popularity",type:"rating",order:"desc"},{name:"price",type:"price",order:"desc"},{name:"alphabet",type:"name",order:"asc"}],_=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.cart.items})),a=Object(h.c)((function(e){return e.pizzas.items})),n=Object(h.c)((function(e){return e.pizzas.isLoaded})),r=Object(h.c)((function(e){return e.filters})),l=r.category,o=r.sortBy,s=function(t){e(function(e){return{type:"ADD_PIZZA_CART",payload:e}}(t))},m=c.a.useCallback((function(t){e({type:"SET_CATEGORY",payload:t})}),[]),u=c.a.useCallback((function(t){e({type:"SET_SORT_BY",payload:t})}),[]),E=c.a.useState(window.innerWidth),b=Object(i.a)(E,2),_=b[0],w=b[1];return c.a.useEffect((function(){e(function(e,t){return function(a){a({type:"SET_LOADED",payload:!1}),v.a.get("https://my-json-server.typicode.com/widespreadtruck/dbForPizzaStore/pizzas?".concat(null!==e?"category=".concat(e):"","&_sort=").concat(t.type,"&_order=").concat(t.order)).then((function(e){var t=e.data;a(f(t))}))}}(l,o));var t=function(){return w(window.innerWidth)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[l,o]),c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content__top"},_>1060?c.a.createElement(p,{items:y,onClickCategory:m,activeCategory:l}):c.a.createElement(z,{items:y,onClickCategory:m,activeCategory:l}),c.a.createElement(C,{items:g,onClickSortType:u,activeSortType:o.name})),c.a.createElement("div",{className:"content__items"},n?a.map((function(e){return c.a.createElement(d,Object.assign({onClickAddPizza:s},e,{key:e.id,categoryUpdated:l,addedCount:t[e.id]&&t[e.id].items.length}))})):Array(12).fill(0).map((function(e,t){return c.a.createElement(N,{key:t})})))))},w=a(10),k=(a(69),function(){var e=Object(h.c)((function(e){return{totalPrice:e.cart.totalPrice,totalCount:e.cart.totalCount}})),t=e.totalPrice,a=e.totalCount;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement(w.b,{to:"/online-store"},c.a.createElement("div",{className:"header__logo"},c.a.createElement("div",{className:"header__logo_emoji"},"\ud83c\udf55"),c.a.createElement("div",{className:"header__logo_titles"},c.a.createElement("h1",null,"Tasty Pizza"),c.a.createElement("p",null,"Best pizza in the World")))),c.a.createElement(w.b,{to:"/cart"},c.a.createElement("div",{className:"header__cart"},c.a.createElement("a",{className:"button button--cart"},c.a.createElement("span",null,"$",t),c.a.createElement("div",{className:"button__delimiter"}),c.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",null,a))))))}),O=function(){var e=Object(h.b)(),t=function(t){e(function(e){return{type:"REMOVE_ONE_ITEM",payload:e}}(t))},a=function(t){e(function(e){return{type:"ADD_ONE_ITEM",payload:e}}(t))},n=function(t){e(function(e){return{type:"REMOVE_CART_ITEM",payload:e}}(t))},r=Object(h.c)((function(e){return e.cart})),l=r.totalPrice,i=r.totalCount,o=r.items,s=Object.keys(o).map((function(e){return o[e].items[0]})),u=Object.values(o).flat();return c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"container container--cart"},c.a.createElement("div",{className:"cart"},c.a.createElement("div",{className:"cart__top"},c.a.createElement("h2",{className:"content__title"},c.a.createElement("span",null,"\ud83d\uded2"),"Cart"),0!==u.length?c.a.createElement(P,null):""),c.a.createElement("div",{className:"cart__items"},0!==u.length?s.map((function(e){return c.a.createElement(L,{id:e.id,name:e.name,type:e.type,size:e.size,imageUrl:e.imageUrl,totalPrice:o[e.id].totalPrice,totalCount:o[e.id].items.length,onRemove:n,onRemoveOneItem:t,onAddOneItem:a})})):c.a.createElement(x,null)),0!==u.length?c.a.createElement("div",{className:"cart__bottom"},c.a.createElement("div",{className:"cart__bottom-details"},c.a.createElement("span",null," Total items: ",c.a.createElement("b",null,i)," "),c.a.createElement("span",null," Total price: ",c.a.createElement("b",null,"$",l)," ")),c.a.createElement("div",{className:"cart__bottom-buttons"},c.a.createElement(w.b,{to:"/online-store"},c.a.createElement(m,{className:"button button--outline button--add go-back-btn"},c.a.createElement("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",null,"Back"))),c.a.createElement(m,{className:"button pay-btn"},c.a.createElement("span",null,"Pay")))):c.a.createElement(c.a.Fragment,null))))},j=a(38);var N=function(){return c.a.createElement(j.a,{className:"pizza-block",speed:2,width:300,height:460,viewBox:"0 0 280 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},c.a.createElement("circle",{cx:"141",cy:"130",r:"121"}),c.a.createElement("rect",{x:"0",y:"268",rx:"10",ry:"10",width:"274",height:"35"}),c.a.createElement("rect",{x:"0",y:"318",rx:"10",ry:"10",width:"135",height:"40"}),c.a.createElement("rect",{x:"141",y:"318",rx:"10",ry:"10",width:"135",height:"40"}),c.a.createElement("rect",{x:"0",y:"363",rx:"10",ry:"10",width:"90",height:"40"}),c.a.createElement("rect",{x:"93",y:"363",rx:"10",ry:"10",width:"90",height:"40"}),c.a.createElement("rect",{x:"186",y:"363",rx:"10",ry:"10",width:"90",height:"40"}),c.a.createElement("rect",{x:"0",y:"410",rx:"0",ry:"0",width:"123",height:"35"}),c.a.createElement("rect",{x:"166",y:"408",rx:"10",ry:"10",width:"110",height:"44"}))},L=function(e){var t=e.id,a=e.name,n=e.type,r=e.size,l=e.imageUrl,i=e.totalPrice,o=e.totalCount,s=e.onRemove,u=e.onRemoveOneItem,d=e.onAddOneItem;return c.a.createElement("div",{className:"cart__item"},c.a.createElement("div",{className:"cart__item-img"},c.a.createElement("img",{className:"pizza-block__image",src:l,alt:"Pizza"})),c.a.createElement("div",{className:"cart__item-info"},c.a.createElement("h3",null,a),c.a.createElement("p",null,n,", ",r," cm.")),c.a.createElement("div",{className:"cart__item-count"},c.a.createElement("div",{onClick:function(){u(t)},className:"button button--outline button--circle cart__item-count-minus"},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"}))),c.a.createElement("b",null,o),c.a.createElement("div",{onClick:function(){d(t)},className:"button button--outline button--circle cart__item-count-plus"},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))),c.a.createElement("div",{className:"cart__item-price"},c.a.createElement("b",null,"$",i)),c.a.createElement("div",{className:"cart__item-remove"},c.a.createElement(m,{className:"button--circle",outline:!0,onClick:function(){s(t)}},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))))},z=c.a.memo((function(e){var t=e.items,a=e.onClickCategory,r=e.activeCategory,l=Object(n.useState)(!1),o=Object(i.a)(l,2),s=o[0],m=o[1],u=Object(n.useRef)(),d=Object(h.c)((function(e){return e.filters.category})),E=function(e){a(e),m(!1)};return c.a.createElement("div",{ref:u,className:"sort"},c.a.createElement("div",{className:"sort__label"},c.a.createElement("svg",{className:s?"rotated":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})),c.a.createElement("b",null,"Type:"),c.a.createElement("span",{onClick:function(){m(!s)}},null===r?"All":t[d])),s&&c.a.createElement("div",{className:"sort__popup categoriesPopUp"},c.a.createElement("ul",null,c.a.createElement("li",{className:null===r?"active":"",onClick:function(){return E(null)}},"All"),t&&t.map((function(e,t){return c.a.createElement("li",{onClick:function(){return E(t)},key:"".concat(e,"_").concat(t),className:r===t?"active":""},e)})))))})),x=(a(71),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"cart__emoji"},"\ud83d\udd75\ufe0f\u200d\u2640\ufe0f\ud83d\udd75\ufe0f\u200d\u2642\ufe0f"),c.a.createElement("p",{className:"cart__empty"},"Our detectives report your cart looks empty... Go to the Home page to find best pizzas!"),c.a.createElement(w.b,{to:"/online-store"},c.a.createElement("div",{className:"btn-wrapper"},c.a.createElement(m,{className:"button button--outline button--add go-home-btn"},c.a.createElement("span",null,"Home")))))}),P=function(){var e=Object(h.b)(),t=c.a.useCallback((function(){e({type:"CLEAR_CART"})}));return c.a.createElement("div",{onClick:t,className:"cart__clear"},c.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",null,"Clear cart"))},B=a(3),A=function(){return c.a.createElement(w.a,null,c.a.createElement("div",{className:"wrapper"},c.a.createElement(k,null),c.a.createElement("div",{className:"content"},c.a.createElement(B.a,{path:"/online-store",component:_,exact:!0}),c.a.createElement(B.a,{path:"/cart",component:O,exact:!0}))))},T=a(12),M=a(1),S={category:null,sortBy:{type:"popularity",order:"desc",name:"popularity"}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return"SET_SORT_BY"===t.type?Object(M.a)(Object(M.a)({},e),{},{sortBy:t.payload}):"SET_CATEGORY"===t.type?Object(M.a)(Object(M.a)({},e),{},{category:t.payload}):e},R={items:[],isLoaded:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PIZZAS":return Object(M.a)(Object(M.a)({},e),{},{items:t.payload,isLoaded:!0});case"SET_LOADED":return Object(M.a)(Object(M.a)({},e),{},{isLoaded:t.payload});default:return e}},D=a(14),H=a(25),I={items:{},totalPrice:0,totalCount:0},W=function(e){return e.reduce((function(e,t){return t.price+e}),0)},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PIZZA_CART":var a=e.items[t.payload.id]?[].concat(Object(H.a)(e.items[t.payload.id].items),[t.payload]):[t.payload],n=Object(M.a)(Object(M.a)({},e.items),{},Object(D.a)({},t.payload.id,{items:a,totalPrice:W(a)})),c=Object.keys(n).reduce((function(e,t){return n[t].items.length+e}),0),r=Object.keys(n).reduce((function(e,t){return n[t].totalPrice+e}),0);return Object(M.a)(Object(M.a)({},e),{},{items:n,totalCount:c,totalPrice:r});case"CLEAR_CART":return Object(M.a)(Object(M.a)({},e),{},{items:{},totalPrice:0,totalCount:0});case"REMOVE_CART_ITEM":var l=Object(M.a)({},e.items),i=l[t.payload].totalPrice,o=l[t.payload].items.length;return delete l[t.payload],Object(M.a)(Object(M.a)({},e),{},{items:l,totalPrice:e.totalPrice-i,totalCount:e.totalCount-o});case"REMOVE_ONE_ITEM":var s=e.items[t.payload].items,m=s.length>1?e.items[t.payload].items.slice(1):s,u=Object(M.a)({},e.items),d=u[t.payload].items[0].price;return Object(M.a)(Object(M.a)({},e),{},{items:Object(M.a)(Object(M.a)({},e.items),{},Object(D.a)({},t.payload,{items:m,totalPrice:W(m)})),totalPrice:s.length>1?e.totalPrice-d:e.totalPrice,totalCount:s.length>1?e.totalCount-1:e.totalCount});case"ADD_ONE_ITEM":var E=[].concat(Object(H.a)(e.items[t.payload].items),[e.items[t.payload].items[0]]);return Object(M.a)(Object(M.a)({},e),{},{items:Object(M.a)(Object(M.a)({},e.items),{},Object(D.a)({},t.payload,{items:E,totalPrice:W(E)})),totalPrice:e.totalPrice+e.items[t.payload].items[0].price,totalCount:e.totalCount+1});default:return e}},G=Object(T.c)({filters:V,pizzas:Z,cart:U}),Y=a(39),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,F=Object(T.e)(G,$(Object(T.a)(Y.a)));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h.a,{store:F},c.a.createElement(A,null))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.aed01cf8.chunk.js.map