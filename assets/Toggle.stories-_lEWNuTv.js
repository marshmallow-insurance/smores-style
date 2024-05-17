import{R as m,r as w}from"./index-uCp2LrAq.js";import{p as c}from"./styled-components.browser.esm-Bmiumwae.js";import{B as f}from"./index-CdIuDNv2.js";import{t as s}from"./theme-BeIETfSH.js";import{f as y}from"./focusOutline-BRfd_C63.js";import"./_commonjsHelpers-BosuxZz1.js";function n(){var e="/home/runner/work/smores-react/smores-react/src/Toggle/Toggle.tsx",l="df19e656704e6efcf29f55622ef67dea5e385c1f",A=window,t="__coverage__",i={path:"/home/runner/work/smores-react/smores-react/src/Toggle/Toggle.tsx",statementMap:{0:{start:{line:6,column:22},end:{line:27,column:1}},1:{start:{line:12,column:2},end:{line:26,column:56}},2:{start:{line:20,column:8},end:{line:22,column:9}},3:{start:{line:21,column:10},end:{line:21,column:21}},4:{start:{line:28,column:15},end:{line:39,column:1}},5:{start:{line:40,column:15},end:{line:68,column:1}},6:{start:{line:69,column:17},end:{line:80,column:1}},7:{start:{line:81,column:0},end:{line:81,column:14099}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:22},end:{line:6,column:23}},loc:{start:{line:11,column:6},end:{line:27,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:19,column:17},end:{line:19,column:18}},loc:{start:{line:19,column:24},end:{line:23,column:7}},line:19}},branchMap:{0:{loc:{start:{line:20,column:8},end:{line:22,column:9}},type:"if",locations:[{start:{line:20,column:8},end:{line:22,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:20}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/smores-react/smores-react/src/Toggle/Toggle.tsx"],names:[],mappings:"AAAA,OAAA,WAAA;AACA,OAAA,YAAA;AAEA,SAAA,WAAA;AACA,SAAA,aAAA;AACA,SAAA,oBAAA;AAYA,aAAA,SAAA,CAAA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA,GAAA;AACA,MAAA;AACA,SACA,oCAAA,UAAA,aAAA,SAAA,SAAA,IAAA,GAAA,eACA;AAAA,IAAA;AAAA;AAAA,MACA;AAAA,MACA,MAAA;AAAA,MACA;AAAA,MACA,UAAA;AAAA,MACA,WAAA,CAAA,MAAA;AACA,YAAA,EAAA,QAAA,SAAA;AACA,mBAAA;AAAA,QACA;AAAA,MACA;AAAA,MACA,cAAA;AAAA;AAAA,EACA,GACA,oCAAA,YAAA,CACA;AAEA;AAEA,MAAA,SAAA,OAAA,GAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAaA,MAAA,SAAA,OAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA,sBAOA,MAAA,OAAA,OAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA,wBAOA,MAAA,OAAA,QAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA,wBAUA,MAAA,OAAA,UAAA;AAAA;AAAA;AAAA;AAAA;AAMA,MAAA,WAAA,OAAA;AAAA,IACA,aAAA,EAAA,UAAA,qBAAA,MAAA,GAAA,CAAA,CAAA;AAAA;AAAA,gBAEA,MAAA;AAAA,wBACA,MAAA,OAAA,SAAA;AAAA;AAAA;AAAA;AAAA,gBAIA,MAAA;AAAA;AAAA;AAAA;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"df19e656704e6efcf29f55622ef67dea5e385c1f"},a=A[t]||(A[t]={});(!a[e]||a[e].hash!==l)&&(a[e]=i);var u=a[e];return n=function(){return u},u}n();n().s[0]++;const x=({id:e,checked:l,onToggle:A,...t})=>(n().f[0]++,n().s[1]++,m.createElement(k,{forwardedAs:"label",htmlFor:e,...t},m.createElement(C,{id:e,type:"checkbox",checked:l,onChange:A,onKeyDown:i=>{n().f[1]++,n().s[2]++,i.key==="Enter"?(n().b[0][0]++,n().s[3]++,A()):n().b[0][1]++},"aria-label":"toggle"}),m.createElement(p,null))),k=(n().s[4]++,c(f)`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 32px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`),p=(n().s[5]++,c.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${s.colors.oatmeal};
  border: none;
  border-radius: 28px;
  transition: 0.2s background-color;
  outline: none;

  &:hover {
    background-color: ${s.colors.marzipan};
  }

  &:before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: ${s.colors.mascarpone};
    transition: 0.2s transform;
    border-radius: 50%;
  }
`),C=(n().s[6]++,c.input`
  ${y({selector:`&:focus-visible + ${p}`})}

  &:checked + ${p} {
    background-color: ${s.colors.pistachio};
    border: none;
  }

  &:checked + ${p}:before {
    transform: translateX(24px);
  }
`);n().s[7]++;x.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{id:{required:!1,tsType:{name:"string"},description:"unique ID"},checked:{required:!0,tsType:{name:"boolean"},description:"checked flag"},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onToggle listener"},m:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mx:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]}}]}}]},description:""},my:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},ml:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mr:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mt:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mb:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""}}};function r(){var e="/home/runner/work/smores-react/smores-react/src/Toggle/storybook/Container.tsx",l="055f5d70db3d396b50f3e7de5e6b46c49d99fb89",A=window,t="__coverage__",i={path:"/home/runner/work/smores-react/smores-react/src/Toggle/storybook/Container.tsx",statementMap:{0:{start:{line:3,column:25},end:{line:13,column:1}},1:{start:{line:4,column:30},end:{line:4,column:45}},2:{start:{line:5,column:2},end:{line:12,column:4}},3:{start:{line:10,column:22},end:{line:10,column:40}},4:{start:{line:14,column:0},end:{line:14,column:90}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:25},end:{line:3,column:26}},loc:{start:{line:3,column:31},end:{line:13,column:1}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:10,column:16},end:{line:10,column:17}},loc:{start:{line:10,column:22},end:{line:10,column:40}},line:10}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/smores-react/smores-react/src/Toggle/storybook/Container.tsx"],names:[],mappings:"AAAA,OAAA,SAAA,gBAAA;AACA,SAAA,cAAA;AAEA,aAAA,YAAA,MAAA;AACA,QAAA,CAAA,QAAA,SAAA,IAAA,SAAA,KAAA;AAEA,SACA;AAAA,IAAA;AAAA;AAAA,MACA,IAAA;AAAA,MACA,SAAA;AAAA,MACA,UAAA,MAAA,UAAA,CAAA,MAAA;AAAA;AAAA,EACA;AAEA;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"055f5d70db3d396b50f3e7de5e6b46c49d99fb89"},a=A[t]||(A[t]={});(!a[e]||a[e].hash!==l)&&(a[e]=i);var u=a[e];return r=function(){return u},u}r();r().s[0]++;const b=()=>{r().f[0]++;const[e,l]=(r().s[1]++,w.useState(!1));return r().s[2]++,m.createElement(x,{id:"toggleId",checked:e,onToggle:()=>(r().f[1]++,r().s[3]++,l(!e))})};r().s[4]++;b.__docgenInfo={description:"",methods:[],displayName:"Container"};const j={title:"Toggle",component:x},h=()=>m.createElement(b,null),o=h.bind({});var g,v,d;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"() => <Container />",...(d=(v=o.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,j as default};
//# sourceMappingURL=Toggle.stories-_lEWNuTv.js.map
