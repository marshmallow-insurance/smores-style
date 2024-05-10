import{R as a}from"./index-BBkUAzwr.js";import{B as ne}from"./Button-COwRCuNl.js";import{I as te}from"./Icon-CArGiu8V.js";import{T as w,L as xe}from"./Text-rlZvdK6n.js";import{T as be}from"./Tag-BZr4d1Xw.js";import{c as ye}from"./polished.esm-DlUGb9xG.js";import{u as b,a as fe}from"./styled-components.browser.esm-uaFiJyE8.js";import{B as l}from"./Box-BsRHaABa.js";import{t as x}from"./theme-D50qMPxU.js";import{a as we}from"./focusOutline-DynQQMjx.js";import"./Loader-CkjOWXSV.js";const h=({children:e,leadingIcon:n,title:y,body:f,visual:t,tag:k,cardOnClickAction:C,rightAction:q,buttonAction:P,fallbackStyle:me=!1,visualHeight:T="",className:ue="",maxWidth:oe="",marginX:pe="",marginY:se="",narrow:ce=!1,wide:de=!1,...ve})=>{const ge=(!!n||!!y||!!f)&&e,S=!C;return a.createElement(he,{className:ue,$maxWidth:oe,$marginX:pe,$marginY:se,$narrow:ce,$wide:de,$visual:t,$fallbackStyle:me,$isNotClickable:S,onClick:C,tabIndex:S?void 0:0,...ve},k&&t&&a.createElement(ke,null,k),t&&a.createElement(Ce,{$visualHeight:T},a.createElement(qe,{$visualUrl:t,$visualHeight:T})),a.createElement(l,{p:t?"16px":{custom:"0px"}},a.createElement(l,{flex:!0,alignItems:"center",justifyContent:"space-between"},a.createElement(l,{flex:!0,alignItems:"center"},n&&a.createElement(te,{mr:"12px",render:n,size:24,color:"liquorice"}),a.createElement(l,null,y&&a.createElement(w,{typo:"headline-regular",color:"liquorice"},y),f&&a.createElement(w,{typo:"body-regular",color:"sesame"},f))),q&&q),a.createElement(l,{mt:ge?"16px":{custom:"0px"}},e),P&&a.createElement(l,{mt:"16px"},P)))},he=b(l)`
  background: ${({$fallbackStyle:e})=>e?x.colors.cream:x.colors.custard};
  box-sizing: border-box;
  border-radius: 16px;

  max-width: ${e=>e.$maxWidth};
  margin-top: ${e=>e.$marginY};
  margin-right: ${e=>e.$marginX};
  margin-bottom: ${e=>e.$marginY};
  margin-left: ${e=>e.$marginX};

  padding: ${({$visual:e})=>e?"0px":"16px"};
  position: relative;
  overflow: hidden;

  ${({$isNotClickable:e,$fallbackStyle:n})=>!e&&fe`
      cursor: pointer;
      &:hover {
        background: ${ye(.1,n?x.colors.cream:x.colors.custard)};
      }

      ${we}
    `};
`,ke=b(l)`
  position: absolute;
  top: 12px;
  right: 12px;
`,Ce=b(l)`
  width: 100%;
  margin-top: -16px;

  ${({$visualHeight:e})=>e&&`height: ${e};`}
`,qe=b(l)`
  width: 100%;
  background-image: url('${e=>e.$visualUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${({$visualHeight:e})=>e?`height: ${e};`:"padding-top: 100%;"}
`;h.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"union",raw:"keyof typeof iconList",elements:[{name:"literal",value:"'aa-inverted'"},{name:"literal",value:"'accidental-damage'"},{name:"literal",value:"'account-breakdown'"},{name:"literal",value:"'account-mlp'"},{name:"literal",value:"'activity-clipboard'"},{name:"literal",value:"'add-ons'"},{name:"literal",value:"'address-mta'"},{name:"literal",value:"'album-audio'"},{name:"literal",value:"'alert-engine'"},{name:"literal",value:"'apple-pay'"},{name:"literal",value:"'approved-file'"},{name:"literal",value:"'breakdown-alt'"},{name:"literal",value:"'cancel-bw'"},{name:"literal",value:"'car-mta'"},{name:"literal",value:"'car-repairs'"},{name:"literal",value:"'car-replacement'"},{name:"literal",value:"'car-usage'"},{name:"literal",value:"'chat-bubble'"},{name:"literal",value:"'checkout-with-text'"},{name:"literal",value:"'circle-tick'"},{name:"literal",value:"'claim-line'"},{name:"literal",value:"'clipboard-check'"},{name:"literal",value:"'close-panel'"},{name:"literal",value:"'confused-blue'"},{name:"literal",value:"'contact-email'"},{name:"literal",value:"'dashboard-high'"},{name:"literal",value:"'direct-debit'"},{name:"literal",value:"'doc-download'"},{name:"literal",value:"'doc-upload'"},{name:"literal",value:"'edit-contact'"},{name:"literal",value:"'edit-outline'"},{name:"literal",value:"'email-filled'"},{name:"literal",value:"'falling-items'"},{name:"literal",value:"'file-badge-2'"},{name:"literal",value:"'file-cabinet'"},{name:"literal",value:"'fraud-alert'"},{name:"literal",value:"'freezer-food'"},{name:"literal",value:"'google-play-badge'"},{name:"literal",value:"'help-aboutus'"},{name:"literal",value:"'help-buypolicy'"},{name:"literal",value:"'help-center'"},{name:"literal",value:"'help-idcheck'"},{name:"literal",value:"'help-manage-policy'"},{name:"literal",value:"'help-ncd'"},{name:"literal",value:"'help-verification'"},{name:"literal",value:"'home-excluded'"},{name:"literal",value:"'house-tree'"},{name:"literal",value:"'ios-store-badge'"},{name:"literal",value:"'live-chat'"},{name:"literal",value:"'live-chat2'"},{name:"literal",value:"'log-out'"},{name:"literal",value:"'manage-drivers'"},{name:"literal",value:"'manage-policy'"},{name:"literal",value:"'maximise-window'"},{name:"literal",value:"'minus-circle'"},{name:"literal",value:"'money-bag'"},{name:"literal",value:"'money-heart'"},{name:"literal",value:"'more-dots'"},{name:"literal",value:"'new-window'"},{name:"literal",value:"'no-excess'"},{name:"literal",value:"'open-panel'"},{name:"literal",value:"'out-of-home'"},{name:"literal",value:"'padlock-outline'"},{name:"literal",value:"'phone-filled'"},{name:"literal",value:"'phone-outline'"},{name:"literal",value:"'pin-code'"},{name:"literal",value:"'plus-circle'"},{name:"literal",value:"'policy-details'"},{name:"literal",value:"'policy-doc'"},{name:"literal",value:"'policy-docs'"},{name:"literal",value:"'pound-bold'"},{name:"literal",value:"'pound-filled-circle'"},{name:"literal",value:"'pound-medium'"},{name:"literal",value:"'pound-outline'"},{name:"literal",value:"'pound-regular'"},{name:"literal",value:"'question-help'"},{name:"literal",value:"'refer-a-friend'"},{name:"literal",value:"'reg-plate'"},{name:"literal",value:"'renewal-line'"},{name:"literal",value:"'repeat-charge'"},{name:"literal",value:"'schedule-quote'"},{name:"literal",value:"'send-message'"},{name:"literal",value:"'shield-check'"},{name:"literal",value:"'thumbs-up'"},{name:"literal",value:"'tow-truck'"},{name:"literal",value:"'trace-and-access'"},{name:"literal",value:"'up-down'"},{name:"literal",value:"'upload-documents'"},{name:"literal",value:"'upload-email'"},{name:"literal",value:"'wheel-flat'"},{name:"literal",value:"'windscreen-repair'"},{name:"literal",value:"'windscreen-replacement'"},{name:"literal",value:"aa"},{name:"literal",value:"addons"},{name:"literal",value:"alert"},{name:"literal",value:"amex"},{name:"literal",value:"arrow"},{name:"literal",value:"at"},{name:"literal",value:"axa"},{name:"literal",value:"bank"},{name:"literal",value:"basket"},{name:"literal",value:"bicycle"},{name:"literal",value:"boost"},{name:"literal",value:"breakdown"},{name:"literal",value:"briefcase"},{name:"literal",value:"burger"},{name:"literal",value:"bullets"},{name:"literal",value:"calendar"},{name:"literal",value:"camera"},{name:"literal",value:"cancel"},{name:"literal",value:"car"},{name:"literal",value:"card"},{name:"literal",value:"caret"},{name:"literal",value:"'caret-up'"},{name:"literal",value:"charge"},{name:"literal",value:"chat"},{name:"literal",value:"checkout"},{name:"literal",value:"city"},{name:"literal",value:"claim"},{name:"literal",value:"clipboard"},{name:"literal",value:"clock"},{name:"literal",value:"collpase"},{name:"literal",value:"confused"},{name:"literal",value:"copy"},{name:"literal",value:"crop"},{name:"literal",value:"cross"},{name:"literal",value:"download"},{name:"literal",value:"earth"},{name:"literal",value:"edit"},{name:"literal",value:"engine"},{name:"literal",value:"europe"},{name:"literal",value:"excluded"},{name:"literal",value:"expand"},{name:"literal",value:"facebook"},{name:"literal",value:"fence"},{name:"literal",value:"file"},{name:"literal",value:"filter"},{name:"literal",value:"fire"},{name:"literal",value:"flag"},{name:"literal",value:"folder"},{name:"literal",value:"fuel"},{name:"literal",value:"globe"},{name:"literal",value:"gpay"},{name:"literal",value:"house"},{name:"literal",value:"id"},{name:"literal",value:"inbox"},{name:"literal",value:"included"},{name:"literal",value:"info"},{name:"literal",value:"injury"},{name:"literal",value:"instagram"},{name:"literal",value:"intercom"},{name:"literal",value:"intercom2"},{name:"literal",value:"iphone"},{name:"literal",value:"jewellery"},{name:"literal",value:"key"},{name:"literal",value:"laptop"},{name:"literal",value:"leaks"},{name:"literal",value:"lightbulb"},{name:"literal",value:"link"},{name:"literal",value:"linkedin"},{name:"literal",value:"location"},{name:"literal",value:"marshmallow"},{name:"literal",value:"mastercard"},{name:"literal",value:"maximise"},{name:"literal",value:"medical"},{name:"literal",value:"minimise"},{name:"literal",value:"minus"},{name:"literal",value:"mulsanne"},{name:"literal",value:"notes"},{name:"literal",value:"notification"},{name:"literal",value:"onfido"},{name:"literal",value:"other"},{name:"literal",value:"padlock"},{name:"literal",value:"people"},{name:"literal",value:"person"},{name:"literal",value:"photo"},{name:"literal",value:"plus"},{name:"literal",value:"policy"},{name:"literal",value:"premfina"},{name:"literal",value:"profile"},{name:"literal",value:"prohibited"},{name:"literal",value:"property"},{name:"literal",value:"rac"},{name:"literal",value:"ravelin"},{name:"literal",value:"refund"},{name:"literal",value:"renewal"},{name:"literal",value:"return"},{name:"literal",value:"search"},{name:"literal",value:"security"},{name:"literal",value:"settings"},{name:"literal",value:"shield"},{name:"literal",value:"shopping"},{name:"literal",value:"sofa"},{name:"literal",value:"stack"},{name:"literal",value:"storm"},{name:"literal",value:"stripe"},{name:"literal",value:"subsidence"},{name:"literal",value:"theft"},{name:"literal",value:"tick"},{name:"literal",value:"training"},{name:"literal",value:"trash"},{name:"literal",value:"twitter"},{name:"literal",value:"upload"},{name:"literal",value:"vandalism"},{name:"literal",value:"village"},{name:"literal",value:"visa"},{name:"literal",value:"warning"},{name:"literal",value:"watch"},{name:"literal",value:"wave"},{name:"literal",value:"wellbeing"},{name:"literal",value:"windscreen"}]},description:"leading card icon"},title:{required:!1,tsType:{name:"string"},description:"generic card title"},body:{required:!1,tsType:{name:"string"},description:"generic card body"},visual:{required:!1,tsType:{name:"string"},description:"card image"},visualHeight:{required:!1,tsType:{name:"string"},description:"height of the image",defaultValue:{value:"''",computed:!1}},tag:{required:!1,tsType:{name:"ReactNode"},description:"card tag"},cardOnClickAction:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLDivElement"}],raw:"MouseEventHandler<HTMLDivElement>"},description:"action for a fully clickable card"},rightAction:{required:!1,tsType:{name:"ReactNode"},description:"action to the right of the card, chevron, chip or link text"},buttonAction:{required:!1,tsType:{name:"ReactNode"},description:"primary button"},fallbackStyle:{required:!1,tsType:{name:"boolean"},description:"fallback color scheme",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:"margin",defaultValue:{value:"''",computed:!1}},marginX:{required:!1,tsType:{name:"string"},description:"left-right margin",defaultValue:{value:"''",computed:!1}},marginY:{required:!1,tsType:{name:"string"},description:"top-bottom margin",defaultValue:{value:"''",computed:!1}},narrow:{required:!1,tsType:{name:"boolean"},description:"Narrow padding",defaultValue:{value:"false",computed:!1}},wide:{required:!1,tsType:{name:"boolean"},description:"Wide padding",defaultValue:{value:"false",computed:!1}},m:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mx:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]}}]}}]},description:""},my:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},ml:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mr:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mt:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mb:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""}}};const ie=""+new URL("placeHolderImage-B0swrbh0.svg",import.meta.url).href,Re={title:"Card",component:h},r=e=>a.createElement(h,{...e}),i=r.bind({});i.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px"};const m=r.bind({});m.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",fallbackStyle:!0};const u=r.bind({});u.args={children:a.createElement(w,{tag:"h1"},"Children here")};const o=r.bind({});o.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px"};const p=r.bind({});p.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",cardOnClickAction:()=>alert("clicked")};const s=r.bind({});s.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",rightAction:a.createElement(te,{render:"caret",color:"marzipan",rotate:-90})};const c=r.bind({});c.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",rightAction:a.createElement(xe,{href:"",typo:"regular"},"Action")};const d=r.bind({});d.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",buttonAction:a.createElement(ne,{primary:!0,forcedWidth:"100%"},"Default")};const v=r.bind({});v.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",visualHeight:"120px",visual:ie};const g=r.bind({});g.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",visualHeight:"180px",tag:a.createElement(be,{label:"default",bgColor:"feijoa",color:"cream"}),buttonAction:a.createElement(ne,{primary:!0,forcedWidth:"100%"},"Default"),visual:ie};var V,W,$;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...($=(W=i.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var B,j,E;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(E=(j=m.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var I,A,R;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(R=(A=u.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var D,N,H;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(H=(N=o.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var L,z,M;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(M=(z=p.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var O,_,G;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(G=(_=s.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var X,Y,U;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(U=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var F,J,K;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Z,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,le,re;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(re=(le=g.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};const De=["Default","DefaultFallback","GenericChildCard","GenericCard","CardWithOnClickAction","CardWithRightAction","CardWithRightActionLink","CardWithButton","CardWithImage","CardWithImageWithTag"];export{d as CardWithButton,v as CardWithImage,g as CardWithImageWithTag,p as CardWithOnClickAction,s as CardWithRightAction,c as CardWithRightActionLink,i as Default,m as DefaultFallback,o as GenericCard,u as GenericChildCard,De as __namedExportsOrder,Re as default};