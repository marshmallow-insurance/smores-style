import{a as f,j as u,s as Z,A as ee}from"./styled-components.browser.esm-CskBwHif.js";import{B as O}from"./Box-C7hh6OC3.js";import{I as b}from"./Icon-9S3c17xL.js";import{T as w}from"./Text-C5uudnUr.js";import{t as g}from"./theme-D50qMPxU.js";import"./index-BBkUAzwr.js";import"./polished.esm-D0h1-lPB.js";import"./focusOutline-JAHtHrmh.js";const d=({iconLeft:e,iconLeftColor:p="liquorice",iconRight:l,iconRightColor:m="marzipan",handleClick:h,heading:W,subHeading:G,type:J,borderTop:K=!0,borderBottom:Q=!0,boldHeading:U,...X})=>{const Y=screen.width;return f(ae,{type:J,iconLeft:e,borderTop:K,borderBottom:Q,iconRight:l,onClick:h,boldHeading:U,...X,children:[e&&u(b,{render:e,size:Y>768?24:18,color:p}),f(O,{children:[u(w,{tag:"h1",typo:"base",children:W}),u(w,{tag:"p",typo:"desc-small",color:"sesame",children:G})]}),l&&u(b,{className:"iconRight",render:l,size:24,rotate:l==="caret"?-90:0,color:m})]})},ae=Z(O)(({type:e,iconLeft:p,borderTop:l,borderBottom:m,boldHeading:h})=>ee`
    border-radius: ${e==="first"&&"16px 16px 0 0"||e==="curved"&&"16px"||e==="last"&&"0 0 16px 16px"||0};

    border-top: ${l&&e!=="curved"&&e!=="first"?`1px solid ${g.colors.oatmeal}`:"none"};
    border-bottom: ${m&&e!=="curved"&&e!=="last"?`1px solid ${g.colors.oatmeal}`:"none"};

    background-color: ${g.colors.custard};
    display: grid;
    grid-template-columns: ${p?"24px auto 24px":"auto 24px"};
    padding: 16px;
    grid-gap: 16px;
    align-items: center;

    cursor: pointer;

    h1 {
      font-weight: ${h&&500};
    }

    .iconRight {
      justify-self: end;
    }

    @media (min-width: 768px) {
      grid-gap: 24px;
    }
  `);try{d.displayName="Row",d.__docgenInfo={description:"",displayName:"Row",props:{iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"enum",value:[{value:'"id"'},{value:'"link"'},{value:'"filter"'},{value:'"confused"'},{value:'"onfido"'},{value:'"twitter"'},{value:'"premfina"'},{value:'"checkout"'},{value:'"facebook"'},{value:'"stripe"'},{value:'"intercom"'},{value:'"ravelin"'},{value:'"rac"'},{value:'"key"'},{value:'"property"'},{value:'"security"'},{value:'"download"'},{value:'"alert"'},{value:'"search"'},{value:'"location"'},{value:'"copy"'},{value:'"other"'},{value:'"aa-inverted"'},{value:'"accidental-damage"'},{value:'"account-breakdown"'},{value:'"account-mlp"'},{value:'"activity-clipboard"'},{value:'"add-ons"'},{value:'"address-mta"'},{value:'"album-audio"'},{value:'"alert-engine"'},{value:'"apple-pay"'},{value:'"approved-file"'},{value:'"breakdown-alt"'},{value:'"cancel-bw"'},{value:'"car-mta"'},{value:'"car-repairs"'},{value:'"car-replacement"'},{value:'"car-usage"'},{value:'"chat-bubble"'},{value:'"checkout-with-text"'},{value:'"circle-tick"'},{value:'"claim-line"'},{value:'"clipboard-check"'},{value:'"close-panel"'},{value:'"confused-blue"'},{value:'"contact-email"'},{value:'"dashboard-high"'},{value:'"direct-debit"'},{value:'"doc-download"'},{value:'"doc-upload"'},{value:'"edit-contact"'},{value:'"edit-outline"'},{value:'"email-filled"'},{value:'"falling-items"'},{value:'"file-badge-2"'},{value:'"file-cabinet"'},{value:'"fraud-alert"'},{value:'"freezer-food"'},{value:'"google-play-badge"'},{value:'"help-aboutus"'},{value:'"help-buypolicy"'},{value:'"help-center"'},{value:'"help-idcheck"'},{value:'"help-manage-policy"'},{value:'"help-ncd"'},{value:'"help-verification"'},{value:'"home-excluded"'},{value:'"house-tree"'},{value:'"ios-store-badge"'},{value:'"live-chat"'},{value:'"live-chat2"'},{value:'"log-out"'},{value:'"manage-drivers"'},{value:'"manage-policy"'},{value:'"maximise-window"'},{value:'"minus-circle"'},{value:'"money-bag"'},{value:'"money-heart"'},{value:'"more-dots"'},{value:'"new-window"'},{value:'"no-excess"'},{value:'"open-panel"'},{value:'"out-of-home"'},{value:'"padlock-outline"'},{value:'"phone-filled"'},{value:'"phone-outline"'},{value:'"pin-code"'},{value:'"plus-circle"'},{value:'"policy-details"'},{value:'"policy-doc"'},{value:'"policy-docs"'},{value:'"pound-bold"'},{value:'"pound-filled-circle"'},{value:'"pound-medium"'},{value:'"pound-outline"'},{value:'"pound-regular"'},{value:'"question-help"'},{value:'"refer-a-friend"'},{value:'"reg-plate"'},{value:'"renewal-line"'},{value:'"repeat-charge"'},{value:'"schedule-quote"'},{value:'"send-message"'},{value:'"shield-check"'},{value:'"thumbs-up"'},{value:'"tow-truck"'},{value:'"trace-and-access"'},{value:'"up-down"'},{value:'"upload-documents"'},{value:'"upload-email"'},{value:'"wheel-flat"'},{value:'"windscreen-repair"'},{value:'"windscreen-replacement"'},{value:'"aa"'},{value:'"addons"'},{value:'"amex"'},{value:'"arrow"'},{value:'"at"'},{value:'"axa"'},{value:'"bank"'},{value:'"basket"'},{value:'"bicycle"'},{value:'"boost"'},{value:'"breakdown"'},{value:'"briefcase"'},{value:'"burger"'},{value:'"bullets"'},{value:'"calendar"'},{value:'"camera"'},{value:'"cancel"'},{value:'"car"'},{value:'"card"'},{value:'"caret"'},{value:'"charge"'},{value:'"chat"'},{value:'"city"'},{value:'"claim"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"collpase"'},{value:'"crop"'},{value:'"cross"'},{value:'"earth"'},{value:'"edit"'},{value:'"engine"'},{value:'"europe"'},{value:'"excluded"'},{value:'"expand"'},{value:'"fence"'},{value:'"file"'},{value:'"fire"'},{value:'"flag"'},{value:'"folder"'},{value:'"fuel"'},{value:'"globe"'},{value:'"gpay"'},{value:'"house"'},{value:'"inbox"'},{value:'"included"'},{value:'"info"'},{value:'"injury"'},{value:'"instagram"'},{value:'"intercom2"'},{value:'"iphone"'},{value:'"jewellery"'},{value:'"laptop"'},{value:'"leaks"'},{value:'"lightbulb"'},{value:'"linkedin"'},{value:'"marshmallow"'},{value:'"mastercard"'},{value:'"maximise"'},{value:'"medical"'},{value:'"minimise"'},{value:'"minus"'},{value:'"mulsanne"'},{value:'"notes"'},{value:'"notification"'},{value:'"padlock"'},{value:'"people"'},{value:'"person"'},{value:'"photo"'},{value:'"plus"'},{value:'"policy"'},{value:'"profile"'},{value:'"prohibited"'},{value:'"refund"'},{value:'"renewal"'},{value:'"return"'},{value:'"settings"'},{value:'"shield"'},{value:'"shopping"'},{value:'"sofa"'},{value:'"stack"'},{value:'"storm"'},{value:'"subsidence"'},{value:'"theft"'},{value:'"tick"'},{value:'"training"'},{value:'"trash"'},{value:'"upload"'},{value:'"vandalism"'},{value:'"village"'},{value:'"visa"'},{value:'"warning"'},{value:'"watch"'},{value:'"wave"'},{value:'"wellbeing"'},{value:'"windscreen"'}]}},iconLeftColor:{defaultValue:{value:"liquorice"},description:"",name:"iconLeftColor",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'},{value:'"lollipop"'},{value:'"marshmallowPink"'},{value:'"bubblegum"'},{value:'"fairyFloss"'},{value:'"boba"'},{value:'"liquorice"'},{value:'"sesame"'},{value:'"chia"'},{value:'"mascarpone"'},{value:'"spearmint"'},{value:'"feijoa"'},{value:'"blueberry"'},{value:'"macaroon"'},{value:'"pistachio"'},{value:'"matcha"'},{value:'"caramel"'},{value:'"peanut"'},{value:'"marzipan"'},{value:'"strawberry"'},{value:'"watermelon"'},{value:'"apple"'},{value:'"mint"'},{value:'"lemon"'},{value:'"sherbert"'},{value:'"tangerine"'},{value:'"compareTheMarket"'},{value:'"confused"'},{value:'"onfido"'},{value:'"twitter"'},{value:'"premfina"'},{value:'"checkout"'},{value:'"facebook"'},{value:'"stripe"'},{value:'"intercom"'},{value:'"ravelin"'},{value:'"rac"'},{value:'"hometree"'}]}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"enum",value:[{value:'"id"'},{value:'"link"'},{value:'"filter"'},{value:'"confused"'},{value:'"onfido"'},{value:'"twitter"'},{value:'"premfina"'},{value:'"checkout"'},{value:'"facebook"'},{value:'"stripe"'},{value:'"intercom"'},{value:'"ravelin"'},{value:'"rac"'},{value:'"key"'},{value:'"property"'},{value:'"security"'},{value:'"download"'},{value:'"alert"'},{value:'"search"'},{value:'"location"'},{value:'"copy"'},{value:'"other"'},{value:'"aa-inverted"'},{value:'"accidental-damage"'},{value:'"account-breakdown"'},{value:'"account-mlp"'},{value:'"activity-clipboard"'},{value:'"add-ons"'},{value:'"address-mta"'},{value:'"album-audio"'},{value:'"alert-engine"'},{value:'"apple-pay"'},{value:'"approved-file"'},{value:'"breakdown-alt"'},{value:'"cancel-bw"'},{value:'"car-mta"'},{value:'"car-repairs"'},{value:'"car-replacement"'},{value:'"car-usage"'},{value:'"chat-bubble"'},{value:'"checkout-with-text"'},{value:'"circle-tick"'},{value:'"claim-line"'},{value:'"clipboard-check"'},{value:'"close-panel"'},{value:'"confused-blue"'},{value:'"contact-email"'},{value:'"dashboard-high"'},{value:'"direct-debit"'},{value:'"doc-download"'},{value:'"doc-upload"'},{value:'"edit-contact"'},{value:'"edit-outline"'},{value:'"email-filled"'},{value:'"falling-items"'},{value:'"file-badge-2"'},{value:'"file-cabinet"'},{value:'"fraud-alert"'},{value:'"freezer-food"'},{value:'"google-play-badge"'},{value:'"help-aboutus"'},{value:'"help-buypolicy"'},{value:'"help-center"'},{value:'"help-idcheck"'},{value:'"help-manage-policy"'},{value:'"help-ncd"'},{value:'"help-verification"'},{value:'"home-excluded"'},{value:'"house-tree"'},{value:'"ios-store-badge"'},{value:'"live-chat"'},{value:'"live-chat2"'},{value:'"log-out"'},{value:'"manage-drivers"'},{value:'"manage-policy"'},{value:'"maximise-window"'},{value:'"minus-circle"'},{value:'"money-bag"'},{value:'"money-heart"'},{value:'"more-dots"'},{value:'"new-window"'},{value:'"no-excess"'},{value:'"open-panel"'},{value:'"out-of-home"'},{value:'"padlock-outline"'},{value:'"phone-filled"'},{value:'"phone-outline"'},{value:'"pin-code"'},{value:'"plus-circle"'},{value:'"policy-details"'},{value:'"policy-doc"'},{value:'"policy-docs"'},{value:'"pound-bold"'},{value:'"pound-filled-circle"'},{value:'"pound-medium"'},{value:'"pound-outline"'},{value:'"pound-regular"'},{value:'"question-help"'},{value:'"refer-a-friend"'},{value:'"reg-plate"'},{value:'"renewal-line"'},{value:'"repeat-charge"'},{value:'"schedule-quote"'},{value:'"send-message"'},{value:'"shield-check"'},{value:'"thumbs-up"'},{value:'"tow-truck"'},{value:'"trace-and-access"'},{value:'"up-down"'},{value:'"upload-documents"'},{value:'"upload-email"'},{value:'"wheel-flat"'},{value:'"windscreen-repair"'},{value:'"windscreen-replacement"'},{value:'"aa"'},{value:'"addons"'},{value:'"amex"'},{value:'"arrow"'},{value:'"at"'},{value:'"axa"'},{value:'"bank"'},{value:'"basket"'},{value:'"bicycle"'},{value:'"boost"'},{value:'"breakdown"'},{value:'"briefcase"'},{value:'"burger"'},{value:'"bullets"'},{value:'"calendar"'},{value:'"camera"'},{value:'"cancel"'},{value:'"car"'},{value:'"card"'},{value:'"caret"'},{value:'"charge"'},{value:'"chat"'},{value:'"city"'},{value:'"claim"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"collpase"'},{value:'"crop"'},{value:'"cross"'},{value:'"earth"'},{value:'"edit"'},{value:'"engine"'},{value:'"europe"'},{value:'"excluded"'},{value:'"expand"'},{value:'"fence"'},{value:'"file"'},{value:'"fire"'},{value:'"flag"'},{value:'"folder"'},{value:'"fuel"'},{value:'"globe"'},{value:'"gpay"'},{value:'"house"'},{value:'"inbox"'},{value:'"included"'},{value:'"info"'},{value:'"injury"'},{value:'"instagram"'},{value:'"intercom2"'},{value:'"iphone"'},{value:'"jewellery"'},{value:'"laptop"'},{value:'"leaks"'},{value:'"lightbulb"'},{value:'"linkedin"'},{value:'"marshmallow"'},{value:'"mastercard"'},{value:'"maximise"'},{value:'"medical"'},{value:'"minimise"'},{value:'"minus"'},{value:'"mulsanne"'},{value:'"notes"'},{value:'"notification"'},{value:'"padlock"'},{value:'"people"'},{value:'"person"'},{value:'"photo"'},{value:'"plus"'},{value:'"policy"'},{value:'"profile"'},{value:'"prohibited"'},{value:'"refund"'},{value:'"renewal"'},{value:'"return"'},{value:'"settings"'},{value:'"shield"'},{value:'"shopping"'},{value:'"sofa"'},{value:'"stack"'},{value:'"storm"'},{value:'"subsidence"'},{value:'"theft"'},{value:'"tick"'},{value:'"training"'},{value:'"trash"'},{value:'"upload"'},{value:'"vandalism"'},{value:'"village"'},{value:'"visa"'},{value:'"warning"'},{value:'"watch"'},{value:'"wave"'},{value:'"wellbeing"'},{value:'"windscreen"'}]}},iconRightColor:{defaultValue:{value:"marzipan"},description:"",name:"iconRightColor",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'},{value:'"lollipop"'},{value:'"marshmallowPink"'},{value:'"bubblegum"'},{value:'"fairyFloss"'},{value:'"boba"'},{value:'"liquorice"'},{value:'"sesame"'},{value:'"chia"'},{value:'"mascarpone"'},{value:'"spearmint"'},{value:'"feijoa"'},{value:'"blueberry"'},{value:'"macaroon"'},{value:'"pistachio"'},{value:'"matcha"'},{value:'"caramel"'},{value:'"peanut"'},{value:'"marzipan"'},{value:'"strawberry"'},{value:'"watermelon"'},{value:'"apple"'},{value:'"mint"'},{value:'"lemon"'},{value:'"sherbert"'},{value:'"tangerine"'},{value:'"compareTheMarket"'},{value:'"confused"'},{value:'"onfido"'},{value:'"twitter"'},{value:'"premfina"'},{value:'"checkout"'},{value:'"facebook"'},{value:'"stripe"'},{value:'"intercom"'},{value:'"ravelin"'},{value:'"rac"'},{value:'"hometree"'}]}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"(() => void)"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},subHeading:{defaultValue:null,description:"",name:"subHeading",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"first"'},{value:'"last"'},{value:'"curved"'}]}},borderTop:{defaultValue:{value:"true"},description:"",name:"borderTop",required:!1,type:{name:"boolean"}},borderBottom:{defaultValue:{value:"true"},description:"",name:"borderBottom",required:!1,type:{name:"boolean"}},boldHeading:{defaultValue:null,description:"",name:"boldHeading",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const ce={title:"Row",component:d,argTypes:{handleClick:{action:"clicked"}}},a=e=>u(d,{...e}),o=a.bind({});o.args={iconLeft:"info",iconLeftColor:"liquorice",iconRight:"caret",iconRightColor:"subtext",heading:"A lovely heading",subHeading:"The quick brown fox jumps over the lazy dog",type:"curved",borderTop:!0,borderBottom:!0};const r=a.bind({});r.args={heading:"A lovely heading",subHeading:"A row without an IconLeft or IconRight"};const v=a.bind({});v.args={heading:"A lovely heading without a subheading",iconLeft:"info",iconRight:"download"};const i=a.bind({});i.args={heading:"A row with a bold heading",subHeading:"A row with a heading that has a font weight of 500",boldHeading:!0};const n=a.bind({});n.args={heading:"The first row",subHeading:"A first row with curved corners at the top and no bottom border",type:"first",borderBottom:!1};const t=a.bind({});t.args={heading:"A middle row",subHeading:"A row with angular corners to go between 'first' and 'last' rows"};const c=a.bind({});c.args={heading:"The last row",subHeading:"A last row with curved corners at the bottom and no top border",type:"last",borderTop:!1};const s=a.bind({});s.args={heading:"A curved row",type:"curved",subHeading:"A curved row with a border radius of 8px on all corners"};var y,k,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"(props: RowProps) => <Row {...props} />",...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var R,q,P;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:"(props: RowProps) => <Row {...props} />",...(P=(q=r.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var V,S,A;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:"(props: RowProps) => <Row {...props} />",...(A=(S=v.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var H,C,T;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:"(props: RowProps) => <Row {...props} />",...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var j,_,z;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:"(props: RowProps) => <Row {...props} />",...(z=(_=n.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var B,L,$;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:"(props: RowProps) => <Row {...props} />",...($=(L=t.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var I,N,F;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:"(props: RowProps) => <Row {...props} />",...(F=(N=c.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var M,D,E;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:"(props: RowProps) => <Row {...props} />",...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const se=["Default","NoIcons","NoSubheading","BoldHeading","First","Middle","Last","Curved"];export{i as BoldHeading,s as Curved,o as Default,n as First,c as Last,t as Middle,r as NoIcons,v as NoSubheading,se as __namedExportsOrder,ce as default};
