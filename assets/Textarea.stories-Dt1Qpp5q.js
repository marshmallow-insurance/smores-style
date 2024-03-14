import{j as l,s as U}from"./styled-components.browser.esm-CskBwHif.js";import{n as v}from"./noop-BjFrJKj1.js";import{r as L}from"./index-BBkUAzwr.js";import{t as a}from"./theme-D50qMPxU.js";import{u as Y}from"./id-CqcUMuGv.js";import{F as G}from"./Field-AIuK1-8P.js";import"./InternalField-CW5wupFf.js";import"./Text-C8qOqVb2.js";import"./polished.esm-D0h1-lPB.js";import"./Icon-CpMNXCuZ.js";import"./Box-Ck8x80mg.js";import"./focusOutline-JAHtHrmh.js";const n=L.forwardRef(function({id:c,name:M,value:j,onChange:p,onInputChange:m,resize:F="none",error:f=!1,placeholder:W,disabled:D=!1,maxLength:I,onBlur:N,rows:B=4,fallbackStyle:J,...X},O){const h=Y(c);return l(G,{...X,htmlFor:h,error:f,children:l(K,{ref:O,error:f,id:h,name:M,disabled:D,resize:F,fallbackStyle:J,placeholder:W,value:j,onChange:b=>{p==null||p(b.currentTarget.value),m==null||m(b)},maxLength:I,onBlur:N,rows:B})})}),K=U.textarea`
  font-size: 16px;
  font: inherit;
  line-height: 20px;
  background: ${({fallbackStyle:e})=>e?a.colors.custard:a.colors.cream};
  border: 2px solid ${a.colors.oatmeal};
  box-sizing: border-box;
  border-radius: 12px;
  width: 100%;
  padding: 18px 14px;
  color: ${a.colors.liquorice};
  resize: ${({resize:e})=>e};
  cursor: ${({disabled:e})=>e?"not-allowed":"text"};
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  border-color: ${({error:e})=>a.colors[`${e?"strawberry":"oatmeal"}`]};
  outline: none;

  &:hover,
  &:focus,
  &:focus-visible {
    border-color: ${({error:e})=>e?a.colors.strawberry:a.colors.marzipan};
  }
`;try{n.displayName="Textarea",n.__docgenInfo={description:"",displayName:"Textarea",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | (string & ReactElement<any, string | JSXElementConstructor<any>>)"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},rows:{defaultValue:{value:"4"},description:"",name:"rows",required:!1,type:{name:"number"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:null,description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"enum",value:[{value:'"id"'},{value:'"link"'},{value:'"filter"'},{value:'"key"'},{value:'"property"'},{value:'"security"'},{value:'"download"'},{value:'"alert"'},{value:'"search"'},{value:'"location"'},{value:'"copy"'},{value:'"other"'},{value:'"confused"'},{value:'"onfido"'},{value:'"twitter"'},{value:'"premfina"'},{value:'"checkout"'},{value:'"facebook"'},{value:'"stripe"'},{value:'"intercom"'},{value:'"ravelin"'},{value:'"rac"'},{value:'"aa-inverted"'},{value:'"accidental-damage"'},{value:'"account-breakdown"'},{value:'"account-mlp"'},{value:'"activity-clipboard"'},{value:'"add-ons"'},{value:'"address-mta"'},{value:'"album-audio"'},{value:'"alert-engine"'},{value:'"apple-pay"'},{value:'"approved-file"'},{value:'"breakdown-alt"'},{value:'"cancel-bw"'},{value:'"car-mta"'},{value:'"car-repairs"'},{value:'"car-replacement"'},{value:'"car-usage"'},{value:'"chat-bubble"'},{value:'"checkout-with-text"'},{value:'"circle-tick"'},{value:'"claim-line"'},{value:'"clipboard-check"'},{value:'"close-panel"'},{value:'"confused-blue"'},{value:'"contact-email"'},{value:'"dashboard-high"'},{value:'"direct-debit"'},{value:'"doc-download"'},{value:'"doc-upload"'},{value:'"edit-contact"'},{value:'"edit-outline"'},{value:'"email-filled"'},{value:'"falling-items"'},{value:'"file-badge-2"'},{value:'"file-cabinet"'},{value:'"fraud-alert"'},{value:'"freezer-food"'},{value:'"google-play-badge"'},{value:'"help-aboutus"'},{value:'"help-buypolicy"'},{value:'"help-center"'},{value:'"help-idcheck"'},{value:'"help-manage-policy"'},{value:'"help-ncd"'},{value:'"help-verification"'},{value:'"home-excluded"'},{value:'"house-tree"'},{value:'"ios-store-badge"'},{value:'"live-chat"'},{value:'"live-chat2"'},{value:'"log-out"'},{value:'"manage-drivers"'},{value:'"manage-policy"'},{value:'"maximise-window"'},{value:'"minus-circle"'},{value:'"money-bag"'},{value:'"money-heart"'},{value:'"more-dots"'},{value:'"new-window"'},{value:'"no-excess"'},{value:'"open-panel"'},{value:'"out-of-home"'},{value:'"padlock-outline"'},{value:'"phone-filled"'},{value:'"phone-outline"'},{value:'"pin-code"'},{value:'"plus-circle"'},{value:'"policy-details"'},{value:'"policy-doc"'},{value:'"policy-docs"'},{value:'"pound-bold"'},{value:'"pound-filled-circle"'},{value:'"pound-medium"'},{value:'"pound-outline"'},{value:'"pound-regular"'},{value:'"question-help"'},{value:'"refer-a-friend"'},{value:'"reg-plate"'},{value:'"renewal-line"'},{value:'"repeat-charge"'},{value:'"schedule-quote"'},{value:'"send-message"'},{value:'"shield-check"'},{value:'"thumbs-up"'},{value:'"tow-truck"'},{value:'"trace-and-access"'},{value:'"up-down"'},{value:'"upload-documents"'},{value:'"upload-email"'},{value:'"wheel-flat"'},{value:'"windscreen-repair"'},{value:'"windscreen-replacement"'},{value:'"aa"'},{value:'"addons"'},{value:'"amex"'},{value:'"arrow"'},{value:'"at"'},{value:'"axa"'},{value:'"bank"'},{value:'"basket"'},{value:'"bicycle"'},{value:'"boost"'},{value:'"breakdown"'},{value:'"briefcase"'},{value:'"burger"'},{value:'"bullets"'},{value:'"calendar"'},{value:'"camera"'},{value:'"cancel"'},{value:'"car"'},{value:'"card"'},{value:'"caret"'},{value:'"charge"'},{value:'"chat"'},{value:'"city"'},{value:'"claim"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"collpase"'},{value:'"crop"'},{value:'"cross"'},{value:'"earth"'},{value:'"edit"'},{value:'"engine"'},{value:'"europe"'},{value:'"excluded"'},{value:'"expand"'},{value:'"fence"'},{value:'"file"'},{value:'"fire"'},{value:'"flag"'},{value:'"folder"'},{value:'"fuel"'},{value:'"globe"'},{value:'"gpay"'},{value:'"house"'},{value:'"inbox"'},{value:'"included"'},{value:'"info"'},{value:'"injury"'},{value:'"instagram"'},{value:'"intercom2"'},{value:'"iphone"'},{value:'"jewellery"'},{value:'"laptop"'},{value:'"leaks"'},{value:'"lightbulb"'},{value:'"linkedin"'},{value:'"marshmallow"'},{value:'"mastercard"'},{value:'"maximise"'},{value:'"medical"'},{value:'"minimise"'},{value:'"minus"'},{value:'"mulsanne"'},{value:'"notes"'},{value:'"notification"'},{value:'"padlock"'},{value:'"people"'},{value:'"person"'},{value:'"photo"'},{value:'"plus"'},{value:'"policy"'},{value:'"profile"'},{value:'"prohibited"'},{value:'"refund"'},{value:'"renewal"'},{value:'"return"'},{value:'"settings"'},{value:'"shield"'},{value:'"shopping"'},{value:'"sofa"'},{value:'"stack"'},{value:'"storm"'},{value:'"subsidence"'},{value:'"theft"'},{value:'"tick"'},{value:'"training"'},{value:'"trash"'},{value:'"upload"'},{value:'"vandalism"'},{value:'"village"'},{value:'"visa"'},{value:'"warning"'},{value:'"watch"'},{value:'"wave"'},{value:'"wellbeing"'},{value:'"windscreen"'}]}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"enum",value:[{value:'"id"'},{value:'"link"'},{value:'"filter"'},{value:'"key"'},{value:'"property"'},{value:'"security"'},{value:'"download"'},{value:'"alert"'},{value:'"search"'},{value:'"location"'},{value:'"copy"'},{value:'"other"'},{value:'"confused"'},{value:'"onfido"'},{value:'"twitter"'},{value:'"premfina"'},{value:'"checkout"'},{value:'"facebook"'},{value:'"stripe"'},{value:'"intercom"'},{value:'"ravelin"'},{value:'"rac"'},{value:'"aa-inverted"'},{value:'"accidental-damage"'},{value:'"account-breakdown"'},{value:'"account-mlp"'},{value:'"activity-clipboard"'},{value:'"add-ons"'},{value:'"address-mta"'},{value:'"album-audio"'},{value:'"alert-engine"'},{value:'"apple-pay"'},{value:'"approved-file"'},{value:'"breakdown-alt"'},{value:'"cancel-bw"'},{value:'"car-mta"'},{value:'"car-repairs"'},{value:'"car-replacement"'},{value:'"car-usage"'},{value:'"chat-bubble"'},{value:'"checkout-with-text"'},{value:'"circle-tick"'},{value:'"claim-line"'},{value:'"clipboard-check"'},{value:'"close-panel"'},{value:'"confused-blue"'},{value:'"contact-email"'},{value:'"dashboard-high"'},{value:'"direct-debit"'},{value:'"doc-download"'},{value:'"doc-upload"'},{value:'"edit-contact"'},{value:'"edit-outline"'},{value:'"email-filled"'},{value:'"falling-items"'},{value:'"file-badge-2"'},{value:'"file-cabinet"'},{value:'"fraud-alert"'},{value:'"freezer-food"'},{value:'"google-play-badge"'},{value:'"help-aboutus"'},{value:'"help-buypolicy"'},{value:'"help-center"'},{value:'"help-idcheck"'},{value:'"help-manage-policy"'},{value:'"help-ncd"'},{value:'"help-verification"'},{value:'"home-excluded"'},{value:'"house-tree"'},{value:'"ios-store-badge"'},{value:'"live-chat"'},{value:'"live-chat2"'},{value:'"log-out"'},{value:'"manage-drivers"'},{value:'"manage-policy"'},{value:'"maximise-window"'},{value:'"minus-circle"'},{value:'"money-bag"'},{value:'"money-heart"'},{value:'"more-dots"'},{value:'"new-window"'},{value:'"no-excess"'},{value:'"open-panel"'},{value:'"out-of-home"'},{value:'"padlock-outline"'},{value:'"phone-filled"'},{value:'"phone-outline"'},{value:'"pin-code"'},{value:'"plus-circle"'},{value:'"policy-details"'},{value:'"policy-doc"'},{value:'"policy-docs"'},{value:'"pound-bold"'},{value:'"pound-filled-circle"'},{value:'"pound-medium"'},{value:'"pound-outline"'},{value:'"pound-regular"'},{value:'"question-help"'},{value:'"refer-a-friend"'},{value:'"reg-plate"'},{value:'"renewal-line"'},{value:'"repeat-charge"'},{value:'"schedule-quote"'},{value:'"send-message"'},{value:'"shield-check"'},{value:'"thumbs-up"'},{value:'"tow-truck"'},{value:'"trace-and-access"'},{value:'"up-down"'},{value:'"upload-documents"'},{value:'"upload-email"'},{value:'"wheel-flat"'},{value:'"windscreen-repair"'},{value:'"windscreen-replacement"'},{value:'"aa"'},{value:'"addons"'},{value:'"amex"'},{value:'"arrow"'},{value:'"at"'},{value:'"axa"'},{value:'"bank"'},{value:'"basket"'},{value:'"bicycle"'},{value:'"boost"'},{value:'"breakdown"'},{value:'"briefcase"'},{value:'"burger"'},{value:'"bullets"'},{value:'"calendar"'},{value:'"camera"'},{value:'"cancel"'},{value:'"car"'},{value:'"card"'},{value:'"caret"'},{value:'"charge"'},{value:'"chat"'},{value:'"city"'},{value:'"claim"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"collpase"'},{value:'"crop"'},{value:'"cross"'},{value:'"earth"'},{value:'"edit"'},{value:'"engine"'},{value:'"europe"'},{value:'"excluded"'},{value:'"expand"'},{value:'"fence"'},{value:'"file"'},{value:'"fire"'},{value:'"flag"'},{value:'"folder"'},{value:'"fuel"'},{value:'"globe"'},{value:'"gpay"'},{value:'"house"'},{value:'"inbox"'},{value:'"included"'},{value:'"info"'},{value:'"injury"'},{value:'"instagram"'},{value:'"intercom2"'},{value:'"iphone"'},{value:'"jewellery"'},{value:'"laptop"'},{value:'"leaks"'},{value:'"lightbulb"'},{value:'"linkedin"'},{value:'"marshmallow"'},{value:'"mastercard"'},{value:'"maximise"'},{value:'"medical"'},{value:'"minimise"'},{value:'"minus"'},{value:'"mulsanne"'},{value:'"notes"'},{value:'"notification"'},{value:'"padlock"'},{value:'"people"'},{value:'"person"'},{value:'"photo"'},{value:'"plus"'},{value:'"policy"'},{value:'"profile"'},{value:'"prohibited"'},{value:'"refund"'},{value:'"renewal"'},{value:'"return"'},{value:'"settings"'},{value:'"shield"'},{value:'"shopping"'},{value:'"sofa"'},{value:'"stack"'},{value:'"storm"'},{value:'"subsidence"'},{value:'"theft"'},{value:'"tick"'},{value:'"training"'},{value:'"trash"'},{value:'"upload"'},{value:'"vandalism"'},{value:'"village"'},{value:'"visa"'},{value:'"warning"'},{value:'"watch"'},{value:'"wave"'},{value:'"wellbeing"'},{value:'"windscreen"'}]}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: string) => void) | ((e: string) => void)"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((e: FormEvent<HTMLTextAreaElement>) => void) | ((e: FormEvent<HTMLTextAreaElement>) => void)"}}}}}catch{}const Q=()=>{const[e,c]=L.useState("");return l("form",{children:l(n,{id:"textarea_id",label:"Textarea label",value:e,resize:"both",onChange:c,assistiveText:"This is some assistive text",disabled:!1,error:e.length>255,errorMsg:`Your text is ${e.length} characters long. The maximum is 255 characters. Please make it shorter`,placeholder:"Here is some placeholder text."})})},ce={title:"Textarea",component:n},s=e=>l(n,{...e}),u=s.bind({});u.args={id:"textarea_id",label:"Textarea label",value:"",onChange:v,disabled:!1,placeholder:"Here is some placeholder text."};const r=s.bind({});r.args={id:"textarea_id",label:"Textarea label",value:"",onChange:v,resize:"none",disabled:!0,placeholder:"Here is some placeholder text."};const o=s.bind({});o.args={id:"textarea_id",label:"Textarea label",value:"",onChange:v,disabled:!1,placeholder:"Here is some placeholder text.",resize:"none",error:!0,errorMsg:"Something really quite terrible has gone wrong here!"};const t=s.bind({});t.args={id:"textarea_id",label:"Textarea label",value:"",onChange:v,disabled:!1,maxLength:200,showCharacterCount:!0,placeholder:"Here is some placeholder text.",required:!0};const i=s.bind({});i.args={id:"textarea_id",label:"Textarea label",value:"",onChange:v,disabled:!1,placeholder:"Here is some placeholder text.",required:!1,renderAsTitle:!0};const Z=()=>l(Q,{}),d=Z.bind({});var g,y,x;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:"(props: TextareaProps) => <Textarea {...props} />",...(x=(y=u.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,k,q;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:"(props: TextareaProps) => <Textarea {...props} />",...(q=(k=r.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var T,V,P;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:"(props: TextareaProps) => <Textarea {...props} />",...(P=(V=o.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var S,E,_;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:"(props: TextareaProps) => <Textarea {...props} />",...(_=(E=t.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var R,z,$;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:"(props: TextareaProps) => <Textarea {...props} />",...($=(z=i.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var A,C,H;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:"() => <Container />",...(H=(C=d.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};const pe=["Default","Disabled","Error","Required","WithTitleAsLabel","WorkingExample"];export{u as Default,r as Disabled,o as Error,t as Required,i as WithTitleAsLabel,d as WorkingExample,pe as __namedExportsOrder,ce as default};
