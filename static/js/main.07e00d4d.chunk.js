(this["webpackJsonpimg-scanner"]=this["webpackJsonpimg-scanner"]||[]).push([[0],{128:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(38),o=n.n(r),c=(n(52),n(12)),i=(n(53),n(54),function(){return s.a.createElement("nav",{className:"bottom-nav-wrapper"},"made by Ian Huang")}),u=n(28),l=n(26),f=n.n(l),m=n(39),d=n(135),h=n(136),g=n(139),p=n(137),b=n(138),v=n(20),w=n(40),E=n(21),k=n.n(E),P=n(41),j=n.n(P),y=function(){function e(){var t=this;Object(v.a)(this,e),this.setup=function(e,n){t.terminate(),t.container=e,t.x=e.offsetWidth/2,t.y=e.offsetHeight/2,t.scale=1,t.mousePressed=!1,t.sketch=function(a){n&&(a.preload=function(){t.background=a.loadImage(n)},a.setup=function(){var t=a.createCanvas(e.offsetWidth,e.offsetHeight);t.elt.addEventListener("contextmenu",(function(e){return e.preventDefault()})),t.parent(e),a.imageMode(a.CENTER)},a.draw=function(){var e=t.background.width*t.scale,n=t.background.height*t.scale;a.clear(),a.image(t.background,t.x,t.y,e,n),t.points.forEach((function(s){var r=s.x,o=s.y;a.noStroke(),a.fill("#e84a5f"),a.rectMode(a.CENTER),a.rect(t.x+r*t.scale-e/2,t.y+o*t.scale-n/2,10*t.scale,10*t.scale)}))},a.mousePressed=function(){if(!(a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height)){var e=(a.mouseX-t.x)/t.scale+t.background.width/2,n=(a.mouseY-t.y)/t.scale+t.background.height/2,s=t.points.findIndex((function(a){var s=a.x,r=a.y;return e>=s-10*t.scale/2&&e<=s+10*t.scale/2&&n>=r-10*t.scale/2&&n<=r+10*t.scale/2}));a.mouseButton===a.RIGHT&&-1!==s?t.reactRemovePoint(s):a.mouseButton===a.LEFT&&t.isPinning&&e>=0&&e<=t.background.width&&n>=0&&n<=t.background.height&&t.reactAddPoint(e,n),t.startX=a.mouseX,t.startY=a.mouseY,t.mousePressed=!0}},a.mouseReleased=function(){t.mousePressed=!1},a.mouseDragged=function(){if(!t.isPinning&&t.mousePressed&&!(a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height)){var e=t.startX-a.mouseX,n=t.startY-a.mouseY;t.x-=e,t.y-=n,t.startX=a.mouseX,t.startY=a.mouseY}},a.mouseWheel=function(e){if(!t.isPinning&&!(a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height)){var n=e.delta;t.scale+=n/1e3}},a.windowResized=function(){a.resizeCanvas(e.offsetWidth,e.offsetHeight)})},t.p5instance=new k.a(t.sketch)},this.setPinning=function(e){t.p5instance&&(t.container.style.cursor=e?"crosshair":"grab",t.isPinning=e)},this.setAddPoint=function(e){return t.reactAddPoint=e},this.setRemovePoint=function(e){return t.reactRemovePoint=e},this.setPoints=function(e){return t.points=e},this.project=function(){var e=t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p,n=t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x-t.background.width,2)+Math.pow(e.y,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p,a=t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y-t.background.height,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p,s=t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x-t.background.width,2)+Math.pow(e.y-t.background.height,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p,r=[e.x,e.y,n.x,n.y,s.x,s.y,a.x,a.y],o=j()(r,[0,0,500,0,500,500,0,500]);t.background.loadPixels();var c=t.p5instance.createImage(500,500);c.loadPixels();for(var i=0;i<c.width;i++)for(var u=0;u<c.height;u++){var l=o.transformInverse(i,u),f=t.background.get(l[0],l[1]);c.set(i,u,f)}return c.updatePixels(),console.log(c),c},this.terminate=function(){t.p5instance&&t.p5instance.remove()}}return Object(w.a)(e,[{key:"enabled",get:function(){return!!this.p5instance}}]),e}(),x=(n(57),function(e){var t=e.image,n=e.setImage,r=e.setResult,o=Object(a.useRef)(null),i=Object(a.useRef)(null),l=Object(a.useRef)(new y),v=Object(a.useState)(!1),w=Object(c.a)(v,2),E=w[0],k=w[1],P=Object(a.useState)([]),j=Object(c.a)(P,2),x=j[0],O=j[1],X=function(){var e=Object(m.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.files&&t.target.files[0]&&((a=new FileReader).onload=function(e){n((function(){return e.target.result}))},a.readAsDataURL(t.target.files[0]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=Object(a.useCallback)((function(e,t){var n=[].concat(Object(u.a)(x),[{x:e,y:t}]);O((function(){return n})),4===n.length&&k(!1)}),[x]),R=Object(a.useCallback)((function(e){var t=Object(u.a)(x);t.splice(e,1),O((function(){return t})),k(!0)}),[x]);return Object(a.useEffect)((function(){!l.current.enabled&&t&&l.current.setup(o.current,t)}),[o,t]),Object(a.useEffect)((function(){l.current.setAddPoint(Y)}),[Y]),Object(a.useEffect)((function(){l.current.setRemovePoint(R)}),[R]),Object(a.useEffect)((function(){l.current.setPoints(x)}),[x]),Object(a.useEffect)((function(){l.current.setPinning(E)}),[t,E]),Object(a.useEffect)((function(){document.body.addEventListener("keydown",(function(e){"Escape"===e.key&&k(!1)}))})),s.a.createElement("div",{className:"canvas-wrapper"},s.a.createElement("div",{className:"canvas-main",ref:o,onClick:function(){t||i.current.click()}},s.a.createElement("input",{ref:i,type:"file",accept:"image/png, image/jpeg",hidden:!0,onChange:X}),!l.current.enabled&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{size:100,color:"#dbe2ef77"}),s.a.createElement(h.a,{color:"#959ba577",textAlign:"center",marginTop:10},"Click to upload image"))),s.a.createElement("div",{className:"canvas-toolbox"},s.a.createElement(g.a,{iconAfter:p.a,appearance:"primary",intent:"success",marginRight:8,disabled:!t||4===x.length,height:40,onClick:function(){return k(!E)}},E&&4!==x.length?s.a.createElement("span",null,"Pinning... (",4-x.length,")"):s.a.createElement("span",null,"Pin Points (",4-x.length,")")),s.a.createElement(g.a,{appearance:"primary",intent:"danger",disabled:4!==x.length,height:40,iconAfter:b.a,onClick:function(){return r(l.current.project())}},"Flatten")))}),O=function e(){var t=this;Object(v.a)(this,e),this.setup=function(e,n){t.terminate(),t.x=0,t.y=0,t.scale=1,t.background=n,t.mousePressed=!1,t.sketch=function(a){n&&(t.background=n,a.setup=function(){a.createCanvas(e.offsetWidth,e.offsetHeight,a.WEBGL).parent(e),a.imageMode(a.CENTER),a.noFill()},a.draw=function(){t.background&&(a.clear(),a.image(t.background,t.x,t.y,t.background.width*t.scale,t.background.height*t.scale))},a.mousePressed=function(){a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height||(t.startX=a.mouseX,t.startY=a.mouseY,t.mousePressed=!0)},a.mouseReleased=function(){t.mousePressed=!1},a.mouseDragged=function(){if(t.mousePressed&&!(a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height)){var e=t.startX-a.mouseX,n=t.startY-a.mouseY;t.x-=e,t.y-=n,t.startX=a.mouseX,t.startY=a.mouseY}},a.mouseWheel=function(e){if(!(a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height)){var n=e.delta;t.scale+=n/1e3}},a.windowResized=function(){a.resizeCanvas(e.offsetWidth,e.offsetHeight)})},t.p5instance=new k.a(t.sketch)},this.terminate=function(){t.p5instance&&t.p5instance.remove()}},X=(n(128),function(e){var t=e.result,n=Object(a.useRef)(null),r=Object(a.useRef)(new O);return Object(a.useEffect)((function(){t&&r.current.setup(n.current,t)}),[n,t]),s.a.createElement("div",{className:"result-wrapper"},s.a.createElement("div",{className:"result-main",ref:n}))});var Y=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),u=Object(c.a)(o,2),l=u[0],f=u[1];return s.a.createElement("div",{className:"app-wrapper"},s.a.createElement("div",{className:"app-content"},s.a.createElement(x,{image:n,setImage:r,setResult:f}),s.a.createElement(X,{result:l})),s.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,n){e.exports=n(130)},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){}},[[47,1,2]]]);
//# sourceMappingURL=main.07e00d4d.chunk.js.map