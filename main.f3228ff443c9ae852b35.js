(()=>{"use strict";var g={};class n{element;constructor({tag:e="div",parent:s,className:t,text:a}){this.element=document.createElement(e),t&&(this.element.className=t),s&&s.append(this.element),a&&(this.element.textContent=a)}}const o=JSON.parse('[{"key":"Backquote","english":{"code":"`","second":"~"},"russian":{"code":"\u0451","second":"\u0401"}},{"key":"Digit1","english":{"code":"1","second":"!"},"russian":{"code":"1","second":"!"}},{"key":"Digit2","english":{"code":"2","second":"@"},"russian":{"code":"2","second":"\\""}},{"key":"Digit3","english":{"code":"3","second":"#"},"russian":{"code":"3","second":"\u2116"}},{"key":"Digit4","english":{"code":"4","second":"$"},"russian":{"code":"4","second":";"}},{"key":"Digit5","english":{"code":"5","second":"%"},"russian":{"code":"5","second":"%"}},{"key":"Digit6","english":{"code":"6","second":"^"},"russian":{"code":"6","second":":"}},{"key":"Digit7","english":{"code":"7","second":"&"},"russian":{"code":"7","second":"?"}},{"key":"Digit8","english":{"code":"8","second":"*"},"russian":{"code":"8","second":"*"}},{"key":"Digit9","english":{"code":"9","second":"("},"russian":{"code":"9","second":"("}},{"key":"Digit0","english":{"code":"0","second":")"},"russian":{"code":"0","second":")"}},{"key":"Minus","english":{"code":"-","second":"_"},"russian":{"code":"-","second":"_"}},{"key":"Equal","english":{"code":"=","second":"+"},"russian":{"code":"=","second":"+"}},{"key":"Backspace","english":{"code":"Backspace"},"russian":{"code":"Backspace"},"special":"true"},{"key":"Tab","english":{"code":"Tab"},"russian":{"code":"Tab"},"special":"true"},{"key":"KeyQ","english":{"code":"q","second":"Q"},"russian":{"code":"\u0439","second":"\u0419"}},{"key":"KeyW","english":{"code":"w","second":"W"},"russian":{"code":"\u0446","second":"\u0426"}},{"key":"KeyE","english":{"code":"e","second":"E"},"russian":{"code":"\u0443","second":"\u0423"}},{"key":"KeyR","english":{"code":"r","second":"R"},"russian":{"code":"\u043A","second":"\u041A"}},{"key":"KeyT","english":{"code":"t","second":"T"},"russian":{"code":"\u0435","second":"\u0415"}},{"key":"KeyY","english":{"code":"y","second":"Y"},"russian":{"code":"\u043D","second":"\u041D"}},{"key":"KeyU","english":{"code":"u","second":"U"},"russian":{"code":"\u0433","second":"\u0413"}},{"key":"KeyI","english":{"code":"i","second":"I"},"russian":{"code":"\u0448","second":"\u0428"}},{"key":"KeyO","english":{"code":"o","second":"O"},"russian":{"code":"\u0449","second":"\u0429"}},{"key":"KeyP","english":{"code":"p","second":"P"},"russian":{"code":"\u0437","second":"\u0417"}},{"key":"BracketLeft","english":{"code":"[","second":"{"},"russian":{"code":"\u0445","second":"\u0425"}},{"key":"BracketRight","english":{"code":"]","second":"}"},"russian":{"code":"\u044A","second":"\u042A"}},{"key":"Backslash","english":{"code":"\\\\","second":"|"},"russian":{"code":"\\\\","second":"|"}},{"key":"Delete","english":{"code":"Del"},"russian":{"code":"Del"},"special":"true"},{"key":"CapsLock","english":{"code":"CapsLock"},"russian":{"code":"CapsLock"},"special":"true"},{"key":"KeyA","english":{"code":"a","second":"A"},"russian":{"code":"\u0444","second":"\u0424"}},{"key":"KeyS","english":{"code":"s","second":"S"},"russian":{"code":"\u044B","second":"\u042B"}},{"key":"KeyD","english":{"code":"d","second":"D"},"russian":{"code":"\u0432","second":"\u0412"}},{"key":"KeyF","english":{"code":"f","second":"F"},"russian":{"code":"\u0430","second":"\u0410"}},{"key":"KeyG","english":{"code":"g","second":"G"},"russian":{"code":"\u043F","second":"\u041F"}},{"key":"KeyH","english":{"code":"h","second":"H"},"russian":{"code":"\u0440","second":"\u0420"}},{"key":"KeyJ","english":{"code":"j","second":"J"},"russian":{"code":"\u043E","second":"\u041E"}},{"key":"KeyK","english":{"code":"k","second":"K"},"russian":{"code":"\u043B","second":"\u041B"}},{"key":"KeyL","english":{"code":"l","second":"L"},"russian":{"code":"\u0434","second":"\u0414"}},{"key":"Semicolon","english":{"code":";","second":":"},"russian":{"code":"\u0436","second":"\u0416"}},{"key":"Quote","english":{"code":"\'","second":"\\""},"russian":{"code":"\u044D","second":"\u042D"}},{"key":"Enter","english":{"code":"Enter"},"russian":{"code":"Enter"},"special":"true"},{"key":"ShiftLeft","english":{"code":"Shift"},"russian":{"code":"Shift"},"special":"true"},{"key":"KeyZ","english":{"code":"z","second":"Z"},"russian":{"code":"\u044F","second":"\u042F"}},{"key":"KeyX","english":{"code":"x","second":"X"},"russian":{"code":"\u0447","second":"\u0427"}},{"key":"KeyC","english":{"code":"c","second":"C"},"russian":{"code":"\u0441","second":"\u0421"}},{"key":"KeyV","english":{"code":"v","second":"V"},"russian":{"code":"\u043C","second":"\u041C"}},{"key":"KeyB","english":{"code":"b","second":"B"},"russian":{"code":"\u0438","second":"\u0418"}},{"key":"KeyN","english":{"code":"n","second":"N"},"russian":{"code":"\u0442","second":"\u0422"}},{"key":"KeyM","english":{"code":"m","second":"M"},"russian":{"code":"\u044C","second":"\u042C"}},{"key":"Comma","english":{"code":",","second":"<"},"russian":{"code":"\u0431","second":"\u0411"}},{"key":"Period","english":{"code":".","second":">"},"russian":{"code":"\u044E","second":"\u042E"}},{"key":"Slash","english":{"code":"/","second":"?"},"russian":{"code":".","second":","}},{"key":"ArrowUp","russian":{"code":"\u25B2"},"english":{"code":"\u25B2"},"special":"true"},{"key":"ShiftRight","russian":{"code":"Shift"},"english":{"code":"Shift"},"special":"true"},{"key":"ControlLeft","russian":{"code":"Ctrl"},"english":{"code":"Ctrl"},"special":"true"},{"key":"AltLeft","russian":{"code":"Alt"},"english":{"code":"Alt"},"special":"true"},{"key":"Space","russian":{"code":" "},"english":{"code":" "}},{"key":"AltRight","russian":{"code":"Alt gr"},"english":{"code":"Alt gr"},"special":"true"},{"key":"ArrowLeft","russian":{"code":"\u25C0"},"english":{"code":"\u25C0"},"special":"true"},{"key":"ArrowDown","russian":{"code":"\u25BC"},"english":{"code":"\u25BC"},"special":"true"},{"key":"ArrowRight","russian":{"code":"\u25B6"},"english":{"code":"\u25B6"},"special":"true"},{"key":"ControlRight","russian":{"code":"Ctrl"},"english":{"code":"Ctrl"},"special":"true"}]');class i extends n{textarea;static capslock=!1;static language;static shift=!1;english;russian;constructor({files:e,parent:s,className:t,textarea:a}){super({tag:"button",parent:s,className:`${t} ${e.key}`}),this.textarea=a,i.language=this.getLanguage(),this.getValues(e),this.getFirstValue(e),this.getListeners()}action(){const e=this.textarea.selectionStart+1;this.write(),this.moveCursorTo(e),this.addActive()}touchpadAction(){}moveCursorTo(e){this.textarea.setSelectionRange(e,e)}write(){this.textarea.value=`${this.textarea.value.slice(0,this.textarea.selectionStart)}${this.element.textContent}${this.textarea.value.slice(this.textarea.selectionStart)}`}addActive(){this.element.classList.add("active"),this.textarea.focus()}removeActive(){this.element.classList.remove("active"),this.textarea.focus()}getListeners(){this.element.addEventListener("mousedown",()=>{this.element.textContent!=="Shift"&&this.action()}),this.element.addEventListener("mouseup",()=>{this.element.textContent!=="Shift"&&this.removeActive()}),this.element.addEventListener("mouseout",()=>{this.element.textContent!=="Shift"&&this.removeActive()}),this.element.textContent==="Shift"&&this.element.addEventListener("click",this.touchpadAction.bind(this))}getValues(e){e.russian?this.russian=e.russian:this.russian=null,e.english?this.english=e.english:this.english=null}getSecondValue(){switch(i.language){case"english":this.english?.second&&(this.element.textContent=this.english.second);break;case"russian":this.russian?.second&&(this.element.textContent=this.russian.second);break;default:}}getLanguage(){const e=localStorage.getItem("language");return e==="english"||e==="russian"?e:"english"}changeLanguage(){switch(i.language){case"english":localStorage.language="russian",i.language="russian";break;case"russian":localStorage.language="english",i.language="english";break;default:}}getFirstValue(e){switch(i.language){case"english":this.english?this.element.textContent=this.english.code:this.element.textContent=e.key;break;case"russian":this.russian?this.element.textContent=this.russian.code:this.element.textContent=e.key;break;default:}}}class r extends i{keys;files;constructor({files:e,parent:s,className:t,textarea:a,keys:u}){super({files:e,parent:s,className:t,textarea:a}),this.keys=u,this.files=e}action(){switch(this.element.textContent){case"CapsLock":this.capslockAction();break;case"Backspace":this.backspaceAction();break;case"Tab":this.tabAction();break;case"Alt":this.altAction();break;case"Shift":this.shiftAction();break;case"Del":this.deleteAction();break;case"Enter":this.enterAction();break;case"\u25C0":this.leftAction();break;case"\u25B6":this.rightAction();break;default:}this.addActive()}touchpadAction(){this.element.textContent==="Shift"&&this.shiftTouchAction()}capslockAction(){Object.entries(this.keys).forEach(e=>{if(e[1].element.textContent?.match(/^[a-zA-Zа-яА-Я]$/)){const s=e[1];s.element.textContent&&(i.capslock===!1?s.element.textContent=s.element.textContent.toUpperCase():s.element.textContent=s.element.textContent.toLowerCase())}}),i.capslock===!1?i.capslock=!0:i.capslock=!1}backspaceAction(){if(this.textarea.selectionStart>0){const e=this.textarea.selectionStart-1;this.textarea.value=`${this.textarea.value.slice(0,this.textarea.selectionStart-1)}${this.textarea.value.slice(this.textarea.selectionStart)}`,this.moveCursorTo(e)}}deleteAction(){const e=this.textarea.selectionStart;this.textarea.value=`${this.textarea.value.slice(0,this.textarea.selectionStart)}${this.textarea.value.slice(this.textarea.selectionStart+1)}`,this.moveCursorTo(e)}tabAction(){const e=this.textarea.selectionStart+1;this.textarea.value=`${this.textarea.value.slice(0,this.textarea.selectionStart)}	${this.textarea.value.slice(this.textarea.selectionStart)}`,this.moveCursorTo(e)}shiftAction(){i.shift=!0,Object.values(this.keys).forEach(e=>e.getSecondValue())}shiftTouchAction(){i.shift?(i.shift=!1,Object.values(this.keys).forEach(e=>e.getFirstValue(this.files))):(i.shift=!0,Object.values(this.keys).forEach(e=>e.getSecondValue())),this.element.classList.toggle("active")}altAction(){i.shift&&(this.changeLanguage(),Object.values(this.keys).forEach(e=>{e.getSecondValue()}))}enterAction(){const e=this.textarea.selectionStart+1;this.textarea.value=`${this.textarea.value.slice(0,this.textarea.selectionStart)}
${this.textarea.value.slice(this.textarea.selectionStart)}`,this.moveCursorTo(e)}addActive(){super.addActive(),this.element.textContent==="Alt gr"&&this.keys.ControlLeft.element.classList.remove("active")}leftAction(){const e=this.textarea.selectionStart-1;this.moveCursorTo(e)}rightAction(){const e=this.textarea.selectionStart+1;this.moveCursorTo(e)}removeActive(){super.removeActive(),this.element.textContent==="Shift"&&(i.shift=!1,Object.values(this.keys).forEach(e=>e.getFirstValue(this.files)))}}class l extends n{keys;textarea;constructor(e,s){super({className:"keyboard",parent:e}),this.textarea=s,this.keys=this.getKeys(),document.addEventListener("keydown",t=>{t.repeat||this.keys[t.code]&&(t.preventDefault(),this.keys[t.code].action())}),document.addEventListener("keyup",t=>{this.keys[t.code]&&(t.preventDefault(),this.keys[t.code].removeActive())})}getKeys(){let e=new n({className:"row",parent:this.element});return o.reduce((s,t)=>{switch(t.key){case"Tab":case"CapsLock":case"ControlLeft":case"ShiftLeft":e=new n({className:"row",parent:this.element});break;default:break}return s[t.key]=this.getKeyClass(t,e.element,s),s},{})}getKeyClass(e,s,t){return e.special?new r({files:e,parent:s,className:"key special",textarea:this.textarea,keys:t}):new i({files:e,parent:s,className:"key",textarea:this.textarea})}}class d extends n{constructor(e){super({tag:"textarea",parent:e,className:"textarea"}),this.element.autocomplete="off",this.element.rows=6,this.element.focus()}}class h extends n{textarea;keyBoard;constructor(){super({tag:"main",parent:document.body,className:"main"}),this.textarea=new d(this.element),this.keyBoard=new l(this.element,this.textarea.element)}}localStorage.getItem("language")||localStorage.setItem("language","english");const k=new h})();

//# sourceMappingURL=main.f3228ff443c9ae852b35.js.map