import{R as i}from"./index-BBkUAzwr.js";import{u as s,a as c}from"./styled-components.browser.esm-uaFiJyE8.js";import{c as x}from"./polished.esm-DlUGb9xG.js";import{I as d}from"./Icon-pvgJCDYX.js";import{t as u}from"./theme-D50qMPxU.js";import{a as g}from"./focusOutline-DynQQMjx.js";const m={48:{smallSize:28,padding:10},36:{smallSize:20,padding:8},24:{smallSize:12,padding:6},16:{smallSize:10,padding:3}},b=({className:a="",size:e=16,render:l,iconColor:p,backgroundColor:r,rotate:o,handleClick:n,...t})=>i.createElement(w,{forwardedAs:n?"button":"div",className:a,$size:e,...t,$backgroundColor:r,onClick:n,onKeyDown:v=>{n&&v.key}},i.createElement(d,{render:l,className:a,size:r?m[e].smallSize:e,color:p,rotate:o,...t})),w=s.div(({$size:a,$backgroundColor:e,onClick:l})=>c`
    padding: ${e?`${m[a].padding}px`:0};
    width: 100%;
    max-width: ${a}px;
    height: ${a}px;
    border-radius: 100%;
    background-color: ${e?u.colors[e]:"none"};
    cursor: ${l?"pointer":"default"};

    ${l&&`
    &:hover {
      background-color: ${e?x(.1,u.colors[e]):"none"};
    }
      
    `}

    ${g}
  `);b.__docgenInfo={description:"",methods:[],displayName:"IconStrict",props:{className:{required:!1,tsType:{name:"string"},description:"className attribute to apply classes from props",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"16 | 24 | 36 | 48",elements:[{name:"literal",value:"16"},{name:"literal",value:"24"},{name:"literal",value:"36"},{name:"literal",value:"48"}]},description:"set size of the Icon (including background)",defaultValue:{value:"16",computed:!1}},render:{required:!0,tsType:{name:"union",raw:"keyof typeof iconList",elements:[{name:"literal",value:"'aa-inverted'"},{name:"literal",value:"'accidental-damage'"},{name:"literal",value:"'account-breakdown'"},{name:"literal",value:"'account-mlp'"},{name:"literal",value:"'activity-clipboard'"},{name:"literal",value:"'add-ons'"},{name:"literal",value:"'address-mta'"},{name:"literal",value:"'album-audio'"},{name:"literal",value:"'alert-engine'"},{name:"literal",value:"'apple-pay'"},{name:"literal",value:"'approved-file'"},{name:"literal",value:"'breakdown-alt'"},{name:"literal",value:"'cancel-bw'"},{name:"literal",value:"'car-mta'"},{name:"literal",value:"'car-repairs'"},{name:"literal",value:"'car-replacement'"},{name:"literal",value:"'car-usage'"},{name:"literal",value:"'chat-bubble'"},{name:"literal",value:"'checkout-with-text'"},{name:"literal",value:"'circle-tick'"},{name:"literal",value:"'claim-line'"},{name:"literal",value:"'clipboard-check'"},{name:"literal",value:"'close-panel'"},{name:"literal",value:"'confused-blue'"},{name:"literal",value:"'contact-email'"},{name:"literal",value:"'dashboard-high'"},{name:"literal",value:"'direct-debit'"},{name:"literal",value:"'doc-download'"},{name:"literal",value:"'doc-upload'"},{name:"literal",value:"'edit-contact'"},{name:"literal",value:"'edit-outline'"},{name:"literal",value:"'email-filled'"},{name:"literal",value:"'falling-items'"},{name:"literal",value:"'file-badge-2'"},{name:"literal",value:"'file-cabinet'"},{name:"literal",value:"'fraud-alert'"},{name:"literal",value:"'freezer-food'"},{name:"literal",value:"'google-play-badge'"},{name:"literal",value:"'help-aboutus'"},{name:"literal",value:"'help-buypolicy'"},{name:"literal",value:"'help-center'"},{name:"literal",value:"'help-idcheck'"},{name:"literal",value:"'help-manage-policy'"},{name:"literal",value:"'help-ncd'"},{name:"literal",value:"'help-verification'"},{name:"literal",value:"'home-excluded'"},{name:"literal",value:"'house-tree'"},{name:"literal",value:"'ios-store-badge'"},{name:"literal",value:"'live-chat'"},{name:"literal",value:"'live-chat2'"},{name:"literal",value:"'log-out'"},{name:"literal",value:"'manage-drivers'"},{name:"literal",value:"'manage-policy'"},{name:"literal",value:"'maximise-window'"},{name:"literal",value:"'minus-circle'"},{name:"literal",value:"'money-bag'"},{name:"literal",value:"'money-heart'"},{name:"literal",value:"'more-dots'"},{name:"literal",value:"'new-window'"},{name:"literal",value:"'no-excess'"},{name:"literal",value:"'open-panel'"},{name:"literal",value:"'out-of-home'"},{name:"literal",value:"'padlock-outline'"},{name:"literal",value:"'phone-filled'"},{name:"literal",value:"'phone-outline'"},{name:"literal",value:"'pin-code'"},{name:"literal",value:"'plus-circle'"},{name:"literal",value:"'policy-details'"},{name:"literal",value:"'policy-doc'"},{name:"literal",value:"'policy-docs'"},{name:"literal",value:"'pound-bold'"},{name:"literal",value:"'pound-filled-circle'"},{name:"literal",value:"'pound-medium'"},{name:"literal",value:"'pound-outline'"},{name:"literal",value:"'pound-regular'"},{name:"literal",value:"'question-help'"},{name:"literal",value:"'refer-a-friend'"},{name:"literal",value:"'reg-plate'"},{name:"literal",value:"'renewal-line'"},{name:"literal",value:"'repeat-charge'"},{name:"literal",value:"'schedule-quote'"},{name:"literal",value:"'send-message'"},{name:"literal",value:"'shield-check'"},{name:"literal",value:"'thumbs-up'"},{name:"literal",value:"'tow-truck'"},{name:"literal",value:"'trace-and-access'"},{name:"literal",value:"'up-down'"},{name:"literal",value:"'upload-documents'"},{name:"literal",value:"'upload-email'"},{name:"literal",value:"'wheel-flat'"},{name:"literal",value:"'windscreen-repair'"},{name:"literal",value:"'windscreen-replacement'"},{name:"literal",value:"aa"},{name:"literal",value:"addons"},{name:"literal",value:"alert"},{name:"literal",value:"amex"},{name:"literal",value:"arrow"},{name:"literal",value:"at"},{name:"literal",value:"axa"},{name:"literal",value:"bank"},{name:"literal",value:"basket"},{name:"literal",value:"bicycle"},{name:"literal",value:"boost"},{name:"literal",value:"breakdown"},{name:"literal",value:"briefcase"},{name:"literal",value:"burger"},{name:"literal",value:"bullets"},{name:"literal",value:"calendar"},{name:"literal",value:"camera"},{name:"literal",value:"cancel"},{name:"literal",value:"car"},{name:"literal",value:"card"},{name:"literal",value:"caret"},{name:"literal",value:"'caret-up'"},{name:"literal",value:"charge"},{name:"literal",value:"chat"},{name:"literal",value:"checkout"},{name:"literal",value:"city"},{name:"literal",value:"claim"},{name:"literal",value:"clipboard"},{name:"literal",value:"clock"},{name:"literal",value:"collpase"},{name:"literal",value:"confused"},{name:"literal",value:"copy"},{name:"literal",value:"crop"},{name:"literal",value:"cross"},{name:"literal",value:"download"},{name:"literal",value:"earth"},{name:"literal",value:"edit"},{name:"literal",value:"engine"},{name:"literal",value:"europe"},{name:"literal",value:"excluded"},{name:"literal",value:"expand"},{name:"literal",value:"facebook"},{name:"literal",value:"fence"},{name:"literal",value:"file"},{name:"literal",value:"filter"},{name:"literal",value:"fire"},{name:"literal",value:"flag"},{name:"literal",value:"folder"},{name:"literal",value:"fuel"},{name:"literal",value:"globe"},{name:"literal",value:"gpay"},{name:"literal",value:"house"},{name:"literal",value:"id"},{name:"literal",value:"inbox"},{name:"literal",value:"included"},{name:"literal",value:"info"},{name:"literal",value:"injury"},{name:"literal",value:"instagram"},{name:"literal",value:"intercom"},{name:"literal",value:"intercom2"},{name:"literal",value:"iphone"},{name:"literal",value:"jewellery"},{name:"literal",value:"key"},{name:"literal",value:"laptop"},{name:"literal",value:"leaks"},{name:"literal",value:"lightbulb"},{name:"literal",value:"link"},{name:"literal",value:"linkedin"},{name:"literal",value:"location"},{name:"literal",value:"marshmallow"},{name:"literal",value:"mastercard"},{name:"literal",value:"maximise"},{name:"literal",value:"medical"},{name:"literal",value:"minimise"},{name:"literal",value:"minus"},{name:"literal",value:"mulsanne"},{name:"literal",value:"notes"},{name:"literal",value:"notification"},{name:"literal",value:"onfido"},{name:"literal",value:"other"},{name:"literal",value:"padlock"},{name:"literal",value:"people"},{name:"literal",value:"person"},{name:"literal",value:"photo"},{name:"literal",value:"plus"},{name:"literal",value:"policy"},{name:"literal",value:"premfina"},{name:"literal",value:"profile"},{name:"literal",value:"prohibited"},{name:"literal",value:"property"},{name:"literal",value:"rac"},{name:"literal",value:"ravelin"},{name:"literal",value:"refund"},{name:"literal",value:"renewal"},{name:"literal",value:"return"},{name:"literal",value:"search"},{name:"literal",value:"security"},{name:"literal",value:"settings"},{name:"literal",value:"shield"},{name:"literal",value:"shopping"},{name:"literal",value:"sofa"},{name:"literal",value:"stack"},{name:"literal",value:"storm"},{name:"literal",value:"stripe"},{name:"literal",value:"subsidence"},{name:"literal",value:"theft"},{name:"literal",value:"tick"},{name:"literal",value:"training"},{name:"literal",value:"trash"},{name:"literal",value:"twitter"},{name:"literal",value:"upload"},{name:"literal",value:"vandalism"},{name:"literal",value:"village"},{name:"literal",value:"visa"},{name:"literal",value:"warning"},{name:"literal",value:"watch"},{name:"literal",value:"wave"},{name:"literal",value:"wellbeing"},{name:"literal",value:"windscreen"}]},description:"specify what Icon to render"},iconColor:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"lollipop"},{name:"literal",value:"marshmallowPink"},{name:"literal",value:"bubblegum"},{name:"literal",value:"fairyFloss"},{name:"literal",value:"boba"},{name:"literal",value:"liquorice"},{name:"literal",value:"sesame"},{name:"literal",value:"chia"},{name:"literal",value:"custard"},{name:"literal",value:"mascarpone"},{name:"literal",value:"coconut"},{name:"literal",value:"cream"},{name:"literal",value:"spearmint"},{name:"literal",value:"feijoa"},{name:"literal",value:"blueberry"},{name:"literal",value:"macaroon"},{name:"literal",value:"pistachio"},{name:"literal",value:"matcha"},{name:"literal",value:"caramel"},{name:"literal",value:"peanut"},{name:"literal",value:"marzipan"},{name:"literal",value:"oatmeal"},{name:"literal",value:"strawberry"},{name:"literal",value:"watermelon"},{name:"literal",value:"apple"},{name:"literal",value:"mint"},{name:"literal",value:"lemon"},{name:"literal",value:"sherbert"},{name:"literal",value:"tangerine"},{name:"literal",value:"compareTheMarket"},{name:"literal",value:"confused"},{name:"literal",value:"onfido"},{name:"literal",value:"twitter"},{name:"literal",value:"premfina"},{name:"literal",value:"checkout"},{name:"literal",value:"facebook"},{name:"literal",value:"stripe"},{name:"literal",value:"intercom"},{name:"literal",value:"ravelin"},{name:"literal",value:"rac"},{name:"literal",value:"hometree"}]},description:"set icon colour"},backgroundColor:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"lollipop"},{name:"literal",value:"marshmallowPink"},{name:"literal",value:"bubblegum"},{name:"literal",value:"fairyFloss"},{name:"literal",value:"boba"},{name:"literal",value:"liquorice"},{name:"literal",value:"sesame"},{name:"literal",value:"chia"},{name:"literal",value:"custard"},{name:"literal",value:"mascarpone"},{name:"literal",value:"coconut"},{name:"literal",value:"cream"},{name:"literal",value:"spearmint"},{name:"literal",value:"feijoa"},{name:"literal",value:"blueberry"},{name:"literal",value:"macaroon"},{name:"literal",value:"pistachio"},{name:"literal",value:"matcha"},{name:"literal",value:"caramel"},{name:"literal",value:"peanut"},{name:"literal",value:"marzipan"},{name:"literal",value:"oatmeal"},{name:"literal",value:"strawberry"},{name:"literal",value:"watermelon"},{name:"literal",value:"apple"},{name:"literal",value:"mint"},{name:"literal",value:"lemon"},{name:"literal",value:"sherbert"},{name:"literal",value:"tangerine"},{name:"literal",value:"compareTheMarket"},{name:"literal",value:"confused"},{name:"literal",value:"onfido"},{name:"literal",value:"twitter"},{name:"literal",value:"premfina"},{name:"literal",value:"checkout"},{name:"literal",value:"facebook"},{name:"literal",value:"stripe"},{name:"literal",value:"intercom"},{name:"literal",value:"ravelin"},{name:"literal",value:"rac"},{name:"literal",value:"hometree"}]},description:"set background colour"},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:"function to handle click"},rotate:{required:!1,tsType:{name:"number"},description:"rotation degrees"},m:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mx:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]}}]}}]},description:""},my:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},ml:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mr:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mt:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mb:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""}}};export{b as I};
