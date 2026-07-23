import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{l as r,n as ee,t as i,u as te}from"./themeProps-_oSbOSxB.js";import{F as a,H as ne,S as re,W as o,Y as ie,b as ae,c as oe,ot as s,t as c}from"./utils-DOLhrwAA.js";import{t as l}from"./jsx-runtime-DqZldVDK.js";import{n as se}from"./useTooltip-BScYHAso.js";import{n as ce,t as u}from"./Spinner-CFeSAPh-.js";import{n as d,t as f}from"./VisuallyHidden-DDrJpIxj.js";import{n as p,r as le}from"./SizeContext-fcGnTOs5.js";import{n as m,t as h}from"./Icon-CIT2X0Ez.js";import{r as ue,t as g}from"./i18n-BRxp72yJ.js";import{n as de}from"./usePopover-CvON3GyX.js";import{t as _}from"./Popover-CmXk94R0.js";import{t as v}from"./Tooltip-6-bg43io.js";import{i as y,n as fe,o as pe,t as b}from"./Calendar-CpHm4ted.js";import{t as me}from"./Field-0gz6l3j2.js";import{a as he,c as x,o as ge,s as _e,t as S}from"./Field-CFBnQG31.js";import{a as C,i as ve,n as ye,r as be}from"./InputGroupContext-DfUisVOG.js";function w({label:e,isLabelHidden:t=!1,description:n,isOptional:r=!1,isRequired:i=!1,isDisabled:o=!1,disabledMessage:c,value:l,onChange:u,changeAction:f,isLoading:p=!1,min:h,max:g,dateConstraints:_,placeholder:v,size:y,status:b,labelTooltip:S,hasClear:C=!1,numberOfMonths:ye=1,format:w=`date_long`,width:O,xstyle:k,className:xe,style:Se,ref:Ce,...we}){let A=ue(),Te=v??A(`@astryx.dateInput.placeholder`),j=le(y,`md`),M=(0,T.useId)(),N=(0,T.useId)(),P=(0,T.useId)(),Ee=(0,T.useId)(),F=(0,T.useRef)(null),I=(0,T.useRef)(null),L=(0,T.useRef)(void 0),R=be(),[,z]=(0,T.useTransition)(),[B,V]=(0,T.useOptimistic)(l),H=p||B!==l,U=o||H,W=o&&!!c,G=se({placement:`above`,focusTrigger:`always`,isEnabled:W}),De={warning:`warning`,error:`error`,success:`success`},Oe={warning:`warning`,error:`error`,success:`success`},{isDateDisabled:K}=pe({min:h,max:g,dateConstraints:_}),{ariaLabelledBy:ke,ariaDescribedBy:Ae}=oe(N,[n?P:null,b?.message?Ee:null,W?G.describedBy:null],R),[q,J]=(0,T.useState)(null),Y=(0,T.useRef)(l);l!==Y.current&&(Y.current=l,l!==L.current&&(L.current=void 0,q!==null&&J(null)));let je=(0,T.useCallback)(e=>typeof w==`function`?w(e):ne(ie(e),w),[w]),Me=q===null?B&&/^\d{4}-\d{2}-\d{2}$/.test(B)?je(B):``:q,X=q===null||!q.trim()?!0:a(q)!==null,Z=de({dialogLabel:A(`@astryx.dateInput.dialogLabel`),closeButtonLabel:A(`@astryx.dateInput.closeCalendar`),onHide:()=>F.current?.focus()}),Ne=(0,T.useCallback)(()=>{U||(Z.isOpen?Z.hide():Z.show())},[U,Z]),Pe=(0,T.useCallback)(()=>{!U&&!Z.isOpen&&Z.show({skipAutoFocus:!0})},[U,Z]),Q=(0,T.useCallback)(e=>{H||(u?.(e),f&&z(async()=>{V(e),await f(e)}))},[H,u,f,z,V]),Fe=(0,T.useCallback)(()=>{Q(void 0),F.current?.focus()},[Q]),Ie=(0,T.useCallback)(e=>{Q(e),J(null),Z.hide()},[Q,Z]),Le=(0,T.useCallback)(e=>{if(U)return;let t=e.target.value;J(t);let n=a(t);if(n&&s(n)!==l&&!K(n)){let e=s(n);L.current=e,Q(e),I.current?.navigateTo(e)}},[l,Q,K,U]),$=(0,T.useCallback)(()=>{if(q===null)return;if(!q.trim()){l!==void 0&&Q(void 0),J(null);return}let e=a(q);if(e&&!K(e)){let t=s(e);t!==l&&Q(t)}J(null)},[q,l,Q,K]),Re=(0,T.useCallback)(()=>{$()},[$]),ze=(0,T.useCallback)(e=>{e.key===`Escape`&&Z.isOpen?(e.preventDefault(),Z.hide()):(e.key===`ArrowDown`||e.altKey&&e.key===`ArrowDown`)&&!Z.isOpen?(e.preventDefault(),U||Z.show({skipAutoFocus:!0})):e.key===`Enter`&&(e.preventDefault(),$())},[Z,$,U]),Be=(0,E.jsxs)(`div`,{ref:e=>{Z.triggerRef(e),G.ref(e)},...we,...re(ee(`date-input`,{size:j,status:b?.type??null}),te(x.base,D[j],U&&x.disabled,b&&he[b.type],b&&_e[b.type],b&&ge[b.type],R&&ve.inGroup,k),xe,Se),children:[R&&(0,E.jsx)(d,{id:N,children:e}),(0,E.jsx)(`button`,{type:`button`,onClick:Ne,disabled:U,"aria-label":Z.isOpen?A(`@astryx.dateInput.toggleCalendarClose`):A(`@astryx.dateInput.openCalendar`),...{0:{className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto`},1:{className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto astryx1h6gzvc`}}[!!U<<0],children:(0,E.jsx)(m,{icon:`calendar`,size:`sm`,color:`secondary`})}),(0,E.jsx)(`input`,{ref:ae(Ce,F),id:M,type:`text`,role:`combobox`,value:Me,onChange:Le,onBlur:Re,onClick:Pe,onKeyDown:ze,placeholder:Te,disabled:U&&!W,"aria-disabled":W?`true`:void 0,readOnly:W||void 0,"aria-labelledby":ke,"aria-describedby":Ae,"aria-required":i===!0?`true`:void 0,"aria-invalid":b?.type===`error`||!X?`true`:void 0,"aria-busy":H||void 0,"aria-expanded":Z.isOpen,"aria-haspopup":`dialog`,"aria-controls":Z.isOpen?Z.id:void 0,"aria-autocomplete":`none`,autoComplete:`off`,...{0:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5`},2:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc`},1:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryxv1l7n4`},3:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc astryxv1l7n4`}}[!!U<<1|!X<<0]}),(0,E.jsx)(d,{as:`div`,role:`alert`,"aria-live":`assertive`,children:X?``:`Invalid date`}),C&&l!==void 0&&!U&&(0,E.jsx)(`button`,{type:`button`,onClick:Fe,"aria-label":A(`@astryx.dateInput.clear`,{label:e}),className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto`,children:(0,E.jsx)(m,{icon:`close`,size:`sm`,color:`secondary`})}),H&&(0,E.jsx)(ce,{size:`sm`}),b&&!R&&(0,E.jsx)(m,{icon:De[b.type],size:`md`,color:Oe[b.type]}),Z.render((0,E.jsx)(fe,{handleRef:I,mode:`single`,value:B,onChange:Ie,min:h,max:g,dateConstraints:_,numberOfMonths:ye}),{placement:`below`,alignment:`start`}),W&&G.renderTooltip(c)]});return R?Be:(0,E.jsx)(me,{label:e,isLabelHidden:t,description:n,inputID:M,descriptionID:n?P:void 0,isOptional:r,isRequired:i,isDisabled:o,status:b?{type:b.type,message:b.message,messageID:b.message?Ee:void 0}:void 0,labelTooltip:S,width:O,children:Be})}var T,E,D,O=e((()=>{T=t(n(),1),r(),S(),h(),f(),ye(),C(),p(),u(),b(),y(),_(),v(),c(),o(),E=l(),i(),g(),D={sm:{kZKoxP:`astryx6k0iem`,k7Eaqz:`astryxfb3i0g`,$$css:!0},md:{kZKoxP:`astryx1ueg155`,k7Eaqz:`astryxfb3i0g`,$$css:!0},lg:{kZKoxP:`astryxssyfek`,k7Eaqz:`astryxfb3i0g`,$$css:!0}},w.displayName=`DateInput`,w.__docgenInfo={description:`A date picker component combining a text input with a calendar popover.

@example
\`\`\`
<DateInput
  label="Event date"
  value={date}
  onChange={setDate}
/>
\`\`\``,methods:[],displayName:`DateInput`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`Ref forwarded to the root element`},label:{required:!0,tsType:{name:`string`},description:`Label text for the input (required for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed between the label and input.`},isOptional:{required:!1,tsType:{name:`boolean`},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:`false`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the input is disabled. When set together with
\`isDisabled\`, the input shows a tooltip with this text on hover and
keyboard focus, and the field stays focusable (via \`aria-disabled\`)
so the reason is discoverable by keyboard and assistive technology.
Typing and calendar activation stay blocked.

Use this instead of wrapping a disabled input in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<DateInput
  label="Event date"
  value={date}
  onChange={setDate}
  isDisabled
  disabledMessage="You need the Editor role to change this"
/>
\`\`\``},value:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`The selected date in ISO format (YYYY-MM-DD).`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: ISODateString | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`ISODateString | undefined`,elements:[{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:`undefined`}]},name:`value`}],return:{name:`void`}}},description:`Callback fired when the date changes.
Called with undefined when input is cleared.`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: ISODateString | undefined) => void | Promise<void>`,signature:{arguments:[{type:{name:`union`,raw:`ISODateString | undefined`,elements:[{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:`undefined`}]},name:`value`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Async action on change. Fires after onChange.`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether the input is in a loading state.
@default false`,defaultValue:{value:`false`,computed:!1}},min:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`Minimum selectable date in ISO format.`},max:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`Maximum selectable date in ISO format.`},dateConstraints:{required:!1,tsType:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`function`,raw:`(date: Date) => boolean`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`boolean`}}}],raw:`ReadonlyArray<(date: Date) => boolean>`},description:`Custom date constraint functions. Date is disabled if ANY function returns false.`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text shown when no date is selected.
@default "Select a date"`},size:{required:!1,tsType:{name:`unknown`},description:`The size of the input.
- 'sm': Compact size (18px height)
- 'md': Default size (26px height)
@default 'md'`},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator for the input.
When set, displays a colored border and status icon.
If message is provided, displays below the input.`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text to display in an info icon at the end of the label.`},hasClear:{required:!1,tsType:{name:`boolean`},description:`Whether to show a clear button when a date is set.
When clicked, resets the value to undefined and returns focus to the input.
@default false`,defaultValue:{value:`false`,computed:!1}},numberOfMonths:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:`Number of months to display in the calendar popover.
@default 1`,defaultValue:{value:`1`,computed:!1}},format:{required:!1,tsType:{name:`union`,raw:`DateInputFormat | ((value: ISODateString) => string)`,elements:[{name:`Extract`,elements:[{name:`union`,raw:`| 'relative'
| 'auto'
| 'date'
| 'date_long'
| 'date_weekday'
| 'date_time'
| 'time'
| 'system_date'
| 'system_date_time'
| 'system_time'`,elements:[{name:`literal`,value:`'relative'`},{name:`literal`,value:`'auto'`},{name:`literal`,value:`'date'`},{name:`literal`,value:`'date_long'`},{name:`literal`,value:`'date_weekday'`},{name:`literal`,value:`'date_time'`},{name:`literal`,value:`'time'`},{name:`literal`,value:`'system_date'`},{name:`literal`,value:`'system_date_time'`},{name:`literal`,value:`'system_time'`}]},{name:`union`,raw:`'date' | 'date_long' | 'date_weekday' | 'system_date'`,elements:[{name:`literal`,value:`'date'`},{name:`literal`,value:`'date_long'`},{name:`literal`,value:`'date_weekday'`},{name:`literal`,value:`'system_date'`}]}],raw:`Extract<
  TimestampFormat,
  'date' | 'date_long' | 'date_weekday' | 'system_date'
>`},{name:`unknown`}]},description:`How the committed date value is displayed in the text field. Accepts a
named format reused from \`Timestamp\`'s \`format\` vocabulary (so the same
literal renders the same date shape in both components) or a function that
maps the ISO value to a custom display string.

- \`'date_long'\` (default): long-month date, e.g. "March 21, 2026"
- \`'date'\`: short-month date, e.g. "Mar 21, 2026"
- \`'date_weekday'\`: short weekday + date, e.g. "Wed, Mar 21, 2026"
- \`'system_date'\`: ISO 8601 calendar date, e.g. "2026-03-21"
- \`(value: ISODateString) => string\`: fully custom display string

Formatting applies only to the committed value — never to text the user is
actively typing. A custom function's output that \`parseDateInput\` cannot
read back can't be re-committed after an edit; external \`value\` changes
always recompute the display from the ISO value.

@default 'date_long'
@example
\`\`\`
<DateInput label="Ship date" value={date} onChange={setDate} format="date" />
<DateInput
  label="Ship date"
  value={date}
  onChange={setDate}
  format={iso => new Date(iso + 'T00:00').toDateString()}
/>
\`\`\``,defaultValue:{value:`'date_long'`,computed:!1}}},composes:[`Omit`]}})),k=e((()=>{O()}));export{w as n,O as r,k as t};