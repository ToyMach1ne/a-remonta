google.maps.__gjsload__("stats",function(t){var i=function(){this.b=new t.Al},s=function(t){var i=0,s=0;return t.b.forEach(function(t){i+=t.Go,s+=t.co}),s?i/s:0},h=function(i,s,h){var n=[];return t.gb(i,function(t,i){n.push(i+s+t)}),n.join(h)},n=function(i){var s={};return t.gb(i,function(t,i){s[(0,window.encodeURIComponent)(i)]=(0,window.encodeURIComponent)(t).replace(/%7C/g,"|")}),h(s,":",",")},o=function(t,i,s){this.l=i,this.f=t+"/maps/gen_204",this.j=s},e=function(t,i,s,h){var n={};return n.host=window.document.location&&window.document.location.host||window.location.host,n.v=t,n.r=Math.round(1/i),s&&(n.client=s),h&&(n.key=h),n},r=function(i,s,h,n,o){this.m=i,this.C=s,this.l=h,this.f=n,this.j=o,this.b=new t.Al,this.B=t.Ua()},f=function(i,s,h,n,o){var e=t.N(t.R,23,500),r=t.N(t.R,22,2);this.D=i,this.F=s,this.G=e,this.l=r,this.C=h,this.m=n,this.B=o,this.f=new t.Al,this.b=0,this.j=t.Ua(),a(this)},a=function(t){window.setTimeout(function(){u(t),a(t)},Math.min(t.G*Math.pow(t.l,t.b),2147483647))},c=function(t,i,s){t.f.set(i,s)},u=function(i){var s=e(i.F,i.C,i.m,i.B);s.t=i.b+"-"+(t.Ua()-i.j),i.f.forEach(function(i,h){i=i(),0<i&&(s[h]=Number(i.toFixed(2))+(t.Bm()?"-if":""))}),i.D.b({ev:"api_snap"},s),++i.b},b=function(t,i,s,h,n){this.B=t,this.C=i,this.m=s,this.j=h,this.l=n,this.f={},this.b=[]},p=function(i,s,h,n){this.j=i,t.G.bind(this.j,"set_at",this,this.l),t.G.bind(this.j,"insert_at",this,this.l),this.B=s,this.C=h,this.m=n,this.f=0,this.b={},this.l()},l=function(){this.j=t.O(t.R,6),this.C=t.yf(),this.b=new o(t.wg[35]?t.O(t.zf(t.R),11):t.ow,t.lj,window.document),new p(t.Zi,(0,t.p)(this.b.b,this.b),t.Ef,(!!this.j));var i=t.O(new t.sf(t.R.data[3]),1);this.D=i.split(".")[1]||i,this.F={},this.B={},this.m={},this.G={},this.fa=t.N(t.R,0,1),t.kj&&(this.l=new f(this.b,this.D,this.fa,this.j,this.C))};i.prototype.f=function(i,s,h){this.b.set(t.Xc(i),{Go:s,co:h})},o.prototype.b=function(i,s){s=s||{};var o=t.hk().toString(36);s.src="apiv3",s.token=this.l,s.ts=o.substr(o.length-6),i.cad=n(s),i=h(i,"=","&"),i=this.f+"?target=api&"+i,this.j.createElement("img").src=i,(s=t.pb.__gm_captureCSI)&&s(i)},r.prototype.D=function(i,s){s=t.m(s)?s:1,this.b.isEmpty()&&window.setTimeout((0,t.p)(function(){var i=e(this.C,this.l,this.f,this.j);i.t=t.Ua()-this.B;var s=this.b;t.Bl(s);for(var h={},n=0;n<s.b.length;n++){var o=s.b[n];h[o]=s.H[o]}t.Nz(i,h),this.b.clear(),this.m.b({ev:"api_maprft"},i)},this),500),s=this.b.get(i,0)+s,this.b.set(i,s)},b.prototype.D=function(i){this.f[i]||(this.f[i]=!0,this.b.push(i),2>this.b.length&&t.jA(this,this.F,500))},b.prototype.F=function(){for(var i,s=e(this.C,this.m,this.j,this.l),h=0;i=this.b[h];++h)s[i]="1";s.hybrid=+t.fm(),this.b.length=0,this.B.b({ev:"api_mapft"},s)},p.prototype.l=function(){for(var t;t=this.j.removeAt(0);){var i=t.Hn;if(t=t.timestamp-this.C,++this.f,this.b[i]||(this.b[i]=0),++this.b[i],20<=this.f&&!(this.f%5)){var s={};s.s=i,s.sr=this.b[i],s.tr=this.f,s.te=t,s.hc=this.m?"1":"0",this.B({ev:"api_services"},s)}}},l.prototype.V=function(i){return i=t.Xc(i),this.F[i]||(this.F[i]=new b(this.b,this.D,this.fa,this.j,this.C)),this.F[i]},l.prototype.S=function(i){return i=t.Xc(i),this.B[i]||(this.B[i]=new r(this.b,this.D,t.N(t.R,0,1),this.j,this.C)),this.B[i]},l.prototype.f=function(i){if(this.l){this.m[i]||(this.m[i]=new t.bB,c(this.l,i,function(){return s.Za()}));var s=this.m[i];return s}},l.prototype.N=function(t){if(this.l){this.G[t]||(this.G[t]=new i,c(this.l,t,function(){return s(h)}));var h=this.G[t];return h}};var m=new l;t.je("stats",m)});
//# sourceMappingURL=maps/stats.js.map
