import{u as p}from"./Dmlv9_OM.js";import{E as c,d,r as g,F as x,G as _,t as k,v,z as M,x as s,H as m,I as r,J as n,K as w,L as y}from"./CIo2gm8-.js";function b(l,t){const{title:i,titleTemplate:e,...u}=l;return p({title:i,titleTemplate:e,_flatMeta:u},{...t,transform(o){const a=c({...o._flatMeta});return delete o._flatMeta,{...o,meta:a}}})}const f={pwaInDevEnvironment:!1,webManifest:{href:"/manifest.webmanifest",useCredentials:!1,linkTag:'<link rel="manifest" href="/manifest.webmanifest">'}},h=d({async setup(){if(f){const l=g({link:[]});p(l);const{webManifest:t}=f;if(t){const{href:i,useCredentials:e}=t;e?l.value.link.push({rel:"manifest",href:i,crossorigin:"use-credentials"}):l.value.link.push({rel:"manifest",href:i})}}return()=>null}}),C={class:"flex flex-col gap-2 *:border"},z=d({__name:"index",setup(l){b({title:"My Amazing Site",ogTitle:"My Amazing Site",description:"This is my amazing site, let me tell you all about it.",ogDescription:"This is my amazing site, let me tell you all about it.",ogImage:"https://example.com/image.png",twitterCard:"summary_large_image",themeColor:"#ffffff"});const t=x({name:"",email:"",tel:"",message:""});return(i,e)=>{const u=h,o=_("maska");return k(),v(y,null,[M(u),s("form",C,[m(s("input",{type:"text",name:"name",placeholder:"Имя","onUpdate:modelValue":e[0]||(e[0]=a=>n(t).name=a)},null,512),[[r,n(t).name]]),m(s("input",{type:"email",name:"email",placeholder:"Почта","onUpdate:modelValue":e[1]||(e[1]=a=>n(t).email=a)},null,512),[[r,n(t).email]]),m(s("input",{type:"text",name:"tel",placeholder:"Телефон",inputmode:"numeric","data-maska":"+7 ### ###-##-##","onUpdate:modelValue":e[2]||(e[2]=a=>n(t).tel=a)},null,512),[[o],[r,n(t).tel]]),m(s("textarea",{cols:"30",rows:"10",placeholder:"Сообщение","onUpdate:modelValue":e[3]||(e[3]=a=>n(t).message=a)},null,512),[[r,n(t).message]]),s("button",{onClick:e[4]||(e[4]=w(()=>{},["prevent"]))},"Отправить")])],64)}}});export{z as default};
