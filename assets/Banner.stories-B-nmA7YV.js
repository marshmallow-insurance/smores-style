import{R as e,r as d}from"./index-BBkUAzwr.js";import{u as c,a as z}from"./styled-components.browser.esm-uaFiJyE8.js";import{B as t}from"./Box-BsRHaABa.js";import{B as u}from"./Button-COwRCuNl.js";import{T as w}from"./Text-rlZvdK6n.js";import{I as y}from"./Icon-CArGiu8V.js";import{u as N}from"./index-Bq5HI2zZ.js";import"./bodyScrollLock.esm-DhkVtT7o.js";import{t as v}from"./theme-D50qMPxU.js";import"./Loader-CkjOWXSV.js";import"./focusOutline-DynQQMjx.js";import"./polished.esm-DlUGb9xG.js";const x={upsell:{iconColor:"liquorice",backgroundColor:v.colors.marshmallowPink,textColor:"liquorice"},critical:{iconColor:"mascarpone",backgroundColor:v.colors.strawberry,textColor:"mascarpone"},general:{iconColor:"mascarpone",backgroundColor:v.colors.liquorice,textColor:"mascarpone"},success:{iconColor:"mascarpone",backgroundColor:v.colors.apple,textColor:"mascarpone"}},M=({type:a,autoCloseTime:r=4,id:n,message:i,topOffset:f,exploreAction:s,showExploreText:g,showExploreIcon:l,leadingIcon:o,canManuallyClose:O,showCloseIcon:R,deleteBanner:k,noTimeout:S})=>{const $=()=>{if(!S&&a!=="critical")return k(n)};N(()=>$(),r*1e3);const b=x[a].textColor,h=x[a].iconColor;return e.createElement(G,{p:"24px",mt:{custom:f},key:n,flex:!0,justifyContent:"space-between",$type:a},e.createElement(t,{flex:!0,alignItems:"center"},o&&e.createElement(y,{mr:"12px",render:o,size:24,color:h}),e.createElement(w,{typo:"headline-small",color:b},i)),e.createElement(t,{flex:!0,alignItems:"center"},O&&e.createElement(E,{onClick:()=>k(n),"aria-label":`close banner ${i}`},R?e.createElement(y,{render:"cross",size:16,color:h}):e.createElement(B,{tag:"span",typo:"desc-medium",color:b},"Dismiss")),s&&e.createElement(E,{onClick:s,"aria-label":`cta ${i}`},e.createElement(t,{flex:!0,alignItems:"center"},g&&e.createElement(B,{ml:"12px",tag:"span",typo:"desc-medium",color:b},"Explore"),l&&e.createElement(y,{render:"arrow",ml:"12px",size:24,color:h,rotate:180})))))},G=c(t)(({$type:a})=>z`
    border-radius: 0px 0px 16px 16px;
    background-color: ${x[a].backgroundColor};
  `),E=c.button`
  cursor: pointer;
`,B=c(w)`
  text-decoration: underline;
`;M.__docgenInfo={description:"",methods:[],displayName:"BannerItem",props:{id:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'upsell' | 'critical' | 'general' | 'success'",elements:[{name:"literal",value:"'upsell'"},{name:"literal",value:"'critical'"},{name:"literal",value:"'general'"},{name:"literal",value:"'success'"}]},description:""},topOffset:{required:!0,tsType:{name:"string"},description:""},exploreAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showExploreText:{required:!1,tsType:{name:"boolean"},description:""},showExploreIcon:{required:!1,tsType:{name:"boolean"},description:""},autoCloseTime:{required:!1,tsType:{name:"union",raw:"4 | 5 | 6 | 7 | 8 | 9 | 10",elements:[{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"}]},description:"",defaultValue:{value:"4",computed:!1}},leadingIcon:{required:!1,tsType:{name:"union",raw:"keyof typeof iconList",elements:[{name:"literal",value:"'aa-inverted'"},{name:"literal",value:"'accidental-damage'"},{name:"literal",value:"'account-breakdown'"},{name:"literal",value:"'account-mlp'"},{name:"literal",value:"'activity-clipboard'"},{name:"literal",value:"'add-ons'"},{name:"literal",value:"'address-mta'"},{name:"literal",value:"'album-audio'"},{name:"literal",value:"'alert-engine'"},{name:"literal",value:"'apple-pay'"},{name:"literal",value:"'approved-file'"},{name:"literal",value:"'breakdown-alt'"},{name:"literal",value:"'cancel-bw'"},{name:"literal",value:"'car-mta'"},{name:"literal",value:"'car-repairs'"},{name:"literal",value:"'car-replacement'"},{name:"literal",value:"'car-usage'"},{name:"literal",value:"'chat-bubble'"},{name:"literal",value:"'checkout-with-text'"},{name:"literal",value:"'circle-tick'"},{name:"literal",value:"'claim-line'"},{name:"literal",value:"'clipboard-check'"},{name:"literal",value:"'close-panel'"},{name:"literal",value:"'confused-blue'"},{name:"literal",value:"'contact-email'"},{name:"literal",value:"'dashboard-high'"},{name:"literal",value:"'direct-debit'"},{name:"literal",value:"'doc-download'"},{name:"literal",value:"'doc-upload'"},{name:"literal",value:"'edit-contact'"},{name:"literal",value:"'edit-outline'"},{name:"literal",value:"'email-filled'"},{name:"literal",value:"'falling-items'"},{name:"literal",value:"'file-badge-2'"},{name:"literal",value:"'file-cabinet'"},{name:"literal",value:"'fraud-alert'"},{name:"literal",value:"'freezer-food'"},{name:"literal",value:"'google-play-badge'"},{name:"literal",value:"'help-aboutus'"},{name:"literal",value:"'help-buypolicy'"},{name:"literal",value:"'help-center'"},{name:"literal",value:"'help-idcheck'"},{name:"literal",value:"'help-manage-policy'"},{name:"literal",value:"'help-ncd'"},{name:"literal",value:"'help-verification'"},{name:"literal",value:"'home-excluded'"},{name:"literal",value:"'house-tree'"},{name:"literal",value:"'ios-store-badge'"},{name:"literal",value:"'live-chat'"},{name:"literal",value:"'live-chat2'"},{name:"literal",value:"'log-out'"},{name:"literal",value:"'manage-drivers'"},{name:"literal",value:"'manage-policy'"},{name:"literal",value:"'maximise-window'"},{name:"literal",value:"'minus-circle'"},{name:"literal",value:"'money-bag'"},{name:"literal",value:"'money-heart'"},{name:"literal",value:"'more-dots'"},{name:"literal",value:"'new-window'"},{name:"literal",value:"'no-excess'"},{name:"literal",value:"'open-panel'"},{name:"literal",value:"'out-of-home'"},{name:"literal",value:"'padlock-outline'"},{name:"literal",value:"'phone-filled'"},{name:"literal",value:"'phone-outline'"},{name:"literal",value:"'pin-code'"},{name:"literal",value:"'plus-circle'"},{name:"literal",value:"'policy-details'"},{name:"literal",value:"'policy-doc'"},{name:"literal",value:"'policy-docs'"},{name:"literal",value:"'pound-bold'"},{name:"literal",value:"'pound-filled-circle'"},{name:"literal",value:"'pound-medium'"},{name:"literal",value:"'pound-outline'"},{name:"literal",value:"'pound-regular'"},{name:"literal",value:"'question-help'"},{name:"literal",value:"'refer-a-friend'"},{name:"literal",value:"'reg-plate'"},{name:"literal",value:"'renewal-line'"},{name:"literal",value:"'repeat-charge'"},{name:"literal",value:"'schedule-quote'"},{name:"literal",value:"'send-message'"},{name:"literal",value:"'shield-check'"},{name:"literal",value:"'thumbs-up'"},{name:"literal",value:"'tow-truck'"},{name:"literal",value:"'trace-and-access'"},{name:"literal",value:"'up-down'"},{name:"literal",value:"'upload-documents'"},{name:"literal",value:"'upload-email'"},{name:"literal",value:"'wheel-flat'"},{name:"literal",value:"'windscreen-repair'"},{name:"literal",value:"'windscreen-replacement'"},{name:"literal",value:"aa"},{name:"literal",value:"addons"},{name:"literal",value:"alert"},{name:"literal",value:"amex"},{name:"literal",value:"arrow"},{name:"literal",value:"at"},{name:"literal",value:"axa"},{name:"literal",value:"bank"},{name:"literal",value:"basket"},{name:"literal",value:"bicycle"},{name:"literal",value:"boost"},{name:"literal",value:"breakdown"},{name:"literal",value:"briefcase"},{name:"literal",value:"burger"},{name:"literal",value:"bullets"},{name:"literal",value:"calendar"},{name:"literal",value:"camera"},{name:"literal",value:"cancel"},{name:"literal",value:"car"},{name:"literal",value:"card"},{name:"literal",value:"caret"},{name:"literal",value:"'caret-up'"},{name:"literal",value:"charge"},{name:"literal",value:"chat"},{name:"literal",value:"checkout"},{name:"literal",value:"city"},{name:"literal",value:"claim"},{name:"literal",value:"clipboard"},{name:"literal",value:"clock"},{name:"literal",value:"collpase"},{name:"literal",value:"confused"},{name:"literal",value:"copy"},{name:"literal",value:"crop"},{name:"literal",value:"cross"},{name:"literal",value:"download"},{name:"literal",value:"earth"},{name:"literal",value:"edit"},{name:"literal",value:"engine"},{name:"literal",value:"europe"},{name:"literal",value:"excluded"},{name:"literal",value:"expand"},{name:"literal",value:"facebook"},{name:"literal",value:"fence"},{name:"literal",value:"file"},{name:"literal",value:"filter"},{name:"literal",value:"fire"},{name:"literal",value:"flag"},{name:"literal",value:"folder"},{name:"literal",value:"fuel"},{name:"literal",value:"globe"},{name:"literal",value:"gpay"},{name:"literal",value:"house"},{name:"literal",value:"id"},{name:"literal",value:"inbox"},{name:"literal",value:"included"},{name:"literal",value:"info"},{name:"literal",value:"injury"},{name:"literal",value:"instagram"},{name:"literal",value:"intercom"},{name:"literal",value:"intercom2"},{name:"literal",value:"iphone"},{name:"literal",value:"jewellery"},{name:"literal",value:"key"},{name:"literal",value:"laptop"},{name:"literal",value:"leaks"},{name:"literal",value:"lightbulb"},{name:"literal",value:"link"},{name:"literal",value:"linkedin"},{name:"literal",value:"location"},{name:"literal",value:"marshmallow"},{name:"literal",value:"mastercard"},{name:"literal",value:"maximise"},{name:"literal",value:"medical"},{name:"literal",value:"minimise"},{name:"literal",value:"minus"},{name:"literal",value:"mulsanne"},{name:"literal",value:"notes"},{name:"literal",value:"notification"},{name:"literal",value:"onfido"},{name:"literal",value:"other"},{name:"literal",value:"padlock"},{name:"literal",value:"people"},{name:"literal",value:"person"},{name:"literal",value:"photo"},{name:"literal",value:"plus"},{name:"literal",value:"policy"},{name:"literal",value:"premfina"},{name:"literal",value:"profile"},{name:"literal",value:"prohibited"},{name:"literal",value:"property"},{name:"literal",value:"rac"},{name:"literal",value:"ravelin"},{name:"literal",value:"refund"},{name:"literal",value:"renewal"},{name:"literal",value:"return"},{name:"literal",value:"search"},{name:"literal",value:"security"},{name:"literal",value:"settings"},{name:"literal",value:"shield"},{name:"literal",value:"shopping"},{name:"literal",value:"sofa"},{name:"literal",value:"stack"},{name:"literal",value:"storm"},{name:"literal",value:"stripe"},{name:"literal",value:"subsidence"},{name:"literal",value:"theft"},{name:"literal",value:"tick"},{name:"literal",value:"training"},{name:"literal",value:"trash"},{name:"literal",value:"twitter"},{name:"literal",value:"upload"},{name:"literal",value:"vandalism"},{name:"literal",value:"village"},{name:"literal",value:"visa"},{name:"literal",value:"warning"},{name:"literal",value:"watch"},{name:"literal",value:"wave"},{name:"literal",value:"wellbeing"},{name:"literal",value:"windscreen"}]},description:""},canManuallyClose:{required:!1,tsType:{name:"boolean"},description:""},showCloseIcon:{required:!1,tsType:{name:"boolean"},description:""},noTimeout:{required:!1,tsType:{name:"boolean"},description:""},deleteBanner:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const _=d.createContext({addBanner:()=>{throw new Error("Please add the BannerContainer to your application")}}),j=()=>d.useContext(_),C=({children:a})=>{let r=0;const[n,i]=d.useState([]),f=d.useCallback(()=>{const l=`MM_BANNER_${r}`;return r++,l},[r]),s=l=>{const o={...l,id:f()};i([o])},g=l=>{i(n.filter(o=>o.id!==l))};return e.createElement(_.Provider,{value:{addBanner:s}},a,e.createElement(A,null,n.map(l=>e.createElement(M,{key:l.id,...l,deleteBanner:g}))))},A=c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99;
`;C.__docgenInfo={description:"",methods:[],displayName:"BannerContainer",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const D=()=>{const{addBanner:a}=j();return{addBanner:a}},le={title:"BannerContainer",component:C},P=()=>{const{addBanner:a}=D();return e.createElement(t,null,e.createElement(m,{label:"Generic"},e.createElement(u,{primary:!0,onClick:()=>{a({type:"general",topOffset:"64px",leadingIcon:"wellbeing",message:"Free insurance for 1 month for all our customers",exploreAction:()=>{},showExploreText:!0,canManuallyClose:!0})}},"General banner")),e.createElement(m,{label:"Upsell"},e.createElement(u,{primary:!0,onClick:()=>{a({type:"upsell",topOffset:"64px",leadingIcon:"circle-tick",message:"Get up to £19.34 off your plan today",exploreAction:()=>{},showExploreIcon:!0})}},"Upsell banner")),e.createElement(m,{label:"Success"},e.createElement(u,{primary:!0,onClick:()=>{a({type:"success",topOffset:"64px",leadingIcon:"circle-tick",message:"Marshmallow Miles discount applied"})}},"Success banner")),e.createElement(m,{label:"Critical"},e.createElement(u,{primary:!0,onClick:()=>{a({type:"critical",topOffset:"64px",leadingIcon:"card",message:"Your card needs to be updated",canManuallyClose:!0})}},"Critical banner")),e.createElement(m,{label:"Success (do not auto close)"},e.createElement(u,{primary:!0,onClick:()=>{a({type:"success",topOffset:"64px",leadingIcon:"circle-tick",message:"Marshmallow Miles discount applied (no timeout)",noTimeout:!0})}},"Success banner (no timeout)")))},U=()=>e.createElement(e.Fragment,null,e.createElement(C,null,e.createElement(P,null))),p=U.bind({}),m=({label:a,children:r})=>e.createElement(W,{mt:"16px"},e.createElement(t,{width:"140px"},e.createElement(w,{tag:"span",typo:"label-large"},a)),r),W=c(t)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;var T,I,q;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <BannerContainer>
        <ChildComponent />
      </BannerContainer>
    </>;
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const re=["Default"];export{p as Default,re as __namedExportsOrder,le as default};