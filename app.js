/* Siddhivinayak Enterprise: attendance, advance and salary (online version) */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const today=()=>new Date().toLocaleDateString('en-CA');
const money=n=>(n<0?'-':'')+'₹'+Math.abs(Number(n)).toLocaleString('en-IN');
const LK='siddhivinayak_lang',CO='Siddhivinayak Enterprise';
const INFO={owner:'Santosh Prasad',phone:'79841 46781, 94084 98818',email:'siddhivinayakenterpriseank@gmail.com',addr:'Room No. 11, Shiv Sarvovar Co.Op. Housing Society Ltd. GIDC, Ankleshwar-393 001, Dist. Bharuch (Gujarat)'};
const WMAIL='workers.invalid';
const LANGS=[['en','English'],['hi','हिंदी'],['hl','Hinglish']];
let lang='en';try{const l=localStorage.getItem(LK);if(LANGS.some(x=>x[0]==l))lang=l}catch(e){}
const S={
sub:['Attendance, advance and salary','हाज़िरी, एडवांस और सैलरी','Attendance, advance aur salary'],
work:['All Types of Furniture, Painting & Plumbing Works','सभी प्रकार के फर्नीचर, पेंटिंग और प्लंबिंग का काम','All types ke Furniture, Painting aur Plumbing ka kaam'],
owner:['Owner','मालिक','Malik'],
pin:['PIN','पिन','PIN'],
login:['Login','लॉगिन','Login'],
logout:['Logout','लॉगआउट','Logout'],
t_att:['Attendance','हाज़िरी','Attendance'],
t_adv:['Advance','एडवांस','Advance'],
t_rp:['Report','रिपोर्ट','Report'],
t_sal:['Salary','सैलरी','Salary'],
t_wk:['Workers','वर्कर्स','Workers'],
date:['Date','तारीख','Date'],
legend:['P = Present, H = Half day, A = Absent. Tap again to clear.','उ = उपस्थित, आ = आधा दिन, ग = गैरहाज़िर। हटाने के लिए फिर दबाएं।','P = Present, H = Half day, A = Absent. Hatane ke liye fir se dabao.'],
legend2:['P = Present, H = Half day, A = Absent','उ = उपस्थित, आ = आधा दिन, ग = गैरहाज़िर','P = Present, H = Half day, A = Absent'],
sP:['Present','उपस्थित','Present'],sH:['Half day','आधा दिन','Half day'],sA:['Absent','गैरहाज़िर','Absent'],
kP:['P','उ','P'],kH:['H','आ','H'],kA:['A','ग','A'],
days:[['S','M','T','W','T','F','S'],['र','सो','मं','बु','गु','शु','श'],['S','M','T','W','T','F','S']],
giveAdv:['Give advance','एडवांस दें','Advance do'],
worker:['Worker','वर्कर','Worker'],
amount:['Amount (₹)','रकम (₹)','Amount (₹)'],
note:['Note (optional)','नोट (वैकल्पिक)','Note (optional)'],
saveAdv:['Save advance','एडवांस सेव करें','Advance save karo'],
advBal:['Advance salary','एडवांस सैलरी','Advance salary'],
advHist:['Advance history','एडवांस का हिसाब','Advance history'],
noAdv:['No advance given yet.','अभी तक कोई एडवांस नहीं दिया।','Abhi tak koi advance nahi diya.'],
del:['Delete','हटाएं','Delete'],
enterAmt:['Enter the amount.','रकम डालें।','Amount daalo.'],
delAdvQ:['Delete this advance entry?','यह एडवांस एंट्री हटाएं?','Ye advance entry delete karni hai?'],
yes:['Yes','हाँ','Haan'],cancel:['Cancel','रद्द करें','Cancel'],ok:['OK','ठीक है','OK'],
noWorkers:['No workers.','कोई वर्कर नहीं।','Koi worker nahi.'],
month:['Month','महीना','Month'],
totalDays:['Total days','कुल दिन','Total days'],
paid:['Paid','दिया गया','Paid'],
phA:['Present / Half / Absent','उपस्थित / आधा / गैरहाज़िर','Present / Half / Absent'],
earnedPer:['Earned ({0} per day)','कमाई ({0} प्रति दिन)','Kamaai ({0} per day)'],
netPaidOn:['Net paid on {0}','{0} को कुल दिया','{0} ko net paid'],
viewSlip:['View salary slip','सैलरी स्लिप देखें','Salary slip dekho'],
netPay:['Net to pay','कुल देना है','Net dena hai'],
paySal:['Pay salary','सैलरी दें','Salary do'],
payQ:['Pay {0} {1} for {2}? Advance cut: {3}.','{0} को {2} की सैलरी {1} दें? एडवांस कटौती: {3}।','{0} ko {2} ki salary {1} deni hai? Advance cut: {3}.'],
rmQ:['Remove {0}? Old records stay saved.','{0} को हटाएं? पुराना रिकॉर्ड सुरक्षित रहेगा।','{0} ko remove karna hai? Purana record safe rahega.'],
rmPend:[' Advance balance {0} is still pending.',' एडवांस {0} अभी बाकी है।',' Advance {0} abhi baaki hai.'],
enterName:['Enter the worker name.','वर्कर का नाम डालें।','Worker ka naam daalo.'],
addNew:['Add new worker','नया वर्कर जोड़ें','Naya worker add karo'],
name:['Name','नाम','Name'],
wage:['Daily wage (₹)','दैनिक मज़दूरी (₹)','Daily wage (₹)'],
wage2:['Daily wage','दैनिक मज़दूरी','Daily wage'],
addWorker:['Add worker','वर्कर जोड़ें','Worker add karo'],
workers:['Workers','वर्कर्स','Workers'],
remove:['Remove (left the job)','हटाएं (नौकरी छोड़ दी)','Remove (kaam chhod diya)'],
wageNote:['A new daily wage applies to the whole month when you pay salary, so change it at the start of a month.','नई दैनिक मज़दूरी सैलरी देते समय पूरे महीने पर लगती है, इसलिए इसे महीने की शुरुआत में बदलें।','Nayi daily wage salary dete waqt poore mahine par lagti hai, isliye mahine ke shuru me badlo.'],
former:['Former workers','पुराने वर्कर','Purane workers'],
leftOn:['Left on {0}','{0} को छोड़ा','{0} ko chhoda'],
addBack:['Add back','वापस जोड़ें','Wapas add karo'],
safe:['Their old attendance, advance and salary records are kept safe.','उनकी पुरानी हाज़िरी, एडवांस और सैलरी का रिकॉर्ड सुरक्षित है।','Unka purana attendance, advance aur salary record safe hai.'],
backup:['Backup','बैकअप','Backup'],
backupNote:['Your data is saved online. You can also download a backup file. Use restore to bring in data from the old offline app.','आपका डेटा ऑनलाइन सेव है। आप बैकअप फ़ाइल भी डाउनलोड कर सकते हैं। पुराने ऑफ़लाइन ऐप का डेटा लाने के लिए रीस्टोर इस्तेमाल करें।','Aapka data online save hai. Backup file bhi download kar sakte ho. Purane offline app ka data lane ke liye restore use karo.'],
dlBackup:['Download backup','बैकअप डाउनलोड करें','Backup download karo'],
restore:['Restore from backup file','बैकअप फ़ाइल से वापस लाएं','Backup file se restore karo'],
replaceQ:['Replace all current data with this backup?','सारा मौजूदा डेटा इस बैकअप से बदलें?','Saara current data is backup se replace karna hai?'],
badBackup:['This is not a valid backup file.','यह सही बैकअप फ़ाइल नहीं है।','Ye valid backup file nahi hai.'],
daysPresent:['Days present','उपस्थित दिन','Days present'],
earned:['Earned','कमाई','Kamaai'],
salary:['Salary','सैलरी','Salary'],
paidTxt:['{0} paid','{0} मिला','{0} paid'],
notPaid:['Not paid yet','अभी नहीं मिला','Abhi paid nahi'],
attIn:['Attendance, {0}','हाज़िरी, {0}','Attendance, {0}'],
advTaken:['Advance taken','लिया गया एडवांस','Liya hua advance'],
noAdvT:['No advance taken.','कोई एडवांस नहीं लिया।','Koi advance nahi liya.'],
salRecv:['Salary received','मिली सैलरी','Mili salary'],
paidOn:['Paid on {0}','{0} को मिला','{0} ko mila'],
slipBtn:['Slip','स्लिप','Slip'],
noSal:['No salary paid yet.','अभी तक कोई सैलरी नहीं मिली।','Abhi tak koi salary nahi mili.'],
slipTitle:['Salary slip, {0}','सैलरी स्लिप, {0}','Salary slip, {0}'],
slipNo:['Slip no.','स्लिप नं.','Slip no.'],
presDays:['Present days','उपस्थित दिन','Present days'],
halfDays:['Half days','आधे दिन','Half days'],
absDays:['Absent days','गैरहाज़िर दिन','Absent days'],
totalEarned:['Total earned','कुल कमाई','Total kamaai'],
advDed:['Advance deducted','एडवांस कटा','Advance kata'],
netSal:['Net salary paid','कुल सैलरी दी','Net salary di'],
paidOnL:['Paid on','दिया गया','Paid on'],
download:['Download','डाउनलोड','Download'],
print:['Print / PDF','प्रिंट / PDF','Print / PDF'],
close:['Close','बंद करें','Close'],
mo:['Mo.','मो.','Mo.'],
/* online login */
mOwner:['Owner login','मालिक लॉगिन','Owner login'],
mWorker:['Worker login','वर्कर लॉगिन','Worker login'],
email:['Email','ईमेल','Email'],
password:['Password','पासवर्ड','Password'],
bizCode:['Business code','बिज़नेस कोड','Business code'],
loginId:['Login ID','लॉगिन आईडी','Login ID'],
pin6:['PIN (at least 6 characters)','पिन (कम से कम 6 अक्षर/अंक)','PIN (kam se kam 6 characters)'],
signup:['Create account','खाता बनाएं','Account banao'],
newBiz:['New business? Create account','नया बिज़नेस? खाता बनाएं','Naya business? Account banao'],
haveAcc:['Already have an account? Login','पहले से खाता है? लॉगिन करें','Account pehle se hai? Login karo'],
forgot:['Forgot password?','पासवर्ड भूल गए?','Password bhool gaye?'],
resetSent:['Password reset link sent to your email.','पासवर्ड रीसेट लिंक आपके ईमेल पर भेज दिया।','Password reset link aapke email par bhej diya.'],
enterEmail:['Enter your email first.','पहले अपना ईमेल डालें।','Pehle apna email daalo.'],
bad:['Wrong login details. Try again.','लॉगिन की जानकारी गलत है। फिर कोशिश करें।','Login details galat hain. Fir se try karo.'],
fill:['Please fill all fields.','सभी जानकारी भरें।','Saari details bharo.'],
codeNF:['Business code not found.','बिज़नेस कोड नहीं मिला।','Business code nahi mila.'],
codeTaken:['This business code is already taken.','यह बिज़नेस कोड पहले से किसी ने ले लिया है।','Ye business code pehle se kisi ne le liya hai.'],
codeRule:['Business code: 3 to 20 small letters or numbers only.','बिज़नेस कोड: 3 से 20 छोटे अक्षर या अंक ही।','Business code: 3 se 20 small letters ya numbers hi.'],
passMin:['Password must be at least 6 characters.','पासवर्ड कम से कम 6 अक्षर का होना चाहिए।','Password kam se kam 6 characters ka hona chahiye.'],
idRule:['Login ID: 3 or more small letters or numbers, no spaces.','लॉगिन आईडी: 3 या ज़्यादा छोटे अक्षर या अंक, खाली जगह नहीं।','Login ID: 3 ya zyada small letters ya numbers, space nahi.'],
pinRule:['PIN must be at least 6 characters.','पिन कम से कम 6 अक्षर/अंक का होना चाहिए।','PIN kam se kam 6 characters ka hona chahiye.'],
idUsed:['This Login ID is already used. Try another.','यह लॉगिन आईडी पहले से इस्तेमाल में है। दूसरी डालें।','Ye Login ID pehle se use me hai. Dusri daalo.'],
emailUsed:['This email already has an account.','इस ईमेल से खाता पहले से है।','Is email se account pehle se hai.'],
removed:['The owner has removed your account.','मालिक ने आपका खाता हटा दिया है।','Owner ne aapka account remove kar diya hai.'],
loading:['Loading...','लोड हो रहा है...','Loading...'],
setup:['Firebase is not set up yet. Open firebase-config.js and paste your config. See SETUP.md.','Firebase अभी सेट नहीं है। firebase-config.js खोलकर अपना config डालें। SETUP.md देखें।','Firebase abhi set nahi hai. firebase-config.js kholkar apna config daalo. SETUP.md dekho.'],
yourCode:['Your business code','आपका बिज़नेस कोड','Aapka business code'],
codeNote:['Workers need this code, their Login ID and PIN to login.','वर्कर को लॉगिन के लिए ये कोड, उनकी लॉगिन आईडी और पिन चाहिए।','Worker ko login ke liye ye code, unki Login ID aur PIN chahiye.'],
netErr:['Network problem. Please try again.','नेटवर्क की समस्या। फिर कोशिश करें।','Network problem. Fir se try karo.'],
wait:['Please wait...','कृपया रुकें...','Please wait...']
};
const li=()=>LANGS.findIndex(x=>x[0]==lang);
const t=(k,...a)=>{let s=S[k][li()];a.forEach((v,i)=>{s=s.split('{'+i+'}').join(v)});return s};
const mlabel=ym=>new Date(ym+'-01T00:00:00').toLocaleString(lang=='hi'?'hi-IN':'en-IN',{month:'long',year:'numeric'});
const langSel=()=>`<select class="lg" onchange="setLang(this.value)">${LANGS.map(x=>`<option value="${x[0]}"${x[0]==lang?' selected':''}>${x[1]}</option>`).join('')}</select>`;
function setLang(v){lang=v;try{localStorage.setItem(LK,v)}catch(e){}render()}

/* ---------- Firebase ---------- */
let FB=null,booting=true,fatal='';
const configured=()=>typeof FIREBASE_CONFIG!=='undefined'&&FIREBASE_CONFIG&&FIREBASE_CONFIG.apiKey&&!/YOUR_/.test(FIREBASE_CONFIG.apiKey);
async function initFB(){
 const base='https://www.gstatic.com/firebasejs/10.12.2/';
 const [a,au,fs]=await Promise.all([import(base+'firebase-app.js'),import(base+'firebase-auth.js'),import(base+'firebase-firestore.js')]);
 FB={...a,...au,...fs};
 FB.app=FB.initializeApp(FIREBASE_CONFIG);FB.auth=FB.getAuth(FB.app);
 try{FB.db=FB.initializeFirestore(FB.app,{localCache:FB.persistentLocalCache({tabManager:FB.persistentMultipleTabManager()})})}catch(e){FB.db=FB.getFirestore(FB.app)}
}
const emptyData=code=>({code,workers:[],att:{},adv:[],pay:[]});
let D=null,U=null,unsub=null,dirty=false,_st=null,_last='',_vc={};
let tab='att',date=today(),month=today().slice(0,7),mode='owner',busy=false;
const W=id=>D.workers.find(w=>w.id==id);
const act=()=>D.workers.filter(w=>!w.left);
const safeId=s=>/^[a-z0-9._-]{3,30}$/.test(s);
const wEmail=(id,code)=>id+'__'+code+'@'+WMAIL;

function save(){if(!U||!U.owner)return;dirty=true;clearTimeout(_st);_st=setTimeout(push,300)}
function viewOf(w){const att={};for(const d in D.att){const v=D.att[d][w.id];if(v)att[d]={[w.id]:v}}
 return{left:false,wid:w.id,workers:[{id:w.id,name:w.name,rate:w.rate}],att,adv:D.adv.filter(x=>x.w==w.id),pay:D.pay.filter(x=>x.w==w.id)}}
function push(){if(!U||!U.owner)return;const data=JSON.stringify(D);_last=data;dirty=false;
 FB.setDoc(FB.doc(FB.db,'businesses',U.uid),{data,updated:Date.now()}).catch(()=>{});
 D.workers.forEach(w=>{if(!w.uid)return;const v=w.left?{left:true}:viewOf(w),s=JSON.stringify(v);
  if(_vc[w.uid]!==s){_vc[w.uid]=s;FB.setDoc(FB.doc(FB.db,'businesses',U.uid,'views',w.uid),v).catch(()=>{delete _vc[w.uid]})}})}

function stats(ym,w){let p=0,h=0,a=0;for(const d in D.att)if(d.startsWith(ym)){const v=D.att[d][w.id];if(v=='P')p++;else if(v=='H')h++;else if(v=='A')a++}return{p,h,a,earned:(p+h/2)*w.rate}}
const advTotal=w=>D.adv.filter(x=>x.w==w.id).reduce((s,x)=>s+x.amt,0);
const advBal=w=>advTotal(w)-D.pay.filter(x=>x.w==w.id).reduce((s,x)=>s+x.ded,0);
const paid=(w,ym)=>D.pay.find(x=>x.w==w.id&&x.ym==ym);

/* ---------- auth flow ---------- */
function stopSub(){if(unsub){unsub();unsub=null}}
async function afterAuth(user){stopSub();U=null;D=null;_vc={};busy=false;
 if(!user){render();return}
 try{
  if(user.email&&user.email.endsWith('@'+WMAIL)){
   const code=user.email.split('@')[0].split('__')[1],c=await FB.getDoc(FB.doc(FB.db,'codes',code));
   if(!c.exists()){await FB.signOut(FB.auth);return}
   const ou=c.data().owner;
   unsub=FB.onSnapshot(FB.doc(FB.db,'businesses',ou,'views',user.uid),snap=>{
    const v=snap.data();
    if(!v){D={workers:[],att:{},adv:[],pay:[]};U={w:0};render();return}
    if(v.left){FB.signOut(FB.auth).then(()=>{mode='worker';say(t('removed'))});return}
    D=v;U={w:v.wid};render()});
  }else{
   const ref=FB.doc(FB.db,'businesses',user.uid),snap=await FB.getDoc(ref);
   if(snap.exists()){D=JSON.parse(snap.data().data)}else{D=emptyData(window._newCode||'');if(window._newCode){await FB.setDoc(FB.doc(FB.db,'codes',window._newCode),{owner:user.uid}).catch(()=>{})}await FB.setDoc(ref,{data:JSON.stringify(D),updated:Date.now()})}
   _last=JSON.stringify(D);U={owner:true,uid:user.uid};tab='att';
   unsub=FB.onSnapshot(ref,s=>{if(s.metadata.hasPendingWrites||dirty)return;const d=s.data()&&s.data().data;if(d&&d!==_last){_last=d;D=JSON.parse(d);render()}});
   render();
  }
 }catch(e){fatal=t('netErr');render()}}
async function boot(){render();
 if(!configured()){booting=false;fatal=t('setup');render();return}
 try{await initFB();FB.onAuthStateChanged(FB.auth,u=>{booting=false;afterAuth(u)})}catch(e){booting=false;fatal=t('netErr');render()}}
function errMsg(e){const c=(e&&e.code)||'';if(c.includes('email-already-in-use'))return t('emailUsed');if(c.includes('network'))return t('netErr');return t('bad')}
function setErr(m){const e=$('#err');if(e){e.textContent=m;e.className='mut bad'}}
function setMode(m){mode=m;render()}
async function doLogin(){if(busy)return;let email,pass;
 if(mode=='worker'){const code=$('#bc').value.trim().toLowerCase(),id=$('#li').value.trim().toLowerCase();pass=$('#pw').value;
  if(!code||!id||!pass)return setErr(t('fill'));email=wEmail(id,code)}
 else{email=$('#em').value.trim();pass=$('#pw').value;if(!email||!pass)return setErr(t('fill'))}
 busy=true;setErr(t('wait'));
 try{await FB.signInWithEmailAndPassword(FB.auth,email,pass)}catch(e){busy=false;setErr(errMsg(e))}}
async function doSignup(){if(busy)return;const email=$('#em').value.trim(),pass=$('#pw').value,code=$('#bc').value.trim().toLowerCase();
 if(!email||!pass||!code)return setErr(t('fill'));if(!/^[a-z0-9]{3,20}$/.test(code))return setErr(t('codeRule'));if(pass.length<6)return setErr(t('passMin'));
 busy=true;setErr(t('wait'));
 try{const c=await FB.getDoc(FB.doc(FB.db,'codes',code));if(c.exists()){busy=false;return setErr(t('codeTaken'))}
  window._newCode=code;await FB.createUserWithEmailAndPassword(FB.auth,email,pass)}catch(e){busy=false;setErr(errMsg(e))}}
async function doReset(){const email=($('#em')||{}).value;if(!email||!email.trim())return setErr(t('enterEmail'));
 try{await FB.sendPasswordResetEmail(FB.auth,email.trim());const e=$('#err');e.textContent=t('resetSent');e.className='mut ok'}catch(e){setErr(errMsg(e))}}
function logout(){stopSub();FB.signOut(FB.auth).then(()=>{U=null;D=null;render()})}

/* ---------- views ---------- */
function render(){$('#app').innerHTML=booting?`<div class="card"><p class="mut">${t('loading')}</p></div>`:fatal?`<header><div class="logo">${CO}</div>${langSel()}</header><div class="card"><p class="bad">${esc(fatal)}</p></div>`:U?shell():login()}
function login(){const f=mode=='worker'?`<label>${t('bizCode')}</label><input id="bc" autocapitalize="none" autocomplete="off"><label>${t('loginId')}</label><input id="li" autocapitalize="none" autocomplete="username"><label>${t('pin')}</label><input id="pw" type="password" autocomplete="current-password">`
 :`<label>${t('email')}</label><input id="em" type="email" autocomplete="email">${mode=='signup'?`<label>${t('bizCode')}</label><input id="bc" autocapitalize="none" autocomplete="off">`:''}<label>${t('password')}</label><input id="pw" type="password" autocomplete="${mode=='signup'?'new-password':'current-password'}">`;
 return `<header><div class="logo">${CO}<small>${INFO.owner} · ${t('sub')}</small></div>${langSel()}</header>
<div class="card"><div class="tabs"><button class="${mode!='worker'?'on':''}" onclick="setMode('owner')">${t('mOwner')}</button><button class="${mode=='worker'?'on':''}" onclick="setMode('worker')">${t('mWorker')}</button></div>
${f}<p class="mut" id="err" style="margin:8px 0"></p>
<button class="b a" style="width:100%" onclick="${mode=='signup'?'doSignup()':'doLogin()'}">${mode=='signup'?t('signup'):t('login')}</button>
${mode=='worker'?'':`<p class="mut" style="margin:12px 0 0"><a href="#" onclick="setMode('${mode=='signup'?'owner':'signup'}');return false">${mode=='signup'?t('haveAcc'):t('newBiz')}</a>${mode=='owner'?` · <a href="#" onclick="doReset();return false">${t('forgot')}</a>`:''}</p>`}</div>`}
function shell(){const tb=U.owner?['att','adv','rp','sal','wk']:[];
 return `<header><div class="logo">${CO}<small>${U.owner?t('owner'):esc(W(U.w)?W(U.w).name:'')}</small></div><div style="display:flex;gap:6px;align-items:center">${langSel()}<button class="b g s" onclick="logout()">${t('logout')}</button></div></header>
 ${tb.length?`<div class="tabs">${tb.map(x=>`<button class="${tab==x?'on':''}" onclick="tab='${x}';render()">${t('t_'+x)}</button>`).join('')}</div>`:''}
 ${U.owner?{att:vAtt,adv:vAdv,rp:vRp,sal:vSal,wk:vWk}[tab]():vMe()}`}

function vAtt(){return `<div class="card"><label>${t('date')}</label><input type="date" value="${date}" onchange="date=this.value;render()">
 ${act().map(w=>{const v=(D.att[date]||{})[w.id];return `<div class="row"><b>${esc(w.name)}</b><div class="seg">${['P','H','A'].map(k=>`<button class="${k}${v==k?' on':''}" onclick="mark(${w.id},'${k}')">${t('k'+k)}</button>`).join('')}</div></div>`}).join('')}
 <p class="mut" style="margin:10px 0 0">${t('legend')}</p></div>`}
function mark(id,k){D.att[date]=D.att[date]||{};if(D.att[date][id]==k)delete D.att[date][id];else D.att[date][id]=k;save();render()}

function vAdv(){return `<div class="card"><h2>${t('giveAdv')}</h2>
 <label>${t('worker')}</label><select id="aw">${act().map(w=>`<option value="${w.id}">${esc(w.name)}</option>`).join('')}</select>
 <div class="g2"><div><label>${t('amount')}</label><input id="aa" type="number" inputmode="numeric" min="1"></div><div><label>${t('date')}</label><input id="ad" type="date" value="${today()}"></div></div>
 <label>${t('note')}</label><input id="an"><div style="margin-top:12px"><button class="b a" onclick="addAdv()">${t('saveAdv')}</button></div></div>
 <div class="card"><h2>${t('advBal')}</h2>${act().map(w=>`<div class="row"><span>${esc(w.name)}</span><b class="${advBal(w)>0?'bad':''}">${money(advBal(w))}</b></div>`).join('')}</div>
 <div class="card"><h2>${t('advHist')}</h2>${D.adv.length?[...D.adv].reverse().map(x=>`<div class="row"><span>${x.d}<br><span class="mut">${esc(W(x.w).name)}${x.n?' · '+esc(x.n):''}</span></span><span><b>${money(x.amt)}</b> <button class="b g s" onclick="delAdv(${x.id})">${t('del')}</button></span></div>`).join(''):`<p class="mut">${t('noAdv')}</p>`}</div>`}
function addAdv(){const amt=+$('#aa').value;if(!(amt>0)||!$('#aw').value)return say(t('enterAmt'));D.adv.push({id:Date.now(),w:+$('#aw').value,amt,d:$('#ad').value||today(),n:$('#an').value.trim()});save();render()}
let _cb=null;
function ask(m,fn){_cb=fn;$('#dgb').innerHTML='<p style="margin:0 0 14px">'+esc(m)+'</p><div style="display:flex;gap:8px"><button class="b a" onclick="askOk()">'+t('yes')+'</button><button class="b g" onclick="$(\'#dg\').hidden=true">'+t('cancel')+'</button></div>';$('#dg').hidden=false}
function askOk(){$('#dg').hidden=true;const f=_cb;_cb=null;if(f)f()}
function say(m){$('#dgb').innerHTML='<p style="margin:0 0 14px">'+esc(m)+'</p><button class="b" onclick="$(\'#dg\').hidden=true">'+t('ok')+'</button>';$('#dg').hidden=false}
function delAdv(id){ask(t('delAdvQ'),()=>{D.adv=D.adv.filter(x=>x.id!=id);save();render()})}

function dayRows(w,ym){const [y,m]=ym.split('-').map(Number),n=new Date(y,m,0).getDate(),f=new Date(y,m-1,1).getDay();
 let r='<div class="cal">'+S.days[li()].map(x=>`<div class="ch">${x}</div>`).join('');
 for(let i=0;i<f;i++)r+='<div></div>';
 for(let i=1;i<=n;i++){const v=(D.att[ym+'-'+String(i).padStart(2,'0')]||{})[w.id];r+=`<div class="cd ${v||''}"><span>${i}</span><b>${v?t('k'+v):''}</b></div>`}
 return r+`</div><p class="mut" style="margin:10px 0 0">${t('legend2')}</p>`}
let rpw=0;
function vRp(){if(!act().length)return `<div class="card"><p class="mut">${t('noWorkers')}</p></div>`;if(!act().find(x=>x.id==rpw))rpw=act()[0].id;const w=W(rpw),s=stats(month,w);
 return `<div class="card"><label>${t('worker')}</label><select onchange="rpw=+this.value;render()">${act().map(x=>`<option value="${x.id}"${x.id==rpw?' selected':''}>${esc(x.name)}</option>`).join('')}</select>
 <label>${t('month')}</label><input type="month" value="${month}" onchange="month=this.value;render()">
 <div class="g2" style="margin-top:12px"><div><div class="mut">${t('sP')}</div><div class="big ok">${s.p}</div></div><div><div class="mut">${t('sH')}</div><div class="big">${s.h}</div></div>
 <div><div class="mut">${t('sA')}</div><div class="big bad">${s.a}</div></div><div><div class="mut">${t('totalDays')}</div><div class="big">${s.p+s.h/2}</div></div></div></div>
 <div class="card"><h2>${esc(w.name)}, ${mlabel(month)}</h2>${dayRows(w,month)}</div>`}
function vSal(){return `<div class="card"><label>${t('month')}</label><input type="month" value="${month}" onchange="month=this.value;render()"></div>
 ${act().map(w=>{const s=stats(month,w),pd=paid(w,month),bal=advBal(w);
 return `<div class="card"><div class="row"><h2 style="margin:0">${esc(w.name)}</h2>${pd?`<b class="ok">${t('paid')}</b>`:''}</div>
 <div class="row"><span>${t('phA')}</span><b>${s.p} / ${s.h} / ${s.a}</b></div>
 <div class="row"><span>${t('earnedPer',money(w.rate))}</span><b>${money(s.earned)}</b></div>
 <div class="row"><span>${t('advBal')}</span><b>${money(bal)}</b></div>
 ${pd?`<div class="row"><span>${t('netPaidOn',pd.date)}</span><b class="ok">${money(pd.net)}</b></div><button class="b g" onclick="slip(${pd.id})">${t('viewSlip')}</button>`
 :`<div class="row"><span>${t('netPay')}</span><b class="big${s.earned-bal<0?' bad':''}">${money(s.earned-bal)}</b></div><button class="b a" onclick="pay(${w.id})">${t('paySal')}</button>`}</div>`}).join('')}`}
function pay(id){const w=W(id),ym=month;if(paid(w,ym))return;const s=stats(ym,w),ded=Math.min(advBal(w),s.earned),net=s.earned-ded;
 ask(t('payQ',w.name,money(net),mlabel(ym),money(ded)),()=>{
 D.pay.push({id:Date.now(),w:id,ym,p:s.p,h:s.h,a:s.a,rate:w.rate,earned:s.earned,ded,net,date:today()});save();render()})}

function rmWorker(id){const w=W(id),bal=advBal(w);ask(t('rmQ',w.name)+(bal>0?t('rmPend',money(bal)):''),()=>{w.left=true;w.leftDate=today();save();render()})}
function restoreWorker(id){const w=W(id);delete w.left;delete w.leftDate;save();render()}
async function secondary(){const a=FB.initializeApp(FIREBASE_CONFIG,'sec'+Date.now());return{a,au:FB.getAuth(a)}}
async function addWorker(){if(busy)return;const name=$('#nn').value.trim(),lid=$('#nl').value.trim().toLowerCase(),pin=$('#np').value;
 if(!name)return say(t('enterName'));if(!safeId(lid))return say(t('idRule'));if(pin.length<6)return say(t('pinRule'));
 busy=true;let sec;
 try{sec=await secondary();const c=await FB.createUserWithEmailAndPassword(sec.au,wEmail(lid,D.code),pin),uid=c.user.uid;await FB.signOut(sec.au);
  const id=D.workers.reduce((m,w)=>Math.max(m,w.id),0)+1;
  D.workers.push({id,name,rate:+$('#nr').value||500,login:lid,pin,uid});save();busy=false;render()}
 catch(e){busy=false;say((e.code||'').includes('email-already')?t('idUsed'):errMsg(e))}
 finally{if(sec)FB.deleteApp(sec.a).catch(()=>{})}}
async function changePin(id,val){const w=W(id);val=val.trim();if(val==w.pin)return;if(val.length<6){say(t('pinRule'));render();return}
 let sec;try{sec=await secondary();const c=await FB.signInWithEmailAndPassword(sec.au,wEmail(w.login,D.code),w.pin);await FB.updatePassword(c.user,val);w.pin=val;save()}
 catch(e){say(errMsg(e));render()}finally{if(sec)FB.deleteApp(sec.a).catch(()=>{})}}
async function createLogin(id){if(busy)return;const w=W(id),lid=$('#cl'+id).value.trim().toLowerCase(),pin=$('#cp'+id).value;
 if(!safeId(lid))return say(t('idRule'));if(pin.length<6)return say(t('pinRule'));busy=true;let sec;
 try{sec=await secondary();const c=await FB.createUserWithEmailAndPassword(sec.au,wEmail(lid,D.code),pin);await FB.signOut(sec.au);w.login=lid;w.pin=pin;w.uid=c.user.uid;save();busy=false;render()}
 catch(e){busy=false;say((e.code||'').includes('email-already')?t('idUsed'):errMsg(e))}finally{if(sec)FB.deleteApp(sec.a).catch(()=>{})}}
function vWk(){return `<div class="card"><h2>${t('yourCode')}</h2><div class="big">${esc(D.code||'')}</div><p class="mut" style="margin:6px 0 0">${t('codeNote')}</p></div>
 <div class="card"><h2>${t('addNew')}</h2>
 <label>${t('name')}</label><input id="nn">
 <label>${t('loginId')}</label><input id="nl" autocapitalize="none" autocomplete="off">
 <div class="g2"><div><label>${t('wage')}</label><input id="nr" type="number" inputmode="numeric" value="500"></div><div><label>${t('pin6')}</label><input id="np"></div></div>
 <div style="margin-top:12px"><button class="b a" onclick="addWorker()">${t('addWorker')}</button></div></div>
 <div class="card"><h2>${t('workers')}</h2>${act().map(w=>`<div class="row" style="align-items:flex-end;flex-wrap:wrap"><div style="flex:2"><label>${t('name')} · ${esc(w.login||'')}</label><input value="${esc(w.name)}" onchange="W(${w.id}).name=this.value.trim()||W(${w.id}).name;save()"></div>
 <div><label>${t('wage2')}</label><input type="number" value="${w.rate}" onchange="W(${w.id}).rate=+this.value||0;save()"></div>
 ${w.uid?`<div><label>${t('pin')}</label><input value="${esc(w.pin)}" onchange="changePin(${w.id},this.value)"></div>`:`<div style="width:100%;display:flex;gap:6px;align-items:flex-end"><div style="flex:1"><label>${t('loginId')}</label><input id="cl${w.id}" autocapitalize="none"></div><div style="flex:1"><label>${t('pin6')}</label><input id="cp${w.id}"></div><button class="b a s" onclick="createLogin(${w.id})">${t('login')}+</button></div>`}<div style="width:100%"><button class="b g s" onclick="rmWorker(${w.id})">${t('remove')}</button></div></div>`).join('')}
 <p class="mut">${t('wageNote')}</p></div>
 ${D.workers.some(w=>w.left)?`<div class="card"><h2>${t('former')}</h2>${D.workers.filter(w=>w.left).map(w=>`<div class="row"><span>${esc(w.name)}<br><span class="mut">${t('leftOn',w.leftDate||'')}</span></span><button class="b g s" onclick="restoreWorker(${w.id})">${t('addBack')}</button></div>`).join('')}<p class="mut">${t('safe')}</p></div>`:''}
 <div class="card"><h2>${t('backup')}</h2><p class="mut">${t('backupNote')}</p>
 <button class="b" onclick="bk()">${t('dlBackup')}</button>
 <label>${t('restore')}</label><input type="file" accept=".json" onchange="rs(this.files[0])"></div>`}
function bk(){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(D)],{type:'application/json'}));a.download='siddhivinayak-backup-'+today()+'.json';a.click()}
function rs(f){if(!f)return;const r=new FileReader();r.onload=()=>{try{const x=JSON.parse(r.result);if(!x.workers||!x.att)throw 0;
 ask(t('replaceQ'),()=>{/* old offline backups have no online login; keep the new online workers and import the records */
  const keep=D.code;x.code=keep;x.workers.forEach(w=>{const cur=D.workers.find(c=>c.id==w.id&&c.name==w.name);if(cur){w.login=cur.login;w.uid=cur.uid;w.pin=cur.pin}else{delete w.uid;delete w.login}});
  D=x;if(!D.adv)D.adv=[];if(!D.pay)D.pay=[];delete D.owner;save();render()})}catch(e){say(t('badBackup'))}};r.readAsText(f)}

function vMe(){const w=W(U.w);if(!w)return `<div class="card"><p class="mut">${t('loading')}</p></div>`;const s=stats(month,w),pd=paid(w,month);
 return `<div class="card"><label>${t('month')}</label><input type="month" value="${month}" onchange="month=this.value;render()">
 <div class="g2" style="margin-top:12px"><div><div class="mut">${t('daysPresent')}</div><div class="big">${s.p+s.h/2}</div></div><div><div class="mut">${t('earned')}</div><div class="big">${money(s.earned)}</div></div>
 <div><div class="mut">${t('advBal')}</div><div class="big ${advBal(w)>0?'bad':''}">${money(advBal(w))}</div></div><div><div class="mut">${t('salary')}</div><div class="big ${pd?'ok':''}">${pd?t('paidTxt',money(pd.net)):t('notPaid')}</div></div></div></div>
 <div class="card"><h2>${t('attIn',mlabel(month))}</h2><div class="row"><span>${t('phA')}</span><b>${s.p} / ${s.h} / ${s.a}</b></div>${dayRows(w,month)}</div>
 <div class="card"><h2>${t('advTaken')}</h2>${D.adv.filter(x=>x.w==w.id).length?[...D.adv].reverse().filter(x=>x.w==w.id).map(x=>`<div class="row"><span>${x.d}${x.n?'<br><span class="mut">'+esc(x.n)+'</span>':''}</span><b>${money(x.amt)}</b></div>`).join(''):`<p class="mut">${t('noAdvT')}</p>`}</div>
 <div class="card"><h2>${t('salRecv')}</h2>${D.pay.filter(x=>x.w==w.id).length?[...D.pay].reverse().filter(x=>x.w==w.id).map(x=>`<div class="row"><span>${mlabel(x.ym)}<br><span class="mut">${t('paidOn',x.date)}</span></span><span><b class="ok">${money(x.net)}</b> <button class="b g s" onclick="slip(${x.id})">${t('slipBtn')}</button></span></div>`).join(''):`<p class="mut">${t('noSal')}</p>`}</div>`}

function slipHTML(p){const w=W(p.w);return `<h2 style="margin:0">${CO}</h2><p style="margin:2px 0 0;color:#555;font-size:.8rem">${t('work')}<br>${INFO.addr}<br>${t('mo')} ${INFO.phone} · ${INFO.email}</p><p style="margin:10px 0 12px;color:#555">${t('slipTitle',mlabel(p.ym))}</p>
 <table><tr><td>${t('name')}</td><td><b>${esc(w.name)}</b></td></tr><tr><td>${t('slipNo')}</td><td>SE-${p.ym.replace('-','')}-${w.id}</td></tr>
 <tr><td>${t('presDays')}</td><td>${p.p}</td></tr><tr><td>${t('halfDays')}</td><td>${p.h}</td></tr><tr><td>${t('absDays')}</td><td>${p.a}</td></tr>
 <tr><td>${t('wage2')}</td><td>${money(p.rate)}</td></tr><tr><td>${t('totalEarned')}</td><td>${money(p.earned)}</td></tr>
 <tr><td>${t('advDed')}</td><td>- ${money(p.ded)}</td></tr><tr><td><b>${t('netSal')}</b></td><td><b>${money(p.net)}</b></td></tr><tr><td>${t('paidOnL')}</td><td>${p.date}</td></tr></table>`}
function slip(id){const p=D.pay.find(x=>x.id==id);$('#slb').innerHTML=slipHTML(p)+`<div class="noprint" style="display:flex;gap:8px;margin-top:14px"><button class="b" onclick="dl(${id})">${t('download')}</button><button class="b g" style="color:#111" onclick="window.print()">${t('print')}</button><button class="b g" style="color:#111" onclick="$('#sl').hidden=true">${t('close')}</button></div>`;$('#sl').hidden=false}
function dl(id){const p=D.pay.find(x=>x.id==id);const h='<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Salary slip</title><style>body{font-family:sans-serif;max-width:440px;margin:20px auto;padding:0 12px}table{width:100%;border-collapse:collapse}td{padding:6px 0;border-bottom:1px solid #ddd}td:last-child{text-align:right}</style>'+slipHTML(p);
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([h],{type:'text/html'}));a.download='Salary-slip-'+W(p.w).name+'-'+p.ym+'.html';a.click()}

if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
boot();
