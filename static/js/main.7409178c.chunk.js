(this["webpackJsonpredux-saga"]=this["webpackJsonpredux-saga"]||[]).push([[0],{152:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var r=n(211),a=n(60),c=n(0),o=n.n(c),s=n(14),i=n.n(s),u=n(29),l=n(42),d=n(22),b=Object(d.a)(),f=n(195),p=n(212),j=n(3);function m(e){return Object(j.jsx)("div",{children:"Not Found"})}n(93);var x=n(13);var g=n(9),h=n.n(g),O=n(20),v=n(30),y=n(201),w=n(206),k=n(203),S=n(205),I=n(216),N=n(204),C=n(64),L=n(214),B=u.e,R=n(102),F=n(197),U=n(31),Y=["name","control","label"],T=Object(f.a)((function(e){return Object(I.a)({root:{backgroundColor:"#ffffff"},inputform:{maxWidth:200,minWidth:200,background:"#ffffff",margin:"0 20px 0 0"}})}));function z(e){var t=e.name,n=e.control,r=e.label,a=Object(R.a)(e,Y),c=T(),o=Object(U.a)({name:t,control:n}),s=o.field,i=s.value,u=s.onChange,l=s.onBlur,d=s.ref,b=o.fieldState,f=b.invalid,p=b.error;return Object(j.jsx)(F.a,{className:c.inputform,size:"small",margin:"normal",value:i,onChange:u,onBlur:l,label:r,variant:"outlined",inputRef:d,error:f,helperText:null===p||void 0===p?void 0:p.message,inputProps:a})}n(161),n(157),n(200),n(159),n(213),n(215);n(163),n(202),n(158);var P=n(40),q={isLoggedIn:!1,logging:!1,currentUser:void 0,isRegister:!1},D=Object(P.c)({name:"auth",initialState:q,reducers:{login:function(e,t){e.logging=!0},loginSuccess:function(e,t){e.isLoggedIn=!0,e.logging=!1,e.currentUser=t.payload},loginFailed:function(e,t){e.logging=!1,e.isLoggedIn=!1},logout:function(e){e.isLoggedIn=!1,e.currentUser=void 0},register:function(e,t){e.isRegister=!0},registerSuccess:function(e,t){e.isRegister=!0,e.currentUser=t.payload},registerFailed:function(e,t){e.isRegister=!1}}}),H=D.actions,V=function(e){return e.auth.isLoggedIn},W=function(e){return e.auth.currentUser},A=function(e){return e.auth.isRegister},M=D.reducer,E=Object(f.a)((function(e){return Object(I.a)({root:{backgroundColor:"#ffffff"},header:{display:"flex",justifyContent:"space-between",background:"#ffffff",boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",minHeight:100},title:{fontSize:24,color:"#000",cursor:"pointer"},button:{backgroundColor:"#ffffff",color:"#000",padding:"6px 16px",marginRight:10,"&:hover":{background:"#ffffff"}},groupsInput:{display:"flex",alignItems:"center"," &> .MuiInputBase-root":{background:"red"}},formContainer:{display:"flex",alignItems:"center"},name:{color:"#000",marginRight:15},boxName:{display:"flex",alignItems:"center"}})}));function J(e){var t=e.initialValues,n=(e.onSubmit,E()),r=Object(u.d)(),a=B(V),o=B(W),s=B(A),i=Object(c.useState)({}),l=Object(v.a)(i,2),d=l[0],b=l[1],f=Object(c.useState)(!1),m=Object(v.a)(f,2),g=m[0],I=m[1],R=Object(c.useState)(localStorage.getItem("user")),F=Object(v.a)(R,2),Y=F[0],T=(F[1],Object(c.useState)(localStorage.getItem("username"))),P=Object(v.a)(T,2),q=P[0],D=(P[1],Object(x.g)()),M=Object(U.b)({defaultValues:t}),J=M.control,X=M.handleSubmit,$=M.formState.isSubmitting,_=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{b(t),r(H.login({username:t.username,password:t.password}))}catch(n){console.log("Login fail",n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){((null===o||void 0===o?void 0:o.error)||s)&&(localStorage.removeItem("token"),r(H.register({username:d.username,password:d.password})),I(!0),setTimeout((function(){window.location.replace("/share-youtube-reactjs")}),1e3)),a&&o&&(localStorage.setItem("user",null===o||void 0===o?void 0:o.token),localStorage.setItem("username",null===o||void 0===o?void 0:o.name),setTimeout((function(){window.location.replace("/share-youtube-reactjs")}),1e3)),s&&o&&(localStorage.setItem("user",null===o||void 0===o?void 0:o.token),localStorage.setItem("username",null===o||void 0===o?void 0:o.name),setTimeout((function(){window.location.replace("/share-youtube-reactjs")}),1e3))}),[r,a,o,s]),Object(j.jsxs)("div",{className:n.root,children:[g?Object(j.jsx)(L.a,{action:Object(j.jsx)(y.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){return I(!1)},children:"X"}),variant:"outlined",severity:"success",children:"Register Success"}):null,Object(j.jsx)(k.a,{position:"static",children:Object(j.jsxs)(N.a,{className:n.header,children:[Object(j.jsx)(C.a,{variant:"h6",className:n.title,onClick:function(){return D.push("/")},children:"Funny Movie"}),Object(j.jsxs)(p.a,{className:n.formContainer,children:[null===Y||void 0===Y?Object(j.jsx)(p.a,{children:Object(j.jsx)("form",{onSubmit:X(_),children:Object(j.jsxs)(p.a,{className:n.groupsInput,children:[Object(j.jsx)(z,{label:"Username",control:J,type:"text",name:"username"}),Object(j.jsx)(z,{label:"Password",control:J,type:"password",name:"password"}),Object(j.jsxs)(S.a,{className:n.button,type:"submit",variant:"contained",color:"primary",disabled:$,children:[$&&Object(j.jsx)(w.a,{size:16,color:"primary"})," Login"]})]})})}):null,Object(j.jsx)(p.a,{className:n.boxName,children:Y?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(C.a,{className:n.name,children:["Hi ",q&&q,"!"]}),Object(j.jsx)(S.a,{onClick:function(){D.push("/share")},className:n.button,variant:"contained",color:"primary",children:"Share"})]}):null}),Object(j.jsx)(p.a,{children:null!==Y?Object(j.jsx)(S.a,{onClick:function(){r(H.logout()),localStorage.removeItem("user"),localStorage.removeItem("username"),window.location.replace("/share-youtube-reactjs")},className:n.button,variant:"contained",color:"primary",children:"Logout"}):null})]})]})})]})}n(199),n(162),n(207),n(209),n(208),n(210),Object(f.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},link:{color:"inherit",textDecoration:"none","&.active > div":{backgroundColor:e.palette.action.selected}}}}));var X=n(164),$=Object(P.c)({name:"youtube",initialState:{loading:!1,list:[]},reducers:{fetchYoutubeList:function(e){e.loading=!0},fetchYoutubeListSuccess:function(e,t){console.log("action.payload",t),e.list=t.payload.data,e.loading=!1},fetchYoutubeListFailed:function(e){e.loading=!1}}}),_=$.actions,G=function(e){return e.youtube.list},K=$.reducer,Q=Object(X.a)((function(e){return{root:{width:"80%",margin:"auto"},main:{display:"flex",flexDirection:"column",alignItems:"center"},box:{display:"flex",justifyContent:"space-between",width:"70%",boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",minHeight:300,marginBottom:10},left:{flex:1},right:{flex:1,padding:10},des:{fontStyle:"italic"},text:{fontStyle:"italic"}}}));function Z(){var e=Q(),t=Object(u.d)(),n=Object(u.e)(G);return Object(c.useEffect)((function(){t(_.fetchYoutubeList())}),[t]),Object(j.jsx)(p.a,{className:e.root,children:Object(j.jsx)(p.a,{className:e.main,children:n?n.map((function(t,n){return Object(j.jsxs)(p.a,{className:e.box,children:[Object(j.jsx)(p.a,{className:e.left,children:Object(j.jsx)("iframe",{width:"100%",height:"100%",src:t.source,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(j.jsxs)(p.a,{className:e.right,children:[Object(j.jsxs)(C.a,{variant:"h6",children:["Title ",n+1]}),Object(j.jsx)(C.a,{className:e.des,variant:"body2",children:"Discription:"}),Object(j.jsx)(C.a,{className:e.text,variant:"body2",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, similique saepe? Libero numquam sequi voluptatem commodi expedita, ratione non sint, dignissimos quaerat explicabo porro nemo aperiam, omnis ipsum tempora debitis!"})]})]},n)})):null})})}var ee=n(99),te=n.n(ee).a.create({baseURL:"https://share-youtube-node.herokuapp.com/api",headers:{"Content-Type":"application/json"}});te.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),te.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var ne=te,re={getAll:function(){return ne.get("/share/list")},share:function(e){return ne.post("/share",e)}},ae=Object(f.a)((function(e){return{root:{width:"80%",margin:"auto"},main:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 0"},box:{display:"flex",justifyContent:"center",width:"50%",boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",minHeight:300,marginBottom:10,alignItems:"center"},groupsInput:{display:"flex",alignItems:"center"," &> .MuiInputBase-root":{background:"red"},justifyContent:"center"},button:{backgroundColor:"#ffffff",color:"#000",padding:"6px 16px",marginRight:10,"&:hover":{background:"#ffffff"}},hint:{fontSize:14,fontStyle:"italic",color:"grey",marginBottom:10}}}));function ce(e){var t=e.initialValues,n=(e.onSubmit,ae()),r=Object(x.g)(),a=Object(U.b)({defaultValues:t}),c=a.control,o=a.handleSubmit,s=a.formState.isSubmitting,i=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("formValues",t),e.prev=1,e.next=4,re.share(t);case 4:r.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("Failed to share",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(p.a,{className:n.root,children:Object(j.jsx)(p.a,{className:n.main,children:Object(j.jsx)(p.a,{className:n.box,children:Object(j.jsxs)("form",{onSubmit:o(i),children:[Object(j.jsx)(C.a,{className:n.hint,children:"Please input like format *https://www.youtube.com/embed/-_X6PhkjpzU"}),Object(j.jsxs)(p.a,{className:n.groupsInput,children:[Object(j.jsx)(z,{label:"Youtube Url",control:c,type:"text",name:"source"}),Object(j.jsxs)(S.a,{className:n.button,type:"submit",variant:"contained",color:"primary",disabled:s,children:[s&&Object(j.jsx)(w.a,{size:16,color:"primary"})," Share"]})]})]})})})})}var oe=Object(f.a)((function(e){return{root:{display:"flex",width:"100%",flexDirection:"column",minHeight:"100vh"},header:{width:"100%",backgroundColor:"#ffffff"},main:{width:"100%",backgroundColor:e.palette.background.paper,padding:e.spacing(2,3)}}}));function se(){var e=oe();return Object(j.jsx)(p.a,{className:e.root,children:Object(j.jsx)(p.a,{className:e.main,children:Object(j.jsxs)(x.d,{children:[Object(j.jsx)(x.b,{exact:!0,path:"/",children:Object(j.jsx)(Z,{})}),Object(j.jsx)(x.b,{path:"/share",children:Object(j.jsx)(ce,{})})]})})})}var ie=Object(f.a)((function(e){return{header:{width:"100%",backgroundColor:"#ffffff"}}}));var ue=function(){var e=ie();return Object(j.jsxs)("div",{children:[Object(j.jsx)(p.a,{className:e.header,children:Object(j.jsx)(J,{})}),Object(j.jsxs)(x.d,{children:[Object(j.jsx)(x.b,{path:"/",children:Object(j.jsx)(se,{})}),Object(j.jsx)(x.b,{children:Object(j.jsx)(m,{})})]})]})},le=n(28),de=n(92),be=n(101);function fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var pe=Object(P.b)("counter/fetchCount",function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),je=Object(P.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload},incrementSaga:function(e,t){e.status="loading"},incrementSagaSuccess:function(e,t){e.status="idle",e.value+=t.payload}},extraReducers:function(e){e.addCase(pe.pending,(function(e){e.status="loading"})).addCase(pe.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),me=je.actions,xe=(me.increment,me.decrement,me.incrementByAmount,me.incrementSaga,me.incrementSagaSuccess,je.reducer),ge=n(66),he={register:function(e){console.log("data",e);var t=e.username,n=e.password;return ne.post("/register",{username:t,password:n})},login:function(e){console.log("data",e);var t=e.username,n=e.password;return ne.post("/login",{username:t,password:n})}},Oe=n(21),ve=n(17),ye=h.a.mark(Ne),we=h.a.mark(Ce),ke=h.a.mark(Le),Se=h.a.mark(Be),Ie=h.a.mark(Re);function Ne(e){var t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ve.a)(he.login,e);case 3:return t=n.sent,localStorage.setItem("token",t.token),n.next=7,Object(ve.c)(H.loginSuccess(t));case 7:return n.next=9,Object(ve.c)(Object(Oe.d)("/share-youtube-reactjs"));case 9:n.next=16;break;case 11:return n.prev=11,n.t0=n.catch(0),console.log(n.t0),n.next=16,Object(ve.c)(H.loginFailed(n.t0.message));case 16:case"end":return n.stop()}}),ye,null,[[0,11]])}function Ce(e){var t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ve.a)(he.register,e);case 3:return t=n.sent,localStorage.setItem("token",t.token),n.next=7,Object(ve.c)(H.registerSuccess(t));case 7:return n.next=9,Object(ve.c)(Object(Oe.d)("/share-youtube-reactjs"));case 9:n.next=16;break;case 11:return n.prev=11,n.t0=n.catch(0),console.log(n.t0),n.next=16,Object(ve.c)(H.registerFailed(n.t0.message));case 16:case"end":return n.stop()}}),we,null,[[0,11]])}function Le(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem("token"),e.next=3,Object(ve.c)(Object(Oe.d)("/share-youtube-reactjs"));case 3:case"end":return e.stop()}}),ke)}function Be(){var e,t,n,r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=Boolean(localStorage.getItem("token")),t=localStorage.getItem("token"),e){a.next=9;break}return a.next=6,Object(ve.d)(H.login.type);case 6:return n=a.sent,a.next=9,Object(ve.b)(Ne,n.payload);case 9:if(!t){a.next=14;break}return a.next=12,Object(ve.c)(Object(Oe.d)("/share-youtube-reactjs"));case 12:a.next=19;break;case 14:return a.next=16,Object(ve.d)(H.register.type);case 16:return r=a.sent,a.next=19,Object(ve.b)(Ce,r.payload);case 19:return a.next=21,Object(ve.d)(H.logout.type);case 21:return a.next=23,Object(ve.a)(Le);case 23:a.next=0;break;case 25:case"end":return a.stop()}}),Se)}function Re(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.b)(Be);case 2:case"end":return e.stop()}}),Ie)}var Fe=h.a.mark(Ye),Ue=h.a.mark(Te);function Ye(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ve.a)(re.getAll);case 3:return e=t.sent,t.next=6,Object(ve.c)(_.fetchYoutubeListSuccess(e));case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log("failed to fetch youtube list",t.t0),t.next=13,Object(ve.c)(_.fetchYoutubeListFailed());case 13:case"end":return t.stop()}}),Fe,null,[[0,8]])}function Te(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.e)(_.fetchYoutubeList,Ye);case 2:case"end":return e.stop()}}),Ue)}var ze=h.a.mark(Pe);function Pe(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ge.a)([Re(),Te()]);case 2:case"end":return e.stop()}}),ze)}var qe=Object(le.b)({router:Object(a.b)(b),counter:xe,auth:M,youtube:K}),De=Object(be.a)(),He=Object(P.a)({reducer:qe,middleware:function(e){return e().concat(De,Object(de.a)(b))}});De.run(Pe);n(152),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(u.a,{store:He,children:Object(j.jsxs)(a.a,{history:b,children:[Object(j.jsx)(r.a,{}),Object(j.jsx)(l.a,{basename:"/share-youtube-reactjs",children:Object(j.jsx)(ue,{})})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[153,1,2]]]);
//# sourceMappingURL=main.7409178c.chunk.js.map