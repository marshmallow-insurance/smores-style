import{R as p,r as g}from"./index-uCp2LrAq.js";import{p as b}from"./styled-components.browser.esm-Bmiumwae.js";import{B as d}from"./index-CdIuDNv2.js";import{C as w}from"./CheckBox-Dnx3ivqx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./focusOutline-BRfd_C63.js";import"./theme-BeIETfSH.js";import"./index-BJvyI_-D.js";import"./Text-CyPVEhU2.js";import"./polished.esm-DlUGb9xG.js";import"./index-DfzELUFi.js";import"./Icon-BayaxWfO.js";import"./id-CLSFndOA.js";function x(){var e="/home/runner/work/smores-react/smores-react/src/CheckBox/index.ts",l="2a996e52bf6a464b56f26b461438ab7285be2432",r=window,a="__coverage__",u={path:"/home/runner/work/smores-react/smores-react/src/CheckBox/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/smores-react/smores-react/src/CheckBox/index.ts"],names:[],mappings:"AAAA,cAAc;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2a996e52bf6a464b56f26b461438ab7285be2432"},n=r[a]||(r[a]={});(!n[e]||n[e].hash!==l)&&(n[e]=u);var m=n[e];return x=function(){return m},m}x();function t(){var e="/home/runner/work/smores-react/smores-react/src/CheckBoxGroup/CheckBoxGroup.tsx",l="7490f876b069e0bb814001fabaa920ef88176d24",r=window,a="__coverage__",u={path:"/home/runner/work/smores-react/smores-react/src/CheckBoxGroup/CheckBoxGroup.tsx",statementMap:{0:{start:{line:5,column:29},end:{line:19,column:3}},1:{start:{line:9,column:22},end:{line:19,column:3}},2:{start:{line:9,column:94},end:{line:19,column:1}},3:{start:{line:15,column:18},end:{line:15,column:35}},4:{start:{line:20,column:18},end:{line:24,column:1}},5:{start:{line:25,column:0},end:{line:25,column:14426}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:29},end:{line:5,column:30}},loc:{start:{line:9,column:22},end:{line:19,column:3}},line:9},1:{name:"(anonymous_1)",decl:{start:{line:9,column:68},end:{line:9,column:69}},loc:{start:{line:9,column:94},end:{line:19,column:1}},line:9},2:{name:"(anonymous_2)",decl:{start:{line:15,column:12},end:{line:15,column:13}},loc:{start:{line:15,column:18},end:{line:15,column:35}},line:15}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/smores-react/smores-react/src/CheckBoxGroup/CheckBoxGroup.tsx"],names:[],mappings:"AAAA,OAAA,WAAA;AACA,OAAA,YAAA;AAEA,SAAA,WAAA;AACA,SAAA,gBAAA;AAcA,aAAA,gBAAA,CAAA;AAAA,EACA;AAAA,EACA;AAAA,EACA,GAAA;AACA,MACA,oCAAA,iBACA,KAAA,IAAA,CAAA,SACA;AAAA,EAAA;AAAA;AAAA,IACA,KAAA,KAAA;AAAA,IACA,IAAA,OAAA,KAAA,EAAA;AAAA,IACA,SAAA,KAAA;AAAA,IACA,QAAA,MAAA,SAAA,KAAA,EAAA;AAAA,IACA,GAAA;AAAA;AAAA,EAEA,KAAA;AACA,CACA,CACA;AAGA,MAAA,YAAA,OAAA,GAAA;AAAA;AAAA;AAAA;AAAA;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7490f876b069e0bb814001fabaa920ef88176d24"},n=r[a]||(r[a]={});(!n[e]||n[e].hash!==l)&&(n[e]=u);var m=n[e];return t=function(){return m},m}t();t().s[0]++;const s=({list:e,onToggle:l,...r})=>(t().f[0]++,t().s[1]++,p.createElement(k,null,e.map(a=>(t().f[1]++,t().s[2]++,p.createElement(w,{key:a.id,id:String(a.id),checked:a.checked,toggle:()=>(t().f[2]++,t().s[3]++,l(a.id)),...r},a.label))))),k=(t().s[4]++,b(d)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`);t().s[5]++;s.__docgenInfo={description:"",methods:[],displayName:"CheckBoxGroup",props:{list:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number
  label: string
  checked: boolean
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"checked",value:{name:"boolean",required:!0}}]}}],raw:"Item[]"},description:""},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},m:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mx:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]}}]}}]},description:""},my:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},ml:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mr:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mt:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mb:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""}}};function v(){var e="/home/runner/work/smores-react/smores-react/src/CheckBoxGroup/index.ts",l="808458bc1c8e64eeb2be847c34a6d7293017833e",r=window,a="__coverage__",u={path:"/home/runner/work/smores-react/smores-react/src/CheckBoxGroup/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/smores-react/smores-react/src/CheckBoxGroup/index.ts"],names:[],mappings:"AAAA,cAAc;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"808458bc1c8e64eeb2be847c34a6d7293017833e"},n=r[a]||(r[a]={});(!n[e]||n[e].hash!==l)&&(n[e]=u);var m=n[e];return v=function(){return m},m}v();const y=[{id:0,label:"Apples",checked:!1},{id:1,label:"Oranges",checked:!1},{id:2,label:"Grapes",checked:!1},{id:3,label:"Bananas",checked:!1}],f=()=>{const[e,l]=g.useState(y),r=a=>{const u=[...e];u[a].checked=!e[a].checked,l(u)};return p.createElement(s,{list:e,onToggle:r})},K={title:"Checkbox Group",component:s},h=()=>p.createElement(f,null),i=h.bind({});var o,c,A;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:"() => <Group />",...(A=(c=i.parameters)==null?void 0:c.docs)==null?void 0:A.source}}};const O=["Default"];export{i as Default,O as __namedExportsOrder,K as default};
//# sourceMappingURL=CheckBoxGroup.stories-Bbj__VFJ.js.map