(()=>{"use strict";class e{constructor(e,t,n,r,a,l){this.frequency=e,this.id=t,this.difficulty=n,this.problemUrl=r,this.problemName=a,this.acceptance=l}}class t extends e{constructor(e,t,n,r,a,l,i,o){super(e,t,n,r,a,l),this.companyName=i,this.duration=o}}class n{constructor(){this.data={}}getList(e){return e in this.data?this.data[e]:[]}push(e,t){if(e in this.data)return void this.data[e].push(t);let n=new a;n.push(t),this.data[e]=n}}class r{static SIXMONTHS="6 months";static TWOYEARS="2 years";static ALLTIME="All time";static ONEYEAR="1 year";static DURATION_LIST=[r.SIXMONTHS,r.ONEYEAR,r.TWOYEARS,r.ALLTIME]}class a extends Array{sort(e,t=!1){(new e).sort(this,t)}}class l{static COLOR_ACCENT="#62C555"}class i{constructor(){this.elementModifier=[]}injectFunctionToTargetElement(e){this.elementModifier.push(e)}modifyElement(){this.modifyActiveElement(),this.addObserverToCompaniesSection()}modifyActiveElement(){let e=document.getElementsByClassName("swiper-slide-active"),t=e[e.length-1].getElementsByTagName("a");for(let e=0;e<=t.length-1;e++){let n=t[e].href.split("/"),r=n[n.length-1],a=t[e];null==a.getAttribute("company-name")&&a.setAttribute("company-name",r),a.href="javascript:void(0)";for(let e=0;e<=this.elementModifier.length-1;e++)this.elementModifier[e](a);this.onModifyElementSuccess(a)}}onModifyElementSuccess(e){let t=e.getElementsByTagName("span");t[t.length-1].style.backgroundColor=l.COLOR_ACCENT}addObserverToCompaniesSection(){var e=document.getElementsByClassName("mt-0")[0];const t=new MutationObserver((()=>{this.modifyActiveElement()}));e?t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}):window.setTimeout((()=>{addObserverToCompaniesSection()}),500)}}class o{getValue(e,t){return e[t]}doSwap(e,t){return e>t}swap(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}partition(e,t,n,r){let a=this.getValue(e,n),l=t-1;for(let i=t;i<=n-1;i++){let t=this.getValue(e,i),n=this.doSwap(t,a);r&&(n=!n),n&&(l++,this.swap(e,l,i))}return this.swap(e,l+1,n),l+1}sort(e,t=!1){this.quickSort(e,0,e.length-1,t)}quickSort(e,t,n,r){if(null==n&&null==t&&(n=e.length-1,t=0),t<n){let a=this.partition(e,t,n,r);this.quickSort(e,t,a-1,r),this.quickSort(e,a+1,n,r)}}}class s extends o{getValue(e,t){return e[t].acceptance}}class d extends o{getValue(e,t){return e[t].difficulty}doSwap(e,t){let n=["Easy","Medium","Hard"];return n.indexOf(e)<n.indexOf(t)}}class c extends o{getValue(e,t){return parseInt(e[t].id)}}class h extends o{getValue(e,t){return e[t].problemName}doSwap(e,t){let n="abcdefghijklmnopqrstuvwxyz",r=e[0].toLowerCase(),a=t[0].toLowerCase();return n.indexOf(r)<n.indexOf(a)}}class m extends o{getValue(e,t){return e[t].frequency}}function u(e){e.style.textDecoration="underline",e.style.cursor="pointer",e.style.fontWeight="bold",e.style.color="blue"}class p{static generateTextElement(e){let t=document.createElement("div"),n=document.createElement("h3");return n.textContent=e,n.style="color: black;\n        text-align: center;\n        ",t.appendChild(n),t}static generateProblemIdElement(e){let t=p.generateTextElement(e);return t.style="\n       width: 5%\n       ",t}static generateProblemFrequencyElement(e){let t=document.createElement("div");t.setAttribute("title",String(Math.round(100*e))+"%"),t.style="\n        display: flex;\n        height: 1rem;\n        overflow: hidden;\n        font-size: .75rem;\n        background-color: #e9ecef;\n        border-radius: 0.5rem;\n        margin-top: auto;\n        margin-bottom: auto;\n        width:10%; \n        ";let n=document.createElement("div");return n.style=`\n        border-radius: 0.5rem;\n        height:100%; \n        width:${100*e}%; \n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        overflow: hidden;\n        color: #fff;\n        background-color: #0d6efd;\n        `,t.appendChild(n),t}static generateProblemNameElement(e,t){let n=document.createElement("div"),r=document.createElement("a");return r.href=t,r.textContent=e,n.appendChild(r),n.style="\n        width: 50%\n        ",n}static generateProblemDifficultyElement(e){let t=p.generateTextElement(e);return t.style="\n        width: 12%\n        ",t}static generateProblemAcceptanceElement(e){let t=p.generateTextElement(e);return t.style="\n        width: 10%\n        ",t}static generateRowElement(){let e=document.createElement("div");return e.style="\n        display:flex;\n        border-top: solid 1px black;\n        ",e}static generateTableContentElement(e){let t=document.createElement("div");for(let n=0;n<=e.length-1;n++){let r=p.generateRowElement(),a=e[n].frequency,l=e[n].id,i=e[n].difficulty,o=e[n].problemUrl,s=e[n].problemName,d=String(Math.round(100*e[n].acceptance))+"%";r.appendChild(p.generateProblemIdElement(l)),r.appendChild(p.generateProblemNameElement(s,o)),r.appendChild(p.generateProblemAcceptanceElement(d)),r.appendChild(p.generateProblemDifficultyElement(i)),r.appendChild(p.generateProblemFrequencyElement(a)),t.append(r)}return t.id="table-content",t}static generateDurationElement(e){let t=document.createElement("button");return t.innerText=e,t.style=" \n        width:5%\n        ",t.setAttribute("duration",e),t}}class g{constructor(e,t){this.parentElement=t,this.tableId="table-content",this.companyData=e,this.shownData=[],this.currentlySortedBy="",this.isReverseSorted=!1}createDurationsRowElement(){let e=p.generateRowElement();for(let t=0;t<=r.DURATION_LIST.length-1;t++){let n=r.DURATION_LIST[t],a=p.generateDurationElement(n);u(a),a.addEventListener("click",this.onDurationButtonClicked),e.appendChild(a)}return e}createHeaderRowElement(){let e=p.generateRowElement(),t=p.generateProblemIdElement("#"),n=p.generateProblemNameElement("Title","javascript:void(0)"),r=p.generateProblemAcceptanceElement("Acceptance"),a=p.generateProblemDifficultyElement("Difficulty"),l=p.generateProblemAcceptanceElement("Frequency");return u(t.firstChild),u(n.firstChild),u(r.firstChild),u(a.firstChild),u(l.firstChild),t.addEventListener("click",this.getOnHeaderClickedFunction(c).bind(this)),n.addEventListener("click",this.getOnHeaderClickedFunction(h).bind(this)),r.addEventListener("click",this.getOnHeaderClickedFunction(s).bind(this)),a.addEventListener("click",this.getOnHeaderClickedFunction(d).bind(this)),l.addEventListener("click",this.getOnHeaderClickedFunction(m).bind(this)),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(a),e.appendChild(l),e}appendToContainer(){this.parentElement.appendChild(this.createTableElement())}createTableElement(){let e=document.createElement("div");this.shownData=this.companyData.getList(r.ALLTIME),this.shownData.sort(c),this.currentlySortedBy=c.name,this.isReverseSorted=!1;let t=this.createHeaderRowElement(),n=p.generateTableContentElement(this.shownData);return e.appendChild(this.createDurationsRowElement()),e.appendChild(t),e.appendChild(n),e}onDurationButtonClicked=e=>{this.shownData=this.companyData.getList(e.currentTarget.getAttribute("duration")),this.swapContentTableElement(this.shownData)};getOnHeaderClickedFunction(e){return()=>{e.name==this.currentlySortedBy?(this.shownData.sort(e,!this.isReverseSorted),this.isReverseSorted=!this.isReverseSorted):(this.shownData.sort(e),this.currentlySortedBy=e.name,this.isReverseSorted=!1),this.swapContentTableElement(this.shownData)}}swapContentTableElement=e=>{null!=document.getElementById(this.tableId)&&document.getElementById(this.tableId).remove();let t=p.generateTableContentElement(e);this.parentElement.appendChild(t)}}class b{constructor(){this.modal=this.createModal(),this.modalContentBox=this.createModalContentBox(),this.appendToModal(this.modalContentBox),this.appendModal(document.body)}createModalContentBox(){let e=document.createElement("div");return e.style="\n        background-color: #fefefe;\n        margin-top:1%; \n        margin-left: auto;\n        margin-right: auto;\n        padding: 20px;\n        width: 80%;\n        mid-height: 15%\n        ",e}getModalContentBox(){return this.modalContentBox}appendModal(e){e.appendChild(this.modal)}appendToModal(e){this.modal.appendChild(e)}appendToContainer(e){this.modalContentBox.appendChild(e)}createCloseButton(){let e=document.createElement("span");return e.style=" \n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n        cursor: pointer;\n        ",e.innerText="x",e.addEventListener("click",resetModal),e}createModal(){let e=document.createElement("div");return e.style=" \n        display: none; \n        position: fixed; \n        z-index: 32;\n        left: 0;\n        top: 0;\n        width: 100%; \n        height: 100%; \n        overflow: auto; \n        ",window.addEventListener("click",this.onModalClicked),e.id="CompanyModal",e}openModal(){this.modal.style.display=""}closeModal(){this.modal.style.display="none"}clearModalContent(){for(;null!=this.modalContentBox.firstChild;)this.modalContentBox.firstChild.remove()}onModalClicked=e=>{e.target==this.modal&&this.resetModal()};resetModal=()=>{this.closeModal(),this.clearModalContent()}}class f{static API_KEY="AIzaSyDDAE3rf1fjLGKM0FUHQeTcsmS6fCQjtDs";static SHEETS_ID="1hW-bfeFKSkEDzfjaDMjDQmgsupEZz3gysXpG0mrf6QE";static getUrl(e){return`https://sheets.googleapis.com/v4/spreadsheets/${f.SHEETS_ID}/values/${e}?key=${f.API_KEY}`}}class E{fetchData(){return this.fetchProblemData()}async fetchProblemData(){let e=f.getUrl("Problem!A:B"),t=await fetch(e),n=await t.json();return this.parseProblemData(n.values)}parseProblemData(e){let t={};for(let n=0;n<=e.length-1;n++){let r=e[n][0],a=e[n][1];t[r]=a}return t}}class y{constructor(){this.companyPageTableData={},this.tableDataFetched=!1,this.fetchCompanyPageTable()}fetchData(e){return 0==this.tableDataFetched?this.fetchCompanyPageTable().then((t=>this.fetchCompanyProblemData(e))):this.fetchCompanyProblemData(e)}fetchCompanyPageTable(){let e=f.getUrl("CompaniesProblem_Map!A:C");return fetch(e).then((e=>e.json())).then((e=>{this.parseCompanyPageTableData(e.values)})).then(this.tableDataFetched=!0)}fetchCompanyProblemData(e){if(e in this.companyPageTableData==0)return new Promise(((e,t)=>e(new n)));let t=`CompaniesProblem!A${this.companyPageTableData[e][0]}:I${this.companyPageTableData[e][1]}`,r=f.getUrl(t);return fetch(r).then((e=>e.json())).then((e=>this.parseCompanyProblemData(e.values)))}parseCompanyPageTableData(e){for(let t=1;t<=e.length-1;t++){let n=e[t][0],r=e[t][1],a=e[t][2];this.companyPageTableData[n]=[r,a]}return this.companyPageTableData}parseCompanyProblemData(e){let r=new n;for(let n=0;n<=e.length-1;n++){let a=e[n][2],l=e[n][1],i=e[n][7],o=e[n][6],s=e[n][4],d=e[n][5],c=e[n][0],h=e[n][3],m=new t(a,l,i,o,s,d,c,h);r.push(h,m)}return r}}class C{constructor(){this.elementModifier=[]}modifyElement(){this.observer=new MutationObserver((()=>{this.modifyActiveElement()})),this.modifyActiveElement(),this.addObserverToProblemTable()}injectFunctionToTargetElement(e){this.elementModifier.push(e)}modifyActiveElement=()=>{this.disconnectObserverToProblemTable();let e=document.querySelector('[role="rowgroup"]').querySelectorAll('[role="row"]');for(let t=0;t<=e.length-1;t++){let n=e[t].querySelectorAll('[role="cell"]'),r=n[1].textContent,a=n[n.length-1],l=r.split(".")[0];a.setAttribute("problem-id",String(l));for(let e=0;e<=this.elementModifier.length-1;e++)this.elementModifier[e](a)}this.addObserverToProblemTable()};disconnectObserverToProblemTable(){this.observer.disconnect()}addObserverToProblemTable(){let e=document.querySelector('[role="table"]');this.observer.observe(e,{childList:!0,subtree:!0})}}class T{constructor(e){this.elementModifier=new C,this.dataFetcher=new E}onFetchFail(){console.log("Problem Frequency Fetch Fail")}onFetchSuccess(){this.elementModifier.injectFunctionToTargetElement(T.removeProgressbarUnlockButton),this.elementModifier.injectFunctionToTargetElement(this.insertInnerProgressbar),this.elementModifier.modifyElement()}unlock(){this.dataFetcher.fetchData().then((e=>{this.problemData=e})).then(this.onFetchSuccess.bind(this)).catch(this.onFetchFail)}insertInnerProgressbar=e=>{let t=e.getAttribute("problem-id"),n=this.problemData[t];null==n&&(n=0),n*=100;let r="inner-progressbar",a=e.getElementsByClassName(r),i=e.getElementsByClassName("rounded-l-lg")[0];a.length>0&&a[0].remove(),i.setAttribute("title",`${Math.round(n)}%`);let o=function(e){let t=document.createElement("div");return t.style=`\n    background-color: ${l.COLOR_ACCENT};\n    width: ${e}%;\n    height: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n    border-top-left-radius: 0.5rem;\n    `,t}(n);o.classList.add(r),i.appendChild(o)};static removeProgressbarUnlockButton(e){let t=e.getElementsByTagName("svg")[0],n=e.getElementsByClassName("rounded-r-lg")[0],r=e.getElementsByClassName("rounded-l-lg")[0];null!=t&&t.remove(),null!=n&&n.remove(),null!=r&&(r.style="\n            border-bottom-right-radius: 0.5rem;\n            overflow: hidden; \n            border-top-right-radius: 0.5rem\n            ")}}!function(e){for(const t in e)if(window.location.href.includes(t)){let n=e[t];for(let e=0;e<=n.length-1;e++)try{(new n[e]).unlock()}catch(t){console.log(n[e].constructor.name+" Error "+t)}break}}({"https://leetcode.com/problemset":[T,class{constructor(){this.elementModifier=new i,this.dataFetcher=new y,this.containerManager=new b}unlock(){this.elementModifier.injectFunctionToTargetElement(this.getFunctionToBeInjected()),this.elementModifier.modifyElement()}getFunctionToBeInjected(){return e=>{e.addEventListener("click",this.onCompanyButtonClick)}}onCompanyButtonClick=e=>{let t=e.currentTarget.getAttribute("company-name");this.dataFetcher.fetchData(t).then((e=>this.onFetchSuccess(e)))};onFetchSuccess(e){new g(e,this.containerManager.getModalContentBox()).appendToContainer(),this.containerManager.openModal()}}],"https://leetcode.com/problem-list":[T]})})();