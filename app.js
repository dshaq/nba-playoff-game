const SUPABASE_URL = 'https://ipsngddnavymcmfbbcxu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlwc25nZGRuYXZ5bWNtZmJiY3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMDk3NDMsImV4cCI6MjA5MTc4NTc0M30.0MmQn49Y0FCn3r8GFI5XspZR12YwGWTcTbv765VoJEQ';

const COLORS = ["#4a9eff","#00d4aa","#e94560","#7b2fff","#f5a623","#ff6b9d","#5fd46a","#ff9f43"];
const ROUND_BONUS = [0, 5, 10, 20, 50];
const ROUND_BG = ["","rgba(24,95,165,.2)","rgba(59,109,17,.2)","rgba(133,79,11,.2)","rgba(153,53,86,.2)"];
const ROUND_FG = ["","#4a9eff","#5fd46a","#f5a623","#ff6b9d"];
const ROUND_BORDER = ["","#185FA5","#3B6D11","#854F0B","#993556"];
const ROSTER_SIZE = 8;
const ALL_TABS = ['standings','manage-names','draft','waiver','rosters','scoring'];
const LEAGUE_ID = 'nba-2026';

// 2026 NBA Playoff teams — 12 confirmed + 4 from play-in (Apr 15-17)
// Play-in: West: PHX vs POR (W7), LAC vs GSW (W8) | East: PHI vs ORL (E7), CHA vs MIA (E8)
const TEAMS = [
  // West confirmed
  {id:"OKC",name:"Thunder",seed:"W1"},{id:"SAS",name:"Spurs",seed:"W2"},
  {id:"DEN",name:"Nuggets",seed:"W3"},{id:"LAL",name:"Lakers",seed:"W4"},
  {id:"HOU",name:"Rockets",seed:"W5"},{id:"MIN",name:"Timberwolves",seed:"W6"},
  // West play-in (W7/W8 TBD Apr 17)
  {id:"PHX",name:"Suns",seed:"W7/8*"},{id:"POR",name:"Trail Blazers",seed:"W7/8*"},
  {id:"LAC",name:"Clippers",seed:"W7/8*"},{id:"GSW",name:"Warriors",seed:"W7/8*"},
  // East confirmed
  {id:"DET",name:"Pistons",seed:"E1"},{id:"BOS",name:"Celtics",seed:"E2"},
  {id:"NYK",name:"Knicks",seed:"E3"},{id:"CLE",name:"Cavaliers",seed:"E4"},
  {id:"TOR",name:"Raptors",seed:"E5"},{id:"ATL",name:"Hawks",seed:"E6"},
  // East play-in (E7/E8 TBD Apr 17)
  {id:"PHI",name:"76ers",seed:"E7/8*"},{id:"ORL",name:"Magic",seed:"E7/8*"},
  {id:"CHA",name:"Hornets",seed:"E7/8*"},{id:"MIA",name:"Heat",seed:"E7/8*"},
];

const PLAYERS = [
  // OKC Thunder
  {id:1,name:"Shai Gilgeous-Alexander",pos:"PG",team:"OKC",ppg:32.7,rpg:5.1,apg:6.4,spg:2.0,bpg:1.1,fgpct:.535,fgapg:19.2,ftpct:.888,ftapg:8.9,topg:2.5,ffpg:.02,tfpg:.18},
  {id:2,name:"Chet Holmgren",pos:"C/PF",team:"OKC",ppg:17.4,rpg:8.2,apg:2.1,spg:.8,bpg:2.3,fgpct:.512,fgapg:11.8,ftpct:.820,ftapg:3.1,topg:1.4,ffpg:.01,tfpg:.10},
  {id:3,name:"Jalen Williams",pos:"SG/SF",team:"OKC",ppg:24.1,rpg:4.8,apg:5.3,spg:1.4,bpg:.5,fgpct:.506,fgapg:16.4,ftpct:.851,ftapg:5.2,topg:2.8,ffpg:.01,tfpg:.08},
  // San Antonio Spurs
  {id:4,name:"Victor Wembanyama",pos:"C/PF",team:"SAS",ppg:26.1,rpg:10.7,apg:3.9,spg:1.4,bpg:3.6,fgpct:.493,fgapg:17.8,ftpct:.812,ftapg:6.2,topg:3.1,ffpg:.01,tfpg:.20},
  {id:5,name:"Devin Vassell",pos:"SG/SF",team:"SAS",ppg:18.4,rpg:3.9,apg:4.2,spg:1.3,bpg:.4,fgpct:.458,fgapg:13.8,ftpct:.855,ftapg:3.2,topg:1.8,ffpg:.01,tfpg:.08},
  {id:6,name:"Chris Paul",pos:"PG",team:"SAS",ppg:9.2,rpg:3.8,apg:8.6,spg:1.1,bpg:.2,fgpct:.442,fgapg:8.4,ftpct:.812,ftapg:2.2,topg:2.0,ffpg:.01,tfpg:.10},
  // Denver Nuggets
  {id:7,name:"Nikola Jokic",pos:"C",team:"DEN",ppg:29.8,rpg:13.4,apg:10.2,spg:1.4,bpg:.9,fgpct:.578,fgapg:18.4,ftpct:.815,ftapg:6.6,topg:3.8,ffpg:.01,tfpg:.15},
  {id:8,name:"Jamal Murray",pos:"PG/SG",team:"DEN",ppg:22.1,rpg:4.1,apg:6.8,spg:.8,bpg:.3,fgpct:.487,fgapg:16.6,ftpct:.862,ftapg:3.8,topg:2.6,ffpg:.01,tfpg:.08},
  {id:9,name:"Aaron Gordon",pos:"PF/SF",team:"DEN",ppg:14.2,rpg:6.4,apg:3.5,spg:.9,bpg:.6,fgpct:.536,fgapg:10.2,ftpct:.722,ftapg:3.0,topg:1.4,ffpg:.01,tfpg:.08},
  // LA Lakers
  {id:10,name:"LeBron James",pos:"SF/PG",team:"LAL",ppg:24.9,rpg:7.3,apg:9.0,spg:1.1,bpg:.5,fgpct:.540,fgapg:17.2,ftpct:.748,ftapg:5.4,topg:3.5,ffpg:.02,tfpg:.20},
  {id:11,name:"Anthony Davis",pos:"C/PF",team:"LAL",ppg:27.1,rpg:12.0,apg:3.5,spg:1.2,bpg:2.4,fgpct:.562,fgapg:16.8,ftpct:.798,ftapg:7.8,topg:2.2,ffpg:.02,tfpg:.10},
  {id:12,name:"Austin Reaves",pos:"SG/PG",team:"LAL",ppg:16.8,rpg:4.2,apg:5.0,spg:.9,bpg:.3,fgpct:.468,fgapg:12.4,ftpct:.882,ftapg:3.0,topg:1.8,ffpg:.01,tfpg:.08},
  // Houston Rockets
  {id:13,name:"Alperen Sengun",pos:"C",team:"HOU",ppg:22.3,rpg:9.4,apg:5.0,spg:1.0,bpg:1.6,fgpct:.556,fgapg:13.8,ftpct:.735,ftapg:6.2,topg:3.1,ffpg:.02,tfpg:.09},
  {id:14,name:"Jalen Green",pos:"SG",team:"HOU",ppg:23.8,rpg:4.2,apg:4.1,spg:1.2,bpg:.4,fgpct:.448,fgapg:18.6,ftpct:.830,ftapg:4.8,topg:2.4,ffpg:.01,tfpg:.07},
  {id:15,name:"Fred VanVleet",pos:"PG",team:"HOU",ppg:14.2,rpg:3.8,apg:7.6,spg:1.5,bpg:.2,fgpct:.418,fgapg:12.4,ftpct:.845,ftapg:2.2,topg:2.0,ffpg:.01,tfpg:.12},
  // Minnesota Timberwolves
  {id:16,name:"Anthony Edwards",pos:"SG/SF",team:"MIN",ppg:27.5,rpg:5.7,apg:5.4,spg:1.4,bpg:.6,fgpct:.462,fgapg:21.2,ftpct:.832,ftapg:7.4,topg:3.0,ffpg:.02,tfpg:.14},
  {id:17,name:"Rudy Gobert",pos:"C",team:"MIN",ppg:14.2,rpg:12.8,apg:1.4,spg:.8,bpg:2.1,fgpct:.620,fgapg:8.6,ftpct:.658,ftapg:5.2,topg:1.2,ffpg:.01,tfpg:.06},
  {id:18,name:"Julius Randle",pos:"PF",team:"MIN",ppg:21.0,rpg:7.1,apg:4.8,spg:.9,bpg:.5,fgpct:.478,fgapg:16.2,ftpct:.792,ftapg:4.8,topg:2.8,ffpg:.01,tfpg:.10},
  // Phoenix Suns (play-in)
  {id:19,name:"Devin Booker",pos:"SG/PG",team:"PHX",ppg:26.8,rpg:4.4,apg:6.8,spg:.8,bpg:.4,fgpct:.472,fgapg:20.2,ftpct:.868,ftapg:5.8,topg:3.0,ffpg:.01,tfpg:.14},
  {id:20,name:"Kevin Durant",pos:"SF/PF",team:"PHX",ppg:27.1,rpg:6.9,apg:4.2,spg:.9,bpg:1.2,fgpct:.526,fgapg:18.8,ftpct:.858,ftapg:5.4,topg:2.8,ffpg:.01,tfpg:.12},
  // Portland Trail Blazers (play-in)
  {id:21,name:"Deni Avdija",pos:"SF/PF",team:"POR",ppg:18.8,rpg:7.2,apg:4.4,spg:1.2,bpg:.5,fgpct:.484,fgapg:13.6,ftpct:.782,ftapg:4.2,topg:2.2,ffpg:.01,tfpg:.08},
  {id:22,name:"Anfernee Simons",pos:"PG/SG",team:"POR",ppg:21.4,rpg:3.8,apg:5.2,spg:.8,bpg:.3,fgpct:.452,fgapg:17.8,ftpct:.874,ftapg:4.4,topg:2.6,ffpg:.01,tfpg:.10},
  // LA Clippers (play-in)
  {id:23,name:"Kawhi Leonard",pos:"SF/SG",team:"LAC",ppg:21.6,rpg:6.2,apg:3.8,spg:1.6,bpg:.6,fgpct:.502,fgapg:16.4,ftpct:.876,ftapg:5.2,topg:2.2,ffpg:.01,tfpg:.06},
  {id:24,name:"Bennedict Mathurin",pos:"SG/SF",team:"LAC",ppg:17.6,rpg:4.4,apg:2.8,spg:.8,bpg:.4,fgpct:.448,fgapg:14.8,ftpct:.792,ftapg:3.8,topg:1.8,ffpg:.01,tfpg:.08},
  // Golden State Warriors (play-in)
  {id:25,name:"Stephen Curry",pos:"PG",team:"GSW",ppg:26.2,rpg:4.3,apg:6.1,spg:1.5,bpg:.3,fgpct:.453,fgapg:19.6,ftpct:.924,ftapg:4.2,topg:3.1,ffpg:.01,tfpg:.22},
  {id:26,name:"Draymond Green",pos:"PF",team:"GSW",ppg:10.4,rpg:7.4,apg:7.1,spg:1.2,bpg:.8,fgpct:.484,fgapg:7.8,ftpct:.692,ftapg:2.6,topg:3.0,ffpg:.04,tfpg:.45},
  // Detroit Pistons
  {id:27,name:"Cade Cunningham",pos:"PG/SG",team:"DET",ppg:26.5,rpg:4.4,apg:9.4,spg:1.0,bpg:.5,fgpct:.452,fgapg:20.2,ftpct:.836,ftapg:6.4,topg:3.6,ffpg:.01,tfpg:.12},
  {id:28,name:"Jalen Duren",pos:"C",team:"DET",ppg:15.8,rpg:12.4,apg:2.2,spg:.8,bpg:1.4,fgpct:.568,fgapg:10.2,ftpct:.644,ftapg:4.8,topg:1.8,ffpg:.01,tfpg:.06},
  // Boston Celtics
  {id:29,name:"Jayson Tatum",pos:"SF/PF",team:"BOS",ppg:27.0,rpg:8.1,apg:4.9,spg:1.1,bpg:.6,fgpct:.454,fgapg:20.8,ftpct:.832,ftapg:6.2,topg:2.8,ffpg:.01,tfpg:.16},
  {id:30,name:"Jaylen Brown",pos:"SG/SF",team:"BOS",ppg:23.1,rpg:5.5,apg:3.6,spg:1.1,bpg:.5,fgpct:.462,fgapg:17.8,ftpct:.714,ftapg:5.0,topg:2.4,ffpg:.02,tfpg:.10},
  // New York Knicks
  {id:31,name:"Jalen Brunson",pos:"PG",team:"NYK",ppg:28.4,rpg:3.2,apg:7.2,spg:.8,bpg:.2,fgpct:.473,fgapg:21.0,ftpct:.852,ftapg:5.8,topg:2.8,ffpg:.01,tfpg:.12},
  {id:32,name:"Karl-Anthony Towns",pos:"C/PF",team:"NYK",ppg:24.5,rpg:13.7,apg:3.1,spg:.7,bpg:1.1,fgpct:.512,fgapg:17.2,ftpct:.842,ftapg:5.4,topg:2.8,ffpg:.01,tfpg:.08},
  {id:33,name:"Mikal Bridges",pos:"SF/SG",team:"NYK",ppg:16.2,rpg:4.4,apg:3.2,spg:1.1,bpg:.6,fgpct:.464,fgapg:13.8,ftpct:.836,ftapg:2.4,topg:1.4,ffpg:.01,tfpg:.06},
  // Cleveland Cavaliers
  {id:34,name:"Donovan Mitchell",pos:"SG/PG",team:"CLE",ppg:26.8,rpg:4.5,apg:6.2,spg:1.7,bpg:.4,fgpct:.468,fgapg:20.0,ftpct:.836,ftapg:6.8,topg:3.0,ffpg:.01,tfpg:.12},
  {id:35,name:"Evan Mobley",pos:"PF/C",team:"CLE",ppg:18.4,rpg:9.8,apg:3.3,spg:1.1,bpg:2.5,fgpct:.542,fgapg:13.2,ftpct:.762,ftapg:4.4,topg:1.8,ffpg:.01,tfpg:.08},
  {id:36,name:"Darius Garland",pos:"PG",team:"CLE",ppg:20.4,rpg:2.8,apg:7.8,spg:1.2,bpg:.2,fgpct:.452,fgapg:16.4,ftpct:.868,ftapg:4.2,topg:2.6,ffpg:.01,tfpg:.10},
  // Toronto Raptors
  {id:37,name:"Scottie Barnes",pos:"PF/SF",team:"TOR",ppg:21.8,rpg:8.4,apg:6.2,spg:1.4,bpg:.8,fgpct:.484,fgapg:16.2,ftpct:.724,ftapg:5.4,topg:2.8,ffpg:.02,tfpg:.12},
  {id:38,name:"RJ Barrett",pos:"SG/SF",team:"TOR",ppg:20.2,rpg:5.6,apg:4.2,spg:.8,bpg:.4,fgpct:.472,fgapg:16.8,ftpct:.776,ftapg:4.8,topg:2.2,ffpg:.01,tfpg:.08},
  // Atlanta Hawks
  {id:39,name:"Trae Young",pos:"PG",team:"ATL",ppg:27.2,rpg:3.1,apg:11.7,spg:.8,bpg:.2,fgpct:.434,fgapg:20.6,ftpct:.872,ftapg:7.8,topg:4.4,ffpg:.01,tfpg:.22},
  {id:40,name:"Dyson Daniels",pos:"SG/SF",team:"ATL",ppg:16.4,rpg:5.2,apg:4.6,spg:2.6,bpg:.5,fgpct:.468,fgapg:12.4,ftpct:.772,ftapg:3.2,topg:1.8,ffpg:.01,tfpg:.06},
  // Philadelphia 76ers (play-in)
  {id:41,name:"Joel Embiid",pos:"C",team:"PHI",ppg:27.2,rpg:10.8,apg:4.2,spg:1.1,bpg:1.8,fgpct:.526,fgapg:18.2,ftpct:.844,ftapg:9.2,topg:3.2,ffpg:.02,tfpg:.14},
  {id:42,name:"Tyrese Maxey",pos:"PG",team:"PHI",ppg:25.8,rpg:3.8,apg:6.4,spg:1.0,bpg:.4,fgpct:.462,fgapg:19.4,ftpct:.858,ftapg:5.0,topg:2.6,ffpg:.01,tfpg:.10},
  // Orlando Magic (play-in)
  {id:43,name:"Paolo Banchero",pos:"PF/SF",team:"ORL",ppg:25.3,rpg:7.0,apg:5.2,spg:.9,bpg:.9,fgpct:.462,fgapg:18.8,ftpct:.742,ftapg:7.2,topg:2.8,ffpg:.02,tfpg:.10},
  {id:44,name:"Franz Wagner",pos:"SF/SG",team:"ORL",ppg:21.6,rpg:5.7,apg:4.8,spg:1.1,bpg:.4,fgpct:.476,fgapg:16.2,ftpct:.812,ftapg:4.6,topg:2.2,ffpg:.01,tfpg:.08},
  // Charlotte Hornets (play-in)
  {id:45,name:"LaMelo Ball",pos:"PG",team:"CHA",ppg:26.8,rpg:5.6,apg:8.2,spg:1.6,bpg:.4,fgpct:.448,fgapg:21.4,ftpct:.824,ftapg:4.8,topg:3.4,ffpg:.01,tfpg:.18},
  {id:46,name:"Brandon Miller",pos:"SF/SG",team:"CHA",ppg:18.4,rpg:4.6,apg:2.8,spg:.9,bpg:.5,fgpct:.452,fgapg:15.4,ftpct:.832,ftapg:3.6,topg:1.8,ffpg:.01,tfpg:.08},
  // Miami Heat (play-in)
  {id:47,name:"Bam Adebayo",pos:"C/PF",team:"MIA",ppg:20.2,rpg:10.5,apg:4.4,spg:1.2,bpg:.9,fgpct:.538,fgapg:13.6,ftpct:.762,ftapg:5.8,topg:2.4,ffpg:.01,tfpg:.08},
  {id:48,name:"Tyler Herro",pos:"SG",team:"MIA",ppg:23.7,rpg:4.8,apg:5.1,spg:1.0,bpg:.2,fgpct:.448,fgapg:18.4,ftpct:.872,ftapg:5.2,topg:2.6,ffpg:.01,tfpg:.10},
];

// ── Helpers ───────────────────────────────────────────────────────
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

// ── Supabase ──────────────────────────────────────────────────────
let db = null;
function initSupabase(){
  if(SUPABASE_URL==='YOUR_SUPABASE_URL') return false;
  db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return true;
}

// ── State ─────────────────────────────────────────────────────────
let S = null;
let isCommissioner = false;
let currentManagerId = null;
let teamFilter = null;
let tempMgrs = [{name:"",color:COLORS[0]},{name:"",color:COLORS[1]},{name:"",color:COLORS[2]},{name:"",color:COLORS[3]}];

// ── Persistence ───────────────────────────────────────────────────
async function saveState(){
  if(!S) return;
  const payload = {id:LEAGUE_ID, state:JSON.stringify(S), updated_at:new Date().toISOString()};
  if(db){ await db.from('leagues').upsert(payload); }
  else { try{localStorage.setItem('nba_playoff_2026',JSON.stringify(S));}catch(e){} }
}

async function loadState(){
  if(db){
    const {data} = await db.from('leagues').select('state').eq('id',LEAGUE_ID).single();
    if(data?.state){ S=JSON.parse(data.state); return true; }
    return false;
  } else {
    try{ const raw=localStorage.getItem('nba_playoff_2026'); if(raw){S=JSON.parse(raw);return true;} }catch(e){}
    return false;
  }
}

function startPolling(){
  setInterval(async()=>{
    if(!db||!S) return;
    const {data} = await db.from('leagues').select('state,updated_at').eq('id',LEAGUE_ID).single();
    if(data?.state){
      const fresh=JSON.parse(data.state);
      if(JSON.stringify(fresh)!==JSON.stringify(S)){ S=fresh; render(); }
    }
  }, 20000);
}

// ── Live scores ───────────────────────────────────────────────────
async function fetchScores(){
  try{
    const today = new Date().toISOString().split('T')[0].replace(/-/g,'/');
    const url = `https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json`;
    const res = await fetch(url);
    const data = await res.json();
    const games = data?.scoreboard?.games || [];
    if(!games.length){
      document.getElementById('scores-content').innerHTML = `<div class="score-item"><span style="color:var(--text3);font-size:14px">NO GAMES TODAY — CHECK BACK GAME NIGHT</span></div>`;
      return;
    }
    // Duplicate for seamless loop
    const html = [...games, ...games].map(g=>{
      const home = g.homeTeam, away = g.awayTeam;
      const status = g.gameStatusText || '';
      const isLive = g.gameStatus === 2;
      const isFinal = g.gameStatus === 3;
      const statusHtml = isLive
        ? `<span class="score-live">LIVE</span> <span style="font-size:13px;color:var(--text2)">${status}</span>`
        : isFinal ? `<span class="score-final">FINAL</span>`
        : `<span style="font-size:13px;color:var(--text3)">${status}</span>`;
      return `<div class="score-item">
        ${statusHtml}
        <span class="score-team">${away.teamTricode}</span>
        <span class="score-pts" style="${isFinal&&away.score>home.score?'color:var(--accent2)':''}">${away.score||0}</span>
        <span class="score-vs">—</span>
        <span class="score-pts" style="${isFinal&&home.score>away.score?'color:var(--accent2)':''}">${home.score||0}</span>
        <span class="score-team">${home.teamTricode}</span>
      </div>`;
    }).join('');
    document.getElementById('scores-content').className = 'scores-bar-inner';
    document.getElementById('scores-content').innerHTML = html;
  } catch(e){
    document.getElementById('scores-content').innerHTML = `<div class="score-item"><span style="color:var(--text3);font-size:14px">SCORES UNAVAILABLE</span></div>`;
  }
}

// ── Commissioner ──────────────────────────────────────────────────
function tryCommLogin(){
  const input = document.getElementById('comm-login-input').value;
  if(input===S.commPassword){
    isCommissioner=true;
    document.getElementById('comm-login-bar').classList.add('hidden');
    document.getElementById('comm-active-bar').classList.remove('hidden');
    render();
  } else {
    document.getElementById('comm-login-input').style.borderColor='var(--red)';
    setTimeout(()=>document.getElementById('comm-login-input').style.borderColor='var(--border)',1500);
  }
}
function lockComm(){
  isCommissioner=false;
  document.getElementById('comm-active-bar').classList.add('hidden');
  document.getElementById('comm-login-bar').classList.remove('hidden');
  render();
}

function confirmReset(){
  if(confirm('⚠ RESET LEAGUE?\n\nThis will wipe all draft picks, rosters, and game state. Use this for testing before the real draft.\n\nAre you sure?')){
    resetLeague();
  }
}

async function resetLeague(){
  const pw = S.commPassword;
  const mgrs = S.managers.map((m,i)=>({id:i,name:m.name,color:m.color,initials:m.initials}));
  TEAMS.forEach(t=>{t.eliminated=false;t.survivedRounds=0;});
  S = {
    managers: mgrs,
    commPassword: pw,
    snakeOrder: buildSnake(mgrs.length, ROSTER_SIZE),
    draftIdx: 0,
    rosters: Object.fromEntries(mgrs.map(m=>[m.id,[]])),
    injured: Object.fromEntries(mgrs.map(m=>[m.id,[]])),
    waiverAdds: Object.fromEntries(mgrs.map(m=>[m.id,0])),
    round: 1,
    teams: TEAMS.map(t=>({...t,eliminated:false,survivedRounds:0})),
  };
  document.getElementById('round-sel').value = 1;
  document.getElementById('m-round').textContent = 'R1';
  await saveState();
  render();
  alert('✓ LEAGUE RESET — ready for the real draft!');
}

// ── Setup ─────────────────────────────────────────────────────────
function renderSetup(){
  document.getElementById('name-inputs').innerHTML = tempMgrs.map((m,i)=>`
    <div class="name-input-row">
      <div class="avatar" style="border-color:${m.color};color:${m.color}">${i+1}</div>
      <input type="text" placeholder="MANAGER ${i+1}" value="${m.name}" oninput="tempMgrs[${i}].name=this.value"/>
    </div>`).join('');
  document.getElementById('btn-add').disabled = tempMgrs.length>=8;
  document.getElementById('btn-rem').disabled = tempMgrs.length<=2;
}
function addManager(){if(tempMgrs.length>=8)return;tempMgrs.push({name:"",color:COLORS[tempMgrs.length%COLORS.length]});renderSetup();}
function removeManager(){if(tempMgrs.length<=2)return;tempMgrs.pop();renderSetup();}

async function startLeague(){
  const pw = document.getElementById('comm-password').value.trim();
  if(!pw){ alert('SET A COMMISSIONER PASSWORD FIRST'); return; }
  const shuffled = [...tempMgrs].sort(()=>Math.random()-.5);
  const mgrs = shuffled.map((m,i)=>({id:i,name:m.name.trim()||`MANAGER ${i+1}`,color:m.color,initials:initials(m.name.trim()||`MANAGER ${i+1}`)}));
  S = {
    managers:mgrs, commPassword:pw,
    snakeOrder:buildSnake(mgrs.length,ROSTER_SIZE), draftIdx:0,
    rosters:Object.fromEntries(mgrs.map(m=>[m.id,[]])),
    injured:Object.fromEntries(mgrs.map(m=>[m.id,[]])),
    waiverAdds:Object.fromEntries(mgrs.map(m=>[m.id,0])),
    round:1, teams:TEAMS.map(t=>({...t,eliminated:false,survivedRounds:0})),
  };
  isCommissioner=true;
  await saveState();
  showMainScreen();
}

// ── Manager picker ────────────────────────────────────────────────
function showMainScreen(){
  document.getElementById('setup-screen').classList.add('hidden');
  if(currentManagerId===null&&!isCommissioner){ showManagerPicker(); return; }
  document.getElementById('manager-picker').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
  document.getElementById('league-sub').textContent = `2026 PLAYOFFS · ${S.managers.length} MANAGERS · ${ROSTER_SIZE} PICKS EACH`;
  document.getElementById('m-mgrs').textContent = S.managers.length;
  document.getElementById('round-sel').value = S.round||1;
  document.getElementById('m-round').textContent = 'R'+(S.round||1);
  if(isCommissioner){
    document.getElementById('comm-active-bar').classList.remove('hidden');
    document.getElementById('comm-login-bar').classList.add('hidden');
  } else {
    document.getElementById('comm-login-bar').classList.remove('hidden');
    document.getElementById('comm-active-bar').classList.add('hidden');
  }
  render();
  startPolling();
  fetchScores();
  setInterval(fetchScores, 60000);
}

function showManagerPicker(){
  document.getElementById('setup-screen').classList.add('hidden');
  document.getElementById('main-screen').classList.add('hidden');
  const picker = document.getElementById('manager-picker');
  picker.classList.remove('hidden');
  picker.innerHTML = `
    <div style="max-width:420px;margin:2rem auto;padding:0 1rem">
      <div class="topbar" style="margin-bottom:1.5rem">
        <div>
          <div class="topbar-title">🏀 NBA PLAYOFF FANTASY</div>
          <div class="topbar-sub">2026 PLAYOFFS</div>
        </div>
      </div>
      <div class="card card-accent">
        <div class="section-title">► WHO ARE YOU?</div>
        <p style="font-size:15px;color:var(--text2);margin-bottom:1rem">SELECT YOUR NAME TO JOIN THE DRAFT. YOU CAN ONLY PICK ON YOUR TURN.</p>
        <div id="mgr-pick-list">
          ${S.managers.map(m=>`
            <button class="mgr-pick-btn" onclick="selectManager(${m.id})">
              <div class="avatar" style="border-color:${m.color};color:${m.color}">${m.initials}</div>
              <span>${m.name}</span>
            </button>
          `).join('')}
        </div>
        <div style="margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border);text-align:center">
          <button onclick="selectManager('viewer')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-family:'VT323',monospace;font-size:16px">👀 JUST WATCHING (VIEW ONLY)</button>
        </div>
      </div>
    </div>`;
}

function selectManager(id){
  currentManagerId = id;
  try{ sessionStorage.setItem('nba_mgr_2026', String(id)); }catch(e){}
  document.getElementById('manager-picker').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
  document.getElementById('league-sub').textContent = `2026 PLAYOFFS · ${S.managers.length} MANAGERS · ${ROSTER_SIZE} PICKS EACH`;
  document.getElementById('m-mgrs').textContent = S.managers.length;
  document.getElementById('round-sel').value = S.round||1;
  document.getElementById('m-round').textContent = 'R'+(S.round||1);
  document.getElementById('comm-login-bar').classList.remove('hidden');
  document.getElementById('comm-active-bar').classList.add('hidden');
  render();
  startPolling();
  fetchScores();
  setInterval(fetchScores, 60000);
}

// ── Actions ───────────────────────────────────────────────────────
async function renameMgr(id,val){
  const m=S.managers.find(x=>x.id===id); if(!m) return;
  const t=val.trim(); if(t){m.name=t;m.initials=initials(t);}
  await saveState(); render();
}
async function setRound(r){S.round=r;document.getElementById('m-round').textContent='R'+r;await saveState();render();}
async function randomizeDraft(){
  if(!isCommissioner){alert('COMMISSIONER ACCESS REQUIRED');return;}
  const n=S.managers.length,idx=[...Array(n).keys()].sort(()=>Math.random()-.5),old=[...S.managers];
  S.managers=idx.map((i,ni)=>({...old[i],id:ni}));
  S.rosters=Object.fromEntries(S.managers.map(m=>[m.id,[]]));
  S.injured=Object.fromEntries(S.managers.map(m=>[m.id,[]]));
  S.waiverAdds=Object.fromEntries(S.managers.map(m=>[m.id,0]));
  S.draftIdx=0;S.snakeOrder=buildSnake(n,ROSTER_SIZE);
  await saveState();render();
}
async function draftPlayer(pid){
  if(S.draftIdx>=S.snakeOrder.length) return;
  const onClockId=S.snakeOrder[S.draftIdx];
  if(!isCommissioner&&currentManagerId!==onClockId){alert("IT'S NOT YOUR PICK YET!");return;}
  S.rosters[onClockId].push(pid); S.draftIdx++;
  await saveState(); render();
}
async function addFromWaiver(pid,mid){
  if(waiverSlotsOpen(mid)<=0){alert(`${S.managers[mid].name} HAS NO OPEN WAIVER SLOTS`);return;}
  S.rosters[mid].push(pid); S.waiverAdds[mid]=(S.waiverAdds[mid]||0)+1;
  await saveState(); render();
}
async function markInjured(mid,pid){
  if(!isCommissioner){alert('COMMISSIONER ACCESS REQUIRED');return;}
  if(!(S.injured[mid]||[]).includes(pid)){if(!S.injured[mid])S.injured[mid]=[];S.injured[mid].push(pid);}
  await saveState();render();
}
async function clearInjury(mid,pid){
  if(!isCommissioner){alert('COMMISSIONER ACCESS REQUIRED');return;}
  S.injured[mid]=(S.injured[mid]||[]).filter(x=>x!==pid);
  await saveState();render();
}
async function toggleElim(tid){
  if(!isCommissioner){alert('COMMISSIONER ACCESS REQUIRED');return;}
  const t=S.teams.find(x=>x.id===tid); t.eliminated=!t.eliminated;
  await saveState();render();
}
async function setSurvivedRounds(tid,r){
  if(!isCommissioner){alert('COMMISSIONER ACCESS REQUIRED');return;}
  S.teams.find(x=>x.id===tid).survivedRounds=parseInt(r);
  await saveState();render();
}

// ── UI ────────────────────────────────────────────────────────────
function showTab(name){
  ALL_TABS.forEach(t=>document.getElementById('tab-'+t).classList.toggle('hidden',t!==name));
  document.querySelectorAll('.tab').forEach((el,i)=>el.classList.toggle('active',['standings','draft','waiver','rosters','scoring'][i]===name));
}

function render(){
  renderStandings();renderNameEdit();renderDraft();renderWaiver();renderRosters();renderScoring();
  document.getElementById('m-avail').textContent=waiverPlayers().length;
}

function renderStandings(){
  const draftDone = S.draftIdx >= S.snakeOrder.length;
  const playoffsStarted = S.teams.some(t=>t.survivedRounds>0||t.eliminated);
  const showScores = draftDone && playoffsStarted;
  const sorted=[...S.managers].sort((a,b)=>{
    if(!showScores) return a.id-b.id; // keep setup order before playoffs
    return managerTotal(b.id)-managerTotal(a.id);
  });
  const draftProgress = S.draftIdx;
  const totalPicks = S.snakeOrder.length;

  document.getElementById('standings-list').innerHTML=sorted.map((m,i)=>{
    const count=S.rosters[m.id].length;
    const slotsOpen=waiverSlotsOpen(m.id);
    const rankClass=showScores?(i===0?'r1':i===1?'r2':i===2?'r3':''):'';
    const medal=showScores?(i===0?'🥇':i===1?'🥈':i===2?'🥉':''):'';

    let scoreHtml='';
    if(showScores){
      const stat=managerStatScore(m.id),bonus=managerBonusScore(m.id),total=managerTotal(m.id);
      const sp=total>0?Math.round((stat/total)*100):50;
      scoreHtml=`
        <div style="font-size:14px;color:var(--text2);margin-top:2px">${count}/${ROSTER_SIZE} · <span style="color:#4a9eff">${stat} STAT</span>${bonus>0?` + <span style="color:var(--green)">${bonus} BONUS</span>`:''}</div>
        <div class="score-bar"><div class="score-seg-stat" style="width:${sp}%"></div><div class="score-seg-bonus" style="width:${100-sp}%"></div></div>`;
    } else if(draftDone){
      scoreHtml=`<div style="font-size:13px;color:var(--text3);margin-top:2px">${count}/${ROSTER_SIZE} PLAYERS DRAFTED · PLAYOFFS START APR 18</div>`;
    } else if(draftProgress>0){
      scoreHtml=`<div style="font-size:13px;color:var(--text3);margin-top:2px">${count}/${ROSTER_SIZE} PLAYERS DRAFTED · DRAFT IN PROGRESS</div>`;
    } else {
      scoreHtml=`<div style="font-size:13px;color:var(--text3);margin-top:2px">DRAFT NOT STARTED</div>`;
    }

    const totalDisplay = showScores
      ? `<div style="font-family:'Press Start 2P',monospace;font-size:16px;color:var(--accent2)">${managerTotal(m.id)}<span style="font-size:9px;color:var(--text3);margin-left:4px">PTS</span></div>`
      : `<div style="font-size:13px;color:var(--text3)">—</div>`;

    return `<div class="player-row" style="flex-wrap:wrap">
      <span class="rank-num ${rankClass}">${medal||(showScores?i+1:'')}</span>
      <div class="avatar" style="border-color:${m.color};color:${m.color}">${m.initials}</div>
      <div style="flex:1;min-width:100px">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span style="font-size:18px;font-weight:600;color:var(--text)">${m.name}</span>
          <button class="btn-ghost" onclick="showTab('manage-names')" title="Edit">✏</button>
          ${slotsOpen>0?`<span class="badge badge-active" style="font-size:12px">${slotsOpen} WAIVER${slotsOpen>1?'S':''}</span>`:''}
        </div>
        ${scoreHtml}
      </div>
      ${totalDisplay}
    </div>`;
  }).join('');
}

function renderNameEdit(){
  document.getElementById('name-edit-list').innerHTML=S.managers.map(m=>`
    <div class="name-input-row" style="margin-bottom:10px">
      <div class="avatar" style="border-color:${m.color};color:${m.color}">${m.initials}</div>
      <input type="text" style="width:240px" value="${m.name}"
        onchange="renameMgr(${m.id},this.value)"
        onkeydown="if(event.key==='Enter')renameMgr(${m.id},this.value)"
        placeholder="NAME OR NICKNAME"/>
    </div>`).join('');
}

function renderDraft(){
  const done=S.draftIdx>=S.snakeOrder.length;
  const onClockId=done?null:S.snakeOrder[S.draftIdx];
  const onClockMgr=done?null:S.managers.find(m=>m.id===onClockId);
  const isMyTurn=!done&&(isCommissioner||currentManagerId===onClockId);

  let noticeHtml='';
  if(done){
    noticeHtml=`<div class="success-box">✓ DRAFT COMPLETE — CHECK ROSTERS TO SEE ALL TEAMS</div>`;
  } else if(isMyTurn&&!isCommissioner){
    noticeHtml=`<div class="success-box">🟢 YOUR PICK, ${onClockMgr.name}! — PICK #${S.draftIdx+1} OF ${S.snakeOrder.length}</div>`;
  } else {
    noticeHtml=`<div class="notice">⏳ WAITING ON ${onClockMgr?.name||'...'} — PICK #${S.draftIdx+1} OF ${S.snakeOrder.length}</div>`;
  }
  document.getElementById('draft-notice').innerHTML=noticeHtml;
  document.getElementById('btn-randomize').disabled=!isCommissioner||S.draftIdx>0;

  document.getElementById('draft-order-list').innerHTML=S.snakeOrder.map((mid,i)=>{
    const m=S.managers.find(x=>x.id===mid),filled=i<S.draftIdx,current=i===S.draftIdx&&!done;
    const before=S.snakeOrder.slice(0,i).filter(x=>x===mid).length;
    const p=filled?getPlayer(S.rosters[mid][before]):null;
    return `<div class="pick-slot ${filled?'filled':''} ${current?'current':''}">
      <span style="font-size:11px;color:var(--text3);min-width:24px">#${i+1}</span>
      <div class="avatar" style="border-color:${m.color};color:${m.color};width:22px;height:22px;font-size:8px">${m.initials}</div>
      <span style="font-size:14px;${current?'color:var(--accent2);font-weight:600':filled?'color:var(--text)':'color:var(--text3)'}">${filled&&p?p.name:current?'ON THE CLOCK…':m.name}</span>
    </div>`;
  }).join('');

  document.getElementById('team-filters').innerHTML=
    `<span class="team-chip ${!teamFilter?'sel':''}" onclick="teamFilter=null;render()">ALL</span>`+
    S.teams.map(t=>`<span class="team-chip ${t.eliminated?'elim':''} ${teamFilter===t.id?'sel':''}" onclick="${t.eliminated?'':'teamFilter=\''+t.id+'\';render()'}">${t.id}</span>`).join('');

  let avail=availablePlayers().sort((a,b)=>espnScore(b)-espnScore(a));
  if(teamFilter) avail=avail.filter(p=>p.team===teamFilter);

  const takenIds=draftedIds();
  const pickMap={};
  S.snakeOrder.slice(0,S.draftIdx).forEach((mid,i)=>{
    const before=S.snakeOrder.slice(0,i).filter(x=>x===mid).length;
    const pid=S.rosters[mid][before];
    if(pid) pickMap[pid]={pickNum:i+1,mid};
  });

  const availHtml=done?'<div style="text-align:center;padding:1.5rem;color:var(--text3);font-size:16px">DRAFT IS COMPLETE</div>':avail.slice(0,20).map(p=>{
    const t=getTeam(p.team),bd=espnBD(p);
    return `<div class="player-row" style="${isMyTurn?'':'opacity:.45'}">
      <div style="flex:1">
        <div style="font-size:15px;font-weight:600;color:var(--text)">${p.name} <span class="pos-badge">${p.pos}</span></div>
        <div style="font-size:13px;color:var(--text2)">${t.name} · <span style="color:var(--green)">+${bd.pos}</span> <span style="color:var(--red)">−${bd.neg}</span></div>
      </div>
      <span style="font-size:15px;font-weight:600;margin-right:8px;${bd.net>=0?'color:var(--green)':'color:var(--red)'}">${bd.net>0?'+':''}${bd.net}</span>
      <button class="btn btn-sm btn-primary" onclick="draftPlayer(${p.id})" ${isMyTurn?'':'disabled style="opacity:.3;cursor:not-allowed"'}>PICK</button>
    </div>`;
  }).join('');

  const draftedHtml=takenIds.length?`
    <div style="margin-top:1.25rem;padding-top:1rem;border-top:1px solid var(--border)">
      <div class="section-title" style="margin-bottom:.5rem">► ALREADY DRAFTED (${takenIds.length})</div>
      ${takenIds.map(pid=>{
        const p=getPlayer(pid),t=getTeam(p.team),info=pickMap[pid];
        const m=info?S.managers.find(x=>x.id===info.mid):null;
        return `<div class="player-row" style="opacity:.6">
          <div style="flex:1">
            <div style="font-size:14px;color:var(--text)">${p.name} <span class="pos-badge">${p.pos}</span></div>
            <div style="font-size:13px;color:var(--text3)">${t.name}</div>
          </div>
          ${m?`<div style="display:flex;align-items:center;gap:6px">
            <div class="avatar" style="border-color:${m.color};color:${m.color};width:22px;height:22px;font-size:8px">${m.initials}</div>
            <span style="font-size:13px;color:var(--text2)">${m.name} <span style="color:var(--text3)">#${info.pickNum}</span></span>
          </div>`:''}
        </div>`;
      }).join('')}
    </div>`:'';

  document.getElementById('draft-pool').innerHTML=availHtml+draftedHtml;
}

function renderWaiver(){
  const avail=waiverPlayers().sort((a,b)=>espnScore(b)-espnScore(a));
  const elimNames=S.teams.filter(t=>t.eliminated).map(t=>t.name).join(', ');
  const slots=S.managers.map(m=>({m,open:waiverSlotsOpen(m.id)})).filter(x=>x.open>0);
  document.getElementById('waiver-header').innerHTML=!elimNames
    ?`<div class="notice">NO TEAMS ELIMINATED YET. WAIVERS OPEN ONCE A TEAM IS OUT.</div>`
    :`<div class="info-box">ELIMINATED: ${elimNames}<br>OPEN SLOTS: ${slots.length?slots.map(x=>`${x.m.name} (${x.open})`).join(' · '):'NONE'}</div>`;
  document.getElementById('waiver-list').innerHTML=!avail.length
    ?'<div style="text-align:center;padding:1.5rem;color:var(--text3);font-size:16px">NO WAIVER PLAYERS AVAILABLE YET</div>'
    :avail.map(p=>{
      const t=getTeam(p.team),bd=espnBD(p);
      return `<div class="player-row">
        <div style="flex:1">
          <div style="font-size:15px;color:var(--text)">${p.name} <span class="pos-badge">${p.pos}</span> <span class="badge badge-elim">ELIM</span></div>
          <div style="font-size:13px;color:var(--text2)">${t.name} · <span style="color:var(--green)">+${bd.pos}</span> <span style="color:var(--red)">−${bd.neg}</span> = <strong>${bd.net>0?'+':''}${bd.net}</strong></div>
        </div>
        <select id="wm-${p.id}" style="margin-right:8px">${S.managers.map(m=>`<option value="${m.id}">${m.name} (${waiverSlotsOpen(m.id)})</option>`).join('')}</select>
        <button class="btn btn-sm btn-primary" onclick="addFromWaiver(${p.id},parseInt(document.getElementById('wm-${p.id}').value))">ADD</button>
      </div>`;
    }).join('');
}

function renderRosters(){
  document.getElementById('rosters-comm-notice').innerHTML=isCommissioner
    ?`<div class="commissioner-bar">🔓 <span style="font-family:'Press Start 2P',monospace;font-size:9px">COMMISSIONER MODE — MANAGE TEAMS &amp; INJURIES BELOW</span></div>`
    :`<div class="notice">VIEW-ONLY MODE — COMMISSIONER CONTROLS LOCKED</div>`;

  document.getElementById('rosters-list').innerHTML=S.managers.map(m=>{
    const players=S.rosters[m.id].map(pid=>getPlayer(pid)),slotsOpen=waiverSlotsOpen(m.id);
    return `<div class="card">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:.875rem;flex-wrap:wrap">
        <div class="avatar" style="border-color:${m.color};color:${m.color}">${m.initials}</div>
        <div style="flex:1">
          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-size:18px;color:var(--text)">${m.name}</span>
            <button class="btn-ghost" onclick="showTab('manage-names')">✏</button>
          </div>
          <div style="font-size:14px;color:var(--text2)">${players.length}/${ROSTER_SIZE}${slotsOpen>0?` · <span style="color:var(--green)">${slotsOpen} WAIVER SLOT${slotsOpen!==1?'S':''} OPEN</span>`:''}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:'Press Start 2P',monospace;font-size:14px;color:var(--accent2)">${managerTotal(m.id)}</div>
          <div style="font-size:13px;color:var(--text2)">${managerStatScore(m.id)} STAT${managerBonusScore(m.id)>0?` + <span style="color:var(--green)">${managerBonusScore(m.id)} BONUS</span>`:''}</div>
        </div>
      </div>
      ${players.length?players.map(p=>{
        const t=getTeam(p.team),bd=espnBD(p),bonus=bonusForPlayer(p.id),inj=(S.injured[m.id]||[]).includes(p.id),sr=t.survivedRounds||0;
        return `<div class="player-row">
          <div style="flex:1">
            <div style="font-size:14px;color:var(--text)">${p.name} <span class="pos-badge">${p.pos}</span>
              ${t.eliminated?'<span class="badge badge-elim">ELIM</span>':inj?'<span class="badge badge-inj">INJ</span>':'<span class="badge badge-active">ACTIVE</span>'}
              ${bonus>0?`<span class="badge" style="background:${ROUND_BG[Math.min(sr,4)]};color:${ROUND_FG[Math.min(sr,4)]};border-color:${ROUND_BORDER[Math.min(sr,4)]}">+${bonus}</span>`:''}
            </div>
            <div style="font-size:13px;color:var(--text2)">${t.name} · <span style="color:var(--green)">+${bd.pos}</span> <span style="color:var(--red)">−${bd.neg}</span> = ${bd.net>0?'+':''}${bd.net}/GM</div>
          </div>
          ${isCommissioner?`<div style="display:flex;gap:4px;flex-shrink:0">
            ${!t.eliminated&&!inj?`<button class="btn btn-sm btn-warn" onclick="markInjured(${m.id},${p.id})">🤕</button>`:''}
            ${inj?`<button class="btn btn-sm" onclick="clearInjury(${m.id},${p.id})" style="color:var(--green);border-color:var(--green)">✓ HEALTHY</button>`:''}
          </div>`:''}
        </div>`;
      }).join(''):'<div style="font-size:15px;color:var(--text3);padding:6px 0">NO PLAYERS DRAFTED YET</div>'}
      ${isCommissioner?`
      <div style="margin-top:.875rem;padding-top:.875rem;border-top:1px solid var(--border)">
        <div class="section-title" style="margin-bottom:.5rem">TEAMS — TAP TO ELIMINATE · SET ROUNDS SURVIVED</div>
        <div style="display:flex;flex-wrap:wrap;gap:5px">
          ${S.teams.map(t=>`<div style="display:inline-flex;align-items:center;gap:3px">
            <span class="team-chip ${t.eliminated?'elim':''}" style="margin:0" onclick="toggleElim('${t.id}')">${t.id}</span>
            ${!t.eliminated?`<select style="padding:2px 4px;font-size:11px" onchange="setSurvivedRounds('${t.id}',this.value)">
              <option value="0" ${(t.survivedRounds||0)===0?'selected':''}>R0</option>
              <option value="1" ${(t.survivedRounds||0)===1?'selected':''}>R1✓</option>
              <option value="2" ${(t.survivedRounds||0)===2?'selected':''}>R2✓</option>
              <option value="3" ${(t.survivedRounds||0)===3?'selected':''}>R3✓</option>
              <option value="4" ${(t.survivedRounds||0)===4?'selected':''}>R4✓</option>
            </select>`:'<span style="font-size:11px;color:var(--red)">OUT</span>'}
          </div>`).join('')}
        </div>
      </div>`:''}
    </div>`;
  }).join('');
}

function renderScoring(){
  document.getElementById('scoring-breakdown').innerHTML=S.managers.map(m=>{
    const players=S.rosters[m.id].map(pid=>getPlayer(pid));
    return `<div style="margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid var(--border)">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        <div class="avatar" style="border-color:${m.color};color:${m.color};width:26px;height:26px;font-size:8px">${m.initials}</div>
        <span style="font-size:17px;color:var(--text)">${m.name}</span>
        <span style="font-family:'Press Start 2P',monospace;font-size:12px;color:var(--accent2);margin-left:auto">${managerTotal(m.id)} PTS</span>
      </div>
      ${players.length?players.map(p=>{
        const t=getTeam(p.team),bd=espnBD(p),bonus=bonusForPlayer(p.id),inactive=isInactive(m.id,p.id);
        return `<div style="font-size:13px;padding:4px 0 4px 34px;border-bottom:1px solid var(--bg2)">
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
            <span style="flex:1;color:var(--text)">${p.name} <span class="pos-badge">${p.pos}</span>${inactive?` <span style="color:var(--red);font-size:12px">(INACTIVE)</span>`:''}</span>
            <span style="color:var(--green)">+${bd.pos}</span><span style="color:var(--red)">−${bd.neg}</span>
            ${bonus>0?`<span style="color:var(--green)">+${bonus}B</span>`:''}
            <span style="color:var(--accent2);font-weight:bold">${inactive?bonus:(bd.net+bonus).toFixed(1)}</span>
          </div>
        </div>`;
      }).join(''):'<div style="font-size:14px;color:var(--text3);padding-left:34px">NO PLAYERS DRAFTED</div>'}
    </div>`;
  }).join('');
}

// ── Boot ──────────────────────────────────────────────────────────
async function boot(){
  initSupabase();
  try{ const s=sessionStorage.getItem('nba_mgr_2026'); if(s!==null) currentManagerId=s==='viewer'?'viewer':parseInt(s); }catch(e){}
  const hasState=await loadState();
  document.getElementById('loading-overlay').style.display='none';
  document.getElementById('app-root').style.display='block';
  if(hasState){
    currentManagerId===null?showManagerPicker():showMainScreen();
  } else {
    document.getElementById('setup-screen').classList.remove('hidden');
    renderSetup();
  }
}

boot();
