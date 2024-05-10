import{M as i}from"./Modal-BsfFMndG.js";import{r as n,R as e}from"./index-BBkUAzwr.js";import{I as u}from"./Icon-CArGiu8V.js";import{B as s}from"./Box-BsRHaABa.js";import{B as h}from"./Button-COwRCuNl.js";import{u as f}from"./styled-components.browser.esm-uaFiJyE8.js";import"./index-PqR-_bA4.js";import"./theme-D50qMPxU.js";import"./IconStrict-ChIiZO29.js";import"./polished.esm-DlUGb9xG.js";import"./focusOutline-DynQQMjx.js";import"./Text-rlZvdK6n.js";import"./bodyScrollLock.esm-DhkVtT7o.js";import"./Loader-CkjOWXSV.js";const l=t=>{const[r,d]=n.useState(!1),[a,c]=n.useState(!1),o=()=>{c(!a)},m=e.createElement(s,{onClick:()=>d(p=>!p)},e.createElement(u,{render:r?"collpase":"expand"}));return e.createElement(e.Fragment,null,e.createElement(i,{...t,rightPanel:m,showModal:a,handleClick:o,width:r?"500px":"300px"},e.createElement(w,{height:r?"500px":"200px"},"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it.")),e.createElement(h,{primary:!0,handleClick:o},"Show Modal with Mobile Drawer"))},w=f(s)`
  width: ${t=>t.width};
  transition: height 0.3s ease-in-out;
`;l.__docgenInfo={description:"",methods:[],displayName:"Container",props:{title:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},rightPanel:{required:!1,tsType:{name:"ReactNode"},description:""},showModal:{required:!1,tsType:{name:"boolean"},description:""},handleClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},drawer:{required:!1,tsType:{name:"boolean"},description:""},cross:{required:!1,tsType:{name:"boolean"},description:""},width:{required:!1,tsType:{name:"string"},description:""},containerClass:{required:!1,tsType:{name:"string"},description:""},portalContainer:{required:!1,tsType:{name:"union",raw:"Element | DocumentFragment",elements:[{name:"Element"},{name:"DocumentFragment"}]},description:""},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:""}}};const S={title:"Modal",component:i,argTypes:{handleClick:{action:"Callback - `handleClick`"},rightPanel:{type:{name:"ReactNode"},description:"Pass react nodes to display on the right side of the modal before the close button"}}},y=l.bind({});y.args={icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,closeOnOverlayClick:!1};const _=["Interactive"];export{y as Interactive,_ as __namedExportsOrder,S as default};