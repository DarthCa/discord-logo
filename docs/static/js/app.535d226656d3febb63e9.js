webpackJsonp([1],{"8Cnu":function(t,e){},"8YT0":function(t,e){},AdfF:function(t,e){},NHnr:function(t,e,i){"use strict";function o(t){i("kxf8")}function r(t){i("pxkB")}function s(t){i("g5gM")}function a(t){i("8Cnu")}function n(t){i("QOvU")}function l(t){i("8YT0")}function c(t){i("AdfF")}function d(t){i("iVeu")}Object.defineProperty(e,"__esModule",{value:!0});var f=i("7+uW"),m={name:"DiscordLogo",data:function(){return{}},props:{width:{type:Number,default:300},height:{type:Number,default:300},discordcolor:{type:String,default:"#7289DA"},discordfill:{type:String,default:"#23272A"},customLink:{type:String,default:""},animationStyle:{type:String,default:"swirl"},isRainbow:{type:Boolean,default:!1}}},u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticClass:"discord-logo-container",attrs:{color:t.discordcolor,fill:t.discordfill,width:t.width,height:t.height,viewBox:"0 0 48 48"}},[i("rect",{attrs:{width:"100%",height:"100%",fill:"currentfill"}}),t._v(" "),i("defs",[i("g",[i("path",{attrs:{id:"discord-logo",fill:"currentcolor",d:"m40,12c0,0 -4.585,-3.588 -10,-4l-0.488,0.976c4.896,1.198 7.142,2.915 9.488,5.024c-4.045,-2.065 -8.039,-4 -15,-4s-10.955,1.935 -15,4c2.346,-2.109 5.018,-4.015 9.488,-5.024l-0.488,-0.976c-5.681,0.537 -10,4 -10,4s-5.121,7.425 -6,22c5.162,5.953 13,6 13,6l1.639,-2.185c-2.782,-0.967 -5.924,-2.694 -8.639,-5.815c3.238,2.45 8.125,5 16,5s12.762,-2.55 16,-5c-2.715,3.121 -5.857,4.848 -8.639,5.815l1.639,2.185c0,0 7.838,-0.047 13,-6c-0.879,-14.575 -6,-22 -6,-22zm-22.5,18c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4s3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4zm13,0c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4s3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4z"}}),t._v(" "),i("mask",{attrs:{id:"mask-outer-layer"}},[i("rect",{attrs:{width:"100%",height:"100%",fill:"#FFFFFF"}}),t._v(" "),i("circle",{attrs:{r:"42%",cx:"50%",cy:"50%",fill:"#000000"}})]),t._v(" "),i("mask",{attrs:{id:"mask-middle-layer"}},[i("rect",{attrs:{width:"100%",height:"100%",fill:"#000000"}}),t._v(" "),i("circle",{attrs:{r:"43%",cx:"50%",cy:"50%",fill:"#FFFFFF"}}),t._v(" "),i("circle",{attrs:{r:"32%",cx:"50%",cy:"50%",fill:"#000000"}})]),t._v(" "),i("mask",{attrs:{id:"mask-inner-layer"}},[i("rect",{attrs:{width:"100%",height:"100%",fill:"#000000"}}),t._v(" "),i("circle",{attrs:{r:"32%",cx:"50%",cy:"50%",fill:"#FFFFFF"}})])])]),t._v(" "),"swirl"==t.animationStyle?i("g",{staticClass:"discord-logo swirl-animation"},[i("use",{staticClass:"discord-original",attrs:{href:"#discord-logo"}}),t._v(" "),i("use",{staticClass:"discord-outer-layer",attrs:{href:"#discord-logo",mask:"url(#mask-outer-layer)"}}),t._v(" "),i("use",{staticClass:"discord-middle-layer",attrs:{href:"#discord-logo",mask:"url(#mask-middle-layer)"}}),t._v(" "),i("use",{staticClass:"discord-inner-layer",attrs:{href:"#discord-logo",mask:"url(#mask-inner-layer)"}})]):"rotateY"==t.animationStyle?i("g",{staticClass:"discord-logo rotateY-animation"},[i("use",{staticClass:"discord-original",attrs:{href:"#discord-logo"}})]):"rotateX"==t.animationStyle?i("g",{staticClass:"discord-logo rotateX-animation"},[i("use",{staticClass:"discord-original",attrs:{href:"#discord-logo"}})]):"shake"==t.animationStyle?i("g",{staticClass:"discord-logo shake-animation"},[i("use",{staticClass:"discord-original",attrs:{href:"#discord-logo"}})]):"softshake"==t.animationStyle?i("g",{staticClass:"discord-logo softshake-animation"},[i("use",{staticClass:"discord-original",attrs:{href:"#discord-logo"}})]):i("g",{staticClass:"discord-logo"},[i("use",{staticClass:"discord-original",attrs:{href:"#discord-logo"}})]),t._v(" "),t.customLink?i("a",{attrs:{href:t.customLink}},[i("rect",{attrs:{width:"100%",height:"100%","fill-opacity":"0"}})]):t._e(),t._v(" "),t.isRainbow?i("animate",{attrs:{fill:"freeze",dur:"4000ms",begin:"0s",values:"#DA7272;#DABF72;#A6DA72;#72DA8C;#72DADA;#728CDA;#A672DA;#DA72C0;#DA7272",calMode:"linear",attributeName:"color",repeatCount:"indefinite"}}):t._e()])},h=[],p={render:u,staticRenderFns:h},g=p,v=i("VU/8"),b=o,x=v(m,g,!1,b,null,null),y=x.exports,w={name:"GithubCorner",data:function(){return{}},props:{discordcolor:{type:String,default:"#7289DA"},discordfill:{type:String,default:"#23272A"}}},C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"github-corner"},[i("svg",{attrs:{width:"120",height:"120",viewBox:"0 0 250 250"}},[i("a",{staticStyle:{"pointer-events":"auto"},attrs:{fill:t.discordcolor,href:"https://github.com/NNTin/discord-logo"}},[i("path",{attrs:{d:"M0,0 L250,250 L250,0 Z"}})]),t._v(" "),i("g",{staticClass:"octocat"},[i("path",{attrs:{fill:t.discordfill,d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t._v(" "),i("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:t.discordcolor}}),t._v(" "),i("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:t.discordcolor}}),t._v(" "),i("text",{staticClass:"octo-click-text",attrs:{x:"240px",y:"-10px",stroke:t.discordcolor,fill:t.discordcolor}},[t._v("CLICK")]),t._v(" "),i("g",{staticClass:"octo-glasses",attrs:{visibility:"hidden"}},[i("svg",{attrs:{fill:t.discordfill,width:"640",height:"480"}},[i("defs",[i("symbol",{attrs:{id:"glasses",viewBox:"0 0 512 512"}},[i("path",{attrs:{d:"m465.4,247c-2.2,-22 -12.4,-43 -28.9,-58.4c-17.1,-15.9 -39.3,-24.7 -62.7,-24.7c-41.5,0 -77.3,27.4 -88.5,67c-7,-7 -18.5,-11.7 -29.3,-11.7c-10.8,0 -22.3,4.7 -29.3,11.7c-11.2,-39.6 -47,-67 -88.5,-67c-23.3,0 -45.6,8.7 -62.7,24.6c-16.5,15.5 -26.7,36.5 -28.9,58.5l-14.6,0l0,18l14.6,0c2.2,22 12.4,43 28.9,58.4c17.1,15.9 39.3,24.7 62.7,24.7c50.8,0 92.1,-41.2 92.1,-92c0,-0.1 0,-0.1 0,-0.1l0,0c0,-9.9 11.5,-21.6 25.7,-21.6s25.7,11.7 25.7,21.6l0,0c0,0 0,0 0,0.1c0,50.8 41.3,92 92.1,92c23.3,0 45.6,-8.7 62.7,-24.7c16.5,-15.4 26.7,-36.5 28.9,-58.5l14.6,0l0,-18l-14.6,0l0,0.1z"}})])]),t._v(" "),i("g",[i("use",{attrs:{x:"530",y:"-70","xlink:href":"#glasses",transform:"rotate(45 100,75) matrix(0.185,0,0,0.185,0,0) "}})])])])])])])},k=[],S={render:C,staticRenderFns:k},F=S,L=i("VU/8"),_=r,D=L(w,F,!1,_,null,null),T=D.exports,R={name:"DiscordCorner",components:{DiscordLogo:y},data:function(){return{}},props:{width:{type:Number,default:120},height:{type:Number,default:120},discordcolor:{type:String,default:"#7289DA"},discordfill:{type:String,default:"#23272A"},customLink:{type:String,default:""},animationStyle:{type:String,default:"swirl"},isRainbow:{type:Boolean,default:!1}}},A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{color:t.discordcolor,fill:t.discordfill,width:t.width,height:t.height,viewBox:"0 0 250 250"}},[i("g",[this.customLink?i("a",{attrs:{href:this.customLink}},[i("path",{attrs:{d:"M0,0 L0,250 L250,0 Z",fill:t.discordfill}})]):i("path",{attrs:{d:"M0,0 L0,250 L250,0 Z",fill:t.discordfill}})]),t._v(" "),i("g",{staticClass:"discord-corner"},[i("DiscordLogo",{attrs:{isRainbow:t.isRainbow,animationStyle:t.animationStyle,customLink:t.customLink,color:t.discordcolor,fill:t.discordfill,width:120,height:120}})],1)])},z=[],$={render:A,staticRenderFns:z},B=$,E=i("VU/8"),M=s,N=E(R,B,!1,M,null,null),P=N.exports,O={name:"ColorSelector",components:{DiscordLogo:y},data:function(){return{size:48,colors:{discordcolor:"#FFFFFF",discordfill:"#7289DA"}}},props:{customLink:{type:String,default:""},animationStyle:{type:String,default:"swirl"}},methods:{setColor:function(t,e){this.colors.discordcolor=e,this.colors.discordfill=t,this.$emit("colorChange",this.colors)},setRainbow:function(t){this.$emit("rainbowChange",t)}},computed:{}},Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"buttons"},[i("DiscordLogo",{staticClass:"button",attrs:{animationStyle:t.animationStyle,customLink:t.customLink,width:t.size,height:t.size,discordfill:"#7289DA",discordcolor:"#FFFFFF"},nativeOn:{click:function(e){t.setColor("#7289DA","#FFFFFF"),t.setRainbow(!1)}}}),t._v(" "),i("DiscordLogo",{staticClass:"button",attrs:{animationStyle:t.animationStyle,customLink:t.customLink,width:t.size,height:t.size,discordfill:"#7289DA",discordcolor:"#2C2F33"},nativeOn:{click:function(e){t.setColor("#7289DA","#2C2F33"),t.setRainbow(!1)}}}),i("br"),t._v(" "),i("DiscordLogo",{staticClass:"button",attrs:{animationStyle:t.animationStyle,customLink:t.customLink,width:t.size,height:t.size,discordfill:"#FFFFFF",discordcolor:"#7289DA"},nativeOn:{click:function(e){t.setColor("#FFFFFF","#7289DA"),t.setRainbow(!1)}}}),t._v(" "),i("DiscordLogo",{staticClass:"button",attrs:{animationStyle:t.animationStyle,customLink:t.customLink,width:t.size,height:t.size,discordfill:"#FFFFFF",discordcolor:"#2C2F33"},nativeOn:{click:function(e){t.setColor("#FFFFFF","#2C2F33"),t.setRainbow(!1)}}}),i("br"),t._v(" "),i("DiscordLogo",{staticClass:"button",attrs:{animationStyle:t.animationStyle,customLink:t.customLink,width:t.size,height:t.size,discordfill:"#2C2F33",discordcolor:"#7289DA"},nativeOn:{click:function(e){t.setColor("#2C2F33","#7289DA"),t.setRainbow(!1)}}}),t._v(" "),i("DiscordLogo",{staticClass:"button",attrs:{animationStyle:t.animationStyle,customLink:t.customLink,width:t.size,height:t.size,discordfill:"#2C2F33",discordcolor:"#FFFFFF"},nativeOn:{click:function(e){t.setColor("#2C2F33","#FFFFFF"),t.setRainbow(!1)}}})],1)},V=[],G={render:Y,staticRenderFns:V},X=G,U=i("VU/8"),j=a,H=U(O,X,!1,j,null,null),Z=H.exports,I=i("//Fk"),J=i.n(I),Q={name:"StyleSelector",components:{DiscordLogo:y},data:function(){return{isRainbowSelected:!1,activeStyle:"swirl",size:48}},props:{customLink:{type:String,default:""},discordcolor:{type:String,default:"#7289DA"},discordfill:{type:String,default:"#23272A"},isRainbow:{type:Boolean,default:!1}},methods:{setStyle:function(t){this.activeStyle=t,this.$emit("styleChange",t)},sleep:function(t){return new J.a(function(e){return setTimeout(e,t)})},addAnimatedClass:function(){for(var t=this.$refs.rootElement,e=t.getElementsByClassName("button"),i=0;i<e.length;i++)e[i].classList.add("animated")},removeAnimatedClass:function(){for(var t=this.$refs.rootElement,e=t.getElementsByClassName("button"),i=0;i<e.length;i++)e[i].classList.remove("animated")},isActive:function(t){return this.activeStyle==t?{border:"solid 2px "+this.discordcolor}:{border:"solid 2px transparent"}},setRainbow:function(t){(this.isRainbowSelected?!t:t)?(this.isRainbowSelected=t,this.$emit("rainbowChange",t)):t&&this.isRainbowSelected&&(this.isRainbowSelected=!this.isRainbowSelected,this.$emit("rainbowChange",this.isRainbowSelected))}},computed:{rainbowActiveStyle:{get:function(){return this.isRainbowSelected?{border:"solid 2px "+this.discordcolor}:{border:"solid 2px transparent"}}}},created:function(){this.$nextTick(function(){setInterval(function(){var t=this;this.addAnimatedClass(),this.sleep(2500).then(function(){t.removeAnimatedClass()})}.bind(this),5e3)})}},K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"rootElement",staticClass:"buttons"},[i("DiscordLogo",{staticClass:"button",style:t.isActive("swirl"),attrs:{isRainbow:t.isRainbow,customLink:t.customLink,animationStyle:"swirl",width:t.size,height:t.size,discordfill:t.discordfill,discordcolor:t.discordcolor},nativeOn:{click:function(e){t.setStyle("swirl")}}}),t._v(" "),i("DiscordLogo",{staticClass:"button",style:t.isActive("rotateX"),attrs:{isRainbow:t.isRainbow,customLink:t.customLink,animationStyle:"rotateX",width:t.size,height:t.size,discordfill:t.discordfill,discordcolor:t.discordcolor},nativeOn:{click:function(e){t.setStyle("rotateX")}}}),i("br"),t._v(" "),i("DiscordLogo",{staticClass:"button",style:t.isActive("rotateY"),attrs:{isRainbow:t.isRainbow,customLink:t.customLink,animationStyle:"rotateY",width:t.size,height:t.size,discordfill:t.discordfill,discordcolor:t.discordcolor},nativeOn:{click:function(e){t.setStyle("rotateY")}}}),t._v(" "),i("DiscordLogo",{staticClass:"button",style:t.isActive("shake"),attrs:{isRainbow:t.isRainbow,customLink:t.customLink,animationStyle:"shake",width:t.size,height:t.size,discordfill:t.discordfill,discordcolor:t.discordcolor},nativeOn:{click:function(e){t.setStyle("shake")}}}),i("br"),t._v(" "),i("DiscordLogo",{staticClass:"button",style:t.isActive("softshake"),attrs:{isRainbow:t.isRainbow,customLink:t.customLink,animationStyle:"softshake",width:t.size,height:t.size,discordfill:t.discordfill,discordcolor:t.discordcolor},nativeOn:{click:function(e){t.setStyle("softshake")}}}),t._v(" "),i("DiscordLogo",{staticClass:"button",style:t.rainbowActiveStyle,attrs:{isRainbow:!0,customLink:t.customLink,animationStyle:"none",width:t.size,height:t.size,discordfill:t.discordfill},nativeOn:{click:function(e){t.setRainbow(!0)}}})],1)},W=[],q={render:K,staticRenderFns:W},tt=q,et=i("VU/8"),it=n,ot=et(Q,tt,!1,it,null,null),rt=ot.exports,st=i("GDE4"),at=i.n(st),nt={name:"DiscordText",components:{DiscordLogo:y},data:function(){return{delay:60,isTyping:!1,bubbleText:"",width:0}},props:{height:{type:Number,default:40},discordcolor:{type:String,default:"#FFFFFF"},discordfill:{type:String,default:"#7289DA"},customLink:{type:String,default:""},standardText:{type:String,default:"Join us on Discord!"},writeText:{type:Boolean,default:!0},animationStyle:{type:String,default:"swirl"},isRainbow:{type:Boolean,default:!1}},methods:{typeText:function(t,e){var i=this;this.writeText?(0==t&&(this.isTyping=!0,this.bubbleText=""),t<e.length?(this.bubbleText+=e.charAt(t),this.sleep(this.delay).then(function(){i.typeText(t+1,e)})):this.isTyping=!1):this.bubbleText=e,this.updateSVG()},sleep:function(t){return new J.a(function(e){return setTimeout(e,t)})},updateSVG:function(){this.$nextTick(function(){var t=this.$refs.rootElement,e=t.getElementsByClassName("speechbubble")[0],i=t.getElementsByClassName("textElement")[0],o=i.getComputedTextLength(),r=[0,0,o+190,200];e.setAttribute("viewBox",r.join(" "));for(var s="M 154.5,0 L 20.5,0 C 9.2,0 0,9.2 0,20.6 L 0,155.8 C 0,167.2 9.2,177 20.5,176.4 L 133.9,176.4 L 128.6,157.9 L 141.4,169.8 L 153.5,181 L 175,200 L 175,20.6 C 175,9.2 165.8,0 154.5,0 Z",a=s.split(" "),n=[],l=0;l<a.length;l++)switch(a[l]){case"M":case"C":case"L":case"Z":n.push(a[l]);break;default:var c=a[l].split(",");c[0]<50?n.push(c.join(",")):n.push([(parseFloat(c[0])+parseFloat(o)).toString(),c[1]].join(","))}t.getElementsByClassName("pathElement")[0].setAttribute("d",n.join(" ")),t.getElementsByClassName("pathElementGroup")[0].setAttribute("transform","translate("+parseFloat(o+190).toString()+", 0)")}),this.$emit("htmlModified")},updateSVGContainer:function(){}},computed:{},watch:{standardText:function(){var t=this;this.isTyping?(this.delay=0,this.sleep(500).then(function(){t.delay=60})):this.typeText(0,this.standardText)}},created:function(){this.typeText(0,this.standardText)}},lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"rootElement"},[i("div",{staticClass:"discordtext"},[i("DiscordLogo",{attrs:{isRainbow:t.isRainbow,animationStyle:t.animationStyle,customLink:t.customLink,height:2*t.height,width:2*t.height,discordfill:t.discordfill,discordcolor:t.discordcolor}}),t._v(" "),i("svg",{directives:[{name:"show",rawName:"v-show",value:t.standardText,expression:"standardText"}],staticClass:"speechbubble",attrs:{height:t.height,preserveAspectRatio:"xMinYMin"}},[i("g",{staticClass:"pathElementGroup"},[i("path",{staticClass:"pathElement",attrs:{transform:"scale(-1,1)",fill:t.discordcolor,d:"M 154.5,0 L 20.5,0 C 9.2,0 0,9.2 0,20.6 L 0,155.8 C 0,167.2 9.2,177 20.5,176.4 L 133.9,176.4 L 128.6,157.9 L 141.4,169.8 L 153.5,181 L 175,200 L 175,20.6 C 175,9.2 165.8,0 154.5,0 Z"}})]),t._v(" "),i("text",{staticClass:"textElement",attrs:{fill:t.discordfill,"font-size":"90",x:"95",y:"57%"}},[t._v(t._s(t.bubbleText))]),t._v(" "),t.customLink?i("a",{attrs:{href:t.customLink}},[i("rect",{attrs:{width:"100%",height:"100%","fill-opacity":"0"}})]):t._e()])],1)])},ct=[],dt={render:lt,staticRenderFns:ct},ft=dt,mt=i("VU/8"),ut=l,ht=mt(nt,ft,!1,ut,null,null),pt=ht.exports,gt=i("Zzkc"),vt={name:"MainBody",components:{DiscordText:pt,DiscordLogo:y,DiscordCorner:P,vueSlider:at.a,"chrome-picker":gt.Chrome},data:function(){return{bubbleText:"Join us on Discord!",previewCode:"",size:100,isLeft:!0,isTop:!0,rotation:"",colors:{discordcolor:{hex:"#FFFFFF",hsl:{h:144,s:0,l:1,a:1},hsv:{h:90,s:0,v:0,a:1},rgba:{r:255,g:255,b:255,a:1},a:1},discordfill:{hex:"#7289DA",hsl:{h:227,s:.58,l:.65,a:1},hsv:{h:0,s:0,v:0,a:1},rgba:{r:114,g:137,b:218,a:1},a:1}},customLink:""}},props:{previewDiscordType:{type:String,default:"corner"},animationStyle:{type:String,default:"swirl"},isRainbow:{type:Boolean,default:!1}},methods:{refreshSlider:function(){this.$nextTick(function(){this.$refs.vueSlider.refresh()})},onHtmlModified:function(){this.updatePreviewCode()},changeColor:function(t,e){this.colors.discordcolor={hex:t,a:1},this.colors.discordfill={hex:e,a:1}},updatePreviewCode:function(){this.$nextTick(function(){if(null==this.$refs.preview)this.previewCode="";else{this.previewCode=this.$refs.preview.innerHTML;var t="* { font-family: 'Avenir', Helvetica, Arial, sans-serif; } .discord-logo { transform: scale(0.7); transform-origin: 24px 24px; } ";"corner"==this.previewDiscordType?t+=".discord-corner { transform: rotate(-45deg); transform-origin: 60px 60px; }":"speechbubble"==this.previewDiscordType&&(t+=".speechbubble { position: relative; transform: translateY(-50%); } .discordtext { opacity: 0.75; } .discordtext:hover { opacity: 1; } .discordtext a { text-decoration: none; }"),"rotateX"==this.animationStyle?t+=".discord-logo.rotateX-animation .discord-original { transition: transform 300ms linear; transform-origin: 50% 50%; } .discord-logo-container:hover .rotateX-animation .discord-original, .animated .rotateX-animation .discord-original { transform: rotateX(360deg); }":"rotateY"==this.animationStyle?t+=".discord-logo.rotateY-animation .discord-original { transition: transform 300ms linear; transform-origin: 50% 50%; } .discord-logo-container:hover .rotateY-animation .discord-original, .animated .rotateY-animation .discord-original { transform: rotateY(180deg); }":"swirl"==this.animationStyle?t+=".discord-logo.swirl-animation .discord-outer-layer { transition: transform 800ms cubic-bezier(0.7, 1, 0.7, 1); transform-origin: 50% 50%; } .discord-logo-container:hover .swirl-animation .discord-outer-layer, .animated .swirl-animation .discord-outer-layer { transform: scale(1.5) rotate(360deg); } .discord-logo.swirl-animation .discord-middle-layer { transition: transform 800ms cubic-bezier(0.5, 1, 0.5, 1); transform-origin: 50% 50%; } .discord-logo-container:hover .swirl-animation .discord-middle-layer, .animated .swirl-animation .discord-middle-layer { transform: scale(1.4) rotate(360deg); } .discord-logo.swirl-animation .discord-inner-layer { transition: transform 800ms cubic-bezier(0.3, 1, 0.3, 1); transform-origin: 50% 50%; } .discord-logo-container:hover .swirl-animation .discord-inner-layer, .animated .swirl-animation .discord-inner-layer { transform: scale(1.3) rotate(360deg); } .discord-logo.swirl-animation .discord-original { transition: visibility 0ms; transition-delay: 800ms; } .discord-logo-container:hover .swirl-animation .discord-original, .animated .swirl-animation .discord-original { visibility: hidden; transition-delay: 0ms; }":"shake"==this.animationStyle?t+=".discord-logo.shake-animation .discord-original { } .discord-logo-container:hover .shake-animation .discord-original, .animated .shake-animation .discord-original { animation-name:shake; animation-duration:100ms; animation-timing-function:ease-in-out; animation-iteration-count:infinite } @keyframes shake { 2% {transform:translate(.5px, 1.5px) rotate(1.5deg)} 4% {transform:translate(.5px, 1.5px) rotate(1.5deg)} 6% {transform:translate(-1.5px, -1.5px) rotate(-.5deg)} 8% {transform:translate(.5px, -.5px) rotate(.5deg)} 10% {transform:translate(.5px, 2.5px) rotate(.5deg)} 12% {transform:translate(2.5px, 1.5px) rotate(-.5deg)} 14% {transform:translate(-1.5px, 2.5px) rotate(-.5deg)} 16% {transform:translate(-.5px, .5px) rotate(.5deg)} 18% {transform:translate(.5px, 2.5px) rotate(1.5deg)} 20% {transform:translate(-.5px, -.5px) rotate(.5deg)} 22% {transform:translate(2.5px, .5px) rotate(-.5deg)} 24% {transform:translate(-1.5px, -1.5px) rotate(.5deg)} 26% {transform:translate(2.5px, -.5px) rotate(-.5deg)} 28% {transform:translate(1.5px, -.5px) rotate(.5deg)} 30% {transform:translate(.5px, .5px) rotate(-.5deg)} 32% {transform:translate(-1.5px, .5px) rotate(-.5deg)} 34% {transform:translate(.5px, 2.5px) rotate(-.5deg)} 36% {transform:translate(-.5px, -.5px) rotate(1.5deg)} 38% {transform:translate(-1.5px, -1.5px) rotate(.5deg)} 40% {transform:translate(-1.5px, 1.5px) rotate(1.5deg)} 42% {transform:translate(.5px, -1.5px) rotate(1.5deg)} 44% {transform:translate(.5px, .5px) rotate(.5deg)} 46% {transform:translate(-1.5px, -1.5px) rotate(1.5deg)} 48% {transform:translate(.5px, -1.5px) rotate(.5deg)} 50% {transform:translate(2.5px, .5px) rotate(-.5deg)} 52% {transform:translate(-.5px, 2.5px) rotate(-.5deg)} 54% {transform:translate(.5px, .5px) rotate(.5deg)} 56% {transform:translate(-1.5px, 2.5px) rotate(.5deg)} 58% {transform:translate(2.5px, .5px) rotate(.5deg)} 60% {transform:translate(-1.5px, 2.5px) rotate(.5deg)} 62% {transform:translate(1.5px, -.5px) rotate(-.5deg)} 64% {transform:translate(1.5px, -1.5px) rotate(1.5deg)} 66% {transform:translate(1.5px, -1.5px) rotate(-.5deg)} 68% {transform:translate(.5px, 2.5px) rotate(-.5deg)} 70% {transform:translate(1.5px, -1.5px) rotate(1.5deg)} 72% {transform:translate(1.5px, 1.5px) rotate(-.5deg)} 74% {transform:translate(-.5px, 1.5px) rotate(1.5deg)} 76% {transform:translate(1.5px, 2.5px) rotate(.5deg)} 78% {transform:translate(-.5px, .5px) rotate(.5deg)} 80% {transform:translate(-1.5px, 2.5px) rotate(.5deg)} 82% {transform:translate(.5px, 2.5px) rotate(-.5deg)} 84% {transform:translate(2.5px, -.5px) rotate(.5deg)} 86% {transform:translate(1.5px, .5px) rotate(.5deg)} 88% {transform:translate(-.5px, -1.5px) rotate(-.5deg)} 90% {transform:translate(1.5px, -.5px) rotate(1.5deg)} 92% {transform:translate(.5px, 2.5px) rotate(.5deg)} 94% {transform:translate(2.5px, .5px) rotate(-.5deg)} 96% {transform:translate(.5px, 2.5px) rotate(.5deg)} 98% {transform:translate(2.5px, -1.5px) rotate(1.5deg)} 0%,100% {transform:translate(0, 0) rotate(0)} }":"softshake"==this.animationStyle&&(t+=".discord-logo.softshake-animation .discord-original { transform-origin: 24px 24px; } .discord-logo-container:hover .softshake-animation .discord-original, .animated .softshake-animation .discord-original { animation: softshake 2000ms linear forwards; } @keyframes softshake { 0%,66%,100% {transform:rotate( 0deg)} 3% {transform:rotate(-18.0deg)} 6% {transform:rotate( 14.4deg)} 9% {transform:rotate(-11.5deg)} 12% {transform:rotate( 9.21deg)} 15% {transform:rotate(-7.37deg)} 18% {transform:rotate( 5.89deg)} 21% {transform:rotate(-4.71deg)} 24% {transform:rotate( 3.77deg)} 27% {transform:rotate(-3.02deg)} 30% {transform:rotate( 2.41deg)} 33% {transform:rotate(-1.93deg)} 36% {transform:rotate( 1.54deg)} 39% {transform:rotate(-1.23deg)} 42% {transform:rotate( 0.99deg)} 45% {transform:rotate(-0.79deg)} 48% {transform:rotate( 0.63deg)} 51% {transform:rotate(-0.50deg)} 54% {transform:rotate( 0.40deg)} 57% {transform:rotate(-0.32deg)} 60% {transform:rotate( 0.25deg)} 63% {transform:rotate(-0.20deg)} }"),this.previewCode+="\n\n<style type='text/css'>"+t+"</style>"}})}},computed:{getDTextStyle:{get:function(){return{backgroundColor:this.colors.discordfill.hex}}},getDCornerStyle:{get:function(){var t={transform:"rotate(0deg)",backgroundColor:"#FFFFFF"};return"#FFFFFF"==this.colors.discordfill.hex?t.backgroundColor=this.colors.discordcolor.hex:t.backgroundColor="#FFFFFF",!this.isLeft&&this.isTop?(this.rotation="transform: rotateY(180deg);",t.transform="rotateY(180deg)",t):this.isLeft||this.isTop?this.isLeft&&!this.isTop?(this.rotation="transform: rotateX(180deg);",t.transform="rotateX(180deg)",t):t:(this.rotation="transform: rotateY(180deg) rotateX(180deg);",t.transform="rotateY(180deg) rotateX(180deg)",t)}},isClickable:{get:function(){return""!=this.customLink}}},watch:{previewDiscordType:function(){this.updatePreviewCode()},isRainbow:function(){this.updatePreviewCode()},size:function(){this.updatePreviewCode()},isLeft:function(){this.updatePreviewCode()},isTop:function(){this.updatePreviewCode()},colors:{handler:function(){this.updatePreviewCode()},deep:!0},customLink:function(){this.updatePreviewCode()}},created:function(){this.updatePreviewCode()}},bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0,!1,!1),t._v(" "),i("portal-target",{attrs:{name:"destination"}}),t._v(" "),i("section",[i("div",{staticClass:"left"},[i("vueSlider",{ref:"vueSlider",attrs:{reverse:!0,direction:"vertical",width:4,height:482,min:18,max:250},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),t._v(" "),i("div",{staticClass:"stack"},[i("div",{staticClass:"input"},[i("toggle-button",{staticClass:"button",attrs:{color:{checked:"#76DA72",unchecked:"#DA7272"},disabled:"corner"!=t.previewDiscordType,labels:{checked:"left",unchecked:"right"},width:100},model:{value:t.isLeft,callback:function(e){t.isLeft=e},expression:"isLeft"}}),t._v(" "),i("toggle-button",{staticClass:"button",attrs:{color:{checked:"#7289DA",unchecked:"#D4DA72"},disabled:"corner"!=t.previewDiscordType,labels:{checked:"top",unchecked:"bottom"},width:100},model:{value:t.isTop,callback:function(e){t.isTop=e},expression:"isTop"}}),t._v(" "),i("toggle-button",{staticClass:"button",attrs:{color:{checked:"#2BA027",unchecked:"#B9B6B6"},sync:!0,disabled:!0,labels:{checked:"clickable link",unchecked:"no link"},width:100},model:{value:t.isClickable,callback:function(e){t.isClickable=e},expression:"isClickable"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.customLink,expression:"customLink"}],staticClass:"text",attrs:{size:30,placeholder:"insert link (e.g. discord invite link)"},domProps:{value:t.customLink},on:{input:function(e){e.target.composing||(t.customLink=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bubbleText,expression:"bubbleText"}],staticClass:"text",attrs:{size:30,placeholder:"insert text"},domProps:{value:t.bubbleText},on:{input:function(e){e.target.composing||(t.bubbleText=e.target.value)}}})],1),t._v(" "),i("portal",{attrs:{to:"destination",disabled:"speechbubble"!=t.previewDiscordType}},[i("div",{ref:"preview",attrs:{id:"preview"}},["standard"==t.previewDiscordType?i("DiscordLogo",{staticClass:"previewbox",attrs:{isRainbow:t.isRainbow,animationStyle:t.animationStyle,customLink:t.customLink,width:t.size,height:t.size,discordfill:t.colors.discordfill.hex,discordcolor:t.colors.discordcolor.hex}}):"speechbubble"==t.previewDiscordType?i("DiscordText",{ref:"discordtext",staticClass:"previewbox previewDiscordText",style:t.getDTextStyle,attrs:{isRainbow:t.isRainbow,animationStyle:t.animationStyle,customLink:t.customLink,height:t.size/4,standardText:t.bubbleText,discordfill:t.colors.discordfill.hex,discordcolor:t.colors.discordcolor.hex,writeText:!1},on:{htmlModified:t.onHtmlModified}}):i("DiscordCorner",{staticClass:"previewbox",style:t.getDCornerStyle,attrs:{customLink:t.customLink,isRainbow:t.isRainbow,animationStyle:t.animationStyle,width:t.size,height:t.size,discordfill:t.colors.discordfill.hex,discordcolor:t.colors.discordcolor.hex}})],1)])],1)],1),t._v(" "),i("div",{staticClass:"color-picker"},[i("chrome-picker",{model:{value:t.colors.discordcolor,callback:function(e){t.$set(t.colors,"discordcolor",e)},expression:"colors.discordcolor"}}),t._v(" "),i("chrome-picker",{model:{value:t.colors.discordfill,callback:function(e){t.$set(t.colors,"discordfill",e)},expression:"colors.discordfill"}})],1),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.previewCode,expression:"previewCode"}],domProps:{value:t.previewCode},on:{input:function(e){e.target.composing||(t.previewCode=e.target.value)}}})]),t._v(" "),t._m(1,!1,!1)],1)},xt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("h1",[t._v("Animated Discord Logo")]),t._v(" "),i("p",[t._v("This project was inspired by "),i("a",{attrs:{href:"https://canary.discordapp.com/assets/0bdc0497eb3a19e66f2b1e3d5741634c.webm"}},[t._v("Discord's loading logo.")])]),t._v(" "),i("p",[t._v("Since the loading logo is a video you have less control over its behavior. This project recreates the animated logo in "),i("b",[t._v("S")]),t._v("caleable "),i("b",[t._v("V")]),t._v("ector "),i("b",[t._v("G")]),t._v("raphics. By using "),i("b",[t._v("SVG")]),t._v(", all edges are clean and sharp. You can have any size and color. It consumes less resources compared to a video. Original SVG and color palette were retrieved from "),i("a",{attrs:{href:"https://discordapp.com/branding"}},[t._v("Discord")]),t._v(".")]),t._v(" "),i("p",[t._v("If you need help, feel free joining "),i("a",{attrs:{href:"https://discord.gg/gDHs8AV"}},[t._v("my server")]),t._v(". Below is a code generator:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("p",[t._v("This project is neither build nor endorsed by Discord.")])])}],yt={render:bt,staticRenderFns:xt},wt=yt,Ct=i("VU/8"),kt=c,St=Ct(vt,wt,!1,kt,null,null),Ft=St.exports,Lt={name:"app",components:{DiscordLogo:y,GithubCorner:T,DiscordCorner:P,ColorSelector:Z,StyleSelector:rt,MainBody:Ft,DiscordText:pt},data:function(){return{isRainbow:!1,animationStyle:"swirl",standardText:"Join us on Discord",previewDiscordType:"standard",colors:{discordcolor:"#FFFFFF",discordfill:"#7289DA"}}},methods:{updateSpeechBubble:function(){var t=["Click me to get the speech bubble code generator!","Click top right GitHub corner to fork!","Animation or style ideas? Raise an issue on GitHub!","Created with ♥ by NNTin using Discord and Vue.js","Click on the Discord corner to get the code.","All discord logos are clickable and will not redirect you!"],e=t[Math.floor(Math.random()*t.length)];this.standardText=e},onColorChange:function(t){this.colors=t,this.$refs.mainbody.changeColor(this.colors.discordcolor,this.colors.discordfill)},onRainbowChange:function(t){this.isRainbow=t,this.$nextTick(function(){this.$refs.styleselector.isRainbowSelected=t,this.$refs.mainbody.updatePreviewCode()})},onStyleChange:function(t){this.animationStyle=t,this.$refs.mainbody.updatePreviewCode()},setPreviewType:function(t){this.previewDiscordType=t,this.$nextTick(function(){this.$refs.mainbody.refreshSlider()})}},computed:{getBackgroundColor:{get:function(){return{backgroundColor:this.colors.discordfill}}}},created:function(){this.updateSpeechBubble()}},_t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{style:t.getBackgroundColor,attrs:{id:"top"}},[i("GithubCorner",{attrs:{discordcolor:t.colors.discordfill,discordfill:t.colors.discordcolor}}),t._v(" "),i("DiscordCorner",{attrs:{customLink:"#",isRainbow:t.isRainbow,animationStyle:t.animationStyle,id:"discordcorner",discordcolor:t.colors.discordfill,discordfill:t.colors.discordcolor},nativeOn:{click:function(e){t.setPreviewType("corner")}}}),t._v(" "),i("div",{attrs:{id:"container"}},[i("ColorSelector",{staticClass:"box",attrs:{customLink:"#",animationStyle:t.animationStyle},on:{colorChange:t.onColorChange,rainbowChange:t.onRainbowChange}}),t._v(" "),i("StyleSelector",{ref:"styleselector",staticClass:"box",attrs:{customLink:"#",isRainbow:t.isRainbow,discordfill:t.colors.discordfill,discordcolor:t.colors.discordcolor},on:{rainbowChange:t.onRainbowChange,styleChange:t.onStyleChange}}),t._v(" "),i("DiscordLogo",{staticClass:"box",attrs:{customLink:"#",animationStyle:t.animationStyle,isRainbow:t.isRainbow,discordfill:t.colors.discordfill,discordcolor:t.colors.discordcolor},nativeOn:{click:function(e){t.setPreviewType("standard")}}})],1),t._v(" "),i("br"),t._v(" "),i("DiscordText",{ref:"discordtext",attrs:{isRainbow:t.isRainbow,customLink:"#",animationStyle:t.animationStyle,standardText:t.standardText,discordfill:t.colors.discordfill,discordcolor:t.colors.discordcolor},nativeOn:{click:function(e){t.updateSpeechBubble(),t.setPreviewType("speechbubble")}}})],1),t._v(" "),i("MainBody",{ref:"mainbody",attrs:{animationStyle:t.animationStyle,isRainbow:t.isRainbow,previewDiscordType:t.previewDiscordType}})],1)},Dt=[],Tt={render:_t,staticRenderFns:Dt},Rt=Tt,At=i("VU/8"),zt=d,$t=At(Lt,Rt,!1,zt,null,null),Bt=$t.exports,Et=i("nkUn"),Mt=i.n(Et),Nt=i("9mpg"),Pt=i.n(Nt);f.default.use(Mt.a),f.default.use(Pt.a),f.default.config.productionTip=!1,new f.default({el:"#app",template:"<App/>",components:{App:Bt}})},QOvU:function(t,e){},g5gM:function(t,e){},iVeu:function(t,e){},kxf8:function(t,e){},pxkB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.535d226656d3febb63e9.js.map