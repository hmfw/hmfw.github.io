(()=>{"use strict";var e={2194:(e,n,t)=>{t(6992),t(8674),t(9601),t(7727);var i=t(5010),o=t(124),a=t(8534),r=(t(4916),t(4723),t(3396)),s=t(4161),c={class:"page full"},l=(0,r._)("div",{id:"public-web-container",class:"hidden"},[(0,r._)("p",null,"正在打开 “填入你的小程序名称”..."),(0,r._)("a",{id:"public-web-jump-button",href:"javascript:",class:"weui-btn weui-btn_primary weui-btn_loading",onclick:"openWeapp()"},[(0,r._)("span",{id:"public-web-jump-button-loading",class:"weui-primary-loading weui-primary-loading_transparent"},[(0,r._)("i",{class:"weui-primary-loading__dot"})]),(0,r.Uk)(" 打开小程序 ")])],-1),d={id:"wechat-web-container",class:"hidden"},u=(0,r._)("p",null,"点击以下按钮打开 “填入你的小程序名称”",-1),p=(0,r._)("div",{is:"script",type:"text/wxtag-template"},[(0,r._)("button",null,"打开小程序")],-1),f=(0,r._)("div",{id:"desktop-web-container",class:"hidden"},[(0,r._)("p",null,"请在手机打开网页链接")],-1);const b={__name:"App",setup:function(e){console.log(s.Z);var n={lng:116.44347222222223,lat:39.92180555555555,postCodeNum:"N50J475B59422116",province:"北京市",city:"北京市",district:"朝阳区",address:"北京市朝阳区朝外南街与神路街交叉口正南方向62米",floor:"13",door:"111"},t=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var n,t,i,a,r,s,c,l;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=navigator.userAgent.toLowerCase(),t="wxwork"==n.match(/wxwork/i),i=!t&&"micromessenger"==n.match(/micromessenger/i),a=!1,r=!1,navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|IEMobile)/i)?a=!0:r=!0,console.log("isMobile",a),console.log("isWeixin",i),i?(s=document.getElementById("wechat-web-container"),s.classList.remove("hidden"),s.classList.add("full","wechat-web-container"),c=document.getElementById("launch-btn"),c.addEventListener("ready",(function(e){console.log("开放标签 ready",e)})),c.addEventListener("launch",(function(e){console.log("开放标签 success",e)})),c.addEventListener("error",(function(e){console.log("开放标签 fail",e.detail)})),console.log(data),wx.config({debug:!0,appId:"wx5b1962fc28b4f866",timestamp:"1682671604",nonceStr:"99e3b8f2-26e7-4af7-af5a-8e422ddb39b4",signature:"99b1af080b95c725280690a11c7bf3058592cdb6",jsApiList:["chooseImage"],openTagList:["wx-open-launch-weapp"]})):r&&(l=document.getElementById("desktop-web-container"),l.classList.remove("hidden"),l.classList.add("full","desktop-web-container"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.bv)((function(){t()})),function(e,t){var i=(0,r.up)("wx-open-launch-weapp");return(0,r.wg)(),(0,r.iD)("div",c,[l,(0,r._)("div",d,[u,(0,r.Wm)(i,{id:"launch-btn",appid:"wx027335a212c997c0",path:"/pages/index/index","extra-data":n},{default:(0,r.w5)((function(){return[p]})),_:1})]),f])}}},w=b,v=w;(0,i.ri)(v).mount("#app")}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={exports:{}};return e[i](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(n,i,o,a)=>{if(!i){var r=1/0;for(d=0;d<e.length;d++){for(var[i,o,a]=e[d],s=!0,c=0;c<i.length;c++)(!1&a||r>=a)&&Object.keys(t.O).every((e=>t.O[e](i[c])))?i.splice(c--,1):(s=!1,a<r&&(r=a));if(s){e.splice(d--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,o,a]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={143:0};t.O.j=n=>0===e[n];var n=(n,i)=>{var o,a,[r,s,c]=i,l=0;if(r.some((n=>0!==e[n]))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var d=c(t)}for(n&&n(i);l<r.length;l++)a=r[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},i=self["webpackChunkwx"]=self["webpackChunkwx"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var i=t.O(void 0,[998],(()=>t(2194)));i=t.O(i)})();
//# sourceMappingURL=app.451dba50.js.map