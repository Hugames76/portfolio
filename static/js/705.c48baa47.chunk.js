"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[705],{4705:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var r=t(2791),l=t(9141),n=t(4029),s=t(3190),c=t(184);const i=t(6676),o=t(9438),d=()=>{const{language:e}=(0,r.useContext)(s.A),a=[{id:1,name:"en"===e?i.contactaddress:o.contactaddress,icon:(0,c.jsx)(n.i63,{})},{id:2,name:"en"===e?i.contactemailAddress:o.contactemailAddress,icon:(0,c.jsx)(n.Imn,{})},{id:3,name:"en"===e?i.contactphoneNumber:o.contactphoneNumber,icon:(0,c.jsx)(n.tUt,{})}];return(0,c.jsx)("div",{className:"w-full lg:w-1/2",children:(0,c.jsxs)("div",{className:"text-left max-w-xl px-6",children:[(0,c.jsx)("h2",{className:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8",children:"en"===e?i.contactcontactDetails:o.contactcontactDetails}),(0,c.jsx)("ul",{className:"font-general-regular",children:a.map((e=>(0,c.jsxs)("li",{className:"flex",children:[(0,c.jsx)("i",{className:"text-2xl text-gray-500 dark:text-gray-400 mr-4",children:e.icon}),(0,c.jsx)("span",{className:"text-lg mb-4 text-ternary-dark dark:text-ternary-light",children:e.name})]},e.id)))})]})})};var m=t(992);const x=e=>{let{inputLabel:a,labelFor:t,inputType:r,inputId:l,inputName:n,placeholderText:s,ariaLabelName:i}=e;return(0,c.jsxs)("div",{className:"font-general-regular mb-4",children:[(0,c.jsx)("label",{className:"block text-lg text-primary-dark dark:text-primary-light mb-1",htmlFor:t,children:a}),(0,c.jsx)("input",{className:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",type:r,id:l,name:n,placeholder:s,"aria-label":i,required:!0})]})},u=t(6676),p=t(9438),g=()=>{const{language:e}=(0,r.useContext)(s.A),[a,t]=(0,r.useState)(!1),[l,n]=(0,r.useState)(!1);return(0,c.jsx)("div",{className:"w-full lg:w-1/2",children:(0,c.jsx)("div",{className:"leading-loose",children:(0,c.jsxs)("form",{onSubmit:e=>{e.preventDefault();const a=new FormData(e.target);fetch("static/php/sendEmail.php",{method:"POST",body:a}).then((e=>{e.ok?(console.log("E-mail envoy\xe9 avec succ\xe8s"),t(!0)):(console.error("Erreur lors de l'envoi de l'e-mail"),n(!0))})).catch((e=>{console.error("Erreur lors de la requ\xeate :",e),n(!0)}))},className:"max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left",children:[(0,c.jsx)("p",{className:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8",children:"en"===e?u.contactTitle:p.contactTitle}),(0,c.jsx)(x,{inputLabel:"en"===e?u.contactfullName:p.contactfullName,labelFor:"name",inputType:"text",inputId:"name",inputName:"name",placeholderText:"en"===e?u.contactyourName:p.contactyourName,ariaLabelName:"Name"}),(0,c.jsx)(x,{inputLabel:"Email",labelFor:"email",inputType:"email",inputId:"email",inputName:"email",placeholderText:"en"===e?u.contactyourEmail:p.contactyourEmail,ariaLabelName:"Email"}),(0,c.jsx)(x,{inputLabel:"en"===e?u.contactsubject:p.contactsubject,labelFor:"subject",inputType:"text",inputId:"subject",inputName:"subject",placeholderText:"en"===e?u.contactsubject:p.contactsubject,ariaLabelName:"Subject"}),(0,c.jsxs)("div",{className:"mt-6",children:[(0,c.jsx)("label",{className:"block text-lg text-primary-dark dark:text-primary-light mb-2",htmlFor:"message",children:"en"===e?u.contactmessage:p.contactmessage}),(0,c.jsx)("textarea",{className:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Message"})]}),(0,c.jsx)("div",{className:"font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500",children:a?(0,c.jsx)("span",{className:"text-green-500",children:"\u2713"}):(0,c.jsx)(m.Z,{title:"en"===e?u.contactsendMessage:p.contactsendMessage,type:"submit","aria-label":"Send Message",className:l?"bg-red-500 hover:bg-red-600":""})})]})})})},b=()=>(0,c.jsxs)(l.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.5,delay:.1},className:"container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10",children:[(0,c.jsx)(g,{}),(0,c.jsx)(d,{})]})}}]);
//# sourceMappingURL=705.c48baa47.chunk.js.map