(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/logo.f7c52692.jpg"},33:function(e,t,a){e.exports=a(67)},39:function(e,t,a){},40:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),s=a.n(r),o=(a(39),a(9)),l=a(10),i=a(12),m=a(11),p=a(13),h=(a(40),a(6)),b=(a(7),function(){return c.a.createElement("nav",{className:"dt w-100 border-box pa0 bg-black ph5-ns"},c.a.createElement("p",{className:"dtc v-mid baskerville link w-25 light-green tl "},c.a.createElement("h1",null,"Harsh Joshi ")),c.a.createElement("div",{className:"dtc b v-mid tracked w-75 tr"},c.a.createElement(h.b,{to:"/",className:"link ba white pa2 ph3 b--light-green bw1  br3 dim  grow f6 f5-ns dib mr3 mr4-ns"},"ABOUT"),c.a.createElement(h.b,{to:"/academics",className:"link ba white pa2 ph3 br3 b--light-green bw1  dim  grow f6 f5-ns dib mr3 mr4-ns"},"ACADEMICS"),c.a.createElement(h.c,{to:"/projects",className:"link ba white pa2 ph3 br3 b--light-green bw1  dim  grow f6 f5-ns dib mr3 mr4-ns"},"PROJECTS"),c.a.createElement(h.b,{to:"/cv",className:"link ba white pa2 ph3 br3 b--light-green bw1  dim  grow f6 f5-ns dib mr3 mr4-ns"},"CV"),c.a.createElement(h.b,{to:"/contact",className:"link ba white pa2 ph3 br3 b--light-green bw1  dim  grow f6 f5-ns dib"},"CONTACT")))}),d=a(8),u=a(15),f=a.n(u),E=a(32),w=a.n(E),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={posts:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://jsonplaceholder.typicode.com/posts").then(function(t){e.setState({posts:t.data.slice(0,10)})})}},{key:"render",value:function(){var e=this.state.posts,t=e.length?e.map(function(e){return c.a.createElement("article",{className:"center mw5 mw6-ns hidden ba b--green bw2 mv4",key:e.id},c.a.createElement("img",{src:w.a,alt:"A logo"}),c.a.createElement(h.b,{to:"/"+e.id},c.a.createElement("h1",{className:"f4 bg-gray white mv0 pv2 ph3"},e.title)),c.a.createElement("div",{className:"pa3 bt"},c.a.createElement("p",{className:"f6 f5-ns lh-copy yellow measure mv0"},e.body)))}):c.a.createElement("div",{className:"tc f3 white"},"Check internet connection ");return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"tc white f2"},"About"),t)}}]),t}(n.Component),g=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"f2 white"},"Projects "),c.a.createElement("p",{className:"f3 yellow"}," Work on projects is in progress.... "))},N=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"f2 white"},"Contact "),c.a.createElement("p",{className:"f3 yellow"}," Work on contact is in progress.... "))},y=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"white f2"},"Academics "),c.a.createElement("p",{className:"yellow f3"}," Work on academics is in progress... "))},k=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"f2 white"},"Cv "),c.a.createElement("p",{className:"f3 yellow"}," Work on cv is in progress..."))},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={post:null},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.post_id;f.a.get("https://jsonplaceholder.typicode.com/posts/"+t).then(function(t){e.setState({post:t.data})})}},{key:"render",value:function(){var e=this.state.post?c.a.createElement("div",{className:"post f4"},c.a.createElement("h4",{className:"f2 b white"},this.state.post.title),c.a.createElement("p",{className:"yellow"},this.state.post.body)):c.a.createElement("div",{className:"tc f3 white"},"Loading post ....");return c.a.createElement("div",{className:"container"},c.a.createElement("h4",null,e))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(b,null),c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:v}),c.a.createElement(d.a,{path:"/about",component:v}),c.a.createElement(d.a,{path:"/cv",component:k}),c.a.createElement(d.a,{path:"/academics",component:y}),c.a.createElement(d.a,{path:"/projects",component:g}),c.a.createElement(d.a,{path:"/contact",component:N}),c.a.createElement(d.a,{path:"/:post_id",component:j}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.b9392177.chunk.js.map