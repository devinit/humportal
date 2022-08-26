/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{457:function(t,e,r){t.exports=function(t){"use strict";var e=(t=t&&t.hasOwnProperty("default")?t.default:t).helpers,r=function(){if("undefined"!=typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),n={toTextLines:function(t){var input,r=[];for(t=[].concat(t);t.length;)"string"==typeof(input=t.pop())?r.unshift.apply(r,input.split("\n")):Array.isArray(input)?t.push.apply(t,input):e.isNullOrUndef(t)||r.unshift(""+input);return r},toFontString:function(t){return!t||e.isNullOrUndef(t.size)||e.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family},textSize:function(t,e,r){var i,n=[].concat(e),o=n.length,l=t.font,d=0;for(t.font=r.string,i=0;i<o;++i)d=Math.max(t.measureText(n[i]).width,d);return t.font=l,{height:o*r.lineHeight,width:d}},parseFont:function(r){var o=t.defaults.global,l=e.valueOrDefault(r.size,o.defaultFontSize),d={family:e.valueOrDefault(r.family,o.defaultFontFamily),lineHeight:e.options.toLineHeight(r.lineHeight,l),size:l,style:e.valueOrDefault(r.style,o.defaultFontStyle),weight:e.valueOrDefault(r.weight,null),string:""};return d.string=n.toFontString(d),d},bound:function(t,e,r){return Math.max(t,Math.min(e,r))},arrayDiff:function(t,e){var i,r,n,o,l=t.slice(),d=[];for(i=0,n=e.length;i<n;++i)o=e[i],-1===(r=l.indexOf(o))?d.push([o,1]):l.splice(r,1);for(i=0,n=l.length;i<n;++i)d.push([l[i],-1]);return d},rasterize:function(t){return Math.round(t*r)/r}};function o(t,e){var r=e.x,n=e.y;if(null===r)return{x:0,y:-1};if(null===n)return{x:1,y:0};var o=t.x-r,l=t.y-n,d=Math.sqrt(o*o+l*l);return{x:d?o/d:0,y:d?l/d:-1}}function l(t,e,r,n,o){switch(o){case"center":r=n=0;break;case"bottom":r=0,n=1;break;case"right":r=1,n=0;break;case"left":r=-1,n=0;break;case"top":r=0,n=-1;break;case"start":r=-r,n=-n;break;case"end":break;default:o*=Math.PI/180,r=Math.cos(o),n=Math.sin(o)}return{x:t,y:e,vx:r,vy:n}}var d=0,f=1,c=2,h=4,x=8;function y(t,e,rect){var r=d;return t<rect.left?r|=f:t>rect.right&&(r|=c),e<rect.top?r|=x:e>rect.bottom&&(r|=h),r}function v(t,area){for(var e,r,n,o=t.x0,l=t.y0,d=t.x1,v=t.y1,_=y(o,l,area),m=y(d,v,area);_|m&&!(_&m);)(e=_||m)&x?(r=o+(d-o)*(area.top-l)/(v-l),n=area.top):e&h?(r=o+(d-o)*(area.bottom-l)/(v-l),n=area.bottom):e&c?(n=l+(v-l)*(area.right-o)/(d-o),r=area.right):e&f&&(n=l+(v-l)*(area.left-o)/(d-o),r=area.left),e===_?_=y(o=r,l=n,area):m=y(d=r,v=n,area);return{x0:o,x1:d,y0:l,y1:v}}function _(t,e){var r,n,o=e.anchor,d=t;return e.clamp&&(d=v(d,e.area)),"start"===o?(r=d.x0,n=d.y0):"end"===o?(r=d.x1,n=d.y1):(r=(d.x0+d.x1)/2,n=(d.y0+d.y1)/2),l(r,n,t.vx,t.vy,e.align)}var m={arc:function(t,e){var r=(t.startAngle+t.endAngle)/2,n=Math.cos(r),o=Math.sin(r),l=t.innerRadius,d=t.outerRadius;return _({x0:t.x+n*l,y0:t.y+o*l,x1:t.x+n*d,y1:t.y+o*d,vx:n,vy:o},e)},point:function(t,e){var r=o(t,e.origin),n=r.x*t.radius,l=r.y*t.radius;return _({x0:t.x-n,y0:t.y-l,x1:t.x+n,y1:t.y+l,vx:r.x,vy:r.y},e)},rect:function(t,e){var r=o(t,e.origin),n=t.x,l=t.y,d=0,f=0;return t.horizontal?(n=Math.min(t.x,t.base),d=Math.abs(t.base-t.x)):(l=Math.min(t.y,t.base),f=Math.abs(t.base-t.y)),_({x0:n,y0:l+f,x1:n+d,y1:l,vx:r.x,vy:r.y},e)},fallback:function(t,e){var r=o(t,e.origin);return _({x0:t.x,y0:t.y,x1:t.x,y1:t.y,vx:r.x,vy:r.y},e)}},w=t.helpers,k=n.rasterize;function M(t){var e=t.borderWidth||0,r=t.padding,th=t.size.height,n=t.size.width,o=-n/2,l=-th/2;return{frame:{x:o-r.left-e,y:l-r.top-e,w:n+r.width+2*e,h:th+r.height+2*e},text:{x:o,y:l,w:n,h:th}}}function S(t){var e=t._model.horizontal,r=t._scale||e&&t._xScale||t._yScale;if(!r)return null;if(void 0!==r.xCenter&&void 0!==r.yCenter)return{x:r.xCenter,y:r.yCenter};var n=r.getBasePixel();return e?{x:n,y:null}:{x:null,y:n}}function C(e){return e instanceof t.elements.Arc?m.arc:e instanceof t.elements.Point?m.point:e instanceof t.elements.Rectangle?m.rect:m.fallback}function z(t,rect,e){var r=e.backgroundColor,n=e.borderColor,o=e.borderWidth;(r||n&&o)&&(t.beginPath(),w.canvas.roundedRect(t,k(rect.x)+o/2,k(rect.y)+o/2,k(rect.w)-o,k(rect.h)-o,e.borderRadius),t.closePath(),r&&(t.fillStyle=r,t.fill()),n&&o&&(t.strokeStyle=n,t.lineWidth=o,t.lineJoin="miter",t.stroke()))}function $(rect,t,e){var r=e.lineHeight,n=rect.w,o=rect.x;return"center"===t?o+=n/2:"end"!==t&&"right"!==t||(o+=n),{h:r,w:n,x:o,y:rect.y+r/2}}function O(t,text,e){var shadow=t.shadowBlur,r=e.stroked,n=k(e.x),o=k(e.y),l=k(e.w);r&&t.strokeText(text,n,o,l),e.filled&&(shadow&&r&&(t.shadowBlur=0),t.fillText(text,n,o,l),shadow&&r&&(t.shadowBlur=shadow))}function A(t,e,rect,r){var i,n=r.textAlign,o=r.color,l=!!o,d=r.font,f=e.length,c=r.textStrokeColor,h=r.textStrokeWidth,x=c&&h;if(f&&(l||x))for(rect=$(rect,n,d),t.font=d.string,t.textAlign=n,t.textBaseline="middle",t.shadowBlur=r.textShadowBlur,t.shadowColor=r.textShadowColor,l&&(t.fillStyle=o),x&&(t.lineJoin="round",t.lineWidth=h,t.strokeStyle=c),i=0,f=e.length;i<f;++i)O(t,e[i],{stroked:x,filled:l,w:rect.w,x:rect.x,y:rect.y+rect.h*i})}var D=function(t,e,r,n){var o=this;o._config=t,o._index=n,o._model=null,o._rects=null,o._ctx=e,o._el=r};w.extend(D.prototype,{_modelize:function(e,r,o,l){var d=this,f=d._index,c=w.options.resolve,h=n.parseFont(c([o.font,{}],l,f)),x=c([o.color,t.defaults.global.defaultFontColor],l,f);return{align:c([o.align,"center"],l,f),anchor:c([o.anchor,"center"],l,f),area:l.chart.chartArea,backgroundColor:c([o.backgroundColor,null],l,f),borderColor:c([o.borderColor,null],l,f),borderRadius:c([o.borderRadius,0],l,f),borderWidth:c([o.borderWidth,0],l,f),clamp:c([o.clamp,!1],l,f),clip:c([o.clip,!1],l,f),color:x,display:e,font:h,lines:r,offset:c([o.offset,0],l,f),opacity:c([o.opacity,1],l,f),origin:S(d._el),padding:w.options.toPadding(c([o.padding,0],l,f)),positioner:C(d._el),rotation:c([o.rotation,0],l,f)*(Math.PI/180),size:n.textSize(d._ctx,r,h),textAlign:c([o.textAlign,"start"],l,f),textShadowBlur:c([o.textShadowBlur,0],l,f),textShadowColor:c([o.textShadowColor,x],l,f),textStrokeColor:c([o.textStrokeColor,x],l,f),textStrokeWidth:c([o.textStrokeWidth,0],l,f)}},update:function(t){var e,label,r,o=this,l=null,d=null,f=o._index,c=o._config,h=w.options.resolve([c.display,!0],t,f);h&&(e=t.dataset.data[f],label=w.valueOrDefault(w.callback(c.formatter,[e,t]),e),(r=w.isNullOrUndef(label)?[]:n.toTextLines(label)).length&&(d=M(l=o._modelize(h,r,c,t)))),o._model=l,o._rects=d},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,e){var area,r=this,o=t.ctx,l=r._model,d=r._rects;this.visible()&&(o.save(),l.clip&&(area=l.area,o.beginPath(),o.rect(area.left,area.top,area.right-area.left,area.bottom-area.top),o.clip()),o.globalAlpha=n.bound(0,l.opacity,1),o.translate(k(e.x),k(e.y)),o.rotate(l.rotation),z(o,d.frame,l),A(o,l.lines,d.text,l),o.restore())}});var P=t.helpers,N=Number.MIN_SAFE_INTEGER||-9007199254740991,R=Number.MAX_SAFE_INTEGER||9007199254740991;function F(t,e,r){var n=Math.cos(r),o=Math.sin(r),l=e.x,d=e.y;return{x:l+n*(t.x-l)-o*(t.y-d),y:d+o*(t.x-l)+n*(t.y-d)}}function W(t,e){var i,r,n,o,l,d=R,f=N,c=e.origin;for(i=0;i<t.length;++i)n=(r=t[i]).x-c.x,o=r.y-c.y,l=e.vx*n+e.vy*o,d=Math.min(d,l),f=Math.max(f,l);return{min:d,max:f}}function B(t,e){var r=e.x-t.x,n=e.y-t.y,o=Math.sqrt(r*r+n*n);return{vx:(e.x-t.x)/o,vy:(e.y-t.y)/o,origin:t,ln:o}}var I=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function U(view,t,e){var r=t.positioner(view,t),n=r.vx,o=r.vy;if(!n&&!o)return{x:r.x,y:r.y};var l=e.w,d=e.h,f=t.rotation,c=Math.abs(l/2*Math.cos(f))+Math.abs(d/2*Math.sin(f)),h=Math.abs(l/2*Math.sin(f))+Math.abs(d/2*Math.cos(f)),x=1/Math.max(Math.abs(n),Math.abs(o));return c*=n*x,h*=o*x,c+=t.offset*n,h+=t.offset*o,{x:r.x+c,y:r.y+h}}function E(t,e){var i,r,n,o;for(i=t.length-1;i>=0;--i)for(n=t[i].$layout,r=i-1;r>=0&&n._visible;--r)(o=t[r].$layout)._visible&&n._box.intersects(o._box)&&e(n,o);return t}function T(t){var i,e,label,r,n,o;for(i=0,e=t.length;i<e;++i)(r=(label=t[i]).$layout)._visible&&(n=label.geometry(),o=U(label._el._model,label.model(),n),r._box.update(o,n,label.rotation()));return E(t,(function(t,e){var r=t._hidable,h1=e._hidable;r&&h1||h1?e._visible=!1:r&&(t._visible=!1)}))}P.extend(I.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,rect,e){this._rotation=e,this._rect={x:rect.x+t.x,y:rect.y+t.y,w:rect.w,h:rect.h}},contains:function(t){var e=this,r=1,rect=e._rect;return!((t=F(t,e.center(),-e._rotation)).x<rect.x-r||t.y<rect.y-r||t.x>rect.x+rect.w+2*r||t.y>rect.y+rect.h+2*r)},intersects:function(t){var i,e,r,n=this._points(),o=t._points(),l=[B(n[0],n[1]),B(n[0],n[3])];for(this._rotation!==t._rotation&&l.push(B(o[0],o[1]),B(o[0],o[3])),i=0;i<l.length;++i)if(e=W(n,l[i]),r=W(o,l[i]),e.max<r.min||r.max<e.min)return!1;return!0},_points:function(){var t=this,rect=t._rect,e=t._rotation,r=t.center();return[F({x:rect.x,y:rect.y},r,e),F({x:rect.x+rect.w,y:rect.y},r,e),F({x:rect.x+rect.w,y:rect.y+rect.h},r,e),F({x:rect.x,y:rect.y+rect.h},r,e)]}});var H={prepare:function(t){var i,e,r,n,label,o=[];for(i=0,r=t.length;i<r;++i)for(e=0,n=t[i].length;e<n;++e)label=t[i][e],o.push(label),label.$layout={_box:new I,_hidable:!1,_visible:!0,_set:i,_idx:e};return o.sort((function(a,b){var t=a.$layout,e=b.$layout;return t._idx===e._idx?e._set-t._set:e._idx-t._idx})),this.update(o),o},update:function(t){var i,e,label,r,n,o=!1;for(i=0,e=t.length;i<e;++i)r=(label=t[i]).model(),(n=label.$layout)._hidable=r&&"auto"===r.display,n._visible=label.visible(),o|=n._hidable;o&&T(t)},lookup:function(t,e){var i,r;for(i=t.length-1;i>=0;--i)if((r=t[i].$layout)&&r._visible&&r._box.contains(e))return t[i];return null},draw:function(t,e){var i,r,label,n,o,l;for(i=0,r=e.length;i<r;++i)(n=(label=e[i]).$layout)._visible&&(o=label.geometry(),l=U(label._el._view,label.model(),o),n._box.update(l,o,label.rotation()),label.draw(t,l))}},J=t.helpers,j={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if(J.isNullOrUndef(t))return null;var e,r,n,label=t;if(J.isObject(t))if(J.isNullOrUndef(t.label))if(J.isNullOrUndef(t.r))for(label="",n=0,r=(e=Object.keys(t)).length;n<r;++n)label+=(0!==n?", ":"")+e[n]+": "+t[e[n]];else label=t.r;else label=t.label;return""+label},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},L=t.helpers,X="$datalabels",G="$default";function V(t,e){var r,n,o=t.datalabels,l={},d=[];return!1===o?null:(!0===o&&(o={}),e=L.merge({},[e,o]),r=e.labels||{},n=Object.keys(r),delete e.labels,n.length?n.forEach((function(t){r[t]&&d.push(L.merge({},[e,r[t],{_key:t}]))})):d.push(e),l=d.reduce((function(t,e){return L.each(e.listeners||{},(function(r,n){t[n]=t[n]||{},t[n][e._key||G]=r})),delete e.listeners,t}),{}),{labels:d,listeners:l})}function K(t,e,label){if(e){var r,n=label.$context,o=label.$groups;e[o._set]&&(r=e[o._set][o._key])&&!0===L.callback(r,[n])&&(t[X]._dirty=!0,label.update(n))}}function Q(t,e,r,label){var n,o;(r||label)&&(r?label?r!==label&&(o=n=!0):o=!0:n=!0,o&&K(t,e.leave,r),n&&K(t,e.enter,label))}function Y(t,e){var r,label,n=t[X],o=n._listeners;if(o.enter||o.leave){if("mousemove"===e.type)label=H.lookup(n._labels,e);else if("mouseout"!==e.type)return;r=n._hovered,n._hovered=label,Q(t,o,r,label)}}function Z(t,e){var r=t[X],n=r._listeners.click,label=n&&H.lookup(r._labels,e);label&&K(t,n,label)}function tt(e){if(!e.animating){for(var r=t.animationService.animations,i=0,n=r.length;i<n;++i)if(r[i].chart===e)return;e.render({duration:1,lazy:!0})}}t.defaults.global.plugins.datalabels=j;var et={id:"datalabels",beforeInit:function(t){t[X]={_actives:[]}},beforeUpdate:function(t){var e=t[X];e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(t,e,r){var i,n,o,l,d,f,c,label,h=e.index,x=t[X],y=x._datasets[h]=[],v=t.isDatasetVisible(h),_=t.data.datasets[h],m=V(_,r),w=e.meta.data||[],k=t.ctx;for(k.save(),i=0,o=w.length;i<o;++i)if((c=w[i])[X]=[],v&&c&&!c.hidden&&!c._model.skip)for(n=0,l=m.labels.length;n<l;++n)f=(d=m.labels[n])._key,(label=new D(d,k,c,i)).$groups={_set:h,_key:f||G},label.$context={active:!1,chart:t,dataIndex:i,dataset:_,datasetIndex:h},label.update(label.$context),c[X].push(label),y.push(label);k.restore(),L.merge(x._listeners,m.listeners,{merger:function(t,r,source){r[t]=r[t]||{},r[t][e.index]=source[t],x._listened=!0}})},afterUpdate:function(t,e){t[X]._labels=H.prepare(t[X]._datasets,e)},afterDatasetsDraw:function(t){H.draw(t,t[X]._labels)},beforeEvent:function(t,e){if(t[X]._listened)switch(e.type){case"mousemove":case"mouseout":Y(t,e);break;case"click":Z(t,e)}},afterEvent:function(t){var i,e,r,o,l,label,d,f=t[X],c=f._actives,h=f._actives=t.lastActive||[],x=n.arrayDiff(c,h);for(i=0,e=x.length;i<e;++i)if((l=x[i])[1])for(r=0,o=(d=l[0][X]||[]).length;r<o;++r)(label=d[r]).$context.active=1===l[1],label.update(label.$context);(f._dirty||x.length)&&(H.update(f._labels),tt(t)),delete f._dirty}};return t.plugins.register(et),et}(r(463))}}]);