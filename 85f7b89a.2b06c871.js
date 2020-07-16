(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var o=n(2),a=n(9),r=(n(0),n(196)),s={id:"known-issues",title:"Known Issues"},i={id:"guides/known-issues",isDocsHomePage:!1,title:"Known Issues",description:"Known Issues",source:"@site/../docs/guides/known-issues.md",permalink:"/typegoose/docs/guides/known-issues",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/known-issues.md",sidebar:"guides",previous:{title:"FAQ",permalink:"/typegoose/docs/guides/faq"},next:{title:"Deprecation Codes",permalink:"/typegoose/docs/guides/deprecation-codes"}},p=[{value:"Known Issues",id:"known-issues",children:[{value:"transpile-only",id:"transpile-only",children:[]},{value:"tsconfig-paths",id:"tsconfig-paths",children:[]},{value:"Self-Containing classes",id:"self-containing-classes",children:[]},{value:"Class-transformer",id:"class-transformer",children:[]},{value:"Babel",id:"babel",children:[]},{value:"prop on get &amp; set",id:"prop-on-get--set",children:[]}]},{value:"Known Mongoose incompatibilities",id:"known-mongoose-incompatibilities",children:[{value:"typePojoToMixed",id:"typepojotomixed",children:[]},{value:"@types/mongoose@5.7.22 and higher",id:"typesmongoose5722-and-higher",children:[]}]}],c={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"known-issues"},"Known Issues"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Automattic/mongoose/issues?utf8=%E2%9C%93&q=is%3Aissue+involves%3Ahasezoey"}),"Please look here first, to decide if it is a Typegoose or an Mongoose issue.")),Object(r.b)("h3",{id:"transpile-only"},"transpile-only"),Object(r.b)("p",null,"Never run ",Object(r.b)("inlineCode",{parentName:"p"},"ts-node --transpile-only")," or ",Object(r.b)("inlineCode",{parentName:"p"},"tsc --transpile-only"),", otherwise sometimes types are missing completly or are the wrong type."),Object(r.b)("h3",{id:"tsconfig-paths"},"tsconfig-paths"),Object(r.b)("p",null,"TypeScript provides the option to alias paths (with ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig-paths"),"), but is somehow incompatible with Typegoose, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"%5Bszokodiakos#392%5D(https://github.com/szokodiakos/typegoose/issues/392)"}),"more info in here")),Object(r.b)("h3",{id:"self-containing-classes"},"Self-Containing classes"),Object(r.b)("p",null,"It is currently not possible to use a self-containing class (sub-documents)"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'class SomeClass {\n  @prop()\n  public ref: SomeClass; // ERROR "Maximum Class Stack Size Exceeded"\n}\n')),Object(r.b)("p",null,"For References, this will work"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"class SomeClass {\n  @prop({ ref: () => SomeClass }) // or hardcode the string\n  public ref: Ref<SomeClass>;\n}\n")),Object(r.b)("h3",{id:"class-transformer"},"Class-transformer"),Object(r.b)("p",null,"Typegoose (/Mongoose) currently doesn't work well with ",Object(r.b)("inlineCode",{parentName:"p"},"class-transformer"),". When you want to get a POJO, use ",Object(r.b)("inlineCode",{parentName:"p"},"model.operation.lean()")," OR ",Object(r.b)("inlineCode",{parentName:"p"},"doc.toJSON()")," - but ",Object(r.b)("inlineCode",{parentName:"p"},"classToPlain")," (or any other method from CT) will not work and map incorrect properties (More info: ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/typegoose/typegoose/issues/61"}),"typegoose#61"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"%5Btypegoose#96%5D(https://github.com/typegoose/typegoose/issues/96)#issuecomment-549031131"}),"typegoose#9 (comment)"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/typestack/class-transformer/issues/227"}),"class-transformer#227"),")"),Object(r.b)("h3",{id:"babel"},"Babel"),Object(r.b)("p",null,"Using babel as a TypeScript compiler is known to cause problems (like incorrect types)",Object(r.b)("br",{parentName:"p"}),"\n","We recommened you use ",Object(r.b)("inlineCode",{parentName:"p"},"tsc")," directly, or ",Object(r.b)("inlineCode",{parentName:"p"},"ts-node")," or ",Object(r.b)("inlineCode",{parentName:"p"},"ts-jest")," for jest-testing"),Object(r.b)("p",null,"If Babel is still needed, then read ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-typescript"}),"Babel TypeScript preset")," and install the following plugins:\nyou will need to reproduce the ",Object(r.b)("inlineCode",{parentName:"p"},"--experimentalDecorators")," and ",Object(r.b)("inlineCode",{parentName:"p"},"--emitDecoratorMetadata")," ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#typescript-compiler-options"}),"TypeScript compiler options")," by using the corresponding plugins for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-proposal-decorators"}),"enabling decorators")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/leonardfactory/babel-plugin-transform-typescript-metadata"}),"emitting decorator metadata"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  plugins: [\n    ['@babel/plugin-proposal-decorators', { legacy: true }],\n    'babel-plugin-transform-typescript-metadata',\n  ]\n}\n")),Object(r.b)("h3",{id:"prop-on-get--set"},"prop on get & set"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@prop")," cannot be applied to ",Object(r.b)("inlineCode",{parentName:"p"},"get")," & ",Object(r.b)("inlineCode",{parentName:"p"},"set")," (ES6), because virtuals do not accept options & schema.loadClass wouldn't load these."),Object(r.b)("h2",{id:"known-mongoose-incompatibilities"},"Known Mongoose incompatibilities"),Object(r.b)("h3",{id:"typepojotomixed"},"typePojoToMixed"),Object(r.b)("p",null,"This option will ",Object(r.b)("strong",{parentName:"p"},"NOT")," work, because there is no neat / simple way of defining such a thing in the same class."),Object(r.b)("p",null,"Workaround:",Object(r.b)("br",{parentName:"p"}),"\n","Create multiple classes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"class Sub {\n  @prop()\n  public name: string;\n}\n\nclass Parent {\n  @prop()\n  public subDoc: Sub;\n}\n")),Object(r.b)("h3",{id:"typesmongoose5722-and-higher"},"@types/",Object(r.b)("a",Object(o.a)({parentName:"h3"},{href:"mailto:mongoose@5.7.22"}),"mongoose@5.7.22")," and higher"),Object(r.b)("p",null,"Since ",Object(r.b)("inlineCode",{parentName:"p"},"@types/mongoose@5.7.22"),", there are types for ",Object(r.b)("inlineCode",{parentName:"p"},".create"),", but they are not fully compatible with Typegoose's types. So if an error comes up that cannot be fixed, the workaround is to use ",Object(r.b)("inlineCode",{parentName:"p"},"<any>")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"model.create<any>({ anything: anything });\n")))}l.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(n),d=o,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);