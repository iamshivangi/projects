(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),r=n(4),s=n(1),o=n.n(s),i=n(0),l=function(e){return Object(i.jsx)("div",{className:"game__board__square",onClick:function(){e.renderMoves(e.name),e.onClickHandler(e.name)},children:e.board[e.name]})},u=(n(16),function(e,t,n){for(var c=[],a=0;a<9;a++)c.push(Object(i.jsx)(l,{name:a,onClickHandler:e,renderMoves:n,board:t,calculateWinner:j},a));return c}),d=function(e){return"X"===e?"O":"X"},j=function(e){for(var t=0,n=["012","345","678","036","147","258","048","246"];t<n.length;t++){var c=n[t];if(e[c[0]]&&e[c[0]]===e[c[1]]&&e[c[0]]===e[c[2]])return alert("".concat(e[c[0]]," is the winner")),e[c[0]]}return null},h=function(){var e=Object(s.useState)("X"),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(new Array(9).fill(null)),o=Object(r.a)(a,2),l=o[0],h=o[1],m=j(l);return Object(i.jsxs)("div",{className:"game",children:[Object(i.jsx)("div",{className:"game__title",children:"Welcome to TIC TAC TOE"}),Object(i.jsx)("div",{className:"game__turn",children:m?"".concat(m," is the winner"):"It is the turn of player ".concat(n)}),Object(i.jsx)("div",{className:"game__board",children:u((function(e){c(d(n))}),l,(function(e){l[e]||m||h((function(){return l.map((function(t,c){return c===e?n:t}))}))}))}),Object(i.jsx)("button",{className:"game__reset",onClick:function(){return h(new Array(9).fill(null)),void c("X")},children:"Reset"})]})},m=n(6),p=n(7),f=n(8),b=n(10),v=n(9),O=function(e,t){var n;fetch("https://google-search3.p.rapidapi.com/api/v1/search/q=".concat(e,"&num=20"),{method:"GET",headers:{"x-rapidapi-key":"2cfc8345e9mshb5f6d9cc440c6aep19345fjsn3b8d76320676","x-rapidapi-host":"google-search3.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){n=e.results,t(n)})).catch((function(e){console.error(e)}))},x=(n(17),function(e){return Object(i.jsx)("div",{className:"autocomplete__result__output",children:Object(i.jsx)("a",{href:e.link,children:e.name})})}),_=function(e,t){var n=!0;return function(){n&&(n=!1,e.apply(void 0,arguments),setTimeout((function(){n=!0}),t))}}((function(e,t){return O(e,t)}),500),g=function(e,t){var n;return function(){for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];var s=function(){n=null,e.apply(void 0,a)};clearTimeout(n),n=setTimeout(s,t)}}((function(e,t){return O(e,t)}),400),y=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).renderAutocompleteResults=function(e){var t,n=[],a=Object(m.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;n.push(Object(i.jsx)(x,{name:r.title,link:r.link},r.title))}}catch(s){a.e(s)}finally{a.f()}c.setState({elements:n})},c.handleOnChange=function(e){if(e.trim()){var t=e.replace(/ /g,"+");"throttle"===c.props.type?_(t,c.renderAutocompleteResults):g(t,c.renderAutocompleteResults)}},c.state={elements:[]},c}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsxs)("div",{className:"autocomplete",children:[Object(i.jsxs)("div",{className:"autocomplete__header",children:["Autocomplete using ",this.props.type]}),Object(i.jsxs)("div",{className:"autocomplete__search",children:[Object(i.jsx)("span",{className:"fa fa-search"}),Object(i.jsx)("input",{type:"text",placeholder:"Search..",className:"autocomplete__input",onChange:function(t){e.handleOnChange(t.target.value)}}),Object(i.jsx)("div",{className:"autocomplete__results",children:this.state.elements})]})]})})}}]),n}(s.Component),N=(n(18),function(){return Object(i.jsxs)("div",{className:"projects",children:[Object(i.jsx)(h,{}),Object(i.jsxs)("div",{className:"autocompletes",children:[Object(i.jsx)(y,{type:"debounce"}),Object(i.jsx)(y,{type:"throttle"})]})]})});a.a.render(Object(i.jsx)(N,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.03b01e6c.chunk.js.map