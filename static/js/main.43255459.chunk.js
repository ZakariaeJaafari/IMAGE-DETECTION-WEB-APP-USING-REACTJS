(this.webpackJsonpface=this.webpackJsonpface||[]).push([[0],{102:function(e,t,n){e.exports=n(380)},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},378:function(e,t,n){},380:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),o=n(48),c=n.n(o),r=(n(107),n(95)),l=n(96),s=n(101),u=n(100),m=(n(108),function(){return i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{className:"f3 link dim green underline pa3 pointer"},"Sign out"))}),A=n(97),p=n.n(A),d=(n(109),n(98)),g=n.n(d),E=function(){return i.a.createElement("div",{className:"ma4 mto"},i.a.createElement(p.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner"},i.a.createElement("div",{className:"Tilt-inner pa3"},i.a.createElement("img",{style:{paddingTop:"12px",marginTop:"16px"},alt:"logo",src:g.a})))))},f=(n(110),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Git it a try."),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"form center pa4 br3 shadow-5"},i.a.createElement("input",{autoFocus:!0,type:"text",className:"f4 pa2 grow w-70 center",onChange:t}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n},"Detect"))))}),h=function(e){var t=e.name;e.entries;return i.a.createElement("div",{style:{marginTop:"70px"}},i.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is...")),i.a.createElement("div",{className:"white f1"},"#5"))},b=n(99),C=n.n(b),v=n(49),B=n.n(v),w=(n(378),function(e){var t=e.imageUrl,n=e.box;return i.a.createElement("div",{className:"center ma",style:{marginTop:"200px"}},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"auto",height:"380px"}),i.a.createElement("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})))}),x=new B.a.App({apiKey:"e82cff6401df4e5f9419f91eec627d7c"}),N={particles:{number:{value:60,density:{enable:!0,value_area:800}}}},y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),i=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*i,rightCol:a-t.right_col*a,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),x.models.predict(B.a.FACE_DETECT_MODEL,e.state.input).then((function(t){console.log("hi",t),t&&fetch("http://localhost:3000/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=(e.isSignedIn,e.imageUrl),n=(e.route,e.box);return i.a.createElement("div",{className:"App"},i.a.createElement(C.a,{className:"particles",params:N}),i.a.createElement(m,null),i.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap ",zoom:"60%"}},i.a.createElement(E,null),i.a.createElement("div",{style:{marginLeft:"200px",justifyContent:"center"}},i.a.createElement(h,null),i.a.createElement(f,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(w,{box:n,imageUrl:t}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(379);c.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t){e.exports="data:image/png;base64,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"}},[[102,1,2]]]);
//# sourceMappingURL=main.43255459.chunk.js.map