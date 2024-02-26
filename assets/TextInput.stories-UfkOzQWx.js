import{j as e,s as L}from"./styled-components.browser.esm-CJMx1vp9.js";import{n as i}from"./noop-BjFrJKj1.js";import{r as y}from"./index-BBkUAzwr.js";import{F as z}from"./Field-QYXr1SbZ.js";import{B as c}from"./Box-Dm5zCsW8.js";import{u as G}from"./id-CqcUMuGv.js";import{S as O,I as U,a as $}from"./CommonInput-BQEjHPWe.js";import{S as K}from"./SupportMessage-0tkjO_qC.js";import{T as W}from"./Text-m-KhGIht.js";import"./InternalField-BhgybMLs.js";import"./Icon-BsCxozQo.js";import"./theme-D50qMPxU.js";import"./polished.esm-D0h1-lPB.js";import"./isReactElement-DALlT1kK.js";import"./focusOutline-D9_3RTEn.js";const t=y.forwardRef(function({id:r,type:n="text",placeholder:s,name:l,value:x,error:j=!1,onBlur:N,onChange:I,onInputChange:b,disabled:f=!1,frontIcon:g,trailingIcon:C,fallbackStyle:H,...J},X){const T=G(r);return e.jsx(z,{...J,htmlFor:T,error:j,children:e.jsxs(c,{flex:!0,alignItems:"center",justifyContent:"flex-start",children:[g&&e.jsx(O,{disabled:f,render:g,color:"sesame"}),e.jsx(U,{disabled:f,type:n,id:T,name:l,ref:X,placeholder:s,value:x,error:j,frontIcon:g,fallbackStyle:H,autoComplete:"off",onChange:q=>{I&&I(q.currentTarget.value),b&&b(q)},onBlur:N}),C&&e.jsx($,{disabled:f,render:C,color:"sesame"})]})})});try{t.displayName="TextInput",t.__docgenInfo={description:"",displayName:"TextInput",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"time"'},{value:'"text"'},{value:'"tel"'},{value:'"email"'},{value:'"date"'},{value:'"password"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:null,description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},onChange:{defaultValue:null,description:`on change is required and on input optional
on input is required and on change optional`,name:"onChange",required:!1,type:{name:"((e: string) => void) | ((e: string) => void)"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((e: FormEvent<HTMLInputElement>) => void) | ((e: FormEvent<HTMLInputElement>) => void)"}}}}}catch{}const Q=[{id:"days",placeholder:"Enter name...",errorMsg:"This field is required",assistiveText:e.jsxs(e.Fragment,{children:["This is a description with a"," ",e.jsx("a",{href:"marshmallow.com",rel:"noopener noreferrer",target:"_blank",children:"link"}),"."]}),label:"First name",onChange:i,onInputChange:i,onBlur:i,value:""}],h=()=>{const[,a]=y.useState("");return e.jsx(c,{flex:!0,direction:"column",children:Q.map(({id:r,placeholder:n,errorMsg:s,label:l,assistiveText:x})=>e.jsxs(c,{flex:!0,direction:"column",mb:"32px",children:[e.jsx(M,{tag:"span",typo:"header-medium",children:"TextInput variations"}),e.jsx(o,{label:"Generic",children:e.jsx(t,{id:r,label:l,value:"",placeholder:n,error:!1,errorMsg:s,onChange:a})}),e.jsx(o,{label:"With label as title",children:e.jsx(t,{id:r,label:l,value:"",renderAsTitle:!0,placeholder:n,error:!1,errorMsg:s,onChange:a})}),e.jsx(o,{label:"Fallback",children:e.jsx(t,{id:r,label:l,value:"",placeholder:n,fallbackStyle:!0,error:!1,errorMsg:s,onChange:a})}),e.jsx(o,{label:"Disabled",children:e.jsx(t,{id:r,label:l,value:"",placeholder:n,disabled:!0,error:!1,errorMsg:s,onChange:a})}),e.jsx(o,{label:"Disabled Fallback",children:e.jsx(t,{id:r,label:l,value:"",placeholder:n,disabled:!0,onChange:a,fallbackStyle:!0})}),e.jsx(o,{label:"Required",children:e.jsx(t,{id:r,label:l,value:"",required:!0,placeholder:n,error:!1,errorMsg:s,onChange:a})}),e.jsx(o,{label:"Leading Icon",children:e.jsx(t,{id:r,label:l,frontIcon:"search",value:"",placeholder:n,error:!1,errorMsg:s,onChange:a})}),e.jsx(o,{label:"Trailing Icon",children:e.jsx(t,{id:r,label:l,trailingIcon:"car",value:"",placeholder:n,error:!1,errorMsg:s,onChange:a})}),e.jsx(o,{label:"Assistive text",children:e.jsx(t,{id:r,label:l,value:"",placeholder:n,assistiveText:"Some assistive text",error:!1,errorMsg:s,onChange:a})}),e.jsx(o,{label:"With label as title and assistive text with link",children:e.jsx(t,{id:r,label:l,value:"",renderAsTitle:!0,assistiveText:x,placeholder:n,error:!1,completed:!0,errorMsg:s,onChange:a})}),e.jsx(o,{label:"Completed",children:e.jsx(t,{id:r,label:l,value:"",placeholder:n,error:!1,completed:!0,errorMsg:s,onChange:a})}),e.jsx(o,{label:"As title",children:e.jsx(t,{id:r,label:l,value:"",renderAsTitle:!0,placeholder:n,error:!1,errorMsg:s,onChange:a})}),e.jsx(o,{label:"Error",children:e.jsx(t,{id:r,label:l,value:"",required:!0,placeholder:n,assistiveText:"Some assistive text",error:!0,errorMsg:s,onChange:a})}),e.jsx(o,{label:"React element error",children:e.jsx(t,{id:r,label:l,required:!0,value:"",placeholder:n,error:!0,errorMsg:e.jsx(K,{type:"warning",description:"error!!"}),onChange:a})}),e.jsx(o,{label:"Fallback Error",children:e.jsx(t,{id:r,label:l,required:!0,value:"",placeholder:n,fallbackStyle:!0,error:!0,errorMsg:s,onChange:a})})]},r))})},o=({label:a,children:r})=>e.jsxs(Y,{mt:"32px",children:[e.jsx(c,{width:"140px",children:e.jsx(W,{tag:"span",typo:"label-large",children:a})}),r]}),Y=L(c)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,Z="140px",M=L(W)`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 20px;
  margin-left: ${Z};
`;try{h.displayName="CollectionPage",h.__docgenInfo={description:"",displayName:"CollectionPage",props:{}}}catch{}const ee=()=>{const[a,r]=y.useState("");return e.jsx("form",{children:e.jsx(t,{id:"textInput",label:"label",name:"textInput",onChange:r,placeholder:"Placeholder",error:a.length>7,errorMsg:"Value is over 7 characters!",trailingIcon:"at",value:a})})},he={title:"Text Input",component:t,argTypes:{onChange:{action:"changed"}}},v=a=>e.jsx(t,{...a}),u=v.bind({});u.args={id:"textInput",name:"textInput",placeholder:"Placeholder text",onChange:i,onInputChange:i,onBlur:i};const p=v.bind({});p.args={id:"textInput",name:"textInput",placeholder:"Placeholder text",fallbackStyle:!0,onChange:i,onInputChange:i,onBlur:i};const d=v.bind({});d.args={id:"textInput",name:"textInput",placeholder:"Placeholder text",onChange:i,onInputChange:i,onBlur:i,type:"password"};const ye=h.bind({}),ae=()=>e.jsx(ee,{}),m=ae.bind({});var V,S,P;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:"(props: TextInputProps) => <TextInput {...props} />",...(P=(S=u.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var E,_,k;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:"(props: TextInputProps) => <TextInput {...props} />",...(k=(_=p.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var R,F,w;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:"(props: TextInputProps) => <TextInput {...props} />",...(w=(F=d.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var B,A,D;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:"() => <Container />",...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const ve=["Default","DefaultFallback","TypePassword","Collection","WorkingExample"];export{ye as Collection,u as Default,p as DefaultFallback,d as TypePassword,m as WorkingExample,ve as __namedExportsOrder,he as default};
