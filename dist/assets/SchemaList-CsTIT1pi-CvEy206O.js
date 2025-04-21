import{Y as j,a as e,l as r,i as N,m as o,o as l,p as c,q as v,t as y,L as b,U as w,a5 as C,E as S}from"./entry.client-gckvCCPO.js";import{f as m}from"./index-LNp6rxyU-CWLM-vHV.js";import{R as $}from"./Toc-BK39DQvI-DlQUc91q.js";import{w as z,C as A,a as L,x as O}from"./SchemaView-DCSWtnYr-Do0Tu3Oc.js";import{d as U}from"./context-Lrf2Y9bR-DvWDIab9.js";import"./circular-ByJI6Mci-DyUshrVV.js";const q=S(`
  query GetSchemas($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      title
      description
      summary
      components {
        schemas {
          name
          schema
          extensions
        }
      }
    }
  }
`);function G(){var i;const{input:d,type:p,versions:h,version:x,options:t}=U(),u=z(q,{input:d,type:p}),{data:a}=j(u),n=((i=a.schema.components)==null?void 0:i.schemas)??[];if(!n.length)return e.jsx("div",{children:"No schemas found"});const f=Object.entries(h).length>1,g=(t==null?void 0:t.showVersionSelect)==="always"||f&&(t==null?void 0:t.showVersionSelect)!=="hide";return e.jsxs("div",{className:"grid grid-cols-[--sidecar-grid-cols] gap-8 justify-between","data-pagefind-filter":"section:openapi","data-pagefind-meta":"section:openapi",children:[e.jsxs("div",{className:"pt-[--padding-content-top] pb-[--padding-content-bottom]",children:[e.jsxs(r,{className:"w-full",children:[e.jsxs("div",{className:"flex flex-col gap-y-4 sm:flex-row justify-around items-start sm:items-end",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(N,{children:a.schema.title}),e.jsxs(o,{level:1,id:"schemas",registerSidebarAnchor:!0,className:"mb-0",children:["Schemas",g&&e.jsxs("span",{className:"text-xl text-muted-foreground ml-1.5",children:["(",x,")"]})]})]}),a.schema.description&&e.jsxs(l,{className:"flex items-center gap-1 text-sm font-medium text-muted-foreground group",children:[e.jsx("span",{children:"API information"}),e.jsx(A,{className:"group-data-[state=open]:hidden translate-y-px",size:14}),e.jsx(L,{className:"group-data-[state=closed]:hidden translate-y-px",size:13})]})]}),a.schema.description&&e.jsx(c,{className:"CollapsibleContent",children:e.jsx("div",{className:v(b,"pt-4 max-w-full prose-img:max-w-prose"),children:e.jsx(y,{className:"border rounded bg-muted/25 border-border px-2.5 md:px-4",content:a.schema.description})})})]}),e.jsx("hr",{className:"my-8"}),e.jsx("div",{className:"flex flex-col gap-y-5",children:n.map(s=>e.jsxs(r,{className:"group",defaultOpen:!0,children:[e.jsxs(o,{registerSidebarAnchor:!0,level:2,className:"flex items-center gap-1 justify-between w-fit",id:m(s.name),children:[s.name," ",e.jsx(l,{asChild:!0,children:e.jsx(w,{variant:"ghost",size:"icon",className:"size-6",children:e.jsx(C,{size:16,className:"group-data-[state=open]:rotate-90 transition cursor-pointer"})})})]}),e.jsx(c,{className:"mt-4 CollapsibleContent",children:e.jsx(O,{schema:s.schema})})]},s.name))})]}),e.jsx($,{entries:n.map(s=>({id:m(s.name),value:s.name,depth:1}))})]})}export{G as SchemaList};
//# sourceMappingURL=SchemaList-CsTIT1pi-CvEy206O.js.map
