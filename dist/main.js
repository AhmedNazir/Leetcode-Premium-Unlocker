(()=>{"use strict";class e{constructor(e,t,n,i,a,s){this.frequency=e,this.id=t,this.difficulty=n,this.problemUrl=i,this.problemName=a,this.acceptance=s}}class t extends e{constructor(e,t,n,i,a,s,r,l){super(e,t,n,i,a,s),this.companyName=r,this.duration=l}}class n{constructor(e,t,n){this.url=n,this.duration=e,this.company=t}}class i{constructor(){this.data={}}getKeys(){return Object.keys(this.data)}getList(e){return e in this.data?this.data[e]:[]}}class a extends i{push(e,t){if(e in this.data)return void this.data[e].push(t);let n=[];n.push(t),this.data[e]=n}}class s extends i{push(e,t){if(e in this.data)return void this.data[e].push(t);let n=new r;n.push(t),this.data[e]=n}}class r extends Array{sort(e,t=!1){(new e).sort(this,t)}}class l{static COLOR_ACCENT="#62C555";static BACKGROUND_CONTAINER_COLOR="#101010";static SUB_BACKGROUND_CONTAINER_COLOR="#282828";static TEXT_COLOR="#dcdcdc";static TEXT_COLOR_SELECTED="#7d7d7d"}class o{constructor(){this.elementModifier=[]}injectFunctionToTargetElement(e){this.elementModifier.push(e)}modifyElement(){this.modifyActiveElement(),this.addObserverToCompaniesSection()}modifyActiveElement(){let e=document.getElementsByClassName("swiper-slide-active"),t=e[e.length-1].getElementsByTagName("a");for(let e=0;e<=t.length-1;e++){let n=t[e].href.split("/"),i=n[n.length-1],a=t[e];null==a.getAttribute("company-name")&&a.setAttribute("company-name",i),a.href="javascript:void(0)";for(let e=0;e<=this.elementModifier.length-1;e++)this.elementModifier[e](a);this.onModifyElementSuccess(a)}}onModifyElementSuccess(e){let t=e.getElementsByTagName("span");t[t.length-1].style.backgroundColor=l.COLOR_ACCENT}addObserverToCompaniesSection(){var e=document.getElementsByClassName("mt-0")[0];const t=new MutationObserver((()=>{this.modifyActiveElement()}));e?t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}):window.setTimeout((()=>{this.addObserverToCompaniesSection()}),500)}}class d{getValue(e,t){return e[t]}doSwap(e,t){return e>t}swap(e,t,n){let i=e[t];e[t]=e[n],e[n]=i}partition(e,t,n,i){let a=this.getValue(e,n),s=t-1;for(let r=t;r<=n-1;r++){let t=this.getValue(e,r),n=this.doSwap(t,a);i&&(n=!n),n&&(s++,this.swap(e,s,r))}return this.swap(e,s+1,n),s+1}sort(e,t=!1){this.quickSort(e,0,e.length-1,t)}quickSort(e,t,n,i){if(null==n&&null==t&&(n=e.length-1,t=0),t<n){let a=this.partition(e,t,n,i);this.quickSort(e,t,a-1,i),this.quickSort(e,a+1,n,i)}}}class c extends d{getValue(e,t){return e[t].acceptance}}class h extends d{getValue(e,t){return e[t].difficulty}doSwap(e,t){let n=["Easy","Medium","Hard"];return n.indexOf(e)<n.indexOf(t)}}class m extends d{getValue(e,t){return parseInt(e[t].id)}}class u extends d{getValue(e,t){return e[t].problemName}doSwap(e,t){let n="abcdefghijklmnopqrstuvwxyz",i=e[0].toLowerCase(),a=t[0].toLowerCase();return n.indexOf(i)<n.indexOf(a)}}class g extends d{getValue(e,t){return e[t].frequency}}class p{static generateTextElement(e){let t=document.createElement("div"),n=document.createElement("h3");return n.textContent=e,n.style=`color: ${l.TEXT_COLOR};\n        text-align: center;\n        `,t.appendChild(n),t}static generateProblemIdElement(e){let t=p.generateTextElement(e);return t.style="\n       width: 5%\n       ",t}static generateProblemFrequencyElement(e){let t=document.createElement("div");t.setAttribute("title",String(Math.round(100*e))+"%"),t.style=`\n        display: flex;\n        height: 1rem;\n        overflow: hidden;\n        font-size: .75rem;\n        background-color: ${l.SUB_BACKGROUND_CONTAINER_COLOR};\n        border-radius: 0.5rem;\n        margin-top: auto;\n        margin-bottom: auto;\n        width:10%; \n        `;let n=document.createElement("div");return n.style=`\n        border-radius: 0.5rem;\n        height:100%; \n        width:${100*e}%; \n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        overflow: hidden;\n        color: #fff;\n        background-color: ${l.COLOR_ACCENT};\n        `,t.appendChild(n),t}static generateProblemNameElement(e,t){let n=document.createElement("div"),i=document.createElement("a");return i.href=t,i.textContent=e,i.style=`\n            color:${l.TEXT_COLOR}; \n        `,n.appendChild(i),n.style="\n        width: 50%\n        ",n}static generateProblemDifficultyElement(e){let t=p.generateTextElement(e);switch(t.style="\n        width: 12%\n        ",e){case"Hard":t.children[0].style.color="red";break;case"Medium":t.children[0].style.color="orange";break;case"Easy":t.children[0].style.color="green"}return t}static generateProblemAcceptanceElement(e){let t=p.generateTextElement(e);return t.style="\n        width: 10%\n        ",t}static generateRowElement(){let e=document.createElement("div");return e.style=`\n        display:flex;\n        border-top: solid 1px ${l.SUB_BACKGROUND_CONTAINER_COLOR};\n        `,e}static generateTableContentElement(e){let t=document.createElement("div");for(let n=0;n<=e.length-1;n++){let i=p.generateRowElement(),a=e[n].frequency,s=e[n].id,r=e[n].difficulty,l=e[n].problemUrl,o=e[n].problemName,d=String(Math.round(100*e[n].acceptance))+"%";i.appendChild(p.generateProblemIdElement(s)),i.appendChild(p.generateProblemNameElement(o,l)),i.appendChild(p.generateProblemAcceptanceElement(d)),i.appendChild(p.generateProblemDifficultyElement(r)),i.appendChild(p.generateProblemFrequencyElement(a)),t.append(i)}return t.id="table-content",t}static generateDurationElement(e){let t=document.createElement("button");return t.innerText=e,t.style=" \n        width:auto; \n        margin-right: 2%; \n        ",t.setAttribute("duration",e),t.addEventListener("select",(()=>{t.classList.add("selected-duration-button"),t.classList.remove("unselected-duration-button")})),t.addEventListener("unselect",(()=>{t.classList.add("unselected-duration-button"),t.classList.remove("selected-duration-button")})),t.classList.add("unselected-duration-button"),t}static generateTitleElement(e){let t=document.createElement("h2");return t.innerText=e,t.style=`\n        color:${l.TEXT_COLOR}; \n        font-size:1.5em;`,t}}class b{constructor(){this.tableId="table-content",this.shownData=[],this.currentlySortedBy="",this.isReverseSorted=!1,this.parentDiv=document.createElement("div"),this.durationData={},this.currentlySelectedDuration=void 0}setShownData(e){return this.shownData=e,this}buildTitleRow(e){let t=p.generateRowElement();return t.style.justifyContent="center",t.appendChild(p.generateTitleElement(e)),this.parentDiv.appendChild(t),this}addDurationData(e,t){this.durationData[e]=t}buildDurationsRow(){let e=p.generateRowElement();for(let t in this.durationData){let n=p.generateDurationElement(t);if(n.classList.add("clickable"),n.addEventListener("click",this.onDurationButtonClicked),e.appendChild(n),null==this.currentlySelectedDuration){this.currentlySelectedDuration=n;let e=new Event("select");this.currentlySelectedDuration.dispatchEvent(e)}}return this.parentDiv.appendChild(e),this}buildHeaderRow(){let e=p.generateRowElement(),t=p.generateProblemIdElement("#"),n=p.generateProblemNameElement("Title","javascript:void(0)"),i=p.generateProblemAcceptanceElement("Acceptance"),a=p.generateProblemDifficultyElement("Difficulty"),s=p.generateProblemAcceptanceElement("Frequency");return t.firstChild.classList.add("clickable"),n.firstChild.classList.add("clickable"),i.firstChild.classList.add("clickable"),a.firstChild.classList.add("clickable"),s.firstChild.classList.add("clickable"),t.firstChild.classList.add("default-text-color"),n.firstChild.classList.add("default-text-color"),i.firstChild.classList.add("default-text-color"),a.firstChild.classList.add("default-text-color"),s.firstChild.classList.add("default-text-color"),t.addEventListener("click",this.getOnHeaderClickedFunction(m).bind(this)),n.addEventListener("click",this.getOnHeaderClickedFunction(u).bind(this)),i.addEventListener("click",this.getOnHeaderClickedFunction(c).bind(this)),a.addEventListener("click",this.getOnHeaderClickedFunction(h).bind(this)),s.addEventListener("click",this.getOnHeaderClickedFunction(g).bind(this)),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a),e.appendChild(s),this.parentDiv.appendChild(e),this}buildTable(e=u){this.shownData.sort(e),this.currentlySortedBy=e.name,this.isReverseSorted=!1;let t=p.generateTableContentElement(this.shownData);return this.parentDiv.appendChild(t),this}getResult(){return this.parentDiv}onDurationButtonClicked=e=>{let t=new Event("select");e.currentTarget.dispatchEvent(t);let n=new Event("unselect");this.currentlySelectedDuration.dispatchEvent(n),this.currentlySelectedDuration=e.currentTarget,this.shownData=this.durationData[e.currentTarget.getAttribute("duration")],this.swapContentTableElement(this.shownData)};getOnHeaderClickedFunction(e){return()=>{e.name==this.currentlySortedBy?(this.shownData.sort(e,!this.isReverseSorted),this.isReverseSorted=!this.isReverseSorted):(this.shownData.sort(e),this.currentlySortedBy=e.name,this.isReverseSorted=!1),this.swapContentTableElement(this.shownData)}}swapContentTableElement=e=>{null!=document.getElementById(this.tableId)&&document.getElementById(this.tableId).remove();let t=p.generateTableContentElement(e);this.parentDiv.appendChild(t)}}class f{constructor(){if(f._instance)throw new Error("Modal Manager Have been instantiated");f._instance=this,this.modal=this.createModal(),this.modalContentBox=this.createModalContentBox(),this.appendToModal(this.modalContentBox),this.appendModal(document.body)}createModalContentBox(){let e=document.createElement("div");return e.style=`\n        background-color: ${l.BACKGROUND_CONTAINER_COLOR};\n        margin-top:1%; \n        margin-left: auto;\n        margin-right: auto;\n        padding: 20px;\n        max-width: 80%;\n        min-width: 60%\n        mid-height: 15%; \n        border-radius:15px; \n        `,e}getModalContentBox(){return this.modalContentBox}appendModal(e){e.appendChild(this.modal)}appendToModal(e){this.modal.appendChild(e)}appendToContainer(e){this.modalContentBox.appendChild(e)}showLoadingIcon(){let e=document.createElement("div");e.classList.add("loading-logo"),this.modalContentBox.appendChild(e)}createCloseButton(){let e=document.createElement("span");return e.style=" \n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n        cursor: pointer;\n        ",e.innerText="x",e.addEventListener("click",resetModal),e}createModal(){let e=document.createElement("div");return e.style=" \n        display: none; \n        position: fixed; \n        z-index: 32;\n        left: 0;\n        top: 0;\n        width: 100%; \n        height: 100%; \n        overflow: auto; \n        ",window.addEventListener("click",this.onModalClicked),e.id="CompanyModal",e}openModal(){this.modal.style.display=""}closeModal(){this.modal.style.display="none"}clearModalContent(){for(;null!=this.modalContentBox.firstChild;)this.modalContentBox.firstChild.remove()}onModalClicked=e=>{e.target==this.modal&&this.resetModal()};resetModal=()=>{this.closeModal(),this.clearModalContent()}}let C=new f;class E{static API_KEY="AIzaSyDDAE3rf1fjLGKM0FUHQeTcsmS6fCQjtDs";static SHEETS_ID="1hW-bfeFKSkEDzfjaDMjDQmgsupEZz3gysXpG0mrf6QE";static TESTING_SHEETS_ID="1TJUhILyqBYsXWaPSUGwN1EvzBFeRNg1MgXH_SVqjQJo";static getUrl(e){return`https://sheets.googleapis.com/v4/spreadsheets/${E.SHEETS_ID}/values/${e}?key=${E.API_KEY}`}}class y{fetchData(){return this.fetchProblemData()}async fetchProblemData(){let e=E.getUrl("Problem!A:B"),t=await fetch(e),n=await t.json();return this.parseProblemData(n.values)}parseProblemData(e){let t={};for(let n=0;n<=e.length-1;n++){let i=e[n][0],a=e[n][1];t[i]=a}return t}}class T{constructor(){this.companyPageTableData={},this.cachedData={},this.tableDataFetched=!1,this.fetchCompanyPageTable()}fetchData(e){return 0==this.tableDataFetched?this.fetchCompanyPageTable().then((t=>this.fetchCompanyProblemData(e))):this.fetchCompanyProblemData(e)}fetchCompanyPageTable(){let e=E.getUrl("CompaniesProblem_Map!A:C");return fetch(e).then((e=>e.json())).then((e=>{this.parseCompanyPageTableData(e.values)})).then(this.tableDataFetched=!0)}fetchCompanyProblemData(e){if(e in this.cachedData)return new Promise(((t,n)=>t(this.cachedData[e])));if(e in this.companyPageTableData==0)return new Promise(((e,t)=>e(new s)));let t=`CompaniesProblem!A${this.companyPageTableData[e][0]}:I${this.companyPageTableData[e][1]}`,n=E.getUrl(t);return fetch(n).then((e=>e.json())).then((t=>this.parseCompanyProblemData(e,t.values)))}parseCompanyPageTableData(e){for(let t=1;t<=e.length-1;t++){let n=e[t][0],i=e[t][1],a=e[t][2];this.companyPageTableData[n]=[i,a]}return this.companyPageTableData}parseCompanyProblemData(e,n){let i=new s;for(let e=0;e<=n.length-1;e++){let a=n[e][2],s=n[e][1],r=n[e][7],l=n[e][6],o=n[e][4],d=n[e][5],c=n[e][0],h=n[e][3],m=new t(a,s,r,l,o,d,c,h);i.push(h,m)}return this.cachedData[e]=i,i}}class v{fetchData(e){let t=`${e}!A2:F`,n=E.getUrl(t);return fetch(n).then((e=>e.json())).then((e=>this.parseTopQuestionData(e.values)))}parseTopQuestionData(t){let n=new r;for(let i=0;i<=t.length-1;i++){let a=t[i][0],s=t[i][1],r=t[i][2],l=t[i][3],o=t[i][4],d=t[i][5],c=new e(s,a,d,o,r,l);n.push(c)}return n}}class w{constructor(){this.map={},this.mapFetched=!1,this.fetchtProblemTagsMap()}fetchData(e){return this.mapFetched?this.fetchProblemTag(e):this.fetchtProblemTagsMap().then((t=>this.fetchProblemTag(e)))}fetchProblemTag(e){if(!(e in this.map))return new Promise(((e,t)=>e(new a)));let t=`ProblemCompaniesTags!A${this.map[e][0]}:C${this.map[e][1]}`,n=E.getUrl(t);return fetch(n).then((e=>e.json())).then((e=>this.parseProblemTagData(e.values)))}parseProblemTagData(e){let t=new a;for(let i=0;i<=e.length-1;i++){let a=e[i][0],s=e[i][1],r=e[i][2],l=new n;l.duration=s,l.company=r,l.url=a,t.push(s,l)}return this.cachedData=t,t}fetchtProblemTagsMap(){let e=E.getUrl("ProblemCompaniesTags_Map!A:C");return fetch(e).then((e=>e.json())).then((e=>this.setProblemTagMap(e.values)))}setProblemTagMap(e){for(let t=0;t<=e.length-1;t++){let n=e[t][0],i=e[t][1],a=e[t][2];this.map[n]=[i,a]}this.mapFetched=!0}}class D{constructor(){this.elementModifier=[]}modifyElement(){this.observer=new MutationObserver((()=>{this.modifyActiveElement()})),this.modifyActiveElement(),this.addObserverToProblemTable()}injectFunctionToTargetElement(e){this.elementModifier.push(e)}modifyActiveElement=()=>{this.disconnectObserverToProblemTable();let e=document.querySelector('[role="rowgroup"]').querySelectorAll('[role="row"]');for(let t=0;t<=e.length-1;t++){let n=e[t].querySelectorAll('[role="cell"]'),i=n[1].textContent,a=n[n.length-1],s=i.split(".")[0];a.setAttribute("problem-id",String(s));for(let e=0;e<=this.elementModifier.length-1;e++)this.elementModifier[e](a)}this.addObserverToProblemTable()};disconnectObserverToProblemTable(){this.observer.disconnect()}addObserverToProblemTable(){let e=document.querySelector('[role="table"]');this.observer.observe(e,{childList:!0,subtree:!0})}}class M{constructor(){this.elementModifier=new D,this.dataFetcher=new y}onFetchSuccess(){this.elementModifier.injectFunctionToTargetElement(M.removeProgressbarUnlockButton),this.elementModifier.injectFunctionToTargetElement(this.insertInnerProgressbar),this.elementModifier.modifyElement()}unlock(){this.dataFetcher.fetchData().then((e=>{this.problemData=e})).then(this.onFetchSuccess.bind(this)).catch((e=>console.log(this,e)))}insertInnerProgressbar=e=>{let t=e.getAttribute("problem-id"),n=this.problemData[t];null==n&&(n=0),n*=100;let i="inner-progressbar",a=e.getElementsByClassName(i),s=e.getElementsByClassName("rounded-l-lg")[0];a.length>0&&a[0].remove(),s.setAttribute("title",`${Math.round(n)}%`);let r=function(e){let t=document.createElement("div");return t.style=`\n    background-color: ${l.COLOR_ACCENT};\n    width: ${e}%;\n    height: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n    border-top-left-radius: 0.5rem;\n    `,t}(n);r.classList.add(i),s.appendChild(r)};static removeProgressbarUnlockButton(e){let t=e.getElementsByTagName("svg")[0],n=e.getElementsByClassName("rounded-r-lg")[0],i=e.getElementsByClassName("rounded-l-lg")[0];null!=t&&t.remove(),null!=n&&n.remove(),null!=i&&(i.style="\n            border-bottom-right-radius: 0.5rem;\n            overflow: hidden; \n            border-top-right-radius: 0.5rem\n            ")}}class L{constructor(){this.elementModifier=[]}injectFunctionToTargetElement(e){this.elementModifier.push(e)}modifyElement(){this.observer=new MutationObserver((()=>{this.modifyLockedElement()})),this.modifyLockedElement(),this.addObsersverToFoldout()}addObsersverToFoldout(){let e=document.getElementsByClassName("space-y-1.5")[0];this.observer.observe(e,{childList:!0,subtree:!0})}modifyLockedElement=()=>{let e=document.getElementsByClassName("space-y-1.5")[0],t=e.children;for(let n=0;n<=t.length-2;n++){let i=t[n].getElementsByTagName("svg");if(i.length>0){t[n].getElementsByTagName("a")[0].href="javascript:void(0)";let a=t[n].textContent.replaceAll(" ","");t[n].setAttribute("item",a),t[n].style.color=l.COLOR_ACCENT,i[0].remove();let s=t[n],r=t[n].cloneNode(!0);e.replaceChild(r,s);for(let e=0;e<=this.elementModifier.length-1;e++)this.elementModifier[e](r)}}};disconnectObserverToFoldout(){this.observer.disconnect()}}class B{constructor(){this.tagButtonListener=[]}modifyElement(){document.getElementsByClassName("overflow-x-auto")[0]?(this.isDescriptionTabActive()&&this.modifyCompaniesTagButton(),this.addObserverToLeftTab()):window.setTimeout((()=>{this.modifyElement()}),500)}addObserverToLeftTab(){let e=document.getElementsByClassName("overflow-x-auto")[0];new MutationObserver((()=>{this.isDescriptionTabActive()&&this.modifyCompaniesTagButton()})).observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]})}isDescriptionTabActive(){return"Description"==document.getElementsByClassName("overflow-x-auto")[0].getElementsByClassName("bg-layer-1")[0].textContent}modifyCompaniesTagButton(){let e=document.getElementsByClassName("pt-3")[0];if(!e)return void window.setTimeout((()=>{this.modifyCompaniesTagButton.bind(this)()}),500);let t=e.getElementsByTagName("svg")[0],n=t.parentElement;t.remove();let i=n.cloneNode(!0);n.parentElement.replaceChild(i,n),i.style.backgroundColor=l.COLOR_ACCENT,i.style.color="black";for(let e=0;e<=this.tagButtonListener.length-1;e++)i.addEventListener("click",this.tagButtonListener[e])}addTagButtonOnClickListener(e){this.tagButtonListener.push(e)}}class x{static generateHeader(e){let t=document.createElement("h3");return t.classList.add("default-text-color"),t.textContent=e,t}static generateTag(e){let t=document.createElement("div");return t.style="\n        min-width:7%;\n        margin-right: 3%;\n        margin-bottom: 1%;\n        max-width:15%; \n        text-align:center; \n        border-radius: 21px;\n        ",t.classList.add("sub-title-text-color"),t.textContent=e,t}static generateRow(){let e=document.createElement("div");return e.style="\n        display:flex;\n        flex-wrap: wrap;\n        border-top: solid 1px darkgrey;\n\n        ",e}}class O{constructor(){this.parentDiv=document.createElement("div")}buildHeader(e){let t=x.generateRow();return t.style.justifyContent="center",t.appendChild(x.generateHeader(e)),this.parentDiv.appendChild(t),this}getResult(){return this.parentDiv}buildTagsBox(e){let t=x.generateRow();for(let n=0;n<=e.length-1;n++){let i=x.generateTag(e[n].company);t.appendChild(i)}return this.parentDiv.appendChild(t),this}}!function(e){for(const t in e)if(window.location.href.includes(t)){let n=e[t];for(let e=0;e<=n.length-1;e++)try{(new n[e]).unlock()}catch(t){console.log(n[e].constructor.name+" Error "+t)}break}}({"https://leetcode.com/problemset":[M,class{constructor(){this.elementModifier=new o,this.dataFetcher=new T,this.containerManager=C,this.isFetching=!1}unlock(){this.elementModifier.injectFunctionToTargetElement(this.getFunctionToBeInjected()),this.elementModifier.modifyElement()}getFunctionToBeInjected(){return e=>{e.addEventListener("click",this.onCompanyButtonClick)}}onCompanyButtonClick=e=>{if(this.isFetching)return;this.isFetching=!0;let t=e.currentTarget.getAttribute("company-name");this.containerManager.clearModalContent(),this.containerManager.openModal(),this.containerManager.showLoadingIcon(),this.dataFetcher.fetchData(t).then((e=>this.onFetchSuccess(e,t))).then((e=>{this.isFetching=!1})).catch((e=>{this.isFetching=!1}))};onFetchSuccess(e,t){let n=this.containerManager.getModalContentBox(),i=new b(e),a=e.getKeys();for(let t=0;t<=a.length-1;t++)i.addDurationData(a[t],e.getList(a[t]));i.buildTitleRow(t),i.buildDurationsRow(),i.setShownData(e.getList(a[0])),i.buildHeaderRow(),i.buildTable(),this.containerManager.clearModalContent(),n.appendChild(i.getResult())}},class{constructor(){this.elementModifier=new L,this.dataFetcher=new v,this.containerManager=C,this.isFetching=!1}unlock(){this.elementModifier.injectFunctionToTargetElement(this.getFunctionToBeInjected()),this.elementModifier.modifyElement()}onTopProblemClicked=e=>{if(this.isFetching)return;this.isFetching=!0;let t=e.currentTarget.getAttribute("item");this.containerManager.clearModalContent(),this.containerManager.openModal(),this.containerManager.showLoadingIcon(),this.dataFetcher.fetchData(t).then((e=>this.onFetchSuccess(e,t))).then((e=>{this.isFetching=!1})).catch((e=>{console.log(this,"Fetch Error"+e),this.isFetching=!1}))};onFetchSuccess(e,t){let n=new b;n.setShownData(e),n.buildTitleRow(t),n.buildHeaderRow(),n.buildTable();let i=n.getResult();this.containerManager.clearModalContent(),this.containerManager.getModalContentBox().appendChild(i)}getFunctionToBeInjected(){return e=>{e.addEventListener("click",this.onTopProblemClicked)}}}],"https://leetcode.com/problem-list":[M],"https://leetcode.com/problems":[class{constructor(){this.elementModifier=new B,this.dataFetcher=new w,this.containerManager=C,this.isFetching=!1}onTagButtonClicked=()=>{if(this.isFetching)return;this.isFetching=!0;let e=document.URL.split("/")[4];this.containerManager.clearModalContent(),this.containerManager.openModal(),this.containerManager.showLoadingIcon(),this.dataFetcher.fetchData(e).then((e=>this.onFetchSucces(e))).then((e=>{this.isFetching=!1})).catch((e=>{console.log(this,e),this.isFetching=!1}))};unlock(){this.elementModifier.modifyElement(),this.elementModifier.addTagButtonOnClickListener(this.onTagButtonClicked)}onFetchSucces=e=>{let t=e.getKeys(),n=new O;for(let i=0;i<=t.length-1;i++)n.buildHeader(t[i]),n.buildTagsBox(e.getList(t[i]));let i=this.containerManager.getModalContentBox();this.containerManager.clearModalContent(),i.appendChild(n.getResult())}}]})})();