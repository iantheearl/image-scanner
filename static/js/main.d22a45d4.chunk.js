(this["webpackJsonpimg-scanner"]=this["webpackJsonpimg-scanner"]||[]).push([[0],{128:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(38),o=n.n(s),c=(n(52),n(12)),i=(n(53),n(54),function(){return r.a.createElement("nav",{className:"bottom-nav-wrapper"},"made by Ian Huang")}),u=n(28),f=n(26),l=n.n(f),m=n(39),d=n(135),h=n(136),p=n(139),g=n(137),b=n(138),v=n(20),w=n(40),E=n(21),k=n.n(E),y=n(41),x=n.n(y),P=function(){function e(){var t=this;Object(v.a)(this,e),this.setup=function(e,n){t.terminate(),t.container=e,t.x=e.offsetWidth/2,t.y=e.offsetHeight/2,t.scale=1,t.mousePressed=!1,t.sketch=function(a){n&&(a.preload=function(){t.background=a.loadImage(n)},a.setup=function(){var t=a.createCanvas(e.offsetWidth,e.offsetHeight);t.elt.addEventListener("contextmenu",(function(e){return e.preventDefault()})),t.parent(e),a.imageMode(a.CENTER)},a.draw=function(){var e=t.background.width*t.scale,n=t.background.height*t.scale;a.clear(),a.image(t.background,t.x,t.y,e,n),t.points.forEach((function(r){var s=r.x,o=r.y;a.noStroke(),a.fill("#e84a5f"),a.rectMode(a.CENTER),a.rect(t.x+s*t.scale-e/2,t.y+o*t.scale-n/2,10*t.scale,10*t.scale)}))},a.mousePressed=function(){if(!(a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height)){var e=(a.mouseX-t.x)/t.scale+t.background.width/2,n=(a.mouseY-t.y)/t.scale+t.background.height/2,r=t.points.findIndex((function(a){var r=a.x,s=a.y;return e>=r-10*t.scale/2&&e<=r+10*t.scale/2&&n>=s-10*t.scale/2&&n<=s+10*t.scale/2}));a.mouseButton===a.RIGHT&&-1!==r?t.reactRemovePoint(r):a.mouseButton===a.LEFT&&t.isPinning&&e>=0&&e<=t.background.width&&n>=0&&n<=t.background.height&&t.reactAddPoint(e,n),t.startX=a.mouseX,t.startY=a.mouseY,t.mousePressed=!0}},a.mouseReleased=function(){t.mousePressed=!1},a.mouseDragged=function(){if(!t.isPinning&&t.mousePressed&&!(a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height)){var e=t.startX-a.mouseX,n=t.startY-a.mouseY;t.x-=e,t.y-=n,t.startX=a.mouseX,t.startY=a.mouseY}},a.mouseWheel=function(e){if(!t.isPinning&&!(a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height)){var n=e.delta;t.scale+=n/1e3}},a.windowResized=function(){a.resizeCanvas(e.offsetWidth,e.offsetHeight)})},t.p5instance=new k.a(t.sketch)},this.setPinning=function(e){t.p5instance&&(t.container.style.cursor=e?"crosshair":"grab",t.isPinning=e)},this.setAddPoint=function(e){return t.reactAddPoint=e},this.setRemovePoint=function(e){return t.reactRemovePoint=e},this.setPoints=function(e){return t.points=e},this.project=function(){var e=t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p,n=t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x-t.background.width,2)+Math.pow(e.y,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p,a=t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y-t.background.height,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p,r=t.points.map((function(e){return{d:Math.sqrt(Math.pow(e.x-t.background.width,2)+Math.pow(e.y-t.background.height,2)),p:e}})).sort((function(e,t){return e.d-t.d}))[0].p,s=(Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))+Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)))/2,o=(Math.sqrt(Math.pow(e.x-a.x,2)+Math.pow(e.y-a.y,2))+Math.sqrt(Math.pow(r.x-n.x,2)+Math.pow(r.y-n.y,2)))/2,c=[e.x,e.y,n.x,n.y,r.x,r.y,a.x,a.y],i=[0,0,s,0,s,o,0,o],u=x()(c,i);t.background.loadPixels();var f=t.p5instance.createImage(Math.floor(s),Math.floor(o));f.loadPixels();for(var l=0;l<f.width;l++)for(var m=0;m<f.height;m++){var d=u.transformInverse(l,m),h=t.background.get(d[0],d[1]);f.set(l,m,h)}return f.updatePixels(),f},this.terminate=function(){t.p5instance&&t.p5instance.remove()}}return Object(w.a)(e,[{key:"enabled",get:function(){return!!this.p5instance}}]),e}(),j=(n(57),function(e){var t=e.image,n=e.setImage,s=e.setResult,o=Object(a.useRef)(null),i=Object(a.useRef)(null),f=Object(a.useRef)(new P),v=Object(a.useState)(!1),w=Object(c.a)(v,2),E=w[0],k=w[1],y=Object(a.useState)([]),x=Object(c.a)(y,2),j=x[0],M=x[1],O=function(){var e=Object(m.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.files&&t.target.files[0]&&((a=new FileReader).onload=function(e){n((function(){return e.target.result}))},a.readAsDataURL(t.target.files[0]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=Object(a.useCallback)((function(e,t){var n=[].concat(Object(u.a)(j),[{x:e,y:t}]);M((function(){return n})),4===n.length&&k(!1)}),[j]),Y=Object(a.useCallback)((function(e){var t=Object(u.a)(j);t.splice(e,1),M((function(){return t})),k(!0)}),[j]);return Object(a.useEffect)((function(){!f.current.enabled&&t&&f.current.setup(o.current,t)}),[o,t]),Object(a.useEffect)((function(){f.current.setAddPoint(X)}),[X]),Object(a.useEffect)((function(){f.current.setRemovePoint(Y)}),[Y]),Object(a.useEffect)((function(){f.current.setPoints(j)}),[j]),Object(a.useEffect)((function(){f.current.setPinning(E)}),[t,E]),Object(a.useEffect)((function(){document.body.addEventListener("keydown",(function(e){"Escape"===e.key&&k(!1)}))})),r.a.createElement("div",{className:"canvas-wrapper"},r.a.createElement("div",{className:"canvas-main",ref:o,onClick:function(){t||i.current.click()}},r.a.createElement("input",{ref:i,type:"file",accept:"image/png, image/jpeg",hidden:!0,onChange:O}),!f.current.enabled&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{size:100,color:"#dbe2ef77"}),r.a.createElement(h.a,{color:"#959ba577",textAlign:"center",marginTop:10},"Click to upload image"))),r.a.createElement("div",{className:"canvas-toolbox"},r.a.createElement(p.a,{iconAfter:g.a,appearance:"primary",intent:"success",marginRight:8,disabled:!t||4===j.length,height:40,onClick:function(){return k(!E)}},E&&4!==j.length?r.a.createElement("span",null,"Pinning... (",4-j.length,")"):r.a.createElement("span",null,"Pin Points (",4-j.length,")")),r.a.createElement(p.a,{appearance:"primary",intent:"danger",disabled:4!==j.length,height:40,iconAfter:b.a,onClick:function(){return s(f.current.project())}},"Flatten")))}),M=function e(){var t=this;Object(v.a)(this,e),this.setup=function(e,n){t.terminate(),t.x=0,t.y=0,t.scale=1,t.background=n,t.mousePressed=!1,t.sketch=function(a){n&&(t.background=n,a.setup=function(){a.createCanvas(e.offsetWidth,e.offsetHeight,a.WEBGL).parent(e),a.imageMode(a.CENTER),a.noFill()},a.draw=function(){t.background&&(a.clear(),a.image(t.background,t.x,t.y,t.background.width*t.scale,t.background.height*t.scale))},a.mousePressed=function(){a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height||(t.startX=a.mouseX,t.startY=a.mouseY,t.mousePressed=!0)},a.mouseReleased=function(){t.mousePressed=!1},a.mouseDragged=function(){if(t.mousePressed&&!(a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height)){var e=t.startX-a.mouseX,n=t.startY-a.mouseY;t.x-=e,t.y-=n,t.startX=a.mouseX,t.startY=a.mouseY}},a.mouseWheel=function(e){if(!(a.mouseX<0||a.mouseX>a.width||a.mouseY<0||a.mouseY>a.height)){var n=e.delta;t.scale+=n/1e3}},a.windowResized=function(){a.resizeCanvas(e.offsetWidth,e.offsetHeight)})},t.p5instance=new k.a(t.sketch)},this.terminate=function(){t.p5instance&&t.p5instance.remove()}},O=(n(128),function(e){var t=e.result,n=Object(a.useRef)(null),s=Object(a.useRef)(new M);return Object(a.useEffect)((function(){t&&s.current.setup(n.current,t)}),[n,t]),r.a.createElement("div",{className:"result-wrapper"},r.a.createElement("div",{className:"result-main",ref:n}))});var X=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(null),u=Object(c.a)(o,2),f=u[0],l=u[1];return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"app-content"},r.a.createElement(j,{image:n,setImage:s,setResult:l}),r.a.createElement(O,{result:f})),r.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,n){e.exports=n(130)},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){}},[[47,1,2]]]);
//# sourceMappingURL=main.d22a45d4.chunk.js.map