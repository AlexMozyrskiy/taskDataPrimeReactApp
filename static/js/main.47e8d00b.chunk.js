(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{30:function(e,t,i){},31:function(e,t,i){},38:function(e,t,i){"use strict";i.r(t);var r=i(0),n=i(14),a=i.n(n),s=i(19),c=(i(30),i(31),i(3)),v=i(12),o=i(11),I=i.n(o),d=i(1),l=function(e){return Object(d.jsx)("div",{className:"page-wrapper",children:Object(d.jsxs)("div",{className:I()("task",{"task-notActive":!e.isTextareaInFirstDivActive},{"task-active":e.isTextareaInFirstDivActive}),style:{height:e.taskHeight+"px"},children:[Object(d.jsx)("div",{className:I()("task__rhombus",{"task__rhombus-active":e.isTextareaInFirstDivActive})}),"           ",Object(d.jsx)("div",{className:I()("task__square",{"task__square-notActive":!e.isTextareaInFirstDivActive},{"task__square-active":e.isTextareaInFirstDivActive})}),"     ",Object(d.jsxs)("div",{className:I()("task__textarea-wrapper",{"task__textarea-notActive":!e.isTextareaInFirstDivActive},{"task__textarea-active":e.isTextareaInFirstDivActive}),style:{height:e.textareaHeight+"px"},children:[Object(d.jsx)("div",{suppressContentEditableWarning:"true",contentEditable:"true",style:{color:e.colorForFirstTextArea()},className:"task__first-textarea",onClick:function(t){return e.onFirstTextareaClick(t)},onInput:function(t){return e.onFirstTextareaChange(t)},children:e.isPlaceHolderInFirstDivActive?e.taskPlaceHolder:e.textInFirstDiv}),e.isTextAreaInSecondDivActive?Object(d.jsxs)("div",{className:"task__second-texarea",children:[Object(d.jsx)("div",{className:"task__two-slash-animation"}),"// "]}):null,e.isTextAreaInThirdDivActive?Object(d.jsx)("div",{suppressContentEditableWarning:"true",contentEditable:"true",style:{color:e.isPlaceHolderInThirdDivActive?"#C5BAA4":"#7F6233"},className:"task__third-textarea",onInput:function(t){return e.onThirdTextareaChange(t)},children:e.isPlaceHolderInThirdDivActive?e.notePlaceHolder:e.textInThirdDiv}):null]}),Object(d.jsxs)("div",{className:I()("task__calendar-and-select-wrapper",{displayNone:!e.isTextareaInFirstDivActive}),children:[Object(d.jsx)("div",{className:"task__calendar"}),Object(d.jsxs)("select",{defaultValue:"1",children:[Object(d.jsx)("option",{children:"No List"}),Object(d.jsx)("option",{children:"List 1"})]})]})]})})},T=function(e){return e.textAreaInFirstDiv.isTextAreaInFirstDivActive},A=function(e){return e.textAreaInFirstDiv.isPlaceHolderInFirstDivActive},x=function(e){return e.textAreaInFirstDiv.textInFirstDiv},D=function(e){return e.textAreaInThirdDiv.isTextAreaInThirdDivActive},h=function(e){return e.textAreaInThirdDiv.isPlaceHolderInThirdDivActive},u=function(e){return e.textAreaInThirdDiv.textInThirdDiv},g=function(e){return e.textAreaInSecondDiv.isTextAreaInSecondDivActive},f="dataPrimeTestTask/textAreaInFirstDiv/TOOGLE_IS_TEXTAREA_IN_FIRST_DIV_ACTIVE",j="dataPrimeTestTask/textAreaInFirstDiv/IS_PLACEHOLDER_IN_FIRST_DIV_ACTIVE",F="dataPrimeTestTask/textAreaInFirstDiv/TEXT_IN_FIRST_DIV",_="dataPrimeTestTask/textAreaInThirdDiv/TOOGLE_IS_TEXTAREA_IN_THIRD_DIV_ACTIVE",O="dataPrimeTestTask/textAreaInThirdDiv/IS_PLACEHOLDER_IN_THIRD_DIV_ACTIVE",b="dataPrimeTestTask/textAreaInThirdDiv/TEXT_IN_THIRD_DIV",H="dataPrimeTestTask/textAreaInSecondDiv/TOOGLE_IS_TEXTAREA_IN_SECOND_DIV_ACTIVE",P=i(16);var S=function(e){var t=new Range;t.setStart(e,0),t.setEnd(e,0),window.getSelection().removeAllRanges(),window.getSelection().addRange(t)};var p=function(e){var t=new Range;t.selectNodeContents(e),t.collapse(!1),window.getSelection().removeAllRanges(),window.getSelection().addRange(t)};var k=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=document.querySelector("."+e);i.focus(),t?S(i):p(i)},E={toogleIsTextAreaInFirstDivActive:function(e){return{type:f,isTextAreaInFirstDivActive:e}},toogleIsPlaceHolderInFirstDivActive:function(e){return{type:j,isPlaceHolderInFirstDivActive:e}},setTextInFirstDivInState:function(e){return{type:F,textInFirstDiv:e}},toogleIsTextAreaInSecondDivActive:function(e){return{type:H,isTextAreaInSecondDivActive:e}},toogleIsTextAreaInThirdDivActive:function(e){return{type:_,isTextAreaInThirdDivActive:e}},toogleIsPlaceHolderInThirdDivActive:function(e){return{type:O,isPlaceHolderInThirdDivActive:e}},setTextInThirdDivInState:function(e){return{type:b,textInThirdDiv:e}}},m=Object(P.b)((function(e){return{isTextareaInFirstDivActive:T(e),isPlaceHolderInFirstDivActive:A(e),textInFirstDiv:x(e),isTextAreaInSecondDivActive:g(e),isTextAreaInThirdDivActive:D(e),isPlaceHolderInThirdDivActive:h(e),textInThirdDiv:u(e)}}),E)((function(e){Object(r.useEffect)((function(){e.isTextAreaInThirdDivActive&&k("task__third-textarea")}),[e.isTextAreaInThirdDivActive]);var t=Object(r.useState)(70),i=Object(v.a)(t,2),n=i[0],a=i[1],s=Object(r.useState)(70),c=Object(v.a)(s,2),o=c[0],I=c[1],T=Object(r.useState)(100),A=Object(v.a)(T,2),x=A[0],D=A[1],h="Write a new task",u="write note",g=Object(r.useState)(h),f=Object(v.a)(g,2),j=f[0],F=f[1],_=Object(r.useState)(u),O=Object(v.a)(_,2),b=O[0],H=O[1];return Object(d.jsx)(l,{isTextareaInFirstDivActive:e.isTextareaInFirstDivActive,isPlaceHolderInFirstDivActive:e.isPlaceHolderInFirstDivActive,onFirstTextareaClick:function(t){e.isTextareaInFirstDivActive?e.isTextareaInFirstDivActive&&e.isPlaceHolderInFirstDivActive&&(a(t.target.offsetHeight),S(t.target)):(e.toogleIsTextAreaInFirstDivActive(!0),a(t.target.offsetHeight),I(t.target.offsetHeight),S(t.target))},onFirstTextareaChange:function(t){var i=t.target.innerText,r=i[i.length-2]+i[i.length-1];if(e.isPlaceHolderInFirstDivActive?(i=t.target.innerText[0],p(t.target),F(""),e.toogleIsPlaceHolderInFirstDivActive(!1)):p(t.target),e.setTextInFirstDivInState(i),t.target.offsetHeight>n?(a(t.target.offsetHeight),D(x+40)):t.target.offsetHeight<n&&0!=t.target.offsetHeight?(a(t.target.offsetHeight),D(x-40)):0===t.target.offsetHeight&&(F(h),e.toogleIsPlaceHolderInFirstDivActive(!0)),"//"===r){e.toogleIsTextAreaInSecondDivActive(!0);var s=i.split("");s.length=s.length-2,i=s.join(""),e.setTextInFirstDivInState(i),e.toogleIsTextAreaInThirdDivActive(!0)}},taskHeight:x,firstTextAreaHeight:n,taskPlaceHolder:j,textInFirstDiv:e.textInFirstDiv,colorForFirstTextArea:function(){return e.isTextareaInFirstDivActive&&e.isPlaceHolderInFirstDivActive?"#9E9E9D":!e.isTextareaInFirstDivActive&&e.isPlaceHolderInFirstDivActive?"#606469":e.isTextareaInFirstDivActive&&!e.isPlaceHolderInFirstDivActive?"#000":void 0},isTextAreaInSecondDivActive:e.isTextAreaInSecondDivActive,isTextAreaInThirdDivActive:e.isTextAreaInThirdDivActive,isPlaceHolderInThirdDivActive:e.isPlaceHolderInThirdDivActive,textInThirdDiv:e.textInThirdDiv,notePlaceHolder:b,onThirdTextareaChange:function(t){var i=t.target.innerText;if(e.isPlaceHolderInThirdDivActive?(i=t.target.innerText[0],p(t.target),H(""),e.toogleIsPlaceHolderInThirdDivActive(!1)):p(t.target),e.setTextInThirdDivInState(i),t.target.offsetHeight>o?(I(t.target.offsetHeight),D(x+40)):t.target.offsetHeight<o&&0!=t.target.offsetHeight&&(I(t.target.offsetHeight),D(x-40)),""===i&&e.isTextAreaInThirdDivActive){H(u),e.toogleIsPlaceHolderInThirdDivActive(!0),e.toogleIsTextAreaInThirdDivActive(!1),e.toogleIsTextAreaInSecondDivActive(!1);var r=e.textInFirstDiv+"/";e.setTextInFirstDivInState(r),k("task__first-textarea",!1)}}})})),N=function(){return Object(d.jsx)("h2",{children:"Page Not Found"})},w=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(m,{})}}),Object(d.jsx)(c.a,{path:"*",render:function(){return Object(d.jsx)(N,{})}})]})})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,39)).then((function(t){var i=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),r(e),n(e),a(e),s(e)}))},R=i(9),y=i(25),V=i(4),L={isTextAreaInFirstDivActive:!1,isPlaceHolderInFirstDivActive:!0,textInFirstDiv:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var i=Object(V.a)(Object(V.a)({},e),{},{isTextAreaInFirstDivActive:t.isTextAreaInFirstDivActive});return i;case j:var r=Object(V.a)(Object(V.a)({},e),{},{isPlaceHolderInFirstDivActive:t.isPlaceHolderInFirstDivActive});return r;case F:var n=Object(V.a)(Object(V.a)({},e),{},{textInFirstDiv:t.textInFirstDiv});return n;default:return e}},q={isTextAreaInSecondDivActive:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:var i=Object(V.a)(Object(V.a)({},e),{},{isTextAreaInSecondDivActive:t.isTextAreaInSecondDivActive});return i;default:return e}},G={isTextAreaInThirdDivActive:!1,isPlaceHolderInThirdDivActive:!0,textInThirdDiv:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:var i=Object(V.a)(Object(V.a)({},e),{},{isTextAreaInThirdDivActive:t.isTextAreaInThirdDivActive});return i;case O:var r=Object(V.a)(Object(V.a)({},e),{},{isPlaceHolderInThirdDivActive:t.isPlaceHolderInThirdDivActive});return r;case b:var n=Object(V.a)(Object(V.a)({},e),{},{textInThirdDiv:t.textInThirdDiv});return n;default:return e}},J=Object(R.c)({textAreaInFirstDiv:X,textAreaInSecondDiv:B,textAreaInThirdDiv:W}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,U=Object(R.e)(J,M(Object(R.a)(y.a)));a.a.render(Object(d.jsx)(s.a,{basename:"/taskDataPrimeReactApp",children:Object(d.jsx)(P.a,{store:U,children:Object(d.jsx)(w,{})})}),document.getElementById("root")),C()}},[[38,1,2]]]);
//# sourceMappingURL=main.47e8d00b.chunk.js.map