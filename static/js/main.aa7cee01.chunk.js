(this.webpackJsonpfireb=this.webpackJsonpfireb||[]).push([[0],{50:function(e,t,r){},63:function(e,t,r){"use strict";r.r(t);var a=r(2),c=r.n(a),n=r(24),s=r.n(n),i=(r(50),r(20)),j=r.n(i),o=r(22),l=r(13),u=r(69),d=r(67),b=r(68),p=r(65),O=r(12),h=r(16),x=r(43),m=(r(55),x.a.initializeApp({apiKey:"AIzaSyCw1X7XgYXd28bpzaCSF1u9659SKiIAv9o",authDomain:"group-a-95468.firebaseapp.com",projectId:"group-a-95468",storageBucket:"group-a-95468.appspot.com",messagingSenderId:"37289469766",appId:"1:37289469766:web:1ea8e382da990a5cce2747",measurementId:"G-1192MWBT89"})),f=m.auth(),v=r(3),g=c.a.createContext();function w(){return Object(a.useContext)(g)}function y(e){var t=e.children,r=Object(a.useState)(),c=Object(l.a)(r,2),n=c[0],s=c[1],i=Object(a.useState)(!0),j=Object(l.a)(i,2),o=j[0],u=j[1];Object(a.useEffect)((function(){return f.onAuthStateChanged((function(e){s(e),u(!1)}))}),[]);var d={currentUser:n,signup:function(e,t){return f.createUserWithEmailAndPassword(e,t)},login:function(e,t){return f.signInWithEmailAndPassword(e,t)},logout:function(){return f.signOut()},forgotPassword:function(e){return f.sendPasswordResetEmail(e)},updateEmail:function(e){return n.updateEmail(e)},updatePassword:function(e){return n.updatePassword(e)}};return Object(v.jsx)(g.Provider,{value:d,children:!o&&t})}var S=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useRef)(),c=w().signup,n=Object(a.useState)(""),s=Object(l.a)(n,2),i=s[0],x=s[1],m=Object(a.useState)(!1),f=Object(l.a)(m,2),g=f[0],y=f[1],S=Object(O.g)();function P(){return(P=Object(o.a)(j.a.mark((function a(n){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),t.current.value===r.current.value){a.next=3;break}return a.abrupt("return",x("Passwors do not match"));case 3:return a.prev=3,x(""),y(!0),a.next=8,c(e.current.value,t.current.value);case 8:S.push("/"),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(3),console.log(a.t0),x("Failed to create an account");case 15:y(!1);case 16:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.a,{children:Object(v.jsxs)(u.a.Body,{children:[Object(v.jsx)("h2",{children:"Sign Up"}),i&&Object(v.jsx)(d.a,{variant:"danger",children:i}),Object(v.jsxs)(b.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(v.jsxs)(b.a.Group,{id:"email",children:[Object(v.jsx)(b.a.Label,{children:"Email"}),Object(v.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(v.jsxs)(b.a.Group,{id:"password",children:[Object(v.jsx)(b.a.Label,{children:"Password"}),Object(v.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(v.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(v.jsx)(b.a.Label,{children:"Confirm Password"}),Object(v.jsx)(b.a.Control,{type:"password",ref:r,required:!0})]}),Object(v.jsx)(p.a,{disabled:g,className:"w-100 mt-2",type:"submit",children:"Sign Up"})]})]})}),Object(v.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(v.jsx)(h.b,{to:"/login",children:"Log in"})]})]})};var P=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),r=t[0],c=t[1],n=w(),s=n.currentUser,i=n.logout,b=Object(O.g)();function x(){return(x=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(" "),e.prev=1,e.next=4,i();case 4:b.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to Log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.a,{children:Object(v.jsxs)(u.a.Body,{children:[Object(v.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),r&&Object(v.jsx)(d.a,{variant:"danger",children:r}),Object(v.jsx)("strong",{children:"Email:"})," ",s.email,Object(v.jsx)(h.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update profile"})]})}),Object(v.jsx)("div",{className:"w-100 text-center mt-2",children:Object(v.jsx)(p.a,{variant:"link",onClick:function(){return x.apply(this,arguments)},children:"Log Out"})})]})};var C=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=w().login,c=Object(a.useState)(""),n=Object(l.a)(c,2),s=n[0],i=n[1],x=Object(a.useState)(!1),m=Object(l.a)(x,2),f=m[0],g=m[1],y=Object(O.g)();function S(){return(S=Object(o.a)(j.a.mark((function a(c){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,i(""),g(!0),a.next=6,r(e.current.value,t.current.value);case 6:y.push("/"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0),i("Failed to log in account");case 13:g(!1);case 14:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.a,{children:Object(v.jsxs)(u.a.Body,{children:[Object(v.jsx)("h2",{className:"text-center mb-4",children:"Login"}),s&&Object(v.jsx)(d.a,{variant:"danger",children:s}),Object(v.jsxs)(b.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(v.jsxs)(b.a.Group,{id:"email",children:[Object(v.jsx)(b.a.Label,{children:"Email"}),Object(v.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(v.jsxs)(b.a.Group,{id:"password",children:[Object(v.jsx)(b.a.Label,{children:"Password"}),Object(v.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(v.jsx)(p.a,{disabled:f,className:"w-100 mt-2",type:"submit",children:"Log in"}),Object(v.jsx)("div",{className:"w-100 text-center mt-3",children:Object(v.jsx)(h.b,{to:"/forgot-password",children:"Forgot Password?"})})]})]})}),Object(v.jsxs)("div",{className:"w-100 text-center mt-2",children:["Create an account? ",Object(v.jsx)(h.b,{to:"/signup",children:"Sign up"})]})]})},k=r(66),N=r(29),L=r(44);var E=function(e){var t=e.component,r=Object(L.a)(e,["component"]),a=w().currentUser;return Object(v.jsx)(O.b,Object(N.a)(Object(N.a)({},r),{},{render:function(e){return a?Object(v.jsx)(t,Object(N.a)({},e)):Object(v.jsx)(O.a,{to:"/login"})}}))};var R=function(){var e=Object(a.useRef)(),t=w().forgotPassword,r=Object(a.useState)(""),c=Object(l.a)(r,2),n=c[0],s=c[1],i=Object(a.useState)(!1),O=Object(l.a)(i,2),x=O[0],m=O[1],f=Object(a.useState)(""),g=Object(l.a)(f,2),y=g[0],S=g[1];function P(){return(P=Object(o.a)(j.a.mark((function r(a){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.prev=1,S(""),s(""),m(!0),r.next=7,t(e.current.value);case 7:S("Check your inbox for further instructions"),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(1),console.log(r.t0),s("Failed to Reset Password");case 14:m(!1);case 15:case"end":return r.stop()}}),r,null,[[1,10]])})))).apply(this,arguments)}return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.a,{children:Object(v.jsxs)(u.a.Body,{children:[Object(v.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),n&&Object(v.jsx)(d.a,{variant:"danger",children:n}),y&&Object(v.jsx)(d.a,{variant:"success",children:y}),Object(v.jsxs)(b.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(v.jsxs)(b.a.Group,{id:"email",children:[Object(v.jsx)(b.a.Label,{children:"Email"}),Object(v.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(v.jsx)(p.a,{disabled:x,className:"w-100 mt-2",type:"submit",children:"Reset Passwaord"}),Object(v.jsx)("div",{className:"w-100 text-center mt-3",children:Object(v.jsx)(h.b,{to:"/login",children:"Login"})})]})]})}),Object(v.jsxs)("div",{className:"w-100 text-center mt-2",children:["Create an account? ",Object(v.jsx)(h.b,{to:"/signup",children:"Sign up"})]})]})};var F=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useRef)(),c=w(),n=c.currentUser,s=c.updateEmail,i=c.updatePassword,j=Object(a.useState)(""),o=Object(l.a)(j,2),x=o[0],m=o[1],f=Object(a.useState)(!1),g=Object(l.a)(f,2),y=g[0],S=g[1],P=Object(O.g)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.a,{children:Object(v.jsxs)(u.a.Body,{children:[Object(v.jsx)("h2",{className:"text-center mt-2",children:"Update Profile"}),x&&Object(v.jsx)(d.a,{variant:"danger",children:x}),Object(v.jsxs)(b.a,{onSubmit:function(a){if(a.preventDefault(),t.current.value!==r.current.value)return m("Passwors do not match");var c=[];m(""),S(!0),e.current.value!==n.email&&c.push(s(e.current.value)),t.current.value&&c.push(i(t.current.value)),Promise.all(c).then((function(){P.push("/")})).catch((function(){m("Failed to Update")})).finally((function(){S(!1)}))},children:[Object(v.jsxs)(b.a.Group,{id:"email",children:[Object(v.jsx)(b.a.Label,{children:"Email"}),Object(v.jsx)(b.a.Control,{type:"email",ref:e,required:!0,defaultValue:n.email})]}),Object(v.jsxs)(b.a.Group,{id:"password",children:[Object(v.jsx)(b.a.Label,{children:"Password"}),Object(v.jsx)(b.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep same"})]}),Object(v.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(v.jsx)(b.a.Label,{children:"Confirm Password"}),Object(v.jsx)(b.a.Control,{type:"password",ref:r,placeholder:"Leave blank to keep same"})]}),Object(v.jsx)(p.a,{disabled:y,className:"w-100 mt-2",type:"submit",children:"Update Profile"})]})]})}),Object(v.jsx)("div",{className:"w-100 text-center mt-2",children:Object(v.jsx)(h.b,{to:"/",children:"Cancel"})})]})};var U=function(){return Object(v.jsx)(k.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(v.jsx)("div",{className:"w-100",style:{minWidth:"400px"},children:Object(v.jsx)(y,{children:Object(v.jsx)(h.a,{children:Object(v.jsxs)(O.d,{children:[Object(v.jsx)(O.b,{path:"/signup",component:S}),Object(v.jsx)(E,{exact:!0,path:"/dashboard",component:P}),Object(v.jsx)(E,{exact:!0,path:"/update-profile",component:F}),Object(v.jsx)(O.b,{path:"/",component:C}),Object(v.jsx)(O.b,{path:"/forgot-password",component:R})]})})})})})};r(62);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(U,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.aa7cee01.chunk.js.map