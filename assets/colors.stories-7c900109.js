import{j as s,a as r,s as i}from"./styled-components.browser.esm-7270970d.js";import{B as e}from"./Box-c55ea5dd.js";import{D as f}from"./Divider-b0139d2d.js";import{T as l}from"./Text-b0b7d73b.js";import{t as c}from"./theme-9a9bdd1b.js";import"./index-7c191284.js";import"./polished.esm-21e06810.js";import"./focusOutline-b985b9a2.js";import"./Icon-aa08702e.js";const x=["lollipop","marshmallowPink","bubblegum","fairyFloss"],b=["boba","liquorice","sesame","chia"],y=["custard","mascarpone","coconut","cream"],g=["spearmint","feijoa","blueberry","macaroon","pistachio","matcha","caramel","peanut","marzipan","oatmeal"],C=["strawberry","watermelon","apple","mint","lemon","sherbert","tangerine"],w=["compareTheMarket","confused","onfido","twitter","premfina","checkout","facebook","stripe","intercom","ravelin","rac","hometree"],T=({colorName:o})=>{const n=c.colors[o];return s(j,{width:"224px",children:[r(L,{colorName:o,width:"100%",pt:{custom:"50%"}}),r(f,{}),s(e,{px:"16px",py:{custom:4},children:[r(l,{tag:"span",typo:"base",children:o}),r(l,{tag:"span",typo:"base-xsmall",color:"sesame",children:n})]})]})},t=({title:o,colors:n})=>s(e,{width:"100%",children:[r(e,{mb:"16px",children:r(l,{tag:"span",typo:"header-small",children:o})}),r(P,{children:n.map(p=>r(T,{colorName:p},p))})]}),u=()=>s(B,{children:[r(t,{title:"Core primary",colors:x}),r(t,{title:"Core secondary",colors:b}),r(t,{title:"Core tertiary",colors:y}),r(t,{title:"Brand secondary",colors:g}),r(t,{title:"Traffic light",colors:C}),r(t,{title:"Third party brand",colors:w})]}),E={title:"Foundation/Colors",components:u},k=()=>r(u,{}),a=k.bind({}),P=i(e)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
`,B=i(e)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,j=i(e)`
  background-color: ${c.colors.cream};
  border: 1px solid ${c.colors.chia};
  border-radius: 8px;
  overflow: hidden;
`,L=i(e)`
  background-color: ${({colorName:o})=>c.colors[o]};
`;var d,m,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"() => <ColorsPage />",...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const M=["List"];export{a as List,M as __namedExportsOrder,E as default};
//# sourceMappingURL=colors.stories-7c900109.js.map
