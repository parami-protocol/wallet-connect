(self.webpackChunkparami_wallet=self.webpackChunkparami_wallet||[]).push([[361],{3655:function(b,A,p){var v=p(32792);function C(P){this.mode=v.MODE_8BIT_BYTE,this.data=P}C.prototype={getLength:function(P){return this.data.length},write:function(P){for(var E=0;E<this.data.length;E++)P.put(this.data.charCodeAt(E),8)}},b.exports=C},27321:function(b){function A(){this.buffer=new Array,this.length=0}A.prototype={get:function(p){var v=Math.floor(p/8);return(this.buffer[v]>>>7-p%8&1)==1},put:function(p,v){for(var C=0;C<v;C++)this.putBit((p>>>v-C-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(p){var v=Math.floor(this.length/8);this.buffer.length<=v&&this.buffer.push(0),p&&(this.buffer[v]|=128>>>this.length%8),this.length++}},b.exports=A},49381:function(b){b.exports={L:1,M:0,Q:3,H:2}},32832:function(b,A,p){var v=p(11518);function C(P,E){if(P.length==null)throw new Error(P.length+"/"+E);for(var c=0;c<P.length&&P[c]==0;)c++;this.num=new Array(P.length-c+E);for(var a=0;a<P.length-c;a++)this.num[a]=P[a+c]}C.prototype={get:function(P){return this.num[P]},getLength:function(){return this.num.length},multiply:function(P){for(var E=new Array(this.getLength()+P.getLength()-1),c=0;c<this.getLength();c++)for(var a=0;a<P.getLength();a++)E[c+a]^=v.gexp(v.glog(this.get(c))+v.glog(P.get(a)));return new C(E,0)},mod:function(P){if(this.getLength()-P.getLength()<0)return this;for(var E=v.glog(this.get(0))-v.glog(P.get(0)),c=new Array(this.getLength()),a=0;a<this.getLength();a++)c[a]=this.get(a);for(var a=0;a<P.getLength();a++)c[a]^=v.gexp(v.glog(P.get(a))+E);return new C(c,0).mod(P)}},b.exports=C},14450:function(b,A,p){var v=p(3655),C=p(17611),P=p(27321),E=p(93160),c=p(32832);function a(i,e){this.typeNumber=i,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var f=a.prototype;f.addData=function(i){var e=new v(i);this.dataList.push(e),this.dataCache=null},f.isDark=function(i,e){if(i<0||this.moduleCount<=i||e<0||this.moduleCount<=e)throw new Error(i+","+e);return this.modules[i][e]},f.getModuleCount=function(){return this.moduleCount},f.make=function(){if(this.typeNumber<1){var i=1;for(i=1;i<40;i++){for(var e=C.getRSBlocks(i,this.errorCorrectLevel),t=new P,s=0,u=0;u<e.length;u++)s+=e[u].dataCount;for(var u=0;u<this.dataList.length;u++){var h=this.dataList[u];t.put(h.mode,4),t.put(h.getLength(),E.getLengthInBits(h.mode,i)),h.write(t)}if(t.getLengthInBits()<=s*8)break}this.typeNumber=i}this.makeImpl(!1,this.getBestMaskPattern())},f.makeImpl=function(i,e){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var t=0;t<this.moduleCount;t++){this.modules[t]=new Array(this.moduleCount);for(var s=0;s<this.moduleCount;s++)this.modules[t][s]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(i,e),this.typeNumber>=7&&this.setupTypeNumber(i),this.dataCache==null&&(this.dataCache=a.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},f.setupPositionProbePattern=function(i,e){for(var t=-1;t<=7;t++)if(!(i+t<=-1||this.moduleCount<=i+t))for(var s=-1;s<=7;s++)e+s<=-1||this.moduleCount<=e+s||(0<=t&&t<=6&&(s==0||s==6)||0<=s&&s<=6&&(t==0||t==6)||2<=t&&t<=4&&2<=s&&s<=4?this.modules[i+t][e+s]=!0:this.modules[i+t][e+s]=!1)},f.getBestMaskPattern=function(){for(var i=0,e=0,t=0;t<8;t++){this.makeImpl(!0,t);var s=E.getLostPoint(this);(t==0||i>s)&&(i=s,e=t)}return e},f.createMovieClip=function(i,e,t){var s=i.createEmptyMovieClip(e,t),u=1;this.make();for(var h=0;h<this.modules.length;h++)for(var d=h*u,g=0;g<this.modules[h].length;g++){var T=g*u,I=this.modules[h][g];I&&(s.beginFill(0,100),s.moveTo(T,d),s.lineTo(T+u,d),s.lineTo(T+u,d+u),s.lineTo(T,d+u),s.endFill())}return s},f.setupTimingPattern=function(){for(var i=8;i<this.moduleCount-8;i++)this.modules[i][6]==null&&(this.modules[i][6]=i%2==0);for(var e=8;e<this.moduleCount-8;e++)this.modules[6][e]==null&&(this.modules[6][e]=e%2==0)},f.setupPositionAdjustPattern=function(){for(var i=E.getPatternPosition(this.typeNumber),e=0;e<i.length;e++)for(var t=0;t<i.length;t++){var s=i[e],u=i[t];if(this.modules[s][u]==null)for(var h=-2;h<=2;h++)for(var d=-2;d<=2;d++)h==-2||h==2||d==-2||d==2||h==0&&d==0?this.modules[s+h][u+d]=!0:this.modules[s+h][u+d]=!1}},f.setupTypeNumber=function(i){for(var e=E.getBCHTypeNumber(this.typeNumber),t=0;t<18;t++){var s=!i&&(e>>t&1)==1;this.modules[Math.floor(t/3)][t%3+this.moduleCount-8-3]=s}for(var t=0;t<18;t++){var s=!i&&(e>>t&1)==1;this.modules[t%3+this.moduleCount-8-3][Math.floor(t/3)]=s}},f.setupTypeInfo=function(i,e){for(var t=this.errorCorrectLevel<<3|e,s=E.getBCHTypeInfo(t),u=0;u<15;u++){var h=!i&&(s>>u&1)==1;u<6?this.modules[u][8]=h:u<8?this.modules[u+1][8]=h:this.modules[this.moduleCount-15+u][8]=h}for(var u=0;u<15;u++){var h=!i&&(s>>u&1)==1;u<8?this.modules[8][this.moduleCount-u-1]=h:u<9?this.modules[8][15-u-1+1]=h:this.modules[8][15-u-1]=h}this.modules[this.moduleCount-8][8]=!i},f.mapData=function(i,e){for(var t=-1,s=this.moduleCount-1,u=7,h=0,d=this.moduleCount-1;d>0;d-=2)for(d==6&&d--;;){for(var g=0;g<2;g++)if(this.modules[s][d-g]==null){var T=!1;h<i.length&&(T=(i[h]>>>u&1)==1);var I=E.getMask(e,s,d-g);I&&(T=!T),this.modules[s][d-g]=T,u--,u==-1&&(h++,u=7)}if(s+=t,s<0||this.moduleCount<=s){s-=t,t=-t;break}}},a.PAD0=236,a.PAD1=17,a.createData=function(i,e,t){for(var s=C.getRSBlocks(i,e),u=new P,h=0;h<t.length;h++){var d=t[h];u.put(d.mode,4),u.put(d.getLength(),E.getLengthInBits(d.mode,i)),d.write(u)}for(var g=0,h=0;h<s.length;h++)g+=s[h].dataCount;if(u.getLengthInBits()>g*8)throw new Error("code length overflow. ("+u.getLengthInBits()+">"+g*8+")");for(u.getLengthInBits()+4<=g*8&&u.put(0,4);u.getLengthInBits()%8!=0;)u.putBit(!1);for(;!(u.getLengthInBits()>=g*8||(u.put(a.PAD0,8),u.getLengthInBits()>=g*8));)u.put(a.PAD1,8);return a.createBytes(u,s)},a.createBytes=function(i,e){for(var t=0,s=0,u=0,h=new Array(e.length),d=new Array(e.length),g=0;g<e.length;g++){var T=e[g].dataCount,I=e[g].totalCount-T;s=Math.max(s,T),u=Math.max(u,I),h[g]=new Array(T);for(var w=0;w<h[g].length;w++)h[g][w]=255&i.buffer[w+t];t+=T;var G=E.getErrorCorrectPolynomial(I),X=new c(h[g],G.getLength()-1),Q=X.mod(G);d[g]=new Array(G.getLength()-1);for(var w=0;w<d[g].length;w++){var j=w+Q.getLength()-d[g].length;d[g][w]=j>=0?Q.get(j):0}}for(var U=0,w=0;w<e.length;w++)U+=e[w].totalCount;for(var K=new Array(U),F=0,w=0;w<s;w++)for(var g=0;g<e.length;g++)w<h[g].length&&(K[F++]=h[g][w]);for(var w=0;w<u;w++)for(var g=0;g<e.length;g++)w<d[g].length&&(K[F++]=d[g][w]);return K},b.exports=a},17611:function(b,A,p){var v=p(49381);function C(P,E){this.totalCount=P,this.dataCount=E}C.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],C.getRSBlocks=function(P,E){var c=C.getRsBlockTable(P,E);if(c==null)throw new Error("bad rs block @ typeNumber:"+P+"/errorCorrectLevel:"+E);for(var a=c.length/3,f=new Array,i=0;i<a;i++)for(var e=c[i*3+0],t=c[i*3+1],s=c[i*3+2],u=0;u<e;u++)f.push(new C(t,s));return f},C.getRsBlockTable=function(P,E){switch(E){case v.L:return C.RS_BLOCK_TABLE[(P-1)*4+0];case v.M:return C.RS_BLOCK_TABLE[(P-1)*4+1];case v.Q:return C.RS_BLOCK_TABLE[(P-1)*4+2];case v.H:return C.RS_BLOCK_TABLE[(P-1)*4+3];default:return}},b.exports=C},11518:function(b){for(var A={glog:function(v){if(v<1)throw new Error("glog("+v+")");return A.LOG_TABLE[v]},gexp:function(v){for(;v<0;)v+=255;for(;v>=256;)v-=255;return A.EXP_TABLE[v]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},p=0;p<8;p++)A.EXP_TABLE[p]=1<<p;for(var p=8;p<256;p++)A.EXP_TABLE[p]=A.EXP_TABLE[p-4]^A.EXP_TABLE[p-5]^A.EXP_TABLE[p-6]^A.EXP_TABLE[p-8];for(var p=0;p<255;p++)A.LOG_TABLE[A.EXP_TABLE[p]]=p;b.exports=A},32792:function(b){b.exports={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3}},93160:function(b,A,p){var v=p(32792),C=p(32832),P=p(11518),E={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},c={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(a){for(var f=a<<10;c.getBCHDigit(f)-c.getBCHDigit(c.G15)>=0;)f^=c.G15<<c.getBCHDigit(f)-c.getBCHDigit(c.G15);return(a<<10|f)^c.G15_MASK},getBCHTypeNumber:function(a){for(var f=a<<12;c.getBCHDigit(f)-c.getBCHDigit(c.G18)>=0;)f^=c.G18<<c.getBCHDigit(f)-c.getBCHDigit(c.G18);return a<<12|f},getBCHDigit:function(a){for(var f=0;a!=0;)f++,a>>>=1;return f},getPatternPosition:function(a){return c.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,f,i){switch(a){case E.PATTERN000:return(f+i)%2==0;case E.PATTERN001:return f%2==0;case E.PATTERN010:return i%3==0;case E.PATTERN011:return(f+i)%3==0;case E.PATTERN100:return(Math.floor(f/2)+Math.floor(i/3))%2==0;case E.PATTERN101:return f*i%2+f*i%3==0;case E.PATTERN110:return(f*i%2+f*i%3)%2==0;case E.PATTERN111:return(f*i%3+(f+i)%2)%2==0;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var f=new C([1],0),i=0;i<a;i++)f=f.multiply(new C([1,P.gexp(i)],0));return f},getLengthInBits:function(a,f){if(1<=f&&f<10)switch(a){case v.MODE_NUMBER:return 10;case v.MODE_ALPHA_NUM:return 9;case v.MODE_8BIT_BYTE:return 8;case v.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(f<27)switch(a){case v.MODE_NUMBER:return 12;case v.MODE_ALPHA_NUM:return 11;case v.MODE_8BIT_BYTE:return 16;case v.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else if(f<41)switch(a){case v.MODE_NUMBER:return 14;case v.MODE_ALPHA_NUM:return 13;case v.MODE_8BIT_BYTE:return 16;case v.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}else throw new Error("type:"+f)},getLostPoint:function(a){for(var f=a.getModuleCount(),i=0,e=0;e<f;e++)for(var t=0;t<f;t++){for(var s=0,u=a.isDark(e,t),h=-1;h<=1;h++)if(!(e+h<0||f<=e+h))for(var d=-1;d<=1;d++)t+d<0||f<=t+d||h==0&&d==0||u==a.isDark(e+h,t+d)&&s++;s>5&&(i+=3+s-5)}for(var e=0;e<f-1;e++)for(var t=0;t<f-1;t++){var g=0;a.isDark(e,t)&&g++,a.isDark(e+1,t)&&g++,a.isDark(e,t+1)&&g++,a.isDark(e+1,t+1)&&g++,(g==0||g==4)&&(i+=3)}for(var e=0;e<f;e++)for(var t=0;t<f-6;t++)a.isDark(e,t)&&!a.isDark(e,t+1)&&a.isDark(e,t+2)&&a.isDark(e,t+3)&&a.isDark(e,t+4)&&!a.isDark(e,t+5)&&a.isDark(e,t+6)&&(i+=40);for(var t=0;t<f;t++)for(var e=0;e<f-6;e++)a.isDark(e,t)&&!a.isDark(e+1,t)&&a.isDark(e+2,t)&&a.isDark(e+3,t)&&a.isDark(e+4,t)&&!a.isDark(e+5,t)&&a.isDark(e+6,t)&&(i+=40);for(var T=0,t=0;t<f;t++)for(var e=0;e<f;e++)a.isDark(e,t)&&T++;var I=Math.abs(100*T/f/f-50)/5;return i+=I*10,i}};b.exports=c},79361:function(b,A,p){"use strict";function v(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?v=function(o){return typeof o}:v=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},v(l)}function C(){return C=Object.assign||function(l){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(l[n]=o[n])}return l},C.apply(this,arguments)}function P(l,r){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);r&&(n=n.filter(function(m){return Object.getOwnPropertyDescriptor(l,m).enumerable})),o.push.apply(o,n)}return o}function E(l){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?P(o,!0).forEach(function(n){g(l,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):P(o).forEach(function(n){Object.defineProperty(l,n,Object.getOwnPropertyDescriptor(o,n))})}return l}function c(l,r){if(l==null)return{};var o=a(l,r),n,m;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(l);for(m=0;m<y.length;m++)n=y[m],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,n)||(o[n]=l[n]))}return o}function a(l,r){if(l==null)return{};var o={},n=Object.keys(l),m,y;for(y=0;y<n.length;y++)m=n[y],!(r.indexOf(m)>=0)&&(o[m]=l[m]);return o}function f(l,r){if(!(l instanceof r))throw new TypeError("Cannot call a class as a function")}function i(l,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(l,n.key,n)}}function e(l,r,o){return r&&i(l.prototype,r),o&&i(l,o),l}function t(l,r){return r&&(v(r)==="object"||typeof r=="function")?r:u(l)}function s(l){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},s(l)}function u(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function h(l,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(r&&r.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),r&&d(l,r)}function d(l,r){return d=Object.setPrototypeOf||function(n,m){return n.__proto__=m,n},d(l,r)}function g(l,r,o){return r in l?Object.defineProperty(l,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[r]=o,l}var T=p(67294),I=p(45697),w=p(14450),G=p(49381);function X(l){for(var r="",o=0;o<l.length;o++){var n=l.charCodeAt(o);n<128?r+=String.fromCharCode(n):n<2048?(r+=String.fromCharCode(192|n>>6),r+=String.fromCharCode(128|n&63)):n<55296||n>=57344?(r+=String.fromCharCode(224|n>>12),r+=String.fromCharCode(128|n>>6&63),r+=String.fromCharCode(128|n&63)):(o++,n=65536+((n&1023)<<10|l.charCodeAt(o)&1023),r+=String.fromCharCode(240|n>>18),r+=String.fromCharCode(128|n>>12&63),r+=String.fromCharCode(128|n>>6&63),r+=String.fromCharCode(128|n&63))}return r}var Q={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1},j={},U=4,K=.1;function F(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=[];return l.forEach(function(n,m){var y=null;n.forEach(function(L,M){if(!L&&y!==null){o.push("M".concat(y+r," ").concat(m+r,"h").concat(M-y,"v1H").concat(y+r,"z")),y=null;return}if(M===n.length-1){if(!L)return;y===null?o.push("M".concat(M+r,",").concat(m+r," h1v1H").concat(M+r,"z")):o.push("M".concat(y+r,",").concat(m+r," h").concat(M+1-y,"v1H").concat(y+r,"z"));return}L&&y===null&&(y=M)})}),o.join("")}function $(l,r){return l.slice().map(function(o,n){return n<r.y||n>=r.y+r.h?o:o.map(function(m,y){return y<r.x||y>=r.x+r.w?m:!1})})}function Y(l,r){var o=l.imageSettings,n=l.size,m=l.includeMargin;if(o==null)return null;var y=m?U:0,L=r.length+y*2,M=Math.floor(n*K),N=L/n,H=(o.width||M)*N,x=(o.height||M)*N,k=o.x==null?r.length/2-H/2:o.x*N,R=o.y==null?r.length/2-x/2:o.y*N,_=null;if(o.excavate){var B=Math.floor(k),D=Math.floor(R),O=Math.ceil(H+k-B),S=Math.ceil(x+R-D);_={x:B,y:D,w:O,h:S}}return{x:k,y:R,h:x,w:H,excavation:_}}var q=function(){try{new Path2D().addPath(new Path2D)}catch(l){return!1}return!0}(),J=function(l){h(r,l);function r(){var o,n;f(this,r);for(var m=arguments.length,y=new Array(m),L=0;L<m;L++)y[L]=arguments[L];return n=t(this,(o=s(r)).call.apply(o,[this].concat(y))),g(u(n),"_canvas",void 0),g(u(n),"_image",void 0),g(u(n),"state",{imgLoaded:!1}),g(u(n),"handleImageLoad",function(){n.setState({imgLoaded:!0})}),n}return e(r,[{key:"componentDidMount",value:function(){this._image&&this._image.complete&&this.handleImageLoad(),this.update()}},{key:"componentWillReceiveProps",value:function(n){var m,y,L=(m=this.props.imageSettings)===null||m===void 0?void 0:m.src,M=(y=n.imageSettings)===null||y===void 0?void 0:y.src;L!==M&&this.setState({imgLoaded:!1})}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"update",value:function(){var n=this.props,m=n.value,y=n.size,L=n.level,M=n.bgColor,N=n.fgColor,H=n.includeMargin,x=n.imageSettings,k=new w(-1,G[L]);if(k.addData(X(m)),k.make(),this._canvas!=null){var R=this._canvas,_=R.getContext("2d");if(!_)return;var B=k.modules;if(B===null)return;var D=H?U:0,O=B.length+D*2,S=Y(this.props,B);x!=null&&S!=null&&S.excavation!=null&&(B=$(B,S.excavation));var z=window.devicePixelRatio||1;R.height=R.width=y*z;var Z=y/O*z;_.scale(Z,Z),_.fillStyle=M,_.fillRect(0,0,O,O),_.fillStyle=N,q?_.fill(new Path2D(F(B,D))):B.forEach(function(tt,et){tt.forEach(function(rt,nt){rt&&_.fillRect(nt+D,et+D,1,1)})}),this.state.imgLoaded&&this._image&&S!=null&&_.drawImage(this._image,S.x+D,S.y+D,S.w,S.h)}}},{key:"render",value:function(){var n=this,m=this.props,y=m.value,L=m.size,M=m.level,N=m.bgColor,H=m.fgColor,x=m.style,k=m.includeMargin,R=m.imageSettings,_=c(m,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]),B=E({height:L,width:L},x),D=null,O=R&&R.src;return R!=null&&O!=null&&(D=T.createElement("img",{src:O,style:{display:"none"},onLoad:this.handleImageLoad,ref:function(z){return n._image=z}})),T.createElement(T.Fragment,null,T.createElement("canvas",C({style:B,height:L,width:L,ref:function(z){return n._canvas=z}},_)),D)}}]),r}(T.PureComponent);g(J,"defaultProps",Q);var W=function(l){h(r,l);function r(){return f(this,r),t(this,s(r).apply(this,arguments))}return e(r,[{key:"render",value:function(){var n=this.props,m=n.value,y=n.size,L=n.level,M=n.bgColor,N=n.fgColor,H=n.includeMargin,x=n.imageSettings,k=c(n,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),R=new w(-1,G[L]);R.addData(X(m)),R.make();var _=R.modules;if(_===null)return null;var B=H?U:0,D=_.length+B*2,O=Y(this.props,_),S=null;x!=null&&O!=null&&(O.excavation!=null&&(_=$(_,O.excavation)),S=T.createElement("image",{xlinkHref:x.src,height:O.h,width:O.w,x:O.x+B,y:O.y+B,preserveAspectRatio:"none"}));var z=F(_,B);return T.createElement("svg",C({shapeRendering:"crispEdges",height:y,width:y,viewBox:"0 0 ".concat(D," ").concat(D)},k),T.createElement("path",{fill:M,d:"M0,0 h".concat(D,"v").concat(D,"H0z")}),T.createElement("path",{fill:N,d:z}),S)}}]),r}(T.PureComponent);g(W,"defaultProps",Q);var V=function(r){var o=r.renderAs,n=c(r,["renderAs"]),m=o==="svg"?W:J;return T.createElement(m,n)};V.defaultProps=E({renderAs:"canvas"},Q),b.exports=V}}]);
