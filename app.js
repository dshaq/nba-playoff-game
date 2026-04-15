// ── Supabase config — fill these in after creating your project ──
const SUPABASE_URL = 'https://ipsngddnavymcmfbbcxu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlwc25nZGRuYXZ5bWNtZmJiY3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMDk3NDMsImV4cCI6MjA5MTc4NTc0M30.0MmQn49Y0FCn3r8GFI5XspZR12YwGWTcTbv765VoJEQ';

// ── Constants ────────────────────────────────────────────────────
const COLORS = ["#378ADD","#1D9E75","#D85A30","#7F77DD","#D4537E","#BA7517","#0F6E56","#993C1D"];
const ROUND_BONUS = [0, 5, 10, 20, 50];
const ROUND_BG = ["","#E6F1FB","#EAF3DE","#FAEEDA","#FBEAF0"];
const ROUND_FG = ["","#185FA5","#3B6D11","#854F0B","#993556"];
const ROSTER_SIZE = 8;
const ALL_TABS = ['standings','manage-names','draft','waiver','rosters','scoring'];
const LEAGUE_ID = 'nba-2026';

// ── Teams ────────────────────────────────────────────────────────
const TEAMS = [
  {id:"OKC",name:"Thunder"},{id:"HOU",name:"Rockets"},{id:"LAL",name:"Lakers"},
  {id:"DEN",name:"Nuggets"},{id:"MEM",name:"Grizzlies"},{id:"GSW",name:"Warriors"},
  {id:"MIN",name:"Timberwolves"},{id:"DAL",name:"Mavericks"},{id:"CLE",name:"Cavaliers"},
  {id:"BOS",name:"Celtics"},{id:"NYK",name:"Knicks"},{id:"MIA",name:"Heat"},
  {id:"MIL",name:"Bucks"},{id:"DET",name:"Pistons"},{id:"ATL",name:"Hawks"},
  {id:"ORL",name:"Magic"},
];

// ── Players ──────────────────────────────────────────────────────
const PLAYERS = [
  {id:1,name:"Shai Gilgeous-Alexander",pos:"PG",team:"OKC",ppg:32.7,rpg:5.1,apg:6.4,spg:2.0,bpg:1.1,fgpct:.535,fgapg:19.2,ftpct:.888,ftapg:8.9,topg:2.5,ffpg:.02,tfpg:.18},
  {id:2,name:"Chet Holmgren",pos:"C/PF",team:"OKC",ppg:17.4,rpg:8.2,apg:2.1,spg:.8,bpg:2.3,fgpct:.512,fgapg:11.8,ftpct:.820,ftapg:3.1,topg:1.4,ffpg:.01,tfpg:.10},
  {id:3,name:"Jalen Williams",pos:"SG/SF",team:"OKC",ppg:24.1,rpg:4.8,apg:5.3,spg:1.4,bpg:.5,fgpct:.506,fgapg:16.4,ftpct:.851,ftapg:5.2,topg:2.8,ffpg:.01,tfpg:.08},
  {id:4,name:"Alperen Sengun",pos:"C",team:"HOU",ppg:22.3,rpg:9.4,apg:5.0,spg:1.0,bpg:1.6,fgpct:.556,fgapg:13.8,ftpct:.735,ftapg:6.2,topg:3.1,ffpg:.02,tfpg:.09},
  {id:5,name:"Jalen Green",pos:"SG",team:"HOU",ppg:23.8,rpg:4.2,apg:4.1,spg:1.2,bpg:.4,fgpct:.448,fgapg:18.6,ftpct:.830,ftapg:4.8,topg:2.4,ffpg:.01,tfpg:.07},
  {id:6,name:"Fred VanVleet",pos:"PG",team:"HOU",ppg:14.2,rpg:3.8,apg:7.6,spg:1.5,bpg:.2,fgpct:.418,fgapg:12.4,ftpct:.845,ftapg:2.2,topg:2.0,ffpg:.01,tfpg:.12},
  {id:7,name:"LeBron James",pos:"SF/PG",team:"LAL",ppg:24.9,rpg:7.3,apg:9.0,spg:1.1,bpg:.5,fgpct:.540,fgapg:17.2,ftpct:.748,ftapg:5.4,topg:3.5,ffpg:.02,tfpg:.20},
  {id:8,name:"Anthony Davis",pos:"C/PF",team:"LAL",ppg:27.1,rpg:12.0,apg:3.5,spg:1.2,bpg:2.4,fgpct:.562,fgapg:16.8,ftpct:.798,ftapg:7.8,topg:2.2,ffpg:.02,tfpg:.10},
  {id:9,name:"Nikola Jokic",pos:"C",team:"DEN",ppg:29.8,rpg:13.4,apg:10.2,spg:1.4,bpg:.9,fgpct:.578,fgapg:18.4,ftpct:.815,ftapg:6.6,topg:3.8,ffpg:.01,tfpg:.15},
  {id:10,name:"Jamal Murray",pos:"PG/SG",team:"DEN",ppg:22.1,rpg:4.1,apg:6.8,spg:.8,bpg:.3,fgpct:.487,fgapg:16.6,ftpct:.862,ftapg:3.8,topg:2.6,ffpg:.01,tfpg:.08},
  {id:11,name:"Ja Morant",pos:"PG",team:"MEM",ppg:26.4,rpg:5.8,apg:9.3,spg:1.3,bpg:.5,fgpct:.472,fgapg:18.8,ftpct:.778,ftapg:6.4,topg:3.2,ffpg:.02,tfpg:.16},
  {id:12,name:"Jaren Jackson Jr.",pos:"PF/C",team:"MEM",ppg:22.7,rpg:5.9,apg:2.2,spg:1.0,bpg:2.9,fgpct:.445,fgapg:17.4,ftpct:.812,ftapg:4.2,topg:1.8,ffpg:.02,tfpg:.14},
  {id:13,name:"Stephen Curry",pos:"PG",team:"GSW",ppg:26.2,rpg:4.3,apg:6.1,spg:1.5,bpg:.3,fgpct:.453,fgapg:19.6,ftpct:.924,ftapg:4.2,topg:3.1,ffpg:.01,tfpg:.22},
  {id:14,name:"Draymond Green",pos:"PF",team:"GSW",ppg:10.4,rpg:7.4,apg:7.1,spg:1.2,bpg:.8,fgpct:.484,fgapg:7.8,ftpct:.692,ftapg:2.6,topg:3.0,ffpg:.04,tfpg:.45},
  {id:15,name:"Anthony Edwards",pos:"SG/SF",team:"MIN",ppg:27.5,rpg:5.7,apg:5.4,spg:1.4,bpg:.6,fgpct:.462,fgapg:21.2,ftpct:.832,ftapg:7.4,topg:3.0,ffpg:.02,tfpg:.14},
  {id:16,name:"Rudy Gobert",pos:"C",team:"MIN",ppg:14.2,rpg:12.8,apg:1.4,spg:.8,bpg:2.1,fgpct:.620,fgapg:8.6,ftpct:.658,ftapg:5.2,topg:1.2,ffpg:.01,tfpg:.06},
  {id:17,name:"Luka Doncic",pos:"PG/SF",team:"DAL",ppg:28.9,rpg:9.2,apg:9.8,spg:1.3,bpg:.5,fgpct:.482,fgapg:20.8,ftpct:.788,ftapg:8.6,topg:4.0,ffpg:.02,tfpg:.18},
  {id:18,name:"Kyrie Irving",pos:"PG/SG",team:"DAL",ppg:24.3,rpg:4.0,apg:5.8,spg:1.1,bpg:.4,fgpct:.494,fgapg:18.2,ftpct:.878,ftapg:4.4,topg:2.2,ffpg:.01,tfpg:.10},
  {id:19,name:"Donovan Mitchell",pos:"SG/PG",team:"CLE",ppg:26.8,rpg:4.5,apg:6.2,spg:1.7,bpg:.4,fgpct:.468,fgapg:20.0,ftpct:.836,ftapg:6.8,topg:3.0,ffpg:.01,tfpg:.12},
  {id:20,name:"Evan Mobley",pos:"PF/C",team:"CLE",ppg:18.4,rpg:9.8,apg:3.3,spg:1.1,bpg:2.5,fgpct:.542,fgapg:13.2,ftpct:.762,ftapg:4.4,topg:1.8,ffpg:.01,tfpg:.08},
  {id:21,name:"Jayson Tatum",pos:"SF/PF",team:"BOS",ppg:27.0,rpg:8.1,apg:4.9,spg:1.1,bpg:.6,fgpct:.454,fgapg:20.8,ftpct:.832,ftapg:6.2,topg:2.8,ffpg:.01,tfpg:.16},
  {id:22,name:"Jaylen Brown",pos:"SG/SF",team:"BOS",ppg:23.1,rpg:5.5,apg:3.6,spg:1.1,bpg:.5,fgpct:.462,fgapg:17.8,ftpct:.714,ftapg:5.0,topg:2.4,ffpg:.02,tfpg:.10},
  {id:23,name:"Jalen Brunson",pos:"PG",team:"NYK",ppg:28.4,rpg:3.2,apg:7.2,spg:.8,bpg:.2,fgpct:.473,fgapg:21.0,ftpct:.852,ftapg:5.8,topg:2.8,ffpg:.01,tfpg:.12},
  {id:24,name:"Karl-Anthony Towns",pos:"C/PF",team:"NYK",ppg:24.5,rpg:13.7,apg:3.1,spg:.7,bpg:1.1,fgpct:.512,fgapg:17.2,ftpct:.842,ftapg:5.4,topg:2.8,ffpg:.01,tfpg:.08},
  {id:25,name:"Bam Adebayo",pos:"C/PF",team:"MIA",ppg:20.2,rpg:10.5,apg:4.4,spg:1.2,bpg:.9,fgpct:.538,fgapg:13.6,ftpct:.762,ftapg:5.8,topg:2.4,ffpg:.01,tfpg:.08},
  {id:26,name:"Tyler Herro",pos:"SG",team:"MIA",ppg:23.7,rpg:4.8,apg:5.1,spg:1.0,bpg:.2,fgpct:.448,fgapg:18.4,ftpct:.872,ftapg:5.2,topg:2.6,ffpg:.01,tfpg:.10},
  {id:27,name:"Giannis Antetokounmpo",pos:"PF/C",team:"MIL",ppg:30.4,rpg:11.5,apg:6.5,spg:1.2,bpg:1.1,fgpct:.612,fgapg:18.4,ftpct:.658,ftapg:10.8,topg:3.4,ffpg:.02,tfpg:.18},
  {id:28,name:"Damian Lillard",pos:"PG",team:"MIL",ppg:25.8,rpg:4.1,apg:7.6,spg:.9,bpg:.3,fgpct:.446,fgapg:20.4,ftpct:.908,ftapg:5.2,topg:3.2,ffpg:.01,tfpg:.16},
  {id:29,name:"Cade Cunningham",pos:"PG/SG",team:"DET",ppg:26.5,rpg:4.4,apg:9.4,spg:1.0,bpg:.5,fgpct:.452,fgapg:20.2,ftpct:.836,ftapg:6.4,topg:3.6,ffpg:.01,tfpg:.12},
  {id:30,name:"Trae Young",pos:"PG",team:"ATL",ppg:27.2,rpg:3.1,apg:11.7,spg:.8,bpg:.2,fgpct:.434,fgapg:20.6,ftpct:.872,ftapg:7.8,topg:4.4,ffpg:.01,tfpg:.22},
  {id:31,name:"Paolo Banchero",pos:"PF/SF",team:"ORL",ppg:25.3,rpg:7.0,apg:5.2,spg:.9,bpg:.9,fgpct:.462,fgapg:18.8,ftpct:.742,ftapg:7.2,topg:2.8,ffpg:.02,tfpg:.10},
  {id:32,name:"Franz Wagner",pos:"SF/SG",team:"ORL",ppg:21.6,rpg:5.7,apg:4.8,spg:1.1,bpg:.4,fgpct:.476,fgapg:16.2,ftpct:.812,ftapg:4.6,topg:2.2,ffpg:.01,tfpg:.08},
];

// ── Scoring helpers ───────────────────────────────────────────────
function espnScore(p){return p.ppg+p.rpg+p.apg+p.spg+p.bpg-p.fgapg*(1-p.fgpct)-p.ftapg*(1-p.ftpct)-p.topg-p.ffpg-p.tfpg;}
function espnBD(p){const fgmi=p.fgapg*(1-p.fgpct),ftmi=p.ftapg*(1-p.ftpct),pos=p.ppg+p.rpg+p.apg+p.spg+p.bpg,neg=fgmi+ftmi+p.topg+p.ffpg+p.tfpg;return{pos:+pos.toFixed(1),neg:+neg.toFixed(1),net:+(pos-neg).toFixed(1)};}
function getTeam(id){return S.teams.find(t=>t.id===id)||{id,name:id,eliminated:false,survivedRounds:0};}
function getPlayer(id){return PLAYERS.find(p=>p.id===id);}
function initials(n){return n.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();}
function buildSnake(n,picks){const o=[];for(let r=0;r<picks;r++){const row=Array.from({length:n},(_,i)=>i);o.push(...(r%2===0?row:[...row].reverse()));}return o;}
function bonusForPlayer(pid){const t=getTeam(getPlayer(pid).team);let b=0;for(let r=1;r<=(t.survivedRounds||0);r++)b+=ROUND_BONUS[r];return b;}
function isInactive(mid,pid){const t=getTeam(getPlayer(pid).team);return t.eliminated||(S.injured[mid]||[]).includes(pid);}
function managerStatScore(mid){return +S.rosters[mid].reduce((s,pid)=>isInactive(mid,pid)?s:s+espnScore(getPlayer(pid)),0).toFixed(1);}
function managerBonusScore(mid){return S.rosters[mid].reduce((s,pid)=>s+bonusForPlayer(pid),0);}
function managerTotal(mid){return +(managerStatScore(mid)+managerBonusScore(mid)).toFixed(1);}
function waiverSlotsForManager(mid){return S.rosters[mid].filter(pid=>getTeam(getPlayer(pid).team).eliminated).length+(S.injured[mid]||[]).length;}
function waiverSlotsOpen(mid){return Math.max(0,waiverSlotsForManager(mid)-(S.waiverAdds[mid]||0));}
function draftedIds(){return Object.values(S.rosters).flat();}
function availablePlayers(){const tk=draftedIds();return PLAYERS.filter(p=>!tk.includes(p.id)&&!getTeam(p.team).eliminated);}
function waiverPlayers(){const tk=draftedIds();return PLAYERS.filter(p=>!tk.includes(p.id)&&getTeam(p.team).eliminated);}

// ── Supabase client (loaded via CDN in index.html) ────────────────
let db = null;
function initSupabase(){
  if(SUPABASE_URL === 'YOUR_SUPABASE_URL'){
    console.warn('Supabase not configured — running in offline mode');
    return false;
  }
  db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return true;
}

// ── State ─────────────────────────────────────────────────────────
let S = null;
let isCommissioner = false;
let currentManagerId = null; // which manager this device is
let teamFilter = null;
let tempMgrs = [{name:"",color:COLORS[0]},{name:"",color:COLORS[1]},{name:"",color:COLORS[2]},{name:"",color:COLORS[3]}];

// ── Persistence ───────────────────────────────────────────────────
async function saveState(){
  if(!S) return;
  const payload = {
    id: LEAGUE_ID,
    state: JSON.stringify(S),
    updated_at: new Date().toISOString()
  };
  if(db){
    await db.from('leagues').upsert(payload);
  } else {
    localStorage.setItem('nba_playoff_2026_state', JSON.stringify(S));
  }
}

async function loadState(){
  if(db){
    const {data, error} = await db.from('leagues').select('state').eq('id', LEAGUE_ID).single();
    if(data && data.state){
      S = JSON.parse(data.state);
      return true;
    }
    return false;
  } else {
    const raw = localStorage.getItem('nba_playoff_2026_state');
    if(raw){ S = JSON.parse(raw); return true; }
    return false;
  }
}

// Poll for updates every 30s so all viewers see fresh data
function startPolling(){
  setInterval(async()=>{
    if(!db || !S) return;
    const {data} = await db.from('leagues').select('state,updated_at').eq('id', LEAGUE_ID).single();
    if(data && data.state){
      const fresh = JSON.parse(data.state);
      if(JSON.stringify(fresh) !== JSON.stringify(S)){
        S = fresh;
        render();
      }
    }
  }, 30000);
}

// ── Commissioner auth ─────────────────────────────────────────────
function tryCommLogin(){
  const input = document.getElementById('comm-login-input').value;
  if(input === S.commPassword){
    isCommissioner = true;
    document.getElementById('comm-login-bar').classList.add('hidden');
    document.getElementById('comm-active-bar').classList.remove('hidden');
    render();
  } else {
    document.getElementById('comm-login-input').style.borderColor = '#c0392b';
    setTimeout(()=>document.getElementById('comm-login-input').style.borderColor = '#ddd', 1500);
  }
}
function lockComm(){
  isCommissioner = false;
  document.getElementById('comm-active-bar').classList.add('hidden');
  document.getElementById('comm-login-bar').classList.remove('hidden');
  render();
}

// ── Setup ─────────────────────────────────────────────────────────
function renderSetup(){
  document.getElementById('name-inputs').innerHTML = tempMgrs.map((m,i)=>`
    <div class="name-input-row">
      <div class="avatar" style="background:${m.color}22;color:${m.color}">${i+1}</div>
      <input type="text" placeholder="Manager ${i+1}" value="${m.name}" oninput="tempMgrs[${i}].name=this.value"/>
    </div>`).join('');
  document.getElementById('btn-add').disabled = tempMgrs.length >= 8;
  document.getElementById('btn-rem').disabled = tempMgrs.length <= 2;
}
function addManager(){if(tempMgrs.length>=8)return;tempMgrs.push({name:"",color:COLORS[tempMgrs.length%COLORS.length]});renderSetup();}
function removeManager(){if(tempMgrs.length<=2)return;tempMgrs.pop();renderSetup();}

async function startLeague(){
  const pw = document.getElementById('comm-password').value.trim();
  if(!pw){ alert('Please set a commissioner password.'); return; }
  const mgrs = tempMgrs.map((m,i)=>({id:i,name:m.name.trim()||`Manager ${i+1}`,color:m.color,initials:initials(m.name.trim()||`Manager ${i+1}`)}));
  S = {
    managers: mgrs,
    commPassword: pw,
    snakeOrder: buildSnake(mgrs.length, ROSTER_SIZE),
    draftIdx: 0,
    rosters: Object.fromEntries(mgrs.map(m=>[m.id,[]])),
    injured: Object.fromEntries(mgrs.map(m=>[m.id,[]])),
    waiverAdds: Object.fromEntries(mgrs.map(m=>[m.id,0])),
    round: 1,
    teams: TEAMS.map(t=>({...t, eliminated:false, survivedRounds:0})),
  };
  isCommissioner = true;
  await saveState();
  showMainScreen();
}

function showMainScreen(){
  document.getElementById('setup-screen').classList.add('hidden');

  // If manager not yet chosen, show picker first
  if(currentManagerId === null && !isCommissioner){
    showManagerPicker();
    return;
  }

  document.getElementById('manager-picker').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
  document.getElementById('league-sub').textContent = `2026 Playoffs · ${S.managers.length} managers · ${ROSTER_SIZE} picks each`;
  document.getElementById('m-mgrs').textContent = S.managers.length;
  document.getElementById('round-sel').value = S.round || 1;
  document.getElementById('m-round').textContent = 'R' + (S.round||1);
  if(isCommissioner){
    document.getElementById('comm-active-bar').classList.remove('hidden');
    document.getElementById('comm-login-bar').classList.add('hidden');
  } else {
    document.getElementById('comm-login-bar').classList.remove('hidden');
    document.getElementById('comm-active-bar').classList.add('hidden');
  }
  render();
  startPolling();
}

function showManagerPicker(){
  document.getElementById('setup-screen').classList.add('hidden');
  document.getElementById('main-screen').classList.add('hidden');
  const picker = document.getElementById('manager-picker');
  picker.classList.remove('hidden');
  picker.innerHTML = `
    <div style="max-width:400px;margin:3rem auto;padding:0 1rem">
      <div class="topbar" style="margin-bottom:1.5rem">
        <div>
          <div class="topbar-title">🏀 NBA Playoff Fantasy</div>
          <div class="topbar-sub">2026 Playoffs</div>
        </div>
      </div>
      <div class="card">
        <div class="section-title">Who are you?</div>
        <p style="font-size:13px;color:#888;margin-bottom:1rem">Pick your name to join the draft. You'll only be able to pick when it's your turn.</p>
        <div style="display:flex;flex-direction:column;gap:8px" id="mgr-pick-list">
          ${S.managers.map(m=>`
            <button onclick="selectManager(${m.id})" style="display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid #e8e8e8;border-radius:10px;background:#fff;cursor:pointer;text-align:left;width:100%;transition:all .15s" onmouseover="this.style.background='#f8f8f6'" onmouseout="this.style.background='#fff'">
              <div class="avatar" style="background:${m.color}22;color:${m.color}">${m.initials}</div>
              <span style="font-size:15px;font-weight:600;color:#1a1a1a">${m.name}</span>
            </button>
          `).join('')}
        </div>
        <div style="margin-top:1rem;padding-top:1rem;border-top:1px solid #f0f0f0">
          <button onclick="selectManager('viewer')" style="width:100%;padding:8px;font-size:13px;color:#888;border:none;background:none;cursor:pointer">👀 Just watching (view only)</button>
        </div>
      </div>
    </div>
  `;
}

function selectManager(id){
  currentManagerId = id;
  // Save to sessionStorage so refresh keeps you logged in
  try{ sessionStorage.setItem('nba_mgr_2026', String(id)); }catch(e){}
  document.getElementById('manager-picker').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
  document.getElementById('league-sub').textContent = `2026 Playoffs · ${S.managers.length} managers · ${ROSTER_SIZE} picks each`;
  document.getElementById('m-mgrs').textContent = S.managers.length;
  document.getElementById('round-sel').value = S.round || 1;
  document.getElementById('m-round').textContent = 'R' + (S.round||1);
  document.getElementById('comm-login-bar').classList.remove('hidden');
  document.getElementById('comm-active-bar').classList.add('hidden');
  render();
  startPolling();
}

// ── Actions ───────────────────────────────────────────────────────
async function renameMgr(id, val){
  const m = S.managers.find(x=>x.id===id);
  if(!m) return;
  const t = val.trim();
  if(t){ m.name=t; m.initials=initials(t); }
  await saveState(); render();
}

async function setRound(r){
  S.round=r;
  document.getElementById('m-round').textContent='R'+r;
  await saveState(); render();
}

async function randomizeDraft(){
  if(!isCommissioner){ alert('Commissioner access required.'); return; }
  const n=S.managers.length;
  const idx=[...Array(n).keys()].sort(()=>Math.random()-.5);
  const old=[...S.managers];
  S.managers=idx.map((i,ni)=>({...old[i],id:ni}));
  S.rosters=Object.fromEntries(S.managers.map(m=>[m.id,[]]));
  S.injured=Object.fromEntries(S.managers.map(m=>[m.id,[]]));
  S.waiverAdds=Object.fromEntries(S.managers.map(m=>[m.id,0]));
  S.draftIdx=0; S.snakeOrder=buildSnake(n,ROSTER_SIZE);
  await saveState(); render();
}

async function draftPlayer(pid){
  if(S.draftIdx>=S.snakeOrder.length) return;
  const onClockId = S.snakeOrder[S.draftIdx];
  // Only allow the manager whose turn it is (or commissioner)
  if(!isCommissioner && currentManagerId !== onClockId){
    alert("It's not your pick yet!"); return;
  }
  S.rosters[onClockId].push(pid);
  S.draftIdx++;
  await saveState(); render();
}

async function addFromWaiver(pid, mid){
  if(waiverSlotsOpen(mid)<=0){ alert(`${S.managers[mid].name} has no open waiver slots.`); return; }
  S.rosters[mid].push(pid);
  S.waiverAdds[mid]=(S.waiverAdds[mid]||0)+1;
  await saveState(); render();
}

async function markInjured(mid, pid){
  if(!isCommissioner){ alert('Commissioner access required.'); return; }
  if(!(S.injured[mid]||[]).includes(pid)){ if(!S.injured[mid]) S.injured[mid]=[]; S.injured[mid].push(pid); }
  await saveState(); render();
}

async function clearInjury(mid, pid){
  if(!isCommissioner){ alert('Commissioner access required.'); return; }
  S.injured[mid]=(S.injured[mid]||[]).filter(x=>x!==pid);
  await saveState(); render();
}

async function toggleElim(tid){
  if(!isCommissioner){ alert('Commissioner access required.'); return; }
  const t=S.teams.find(x=>x.id===tid);
  t.eliminated=!t.eliminated;
  await saveState(); render();
}

async function setSurvivedRounds(tid, r){
  if(!isCommissioner){ alert('Commissioner access required.'); return; }
  S.teams.find(x=>x.id===tid).survivedRounds=parseInt(r);
  await saveState(); render();
}

// ── UI helpers ────────────────────────────────────────────────────
function showTab(name){
  ALL_TABS.forEach(t=>document.getElementById('tab-'+t).classList.toggle('hidden', t!==name));
  document.querySelectorAll('.tab').forEach((el,i)=>{
    el.classList.toggle('active', ['standings','draft','waiver','rosters','scoring'][i]===name);
  });
}

// ── Render ────────────────────────────────────────────────────────
function render(){
  renderStandings();
  renderNameEdit();
  renderDraft();
  renderWaiver();
  renderRosters();
  renderScoring();
  document.getElementById('m-avail').textContent = waiverPlayers().length;
}

function renderStandings(){
  const sorted = [...S.managers].sort((a,b)=>managerTotal(b.id)-managerTotal(a.id));
  document.getElementById('standings-list').innerHTML = sorted.map((m,i)=>{
    const stat=managerStatScore(m.id), bonus=managerBonusScore(m.id), total=managerTotal(m.id);
    const count=S.rosters[m.id].length, slotsOpen=waiverSlotsOpen(m.id);
    const sp=total>0?Math.round((stat/total)*100):50;
    const rankClass = i===0?'r1':i===1?'r2':i===2?'r3':'';
    return `<div class="player-row" style="flex-wrap:wrap">
      <span class="rank-num ${rankClass}">${i+1}</span>
      <div class="avatar" style="background:${m.color}22;color:${m.color}">${m.initials}</div>
      <div style="flex:1;min-width:100px">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span style="font-size:14px;font-weight:600">${m.name}</span>
          <button class="btn-ghost" onclick="showTab('manage-names')" title="Edit names">✏️</button>
          ${slotsOpen>0?`<span class="badge" style="background:#e8f8ee;color:#1d7a3a">${slotsOpen} waiver slot${slotsOpen>1?'s':''} open</span>`:''}
        </div>
        <div style="font-size:12px;color:#888;margin-top:1px">${count}/${ROSTER_SIZE} players · <span style="color:#185FA5">${stat} stat</span>${bonus>0?` + <span style="color:#1D9E75">${bonus} bonus</span>`:''}</div>
        <div class="score-bar">
          <div class="score-seg-stat" style="width:${sp}%"></div>
          <div class="score-seg-bonus" style="width:${100-sp}%"></div>
        </div>
      </div>
      <div style="font-size:24px;font-weight:700">${total}<span style="font-size:12px;color:#aaa;margin-left:3px">pts</span></div>
    </div>`;
  }).join('');
}

function renderNameEdit(){
  document.getElementById('name-edit-list').innerHTML = S.managers.map(m=>`
    <div class="name-input-row" style="margin-bottom:10px">
      <div class="avatar" style="background:${m.color}22;color:${m.color}">${m.initials}</div>
      <input type="text" style="width:220px" value="${m.name}"
        onchange="renameMgr(${m.id},this.value)"
        onkeydown="if(event.key==='Enter')renameMgr(${m.id},this.value)"
        placeholder="Name or nickname"/>
    </div>`).join('');
}

function renderDraft(){
  const done = S.draftIdx >= S.snakeOrder.length;
  const onClockId = done ? null : S.snakeOrder[S.draftIdx];
  const onClockMgr = done ? null : S.managers[onClockId];
  const isMyTurn = !done && (isCommissioner || currentManagerId === onClockId);

  // Notice bar
  let noticeHtml = '';
  if(done){
    noticeHtml = `<div class="success-box">Draft complete! Head to Rosters to see all teams.</div>`;
  } else if(isMyTurn && !isCommissioner){
    noticeHtml = `<div class="success-box" style="background:#e8f8ee;border-color:#a8e6c0">🟢 <strong>It's your pick, ${onClockMgr.name}!</strong> Pick #${S.draftIdx+1} of ${S.snakeOrder.length} — choose a player below.</div>`;
  } else {
    noticeHtml = `<div class="notice">⏳ Waiting on <strong>${onClockMgr.name}</strong> — Pick #${S.draftIdx+1} of ${S.snakeOrder.length}</div>`;
  }
  document.getElementById('draft-notice').innerHTML = noticeHtml;

  document.getElementById('btn-randomize').disabled = !isCommissioner || S.draftIdx > 0;

  document.getElementById('draft-order-list').innerHTML = S.snakeOrder.map((mid,i)=>{
    const m=S.managers[mid], filled=i<S.draftIdx, current=i===S.draftIdx&&!done;
    const before=S.snakeOrder.slice(0,i).filter(x=>x===mid).length;
    const p=filled?getPlayer(S.rosters[mid][before]):null;
    return `<div class="pick-slot ${filled?'filled':''} ${current?'current':''}">
      <span style="font-size:10px;color:#bbb;min-width:22px">#${i+1}</span>
      <div class="avatar" style="background:${m.color}22;color:${m.color};width:22px;height:22px;font-size:9px">${m.initials}</div>
      <span style="font-size:12px;${current?'color:#1a56db;font-weight:600':filled?'':'color:#bbb'}">${filled&&p?p.name:current?'On the clock…':m.name}</span>
    </div>`;
  }).join('');

  document.getElementById('team-filters').innerHTML =
    `<span class="team-chip ${!teamFilter?'sel':''}" onclick="teamFilter=null;render()">All</span>` +
    S.teams.map(t=>`<span class="team-chip ${t.eliminated?'elim':''} ${teamFilter===t.id?'sel':''}" onclick="${t.eliminated?'':'teamFilter=\''+t.id+'\';render()'}">${t.id}</span>`).join('');

  let avail = availablePlayers().sort((a,b)=>espnScore(b)-espnScore(a));
  if(teamFilter) avail = avail.filter(p=>p.team===teamFilter);

  document.getElementById('draft-pool').innerHTML = done
    ? '<div style="text-align:center;padding:1.5rem;color:#aaa;font-size:14px">Draft is complete.</div>'
    : avail.slice(0,20).map(p=>{
        const t=getTeam(p.team), bd=espnBD(p);
        const canPick = isMyTurn;
        return `<div class="player-row" style="${canPick?'':'opacity:.5'}">
          <div style="flex:1">
            <div style="font-size:13px;font-weight:600">${p.name} <span class="pos-badge">${p.pos}</span></div>
            <div style="font-size:11px;color:#888">${t.name} · <span class="pos">+${bd.pos}</span> <span class="neg">−${bd.neg}</span></div>
          </div>
          <span style="font-size:13px;font-weight:600;margin-right:8px;${bd.net>=0?'color:#1d7a3a':'color:#c0392b'}">${bd.net>0?'+':''}${bd.net}</span>
          <button class="btn btn-sm btn-primary" onclick="draftPlayer(${p.id})" ${canPick?'':'disabled style="opacity:.4;cursor:not-allowed"'}>Pick</button>
        </div>`;
      }).join('');
}

function renderWaiver(){
  const avail = waiverPlayers().sort((a,b)=>espnScore(b)-espnScore(a));
  const elimNames = S.teams.filter(t=>t.eliminated).map(t=>t.name).join(', ');
  const slots = S.managers.map(m=>({m,open:waiverSlotsOpen(m.id)})).filter(x=>x.open>0);
  document.getElementById('waiver-header').innerHTML = !elimNames
    ? `<div class="notice">No teams eliminated yet. Waivers open once a team is eliminated or a player is injured.</div>`
    : `<div class="info-box">Eliminated: ${elimNames}.<br>Open slots: ${slots.length?slots.map(x=>`<strong>${x.m.name}</strong> (${x.open})`).join(', '):'None — all slots used.'}</div>`;
  document.getElementById('waiver-list').innerHTML = !avail.length
    ? '<div style="text-align:center;padding:1.5rem;color:#aaa;font-size:14px">No waiver players available yet.</div>'
    : avail.map(p=>{
        const t=getTeam(p.team), bd=espnBD(p);
        return `<div class="player-row">
          <div style="flex:1">
            <div style="font-size:13px;font-weight:600">${p.name} <span class="pos-badge">${p.pos}</span> <span class="badge badge-elim">Eliminated</span></div>
            <div style="font-size:11px;color:#888">${t.name} · <span class="pos">+${bd.pos}</span> <span class="neg">−${bd.neg}</span> = <strong>${bd.net>0?'+':''}${bd.net}</strong></div>
          </div>
          <select id="wm-${p.id}" style="margin-right:8px">${S.managers.map(m=>`<option value="${m.id}">${m.name} (${waiverSlotsOpen(m.id)} slot${waiverSlotsOpen(m.id)!==1?'s':''})</option>`).join('')}</select>
          <button class="btn btn-sm btn-primary" onclick="addFromWaiver(${p.id},parseInt(document.getElementById('wm-${p.id}').value))">Add</button>
        </div>`;
      }).join('');
}

function renderRosters(){
  const commNote = isCommissioner
    ? `<div class="commissioner-bar" style="margin-bottom:1rem"><span style="font-size:16px">🔓</span><span>Commissioner mode — tap teams to eliminate, set rounds survived, mark injuries</span></div>`
    : `<div class="notice">View-only mode. Commissioner controls are locked.</div>`;
  document.getElementById('rosters-comm-notice').innerHTML = commNote;

  document.getElementById('rosters-list').innerHTML = S.managers.map(m=>{
    const players = S.rosters[m.id].map(pid=>getPlayer(pid));
    const slotsOpen = waiverSlotsOpen(m.id);
    return `<div class="card">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:.875rem;flex-wrap:wrap">
        <div class="avatar" style="background:${m.color}22;color:${m.color}">${m.initials}</div>
        <div style="flex:1">
          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-weight:600;font-size:15px">${m.name}</span>
            <button class="btn-ghost" onclick="showTab('manage-names')">✏️</button>
          </div>
          <div style="font-size:11px;color:#888">${players.length}/${ROSTER_SIZE} players${slotsOpen>0?` · <span style="color:#1d7a3a;font-weight:600">${slotsOpen} waiver slot${slotsOpen!==1?'s':''} open</span>`:''}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:18px;font-weight:700">${managerTotal(m.id)} pts</div>
          <div style="font-size:11px;color:#888">${managerStatScore(m.id)} stat${managerBonusScore(m.id)>0?` + <span style="color:#1D9E75">${managerBonusScore(m.id)} bonus</span>`:''}</div>
        </div>
      </div>
      ${players.length ? players.map(p=>{
        const t=getTeam(p.team), bd=espnBD(p), bonus=bonusForPlayer(p.id);
        const inj=(S.injured[m.id]||[]).includes(p.id), sr=t.survivedRounds||0;
        const rbg=ROUND_BG[Math.min(sr,4)], rfg=ROUND_FG[Math.min(sr,4)];
        return `<div class="player-row">
          <div style="flex:1">
            <div style="font-size:13px;font-weight:600">${p.name} <span class="pos-badge">${p.pos}</span>
              ${t.eliminated?'<span class="badge badge-elim">Elim</span>':inj?'<span class="badge badge-inj">Injured</span>':'<span class="badge badge-active">Active</span>'}
              ${bonus>0?`<span class="badge" style="background:${rbg};color:${rfg}">+${bonus}</span>`:''}
            </div>
            <div style="font-size:11px;color:#888;margin-top:2px">${t.name} · <span class="pos">+${bd.pos}</span> <span class="neg">−${bd.neg}</span> = ${bd.net>0?'+':''}${bd.net}/gm</div>
          </div>
          ${isCommissioner?`<div style="display:flex;gap:4px;flex-shrink:0">
            ${!t.eliminated&&!inj?`<button class="btn btn-sm btn-warn" onclick="markInjured(${m.id},${p.id})" title="Mark injured">🤕</button>`:''}
            ${inj?`<button class="btn btn-sm" onclick="clearInjury(${m.id},${p.id})">✓ Healthy</button>`:''}
          </div>`:''}
        </div>`;
      }).join('') : '<div style="font-size:13px;color:#aaa;padding:6px 0">No players drafted yet.</div>'}
      ${isCommissioner?`
      <div style="margin-top:.875rem;padding-top:.875rem;border-top:1px solid #f0f0f0">
        <div class="section-title" style="margin-bottom:.5rem">Teams — tap to eliminate · set rounds survived</div>
        <div style="display:flex;flex-wrap:wrap;gap:5px">
          ${S.teams.map(t=>`<div style="display:inline-flex;align-items:center;gap:3px">
            <span class="team-chip ${t.eliminated?'elim':''}" style="margin:0" onclick="toggleElim('${t.id}')">${t.id}</span>
            ${!t.eliminated?`<select style="padding:2px 4px;font-size:10px" onchange="setSurvivedRounds('${t.id}',this.value)">
              <option value="0" ${(t.survivedRounds||0)===0?'selected':''}>R0</option>
              <option value="1" ${(t.survivedRounds||0)===1?'selected':''}>R1✓</option>
              <option value="2" ${(t.survivedRounds||0)===2?'selected':''}>R2✓</option>
              <option value="3" ${(t.survivedRounds||0)===3?'selected':''}>R3✓</option>
              <option value="4" ${(t.survivedRounds||0)===4?'selected':''}>R4✓</option>
            </select>`:'<span style="font-size:10px;color:#c0392b">out</span>'}
          </div>`).join('')}
        </div>
      </div>`:''}
    </div>`;
  }).join('');
}

function renderScoring(){
  document.getElementById('scoring-breakdown').innerHTML = S.managers.map(m=>{
    const players = S.rosters[m.id].map(pid=>getPlayer(pid));
    return `<div style="margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid #f0f0f0">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        <div class="avatar" style="background:${m.color}22;color:${m.color};width:26px;height:26px;font-size:10px">${m.initials}</div>
        <span style="font-weight:600;font-size:14px">${m.name}</span>
        <span style="font-size:14px;font-weight:700;margin-left:auto">${managerTotal(m.id)} pts</span>
      </div>
      ${players.length ? players.map(p=>{
        const t=getTeam(p.team), bd=espnBD(p), bonus=bonusForPlayer(p.id), inactive=isInactive(m.id,p.id);
        return `<div style="font-size:12px;padding:4px 0 4px 34px;border-bottom:1px solid #f8f8f8">
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
            <span style="flex:1;font-weight:600">${p.name} <span class="pos-badge">${p.pos}</span>${inactive?` <span style="color:#c0392b;font-size:10px">(inactive)</span>`:''}</span>
            <span class="pos">+${bd.pos}</span><span class="neg">−${bd.neg}</span>
            ${bonus>0?`<span style="color:#1D9E75;font-weight:600">+${bonus}B</span>`:''}
            <span style="font-weight:700">${inactive?bonus:(bd.net+bonus).toFixed(1)}</span>
          </div>
        </div>`;
      }).join('') : '<div style="font-size:12px;color:#aaa;padding-left:34px">No players drafted.</div>'}
    </div>`;
  }).join('');
}

// ── Boot ──────────────────────────────────────────────────────────
async function boot(){
  const hasDB = initSupabase();

  // Restore manager selection from session
  try{
    const saved = sessionStorage.getItem('nba_mgr_2026');
    if(saved !== null) currentManagerId = saved === 'viewer' ? 'viewer' : parseInt(saved);
  }catch(e){}

  const hasState = await loadState();
  document.getElementById('loading-overlay').style.display = 'none';
  document.getElementById('app-root').style.display = 'block';
  if(hasState){
    // If manager not yet picked this session, show picker
    if(currentManagerId === null){
      showManagerPicker();
    } else {
      showMainScreen();
    }
  } else {
    document.getElementById('setup-screen').classList.remove('hidden');
    renderSetup();
  }
}

boot();
