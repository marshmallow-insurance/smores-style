import{r as E,R as e}from"./index-BBkUAzwr.js";import{n as b}from"./noop-BjFrJKj1.js";import{u as w}from"./styled-components.browser.esm-uaFiJyE8.js";import{B as f}from"./Box-BsRHaABa.js";import{I as B}from"./Icon-CArGiu8V.js";import{F as ae}from"./Field-CUeDI5yM.js";import{S as le,I as ne,a as re}from"./CommonInput-BXZTxuPw.js";import{u as te}from"./id-CqcUMuGv.js";import{S as ie}from"./SupportMessage-BsklUBj5.js";import{T as z}from"./Text-rlZvdK6n.js";import"./theme-D50qMPxU.js";import"./InternalField-judPIkf3.js";import"./polished.esm-DlUGb9xG.js";import"./isReactElement-DALlT1kK.js";import"./focusOutline-DynQQMjx.js";const r=E.forwardRef(function({id:l,type:t="number",placeholder:u,name:i,value:h,onChange:o,onInputChange:q,onBlur:Y,min:s=-999999,max:v=999999,step:c=0,disabled:d=!1,error:T=!1,frontIcon:k,trailingIcon:P,fallbackStyle:G,...M},O){const S=te(l),I=n=>!(s&&n<s||v&&n>v),V=n=>Math.round(n*100)/100,J=n=>s&&n<s?s:v&&n>v?v:n,K=n=>{if(o===void 0)return;if(n==="")o(n);else{const Z=Number(n),ee=J(Z);o(ee)}},Q=n=>{if(o===void 0)return;n.preventDefault();const p=Number(h)+c;I(p)&&o(V(p))},X=n=>{if(o===void 0)return;n.preventDefault();const p=Number(h)-c;I(p)&&o(V(p))};return e.createElement(ae,{...M,htmlFor:S,error:T},e.createElement(f,{flex:!0,alignItems:"center",justifyContent:"flex-start"},k&&e.createElement(le,{$disabled:d,render:k,color:"sesame"}),e.createElement(ne,{ref:O,$error:T,disabled:d,type:t,id:S,name:i,placeholder:u,value:h,$frontIcon:k,step:c,$fallbackStyle:G,onChange:n=>{o&&K(n.currentTarget.value),q&&q(n)},onBlur:Y}),o&&c>0&&e.createElement(ue,null,e.createElement(j,{onClick:Q,disabled:d},e.createElement(B,{render:"caret",rotate:180,color:"sesame",size:24})),e.createElement(j,{onClick:X,disabled:d},e.createElement(B,{render:"caret",color:"sesame",size:24}))),P&&!c&&e.createElement(re,{$disabled:d,render:P,color:"sesame"})))}),ue=w.div`
  position: relative;
  display: flex;
  right: 58px;
  margin-right: -58px;
`,j=w.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: ${({disabled:a})=>a?"not-allowed":"pointer"};
`;r.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{m:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mx:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]}}]}}]},description:""},my:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},ml:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mr:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mt:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mb:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},renderAsTitle:{required:!1,tsType:{name:"boolean"},description:""},assistiveText:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMsg:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},completed:{required:!1,tsType:{name:"boolean"},description:""},frontIcon:{required:!1,tsType:{name:"union",raw:"keyof typeof iconList",elements:[{name:"literal",value:"'aa-inverted'"},{name:"literal",value:"'accidental-damage'"},{name:"literal",value:"'account-breakdown'"},{name:"literal",value:"'account-mlp'"},{name:"literal",value:"'activity-clipboard'"},{name:"literal",value:"'add-ons'"},{name:"literal",value:"'address-mta'"},{name:"literal",value:"'album-audio'"},{name:"literal",value:"'alert-engine'"},{name:"literal",value:"'apple-pay'"},{name:"literal",value:"'approved-file'"},{name:"literal",value:"'breakdown-alt'"},{name:"literal",value:"'cancel-bw'"},{name:"literal",value:"'car-mta'"},{name:"literal",value:"'car-repairs'"},{name:"literal",value:"'car-replacement'"},{name:"literal",value:"'car-usage'"},{name:"literal",value:"'chat-bubble'"},{name:"literal",value:"'checkout-with-text'"},{name:"literal",value:"'circle-tick'"},{name:"literal",value:"'claim-line'"},{name:"literal",value:"'clipboard-check'"},{name:"literal",value:"'close-panel'"},{name:"literal",value:"'confused-blue'"},{name:"literal",value:"'contact-email'"},{name:"literal",value:"'dashboard-high'"},{name:"literal",value:"'direct-debit'"},{name:"literal",value:"'doc-download'"},{name:"literal",value:"'doc-upload'"},{name:"literal",value:"'edit-contact'"},{name:"literal",value:"'edit-outline'"},{name:"literal",value:"'email-filled'"},{name:"literal",value:"'falling-items'"},{name:"literal",value:"'file-badge-2'"},{name:"literal",value:"'file-cabinet'"},{name:"literal",value:"'fraud-alert'"},{name:"literal",value:"'freezer-food'"},{name:"literal",value:"'google-play-badge'"},{name:"literal",value:"'help-aboutus'"},{name:"literal",value:"'help-buypolicy'"},{name:"literal",value:"'help-center'"},{name:"literal",value:"'help-idcheck'"},{name:"literal",value:"'help-manage-policy'"},{name:"literal",value:"'help-ncd'"},{name:"literal",value:"'help-verification'"},{name:"literal",value:"'home-excluded'"},{name:"literal",value:"'house-tree'"},{name:"literal",value:"'ios-store-badge'"},{name:"literal",value:"'live-chat'"},{name:"literal",value:"'live-chat2'"},{name:"literal",value:"'log-out'"},{name:"literal",value:"'manage-drivers'"},{name:"literal",value:"'manage-policy'"},{name:"literal",value:"'maximise-window'"},{name:"literal",value:"'minus-circle'"},{name:"literal",value:"'money-bag'"},{name:"literal",value:"'money-heart'"},{name:"literal",value:"'more-dots'"},{name:"literal",value:"'new-window'"},{name:"literal",value:"'no-excess'"},{name:"literal",value:"'open-panel'"},{name:"literal",value:"'out-of-home'"},{name:"literal",value:"'padlock-outline'"},{name:"literal",value:"'phone-filled'"},{name:"literal",value:"'phone-outline'"},{name:"literal",value:"'pin-code'"},{name:"literal",value:"'plus-circle'"},{name:"literal",value:"'policy-details'"},{name:"literal",value:"'policy-doc'"},{name:"literal",value:"'policy-docs'"},{name:"literal",value:"'pound-bold'"},{name:"literal",value:"'pound-filled-circle'"},{name:"literal",value:"'pound-medium'"},{name:"literal",value:"'pound-outline'"},{name:"literal",value:"'pound-regular'"},{name:"literal",value:"'question-help'"},{name:"literal",value:"'refer-a-friend'"},{name:"literal",value:"'reg-plate'"},{name:"literal",value:"'renewal-line'"},{name:"literal",value:"'repeat-charge'"},{name:"literal",value:"'schedule-quote'"},{name:"literal",value:"'send-message'"},{name:"literal",value:"'shield-check'"},{name:"literal",value:"'thumbs-up'"},{name:"literal",value:"'tow-truck'"},{name:"literal",value:"'trace-and-access'"},{name:"literal",value:"'up-down'"},{name:"literal",value:"'upload-documents'"},{name:"literal",value:"'upload-email'"},{name:"literal",value:"'wheel-flat'"},{name:"literal",value:"'windscreen-repair'"},{name:"literal",value:"'windscreen-replacement'"},{name:"literal",value:"aa"},{name:"literal",value:"addons"},{name:"literal",value:"alert"},{name:"literal",value:"amex"},{name:"literal",value:"arrow"},{name:"literal",value:"at"},{name:"literal",value:"axa"},{name:"literal",value:"bank"},{name:"literal",value:"basket"},{name:"literal",value:"bicycle"},{name:"literal",value:"boost"},{name:"literal",value:"breakdown"},{name:"literal",value:"briefcase"},{name:"literal",value:"burger"},{name:"literal",value:"bullets"},{name:"literal",value:"calendar"},{name:"literal",value:"camera"},{name:"literal",value:"cancel"},{name:"literal",value:"car"},{name:"literal",value:"card"},{name:"literal",value:"caret"},{name:"literal",value:"'caret-up'"},{name:"literal",value:"charge"},{name:"literal",value:"chat"},{name:"literal",value:"checkout"},{name:"literal",value:"city"},{name:"literal",value:"claim"},{name:"literal",value:"clipboard"},{name:"literal",value:"clock"},{name:"literal",value:"collpase"},{name:"literal",value:"confused"},{name:"literal",value:"copy"},{name:"literal",value:"crop"},{name:"literal",value:"cross"},{name:"literal",value:"download"},{name:"literal",value:"earth"},{name:"literal",value:"edit"},{name:"literal",value:"engine"},{name:"literal",value:"europe"},{name:"literal",value:"excluded"},{name:"literal",value:"expand"},{name:"literal",value:"facebook"},{name:"literal",value:"fence"},{name:"literal",value:"file"},{name:"literal",value:"filter"},{name:"literal",value:"fire"},{name:"literal",value:"flag"},{name:"literal",value:"folder"},{name:"literal",value:"fuel"},{name:"literal",value:"globe"},{name:"literal",value:"gpay"},{name:"literal",value:"house"},{name:"literal",value:"id"},{name:"literal",value:"inbox"},{name:"literal",value:"included"},{name:"literal",value:"info"},{name:"literal",value:"injury"},{name:"literal",value:"instagram"},{name:"literal",value:"intercom"},{name:"literal",value:"intercom2"},{name:"literal",value:"iphone"},{name:"literal",value:"jewellery"},{name:"literal",value:"key"},{name:"literal",value:"laptop"},{name:"literal",value:"leaks"},{name:"literal",value:"lightbulb"},{name:"literal",value:"link"},{name:"literal",value:"linkedin"},{name:"literal",value:"location"},{name:"literal",value:"marshmallow"},{name:"literal",value:"mastercard"},{name:"literal",value:"maximise"},{name:"literal",value:"medical"},{name:"literal",value:"minimise"},{name:"literal",value:"minus"},{name:"literal",value:"mulsanne"},{name:"literal",value:"notes"},{name:"literal",value:"notification"},{name:"literal",value:"onfido"},{name:"literal",value:"other"},{name:"literal",value:"padlock"},{name:"literal",value:"people"},{name:"literal",value:"person"},{name:"literal",value:"photo"},{name:"literal",value:"plus"},{name:"literal",value:"policy"},{name:"literal",value:"premfina"},{name:"literal",value:"profile"},{name:"literal",value:"prohibited"},{name:"literal",value:"property"},{name:"literal",value:"rac"},{name:"literal",value:"ravelin"},{name:"literal",value:"refund"},{name:"literal",value:"renewal"},{name:"literal",value:"return"},{name:"literal",value:"search"},{name:"literal",value:"security"},{name:"literal",value:"settings"},{name:"literal",value:"shield"},{name:"literal",value:"shopping"},{name:"literal",value:"sofa"},{name:"literal",value:"stack"},{name:"literal",value:"storm"},{name:"literal",value:"stripe"},{name:"literal",value:"subsidence"},{name:"literal",value:"theft"},{name:"literal",value:"tick"},{name:"literal",value:"training"},{name:"literal",value:"trash"},{name:"literal",value:"twitter"},{name:"literal",value:"upload"},{name:"literal",value:"vandalism"},{name:"literal",value:"village"},{name:"literal",value:"visa"},{name:"literal",value:"warning"},{name:"literal",value:"watch"},{name:"literal",value:"wave"},{name:"literal",value:"wellbeing"},{name:"literal",value:"windscreen"}]},description:""},trailingIcon:{required:!1,tsType:{name:"union",raw:"keyof typeof iconList",elements:[{name:"literal",value:"'aa-inverted'"},{name:"literal",value:"'accidental-damage'"},{name:"literal",value:"'account-breakdown'"},{name:"literal",value:"'account-mlp'"},{name:"literal",value:"'activity-clipboard'"},{name:"literal",value:"'add-ons'"},{name:"literal",value:"'address-mta'"},{name:"literal",value:"'album-audio'"},{name:"literal",value:"'alert-engine'"},{name:"literal",value:"'apple-pay'"},{name:"literal",value:"'approved-file'"},{name:"literal",value:"'breakdown-alt'"},{name:"literal",value:"'cancel-bw'"},{name:"literal",value:"'car-mta'"},{name:"literal",value:"'car-repairs'"},{name:"literal",value:"'car-replacement'"},{name:"literal",value:"'car-usage'"},{name:"literal",value:"'chat-bubble'"},{name:"literal",value:"'checkout-with-text'"},{name:"literal",value:"'circle-tick'"},{name:"literal",value:"'claim-line'"},{name:"literal",value:"'clipboard-check'"},{name:"literal",value:"'close-panel'"},{name:"literal",value:"'confused-blue'"},{name:"literal",value:"'contact-email'"},{name:"literal",value:"'dashboard-high'"},{name:"literal",value:"'direct-debit'"},{name:"literal",value:"'doc-download'"},{name:"literal",value:"'doc-upload'"},{name:"literal",value:"'edit-contact'"},{name:"literal",value:"'edit-outline'"},{name:"literal",value:"'email-filled'"},{name:"literal",value:"'falling-items'"},{name:"literal",value:"'file-badge-2'"},{name:"literal",value:"'file-cabinet'"},{name:"literal",value:"'fraud-alert'"},{name:"literal",value:"'freezer-food'"},{name:"literal",value:"'google-play-badge'"},{name:"literal",value:"'help-aboutus'"},{name:"literal",value:"'help-buypolicy'"},{name:"literal",value:"'help-center'"},{name:"literal",value:"'help-idcheck'"},{name:"literal",value:"'help-manage-policy'"},{name:"literal",value:"'help-ncd'"},{name:"literal",value:"'help-verification'"},{name:"literal",value:"'home-excluded'"},{name:"literal",value:"'house-tree'"},{name:"literal",value:"'ios-store-badge'"},{name:"literal",value:"'live-chat'"},{name:"literal",value:"'live-chat2'"},{name:"literal",value:"'log-out'"},{name:"literal",value:"'manage-drivers'"},{name:"literal",value:"'manage-policy'"},{name:"literal",value:"'maximise-window'"},{name:"literal",value:"'minus-circle'"},{name:"literal",value:"'money-bag'"},{name:"literal",value:"'money-heart'"},{name:"literal",value:"'more-dots'"},{name:"literal",value:"'new-window'"},{name:"literal",value:"'no-excess'"},{name:"literal",value:"'open-panel'"},{name:"literal",value:"'out-of-home'"},{name:"literal",value:"'padlock-outline'"},{name:"literal",value:"'phone-filled'"},{name:"literal",value:"'phone-outline'"},{name:"literal",value:"'pin-code'"},{name:"literal",value:"'plus-circle'"},{name:"literal",value:"'policy-details'"},{name:"literal",value:"'policy-doc'"},{name:"literal",value:"'policy-docs'"},{name:"literal",value:"'pound-bold'"},{name:"literal",value:"'pound-filled-circle'"},{name:"literal",value:"'pound-medium'"},{name:"literal",value:"'pound-outline'"},{name:"literal",value:"'pound-regular'"},{name:"literal",value:"'question-help'"},{name:"literal",value:"'refer-a-friend'"},{name:"literal",value:"'reg-plate'"},{name:"literal",value:"'renewal-line'"},{name:"literal",value:"'repeat-charge'"},{name:"literal",value:"'schedule-quote'"},{name:"literal",value:"'send-message'"},{name:"literal",value:"'shield-check'"},{name:"literal",value:"'thumbs-up'"},{name:"literal",value:"'tow-truck'"},{name:"literal",value:"'trace-and-access'"},{name:"literal",value:"'up-down'"},{name:"literal",value:"'upload-documents'"},{name:"literal",value:"'upload-email'"},{name:"literal",value:"'wheel-flat'"},{name:"literal",value:"'windscreen-repair'"},{name:"literal",value:"'windscreen-replacement'"},{name:"literal",value:"aa"},{name:"literal",value:"addons"},{name:"literal",value:"alert"},{name:"literal",value:"amex"},{name:"literal",value:"arrow"},{name:"literal",value:"at"},{name:"literal",value:"axa"},{name:"literal",value:"bank"},{name:"literal",value:"basket"},{name:"literal",value:"bicycle"},{name:"literal",value:"boost"},{name:"literal",value:"breakdown"},{name:"literal",value:"briefcase"},{name:"literal",value:"burger"},{name:"literal",value:"bullets"},{name:"literal",value:"calendar"},{name:"literal",value:"camera"},{name:"literal",value:"cancel"},{name:"literal",value:"car"},{name:"literal",value:"card"},{name:"literal",value:"caret"},{name:"literal",value:"'caret-up'"},{name:"literal",value:"charge"},{name:"literal",value:"chat"},{name:"literal",value:"checkout"},{name:"literal",value:"city"},{name:"literal",value:"claim"},{name:"literal",value:"clipboard"},{name:"literal",value:"clock"},{name:"literal",value:"collpase"},{name:"literal",value:"confused"},{name:"literal",value:"copy"},{name:"literal",value:"crop"},{name:"literal",value:"cross"},{name:"literal",value:"download"},{name:"literal",value:"earth"},{name:"literal",value:"edit"},{name:"literal",value:"engine"},{name:"literal",value:"europe"},{name:"literal",value:"excluded"},{name:"literal",value:"expand"},{name:"literal",value:"facebook"},{name:"literal",value:"fence"},{name:"literal",value:"file"},{name:"literal",value:"filter"},{name:"literal",value:"fire"},{name:"literal",value:"flag"},{name:"literal",value:"folder"},{name:"literal",value:"fuel"},{name:"literal",value:"globe"},{name:"literal",value:"gpay"},{name:"literal",value:"house"},{name:"literal",value:"id"},{name:"literal",value:"inbox"},{name:"literal",value:"included"},{name:"literal",value:"info"},{name:"literal",value:"injury"},{name:"literal",value:"instagram"},{name:"literal",value:"intercom"},{name:"literal",value:"intercom2"},{name:"literal",value:"iphone"},{name:"literal",value:"jewellery"},{name:"literal",value:"key"},{name:"literal",value:"laptop"},{name:"literal",value:"leaks"},{name:"literal",value:"lightbulb"},{name:"literal",value:"link"},{name:"literal",value:"linkedin"},{name:"literal",value:"location"},{name:"literal",value:"marshmallow"},{name:"literal",value:"mastercard"},{name:"literal",value:"maximise"},{name:"literal",value:"medical"},{name:"literal",value:"minimise"},{name:"literal",value:"minus"},{name:"literal",value:"mulsanne"},{name:"literal",value:"notes"},{name:"literal",value:"notification"},{name:"literal",value:"onfido"},{name:"literal",value:"other"},{name:"literal",value:"padlock"},{name:"literal",value:"people"},{name:"literal",value:"person"},{name:"literal",value:"photo"},{name:"literal",value:"plus"},{name:"literal",value:"policy"},{name:"literal",value:"premfina"},{name:"literal",value:"profile"},{name:"literal",value:"prohibited"},{name:"literal",value:"property"},{name:"literal",value:"rac"},{name:"literal",value:"ravelin"},{name:"literal",value:"refund"},{name:"literal",value:"renewal"},{name:"literal",value:"return"},{name:"literal",value:"search"},{name:"literal",value:"security"},{name:"literal",value:"settings"},{name:"literal",value:"shield"},{name:"literal",value:"shopping"},{name:"literal",value:"sofa"},{name:"literal",value:"stack"},{name:"literal",value:"storm"},{name:"literal",value:"stripe"},{name:"literal",value:"subsidence"},{name:"literal",value:"theft"},{name:"literal",value:"tick"},{name:"literal",value:"training"},{name:"literal",value:"trash"},{name:"literal",value:"twitter"},{name:"literal",value:"upload"},{name:"literal",value:"vandalism"},{name:"literal",value:"village"},{name:"literal",value:"visa"},{name:"literal",value:"warning"},{name:"literal",value:"watch"},{name:"literal",value:"wave"},{name:"literal",value:"wellbeing"},{name:"literal",value:"windscreen"}]},description:""},fallbackStyle:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"literal",value:"'number'"},description:"",defaultValue:{value:"'number'",computed:!1}},placeholder:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-999999",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"999999",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const me=[{id:"days",placeholder:"+44 7123 456789",errorMsg:"This field is required",label:"Phone number",onChange:b,onInputChange:b,onBlur:b,value:""}],W=()=>{const[,a]=E.useState("");return e.createElement(f,{flex:!0,direction:"column"},me.map(({id:l,placeholder:t,errorMsg:u,label:i})=>e.createElement(f,{key:l,flex:!0,direction:"column",mb:"32px"},e.createElement(se,{tag:"span",typo:"header-medium"},"NumberInput variations"),e.createElement(m,{label:"Generic"},e.createElement(r,{id:l,label:i,value:"",placeholder:t,error:!1,errorMsg:u,onChange:a})),e.createElement(m,{label:"Fallback"},e.createElement(r,{id:l,label:i,value:"",placeholder:t,fallbackStyle:!0,error:!1,errorMsg:u,onChange:a})),e.createElement(m,{label:"Disabled"},e.createElement(r,{id:l,label:i,value:"",placeholder:t,disabled:!0,error:!1,errorMsg:u,onChange:a})),e.createElement(m,{label:"Required"},e.createElement(r,{id:l,label:i,value:"",required:!0,placeholder:t,error:!1,errorMsg:u,onChange:a})),e.createElement(m,{label:"Leading Icon"},e.createElement(r,{id:l,label:i,frontIcon:"iphone",value:"",placeholder:t,error:!1,errorMsg:u,onChange:a})),e.createElement(m,{label:"Trailing Icon"},e.createElement(r,{id:l,label:i,trailingIcon:"iphone",value:"",placeholder:t,error:!1,errorMsg:u,onChange:a})),e.createElement(m,{label:"Stepper"},e.createElement(r,{id:l,label:i,step:10,value:"",placeholder:t,error:!1,errorMsg:u,onChange:a})),e.createElement(m,{label:"Assistive text"},e.createElement(r,{id:l,label:i,value:"",placeholder:t,assistiveText:"Some assistive text",error:!1,errorMsg:u,onChange:a})),e.createElement(m,{label:"Completed"},e.createElement(r,{id:l,label:i,value:"",placeholder:t,error:!1,completed:!0,errorMsg:u,onChange:a})),e.createElement(m,{label:"As title"},e.createElement(r,{id:l,label:i,value:"",renderAsTitle:!0,placeholder:t,error:!1,errorMsg:u,onChange:a})),e.createElement(m,{label:"Error"},e.createElement(r,{id:l,label:i,value:"",required:!0,placeholder:t,assistiveText:"Some assistive text",error:!0,errorMsg:u,onChange:a})),e.createElement(m,{label:"React element error"},e.createElement(r,{id:l,label:i,required:!0,value:"",placeholder:t,error:!0,errorMsg:e.createElement(ie,{type:"warning",description:"error!!"}),onChange:a})),e.createElement(m,{label:"Fallback Error"},e.createElement(r,{id:l,label:i,required:!0,value:"",placeholder:t,fallbackStyle:!0,error:!0,errorMsg:u,onChange:a})))))},m=({label:a,children:l})=>e.createElement(oe,{mt:"32px"},e.createElement(f,{width:"140px"},e.createElement(z,{tag:"span",typo:"label-large"},a)),l),oe=w(f)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,pe="140px",se=w(z)`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 20px;
  margin-left: ${pe};
`;W.__docgenInfo={description:"",methods:[],displayName:"CollectionPage"};const H=()=>{const[a,l]=E.useState("");return e.createElement("form",null,e.createElement(r,{id:"numberInput",label:"Amount paid",name:"numberInput",onChange:l,placeholder:"100.00",value:a,min:-100,max:180,step:10,required:!0}))};H.__docgenInfo={description:"",methods:[],displayName:"Container"};const Ie={title:"Number Input",component:r,argTypes:{onChange:{action:"changed"}}},U=a=>e.createElement(r,{...a}),x=U.bind({});x.args={id:"total_amount",label:"Total Amount",name:"totalAmount",placeholder:"0",onChange:b};const g=U.bind({});g.args={id:"telephone",label:"Telephone number",name:"telephoneNumber",placeholder:"7123 456789",required:!0,onChange:b,fallbackStyle:!0};const Ve=W.bind({}),ve=()=>e.createElement(H,null),y=ve.bind({});var C,N,R;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:"(props: NumberInputProps) => <NumberInput {...props} />",...(R=(N=x.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var _,F,L;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:"(props: NumberInputProps) => <NumberInput {...props} />",...(L=(F=g.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var A,D,$;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:"() => <Container />",...($=(D=y.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const Be=["Default","DefaultFallback","Collection","WorkingExample"];export{Ve as Collection,x as Default,g as DefaultFallback,y as WorkingExample,Be as __namedExportsOrder,Ie as default};