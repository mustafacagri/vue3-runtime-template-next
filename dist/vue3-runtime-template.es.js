import{h as t}from"vue";var o=function(t,o,e){if(!o.hasOwnProperty(e)){var r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(o,e,r)}};export default{props:{template:String,parent:Object,templateProps:{type:Object,default:function(){return{}}}},render:function(){if(this.template){var e=this.parent||this.$parent,r=e.$data;void 0===r&&(r={});var n=e.$props;void 0===n&&(n={});var a=e.$options;void 0===a&&(a={});var p=a.components;void 0===p&&(p={});var i=a.computed;void 0===i&&(i={});var c=a.methods;void 0===c&&(c={});var s=this.$data;void 0===s&&(s={});var d=this.$props;void 0===d&&(d={});var v=this.$options;void 0===v&&(v={});var m=v.methods;void 0===m&&(m={});var f=v.computed;void 0===f&&(f={});var u=v.components;void 0===u&&(u={});var h={$data:{},$props:{},$options:{},components:{},computed:{},methods:{}};Object.keys(r).forEach(function(t){void 0===s[t]&&(h.$data[t]=r[t])}),Object.keys(n).forEach(function(t){void 0===d[t]&&(h.$props[t]=n[t])}),Object.keys(c).forEach(function(t){void 0===m[t]&&(h.methods[t]=c[t])}),Object.keys(i).forEach(function(t){void 0===f[t]&&(h.computed[t]=i[t])}),Object.keys(p).forEach(function(t){void 0===u[t]&&(h.components[t]=p[t])});var $=Object.keys(h.methods||{}),O=Object.keys(h.$data||{}),b=Object.keys(h.$props||{}),j=Object.keys(this.templateProps),y=O.concat(b).concat($).concat(j),k=(E=e,P={},$.forEach(function(t){return o(E,P,t)}),P),l=function(t){var e={};return t.forEach(function(t){t&&Object.getOwnPropertyNames(t).forEach(function(r){return o(t,e,r)})}),e}([h.$data,h.$props,k,this.templateProps]);return t({template:this.template||"<div></div>",props:y,computed:h.computed,components:h.components,provide:this.$parent.$.provides?this.$parent.$.provides:{}},Object.assign({},l))}var E,P}};
//# sourceMappingURL=vue3-runtime-template.es.js.map