// v66 — OUT badge + INJ eligibility fix

// Mobile detection
const IS_MOBILE = window.innerWidth <= 640;

const SUPABASE_URL = 'https://ipsngddnavymcmfbbcxu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlwc25nZGRuYXZ5bWNtZmJiY3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMDk3NDMsImV4cCI6MjA5MTc4NTc0M30.0MmQn49Y0FCn3r8GFI5XspZR12YwGWTcTbv765VoJEQ';

const COLORS = ["#4a9eff","#00d4aa","#e94560","#7b2fff","#f5a623","#ff6b9d","#5fd46a","#ff9f43"];
const ROUND_BONUS = [0, 5, 10, 20, 50];
const ROUND_BG = ["","rgba(24,95,165,.2)","rgba(59,109,17,.2)","rgba(133,79,11,.2)","rgba(153,53,86,.2)"];
const ROUND_FG = ["","#4a9eff","#5fd46a","#f5a623","#ff6b9d"];
const ROUND_BORDER = ["","#185FA5","#3B6D11","#854F0B","#993556"];
const ROSTER_SIZE = 8;
const ALL_TABS = ['my-team','live-score','boss','standings','manage-names','draft','waiver','rosters','rules','teams'];
const LEAGUE_ID = 'nba-2026';

// 2026 NBA Playoff Teams — BRACKET SET
// W8: PHX (beat GSW 111-96) | E8: ORL (beat CHA 121-90)
// Eliminated: LAC, MIA, GSW, CHA
const TEAMS = [
  {id:"OKC",name:"Thunder",seed:"W1"},{id:"SAS",name:"Spurs",seed:"W2"},
  {id:"DEN",name:"Nuggets",seed:"W3"},{id:"LAL",name:"Lakers",seed:"W4"},
  {id:"HOU",name:"Rockets",seed:"W5"},{id:"MIN",name:"Timberwolves",seed:"W6"},
  {id:"POR",name:"Trail Blazers",seed:"W7"},{id:"PHX",name:"Suns",seed:"W8"},
  {id:"DET",name:"Pistons",seed:"E1"},{id:"BOS",name:"Celtics",seed:"E2"},
  {id:"NYK",name:"Knicks",seed:"E3"},{id:"CLE",name:"Cavaliers",seed:"E4"},
  {id:"TOR",name:"Raptors",seed:"E5"},{id:"ATL",name:"Hawks",seed:"E6"},
  {id:"PHI",name:"76ers",seed:"E7"},{id:"ORL",name:"Magic",seed:"E8"},
];

const PLAYERS = [
  {id:1,name:"Jayson Tatum",pos:"SF/PF",team:"BOS",ppg:27.0,rpg:8.1,apg:4.9,spg:1.1,bpg:0.6,fgpct:0.454,fgapg:20.8,ftpct:0.832,ftapg:6.2,topg:2.8,ffpg:0.01,tfpg:0.16},
  {id:2,name:"Jaylen Brown",pos:"SG/SF",team:"BOS",ppg:23.1,rpg:5.5,apg:3.6,spg:1.1,bpg:0.5,fgpct:0.462,fgapg:17.8,ftpct:0.714,ftapg:5.0,topg:2.4,ffpg:0.02,tfpg:0.1},
  {id:3,name:"Derrick White",pos:"PG/SG",team:"BOS",ppg:15.2,rpg:4.2,apg:4.4,spg:1.0,bpg:1.0,fgpct:0.454,fgapg:12.8,ftpct:0.832,ftapg:3.2,topg:1.6,ffpg:0.01,tfpg:0.08},
  {id:4,name:"Payton Pritchard",pos:"PG",team:"BOS",ppg:15.4,rpg:3.2,apg:4.6,spg:0.8,bpg:0.2,fgpct:0.448,fgapg:12.4,ftpct:0.872,ftapg:2.2,topg:1.4,ffpg:0.01,tfpg:0.08},
  {id:5,name:"Sam Hauser",pos:"SF/SG",team:"BOS",ppg:11.8,rpg:3.8,apg:1.8,spg:0.5,bpg:0.3,fgpct:0.468,fgapg:10.4,ftpct:0.882,ftapg:1.8,topg:0.8,ffpg:0.01,tfpg:0.04},
  {id:6,name:"Neemias Queta",pos:"C",team:"BOS",ppg:7.8,rpg:6.8,apg:1.2,spg:0.5,bpg:1.4,fgpct:0.612,fgapg:6.2,ftpct:0.622,ftapg:2.8,topg:0.8,ffpg:0.01,tfpg:0.04},
  {id:7,name:"Baylor Scheierman",pos:"SF",team:"BOS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:8,name:"Jordan Walsh",pos:"SF",team:"BOS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:9,name:"Dalano Banton",pos:"SF",team:"BOS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:10,name:"Luka Garza",pos:"SF",team:"BOS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:11,name:"Ron Harper Jr.",pos:"SF",team:"BOS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:12,name:"Hugo Gonzalez",pos:"SF",team:"BOS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:13,name:"Amari Williams",pos:"SF",team:"BOS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:14,name:"Max Shulga",pos:"SF",team:"BOS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:15,name:"John Tonje",pos:"SF",team:"BOS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:334,name:"Nikola Vucevic",pos:"C",team:"BOS",ppg:12.1,rpg:9.2,apg:3.1,spg:0.7,bpg:0.9,fgpct:0.488,fgapg:10.2,ftpct:0.762,ftapg:3.8,topg:1.8,ffpg:0.01,tfpg:0.05},
  {id:16,name:"Jalen Duren",pos:"C",team:"DET",ppg:19.5,rpg:10.5,apg:2.0,spg:0.8,bpg:0.8,fgpct:0.578,fgapg:12.4,ftpct:0.644,ftapg:5.6,topg:1.8,ffpg:0.01,tfpg:0.06},
  {id:17,name:"Cade Cunningham",pos:"PG/SG",team:"DET",ppg:26.5,rpg:4.4,apg:9.4,spg:1.0,bpg:0.5,fgpct:0.452,fgapg:20.2,ftpct:0.836,ftapg:6.4,topg:3.6,ffpg:0.01,tfpg:0.12},
  {id:18,name:"Isaac Jones",pos:"SF",team:"DET",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:19,name:"Ronald Holland II",pos:"SF/SG",team:"DET",ppg:9.4,rpg:4.6,apg:2.4,spg:1.2,bpg:0.6,fgpct:0.462,fgapg:8.2,ftpct:0.712,ftapg:3.0,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:20,name:"Paul Reed",pos:"SF",team:"DET",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:21,name:"Caris LeVert",pos:"SG/PG",team:"DET",ppg:12.4,rpg:3.4,apg:4.2,spg:0.8,bpg:0.3,fgpct:0.448,fgapg:11.2,ftpct:0.812,ftapg:3.4,topg:1.8,ffpg:0.01,tfpg:0.06},
  {id:22,name:"Ausar Thompson",pos:"SF/SG",team:"DET",ppg:14.8,rpg:6.8,apg:3.4,spg:1.6,bpg:0.8,fgpct:0.498,fgapg:11.2,ftpct:0.682,ftapg:3.8,topg:1.6,ffpg:0.01,tfpg:0.06},
  {id:23,name:"Tobias Harris",pos:"SF/PF",team:"DET",ppg:13.8,rpg:6.4,apg:2.8,spg:0.7,bpg:0.4,fgpct:0.498,fgapg:11.4,ftpct:0.832,ftapg:3.2,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:24,name:"Wendell Moore Jr.",pos:"SF",team:"DET",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:25,name:"Chaz Lanier",pos:"SF",team:"DET",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:26,name:"Daniss Jenkins",pos:"PG",team:"DET",ppg:10.2,rpg:3.2,apg:4.8,spg:1.0,bpg:0.2,fgpct:0.448,fgapg:8.8,ftpct:0.782,ftapg:2.4,topg:1.6,ffpg:0.01,tfpg:0.06},
  {id:27,name:"Marcus Sasser",pos:"SF",team:"DET",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:28,name:"Kevin Huerter",pos:"SG/SF",team:"DET",ppg:9.8,rpg:3.2,apg:2.8,spg:0.7,bpg:0.2,fgpct:0.458,fgapg:9.2,ftpct:0.832,ftapg:1.8,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:29,name:"Isaiah Stewart",pos:"C/PF",team:"DET",ppg:10.8,rpg:7.4,apg:2.4,spg:0.7,bpg:0.8,fgpct:0.488,fgapg:8.8,ftpct:0.742,ftapg:3.4,topg:1.2,ffpg:0.01,tfpg:0.06},
  {id:30,name:"Javonte Green",pos:"SF",team:"DET",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:31,name:"Tolu Smith",pos:"SF",team:"DET",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:32,name:"Duncan Robinson",pos:"SG/SF",team:"DET",ppg:14.2,rpg:3.2,apg:2.4,spg:0.6,bpg:0.2,fgpct:0.456,fgapg:12.8,ftpct:0.892,ftapg:2.2,topg:1.2,ffpg:0.01,tfpg:0.06},
  {id:33,name:"Jordan Clarkson",pos:"PG/SG",team:"NYK",ppg:14.8,rpg:3.4,apg:3.8,spg:0.7,bpg:0.2,fgpct:0.442,fgapg:13.2,ftpct:0.822,ftapg:2.8,topg:1.6,ffpg:0.01,tfpg:0.08},
  {id:34,name:"Miles McBride",pos:"PG/SG",team:"NYK",ppg:12.4,rpg:2.8,apg:4.2,spg:1.2,bpg:0.2,fgpct:0.462,fgapg:10.4,ftpct:0.832,ftapg:2.4,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:35,name:"Josh Hart",pos:"SF/SG",team:"NYK",ppg:11.4,rpg:8.4,apg:4.2,spg:1.0,bpg:0.4,fgpct:0.478,fgapg:9.8,ftpct:0.682,ftapg:3.2,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:36,name:"Pacome Dadiet",pos:"SF",team:"NYK",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:37,name:"Jose Alvarado",pos:"SF",team:"NYK",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:38,name:"OG Anunoby",pos:"SF/PF",team:"NYK",ppg:14.8,rpg:5.2,apg:2.4,spg:1.4,bpg:0.8,fgpct:0.488,fgapg:11.6,ftpct:0.762,ftapg:3.0,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:39,name:"Kevin McCullar Jr.",pos:"SF",team:"NYK",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:40,name:"Jalen Brunson",pos:"PG",team:"NYK",ppg:28.4,rpg:3.2,apg:7.2,spg:0.8,bpg:0.2,fgpct:0.473,fgapg:21.0,ftpct:0.852,ftapg:5.8,topg:2.8,ffpg:0.01,tfpg:0.12},
  {id:41,name:"Tyler Kolek",pos:"SF",team:"NYK",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:42,name:"Jeremy Sochan",pos:"PF/SF",team:"NYK",ppg:11.2,rpg:5.4,apg:3.2,spg:0.8,bpg:0.5,fgpct:0.472,fgapg:9.8,ftpct:0.692,ftapg:4.2,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:43,name:"Mitchell Robinson",pos:"C",team:"NYK",ppg:9.2,rpg:9.8,apg:0.8,spg:0.5,bpg:1.4,fgpct:0.658,fgapg:6.8,ftpct:0.542,ftapg:4.2,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:44,name:"Mikal Bridges",pos:"SF/SG",team:"NYK",ppg:16.2,rpg:4.4,apg:3.2,spg:1.1,bpg:0.6,fgpct:0.464,fgapg:13.8,ftpct:0.836,ftapg:2.4,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:45,name:"Karl-Anthony Towns",pos:"C/PF",team:"NYK",ppg:24.5,rpg:13.7,apg:3.1,spg:0.7,bpg:1.1,fgpct:0.512,fgapg:17.2,ftpct:0.842,ftapg:5.4,topg:2.8,ffpg:0.01,tfpg:0.08},
  {id:46,name:"Dillon Jones",pos:"SF",team:"NYK",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:47,name:"Landry Shamet",pos:"SF",team:"NYK",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:48,name:"Trey Jemison III",pos:"SF",team:"NYK",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:49,name:"Mohamed Diawara",pos:"SF",team:"NYK",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:50,name:"Ariel Hukporti",pos:"SF",team:"NYK",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:51,name:"A.J. Lawson",pos:"SF",team:"TOR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:52,name:"Gradey Dick",pos:"SG/SF",team:"TOR",ppg:13.4,rpg:3.4,apg:2.4,spg:0.7,bpg:0.3,fgpct:0.458,fgapg:11.8,ftpct:0.852,ftapg:2.4,topg:1.0,ffpg:0.01,tfpg:0.05},
  {id:53,name:"Jonathan Mogbo",pos:"SF",team:"TOR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:54,name:"Brandon Ingram",pos:"SF/PF",team:"TOR",ppg:20.4,rpg:6.2,apg:4.8,spg:0.8,bpg:0.6,fgpct:0.472,fgapg:16.8,ftpct:0.832,ftapg:4.8,topg:2.4,ffpg:0.01,tfpg:0.08},
  {id:55,name:"Scottie Barnes",pos:"PF/SF",team:"TOR",ppg:21.8,rpg:8.4,apg:6.2,spg:1.4,bpg:0.8,fgpct:0.484,fgapg:16.2,ftpct:0.724,ftapg:5.4,topg:2.8,ffpg:0.02,tfpg:0.12},
  {id:56,name:"Immanuel Quickley",pos:"PG",team:"TOR",ppg:17.8,rpg:4.2,apg:6.8,spg:1.0,bpg:0.3,fgpct:0.444,fgapg:14.2,ftpct:0.832,ftapg:3.8,topg:2.2,ffpg:0.01,tfpg:0.08},
  {id:57,name:"RJ Barrett",pos:"SG/SF",team:"TOR",ppg:20.2,rpg:5.6,apg:4.2,spg:0.8,bpg:0.4,fgpct:0.472,fgapg:16.8,ftpct:0.776,ftapg:4.8,topg:2.2,ffpg:0.01,tfpg:0.08},
  {id:58,name:"Collin Murray-Boyles",pos:"SF",team:"TOR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:59,name:"Ja'Kobe Walter",pos:"SG",team:"TOR",ppg:10.8,rpg:2.8,apg:2.4,spg:0.8,bpg:0.2,fgpct:0.448,fgapg:9.8,ftpct:0.822,ftapg:2.4,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:60,name:"Garrett Temple",pos:"SF",team:"TOR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:61,name:"Jakob Poeltl",pos:"C",team:"TOR",ppg:12.8,rpg:10.2,apg:3.4,spg:0.7,bpg:1.4,fgpct:0.612,fgapg:9.4,ftpct:0.662,ftapg:4.2,topg:1.8,ffpg:0.01,tfpg:0.06},
  {id:62,name:"Jamal Shead",pos:"SF",team:"TOR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:63,name:"Chucky Hepburn",pos:"SF",team:"TOR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:64,name:"Trayce Jackson-Davis",pos:"C/PF",team:"TOR",ppg:9.4,rpg:7.8,apg:1.8,spg:0.6,bpg:1.4,fgpct:0.588,fgapg:7.2,ftpct:0.672,ftapg:3.4,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:65,name:"Sandro Mamukelashvili",pos:"SF",team:"TOR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:66,name:"Alijah Martin",pos:"SF",team:"TOR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:67,name:"Jamison Battle",pos:"SF",team:"TOR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:68,name:"James Harden",pos:"PG/SG",team:"CLE",ppg:19.8,rpg:5.8,apg:8.4,spg:1.0,bpg:0.5,fgpct:0.442,fgapg:17.4,ftpct:0.872,ftapg:7.8,topg:3.4,ffpg:0.01,tfpg:0.14},
  {id:69,name:"Max Strus",pos:"SG/SF",team:"CLE",ppg:12.4,rpg:4.2,apg:2.8,spg:0.7,bpg:0.2,fgpct:0.432,fgapg:11.8,ftpct:0.842,ftapg:2.2,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:70,name:"Thomas Bryant",pos:"SF",team:"CLE",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:71,name:"Evan Mobley",pos:"PF/C",team:"CLE",ppg:18.4,rpg:9.8,apg:3.3,spg:1.1,bpg:2.5,fgpct:0.542,fgapg:13.2,ftpct:0.762,ftapg:4.4,topg:1.8,ffpg:0.01,tfpg:0.08},
  {id:72,name:"Sam Merrill",pos:"SF",team:"CLE",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:73,name:"Dennis Schroder",pos:"PG",team:"CLE",ppg:11.8,rpg:3.4,apg:5.8,spg:1.0,bpg:0.2,fgpct:0.438,fgapg:10.8,ftpct:0.782,ftapg:3.2,topg:2.2,ffpg:0.01,tfpg:0.08},
  {id:74,name:"Craig Porter Jr.",pos:"SF",team:"CLE",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:75,name:"Riley Minix",pos:"SF",team:"CLE",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:76,name:"Keon Ellis",pos:"SG/SF",team:"CLE",ppg:10.2,rpg:3.8,apg:2.2,spg:1.2,bpg:0.4,fgpct:0.468,fgapg:9.2,ftpct:0.762,ftapg:2.4,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:77,name:"Jaylon Tyson",pos:"SG/SF",team:"CLE",ppg:11.4,rpg:4.2,apg:2.4,spg:0.8,bpg:0.3,fgpct:0.458,fgapg:10.2,ftpct:0.782,ftapg:2.8,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:78,name:"Tristan Enaruna",pos:"SF",team:"CLE",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:79,name:"Larry Nance Jr.",pos:"PF/SF",team:"CLE",ppg:9.4,rpg:6.8,apg:3.2,spg:0.8,bpg:0.6,fgpct:0.518,fgapg:8.2,ftpct:0.742,ftapg:2.8,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:80,name:"Tyrese Proctor",pos:"SF",team:"CLE",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:81,name:"Jarrett Allen",pos:"C",team:"CLE",ppg:12.8,rpg:10.4,apg:2.0,spg:0.6,bpg:1.2,fgpct:0.638,fgapg:9.4,ftpct:0.672,ftapg:4.2,topg:1.2,ffpg:0.01,tfpg:0.04},
  {id:82,name:"Dean Wade",pos:"SF",team:"CLE",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:83,name:"Olivier Sarr",pos:"SF",team:"CLE",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:84,name:"Nae'Qwan Tomlin",pos:"SF",team:"CLE",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:85,name:"Donovan Mitchell",pos:"SG/PG",team:"CLE",ppg:26.8,rpg:4.5,apg:6.2,spg:1.7,bpg:0.4,fgpct:0.468,fgapg:20.0,ftpct:0.836,ftapg:6.8,topg:3.0,ffpg:0.01,tfpg:0.12},
  {id:86,name:"Keshon Gilbert",pos:"SF",team:"ATL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:87,name:"RayJ Dennis",pos:"SF",team:"ATL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:88,name:"Jonathan Kuminga",pos:"SF/PF",team:"ATL",ppg:18.6,rpg:5.4,apg:3.2,spg:0.8,bpg:0.6,fgpct:0.498,fgapg:14.2,ftpct:0.762,ftapg:4.4,topg:2.0,ffpg:0.01,tfpg:0.08},
  {id:89,name:"Jalen Johnson",pos:"PF/SF",team:"ATL",ppg:23.4,rpg:9.2,apg:7.8,spg:1.4,bpg:0.8,fgpct:0.514,fgapg:16.8,ftpct:0.762,ftapg:6.2,topg:2.8,ffpg:0.02,tfpg:0.12},
  {id:90,name:"Keaton Wallace",pos:"SF",team:"ATL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:91,name:"CJ McCollum",pos:"SG/PG",team:"ATL",ppg:16.8,rpg:3.4,apg:4.2,spg:0.7,bpg:0.2,fgpct:0.468,fgapg:14.2,ftpct:0.852,ftapg:2.8,topg:1.6,ffpg:0.01,tfpg:0.06},
  {id:92,name:"Gabe Vincent",pos:"PG/SG",team:"ATL",ppg:8.4,rpg:2.4,apg:3.2,spg:0.8,bpg:0.2,fgpct:0.422,fgapg:8.4,ftpct:0.812,ftapg:1.8,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:93,name:"Dyson Daniels",pos:"SG/SF",team:"ATL",ppg:16.4,rpg:5.2,apg:4.6,spg:2.6,bpg:0.5,fgpct:0.468,fgapg:12.4,ftpct:0.772,ftapg:3.2,topg:1.8,ffpg:0.01,tfpg:0.06},
  {id:94,name:"Nickeil Alexander-Walker",pos:"SG/PG",team:"ATL",ppg:18.2,rpg:3.8,apg:4.4,spg:1.2,bpg:0.4,fgpct:0.476,fgapg:14.2,ftpct:0.848,ftapg:3.4,topg:1.6,ffpg:0.01,tfpg:0.08},
  {id:95,name:"Buddy Hield",pos:"SG/SF",team:"ATL",ppg:12.4,rpg:3.8,apg:2.4,spg:0.7,bpg:0.2,fgpct:0.444,fgapg:11.8,ftpct:0.882,ftapg:2.0,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:96,name:"Zaccharie Risacher",pos:"SF/SG",team:"ATL",ppg:12.8,rpg:4.4,apg:2.2,spg:0.8,bpg:0.6,fgpct:0.468,fgapg:11.2,ftpct:0.782,ftapg:2.8,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:97,name:"Christian Koloko",pos:"SF",team:"ATL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:98,name:"Tony Bradley",pos:"SF",team:"ATL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:99,name:"Asa Newell",pos:"SF",team:"ATL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:100,name:"Onyeka Okongwu",pos:"C/PF",team:"ATL",ppg:14.8,rpg:8.4,apg:2.4,spg:1.0,bpg:1.6,fgpct:0.582,fgapg:9.8,ftpct:0.724,ftapg:4.2,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:101,name:"Mouhamed Gueye",pos:"SF",team:"ATL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:102,name:"Corey Kispert",pos:"SF/SG",team:"ATL",ppg:9.2,rpg:3.2,apg:1.8,spg:0.5,bpg:0.2,fgpct:0.462,fgapg:9.2,ftpct:0.852,ftapg:1.8,topg:0.8,ffpg:0.01,tfpg:0.04},
  {id:103,name:"Jock Landale",pos:"SF",team:"ATL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:104,name:"Miles Bridges",pos:"SF/PF",team:"CHA",ppg:20.4,rpg:7.2,apg:3.8,spg:1.0,bpg:0.5,fgpct:0.478,fgapg:16.8,ftpct:0.762,ftapg:5.4,topg:2.2,ffpg:0.01,tfpg:0.08},
  {id:105,name:"LaMelo Ball",pos:"PG",team:"CHA",ppg:26.8,rpg:5.6,apg:8.2,spg:1.6,bpg:0.4,fgpct:0.448,fgapg:21.4,ftpct:0.824,ftapg:4.8,topg:3.4,ffpg:0.01,tfpg:0.18},
  {id:106,name:"Grant Williams",pos:"PF/SF",team:"CHA",ppg:10.2,rpg:5.4,apg:2.4,spg:0.7,bpg:0.5,fgpct:0.462,fgapg:9.2,ftpct:0.792,ftapg:2.4,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:107,name:"Coby White",pos:"PG/SG",team:"CHA",ppg:18.8,rpg:3.8,apg:5.4,spg:1.0,bpg:0.2,fgpct:0.458,fgapg:16.2,ftpct:0.852,ftapg:3.4,topg:2.2,ffpg:0.01,tfpg:0.08},
  {id:108,name:"Sion James",pos:"SF",team:"CHA",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:109,name:"Kon Knueppel",pos:"SG/SF",team:"CHA",ppg:12.4,rpg:3.2,apg:2.4,spg:0.6,bpg:0.3,fgpct:0.468,fgapg:10.8,ftpct:0.872,ftapg:2.2,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:110,name:"Josh Green",pos:"SF",team:"CHA",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:111,name:"Ryan Kalkbrenner",pos:"C",team:"CHA",ppg:10.8,rpg:7.8,apg:1.4,spg:0.4,bpg:2.2,fgpct:0.598,fgapg:8.2,ftpct:0.672,ftapg:3.8,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:112,name:"Antonio Reeves",pos:"SF",team:"CHA",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:113,name:"Moussa Diabate",pos:"SF",team:"CHA",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:114,name:"PJ Hall",pos:"SF",team:"CHA",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:115,name:"Tosan Evbuomwan",pos:"SF",team:"CHA",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:116,name:"Pat Connaughton",pos:"SF",team:"CHA",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:117,name:"Tre Mann",pos:"SF",team:"CHA",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:118,name:"Brandon Miller",pos:"SF/SG",team:"CHA",ppg:18.4,rpg:4.6,apg:2.8,spg:0.9,bpg:0.5,fgpct:0.452,fgapg:15.4,ftpct:0.832,ftapg:3.6,topg:1.8,ffpg:0.01,tfpg:0.08},
  {id:119,name:"Xavier Tillman",pos:"SF",team:"CHA",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:120,name:"Tidjane Salaun",pos:"SF/PF",team:"CHA",ppg:9.8,rpg:4.6,apg:1.8,spg:0.7,bpg:0.5,fgpct:0.448,fgapg:9.2,ftpct:0.742,ftapg:2.8,topg:1.2,ffpg:0.01,tfpg:0.04},
  {id:121,name:"Liam McNeeley",pos:"SF/SG",team:"CHA",ppg:8.4,rpg:3.4,apg:1.8,spg:0.6,bpg:0.2,fgpct:0.438,fgapg:8.2,ftpct:0.812,ftapg:2.2,topg:0.8,ffpg:0.01,tfpg:0.04},
  {id:122,name:"Tyrese Maxey",pos:"PG",team:"PHI",ppg:25.8,rpg:3.8,apg:6.4,spg:1.0,bpg:0.4,fgpct:0.462,fgapg:19.4,ftpct:0.858,ftapg:5.0,topg:2.6,ffpg:0.01,tfpg:0.1},
  {id:123,name:"Andre Drummond",pos:"C",team:"PHI",ppg:11.4,rpg:12.4,apg:1.4,spg:0.6,bpg:1.0,fgpct:0.578,fgapg:8.8,ftpct:0.542,ftapg:5.2,topg:1.4,ffpg:0.01,tfpg:0.05},
  {id:124,name:"Quentin Grimes",pos:"SG/SF",team:"PHI",ppg:12.4,rpg:3.8,apg:2.8,spg:0.9,bpg:0.3,fgpct:0.452,fgapg:11.2,ftpct:0.812,ftapg:2.4,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:125,name:"Kyle Lowry",pos:"PG",team:"PHI",ppg:7.8,rpg:3.4,apg:5.8,spg:1.2,bpg:0.2,fgpct:0.412,fgapg:8.2,ftpct:0.782,ftapg:2.2,topg:1.8,ffpg:0.01,tfpg:0.08},
  {id:126,name:"Paul George",pos:"SF/SG",team:"PHI",ppg:16.8,rpg:5.8,apg:3.6,spg:1.2,bpg:0.4,fgpct:0.448,fgapg:14.2,ftpct:0.852,ftapg:3.8,topg:1.8,ffpg:0.01,tfpg:0.08},
  {id:127,name:"Kelly Oubre Jr.",pos:"SF/SG",team:"PHI",ppg:13.8,rpg:5.4,apg:2.2,spg:1.0,bpg:0.5,fgpct:0.452,fgapg:12.4,ftpct:0.752,ftapg:4.2,topg:1.6,ffpg:0.01,tfpg:0.07},
  {id:128,name:"Justin Edwards",pos:"SF",team:"PHI",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:129,name:"Trendon Watford",pos:"SF",team:"PHI",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:130,name:"Dalen Terry",pos:"SF",team:"PHI",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:131,name:"MarJon Beauchamp",pos:"SF",team:"PHI",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:132,name:"Joel Embiid",pos:"C",team:"PHI",ppg:27.2,rpg:10.8,apg:4.2,spg:1.1,bpg:1.8,fgpct:0.526,fgapg:18.2,ftpct:0.844,ftapg:9.2,topg:3.2,ffpg:0.02,tfpg:0.14},
  {id:133,name:"Johni Broome",pos:"C/PF",team:"PHI",ppg:10.8,rpg:8.2,apg:2.0,spg:0.7,bpg:1.2,fgpct:0.548,fgapg:8.8,ftpct:0.712,ftapg:3.8,topg:1.4,ffpg:0.01,tfpg:0.05},
  {id:134,name:"Tyrese Martin",pos:"SF",team:"PHI",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:135,name:"Dominick Barlow",pos:"SF",team:"PHI",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:136,name:"Adem Bona",pos:"SF",team:"PHI",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:137,name:"Jabari Walker",pos:"SF",team:"PHI",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:138,name:"VJ Edgecombe",pos:"SG/SF",team:"PHI",ppg:11.2,rpg:3.4,apg:2.4,spg:1.0,bpg:0.3,fgpct:0.448,fgapg:10.2,ftpct:0.782,ftapg:3.0,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:139,name:"Alex Morales",pos:"SF",team:"ORL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:140,name:"Anthony Black",pos:"PG/SG",team:"ORL",ppg:10.8,rpg:4.2,apg:5.2,spg:1.2,bpg:0.4,fgpct:0.458,fgapg:9.4,ftpct:0.742,ftapg:3.4,topg:1.8,ffpg:0.01,tfpg:0.06},
  {id:141,name:"Jonathan Isaac",pos:"PF/C",team:"ORL",ppg:11.2,rpg:5.8,apg:1.8,spg:1.2,bpg:2.0,fgpct:0.502,fgapg:9.4,ftpct:0.732,ftapg:3.2,topg:1.2,ffpg:0.01,tfpg:0.06},
  {id:142,name:"Jevon Carter",pos:"SF",team:"ORL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:143,name:"Desmond Bane",pos:"SG/SF",team:"ORL",ppg:18.4,rpg:4.2,apg:3.8,spg:0.9,bpg:0.3,fgpct:0.468,fgapg:15.2,ftpct:0.872,ftapg:3.4,topg:1.6,ffpg:0.01,tfpg:0.07},
  {id:144,name:"Jalen Suggs",pos:"PG/SG",team:"ORL",ppg:16.2,rpg:4.4,apg:6.4,spg:1.6,bpg:0.5,fgpct:0.452,fgapg:13.4,ftpct:0.782,ftapg:4.2,topg:2.2,ffpg:0.01,tfpg:0.08},
  {id:145,name:"Paolo Banchero",pos:"PF/SF",team:"ORL",ppg:25.3,rpg:7.0,apg:5.2,spg:0.9,bpg:0.9,fgpct:0.462,fgapg:18.8,ftpct:0.742,ftapg:7.2,topg:2.8,ffpg:0.02,tfpg:0.1},
  {id:146,name:"Jamal Cain",pos:"SF",team:"ORL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:147,name:"Jase Richardson",pos:"SF",team:"ORL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:148,name:"Jett Howard",pos:"SF",team:"ORL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:149,name:"Colin Castleton",pos:"SF",team:"ORL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:150,name:"Moritz Wagner",pos:"C/PF",team:"ORL",ppg:12.4,rpg:6.8,apg:2.4,spg:0.5,bpg:0.8,fgpct:0.518,fgapg:10.2,ftpct:0.782,ftapg:3.8,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:151,name:"Franz Wagner",pos:"SF/SG",team:"ORL",ppg:21.6,rpg:5.7,apg:4.8,spg:1.1,bpg:0.4,fgpct:0.476,fgapg:16.2,ftpct:0.812,ftapg:4.6,topg:2.2,ffpg:0.01,tfpg:0.08},
  {id:152,name:"Tristan da Silva",pos:"SF",team:"ORL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:153,name:"Wendell Carter Jr.",pos:"C/PF",team:"ORL",ppg:13.4,rpg:9.8,apg:2.8,spg:0.6,bpg:1.0,fgpct:0.548,fgapg:10.2,ftpct:0.742,ftapg:4.2,topg:1.6,ffpg:0.01,tfpg:0.06},
  {id:154,name:"Goga Bitadze",pos:"C",team:"ORL",ppg:9.8,rpg:7.2,apg:2.2,spg:0.5,bpg:1.6,fgpct:0.558,fgapg:8.2,ftpct:0.712,ftapg:3.4,topg:1.2,ffpg:0.01,tfpg:0.04},
  {id:155,name:"Noah Penda",pos:"SF",team:"ORL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:156,name:"Christian Braun",pos:"SG/SF",team:"DEN",ppg:13.8,rpg:4.6,apg:2.8,spg:0.9,bpg:0.4,fgpct:0.502,fgapg:10.4,ftpct:0.772,ftapg:2.8,topg:1.2,ffpg:0.01,tfpg:0.06},
  {id:157,name:"Curtis Jones",pos:"SF",team:"DEN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:158,name:"Julian Strawther",pos:"SF",team:"DEN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:159,name:"Tyus Jones",pos:"PG",team:"DEN",ppg:9.8,rpg:2.8,apg:6.4,spg:1.0,bpg:0.2,fgpct:0.488,fgapg:8.2,ftpct:0.832,ftapg:2.0,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:160,name:"Peyton Watson",pos:"SF/PF",team:"DEN",ppg:10.2,rpg:4.8,apg:1.8,spg:1.0,bpg:0.8,fgpct:0.478,fgapg:8.4,ftpct:0.742,ftapg:2.4,topg:1.0,ffpg:0.01,tfpg:0.05},
  {id:161,name:"Tim Hardaway Jr.",pos:"SF",team:"DEN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:162,name:"Bruce Brown",pos:"SF",team:"DEN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:163,name:"DaRon Holmes II",pos:"PF/C",team:"DEN",ppg:12.4,rpg:5.8,apg:1.8,spg:0.8,bpg:1.2,fgpct:0.548,fgapg:9.2,ftpct:0.724,ftapg:4.2,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:164,name:"Nikola Jokic",pos:"C",team:"DEN",ppg:29.8,rpg:13.4,apg:10.2,spg:1.4,bpg:0.9,fgpct:0.578,fgapg:18.4,ftpct:0.815,ftapg:6.6,topg:3.8,ffpg:0.01,tfpg:0.15},
  {id:165,name:"Jonas Valanciunas",pos:"C",team:"DEN",ppg:12.4,rpg:9.2,apg:2.2,spg:0.5,bpg:0.8,fgpct:0.558,fgapg:9.4,ftpct:0.742,ftapg:3.8,topg:1.6,ffpg:0.01,tfpg:0.05},
  {id:166,name:"Spencer Jones",pos:"SF",team:"DEN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:167,name:"Zeke Nnaji",pos:"SF",team:"DEN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:168,name:"Cameron Johnson",pos:"SF/SG",team:"DEN",ppg:14.8,rpg:4.2,apg:2.4,spg:0.7,bpg:0.4,fgpct:0.462,fgapg:12.4,ftpct:0.852,ftapg:2.4,topg:1.2,ffpg:0.01,tfpg:0.06},
  {id:169,name:"Jalen Pickett",pos:"SF",team:"DEN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:170,name:"KJ Simpson",pos:"SF",team:"DEN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:171,name:"Jamal Murray",pos:"PG/SG",team:"DEN",ppg:22.1,rpg:4.1,apg:6.8,spg:0.8,bpg:0.3,fgpct:0.487,fgapg:16.6,ftpct:0.862,ftapg:3.8,topg:2.6,ffpg:0.01,tfpg:0.08},
  {id:172,name:"Aaron Gordon",pos:"PF/SF",team:"DEN",ppg:14.2,rpg:6.4,apg:3.5,spg:0.9,bpg:0.6,fgpct:0.536,fgapg:10.2,ftpct:0.722,ftapg:3.0,topg:1.4,ffpg:0.01,tfpg:0.08},
  {id:173,name:"David Roddy",pos:"SF",team:"DEN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:174,name:"Donte DiVincenzo",pos:"SG/PG",team:"MIN",ppg:12.4,rpg:3.6,apg:3.8,spg:1.2,bpg:0.3,fgpct:0.426,fgapg:11.2,ftpct:0.858,ftapg:2.4,topg:1.4,ffpg:0.01,tfpg:0.08},
  {id:175,name:"Terrence Shannon Jr.",pos:"SG/SF",team:"MIN",ppg:11.4,rpg:3.8,apg:2.4,spg:0.8,bpg:0.3,fgpct:0.448,fgapg:10.2,ftpct:0.742,ftapg:3.4,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:176,name:"Jaden McDaniels",pos:"SF/PF",team:"MIN",ppg:14.8,rpg:5.4,apg:2.4,spg:1.1,bpg:0.8,fgpct:0.468,fgapg:12.2,ftpct:0.762,ftapg:3.2,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:177,name:"Julian Phillips",pos:"SF",team:"MIN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:178,name:"Anthony Edwards",pos:"SG/SF",team:"MIN",ppg:27.5,rpg:5.7,apg:5.4,spg:1.4,bpg:0.6,fgpct:0.462,fgapg:21.2,ftpct:0.832,ftapg:7.4,topg:3.0,ffpg:0.02,tfpg:0.14},
  {id:179,name:"Joe Ingles",pos:"SF",team:"MIN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:180,name:"Bones Hyland",pos:"SF",team:"MIN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:181,name:"Mike Conley",pos:"PG",team:"MIN",ppg:8.8,rpg:2.4,apg:5.4,spg:1.0,bpg:0.2,fgpct:0.458,fgapg:7.8,ftpct:0.862,ftapg:1.8,topg:1.2,ffpg:0.01,tfpg:0.06},
  {id:182,name:"Naz Reid",pos:"C/PF",team:"MIN",ppg:12.8,rpg:6.4,apg:2.2,spg:0.6,bpg:1.0,fgpct:0.482,fgapg:10.4,ftpct:0.782,ftapg:2.8,topg:1.2,ffpg:0.01,tfpg:0.06},
  {id:183,name:"Kyle Anderson",pos:"SF",team:"MIN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:184,name:"Ayo Dosunmu",pos:"SF",team:"MIN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:185,name:"Zyon Pullin",pos:"SF",team:"MIN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:186,name:"Joan Beringer",pos:"SF",team:"MIN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:187,name:"Jaylen Clark",pos:"SF",team:"MIN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:188,name:"Enrique Freeman",pos:"SF",team:"MIN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:189,name:"Rudy Gobert",pos:"C",team:"MIN",ppg:14.2,rpg:12.8,apg:1.4,spg:0.8,bpg:2.1,fgpct:0.62,fgapg:8.6,ftpct:0.658,ftapg:5.2,topg:1.2,ffpg:0.01,tfpg:0.06},
  {id:190,name:"Julius Randle",pos:"PF",team:"MIN",ppg:21.0,rpg:7.1,apg:4.8,spg:0.9,bpg:0.5,fgpct:0.478,fgapg:16.2,ftpct:0.792,ftapg:4.8,topg:2.8,ffpg:0.01,tfpg:0.1},
  {id:191,name:"Rocco Zikarsky",pos:"SF",team:"MIN",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:192,name:"Shai Gilgeous-Alexander",pos:"PG",team:"OKC",ppg:32.7,rpg:5.1,apg:6.4,spg:2.0,bpg:1.1,fgpct:0.535,fgapg:19.2,ftpct:0.888,ftapg:8.9,topg:2.5,ffpg:0.02,tfpg:0.18},
  {id:193,name:"Jared McCain",pos:"PG/SG",team:"OKC",ppg:11.2,rpg:2.8,apg:3.2,spg:0.8,bpg:0.2,fgpct:0.442,fgapg:9.4,ftpct:0.842,ftapg:2.4,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:194,name:"Luguentz Dort",pos:"SG/SF",team:"OKC",ppg:13.4,rpg:3.8,apg:2.2,spg:1.1,bpg:0.4,fgpct:0.428,fgapg:11.6,ftpct:0.782,ftapg:2.8,topg:1.2,ffpg:0.01,tfpg:0.06},
  {id:195,name:"Jaylin Williams",pos:"SF",team:"OKC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:196,name:"Chet Holmgren",pos:"C/PF",team:"OKC",ppg:17.4,rpg:8.2,apg:2.1,spg:0.8,bpg:2.3,fgpct:0.512,fgapg:11.8,ftpct:0.82,ftapg:3.1,topg:1.4,ffpg:0.01,tfpg:0.1},
  {id:197,name:"Jalen Williams",pos:"SG/SF",team:"OKC",ppg:24.1,rpg:4.8,apg:5.3,spg:1.4,bpg:0.5,fgpct:0.506,fgapg:16.4,ftpct:0.851,ftapg:5.2,topg:2.8,ffpg:0.01,tfpg:0.08},
  {id:198,name:"Alex Caruso",pos:"PG/SG",team:"OKC",ppg:10.2,rpg:3.6,apg:3.8,spg:1.8,bpg:0.4,fgpct:0.442,fgapg:8.4,ftpct:0.832,ftapg:2.4,topg:1.4,ffpg:0.01,tfpg:0.1},
  {id:199,name:"Isaiah Joe",pos:"SF",team:"OKC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:200,name:"Thomas Sorber",pos:"SF",team:"OKC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:201,name:"Payton Sandfort",pos:"SF",team:"OKC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:202,name:"Branden Carlson",pos:"SF",team:"OKC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:203,name:"Aaron Wiggins",pos:"SF",team:"OKC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:204,name:"Cason Wallace",pos:"PG/SG",team:"OKC",ppg:8.4,rpg:3.2,apg:3.4,spg:1.2,bpg:0.3,fgpct:0.434,fgapg:7.2,ftpct:0.762,ftapg:2.2,topg:1.2,ffpg:0.01,tfpg:0.06},
  {id:205,name:"Brooks Barnhizer",pos:"SF",team:"OKC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:206,name:"Ajay Mitchell",pos:"SF",team:"OKC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:207,name:"Kenrich Williams",pos:"SF",team:"OKC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:208,name:"Nikola Topic",pos:"SF",team:"OKC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:209,name:"Isaiah Hartenstein",pos:"C",team:"OKC",ppg:11.2,rpg:9.8,apg:2.8,spg:1.2,bpg:1.1,fgpct:0.572,fgapg:8.4,ftpct:0.712,ftapg:2.6,topg:1.4,ffpg:0.01,tfpg:0.05},
  {id:210,name:"Jayson Kent",pos:"SF",team:"POR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:211,name:"Scoot Henderson",pos:"PG",team:"POR",ppg:17.6,rpg:4.2,apg:7.4,spg:1.2,bpg:0.4,fgpct:0.448,fgapg:14.6,ftpct:0.764,ftapg:5.2,topg:2.8,ffpg:0.02,tfpg:0.12},
  {id:212,name:"Damian Lillard",pos:"PG",team:"POR",ppg:24.8,rpg:4.4,apg:7.8,spg:1.0,bpg:0.3,fgpct:0.454,fgapg:19.8,ftpct:0.908,ftapg:5.6,topg:3.2,ffpg:0.01,tfpg:0.16},
  {id:213,name:"Blake Wesley",pos:"SF",team:"POR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:214,name:"Caleb Love",pos:"SF",team:"POR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:215,name:"Chris Youngblood",pos:"SF",team:"POR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:216,name:"Matisse Thybulle",pos:"SF/SG",team:"POR",ppg:8.4,rpg:3.4,apg:2.0,spg:1.6,bpg:0.8,fgpct:0.448,fgapg:7.4,ftpct:0.712,ftapg:2.0,topg:1.0,ffpg:0.01,tfpg:0.05},
  {id:217,name:"Jrue Holiday",pos:"PG/SG",team:"POR",ppg:11.8,rpg:4.6,apg:5.2,spg:1.4,bpg:0.5,fgpct:0.468,fgapg:10.2,ftpct:0.782,ftapg:3.2,topg:1.8,ffpg:0.01,tfpg:0.08},
  {id:218,name:"Deni Avdija",pos:"SF/PF",team:"POR",ppg:21.2,rpg:7.8,apg:5.0,spg:1.4,bpg:0.6,fgpct:0.488,fgapg:15.2,ftpct:0.782,ftapg:5.0,topg:2.4,ffpg:0.01,tfpg:0.08},
  {id:219,name:"Jerami Grant",pos:"SF/PF",team:"POR",ppg:16.8,rpg:4.8,apg:2.8,spg:0.8,bpg:0.8,fgpct:0.462,fgapg:14.2,ftpct:0.812,ftapg:4.2,topg:1.6,ffpg:0.01,tfpg:0.08},
  {id:220,name:"Yang Hansen",pos:"SF",team:"POR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:221,name:"Shaedon Sharpe",pos:"SG/SF",team:"POR",ppg:18.4,rpg:4.2,apg:3.2,spg:0.9,bpg:0.4,fgpct:0.452,fgapg:15.4,ftpct:0.768,ftapg:3.8,topg:1.8,ffpg:0.01,tfpg:0.08},
  {id:222,name:"Donovan Clingan",pos:"C",team:"POR",ppg:11.4,rpg:9.8,apg:2.2,spg:0.6,bpg:2.2,fgpct:0.578,fgapg:8.4,ftpct:0.582,ftapg:4.8,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:223,name:"Kris Murray",pos:"SF",team:"POR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:224,name:"Vit Krejci",pos:"SF",team:"POR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:225,name:"Toumani Camara",pos:"SF/PF",team:"POR",ppg:10.8,rpg:5.2,apg:2.4,spg:1.0,bpg:0.5,fgpct:0.488,fgapg:9.2,ftpct:0.742,ftapg:2.8,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:226,name:"Robert Williams III",pos:"C/PF",team:"POR",ppg:8.2,rpg:7.8,apg:1.4,spg:0.6,bpg:1.8,fgpct:0.618,fgapg:6.2,ftpct:0.632,ftapg:2.8,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:227,name:"Sidy Cissoko",pos:"SF",team:"POR",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:228,name:"Gary Payton II",pos:"SG/PG",team:"GSW",ppg:9.4,rpg:3.8,apg:2.8,spg:1.6,bpg:0.5,fgpct:0.518,fgapg:7.6,ftpct:0.712,ftapg:2.2,topg:1.0,ffpg:0.01,tfpg:0.05},
  {id:229,name:"Brandin Podziemski",pos:"SG/PG",team:"GSW",ppg:13.4,rpg:4.8,apg:4.2,spg:1.0,bpg:0.3,fgpct:0.452,fgapg:11.4,ftpct:0.792,ftapg:2.8,topg:1.6,ffpg:0.01,tfpg:0.07},
  {id:230,name:"Will Richard",pos:"SF",team:"GSW",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:231,name:"Moses Moody",pos:"SG/SF",team:"GSW",ppg:12.2,rpg:3.6,apg:2.2,spg:0.8,bpg:0.4,fgpct:0.468,fgapg:10.4,ftpct:0.812,ftapg:2.4,topg:1.0,ffpg:0.01,tfpg:0.05},
  {id:232,name:"Kristaps Porzingis",pos:"C/PF",team:"GSW",ppg:18.4,rpg:7.2,apg:2.2,spg:0.8,bpg:1.8,fgpct:0.482,fgapg:14.2,ftpct:0.842,ftapg:4.2,topg:1.8,ffpg:0.01,tfpg:0.1},
  {id:233,name:"De'Anthony Melton",pos:"SG/PG",team:"GSW",ppg:9.8,rpg:3.4,apg:3.2,spg:1.2,bpg:0.3,fgpct:0.442,fgapg:8.8,ftpct:0.782,ftapg:2.0,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:234,name:"Jimmy Butler III",pos:"SF",team:"GSW",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:235,name:"Gui Santos",pos:"SF",team:"GSW",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:236,name:"LJ Cryer",pos:"SF",team:"GSW",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:237,name:"Nate Williams",pos:"SF",team:"GSW",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:238,name:"Al Horford",pos:"C/PF",team:"GSW",ppg:8.4,rpg:6.2,apg:2.8,spg:0.6,bpg:1.0,fgpct:0.498,fgapg:7.4,ftpct:0.762,ftapg:2.0,topg:1.0,ffpg:0.01,tfpg:0.06},
  {id:239,name:"Quinten Post",pos:"SF",team:"GSW",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:240,name:"Draymond Green",pos:"PF",team:"GSW",ppg:10.4,rpg:7.4,apg:7.1,spg:1.2,bpg:0.8,fgpct:0.484,fgapg:7.8,ftpct:0.692,ftapg:2.6,topg:3.0,ffpg:0.04,tfpg:0.45},
  {id:241,name:"Charles Bassey",pos:"SF",team:"GSW",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:242,name:"Stephen Curry",pos:"PG",team:"GSW",ppg:26.2,rpg:4.3,apg:6.1,spg:1.5,bpg:0.3,fgpct:0.453,fgapg:19.6,ftpct:0.924,ftapg:4.2,topg:3.1,ffpg:0.01,tfpg:0.22},
  {id:243,name:"Seth Curry",pos:"SG",team:"GSW",ppg:8.8,rpg:2.2,apg:1.8,spg:0.5,bpg:0.2,fgpct:0.468,fgapg:8.4,ftpct:0.882,ftapg:1.4,topg:0.8,ffpg:0.01,tfpg:0.04},
  {id:244,name:"Malevy Leons",pos:"SF",team:"GSW",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:245,name:"Pat Spencer",pos:"SF",team:"GSW",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:246,name:"Norchad Omier",pos:"SF",team:"LAC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:247,name:"Sean Pedulla",pos:"SF",team:"LAC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:248,name:"Bradley Beal",pos:"SG/PG",team:"LAC",ppg:18.8,rpg:4.2,apg:5.2,spg:1.0,bpg:0.3,fgpct:0.476,fgapg:15.8,ftpct:0.852,ftapg:4.8,topg:2.4,ffpg:0.01,tfpg:0.1},
  {id:249,name:"Kawhi Leonard",pos:"SF/SG",team:"LAC",ppg:21.6,rpg:6.2,apg:3.8,spg:1.6,bpg:0.6,fgpct:0.502,fgapg:16.4,ftpct:0.876,ftapg:5.2,topg:2.2,ffpg:0.01,tfpg:0.06},
  {id:250,name:"Kobe Sanders",pos:"SF",team:"LAC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:251,name:"Derrick Jones Jr.",pos:"SF/PF",team:"LAC",ppg:9.2,rpg:4.8,apg:2.0,spg:1.0,bpg:0.8,fgpct:0.508,fgapg:7.8,ftpct:0.642,ftapg:3.0,topg:1.0,ffpg:0.01,tfpg:0.05},
  {id:252,name:"Bogdan Bogdanovic",pos:"SG/SF",team:"LAC",ppg:12.8,rpg:3.2,apg:3.4,spg:0.7,bpg:0.2,fgpct:0.448,fgapg:11.2,ftpct:0.832,ftapg:2.4,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:253,name:"Kris Dunn",pos:"SF",team:"LAC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:254,name:"Bennedict Mathurin",pos:"SG/SF",team:"LAC",ppg:17.6,rpg:4.4,apg:2.8,spg:0.8,bpg:0.4,fgpct:0.448,fgapg:14.8,ftpct:0.792,ftapg:3.8,topg:1.8,ffpg:0.01,tfpg:0.08},
  {id:255,name:"Darius Garland",pos:"PG",team:"LAC",ppg:20.4,rpg:2.8,apg:7.8,spg:1.2,bpg:0.2,fgpct:0.452,fgapg:16.4,ftpct:0.868,ftapg:4.2,topg:2.6,ffpg:0.01,tfpg:0.1},
  {id:256,name:"Brook Lopez",pos:"C",team:"LAC",ppg:12.4,rpg:4.8,apg:1.4,spg:0.5,bpg:1.8,fgpct:0.492,fgapg:10.2,ftpct:0.782,ftapg:2.4,topg:1.0,ffpg:0.01,tfpg:0.05},
  {id:257,name:"Cam Christie",pos:"SF",team:"LAC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:258,name:"TyTy Washington Jr.",pos:"SF",team:"LAC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:259,name:"Yanic Konan Niederhauser",pos:"SF",team:"LAC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:260,name:"John Collins",pos:"PF/C",team:"LAC",ppg:13.8,rpg:7.2,apg:1.8,spg:0.6,bpg:0.6,fgpct:0.518,fgapg:11.2,ftpct:0.782,ftapg:3.8,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:261,name:"Jordan Miller",pos:"SF",team:"LAC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:262,name:"Isaiah Jackson",pos:"SF",team:"LAC",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:263,name:"Nicolas Batum",pos:"SF/PF",team:"LAC",ppg:7.2,rpg:4.2,apg:2.4,spg:0.7,bpg:0.6,fgpct:0.452,fgapg:7.2,ftpct:0.762,ftapg:1.6,topg:0.8,ffpg:0.01,tfpg:0.04},
  {id:264,name:"Adou Thiero",pos:"SF",team:"LAL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:265,name:"Jarred Vanderbilt",pos:"PF/SF",team:"LAL",ppg:7.8,rpg:6.8,apg:2.0,spg:1.0,bpg:0.5,fgpct:0.518,fgapg:6.2,ftpct:0.612,ftapg:2.8,topg:1.2,ffpg:0.01,tfpg:0.05},
  {id:266,name:"Dalton Knecht",pos:"SG/SF",team:"LAL",ppg:12.4,rpg:3.2,apg:1.8,spg:0.6,bpg:0.3,fgpct:0.448,fgapg:10.8,ftpct:0.822,ftapg:2.4,topg:1.0,ffpg:0.01,tfpg:0.05},
  {id:267,name:"Deandre Ayton",pos:"C",team:"LAL",ppg:14.2,rpg:9.6,apg:1.8,spg:0.6,bpg:1.0,fgpct:0.592,fgapg:9.8,ftpct:0.742,ftapg:4.2,topg:1.8,ffpg:0.01,tfpg:0.06},
  {id:268,name:"Bronny James",pos:"PG/SG",team:"LAL",ppg:6.4,rpg:2.4,apg:2.8,spg:0.7,bpg:0.3,fgpct:0.422,fgapg:6.2,ftpct:0.722,ftapg:2.0,topg:1.2,ffpg:0.01,tfpg:0.04},
  {id:269,name:"Luke Kennard",pos:"SG",team:"LAL",ppg:11.8,rpg:2.8,apg:3.2,spg:0.6,bpg:0.2,fgpct:0.468,fgapg:9.8,ftpct:0.892,ftapg:2.2,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:270,name:"Jaxson Hayes",pos:"SF",team:"LAL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:271,name:"Jake LaRavia",pos:"SF",team:"LAL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:272,name:"Maxi Kleber",pos:"SF",team:"LAL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:273,name:"Austin Reaves",pos:"SG/PG",team:"LAL",ppg:16.8,rpg:4.2,apg:5.0,spg:0.9,bpg:0.3,fgpct:0.468,fgapg:12.4,ftpct:0.882,ftapg:3.0,topg:1.8,ffpg:0.01,tfpg:0.08},
  {id:274,name:"Drew Timme",pos:"SF",team:"LAL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:275,name:"Nick Smith Jr.",pos:"SF",team:"LAL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:276,name:"LeBron James",pos:"SF/PG",team:"LAL",ppg:24.9,rpg:7.3,apg:9.0,spg:1.1,bpg:0.5,fgpct:0.54,fgapg:17.2,ftpct:0.748,ftapg:5.4,topg:3.5,ffpg:0.02,tfpg:0.2},
  {id:277,name:"Rui Hachimura",pos:"SF/PF",team:"LAL",ppg:13.4,rpg:4.8,apg:1.8,spg:0.6,bpg:0.4,fgpct:0.512,fgapg:10.8,ftpct:0.782,ftapg:2.8,topg:1.0,ffpg:0.01,tfpg:0.05},
  {id:278,name:"Chris Manon",pos:"SF",team:"LAL",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:279,name:"Marcus Smart",pos:"PG/SG",team:"LAL",ppg:10.4,rpg:3.6,apg:4.8,spg:1.4,bpg:0.4,fgpct:0.408,fgapg:9.4,ftpct:0.762,ftapg:3.2,topg:2.0,ffpg:0.01,tfpg:0.1},
  {id:280,name:"Luka Doncic",pos:"PG/SF",team:"LAL",ppg:28.9,rpg:9.2,apg:9.8,spg:1.3,bpg:0.5,fgpct:0.482,fgapg:20.8,ftpct:0.788,ftapg:8.6,topg:4.0,ffpg:0.02,tfpg:0.18},
  {id:281,name:"Aaron Holiday",pos:"SF",team:"HOU",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:282,name:"Amen Thompson",pos:"SF/PG",team:"HOU",ppg:14.8,rpg:7.2,apg:4.6,spg:1.4,bpg:0.6,fgpct:0.526,fgapg:10.4,ftpct:0.618,ftapg:4.2,topg:2.0,ffpg:0.01,tfpg:0.06},
  {id:283,name:"Dorian Finney-Smith",pos:"SF/PF",team:"HOU",ppg:9.8,rpg:4.2,apg:2.0,spg:0.9,bpg:0.4,fgpct:0.438,fgapg:8.8,ftpct:0.762,ftapg:1.8,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:284,name:"JD Davison",pos:"SF",team:"HOU",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:285,name:"Fred VanVleet",pos:"PG",team:"HOU",ppg:8.4,rpg:3.2,apg:5.8,spg:1.2,bpg:0.2,fgpct:0.398,fgapg:8.4,ftpct:0.842,ftapg:1.8,topg:1.6,ffpg:0.01,tfpg:0.1},
  {id:286,name:"Kevin Durant",pos:"SF/PF",team:"HOU",ppg:25.8,rpg:5.3,apg:4.4,spg:0.9,bpg:1.2,fgpct:0.506,fgapg:18.8,ftpct:0.858,ftapg:5.4,topg:2.8,ffpg:0.01,tfpg:0.12},
  {id:287,name:"Jae'Sean Tate",pos:"SF",team:"HOU",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:288,name:"Jabari Smith Jr.",pos:"PF/SF",team:"HOU",ppg:16.2,rpg:7.4,apg:2.2,spg:1.0,bpg:1.0,fgpct:0.448,fgapg:13.6,ftpct:0.792,ftapg:3.4,topg:1.6,ffpg:0.01,tfpg:0.08},
  {id:289,name:"Steven Adams",pos:"SF",team:"HOU",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:290,name:"Tristen Newton",pos:"SF",team:"HOU",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:291,name:"Reed Sheppard",pos:"PG/SG",team:"HOU",ppg:12.4,rpg:2.8,apg:4.2,spg:1.2,bpg:0.2,fgpct:0.468,fgapg:9.8,ftpct:0.872,ftapg:2.2,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:292,name:"Tari Eason",pos:"PF/SF",team:"HOU",ppg:11.2,rpg:5.8,apg:1.8,spg:1.2,bpg:0.6,fgpct:0.488,fgapg:9.2,ftpct:0.742,ftapg:3.4,topg:1.4,ffpg:0.01,tfpg:0.06},
  {id:293,name:"Josh Okogie",pos:"SF",team:"HOU",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:294,name:"Isaiah Crawford",pos:"SF",team:"HOU",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:295,name:"Alperen Sengun",pos:"C",team:"HOU",ppg:22.3,rpg:9.4,apg:5.0,spg:1.0,bpg:1.6,fgpct:0.556,fgapg:13.8,ftpct:0.735,ftapg:6.2,topg:3.1,ffpg:0.02,tfpg:0.09},
  {id:296,name:"Clint Capela",pos:"C",team:"HOU",ppg:10.4,rpg:10.2,apg:1.2,spg:0.5,bpg:1.2,fgpct:0.598,fgapg:7.8,ftpct:0.622,ftapg:3.8,topg:1.2,ffpg:0.01,tfpg:0.04},
  {id:297,name:"Jeff Green",pos:"SF",team:"HOU",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:298,name:"Jordan McLaughlin",pos:"SF",team:"SAS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:299,name:"Victor Wembanyama",pos:"C/PF",team:"SAS",ppg:26.1,rpg:10.7,apg:3.9,spg:1.4,bpg:3.6,fgpct:0.493,fgapg:17.8,ftpct:0.812,ftapg:6.2,topg:3.1,ffpg:0.01,tfpg:0.2},
  {id:300,name:"Dylan Harper",pos:"PG/SG",team:"SAS",ppg:12.8,rpg:3.8,apg:4.2,spg:1.0,bpg:0.3,fgpct:0.448,fgapg:10.8,ftpct:0.772,ftapg:3.4,topg:1.8,ffpg:0.01,tfpg:0.06},
  {id:301,name:"Keldon Johnson",pos:"SF/SG",team:"SAS",ppg:14.6,rpg:5.2,apg:2.4,spg:0.9,bpg:0.4,fgpct:0.452,fgapg:12.4,ftpct:0.762,ftapg:3.8,topg:1.6,ffpg:0.01,tfpg:0.06},
  {id:302,name:"De'Aaron Fox",pos:"PG",team:"SAS",ppg:23.8,rpg:4.2,apg:6.4,spg:1.5,bpg:0.3,fgpct:0.484,fgapg:17.6,ftpct:0.792,ftapg:5.2,topg:2.8,ffpg:0.01,tfpg:0.1},
  {id:303,name:"Stephon Castle",pos:"PG/SG",team:"SAS",ppg:14.2,rpg:4.2,apg:4.8,spg:1.2,bpg:0.4,fgpct:0.462,fgapg:11.4,ftpct:0.762,ftapg:3.8,topg:2.0,ffpg:0.01,tfpg:0.08},
  {id:304,name:"Luke Kornet",pos:"SF",team:"SAS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:305,name:"Kelly Olynyk",pos:"SF",team:"SAS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:306,name:"Carter Bryant",pos:"SF",team:"SAS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:307,name:"Emanuel Miller",pos:"SF",team:"SAS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:308,name:"Bismack Biyombo",pos:"SF",team:"SAS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:309,name:"Devin Vassell",pos:"SG/SF",team:"SAS",ppg:18.4,rpg:3.9,apg:4.2,spg:1.3,bpg:0.4,fgpct:0.458,fgapg:13.8,ftpct:0.855,ftapg:3.2,topg:1.8,ffpg:0.01,tfpg:0.08},
  {id:310,name:"David Jones Garcia",pos:"SF",team:"SAS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:311,name:"Julian Champagnie",pos:"SF",team:"SAS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:312,name:"Harrison Barnes",pos:"SF/PF",team:"SAS",ppg:10.8,rpg:4.4,apg:1.8,spg:0.7,bpg:0.4,fgpct:0.468,fgapg:9.2,ftpct:0.792,ftapg:2.2,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:313,name:"Lindy Waters III",pos:"SF",team:"SAS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:314,name:"Mason Plumlee",pos:"SF",team:"SAS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:315,name:"Harrison Ingram",pos:"SF",team:"SAS",ppg:5.4,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:316,name:"Devin Booker",pos:"SG/PG",team:"PHX",ppg:26.8,rpg:4.4,apg:6.8,spg:0.8,bpg:0.4,fgpct:0.472,fgapg:20.2,ftpct:0.868,ftapg:5.8,topg:3.0,ffpg:0.01,tfpg:0.14},
  {id:317,name:"Jalen Green",pos:"SG",team:"PHX",ppg:21.4,rpg:4.0,apg:3.8,spg:1.0,bpg:0.3,fgpct:0.442,fgapg:17.8,ftpct:0.822,ftapg:4.2,topg:2.2,ffpg:0.01,tfpg:0.08},
  {id:318,name:"Dillon Brooks",pos:"SF/SG",team:"PHX",ppg:13.4,rpg:3.4,apg:2.2,spg:1.2,bpg:0.4,fgpct:0.428,fgapg:12.2,ftpct:0.762,ftapg:2.8,topg:1.4,ffpg:0.01,tfpg:0.12},
  {id:319,name:"Khaman Maluach",pos:"C",team:"PHX",ppg:8.4,rpg:6.2,apg:1.2,spg:0.5,bpg:1.4,fgpct:0.562,fgapg:6.4,ftpct:0.652,ftapg:3.2,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:320,name:"Royce O'Neale",pos:"SF/PF",team:"PHX",ppg:8.8,rpg:4.4,apg:2.2,spg:0.8,bpg:0.3,fgpct:0.448,fgapg:7.8,ftpct:0.762,ftapg:1.8,topg:0.8,ffpg:0.01,tfpg:0.04},
  {id:321,name:"Grayson Allen",pos:"SG/SF",team:"PHX",ppg:11.2,rpg:3.2,apg:2.2,spg:0.7,bpg:0.2,fgpct:0.448,fgapg:10.2,ftpct:0.882,ftapg:1.8,topg:0.8,ffpg:0.01,tfpg:0.04},
  {id:322,name:"Jamaree Bouyea",pos:"PG/SG",team:"PHX",ppg:6.4,rpg:2.2,apg:2.8,spg:0.8,bpg:0.2,fgpct:0.438,fgapg:5.8,ftpct:0.772,ftapg:1.6,topg:1.0,ffpg:0.01,tfpg:0.03},
  {id:323,name:"Koby Brea",pos:"SG/SF",team:"PHX",ppg:5.8,rpg:1.8,apg:1.2,spg:0.5,bpg:0.2,fgpct:0.462,fgapg:5.2,ftpct:0.842,ftapg:1.2,topg:0.6,ffpg:0.01,tfpg:0.03},
  {id:324,name:"Amir Coffey",pos:"SG/SF",team:"PHX",ppg:7.2,rpg:2.8,apg:1.8,spg:0.7,bpg:0.2,fgpct:0.452,fgapg:6.8,ftpct:0.762,ftapg:1.8,topg:0.8,ffpg:0.01,tfpg:0.03},
  {id:325,name:"Ryan Dunn",pos:"SF/SG",team:"PHX",ppg:7.8,rpg:3.6,apg:1.8,spg:1.2,bpg:0.6,fgpct:0.468,fgapg:6.8,ftpct:0.722,ftapg:2.4,topg:1.0,ffpg:0.01,tfpg:0.04},
  {id:326,name:"Rasheer Fleming",pos:"PF/SF",team:"PHX",ppg:5.2,rpg:2.6,apg:1.2,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.6,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:327,name:"Collin Gillespie",pos:"PG/SG",team:"PHX",ppg:5.4,rpg:1.8,apg:2.4,spg:0.6,bpg:0.1,fgpct:0.432,fgapg:5.2,ftpct:0.852,ftapg:1.4,topg:0.8,ffpg:0.01,tfpg:0.03},
  {id:328,name:"Jordan Goodwin",pos:"PG/SG",team:"PHX",ppg:6.2,rpg:3.2,apg:2.8,spg:1.0,bpg:0.2,fgpct:0.442,fgapg:5.8,ftpct:0.732,ftapg:2.2,topg:1.2,ffpg:0.01,tfpg:0.04},
  {id:329,name:"Haywood Highsmith",pos:"SF/PF",team:"PHX",ppg:7.4,rpg:3.4,apg:1.4,spg:0.7,bpg:0.3,fgpct:0.452,fgapg:6.8,ftpct:0.772,ftapg:1.8,topg:0.8,ffpg:0.01,tfpg:0.03},
  {id:330,name:"CJ Huntley",pos:"C/PF",team:"PHX",ppg:5.2,rpg:4.2,apg:0.8,spg:0.4,bpg:0.6,fgpct:0.548,fgapg:4.2,ftpct:0.662,ftapg:2.2,topg:0.8,ffpg:0.01,tfpg:0.03},
  {id:331,name:"Oso Ighodaro",pos:"C/PF",team:"PHX",ppg:5.8,rpg:4.8,apg:1.2,spg:0.5,bpg:0.8,fgpct:0.558,fgapg:4.6,ftpct:0.682,ftapg:2.8,topg:1.0,ffpg:0.01,tfpg:0.03},
  {id:332,name:"Isaiah Livers",pos:"SF/PF",team:"PHX",ppg:5.2,rpg:2.6,apg:1.4,spg:0.5,bpg:0.3,fgpct:0.448,fgapg:4.8,ftpct:0.742,ftapg:1.8,topg:0.7,ffpg:0.01,tfpg:0.03},
  {id:333,name:"Mark Williams",pos:"C",team:"PHX",ppg:9.8,rpg:8.2,apg:1.2,spg:0.5,bpg:1.6,fgpct:0.598,fgapg:7.2,ftpct:0.662,ftapg:4.2,topg:1.2,ffpg:0.01,tfpg:0.04},
];

// ── Team Logos (pixel art SVG icons) ─────────────────────────────
const TEAM_LOGOS = {
  "OKC": { svg: `<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' style='width:100%;height:100%;image-rendering:pixelated'><rect width='32' height='32' fill='#020c18'/><!-- Lightning bolt --><rect x='18' y='2' width='4' height='2' fill='#007ac1'/><rect x='16' y='4' width='4' height='2' fill='#007ac1'/><rect x='14' y='6' width='4' height='2' fill='#007ac1'/><rect x='12' y='8' width='8' height='2' fill='#007ac1'/><rect x='10' y='10' width='8' height='2' fill='#007ac1'/><rect x='14' y='12' width='6' height='2' fill='#007ac1'/><rect x='12' y='14' width='6' height='2' fill='#007ac1'/><rect x='10' y='16' width='8' height='2' fill='#007ac1'/><rect x='8' y='18' width='8' height='2' fill='#007ac1'/><rect x='10' y='20' width='4' height='2' fill='#007ac1'/><rect x='8' y='22' width='4' height='2' fill='#007ac1'/><rect x='6' y='24' width='4' height='2' fill='#007ac1'/><!-- glow --><rect x='18' y='2' width='4' height='2' fill='#4ac8ff' opacity='.4'/><rect x='8' y='18' width='8' height='2' fill='#4ac8ff' opacity='.3'/></svg>`, color: "#007ac1" },
  "SAS": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#020c18"/><!-- Spur rowel wheel - recognizable spur shape --><!-- axle pin center --><rect x="14" y="14" width="4" height="4" fill="#c0c0c0"/><!-- 6 spokes radiating out --><rect x="15" y="4" width="2" height="10" fill="#c0c0c0"/><rect x="15" y="18" width="2" height="10" fill="#c0c0c0"/><rect x="4" y="15" width="10" height="2" fill="#c0c0c0"/><rect x="18" y="15" width="10" height="2" fill="#c0c0c0"/><rect x="7" y="7" width="2" height="2" fill="#c0c0c0"/><rect x="9" y="9" width="2" height="2" fill="#c0c0c0"/><rect x="11" y="11" width="2" height="2" fill="#c0c0c0"/><rect x="21" y="7" width="2" height="2" fill="#c0c0c0"/><rect x="19" y="9" width="2" height="2" fill="#c0c0c0"/><rect x="17" y="11" width="2" height="2" fill="#c0c0c0"/><rect x="7" y="23" width="2" height="2" fill="#c0c0c0"/><rect x="9" y="21" width="2" height="2" fill="#c0c0c0"/><rect x="11" y="19" width="2" height="2" fill="#c0c0c0"/><rect x="21" y="23" width="2" height="2" fill="#c0c0c0"/><rect x="19" y="21" width="2" height="2" fill="#c0c0c0"/><rect x="17" y="19" width="2" height="2" fill="#c0c0c0"/><!-- spike tips sharp --><rect x="15" y="2" width="2" height="4" fill="#fff"/><rect x="15" y="26" width="2" height="4" fill="#fff"/><rect x="2" y="15" width="4" height="2" fill="#fff"/><rect x="26" y="15" width="4" height="2" fill="#fff"/><rect x="6" y="6" width="2" height="2" fill="#fff"/><rect x="24" y="6" width="2" height="2" fill="#fff"/><rect x="6" y="24" width="2" height="2" fill="#fff"/><rect x="24" y="24" width="2" height="2" fill="#fff"/><!-- spur strap at bottom --><rect x="2" y="28" width="28" height="2" fill="#c0c0c0"/><rect x="4" y="26" width="24" height="2" fill="#888"/></svg>`, color: "#c0c0c0" },
  "DEN": { svg: `<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' style='width:100%;height:100%;image-rendering:pixelated'><rect width='32' height='32' fill='#020c18'/><!-- Mountain peaks --><rect x='14' y='4' width='4' height='2' fill='#fff'/><rect x='12' y='6' width='8' height='2' fill='#fdb927'/><rect x='10' y='8' width='4' height='2' fill='#fff'/><rect x='10' y='8' width='12' height='2' fill='#fdb927'/><rect x='8' y='10' width='16' height='2' fill='#fdb927'/><rect x='6' y='12' width='20' height='2' fill='#fdb927'/><rect x='22' y='8' width='2' height='2' fill='#fff'/><rect x='20' y='10' width='2' height='2' fill='#fdb927'/><rect x='4' y='14' width='24' height='2' fill='#0d2a4e'/><rect x='4' y='16' width='24' height='2' fill='#0d2a4e'/><!-- snow caps --><rect x='14' y='4' width='4' height='4' fill='#fff'/><rect x='10' y='8' width='4' height='2' fill='#fff'/><rect x='22' y='8' width='2' height='2' fill='#fff'/><!-- stars --><rect x='6' y='20' width='2' height='2' fill='#fff' opacity='.8'/><rect x='12' y='22' width='2' height='2' fill='#fff' opacity='.6'/><rect x='20' y='19' width='2' height='2' fill='#fff' opacity='.7'/><rect x='25' y='22' width='2' height='2' fill='#fff' opacity='.5'/></svg>`, color: "#fdb927" },
  "LAL": { svg: `<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' style='width:100%;height:100%;image-rendering:pixelated'><rect width='32' height='32' fill='#020c18'/><!-- Crown --><rect x='4' y='20' width='24' height='8' fill='#fdb927'/><rect x='4' y='18' width='4' height='4' fill='#fdb927'/><rect x='14' y='16' width='4' height='6' fill='#fdb927'/><rect x='24' y='18' width='4' height='4' fill='#fdb927'/><rect x='4' y='14' width='2' height='6' fill='#fdb927'/><rect x='15' y='10' width='2' height='8' fill='#fdb927'/><rect x='26' y='14' width='2' height='6' fill='#fdb927'/><!-- crown tips --><rect x='4' y='12' width='4' height='4' fill='#fdb927'/><rect x='14' y='8' width='4' height='4' fill='#fdb927'/><rect x='24' y='12' width='4' height='4' fill='#fdb927'/><!-- jewels --><rect x='6' y='22' width='4' height='4' fill='#552583'/><rect x='14' y='22' width='4' height='4' fill='#552583'/><rect x='22' y='22' width='4' height='4' fill='#552583'/><rect x='7' y='23' width='2' height='2' fill='#aa66ff' opacity='.8'/><rect x='15' y='23' width='2' height='2' fill='#aa66ff' opacity='.8'/><rect x='23' y='23' width='2' height='2' fill='#aa66ff' opacity='.8'/></svg>`, color: "#fdb927" },
  "HOU": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#020c18"/><!-- Rocket going diagonally top-right --><!-- flame trail bottom-left --><rect x="2" y="26" width="4" height="4" fill="#ff3300" opacity=".5"/><rect x="4" y="24" width="4" height="4" fill="#ff6600" opacity=".6"/><rect x="6" y="22" width="4" height="4" fill="#fdb927" opacity=".7"/><rect x="8" y="20" width="3" height="3" fill="#ff9900"/><!-- rocket body diagonal --><rect x="8" y="18" width="4" height="4" fill="#ce1141"/><rect x="10" y="16" width="4" height="4" fill="#ce1141"/><rect x="12" y="14" width="4" height="4" fill="#ce1141"/><rect x="14" y="12" width="4" height="4" fill="#ce1141"/><rect x="16" y="10" width="4" height="4" fill="#ce1141"/><rect x="18" y="8" width="4" height="4" fill="#ce1141"/><!-- nose cone tip --><rect x="20" y="6" width="4" height="4" fill="#fff"/><rect x="22" y="4" width="4" height="4" fill="#fff"/><rect x="24" y="2" width="4" height="4" fill="#fff"/><!-- fins --><rect x="6" y="18" width="4" height="4" fill="#ce1141"/><rect x="4" y="20" width="4" height="4" fill="#ce1141"/><rect x="18" y="8" width="4" height="4" fill="#ce1141"/><rect x="22" y="6" width="4" height="4" fill="#ce1141"/><!-- window --><rect x="15" y="13" width="3" height="3" fill="#88ccff"/><rect x="16" y="14" width="1" height="1" fill="#fff" opacity=".8"/></svg>`, color: "#ce1141" },
  "MIN": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#020c18"/><!-- Fierce wolf head - angular, not cartoony --><!-- skull/head shape wide and angular --><rect x="6" y="10" width="20" height="14" fill="#236192"/><!-- pointed ears sharp --><rect x="6" y="4" width="6" height="8" fill="#236192"/><rect x="20" y="4" width="6" height="8" fill="#236192"/><rect x="8" y="4" width="2" height="6" fill="#78232a"/><rect x="22" y="4" width="2" height="6" fill="#78232a"/><!-- narrow angry eyes - slanted --><rect x="8" y="12" width="6" height="2" fill="#fff"/><rect x="18" y="12" width="6" height="2" fill="#fff"/><rect x="10" y="11" width="4" height="2" fill="#fff"/><rect x="18" y="11" width="4" height="2" fill="#fff"/><!-- pupils - aggressive slant --><rect x="10" y="12" width="3" height="2" fill="#78d6ff"/><rect x="19" y="12" width="3" height="2" fill="#78d6ff"/><rect x="10" y="11" width="2" height="1" fill="#020c18"/><rect x="20" y="11" width="2" height="1" fill="#020c18"/><!-- snout - long and angular --><rect x="10" y="16" width="12" height="6" fill="#1a3a6e"/><rect x="8" y="18" width="16" height="4" fill="#1a3a6e"/><!-- nose --><rect x="14" y="16" width="4" height="3" fill="#020c18"/><!-- bared teeth --><rect x="9" y="22" width="2" height="3" fill="#fff"/><rect x="12" y="22" width="2" height="3" fill="#fff"/><rect x="15" y="22" width="2" height="3" fill="#fff"/><rect x="18" y="22" width="2" height="3" fill="#fff"/><rect x="21" y="22" width="2" height="3" fill="#fff"/><!-- fur texture --><rect x="6" y="10" width="2" height="2" fill="#1a3a6e"/><rect x="24" y="10" width="2" height="2" fill="#1a3a6e"/></svg>`, color: "#236192" },
  "POR": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#020c18"/><!-- Rose - Portland Rose City --><!-- stem --><rect x="15" y="22" width="2" height="8" fill="#2d6a2d"/><!-- leaves on stem --><rect x="10" y="24" width="6" height="2" fill="#2d6a2d"/><rect x="9" y="23" width="4" height="2" fill="#2d6a2d"/><rect x="17" y="26" width="6" height="2" fill="#2d6a2d"/><rect x="19" y="25" width="4" height="2" fill="#2d6a2d"/><!-- rose petals - layered from outside in --><!-- outer petals --><rect x="8" y="14" width="6" height="8" fill="#e03a3e"/><rect x="6" y="12" width="4" height="6" fill="#e03a3e"/><rect x="18" y="14" width="6" height="8" fill="#e03a3e"/><rect x="22" y="12" width="4" height="6" fill="#e03a3e"/><rect x="10" y="8" width="12" height="6" fill="#e03a3e"/><rect x="12" y="6" width="8" height="4" fill="#e03a3e"/><!-- mid petals darker --><rect x="10" y="12" width="12" height="10" fill="#c02030"/><rect x="8" y="10" width="16" height="6" fill="#c02030"/><!-- inner petals --><rect x="12" y="10" width="8" height="10" fill="#e03a3e"/><rect x="10" y="12" width="12" height="6" fill="#e03a3e"/><!-- center --><rect x="13" y="13" width="6" height="6" fill="#ffd700"/><rect x="14" y="14" width="4" height="4" fill="#e0b000"/><!-- petal tips curling --><rect x="7" y="10" width="2" height="3" fill="#ff6688"/><rect x="23" y="10" width="2" height="3" fill="#ff6688"/><rect x="13" y="5" width="3" height="2" fill="#ff6688"/><rect x="17" y="5" width="3" height="2" fill="#ff6688"/></svg>`, color: "#e03a3e" },
  "GSW": { svg: `<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' style='width:100%;height:100%;image-rendering:pixelated'><rect width='32' height='32' fill='#020c18'/><!-- Golden Gate Bridge --><!-- road --><rect x='2' y='22' width='28' height='3' fill='#ffc72c'/><!-- left tower --><rect x='6' y='10' width='4' height='14' fill='#ffc72c'/><rect x='4' y='8' width='8' height='4' fill='#ffc72c'/><rect x='7' y='6' width='2' height='4' fill='#ffc72c'/><!-- right tower --><rect x='22' y='10' width='4' height='14' fill='#ffc72c'/><rect x='20' y='8' width='8' height='4' fill='#ffc72c'/><rect x='23' y='6' width='2' height='4' fill='#ffc72c'/><!-- cables curve down --><rect x='8' y='14' width='2' height='2' fill='#ffc72c'/><rect x='11' y='17' width='2' height='2' fill='#ffc72c'/><rect x='14' y='19' width='2' height='2' fill='#ffc72c'/><rect x='17' y='19' width='2' height='2' fill='#ffc72c'/><rect x='20' y='17' width='2' height='2' fill='#ffc72c'/><rect x='23' y='14' width='2' height='2' fill='#ffc72c'/><!-- water --><rect x='2' y='26' width='28' height='4' fill='#1a6b9e' opacity='.7'/><rect x='4' y='27' width='6' height='1' fill='#4ab4e6' opacity='.5'/><rect x='16' y='28' width='8' height='1' fill='#4ab4e6' opacity='.4'/></svg>`, color: "#ffc72c" },
  "DET": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#020c18"/><!-- Horse head - Detroit Pistons horse --><!-- neck --><rect x="4" y="18" width="10" height="12" fill="#c8a96e"/><rect x="6" y="16" width="8" height="4" fill="#c8a96e"/><!-- head shape --><rect x="10" y="8" width="14" height="12" fill="#c8a96e"/><rect x="12" y="6" width="12" height="6" fill="#c8a96e"/><!-- snout/muzzle --><rect x="20" y="14" width="8" height="6" fill="#b8996e"/><rect x="22" y="19" width="6" height="4" fill="#b8996e"/><!-- nostril --><rect x="24" y="16" width="2" height="2" fill="#8B6040"/><rect x="26" y="17" width="2" height="2" fill="#8B6040"/><!-- eye --><rect x="14" y="10" width="4" height="4" fill="#020c18"/><rect x="15" y="11" width="3" height="3" fill="#3a2010"/><rect x="15" y="11" width="1" height="1" fill="#fff"/><!-- ear --><rect x="12" y="2" width="4" height="6" fill="#c8a96e"/><rect x="13" y="3" width="2" height="4" fill="#e0b080"/><!-- mane --><rect x="8" y="4" width="4" height="14" fill="#8B4513"/><rect x="6" y="6" width="4" height="12" fill="#8B4513"/><rect x="4" y="8" width="4" height="10" fill="#6B3010"/><!-- mouth line --><rect x="22" y="20" width="6" height="1" fill="#8B6040"/><!-- bridle hint --><rect x="16" y="14" width="10" height="2" fill="#006bb6" opacity=".7"/><rect x="20" y="12" width="2" height="8" fill="#006bb6" opacity=".7"/></svg>`, color: "#006bb6" },
  "BOS": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#007a33"/><!-- Classic Celtics shamrock - white on green, like their alt logo --><!-- top lobe - circle center top --><rect x="12" y="3" width="8" height="8" fill="#fff"/><rect x="10" y="5" width="12" height="4" fill="#fff"/><rect x="11" y="4" width="10" height="6" fill="#fff"/><!-- bottom left lobe --><rect x="3" y="12" width="8" height="8" fill="#fff"/><rect x="5" y="10" width="4" height="12" fill="#fff"/><rect x="4" y="11" width="6" height="10" fill="#fff"/><!-- bottom right lobe --><rect x="21" y="12" width="8" height="8" fill="#fff"/><rect x="23" y="10" width="4" height="12" fill="#fff"/><rect x="22" y="11" width="6" height="10" fill="#fff"/><!-- center junction --><rect x="10" y="10" width="12" height="10" fill="#fff"/><!-- stem --><rect x="14" y="22" width="4" height="6" fill="#fff"/><rect x="13" y="26" width="6" height="3" fill="#fff"/><!-- inner green cutouts to shape lobes properly --><rect x="3" y="3" width="8" height="8" fill="#007a33"/><rect x="21" y="3" width="8" height="8" fill="#007a33"/><rect x="3" y="21" width="8" height="8" fill="#007a33"/><rect x="21" y="21" width="8" height="8" fill="#007a33"/><!-- vein lines --><rect x="15" y="5" width="1" height="5" fill="#007a33" opacity=".4"/><rect x="6" y="14" width="4" height="1" fill="#007a33" opacity=".4"/><rect x="22" y="14" width="4" height="1" fill="#007a33" opacity=".4"/></svg>`, color: "#007a33" },
  "NYK": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#020c18"/><!-- Big Apple - simple bold apple shape --><!-- apple body --><rect x="6" y="10" width="20" height="16" fill="#f58426"/><rect x="4" y="12" width="24" height="12" fill="#f58426"/><rect x="8" y="8" width="16" height="4" fill="#f58426"/><rect x="10" y="6" width="12" height="4" fill="#f58426"/><!-- apple indent top center --><rect x="14" y="6" width="4" height="4" fill="#020c18"/><rect x="15" y="8" width="2" height="4" fill="#020c18"/><!-- stem --><rect x="15" y="2" width="2" height="6" fill="#5a3010"/><!-- leaf --><rect x="17" y="3" width="5" height="3" fill="#2d7a2d"/><rect x="18" y="2" width="4" height="2" fill="#2d7a2d"/><!-- apple bottom point --><rect x="8" y="24" width="16" height="2" fill="#f58426"/><rect x="10" y="26" width="12" height="2" fill="#e06010"/><rect x="13" y="28" width="6" height="2" fill="#e06010"/><!-- shine highlight --><rect x="9" y="11" width="5" height="4" fill="#ffb060" opacity=".7"/><rect x="10" y="10" width="3" height="2" fill="#ffd090" opacity=".6"/><!-- NYC star badge --><rect x="18" y="16" width="8" height="8" fill="#003087"/><rect x="19" y="15" width="6" height="10" fill="#003087"/><rect x="20" y="14" width="4" height="12" fill="#003087"/><rect x="21" y="17" width="2" height="2" fill="#fff"/><rect x="20" y="18" width="4" height="2" fill="#fff"/><rect x="21" y="19" width="2" height="2" fill="#fff"/></svg>`, color: "#f58426" },
  "CLE": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#020c18"/><!-- Two crossed swords - unmistakably swords --><!-- sword 1: top-left to bottom-right --><!-- blade --><rect x="4" y="4" width="3" height="3" fill="#c0c0c0"/><rect x="6" y="6" width="3" height="3" fill="#c0c0c0"/><rect x="8" y="8" width="3" height="3" fill="#c0c0c0"/><rect x="10" y="10" width="3" height="3" fill="#c0c0c0"/><rect x="12" y="12" width="3" height="3" fill="#c0c0c0"/><!-- crossguard 1 --><rect x="11" y="14" width="10" height="3" fill="#860038"/><!-- handle 1 --><rect x="16" y="16" width="3" height="3" fill="#8B4513"/><rect x="18" y="18" width="3" height="3" fill="#8B4513"/><rect x="20" y="20" width="3" height="3" fill="#8B4513"/><!-- pommel 1 --><rect x="22" y="22" width="4" height="4" fill="#860038"/><!-- sword 2: top-right to bottom-left --><rect x="25" y="4" width="3" height="3" fill="#c0c0c0"/><rect x="23" y="6" width="3" height="3" fill="#c0c0c0"/><rect x="21" y="8" width="3" height="3" fill="#c0c0c0"/><rect x="19" y="10" width="3" height="3" fill="#c0c0c0"/><rect x="17" y="12" width="3" height="3" fill="#c0c0c0"/><!-- crossguard 2 --><rect x="11" y="14" width="10" height="3" fill="#860038"/><!-- handle 2 --><rect x="11" y="16" width="3" height="3" fill="#8B4513"/><rect x="9" y="18" width="3" height="3" fill="#8B4513"/><rect x="7" y="20" width="3" height="3" fill="#8B4513"/><!-- pommel 2 --><rect x="5" y="22" width="4" height="4" fill="#860038"/><!-- blade shine --><rect x="5" y="5" width="1" height="6" fill="#fff" opacity=".5"/><rect x="26" y="5" width="1" height="6" fill="#fff" opacity=".5"/></svg>`, color: "#860038" },
  "TOR": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#020c18"/><!-- Raptor face - dinosaur head front-on --><!-- top of skull --><rect x="8" y="4" width="16" height="4" fill="#ce1141"/><!-- brow ridge prominent --><rect x="6" y="7" width="20" height="4" fill="#ce1141"/><!-- eye sockets sunken --><rect x="7" y="10" width="6" height="5" fill="#020c18"/><rect x="19" y="10" width="6" height="5" fill="#020c18"/><!-- glowing slit pupils --><rect x="9" y="11" width="4" height="3" fill="#ffd700"/><rect x="10" y="11" width="2" height="3" fill="#fff"/><rect x="21" y="11" width="4" height="3" fill="#ffd700"/><rect x="22" y="11" width="2" height="3" fill="#fff"/><!-- snout narrow --><rect x="11" y="14" width="10" height="4" fill="#ce1141"/><rect x="12" y="17" width="8" height="4" fill="#991030"/><!-- nostrils --><rect x="13" y="15" width="2" height="2" fill="#020c18"/><rect x="17" y="15" width="2" height="2" fill="#020c18"/><!-- jaw with teeth showing --><rect x="10" y="20" width="12" height="4" fill="#ce1141"/><rect x="9" y="22" width="14" height="4" fill="#991030"/><!-- teeth top row --><rect x="11" y="20" width="2" height="3" fill="#fff"/><rect x="14" y="20" width="2" height="3" fill="#fff"/><rect x="17" y="20" width="2" height="3" fill="#fff"/><rect x="20" y="20" width="2" height="3" fill="#fff"/><!-- teeth bottom --><rect x="12" y="24" width="2" height="3" fill="#fff"/><rect x="15" y="24" width="2" height="3" fill="#fff"/><rect x="18" y="24" width="2" height="3" fill="#fff"/><!-- scale texture --><rect x="8" y="6" width="2" height="2" fill="#991030" opacity=".5"/><rect x="22" y="6" width="2" height="2" fill="#991030" opacity=".5"/></svg>`, color: "#ce1141" },
  "ATL": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#020c18"/><!-- Hawk side profile - clearly a bird --><!-- tail feathers --><rect x="2" y="18" width="6" height="3" fill="#e03a3e"/><rect x="2" y="16" width="4" height="3" fill="#e03a3e"/><rect x="2" y="20" width="8" height="3" fill="#cc2030"/><!-- body --><rect x="6" y="12" width="14" height="12" fill="#e03a3e"/><!-- wing top --><rect x="8" y="8" width="14" height="6" fill="#cc2030"/><rect x="10" y="6" width="12" height="4" fill="#e03a3e"/><rect x="12" y="4" width="10" height="4" fill="#cc2030"/><!-- neck and head --><rect x="18" y="8" width="8" height="8" fill="#e03a3e"/><rect x="20" y="6" width="6" height="4" fill="#e03a3e"/><!-- fierce eye --><rect x="23" y="8" width="3" height="3" fill="#fff"/><rect x="24" y="9" width="2" height="2" fill="#ffd700"/><rect x="24" y="9" width="1" height="1" fill="#020c18"/><!-- hooked beak pointing right --><rect x="26" y="11" width="6" height="3" fill="#fdb927"/><rect x="28" y="13" width="4" height="2" fill="#fdb927"/><rect x="30" y="14" width="2" height="2" fill="#e09000"/><!-- legs/talons --><rect x="14" y="24" width="3" height="6" fill="#fdb927"/><rect x="18" y="24" width="3" height="6" fill="#fdb927"/><rect x="12" y="28" width="4" height="2" fill="#fdb927"/><rect x="16" y="28" width="4" height="2" fill="#fdb927"/><rect x="20" y="28" width="4" height="2" fill="#fdb927"/></svg>`, color: "#e03a3e" },
  "PHI": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#020c18"/><!-- Liberty Bell - cleaner, more bell-shaped --><!-- yoke / hanger at top --><rect x="11" y="2" width="10" height="3" fill="#c8a050"/><rect x="13" y="4" width="6" height="2" fill="#c8a050"/><!-- bell dome - wide at bottom, narrow top --><rect x="13" y="5" width="6" height="2" fill="#c8a050"/><rect x="11" y="7" width="10" height="2" fill="#c8a050"/><rect x="9" y="9" width="14" height="2" fill="#c8a050"/><rect x="8" y="11" width="16" height="2" fill="#c8a050"/><rect x="7" y="13" width="18" height="2" fill="#c8a050"/><rect x="7" y="15" width="18" height="2" fill="#c8a050"/><!-- bell mouth flares wide --><rect x="5" y="17" width="22" height="3" fill="#c8a050"/><rect x="3" y="19" width="26" height="2" fill="#c8a050"/><rect x="5" y="21" width="22" height="2" fill="#b08040"/><!-- crack down the left side - famous Liberty Bell crack --><rect x="12" y="7" width="2" height="4" fill="#020c18"/><rect x="11" y="10" width="2" height="4" fill="#020c18"/><rect x="10" y="13" width="2" height="5" fill="#020c18"/><rect x="9" y="17" width="2" height="3" fill="#020c18"/><!-- clapper hanging --><rect x="15" y="21" width="2" height="5" fill="#a07030"/><rect x="14" y="25" width="4" height="3" fill="#a07030"/><!-- bell base rim --><rect x="5" y="21" width="22" height="2" fill="#806020"/></svg>`, color: "#006bb6" },
  "ORL": { svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;image-rendering:pixelated"><rect width="32" height="32" fill="#020c18"/><!-- Wizard - big clear pointed hat, staff, stars - very obvious --><!-- GIANT pointed hat - takes up top half --><rect x="15" y="0" width="2" height="2" fill="#0077c0"/><rect x="14" y="2" width="4" height="2" fill="#0077c0"/><rect x="13" y="4" width="6" height="2" fill="#0077c0"/><rect x="12" y="6" width="8" height="2" fill="#0077c0"/><rect x="11" y="8" width="10" height="2" fill="#0077c0"/><rect x="10" y="10" width="12" height="2" fill="#0077c0"/><!-- hat brim --><rect x="6" y="12" width="20" height="3" fill="#005a9e"/><!-- stars on hat --><rect x="13" y="3" width="2" height="2" fill="#ffd700"/><rect x="16" y="6" width="2" height="2" fill="#ffd700"/><rect x="11" y="9" width="2" height="2" fill="#fff"/><rect x="19" y="8" width="2" height="2" fill="#ffd700"/><!-- face --><rect x="10" y="14" width="12" height="6" fill="#f5c5a3"/><!-- big white wizard beard --><rect x="9" y="18" width="14" height="3" fill="#fff"/><rect x="8" y="20" width="16" height="3" fill="#fff"/><rect x="9" y="23" width="14" height="3" fill="#ddd"/><rect x="11" y="26" width="10" height="4" fill="#ccc"/><!-- eyes --><rect x="11" y="15" width="3" height="2" fill="#4a90d9"/><rect x="18" y="15" width="3" height="2" fill="#4a90d9"/><!-- bushy white brows --><rect x="10" y="14" width="5" height="2" fill="#fff"/><rect x="17" y="14" width="5" height="2" fill="#fff"/><!-- magic STAFF left side big and clear --><rect x="3" y="8" width="3" height="22" fill="#8B4513"/><rect x="2" y="6" width="5" height="4" fill="#ffd700"/><rect x="1" y="4" width="7" height="4" fill="#ffd700"/><rect x="3" y="2" width="3" height="4" fill="#ffd700"/><!-- staff gem --><rect x="3" y="5" width="3" height="3" fill="#4ab4ff"/><!-- sparkles around staff --><rect x="0" y="10" width="2" height="2" fill="#ffd700" opacity=".9"/><rect x="7" y="4" width="2" height="2" fill="#fff" opacity=".8"/><rect x="0" y="16" width="2" height="2" fill="#4ab4ff" opacity=".7"/><!-- robe --><rect x="7" y="20" width="18" height="10" fill="#0077c0"/><rect x="6" y="22" width="20" height="8" fill="#0077c0"/></svg>`, color: "#0077c0" },
  "PHX": { svg: `<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' style='width:100%;height:100%;image-rendering:pixelated'><rect width='32' height='32' fill='#020c18'/><!-- Sun with rays --><!-- center --><rect x='11' y='11' width='10' height='10' fill='#e56020'/><rect x='12' y='12' width='8' height='8' fill='#fdb927'/><rect x='13' y='13' width='6' height='6' fill='#ffe066'/><!-- rays N S E W --><rect x='15' y='2' width='2' height='6' fill='#e56020'/><rect x='15' y='24' width='2' height='6' fill='#e56020'/><rect x='2' y='15' width='6' height='2' fill='#e56020'/><rect x='24' y='15' width='6' height='2' fill='#e56020'/><!-- diagonal rays --><rect x='5' y='5' width='4' height='2' fill='#e56020'/><rect x='5' y='5' width='2' height='4' fill='#e56020'/><rect x='23' y='5' width='4' height='2' fill='#e56020'/><rect x='25' y='5' width='2' height='4' fill='#e56020'/><rect x='5' y='25' width='4' height='2' fill='#e56020'/><rect x='5' y='23' width='2' height='4' fill='#e56020'/><rect x='23' y='25' width='4' height='2' fill='#e56020'/><rect x='25' y='23' width='2' height='4' fill='#e56020'/></svg>`, color: "#e56020" },
  "CHA": { svg: `<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' style='width:100%;height:100%;image-rendering:pixelated'><rect width='32' height='32' fill='#020c18'/><!-- Hornet / bee --><!-- body stripes --><rect x='10' y='12' width='14' height='4' fill='#fdb927'/><rect x='10' y='16' width='14' height='4' fill='#00788c'/><rect x='10' y='20' width='14' height='4' fill='#fdb927'/><rect x='11' y='10' width='10' height='2' fill='#00788c'/><rect x='12' y='24' width='8' height='2' fill='#00788c'/><!-- head --><rect x='12' y='6' width='8' height='6' fill='#020c18'/><rect x='13' y='7' width='6' height='4' fill='#333'/><!-- eyes --><rect x='13' y='8' width='2' height='2' fill='#8af'/><rect x='17' y='8' width='2' height='2' fill='#8af'/><!-- antennae --><rect x='13' y='3' width='2' height='4' fill='#00788c'/><rect x='11' y='2' width='2' height='2' fill='#fdb927'/><rect x='17' y='3' width='2' height='4' fill='#00788c'/><rect x='19' y='2' width='2' height='2' fill='#fdb927'/><!-- wings --><rect x='2' y='10' width='8' height='4' fill='#aaddff' opacity='.6'/><rect x='2' y='8' width='6' height='4' fill='#aaddff' opacity='.4'/><rect x='22' y='10' width='8' height='4' fill='#aaddff' opacity='.6'/><rect x='24' y='8' width='6' height='4' fill='#aaddff' opacity='.4'/><!-- stinger --><rect x='15' y='26' width='2' height='4' fill='#020c18'/><rect x='15' y='28' width='2' height='3' fill='#333'/></svg>`, color: "#00788c" },
  "LAC": { svg: `<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' style='width:100%;height:100%;image-rendering:pixelated'><rect width='32' height='32' fill='#020c18'/><!-- Sail / ship sail (Clippers) --><!-- main sail --><rect x='14' y='4' width='2' height='20' fill='#c8102e'/><rect x='14' y='6' width='14' height='2' fill='#fff'/><rect x='14' y='8' width='12' height='2' fill='#c8102e'/><rect x='14' y='10' width='12' height='2' fill='#fff'/><rect x='14' y='12' width='10' height='2' fill='#c8102e'/><rect x='14' y='14' width='10' height='2' fill='#fff'/><rect x='14' y='16' width='8' height='2' fill='#c8102e'/><rect x='14' y='18' width='6' height='2' fill='#fff'/><rect x='14' y='20' width='4' height='2' fill='#c8102e'/><!-- boom (horizontal mast) --><rect x='6' y='22' width='22' height='2' fill='#8B4513'/><!-- hull --><rect x='4' y='24' width='24' height='4' fill='#c8102e'/><rect x='6' y='26' width='22' height='2' fill='#8B4513'/><rect x='8' y='28' width='18' height='2' fill='#c8102e'/><!-- water --><rect x='2' y='28' width='6' height='2' fill='#0077c0' opacity='.5'/><rect x='24' y='28' width='6' height='2' fill='#0077c0' opacity='.5'/></svg>`, color: "#c8102e" }
};

// ── Individual Player Portraits (overrides team logo) ────────────
// Add specific player portraits here — shows instead of team logo
// Portraits loaded from Supabase on boot — do not edit manually
let PLAYER_PORTRAITS = {};

async function loadPortraits(){
  try{
    if(!db) return;
    const {data} = await db.from('leagues').select('state').eq('id','nba-portraits-2026').single();
    if(data?.state){
      PLAYER_PORTRAITS = JSON.parse(data.state);
      console.log('Loaded', Object.keys(PLAYER_PORTRAITS).length, 'portraits from Supabase');
    }
  }catch(e){ console.warn('Could not load portraits:', e); }
}

// Per-user portrait selection (localStorage so it's personal per device)
function getPortraitIndex(playerName){
  // Per-manager storage — key includes manager ID so each user has their own preference
  const mid = typeof currentManagerId !== 'undefined' ? currentManagerId : 'viewer';
  try{ return parseInt(localStorage.getItem('pi_'+mid+'_'+playerName)||'0')||0; }
  catch(e){ return 0; }
}
function setPortraitIndex(playerName, idx){
  const mid = typeof currentManagerId !== 'undefined' ? currentManagerId : 'viewer';
  try{ localStorage.setItem('pi_'+mid+'_'+playerName, idx); }
  catch(e){}
}
function getPortraitCount(playerName){
  const p = PLAYER_PORTRAITS[playerName];
  if(!p) return 0;
  return Array.isArray(p) ? p.length : 1;
}
function getActivePortrait(playerName){
  const p = PLAYER_PORTRAITS[playerName];
  if(!p) return null;
  if(!Array.isArray(p)) return p;
  const idx = Math.min(getPortraitIndex(playerName), p.length-1);
  return p[idx];
}
function cyclePortrait(playerName, dir){
  const count = getPortraitCount(playerName);
  if(count <= 1) return;
  const current = getPortraitIndex(playerName);
  const next = (current + dir + count) % count;
  setPortraitIndex(playerName, next);
  render();
  // Re-open modal if open
  const modal = document.getElementById('player-modal');
  if(modal){
    const pid = parseInt(modal.dataset.pid);
    if(pid) { closePlayerModal(); openPlayerModal(pid); }
  }
}

async function savePortraits(){
  if(!db) return;
  await db.from('leagues').upsert({id:'nba-portraits-2026', state:JSON.stringify(PLAYER_PORTRAITS)});
  console.log('Saved', Object.keys(PLAYER_PORTRAITS).length, 'portraits to Supabase');
}

const TEAM_COLORS = {
  OKC:"#007ac1", SAS:"#c0c0c0", DEN:"#fdb927", LAL:"#fdb927",
  HOU:"#ce1141", MIN:"#236192", POR:"#e03a3e", GSW:"#ffc72c",
  DET:"#006bb6", BOS:"#007a33", NYK:"#f58426", CLE:"#860038",
  TOR:"#ce1141", ATL:"#e03a3e", PHI:"#006bb6", ORL:"#0077c0",
  PHX:"#e56020", CHA:"#00788c", LAC:"#c8102e",
};

function getTeamLogo(team){ return TEAM_LOGOS[team] || null; }

function playerLogoHtml(team, size=36, playerName=''){
  // Check for individual portrait first
  if(playerName && PLAYER_PORTRAITS[playerName]){
    const color = TEAM_COLORS[team] || "#4a9eff";
    return `<div style="width:${size}px;height:${size}px;flex-shrink:0;border:2px solid ${color};background:#020c18;overflow:hidden"><img src="${PLAYER_PORTRAITS[playerName]}" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"/></div>`;
  }
  const logo = getTeamLogo(team);
  const color = logo?.color || TEAM_COLORS[team] || "#4a9eff";
  if(logo){
    return `<div style="width:${size}px;height:${size}px;flex-shrink:0;border:2px solid ${color};background:#020c18;overflow:hidden;display:flex;align-items:center;justify-content:center">${logo.img ? `<img src="${logo.img}" style="width:${size-4}px;height:${size-4}px;object-fit:contain;image-rendering:pixelated"/>` : logo.svg}</div>`;
  }
  return `<div style="width:${size}px;height:${size}px;flex-shrink:0;border:2px solid ${color};background:#020c18;display:flex;align-items:center;justify-content:center;font-family:'Press Start 2P',monospace;font-size:${Math.floor(size/5)}px;color:${color}">${team}</div>`;
}

function playerPortraitHtml(name, team, size=36){ return playerLogoHtml(team, size, name); }


// ── Helpers ───────────────────────────────────────────────────────
function espnScore(p){return p.ppg+p.rpg+p.apg+p.spg+p.bpg-p.fgapg*(1-p.fgpct)-p.ftapg*(1-p.ftpct)-p.topg-p.ffpg-p.tfpg;}
function espnBD(p){const fgmi=p.fgapg*(1-p.fgpct),ftmi=p.ftapg*(1-p.ftpct),pos=p.ppg+p.rpg+p.apg+p.spg+p.bpg,neg=fgmi+ftmi+p.topg+p.ffpg+p.tfpg;return{pos:+pos.toFixed(1),neg:+neg.toFixed(1),net:+(pos-neg).toFixed(1)};}
function getTeam(id){return S.teams.find(t=>t.id===id)||{id,name:id,eliminated:false,survivedRounds:0};}
function getPlayer(id){return PLAYERS.find(p=>p.id===id);}
function initials(n){return n.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();}
function buildSnake(n,picks){const o=[];for(let r=0;r<picks;r++){const row=Array.from({length:n},(_,i)=>i);o.push(...(r%2===0?row:[...row].reverse()));}return o;}
function getAcquiredRound(mid, pid){
  // Returns the round AFTER which the player was acquired (0 = drafted before playoffs)
  // Bonuses only count for rounds survived AFTER acquisition
  if(!S.waiverAcquisitions) return 0;
  const key = mid+'_'+pid;
  return S.waiverAcquisitions[key] || 0;
}

function bonusForPlayer(pid, mid){
  const t=getTeam(getPlayer(pid).team);
  const acquiredAfterRound = mid !== undefined ? getAcquiredRound(mid, pid) : 0;
  const isWaiverPickup = acquiredAfterRound > 0; // picked up after draft = waiver acquisition
  let b=0;
  for(let r=1;r<=(t.survivedRounds||0);r++){
    if(r > acquiredAfterRound){
      // Waiver pickups only earn flat +5 per round survived (not escalating)
      b += isWaiverPickup ? 5 : ROUND_BONUS[r];
    }
  }
  return b;
}
function isInactive(mid,pid){const t=getTeam(getPlayer(pid).team);return t.eliminated||(S.injured[mid]||[]).includes(pid);}
function managerStatScore(mid){
  return managerStatScoreAuto(mid);
}
function managerBonusScore(mid){return S.rosters[mid].reduce((s,pid)=>s+bonusForPlayer(pid,mid),0);}
function managerTotal(mid){return +(managerStatScore(mid)+managerBonusScore(mid)).toFixed(1);}
// ── Waiver Slot System (per-source tracking) ─────────────────────
// Each eliminated/injured player creates exactly one slot for that manager
// Slots are tracked individually so they can't bleed into each other

function getWaiverSlots(mid){
  const slots = [];
  const usage = S.waiverSlotUsage||{};

  // Slots from eliminated players currently on roster (not yet auto-removed)
  (S.rosters[mid]||[]).forEach(pid=>{
    const p=getPlayer(pid); if(!p) return;
    if(getTeam(p.team)?.eliminated){
      const key='elim_'+pid;
      if(!usage.hasOwnProperty(mid+'_'+key)){
        slots.push({key, type:'elim', pid, playerName:p.name, usedByPid:null});
      } else {
        slots.push({key, type:'elim', pid, playerName:p.name, usedByPid:usage[mid+'_'+key]});
      }
    }
  });

  // Slots from pre-stored elimination events (players already removed from roster)
  // These are stored as mid_elim_PID keys in waiverSlotUsage
  Object.entries(usage).forEach(([k,v])=>{
    const prefix = mid+'_elim_';
    if(!k.startsWith(prefix)) return;
    const pid = parseInt(k.slice(prefix.length));
    // Only include if not already in roster (would be caught above)
    if((S.rosters[mid]||[]).includes(pid)) return;
    const p = getPlayer(pid);
    slots.push({key:'elim_'+pid, type:'elim', pid, playerName:p?.name||'Unknown', usedByPid:v});
  });

  // Slots from injured players (marked by manager, still on roster)
  (S.injured[mid]||[]).forEach(pid=>{
    if(!(S.rosters[mid]||[]).includes(pid)) return;
    const p=getPlayer(pid); if(!p) return;
    const key='inj_'+pid;
    slots.push({key, type:'inj', pid, playerName:p.name, usedByPid:usage[mid+'_'+key]||null});
  });

  return slots;
}

function waiverSlotsForManager(mid){ return getWaiverSlots(mid).length; }
function waiverSlotsOpen(mid){ return getWaiverSlots(mid).filter(s=>!s.usedByPid).length; }
function getOpenSlot(mid){
  // Returns the first open slot key, or null
  const open = getWaiverSlots(mid).find(s=>!s.usedByPid);
  return open ? open.key : null;
}
function useSlot(mid, slotKey, claimedPid){
  if(!S.waiverSlotUsage) S.waiverSlotUsage={};
  S.waiverSlotUsage[mid+'_'+slotKey] = claimedPid;
}
function tokensSpent(mid){ return getWaiverSlots(mid).filter(s=>s.usedByPid).length; }



// ── Token system — delegates to getWaiverSlots for accuracy ──────
function tokensEarned(mid){ return getWaiverSlots(mid).length; }
function tokensSpentNew(mid){ return getWaiverSlots(mid).filter(s=>s.usedByPid!==null).length; }
function tokensAvailable(mid){ return waiverSlotsOpen(mid); }
function draftedIds(){return Object.values(S.rosters).flat();}
function availablePlayers(){
  const tk=draftedIds();
  const activeTeamIds = new Set(S.teams.map(t=>t.id));
  return PLAYERS.filter(p=>!tk.includes(p.id) && activeTeamIds.has(p.team) && !getTeam(p.team).eliminated);
}
function waiverPlayers(){const tk=draftedIds();const playoffTeamIds=new Set(TEAMS.map(t=>t.id));return PLAYERS.filter(p=>!tk.includes(p.id)&&playoffTeamIds.has(p.team));}

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
let waiverTeamFilter = null;
let tempMgrs = [{name:"",color:COLORS[0]},{name:"",color:COLORS[1]},{name:"",color:COLORS[2]},{name:"",color:COLORS[3]}];

// ── Persistence ───────────────────────────────────────────────────
async function saveState(){
  if(!S) return;
  const payload = {id:LEAGUE_ID, state:JSON.stringify(S), updated_at:new Date().toISOString()};
  if(db){ await db.from('leagues').upsert(payload); }
  else { try{localStorage.setItem('nba_playoff_2026',JSON.stringify(S));}catch(e){} }
}

function migrateState(){
  if(S && S.waiverClaims && !Array.isArray(S.waiverClaims)) S.waiverClaims = [];
  if(S && !S.waiverClaims) S.waiverClaims = [];
  if(S && !S.waiverPriority) S.waiverPriority = [];
  if(S && !S.avatars) S.avatars = {};
  if(S && !S.waiverAcquisitions) S.waiverAcquisitions = {};
  if(S && !S.playerStats) S.playerStats = {};
  // Always sync team list from code — remove old teams, add new ones
  if(S){
    const savedMap = {};
    (S.teams||[]).forEach(t => savedMap[t.id] = t);
    S.teams = TEAMS.map(t => ({
      ...t,
      eliminated: savedMap[t.id]?.eliminated || false,
      survivedRounds: savedMap[t.id]?.survivedRounds || 0,
    }));
    // Mark teams removed from TEAMS array as eliminated so players go to waivers
    const codeIds = new Set(TEAMS.map(t=>t.id));
    // GSW, CHA, LAC, MIA etc — force eliminated if any drafts used them
    ['GSW','CHA','LAC','MIA'].forEach(id=>{
      if(!codeIds.has(id) && !S.teams.find(t=>t.id===id)){
        // Not in active teams — already removed, good
      }
    });
  }
  return true;
}

async function loadState(){
  if(db){
    const {data} = await db.from('leagues').select('state').eq('id',LEAGUE_ID).single();
    if(data?.state){ S=JSON.parse(data.state); const changed=migrateState(); if(changed) await saveState(); return true; }
    return false;
  } else {
    try{ const raw=localStorage.getItem('nba_playoff_2026'); if(raw){S=JSON.parse(raw); migrateState(); return true;} }catch(e){}
    return false;
  }
}


// ── Auto Waiver Processing ────────────────────────────────────────
let _waiverPollingInterval = null;
let _lastWaiverProcess = 0;

async function autoProcessWaivers(){
  autoAssignChampions(); // check deadline
  if(!db || !S) return;
  // Handle waiverClaims being either array or object (legacy)
  const _claims = Array.isArray(S.waiverClaims) ? S.waiverClaims : Object.values(S.waiverClaims||{});
  if(!_claims.length) return; // nothing to do

  // Check lockout — don't process during live games
  const lockout = getWaiverLockoutStatus();
  if(lockout.locked){
    console.log('Waiver auto-process skipped — games in progress');
    return;
  }

  // Debounce — don't process more than once per 2 minutes
  const now = Date.now();
  if(now - _lastWaiverProcess < 120000) return;
  _lastWaiverProcess = now;

  console.log('Auto-processing', S.waiverClaims.length, 'waiver claim(s)...');

  // Re-fetch fresh state first to avoid stale data conflicts
  try{
    const {data} = await db.from('leagues').select('state').eq('id',LEAGUE_ID).single();
    if(data?.state) S = JSON.parse(data.state);
  }catch(e){ return; }

  const _claimsAfter = Array.isArray(S.waiverClaims) ? S.waiverClaims : Object.values(S.waiverClaims||{});
  if(!_claimsAfter.length) return; // re-check after refresh

  await _runWaiverClaims();
}

function startWaiverPolling(){
  if(_waiverPollingInterval) clearInterval(_waiverPollingInterval);
  // Check every 90 seconds — offset from 60s stats and 20s state polling
  _waiverPollingInterval = setInterval(autoProcessWaivers, 90000);
  console.log('Waiver auto-processing started (every 90s)');
}


// ── Boss Battle Champion Selection Popup ─────────────────────────
const BOSS_DEADLINE = '2026-05-04T20:00:00'; // 8PM ET May 4
const BOSS_POPUP_KEY = 'boss_popup_seen_r2_v2';

function shouldShowBossPopup(){
  const bb = getBossBattle();
  if(!bb?.active || bb?.defeated) return false;
  const mid = currentManagerId;
  if(mid === null || mid === 'viewer') return false;
  if(localStorage.getItem(BOSS_POPUP_KEY+'_'+mid)) return false;
  return true;
}



function injectBossCSS(){
  if(document.getElementById('boss-css')) return;
  const style = document.createElement('style');
  style.id = 'boss-css';
  style.textContent = `
    @keyframes boss-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    @keyframes boss-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-3px)}75%{transform:translateX(3px)}}
    @keyframes prisoner-sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
    @keyframes champ-pulse{0%,100%{filter:brightness(1)}50%{filter:brightness(1.3)}}
    @keyframes live-border{0%,100%{opacity:1}50%{opacity:0}}
    @keyframes victory-fade{from{opacity:0}to{opacity:1}}
    @keyframes victory-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
  `;
  document.head.appendChild(style);
}

function buildChampionList(roster, mid, topPlayer){
  return roster.map(p=>{
    const fp = playerStatScore(p.id, mid);
    const portrait = getActivePortrait(p.name);
    const tc = TEAM_LOGOS[p.team]?.color||'#4a9eff';
    const isTop = topPlayer?.p?.id===p.id;
    const border = isTop?'#ffcc00':'#2a1a3a';
    const bg = isTop?'rgba(255,204,0,.08)':'transparent';
    const img = portrait
      ? `<img src="${portrait}" style="width:36px;height:36px;object-fit:cover;object-position:center top;image-rendering:pixelated;border:1px solid ${tc}"/>`
      : `<div style="width:36px;height:36px;background:${tc}22;border:1px solid ${tc};display:flex;align-items:center;justify-content:center;font-size:8px;color:${tc}">${p.team}</div>`;
    return `<div onclick="selectBossChampion(${mid},${p.id})" style="display:flex;align-items:center;gap:8px;padding:6px;cursor:pointer;border:2px solid ${border};margin-bottom:3px;background:${bg}">
      ${img}
      <div style="flex:1">
        <div style="font-size:8px;color:${tc}">${p.name.split(' ').pop()}</div>
        <div style="font-size:7px;color:#888;margin-top:2px">${p.team} · ${playerFPPG(p.id,mid).toFixed(1)} FP/g</div>
      </div>
      ${isTop?'<div style="font-size:6px;color:#ffcc00;text-align:right">AUTO<br>SELECT</div>':''}
      <div style="font-size:9px;color:#ffcc00;text-align:right">+${fp.toFixed(0)}</div>
    </div>`;
  }).join('');
}

function showBossChampionPopup(){
  if(document.getElementById('boss-champion-popup')) return;
  const mid = currentManagerId;
  const bb = getBossBattle();
  const m = S.managers.find(x=>x.id===mid);
  const roster = (S.rosters[mid]||[]).map(pid=>getPlayer(pid)).filter(Boolean);
  const aColor = getAvatarColor(mid);

  // Auto-select candidate = highest FP earner on roster
  const topPlayer = roster.map(p=>({p, fp:playerStatScore(p.id,mid)}))
    .sort((a,b)=>b.fp-a.fp)[0];

  // Deadline countdown
  const deadline = new Date(BOSS_DEADLINE+'-04:00'); // ET
  const now = new Date();
  const hoursLeft = Math.max(0, Math.round((deadline-now)/36e5));

  const modal = document.createElement('div');
  modal.id = 'boss-champion-popup';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:99999;display:flex;align-items:center;justify-content:center;padding:1rem';

  // Medieval pixel font styling
  modal.innerHTML = `
  <div style="
    background:#0a0510;
    border:4px solid #8b6914;
    box-shadow:0 0 0 2px #000,0 0 0 4px #8b6914,0 0 30px rgba(139,105,20,.4),inset 0 0 30px rgba(0,0,0,.8);
    max-width:480px;width:100%;
    font-family:'Press Start 2P',monospace;
    image-rendering:pixelated;
    position:relative;
    overflow:hidden;
  ">
    <!-- Corner decorations -->
    <div style="position:absolute;top:4px;left:4px;width:12px;height:12px;border-top:3px solid #c8a020;border-left:3px solid #c8a020"></div>
    <div style="position:absolute;top:4px;right:4px;width:12px;height:12px;border-top:3px solid #c8a020;border-right:3px solid #c8a020"></div>
    <div style="position:absolute;bottom:4px;left:4px;width:12px;height:12px;border-bottom:3px solid #c8a020;border-left:3px solid #c8a020"></div>
    <div style="position:absolute;bottom:4px;right:4px;width:12px;height:12px;border-bottom:3px solid #c8a020;border-right:3px solid #c8a020"></div>

    <!-- Header -->
    <div style="background:linear-gradient(180deg,#3a1f00,#1a0a00);border-bottom:3px solid #8b6914;padding:12px;text-align:center">
      <div style="font-size:clamp(8px,2vw,11px);color:#ffcc00;text-shadow:2px 2px 0 #000,0 0 20px #ffcc0088;letter-spacing:.1em;margin-bottom:4px">⚔ BOSS BATTLE BEGINS ⚔</div>
      <div style="font-size:clamp(6px,1.5vw,8px);color:#c8a020;animation:blink .8s step-end infinite">ROUND 2 · THE BASKETBALL MONSTER AWAKENS</div>
    </div>

    <!-- Story text box (FF style) -->
    <div style="background:#050210;border:2px solid #3a2a5a;margin:12px;padding:10px;position:relative">
      <div style="position:absolute;top:-8px;left:10px;background:#050210;padding:0 6px;font-size:7px;color:#8866cc">MESSAGE</div>
      <div style="font-size:clamp(6px,1.5vw,8px);color:#ccbbee;line-height:2;letter-spacing:.05em" id="boss-story-text"></div>
    </div>

    <!-- Champion selection -->
    <div style="margin:0 12px 8px;background:#050210;border:2px solid #8b6914">
      <div style="background:#1a0f00;border-bottom:2px solid #8b6914;padding:6px 10px;font-size:7px;color:#c8a020">⚔ CHOOSE YOUR CHAMPION</div>
      <div style="max-height:200px;overflow-y:auto;padding:6px" id="boss-champion-list">
        ${buildChampionList(roster, mid, topPlayer)}
      </div>
      </div>
    </div>

    <!-- Deadline warning -->
    <div style="margin:0 12px;background:rgba(255,51,68,.1);border:1px solid #ff334455;padding:6px 10px;font-size:6px;color:#ff6666;text-align:center">
      ⏰ DEADLINE: MAY 4 AT 8PM ET (${hoursLeft}h remaining)
      <br><span style="color:#888;margin-top:3px;display:block">If you don't choose, your top scorer (${topPlayer?.p?.name?.split(' ').pop()||'?'}) is auto-selected</span>
    </div>

    <!-- Buttons -->
    <div style="display:flex;gap:8px;margin:12px;padding-top:8px;border-top:1px solid #3a2a1a">
      <button onclick="dismissBossPopup()" style="flex:1;background:#0a0510;border:2px solid #444;color:#666;font-family:'Press Start 2P',monospace;font-size:7px;padding:8px;cursor:pointer">LATER</button>
      <button onclick="goToBossTab()" style="flex:2;background:linear-gradient(180deg,#2a1500,#1a0a00);border:2px solid #ffcc00;color:#ffcc00;font-family:'Press Start 2P',monospace;font-size:7px;padding:8px;cursor:pointer;text-shadow:0 0 10px #ffcc0088">⚔ OPEN BOSS TAB</button>
    </div>
  </div>`;

  document.body.appendChild(modal);

  // Typewriter story text
  const storyLines = [
    'A terrible monster has awakened...',
    '',
    `${m?.name?.toUpperCase()}, your team is called to battle!`,
    '',
    'Choose your champion wisely.',
    'Their FP becomes your weapon.',
  ];
  let charIdx = 0, lineIdx = 0;
  const textEl = document.getElementById('boss-story-text');
  let fullText = '';
  function typeNext(){
    if(!document.getElementById('boss-champion-popup')) return;
    if(lineIdx >= storyLines.length) return;
    const line = storyLines[lineIdx];
    if(charIdx < line.length){
      fullText += line[charIdx];
      charIdx++;
      if(textEl) textEl.innerHTML = fullText.replace(/\n/g,'<br>') + '<span style="animation:blink .5s step-end infinite">▋</span>';
      setTimeout(typeNext, line[charIdx-1]==='.'?80:35);
    } else {
      fullText += '<br>';
      lineIdx++;
      charIdx = 0;
      if(textEl) textEl.innerHTML = fullText + '<span style="animation:blink .5s step-end infinite">▋</span>';
      setTimeout(typeNext, lineIdx===1?50:200);
    }
  }
  setTimeout(typeNext, 500);
}

function selectBossChampion(mid, pid){
  if(!S.bossBattle) return;
  if(!S.bossBattle.champions) S.bossBattle.champions = {};
  S.bossBattle.champions[mid] = pid;
  localStorage.setItem(BOSS_POPUP_KEY+'_'+mid, '1');
  saveState();
  render();
  const p = getPlayer(pid);
  const popup = document.getElementById('boss-champion-popup');
  if(popup){
    popup.innerHTML = "<div style=\"background:#0a0510;border:4px solid #8b6914;max-width:480px;width:100%;font-family:var(--font-pixel),monospace;padding:2rem;text-align:center\">"
      +'<div style="font-size:14px;color:#ffcc00;margin-bottom:1rem">⚔</div>'
      +'<div style="font-size:9px;color:#ffcc00;margin-bottom:.5rem">CHAMPION SELECTED!</div>'
      +'<div style="font-size:11px;color:#fff;margin-bottom:1rem">'+p?.name+'</div>'
      +'<div style="font-size:7px;color:#888;margin-bottom:1.5rem">May their FP strike true!</div>'
      +"<button onclick=\"document.getElementById('boss-champion-popup').remove();showTab('boss')\" style=\"background:#1a0f00;border:2px solid #ffcc00;color:#ffcc00;font-family:var(--font-pixel),monospace;font-size:8px;padding:10px 20px;cursor:pointer\">⚔ TO BATTLE</button>"
      +'</div>';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    setTimeout(()=>{ if(document.getElementById('boss-champion-popup')) { document.getElementById('boss-champion-popup').remove(); showTab('boss'); }}, 3000);
  }
  showToast(`${p?.name} is your champion! ⚔`,'warn');
}

function dismissBossPopup(){
  const mid = currentManagerId;
  localStorage.setItem(BOSS_POPUP_KEY+'_'+mid, 'dismissed');
  document.getElementById('boss-champion-popup')?.remove();
}

function goToBossTab(){
  document.getElementById('boss-champion-popup')?.remove();
  showTab('boss');
}

// Auto-assign champions at deadline
async function autoAssignChampions(){
  const bb = getBossBattle();
  if(!bb?.active || bb?.defeated) return;
  const now = new Date();
  const deadline = new Date(BOSS_DEADLINE+'-04:00');
  if(now < deadline) return;
  let changed = false;
  for(const m of S.managers){
    if(bb.champions?.[m.id]) continue;
    // Auto-select top FP earner
    const roster = S.rosters[m.id]||[];
    const top = roster.map(pid=>({pid,fp:playerStatScore(pid,m.id)})).sort((a,b)=>b.fp-a.fp)[0];
    if(top){ 
      if(!S.bossBattle.champions) S.bossBattle.champions={};
      S.bossBattle.champions[m.id]=top.pid;
      changed=true;
      console.log('Auto-assigned champion for',m.name,':',getPlayer(top.pid)?.name);
    }
  }
  if(changed){ await saveState(); render(); showToast('Champions auto-assigned!','info'); }
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
  let todayGames = [];
  let yGames = [];

  // Use ESPN for everything - handles upcoming, live, and final cleanly
  function parseESPNEvents(events, dayLabel){
    return events.map(e=>{
      const comps = e.competitions?.[0];
      const away = comps?.competitors?.find(c=>c.homeAway==='away');
      const home = comps?.competitors?.find(c=>c.homeAway==='home');
      const state = e.status?.type?.state;
      const completed = e.status?.type?.completed;
      return {
        _day: dayLabel,
        espnId: e.id,
        gameStatus: completed ? 3 : state==='in' ? 2 : 1,
        gameStatusText: e.status?.type?.shortDetail || '',
        awayTeam:{teamTricode:away?.team?.abbreviation||'?', score:parseInt(away?.score)||0},
        homeTeam:{teamTricode:home?.team?.abbreviation||'?', score:parseInt(home?.score)||0}
      };
    });
  }

  // Today — use ET timezone
  try{
    const etNowF = new Date(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}));
    const dateStr = `${etNowF.getFullYear()}${String(etNowF.getMonth()+1).padStart(2,'0')}${String(etNowF.getDate()).padStart(2,'0')}`;
    const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${dateStr}`);
    const data = await res.json();
    todayGames = parseESPNEvents(data?.events||[], 'today');
  }catch(e){}

  // Yesterday — only if no games today
  if(!todayGames.length){
    try{
      const etYF = new Date(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}));
      etYF.setDate(etYF.getDate()-1);
      const dateStr = `${etYF.getFullYear()}${String(etYF.getMonth()+1).padStart(2,'0')}${String(etYF.getDate()).padStart(2,'0')}`;
      const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${dateStr}`);
      const data = await res.json();
      yGames = parseESPNEvents(data?.events||[], 'yesterday').filter(g=>g.gameStatus===3);
    }catch(e){}
  }

  // Live = any game with live stats or gameStatus===2
  const gameOrder = g => {
    const hasLive = g.espnId && Object.values(livePlayerStats||{}).some(s=>s.gameId===g.espnId);
    return (g.gameStatus===2||hasLive) ? 0 : g.gameStatus===1 ? 1 : 2;
  };
  const allGames = [...todayGames, ...yGames].sort((a,b) => gameOrder(a)-gameOrder(b));

  if(!allGames.length){
    document.getElementById('scores-content').innerHTML = `<div style="padding:.625rem 1rem;font-size:13px;color:var(--text3)">No games found — check back later</div>`;
    return;
  }

  // Rebuild gameTopPlayer from latest live + saved stats
  rebuildGameTopPlayer();

  const renderGame = g => {
    const home=g.homeTeam, away=g.awayTeam;
    const status=g.gameStatusText||'';
    // Override: if we have live player stats for this game, treat it as live
    const hasLiveStats = g.espnId && Object.values(livePlayerStats||{}).some(s=>s.gameId===g.espnId);
    const isLive=(g.gameStatus===2)||hasLiveStats, isFinal=g.gameStatus===3&&!hasLiveStats, isUpcoming=g.gameStatus===1&&!hasLiveStats;
    const isYday=g._day==='yesterday';

    const awayWin = isFinal && (away.score||0) > (home.score||0);
    const homeWin = isFinal && (home.score||0) > (away.score||0);
    const awayColor = TEAM_LOGOS[espnTeamToOurs(away.teamTricode||'')]?.color || '#4a9eff';
    const homeColor = TEAM_LOGOS[espnTeamToOurs(home.teamTricode||'')]?.color || '#4a9eff';

    // Find top FP player portrait for this game
    const topPlayer = g.espnId ? gameTopPlayer[g.espnId] : null;

    // For upcoming games with no live data, find the best-known player
    // with a portrait from either team — prefer drafted players
    let previewPlayer = null;
    if(!topPlayer && isUpcoming){
      const awayTeamId = espnTeamToOurs(away.teamTricode||'');
      const homeTeamId = espnTeamToOurs(home.teamTricode||'');
      const bothTeams = [awayTeamId, homeTeamId].filter(Boolean);
      // Build pool: all players on these teams who have portraits
      const pool = PLAYERS.filter(p=>bothTeams.includes(p.team) && getActivePortrait(p.name));
      // Prefer players with most career FP (ppg proxy), alternating teams for variety
      const byTeam = {};
      bothTeams.forEach(tid=>{
        byTeam[tid] = pool.filter(p=>p.team===tid).sort((a,b)=>b.ppg-a.ppg);
      });
      // Pick one from each team — best available
      const picks = bothTeams.map(tid=>byTeam[tid]?.[0]).filter(Boolean);
      previewPlayer = picks.length ? picks[Math.floor(Date.now()/10000)%picks.length] : null;
    }

    const displayPlayer = topPlayer || (previewPlayer ? {name:previewPlayer.name, fp:null, isPreview:true} : null);

    const statusHtml = isLive
      ? `<span class="score-status live">● ${status}</span>`
      : isFinal
        ? `<span class="score-status final">${isYday?'YESTERDAY':'FINAL'}</span>`
        : `<span class="score-status upcoming">${status}</span>`;

    // Portrait
    const borderColor = isLive ? 'var(--red)' : isFinal ? 'var(--border)' : 'var(--border2)';
    const portraitHtml = displayPlayer && getActivePortrait(displayPlayer.name)
      ? `<div style="width:52px;height:52px;overflow:hidden;flex-shrink:0;position:relative;border:2px solid ${borderColor}">
          <img src="${getActivePortrait(displayPlayer.name)}" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"/>
          ${isLive&&displayPlayer.fp!=null?`<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(255,51,68,.85);font-family:'Press Start 2P',monospace;font-size:5px;color:#fff;text-align:center;padding:1px">${displayPlayer.fp>0?'+':''}${(+displayPlayer.fp).toFixed(0)} FP</div>`:''}
          ${isUpcoming?`<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.6);font-family:'Press Start 2P',monospace;font-size:4px;color:var(--accent3);text-align:center;padding:1px">TONIGHT</div>`:''}
        </div>`
      : `<div style="width:52px;height:52px;display:flex;flex-direction:column;flex-shrink:0;overflow:hidden;border:1px solid var(--border2)">
          <div style="flex:1;background:${awayColor}33"></div>
          <div style="height:1px;background:var(--border2)"></div>
          <div style="flex:1;background:${homeColor}33"></div>
        </div>`;

    const onClickAttr = (!isUpcoming && g.espnId) ? `onclick="openGameModal('${g.espnId}','${home.teamTricode}','${away.teamTricode}','${(status||'').replace(/'/g,String.fromCharCode(39))}')"` : '';
    return `<div class="score-item ${isLive?'live-game':isFinal?'final-game':'upcoming-game'}" ${onClickAttr} style="min-width:130px;flex-direction:row;gap:8px;padding:.4rem .625rem;align-items:center;${!isUpcoming&&g.espnId?'cursor:pointer':''}">
      <!-- Portrait / visual -->
      ${portraitHtml}
      <!-- Score info -->
      <div style="display:flex;flex-direction:column;gap:3px;flex:1;min-width:0">
        ${statusHtml}
        <div style="display:flex;align-items:center;gap:4px">
          <span class="score-team-abbr${awayWin?' winner':''}" style="${awayWin?'color:'+awayColor:''}">${away.teamTricode}</span>
          ${!isUpcoming?`<span class="score-num${isLive?' live':awayWin?' winner':''}" style="font-size:12px">${away.score||0}</span>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:4px">
          <span class="score-team-abbr${homeWin?' winner':''}" style="${homeWin?'color:'+homeColor:''}">${home.teamTricode}</span>
          ${!isUpcoming?`<span class="score-num${isLive?' live':homeWin?' winner':''}" style="font-size:12px">${home.score||0}</span>`:''}
        </div>
      </div>
    </div>`;
  };

  const html = allGames.map(renderGame).join('');
  const el = document.getElementById('scores-content');
  el.className = 'scores-bar-static';
  el.innerHTML = html;
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
  const snakeOrderR = buildSnake(mgrs.length, ROSTER_SIZE);
  const waiverPriorityR = [...snakeOrderR.slice(0,mgrs.length)].reverse();
  S = {
    managers: mgrs,
    commPassword: pw,
    snakeOrder: snakeOrderR,
    draftIdx: 0,
    rosters: Object.fromEntries(mgrs.map(m=>[m.id,[]])),
    injured: Object.fromEntries(mgrs.map(m=>[m.id,[]])),
    waiverAdds: Object.fromEntries(mgrs.map(m=>[m.id,0])),
    droppedFP: Object.fromEntries(mgrs.map(m=>[m.id,0])),
    waiverPriority: waiverPriorityR,
    waiverClaims: {},
    round: 1,
    teams: TEAMS.map(t=>({...t,eliminated:false,survivedRounds:0})),
  };
  document.getElementById('round-sel').value = 1;
  if(document.getElementById('m-round')) document.getElementById('m-round').textContent = 'R1';
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
  const snakeOrder = buildSnake(mgrs.length,ROSTER_SIZE);
  // Waiver priority = reverse of first-round draft order (last pick = first waiver priority)
  const firstRound = snakeOrder.slice(0, mgrs.length);
  const waiverPriority = [...firstRound].reverse();
  S = {
    managers:mgrs, commPassword:pw,
    snakeOrder, draftIdx:0,
    rosters:Object.fromEntries(mgrs.map(m=>[m.id,[]])),
    injured:Object.fromEntries(mgrs.map(m=>[m.id,[]])),
    waiverAdds:Object.fromEntries(mgrs.map(m=>[m.id,0])),
    waiverPriority,
    waiverClaims:[],
    waiverAcquisitions:{},
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
  const leagueSubEl = document.getElementById('league-sub'); if(leagueSubEl) leagueSubEl.textContent = `2026 PLAYOFFS`;
  const roundSelEl = document.getElementById('round-sel'); if(roundSelEl) roundSelEl.value = S.round||1;
  if(isCommissioner){
    document.getElementById('comm-active-bar').classList.remove('hidden');
    document.getElementById('comm-login-bar').classList.add('hidden');
  } else {
    document.getElementById('comm-login-bar').classList.remove('hidden');
    document.getElementById('comm-active-bar').classList.add('hidden');
  }
  render();
  // Default to My Team tab if logged in as a real manager
  if(currentManagerId !== null && currentManagerId !== 'viewer'){
    showTab('my-team');
    // Update topbar user identity
    const m = S.managers.find(x=>x.id===currentManagerId);
    const topbarUser = document.getElementById('topbar-user');
    const topbarAvatar = document.getElementById('topbar-avatar');
    const topbarName = document.getElementById('topbar-name');
    if(topbarUser && m){
      // Show name immediately, avatar fills in after logos load
      if(topbarAvatar){ topbarAvatar.innerHTML=''; topbarAvatar.style.borderColor = getAvatarColor(currentManagerId); }
      if(topbarName) topbarName.textContent = m.name.toUpperCase();
      topbarUser.style.opacity = '1';
      topbarUser.style.pointerEvents = 'auto';
    }
  }
  initNewsBanner();
  startPolling();
  fetchScores();
  setInterval(fetchScores, 60000);
  startChatPolling();
  startLiveStatsPolling();
  startWaiverPolling();
}

// Manager PINs
const MANAGER_PINS = {0:'3186',1:'9044',2:'7612',3:'4837',4:'5501',5:'0295'};


function backToCharacterSelect(){
  currentManagerId = null;
  try{ localStorage.removeItem('nba_mgr_2026'); }catch(e){}
  document.getElementById('main-screen').classList.add('hidden');
  showManagerPicker();
}

function showManagerPicker(){
  document.getElementById('setup-screen').classList.add('hidden');
  document.getElementById('main-screen').classList.add('hidden');
  const picker = document.getElementById('manager-picker');
  picker.classList.remove('hidden');
  picker.innerHTML = `
    <div style="min-height:100vh;background:radial-gradient(ellipse at center, #0a1628 0%, #020810 70%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;position:relative;overflow:hidden">
      <!-- Starfield -->
      <div style="position:absolute;inset:0;overflow:hidden;pointer-events:none">
        ${Array.from({length:40},(_,i)=>{
          const x=Math.random()*100,y=Math.random()*100,s=Math.random()*2+0.5,o=Math.random()*0.7+0.3;
          return '<div style="position:absolute;left:'+x+'%;top:'+y+'%;width:'+s+'px;height:'+s+'px;background:#fff;border-radius:50%;opacity:'+o+'"></div>';
        }).join('')}
      </div>

      <!-- Title -->
      <div style="font-family:var(--font-pixel),monospace;font-size:clamp(20px,5vw,36px);color:#fff;text-shadow:0 0 20px #4a8fff,4px 4px 0 #000;margin-bottom:.25rem;letter-spacing:.1em;text-align:center">NBA ARCADE</div>
      <div style="font-family:var(--font-pixel),monospace;font-size:clamp(7px,1.5vw,10px);color:var(--accent3);margin-bottom:1.5rem;letter-spacing:.15em;text-align:center">SELECT YOUR CHARACTER</div>

      <!-- Character grid — 3x2 -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:560px;width:100%;margin-bottom:12px">
        ${S.managers.map((m,i)=>{
          const ac = getAvatarColor(m.id);
          const portrait = Object.values(PLAYER_PORTRAITS||{}).length > 0 ? null : null; // use avatar
          const rank = managerTotal(m.id);
          return '<div onclick="pickCharacter('+m.id+')" style="cursor:pointer;background:#0a1628;border:3px solid '+ac+';padding:4px;position:relative;transition:all .1s;box-shadow:0 0 12px '+ac+'44" class="char-card">'
            +'<div style="background:#05101e;aspect-ratio:1;display:flex;align-items:center;justify-content:center;overflow:hidden;border:1px solid '+ac+'44;margin-bottom:4px">'
            +getAvatar(m.id,'lg')
            +'</div>'
            +'<div style="font-family:var(--font-pixel),monospace;font-size:clamp(6px,1.5vw,9px);color:'+ac+';text-align:center;padding:3px 0;text-shadow:1px 1px 0 #000;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+m.name.toUpperCase()+'</div>'
            +'</div>';
        }).join('')}
      </div>

      <!-- Viewer shadow figure — bottom right of grid -->
      <div onclick="selectManager('viewer')" style="cursor:pointer;opacity:.6;transition:opacity .2s;max-width:560px;width:100%;display:flex;justify-content:flex-end" onmouseenter="this.style.opacity=1" onmouseleave="this.style.opacity=.6">
        <div style="background:#050e1a;border:2px dashed #333;padding:4px;width:calc(33.33% - 7px)">
          <div style="background:#030a12;aspect-ratio:1;display:flex;align-items:center;justify-content:center;border:1px solid #222">
            <!-- Shadow silhouette -->
            <svg width="70%" height="70%" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="30" cy="20" rx="12" ry="14" fill="#1a1a2e"/>
              <rect x="18" y="32" width="24" height="20" rx="4" fill="#1a1a2e"/>
              <ellipse cx="30" cy="54" rx="14" ry="4" fill="#111" opacity=".5"/>
            </svg>
          </div>
          <div style="font-family:var(--font-pixel),monospace;font-size:clamp(5px,1.2vw,7px);color:#333;text-align:center;padding:3px 0">VIEWER</div>
        </div>
      </div>

      <!-- PIN modal (hidden by default) -->
      <div id="pin-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:100;align-items:center;justify-content:center">
        <div style="background:#0a1628;border:3px solid var(--accent);padding:1.5rem;max-width:280px;width:90%;text-align:center">
          <div style="font-family:var(--font-pixel),monospace;font-size:10px;color:var(--accent3);margin-bottom:1rem" id="pin-prompt-name">ENTER PIN</div>
          <div id="pin-display" style="font-family:var(--font-pixel),monospace;font-size:24px;color:var(--accent2);letter-spacing:.5em;margin-bottom:1.25rem;min-height:36px">____</div>
          <!-- Numpad -->
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:.75rem">
            ${[1,2,3,4,5,6,7,8,9].map(n=>'<button onclick="pinKey('+n+')" style="background:#051020;border:2px solid #1a3a5e;color:var(--text);font-family:var(--font-pixel),monospace;font-size:14px;padding:.6rem;cursor:pointer">'+n+'</button>').join('')}
            <button onclick="pinKey(0)" style="background:#051020;border:2px solid #1a3a5e;color:var(--text);font-family:var(--font-pixel),monospace;font-size:14px;padding:.6rem;cursor:pointer;grid-column:2">0</button>
          </div>
          <div style="display:flex;gap:8px">
            <button onclick="pinClear()" style="flex:1;background:#051020;border:2px solid #cc2020;color:#cc2020;font-family:var(--font-pixel),monospace;font-size:9px;padding:.5rem;cursor:pointer">CLEAR</button>
            <button onclick="pinSubmit()" style="flex:1;background:#051020;border:2px solid var(--green);color:var(--green);font-family:var(--font-pixel),monospace;font-size:9px;padding:.5rem;cursor:pointer">GO</button>
          </div>
          <div id="pin-error" style="font-family:var(--font-pixel),monospace;font-size:8px;color:var(--red);margin-top:.75rem;min-height:16px"></div>
        </div>
      </div>
    </div>`;
}

// PIN system
let _pinManagerId = null;
let _pinEntry = '';

function pickCharacter(mid){
  // Check if PIN is needed
  if(MANAGER_PINS[mid]){
    _pinManagerId = mid;
    _pinEntry = '';
    const m = S.managers.find(x=>x.id===mid);
    document.getElementById('pin-prompt-name').textContent = (m?.name||'').toUpperCase() + ' — ENTER PIN';
    document.getElementById('pin-display').textContent = '____';
    document.getElementById('pin-error').textContent = '';
    document.getElementById('pin-modal').style.display = 'flex';
  } else {
    selectManager(mid);
  }
}

function pinKey(n){
  if(_pinEntry.length >= 4) return;
  _pinEntry += String(n);
  const masked = _pinEntry.padEnd(4,'_').split('').map((c,i)=>i<_pinEntry.length?'●':'_').join(' ');
  document.getElementById('pin-display').textContent = masked;
  if(_pinEntry.length === 4) setTimeout(pinSubmit, 200);
}

function pinClear(){
  _pinEntry = '';
  document.getElementById('pin-display').textContent = '_ _ _ _';
  document.getElementById('pin-error').textContent = '';
}

function pinSubmit(){
  if(_pinEntry === MANAGER_PINS[_pinManagerId]){
    document.getElementById('pin-modal').style.display = 'none';
    selectManager(_pinManagerId);
  } else {
    document.getElementById('pin-error').textContent = '✗ WRONG PIN';
    _pinEntry = '';
    document.getElementById('pin-display').textContent = '_ _ _ _';
    // Shake animation
    const modal = document.getElementById('pin-modal').firstElementChild;
    modal.style.animation = 'pin-shake .3s ease';
    setTimeout(()=>modal.style.animation='',350);
  }
}

function selectManager(id){
  currentManagerId = id;
  try{ localStorage.setItem('nba_mgr_2026', String(id)); }catch(e){}
  document.getElementById('manager-picker').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
  // Show topbar user identity
  const topbarUser = document.getElementById('topbar-user');
  const topbarAvatar = document.getElementById('topbar-avatar');
  const topbarName = document.getElementById('topbar-name');
  if(topbarUser && id !== 'viewer'){
    const m = S.managers.find(x=>x.id===id);
    if(topbarAvatar) topbarAvatar.innerHTML = getAvatar(id,'sm');
    if(topbarAvatar) topbarAvatar.style.borderColor = getAvatarColor(id);
    if(topbarName) topbarName.textContent = m?.name?.toUpperCase()||'';
    topbarUser.style.opacity = '1';
    topbarUser.style.pointerEvents = 'auto';
    // Default to MY TEAM tab if logged in as manager
    showTab('my-team');
  } else if(topbarUser){
    topbarUser.style.opacity = '0';
    topbarUser.style.pointerEvents = 'none';
  }
  const leagueSubEl = document.getElementById('league-sub'); if(leagueSubEl) leagueSubEl.textContent = `2026 PLAYOFFS`;
  const roundSelEl = document.getElementById('round-sel'); if(roundSelEl) roundSelEl.value = S.round||1;
  // Auto-commissioner for Dave (id=4)
  if(id === 4){
    isCommissioner = true;
    document.getElementById('comm-active-bar').classList.remove('hidden');
    document.getElementById('comm-login-bar').classList.add('hidden');
  } else {
    isCommissioner = false;
    document.getElementById('comm-login-bar').classList.remove('hidden');
    document.getElementById('comm-active-bar').classList.add('hidden');
  }
  render();
  // Default to My Team tab if logged in as a real manager
  if(currentManagerId !== null && currentManagerId !== 'viewer'){
    showTab('my-team');
    // Update topbar user identity
    const m = S.managers.find(x=>x.id===currentManagerId);
    const topbarUser = document.getElementById('topbar-user');
    const topbarAvatar = document.getElementById('topbar-avatar');
    const topbarName = document.getElementById('topbar-name');
    if(topbarUser && m){
      // Show name immediately, avatar fills in after logos load
      if(topbarAvatar){ topbarAvatar.innerHTML=''; topbarAvatar.style.borderColor = getAvatarColor(currentManagerId); }
      if(topbarName) topbarName.textContent = m.name.toUpperCase();
      topbarUser.style.opacity = '1';
      topbarUser.style.pointerEvents = 'auto';
    }
  }
  initNewsBanner();
  startPolling();
  fetchScores();
  setInterval(fetchScores, 60000);
  startChatPolling();
  startLiveStatsPolling();
  startWaiverPolling();
}

// ── Actions ───────────────────────────────────────────────────────
async function renameMgr(id,val){
  const m=S.managers.find(x=>x.id===id); if(!m) return;
  const t=val.trim(); if(t){m.name=t;m.initials=initials(t);}
  await saveState(); render();
}
async function setRound(r){S.round=r;if(document.getElementById('m-round'))document.getElementById('m-round').textContent='R'+r;await saveState();render();}
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
// ── Waiver claim system ────────────────────────────────────────────
function getWaiverPriority(){return S.waiverPriority||[];}

function managerPriorityRank(mid){
  const p=getWaiverPriority();
  const idx=p.indexOf(mid);
  return idx===-1?999:idx;
}

function managerActiveClaim(mid){
  if(!S.waiverClaims) return null;
  for(const [pid,claim] of Object.entries(S.waiverClaims)){
    if(claim.managerId===mid) return {pid:parseInt(pid),...claim};
  }
  return null;
}

function managerClaimsCount(mid){
  if(!S.waiverClaims) return 0;
  return S.waiverClaims.filter(c=>c.managerId===mid).length;
}

function managerAllClaims(mid){
  if(!S.waiverClaims) return [];
  return S.waiverClaims
    .filter(c=>c.managerId===mid)
    .sort((a,b)=>new Date(a.submittedAt)-new Date(b.submittedAt));
}


// ── Waiver Lockout: no claims between first tip-off and last game final ──
function getWaiverLockoutStatus(){
  // Returns {locked: bool, reason: string}
  // Uses the scores fetched by fetchScores — stored in window._todayGames
  const games = window._todayGames || [];
  if(!games.length) return {locked:false, reason:''};

  const hasLive    = games.some(g => g.gameStatus===2 || (g.espnId && Object.values(livePlayerStats||{}).some(s=>s.gameId===g.espnId)));
  const hasUpcoming= games.some(g => g.gameStatus===1 && !(g.espnId && Object.values(livePlayerStats||{}).some(s=>s.gameId===g.espnId)));
  const allFinal   = games.every(g => g.gameStatus===3);

  if(allFinal) return {locked:false, reason:''};
  if(hasLive || (!hasUpcoming && !allFinal)){
    // At least one game is live or in progress — locked
    const liveCount = games.filter(g=>g.gameStatus===2||(g.espnId&&Object.values(livePlayerStats||{}).some(s=>s.gameId===g.espnId))).length;
    const remaining = games.filter(g=>g.gameStatus!==3).length;
    return {
      locked: true,
      reason: `WAIVERS LOCKED — ${liveCount} game${liveCount!==1?'s':''} in progress. Claims reopen when all ${games.length} games today are final.`
    };
  }
  return {locked:false, reason:''};
}

async function submitClaim(pid,mid){
  if(!isCommissioner && currentManagerId !== mid){showToast('You can only submit claims for your own team','error');return;}
  // Check waiver lockout — no claims during game day
  const lockout = getWaiverLockoutStatus();
  if(lockout.locked && !isCommissioner){
    showToast(lockout.reason, 'error');
    alert('⛔ ' + lockout.reason);
    return;
  }
  if(waiverSlotsOpen(mid)<=0){alert('YOU HAVE NO OPEN WAIVER SLOTS');return;}
  // Check how many claims this manager already has vs how many slots they have
  const existingClaims = managerClaimsCount(mid);
  const openSlots = waiverSlotsOpen(mid);
  if(existingClaims>=openSlots){
    alert(`YOU ALREADY HAVE ${existingClaims} CLAIM${existingClaims>1?'S':''} QUEUED — EQUAL TO YOUR OPEN SLOTS (${openSlots}). CANCEL ONE FIRST OR WAIT FOR PROCESSING.`);
    return;
  }
  // Check not already claiming this player
  if(!S.waiverClaims) S.waiverClaims=[];
  if(S.waiverClaims.find(c=>c.pid===pid&&c.managerId===mid)){
    alert('YOU ALREADY HAVE A CLAIM ON THIS PLAYER');return;
  }
  const m = S.managers.find(x=>x.id===mid);
  S.waiverClaims.push({
    pid,
    managerId: mid,
    managerName: m.name,
    managerColor: m.color,
    managerInitials: m.initials,
    submittedAt: new Date().toISOString(),
  });
  await saveState(); render();
}

async function cancelClaim(pid,mid){
  if(!S.waiverClaims) return;
  S.waiverClaims = S.waiverClaims.filter(c=>!(c.pid===pid&&c.managerId===mid));
  await saveState(); render();
}

async function processWaiverClaims(){
  // Manual trigger — commissioner only with confirm dialog
  if(!isCommissioner){alert('COMMISSIONER ACCESS REQUIRED');return;}
  if(!Array.isArray(S.waiverClaims)) S.waiverClaims = Object.values(S.waiverClaims||{});
  if(!S.waiverClaims||S.waiverClaims.length===0){alert('NO PENDING CLAIMS TO PROCESS');return;}
  if(!confirm('PROCESS ALL WAIVER CLAIMS NOW?\n\nHigher priority managers win ties. This cannot be undone.')) return;
  await _runWaiverClaims();
}

async function _runWaiverClaims(){
  // Core processing logic — no prompts, safe for auto-processing
  if(!Array.isArray(S.waiverClaims)) S.waiverClaims = Object.values(S.waiverClaims||{});

  const priority = getWaiverPriority();
  const results = [];
  const claimedPids = new Set();
  const managersWhoWon = new Set();

  // Get all claims sorted by submission time within each manager
  const claimEntries = [...(S.waiverClaims||[])];

  // Process round by round: each pass through priority order awards one claim per manager
  // A manager can win multiple claims but drops to bottom after each win
  let currentPriority = [...priority];
  const remainingClaims = [...claimEntries];
  let maxRounds = 10; // safety limit

  while(remainingClaims.length > 0 && maxRounds-- > 0){
    let anyProcessed = false;
    const nextPriority = [];
    const roundWinners = new Set();

    for(const mid of currentPriority){
      // Get this manager's earliest unprocessed claim
      const mgrClaims = remainingClaims
        .filter(c=>c.managerId===mid)
        .sort((a,b)=>new Date(a.submittedAt)-new Date(b.submittedAt));

      if(mgrClaims.length===0){ nextPriority.push(mid); continue; }

      const claim = mgrClaims[0];

      if(claimedPids.has(claim.pid)){
        // Player taken — claim fails, remove it, manager keeps priority
        const idx = remainingClaims.findIndex(c=>c.managerId===mid&&c.pid===claim.pid);
        if(idx>-1) remainingClaims.splice(idx,1);
        results.push({mid, name:claim.managerName, pid:claim.pid, won:false, reason:'taken by higher priority'});
        nextPriority.push(mid);
        anyProcessed=true;
        continue;
      }

      if(waiverSlotsOpen(mid)<=0){
        const idx = remainingClaims.findIndex(c=>c.managerId===mid&&c.pid===claim.pid);
        if(idx>-1) remainingClaims.splice(idx,1);
        results.push({mid, name:claim.managerName, pid:claim.pid, won:false, reason:'no slot'});
        nextPriority.push(mid);
        anyProcessed=true;
        continue;
      }

      // Claim succeeds — add new player, remove dropped player
      S.rosters[mid].push(claim.pid);
      // Use the open slot (per-source tracking)
      const openSlotKey = getOpenSlot(mid);
      if(openSlotKey) useSlot(mid, openSlotKey, claim.pid);
      else S.waiverAdds[mid]=(S.waiverAdds[mid]||0)+1; // fallback
      // Record acquisition date so we only count stats earned AFTER pickup
      if(!S.waiverAcquisitions) S.waiverAcquisitions={};
      const acqDate = new Date().toISOString().split('T')[0].replace(/-/g,'');
      S.waiverAcquisitions[mid+'_'+claim.pid] = acqDate;
      claimedPids.add(claim.pid);
      managersWhoWon.add(mid);
      // Remove the dropped player from roster — preserve their earned FP
      if(claim.dropPid){
        // Save their FP before removing — use mid filter so only counts FP earned while on THIS manager's roster
        const droppedFP = playerStatScore(claim.dropPid, mid);
        if(!S.droppedFP) S.droppedFP = {};
        S.droppedFP[mid] = (S.droppedFP[mid]||0) + droppedFP;
        S.rosters[mid] = S.rosters[mid].filter(p=>p!==claim.dropPid);
        if(S.injured[mid]) S.injured[mid] = S.injured[mid].filter(p=>p!==claim.dropPid);
      } else {
        // Auto-drop: remove the first injured player from this manager's roster
        const injuredOnRoster = (S.injured[mid]||[]).filter(p=>S.rosters[mid].includes(p));
        if(injuredOnRoster.length>0){
          const autoDrop = injuredOnRoster[0];
          const droppedFP = playerStatScore(autoDrop, mid); // filter by mid
          if(!S.droppedFP) S.droppedFP = {};
          S.droppedFP[mid] = (S.droppedFP[mid]||0) + droppedFP;
          S.rosters[mid] = S.rosters[mid].filter(p=>p!==autoDrop);
          S.injured[mid] = (S.injured[mid]||[]).filter(p=>p!==autoDrop);
          claim.dropPid = autoDrop;
        }
      }
      const idx = remainingClaims.findIndex(c=>c.managerId===mid&&c.pid===claim.pid);
      if(idx>-1) remainingClaims.splice(idx,1);
      const dropName = claim.dropPid ? getPlayer(claim.dropPid)?.name : null;
      results.push({mid, name:claim.managerName, pid:claim.pid, dropPid:claim.dropPid, dropName, won:true});
      if(!S.waiverLog) S.waiverLog = [];
      S.waiverLog.unshift({ts:new Date().toISOString(),managerId:mid,managerName:claim.managerName,addPid:claim.pid,addName:getPlayer(claim.pid)?.name||'?',dropPid:claim.dropPid||null,dropName:dropName||null,droppedFP:claim.dropPid?playerStatScore(claim.dropPid,mid):0,round:S.round||1});
      if(S.waiverLog.length>50) S.waiverLog=S.waiverLog.slice(0,50);
      roundWinners.add(mid);
      anyProcessed=true;
      // Winners go to bottom within this round's processing
    }

    // Rebuild priority: non-winners first (preserving order), then winners
    const roundNonWinners = currentPriority.filter(mid=>!roundWinners.has(mid));
    const roundWinnersList = currentPriority.filter(mid=>roundWinners.has(mid));
    currentPriority = [...roundNonWinners, ...roundWinnersList];

    if(!anyProcessed) break;
  }

  S.waiverPriority = currentPriority;

  // Clear all processed claims
  S.waiverClaims = [];

  await saveState(); render();

  // Post results to chat + show toast (no blocking alert)
  if(results.length){
    const msg = '🏀 WAIVER CLAIMS PROCESSED:\n' + results.map(r=>{
      const p = getPlayer(r.pid);
      return r.won
        ? `✅ ${r.name} → ${p?p.name:'?'}`
        : `❌ ${r.name} missed ${p?p.name:'?'}${r.reason?' ('+r.reason+')':''}`;
    }).join('\n');
    try{
      const chatState = await loadChatState();
      chatState.push({id:Date.now(),name:'NBA ARCADE',managerId:'system',avatarIdx:0,text:msg,ts:new Date().toISOString()});
      await db.from('leagues').upsert({id:'nba-chat-2026',state:JSON.stringify(chatState)});
    }catch(e){}
    const wonCount = results.filter(r=>r.won).length;
    if(wonCount) showToast(`✅ ${wonCount} waiver claim${wonCount>1?'s':''} processed!`,'info');
  }
}

async function addFromWaiver(pid,mid){
  if(waiverSlotsOpen(mid)<=0){alert(`${S.managers[mid].name} HAS NO OPEN WAIVER SLOTS`);return;}
  S.rosters[mid].push(pid);
  const _openKey = getOpenSlot(mid);
  if(_openKey) useSlot(mid, _openKey, pid);
  else S.waiverAdds[mid]=(S.waiverAdds[mid]||0)+1;
  if(!S.waiverAcquisitions) S.waiverAcquisitions={};
  S.waiverAcquisitions[mid+'_'+pid] = S.round||1;
  await saveState(); render();
}
async function markInjured(mid,pid){
  // Allow manager of that roster OR commissioner
  if(!isCommissioner && currentManagerId !== mid){alert('ONLY YOUR OWN PLAYERS CAN BE MARKED INJURED');return;}
  const p = getPlayer(pid);
  const m = S.managers.find(x=>x.id===mid);
  if(!confirm(`DROP ${p?.name||pid}?

This will:
• Remove them from your roster
• Bank their earned FP
• Open a waiver slot to claim a replacement`)) return;

  // Bank their FP (filtered to only what was earned while on this roster)
  const earnedFP = playerStatScore(pid, mid);
  if(!S.droppedFP) S.droppedFP = {};
  S.droppedFP[mid] = (S.droppedFP[mid]||0) + earnedFP;

  // Create waiver slot BEFORE removing from roster
  if(!S.waiverSlotUsage) S.waiverSlotUsage = {};
  const slotKey = mid+'_inj_'+pid;
  if(!S.waiverSlotUsage.hasOwnProperty(slotKey)){
    S.waiverSlotUsage[slotKey] = null; // open slot
  }

  // Remove from roster and injured list
  S.rosters[mid] = (S.rosters[mid]||[]).filter(x=>x!==pid);
  S.injured[mid] = (S.injured[mid]||[]).filter(x=>x!==pid);

  // Log to waiver log
  if(!S.waiverLog) S.waiverLog = [];
  S.waiverLog.unshift({
    ts: new Date().toISOString(),
    managerId: mid,
    managerName: m?.name||'Unknown',
    addPid: null,
    addName: null,
    dropPid: pid,
    dropName: p?.name||'Unknown',
    droppedFP: earnedFP,
    round: S.round||1
  });

  await saveState();
  render();
  showToast(`${p?.name} dropped — ${earnedFP.toFixed(0)} FP banked, waiver slot opened`, 'warn');
  await saveInjuryNotification(m?.name||'Unknown', p?.name||'Unknown');
}
async function clearInjury(mid,pid){
  if(!isCommissioner && currentManagerId !== mid){alert('ONLY YOUR OWN PLAYERS CAN BE CLEARED');return;}
  S.injured[mid]=(S.injured[mid]||[]).filter(x=>x!==pid);
  await saveState();render();
}

async function saveInjuryNotification(managerName, playerName){
  try{
    // Show in-app toast
    showToast(`🤕 ${playerName} marked DTD`, 'warn');

    // Store in Supabase so commissioner sees it
    if(!S.injuryNotifications) S.injuryNotifications = [];
    S.injuryNotifications.unshift({
      managerName, playerName,
      timestamp: new Date().toISOString(),
      read: false
    });
    if(S.injuryNotifications.length > 20) S.injuryNotifications = S.injuryNotifications.slice(0,20);
    await saveState();

  }catch(e){ console.warn('Injury notification error:', e); }
}

async function markNotifsRead(){
  if(S.injuryNotifications) S.injuryNotifications.forEach(n=>n.read=true);
  await saveState(); render();
}

function showToast(msg, type='info'){
  const toast = document.createElement('div');
  const bg = type==='warn'?'#ff9900':type==='error'?'var(--red)':'var(--accent)';
  toast.style.cssText = `position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:${bg};color:#000;font-family:'Press Start 2P',monospace;font-size:9px;padding:10px 16px;z-index:99999;white-space:nowrap;box-shadow:0 4px 20px rgba(0,0,0,.5);border:2px solid rgba(255,255,255,.2)`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(()=>toast.remove(), 4000);
}
async function toggleElim(tid){
  if(!isCommissioner){alert('COMMISSIONER ACCESS REQUIRED');return;}
  const t=S.teams.find(x=>x.id===tid);
  t.eliminated=!t.eliminated;
  if(t.eliminated){
    // Auto-remove eliminated players from all rosters, bank their FP, create waiver slots
    const affectedMgrNames = [];
    if(!S.droppedFP) S.droppedFP={};
    if(!S.waiverSlotUsage) S.waiverSlotUsage={};
    for(const m of S.managers){
      const elimPids = (S.rosters[m.id]||[]).filter(pid=>getPlayer(pid)?.team===tid);
      if(!elimPids.length) continue;
      affectedMgrNames.push(m.name);
      for(const pid of elimPids){
        // Bank their accumulated FP
        const fp = playerStatScore(pid, m.id);
        S.droppedFP[m.id] = (S.droppedFP[m.id]||0) + fp;
        // Create an open waiver slot — stored as null (unclaimed)
        const slotKey = m.id+'_elim_'+pid;
        if(!S.waiverSlotUsage.hasOwnProperty(slotKey)){
          S.waiverSlotUsage[slotKey] = null;
        }
        // Remove from roster
        S.rosters[m.id] = S.rosters[m.id].filter(p=>p!==pid);
        // Clear from injured list if there
        if(S.injured[m.id]) S.injured[m.id] = S.injured[m.id].filter(p=>p!==pid);
      }
    }
    // Post chat notification
    const msg = `🚨 ${t.name} ELIMINATED — players auto-removed from rosters. Points banked. Waiver slots open for: ${affectedMgrNames.length?affectedMgrNames.join(', '):'no one'}`;
    try{
      const chatState = await loadChatState();
      chatState.push({id:Date.now(),name:'NBA ARCADE',managerId:'system',avatarIdx:0,text:msg,ts:new Date().toISOString()});
      await db.from('leagues').upsert({id:'nba-chat-2026',state:JSON.stringify(chatState)});
    }catch(e){}
    showToast(t.name+' eliminated! Players removed, FP banked, slots opened.','warn');
  }
  await saveState();render();
}
async function setSurvivedRounds(tid,r){
  if(!isCommissioner){alert('COMMISSIONER ACCESS REQUIRED');return;}
  S.teams.find(x=>x.id===tid).survivedRounds=parseInt(r);
  await saveState();render();
}

// ── UI ────────────────────────────────────────────────────────────
function showTab(name){
  // Handle all known tabs including my-team
  const allTabIds = [...ALL_TABS, 'my-team'].filter((v,i,a)=>a.indexOf(v)===i);
  allTabIds.forEach(t=>{
    const el=document.getElementById('tab-'+t);
    if(el) el.classList.toggle('hidden',t!==name);
  });
  document.querySelectorAll('.tab').forEach(el=>el.classList.toggle('active', el.id==='draft-tab' ? name==='draft' : el.getAttribute('onclick')?.includes(`'${name}'`)));
}

function render(){
  renderMyTeam();renderBossBattle();renderStandings();try{renderTopLeaderboard();}catch(e){console.warn("renderTopLeaderboard:",e.message);}renderNameEdit();renderDraft();renderWaiver();renderRosters();renderScoring();renderBracket();renderDraftBanner();renderTeams();renderTopPlayersBanner();renderWaiverLog();
  // Update draft tab appearance
  const draftTab = document.getElementById('draft-tab');
  if(draftTab && S){
    const done = S.draftIdx >= S.snakeOrder.length && S.snakeOrder.length > 0;
    draftTab.style.opacity = done ? '0.45' : '1';
    draftTab.style.color = done ? 'var(--text3)' : '';
    draftTab.style.borderColor = done ? 'var(--border)' : '';
    draftTab.innerHTML = done ? 'DRAFT <span style="font-size:8px;color:var(--text3)">OVER</span>' : 'DRAFT';
  }
  if(document.getElementById('m-avail')) document.getElementById('m-avail').textContent=waiverPlayers().length;
}

function renderDraftBanner(){
  const banner = document.getElementById('draft-banner');
  const inner = document.getElementById('draft-banner-inner');
  if(!banner || !inner || !S) return;

  const done = S.draftIdx >= S.snakeOrder.length;
  const draftStarted = S.draftIdx > 0;

  if(done || !S.snakeOrder.length){
    banner.classList.remove('active');
    return;
  }

  const onClockId = S.snakeOrder[S.draftIdx];
  const onClockMgr = S.managers.find(m=>m.id===onClockId);
  if(!onClockMgr){ banner.classList.remove('active'); return; }

  const pickNum = S.draftIdx + 1;
  const total = S.snakeOrder.length;
  const aColor = getAvatarColor(onClockId);

  // Build repeating marquee content (duplicate for seamless loop)
  const item = `<span class="draft-banner-item">
    ⏰ PICK ${pickNum} OF ${total} &nbsp;·&nbsp; ON THE CLOCK:
    <span class="blink-name" style="color:${aColor}">${onClockMgr.name.toUpperCase()}</span>
    &nbsp;·&nbsp; GO TO THE DRAFT TAB TO PICK
  </span><span class="draft-banner-sep">🏀</span>`;

  inner.innerHTML = item.repeat(6);
  banner.classList.add('active');
}


// ── MY TEAM TAB ──────────────────────────────────────────────────

function renderMiniStandings(){
  const el = document.getElementById('mini-standings-content');
  if(!el) return;
  const sorted = [...S.managers].sort((a,b)=>managerTotal(b.id)-managerTotal(a.id));
  el.innerHTML = sorted.map((m,i)=>{
    const aColor = getAvatarColor(m.id);
    const total = managerTotal(m.id);
    const isMe = currentManagerId !== 'viewer' && currentManagerId === m.id;
    const medal = i===0?'🥇':i===1?'🥈':i===2?'🥉':'';
    return `<div onclick="showTab('standings')" style="display:flex;align-items:center;gap:5px;padding:3px 8px;border:1px solid ${isMe?aColor:'var(--border2)'};background:${isMe?aColor+'18':'transparent'};cursor:pointer;flex-shrink:0;border-radius:2px">
      <div style="width:20px;height:20px;border:1px solid ${aColor};display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0">${getAvatar(m.id,'sm')}</div>
      <span style="font-family:'Press Start 2P',monospace;font-size:7px;color:${aColor}">${total}</span>
      ${medal?`<span style="font-size:10px">${medal}</span>`:''}
    </div>`;
  }).join('');
}

function renderMyTeam(){
  const el = document.getElementById('my-team-content');
  if(!el) return;
  const mid = currentManagerId;
  if(mid === null || mid === 'viewer'){
    el.innerHTML = '<div style="padding:1.5rem;text-align:center;color:var(--text3);font-family:var(--font-pixel),monospace;font-size:9px">LOG IN TO SEE YOUR TEAM</div>';
    return;
  }
  const m = S.managers.find(x=>x.id===mid);
  if(!m){ el.innerHTML=''; return; }
  const aColor = getAvatarColor(mid);
  const roster = S.rosters[mid]||[];
  const total = managerTotal(mid);
  const stat = managerStatScore(mid);
  const bonus = managerBonusScore(mid);

  // ── Today's FP (saved + live) ──
  const etNow = new Date(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}));
  const todayStr = [etNow.getFullYear(),String(etNow.getMonth()+1).padStart(2,'0'),String(etNow.getDate()).padStart(2,'0')].join('');
  const yestDate = new Date(etNow); yestDate.setDate(yestDate.getDate()-1);
  const yestStr = [yestDate.getFullYear(),String(yestDate.getMonth()+1).padStart(2,'0'),String(yestDate.getDate()).padStart(2,'0')].join('');

  // Build today game IDs
  const todayGameIds = new Set();
  Object.values(livePlayerStats||{}).forEach(s=>{ if(s.gameId) todayGameIds.add(s.gameId); });
  Object.values(S.playerStats||{}).forEach(s=>{ if(s.date===todayStr && s.gameId) todayGameIds.add(s.gameId); });
  if(!todayGameIds.size) Object.values(S.playerStats||{}).forEach(s=>{ if(s.date===yestStr && s.gameId) todayGameIds.add(s.gameId); });

  const todayFP = roster.reduce((sum,pid)=>{
    const acqDate = S.waiverAcquisitions?.[mid+'_'+pid]||null;
    let fp=0;
    Object.values(S.playerStats||{}).filter(s=>s.pid===pid&&todayGameIds.has(s.gameId)).forEach(s=>{
      if(!acqDate||s.date>=acqDate) fp+=s.fp||0;
    });
    const live = livePlayerStats[pid];
    if(live && todayGameIds.has(live.gameId)){
      const saved = Object.values(S.playerStats||{}).some(s=>s.pid===pid&&s.gameId===live.gameId);
      if(!saved) fp+=live.fp||0;
    }
    return sum+fp;
  },0);

  // ── Per-round FP breakdown ──
  const roundDates = {1:[],2:[],3:[],4:[]};
  Object.values(S.playerStats||{}).forEach(s=>{
    const p=getPlayer(s.pid); if(!p||!roster.includes(s.pid)) return;
    const t=getTeam(p.team); if(!t) return;
    // approximate round by game date vs round start dates
    const d=parseInt(s.date||0);
    const r = d>=20260604?4:d>=20260519?3:d>=20260505?2:1;
    if(!roundDates[r]) roundDates[r]=[];
    const acqDate=S.waiverAcquisitions?.[mid+'_'+s.pid]||null;
    if(!acqDate||s.date>=acqDate) roundDates[r].push(s.fp||0);
  });
  const roundFP = {1:0,2:0,3:0,4:0};
  Object.entries(roundDates).forEach(([r,fps])=>roundFP[r]=fps.reduce((a,b)=>a+b,0));
  // Add droppedFP to R1 (dropped players like KD earned those points in R1)
  roundFP[1] = +(roundFP[1] + ((S.droppedFP&&S.droppedFP[mid])||0)).toFixed(1);

  // ── Best game day ──
  const dayTotals = {};
  Object.values(S.playerStats||{}).filter(s=>roster.includes(s.pid)).forEach(s=>{
    const acqDate=S.waiverAcquisitions?.[mid+'_'+s.pid]||null;
    if(acqDate&&s.date<acqDate) return;
    dayTotals[s.date] = (dayTotals[s.date]||0)+(s.fp||0);
  });
  const bestDay = Object.entries(dayTotals).sort((a,b)=>b[1]-a[1])[0];
  const bestDayFmt = bestDay ? new Date(bestDay[0].replace(/(\d{4})(\d{2})(\d{2})/,'$1-$2-$3')).toLocaleDateString('en-US',{month:'short',day:'numeric'}) : null;

  // ── Best individual game ──
  const allPlayerGames = Object.values(S.playerStats||{}).filter(s=>roster.includes(s.pid)).map(s=>{
    const acqDate=S.waiverAcquisitions?.[mid+'_'+s.pid]||null;
    if(acqDate&&s.date<acqDate) return null;
    return {pid:s.pid,fp:s.fp||0,date:s.date,name:getPlayer(s.pid)?.name||''};
  }).filter(Boolean);
  const bestGame = allPlayerGames.sort((a,b)=>b.fp-a.fp)[0];
  const bestGameFmt = bestGame ? new Date(bestGame.date.replace(/(\d{4})(\d{2})(\d{2})/,'$1-$2-$3')).toLocaleDateString('en-US',{month:'short',day:'numeric'}) : null;

  // ── Round MVP (best FPPG) ──
  const mvpData = roster.map(pid=>{
    const p=getPlayer(pid); if(!p) return null;
    return {pid, name:p.name, fppg:playerFPPG(pid,mid), gp:playerGamesPlayedForManager(pid,mid)};
  }).filter(x=>x&&x.gp>0).sort((a,b)=>b.fppg-a.fppg)[0];

  // ── Live players right now ──
  const livePids = roster.filter(pid=>isPlayerLive(pid));

  // ── Watchlist ──
  const watchlist = S.watchlist?.[mid]||[];

  // ── Render ──
  el.innerHTML = `
  <div style="padding:.75rem 0">

    <!-- Team header -->
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem;padding:.75rem;background:var(--panel);border:1px solid ${aColor}44;border-left:4px solid ${aColor}">
      <!-- Avatar — click to change -->
      <div onclick="openAvatarModal(${mid})" title="Change icon" style="width:52px;height:52px;border:2px solid ${aColor};display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;cursor:pointer;position:relative">
        ${getAvatar(mid,'lg')}
        <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.65);text-align:center;font-size:8px;padding:2px">✏</div>
      </div>
      <div style="flex:1;min-width:0">
        <!-- Name — click to edit -->
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
          <div style="font-family:'Press Start 2P',monospace;font-size:11px;color:${aColor}" id="my-team-name-display">${m.name.toUpperCase()}</div>
          <button onclick="editMyTeamName(${mid})" style="background:none;border:1px solid ${aColor}66;color:${aColor};font-size:9px;padding:1px 5px;cursor:pointer" title="Edit name">✏</button>
        </div>
        <div style="font-size:12px;color:var(--text3)">${stat.toFixed(0)} stat + ${bonus} bonus</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-family:'Press Start 2P',monospace;font-size:24px;color:${aColor}">${total}</div>
        <div style="font-size:10px;color:var(--text3)">TOTAL FP</div>
        ${todayFP!==0?`<div style="font-size:11px;color:${todayFP>0?'var(--green)':'var(--red)'}">${todayFP>0?'+':''}${todayFP.toFixed(1)} today</div>`:''}
      </div>
    </div>

    <!-- Live now -->
    ${livePids.length?`
    <div style="background:rgba(255,51,68,.08);border:1px solid #ff334488;padding:.625rem .75rem;margin-bottom:.75rem;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--red);animation:blink .8s step-end infinite">● LIVE</span>
      ${livePids.map(pid=>{
        const p=getPlayer(pid); const live=livePlayerStats[pid];
        const tc=TEAM_LOGOS[p.team]?.color||'#4a9eff';
        const portrait=getActivePortrait(p.name);
        return `<div style="display:flex;align-items:center;gap:5px">
          ${portrait?`<img src="${portrait}" style="width:28px;height:28px;object-fit:cover;object-position:center top;border:1px solid ${tc};image-rendering:pixelated"/>`:``}
          <span style="font-size:13px;color:var(--text)">${p.name.split(' ').pop()}</span>
          <span style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--red)">${live?`+${(live.fp||0).toFixed(1)}`:''}</span>
        </div>`;
      }).join('')}
    </div>`:''}

    <!-- Stats cards row -->
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:.75rem">

      <!-- Round FP breakdown -->
      <div style="background:var(--panel);border:1px solid var(--border);padding:.625rem .75rem">
        <div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--accent3);margin-bottom:.5rem">FP BY ROUND</div>
        ${[1,2,3,4].map(r=>{
          const fp=roundFP[r]; if(!fp&&r>1) return '';
          const labels=['','R1','R2','CONF','FINALS'];
          return `<div style="display:flex;justify-content:space-between;align-items:center;padding:2px 0;border-bottom:1px solid var(--border2)">
            <span style="font-size:11px;color:var(--text3)">${labels[r]}</span>
            <span style="font-family:'Press Start 2P',monospace;font-size:9px;color:${fp>0?'var(--accent2)':'var(--text3)'}">${fp>0?'+':''}${fp.toFixed(0)}</span>
          </div>`;
        }).join('')}
      </div>

      <!-- Best nights -->
      <div style="background:var(--panel);border:1px solid var(--border);padding:.625rem .75rem">
        <div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--accent3);margin-bottom:.5rem">HIGHLIGHTS</div>
        ${bestDay?`<div style="padding:3px 0;border-bottom:1px solid var(--border2)">
          <div style="font-size:10px;color:var(--text3)">Best Night</div>
          <div style="font-size:13px;color:var(--text)">${bestDayFmt}: <span style="color:var(--accent2);font-family:'Press Start 2P',monospace;font-size:9px">${bestDay[1].toFixed(0)} FP</span></div>
        </div>`:''}
        ${bestGame?`<div style="padding:3px 0;border-bottom:1px solid var(--border2)">
          <div style="font-size:10px;color:var(--text3)">Best Player Game</div>
          <div style="font-size:13px;color:var(--text)">${bestGame.name.split(' ').pop()} <span style="color:var(--accent2);font-family:'Press Start 2P',monospace;font-size:9px">${bestGame.fp.toFixed(0)} FP</span> <span style="font-size:10px;color:var(--text3)">${bestGameFmt}</span></div>
        </div>`:''}
        ${mvpData?`<div style="padding:3px 0">
          <div style="font-size:10px;color:var(--text3)">Round MVP</div>
          <div style="font-size:13px;color:var(--text)">${mvpData.name.split(' ').pop()} <span style="color:var(--accent2);font-family:'Press Start 2P',monospace;font-size:9px">${mvpData.fppg.toFixed(1)}/g</span></div>
        </div>`:''}
      </div>
    </div>

    <!-- Roster -->
    <div style="background:var(--panel);border:1px solid var(--border);padding:.625rem .75rem;margin-bottom:.75rem">
      <div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--accent3);margin-bottom:.5rem">MY ROSTER</div>
      <div style="display:flex;gap:6px;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:4px">
        ${roster.map(pid=>{
          const p=getPlayer(pid); if(!p) return '';
          const t=getTeam(p.team);
          const tc=TEAM_LOGOS[p.team]?.color||'#4a9eff';
          const portrait=getActivePortrait(p.name);
          const isLive=isPlayerLive(pid);
          const elim=t?.eliminated;
          const espnInj=getESPNInjury(p.name);
          const fp=playerStatScore(pid,mid);
          const fppg=playerFPPG(pid,mid);
          return `<div onclick="openPlayerModal(${pid})" style="flex-shrink:0;width:72px;cursor:pointer;opacity:${elim?.45:1}">
            <div style="width:72px;height:72px;overflow:hidden;background:#020c18;border:2px solid ${isLive?'var(--red)':elim?'#333':tc};position:relative">
              ${portrait?`<img src="${portrait}" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"/>`:`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:9px;color:${tc}">${p.team}</div>`}
              ${isLive?`<div style="position:absolute;top:2px;left:2px;background:#ff3344;font-family:'Press Start 2P',monospace;font-size:4px;padding:2px 3px;color:#fff">LIVE</div>`:''}
              ${espnInj&&espnInj.status==='Out'?`<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(255,51,68,.8);text-align:center;font-family:'Press Start 2P',monospace;font-size:5px;color:#fff;padding:2px">OUT</div>`:''}
            </div>
            <div style="font-size:9px;color:${tc};text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding:2px 0">${p.name.split(' ').pop()}</div>
            <div style="font-family:'Press Start 2P',monospace;font-size:7px;color:${isLive?'var(--red)':fp>0?'var(--accent2)':'var(--text3)'}">${fp>0?'+':''}${fp.toFixed(0)}</div>
          </div>`;
        }).join('')}
      </div>
    </div>

    <!-- Watchlist -->
    <div style="background:var(--panel);border:1px solid var(--border);padding:.625rem .75rem">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem">
        <div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--accent3)">WAIVER WATCHLIST</div>
        <div style="font-size:11px;color:var(--text3)">Players you're eyeing</div>
      </div>
      <div id="watchlist-content">
        ${watchlist.length===0?
          '<div style="font-size:12px;color:var(--text3);padding:.25rem 0">No players on watchlist. Add them from the Player Directory.</div>':
          watchlist.map(pid=>{
            const p=getPlayer(pid); if(!p) return '';
            const tc=TEAM_LOGOS[p.team]?.color||'#4a9eff';
            const portrait=getActivePortrait(p.name);
            const fp=playerStatScore(pid);
            // Check if player is claimable
            const allRostered = new Set(Object.values(S.rosters||{}).flat());
            const isAvailable = !allRostered.has(pid);
            const hasSlot = waiverSlotsOpen(mid) > 0;
            const alreadyClaimed = (S.waiverClaims||[]).some(c=>c.pid===pid&&c.managerId===mid);
            const espnInj = getESPNInjury(p.name);
            const injBadge = espnInj ? `<span style="font-family:'Press Start 2P',monospace;font-size:6px;padding:1px 3px;background:${espnInj.status==='Out'?'var(--red)':'#ff9900'};color:#000;margin-right:2px">${espnInj.status==='Out'?'OUT':'DTD'}</span>` : '';
            const claimBtn = isAvailable && hasSlot && !alreadyClaimed
              ? `<button onclick="event.stopPropagation();submitClaim(${pid},${mid})" style="font-family:'Press Start 2P',monospace;font-size:6px;padding:3px 6px;background:rgba(0,180,255,.15);border:1px solid var(--accent);color:var(--accent);cursor:pointer">CLAIM</button>`
              : alreadyClaimed
                ? `<span style="font-family:'Press Start 2P',monospace;font-size:6px;color:var(--accent3)">CLAIMED</span>`
                : isAvailable && !hasSlot
                  ? `<span style="font-size:10px;color:var(--text3)">NO SLOT</span>`
                  : '';
            return `<div style="display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid var(--border2)">
              ${portrait?`<img src="${portrait}" style="width:28px;height:28px;object-fit:cover;object-position:center top;border:1px solid ${tc};image-rendering:pixelated"/>`:``}
              <div style="flex:1;min-width:0">
                <div style="display:flex;align-items:center;gap:4px">
                  <span style="font-size:13px;color:${isAvailable?'var(--text)':'var(--text3)'}">${p.name}</span>
                  ${injBadge}
                  ${!isAvailable?'<span style="font-size:10px;color:var(--text3)">(rostered)</span>':''}
                </div>
                <div style="font-size:10px;color:var(--text3)">${p.team} · ${fp>0?'+':''}${fp.toFixed(0)} FP · ${playerFPPG(pid).toFixed(1)}/g</div>
              </div>
              ${claimBtn}
              <button onclick="event.stopPropagation();removeFromWatchlist(${mid},${pid})" style="background:none;border:1px solid var(--red);color:var(--red);font-size:9px;padding:2px 5px;cursor:pointer">✕</button>
            </div>`;
          }).join('')
        }
      </div>
    </div>
  </div>`;
}


async function editMyTeamName(mid){
  if(!isCommissioner && currentManagerId !== mid){showToast('You can only edit your own name','error');return;}
  const m = S.managers.find(x=>x.id===mid);
  if(!m) return;
  const newName = prompt('Enter your team name:', m.name);
  if(!newName || !newName.trim() || newName.trim()===m.name) return;
  m.name = newName.trim();
  await saveState();
  render();
  // Update topbar name too
  const topbarName = document.getElementById('topbar-name');
  if(topbarName) topbarName.textContent = m.name.toUpperCase();
  showToast('Name updated!', 'info');
}

async function addToWatchlist(mid, pid){
  if(mid===null||mid==='viewer') return;
  if(!isCommissioner && currentManagerId !== mid){showToast('You can only edit your own watchlist','error');return;}
  if(!S.watchlist) S.watchlist={};
  if(!S.watchlist[mid]) S.watchlist[mid]=[];
  if(S.watchlist[mid].includes(pid)){ showToast('Already on watchlist','info'); return; }
  S.watchlist[mid].push(pid);
  await saveState();
  render();
  showToast(getPlayer(pid)?.name+' added to watchlist','info');
}

async function removeFromWatchlist(mid, pid){
  if(!isCommissioner && currentManagerId !== mid){showToast('You can only edit your own watchlist','error');return;}
  if(!S.watchlist?.[mid]) return;
  S.watchlist[mid]=S.watchlist[mid].filter(p=>p!==pid);
  await saveState();
  render();
}

function renderStandings(){
  const draftDone = S.draftIdx >= S.snakeOrder.length;
  const playoffsStarted = S.teams.some(t=>t.survivedRounds>0||t.eliminated);
  const showScores = draftDone; // show scores as soon as draft is done
  const sorted=[...S.managers].sort((a,b)=>{
    if(!draftDone) return a.id-b.id;
    return managerTotal(b.id)-managerTotal(a.id); // always sort by total points
  });

  // Max total for progress bar scaling
  const maxTotal = Math.max(1, ...sorted.map(m=>managerTotal(m.id)));

  document.getElementById('standings-list').innerHTML=sorted.map((m,i)=>{
    const aColor = getAvatarColor(m.id);
    const total = managerTotal(m.id);
    const stat = managerStatScore(m.id);
    const bonus = managerBonusScore(m.id);
    const tokens = tokensAvailable(m.id);
    const medal = i===0?'🥇':i===1?'🥈':i===2?'🥉':'';
    const rankClass = i===0?'r1':i===1?'r2':i===2?'r3':'';
    const barPct = Math.round((total/maxTotal)*100);

    // Find this manager's live players
    const livePlayers = (S.rosters[m.id]||[])
      .filter(pid => isPlayerLive(pid))
      .map(pid => { const p=getPlayer(pid); return p ? p.name.split(' ').pop() : ''; })
      .filter(Boolean);

    // Today's FP — all saved stats from today + current live (not-yet-saved)
    const etNowS = new Date(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}));
    const todayStrS = [etNowS.getFullYear(),String(etNowS.getMonth()+1).padStart(2,'0'),String(etNowS.getDate()).padStart(2,'0')].join('');
    const yestDateS = new Date(etNowS); yestDateS.setDate(yestDateS.getDate()-1);
    const yestStrS = [yestDateS.getFullYear(),String(yestDateS.getMonth()+1).padStart(2,'0'),String(yestDateS.getDate()).padStart(2,'0')].join('');
    const todayGameIdsS = new Set();
    Object.values(livePlayerStats||{}).forEach(s=>{ if(s.gameId) todayGameIdsS.add(s.gameId); });
    Object.values(S.playerStats||{}).forEach(s=>{ if(s.date===todayStrS && s.gameId) todayGameIdsS.add(s.gameId); });
    if(!todayGameIdsS.size) Object.values(S.playerStats||{}).forEach(s=>{ if(s.date===yestStrS && s.gameId) todayGameIdsS.add(s.gameId); });
    const todayLive = (S.rosters[m.id]||[]).reduce((sum,pid) => {
      const acqDate = S.waiverAcquisitions?.[m.id+'_'+pid]||null;
      let fp=0;
      Object.values(S.playerStats||{}).filter(s=>s.pid===pid&&todayGameIdsS.has(s.gameId)).forEach(s=>{
        if(!acqDate||s.date>=acqDate) fp+=s.fp||0;
      });
      const live = livePlayerStats[pid];
      if(live && todayGameIdsS.has(live.gameId)){
        const saved = Object.values(S.playerStats||{}).some(s=>s.pid===pid&&s.gameId===live.gameId);
        if(!saved) fp+=live.fp||0;
      }
      return sum+fp;
    }, 0);

    return `<div style="margin-bottom:.5rem;background:var(--panel);border:1px solid var(--border);border-left:4px solid ${aColor};padding:.75rem 1rem">
      <div style="display:flex;align-items:center;gap:10px">
        <!-- Rank + avatar -->
        <div style="min-width:36px;text-align:center">
          ${medal
            ? `<span style="font-size:22px">${medal}</span>`
            : `<span style="font-family:'Press Start 2P',monospace;font-size:13px;color:var(--text3)">#${i+1}</span>`}
        </div>
        <div style="width:44px;height:44px;flex-shrink:0;border:2px solid ${aColor};cursor:pointer;display:flex;align-items:center;justify-content:center;overflow:hidden" onclick="openAvatarModal(${m.id})">${getAvatar(m.id,'sm')}</div>
        <!-- Name + live indicator -->
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <span style="font-size:18px;color:var(--text);font-weight:600">${m.name}</span>
            ${livePlayers.length ? `<span class="score-live" style="font-size:8px">▶ LIVE: ${livePlayers.join(', ')}</span>` : ''}
            ${tokens>0 ? `<span style="display:inline-flex;align-items:center;gap:2px">${Array(Math.min(tokens,3)).fill(getTokenImg(18)).join('')}${tokens>3?`<span style="font-size:10px;color:var(--accent2)">+${tokens-3}</span>`:''}</span>` : ''}
          </div>
          <div style="font-size:12px;color:var(--text3);margin-top:2px">
            ${showScores
              ? `<span style="color:var(--accent)">${stat}</span> stat + <span style="color:var(--green)">${bonus}</span> bonus${todayLive!==0?` · <span style="color:${todayLive>=0?'var(--green)':'var(--red)'}">${todayLive>0?'+':''}${todayLive.toFixed(1)} today</span>`:''}`
              : 'PLAYOFFS UNDERWAY'}
          </div>
        </div>
        <!-- Score -->
        <div style="text-align:right;flex-shrink:0">
          <div style="font-family:'Press Start 2P',monospace;font-size:${i===0?'22':'18'}px;color:${i===0?aColor:'var(--text)'}">${showScores?total:'—'}</div>
          ${showScores?`<div style="font-size:10px;color:var(--text3)">PTS</div>`:''}
        </div>
      </div>
      <!-- Progress bar -->
      ${showScores&&total>0?`
      <div style="margin-top:.5rem;height:4px;background:var(--border);position:relative">
        <div style="position:absolute;left:0;top:0;height:100%;width:${barPct}%;background:${aColor};transition:width .3s"></div>
      </div>`:''}
    </div>`;
  }).join('');
}

function renderNameEdit(){
  document.getElementById('name-edit-list').innerHTML=S.managers.map(m=>{
    const aColor = getAvatarColor(m.id);
    return `<div class="name-input-row" style="margin-bottom:12px">
      <div style="width:44px;height:44px;flex-shrink:0;border:2px solid ${aColor};cursor:pointer;display:flex;align-items:center;justify-content:center;overflow:hidden" onclick="openAvatarModal(${m.id})" title="Change icon">
        ${getAvatar(m.id,'sm')}
      </div>
      <input type="text" style="width:200px" value="${m.name}"
        onchange="renameMgr(${m.id},this.value)"
        onkeydown="if(event.key==='Enter')renameMgr(${m.id},this.value)"
        placeholder="NAME OR NICKNAME"/>
      <button class="btn btn-sm" onclick="openAvatarModal(${m.id})">🎨 ICON</button>
    </div>`;
  }).join('');
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
      <div style="width:28px;height:28px;border:2px solid ${getAvatarColor(m.id)};flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">${getAvatar(m.id)}</div>
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
      ${playerLogoHtml(p.team, 36, p.name)}
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
          ${playerLogoHtml(p.team, 28, p.name)}
          <div style="flex:1">
            <div style="font-size:14px;color:var(--text)">${p.name} <span class="pos-badge">${p.pos}</span></div>
            <div style="font-size:13px;color:var(--text3)">${t.name}</div>
          </div>
          ${m?`<div style="display:flex;align-items:center;gap:6px">
            <div style="width:28px;height:28px;border:2px solid ${getAvatarColor(m.id)};flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">${getAvatar(m.id)}</div>
            <span style="font-size:13px;color:var(--text2)">${m.name} <span style="color:var(--text3)">#${info.pickNum}</span></span>
          </div>`:''}
        </div>`;
      }).join('')}
    </div>`:'';

  document.getElementById('draft-pool').innerHTML=availHtml+draftedHtml;
}

function renderWaiver(){
  const elimTeams=S.teams.filter(t=>t.eliminated);
  const elimNames=elimTeams.map(t=>t.name).join(', ');
  const slots=S.managers.map(m=>({m,open:waiverSlotsOpen(m.id)})).filter(x=>x.open>0);
  const claimsArr=S.waiverClaims||[];
  const pendingCount=claimsArr.length;
  const myId=currentManagerId;
  const myClaims=managerAllClaims(myId==='viewer'?-1:myId);
  const myClaim=myClaims[0]||null;
  const mySlots=myId!==null&&myId!=='viewer'?waiverSlotsOpen(myId):0;
  const priority=getWaiverPriority();

  // ── Header ──
  let headerHtml='';
  if(!elimNames.length){
    headerHtml=`<div class="notice">NO TEAMS ELIMINATED YET. WAIVERS OPEN ONCE A TEAM IS OUT OR A PLAYER IS INJURED.</div>`;
  } else {
  
    // Build token display for each manager
    const tokenDisplay = S.managers.map(m=>{
      const tkns = tokensAvailable(m.id);
      if(tkns<=0) return '';
      const coins = Array(Math.min(tkns,5)).fill(getTokenImg(16)).join('');
      return `<span style="display:inline-flex;align-items:center;gap:4px;margin-right:8px"><strong>${m.name}</strong>: ${coins}${tkns>5?`<span class="token-count">×${tkns}</span>`:''}`;
    }).filter(Boolean).join(' ');

    // Show which managers have open slots from eliminated players
    const affectedMgrs = S.managers.filter(m=>
      (S.rosters[m.id]||[]).some(pid=>{const p=getPlayer(pid);return p&&getTeam(p.team)?.eliminated;})
    );
    const openSlotMgrs = affectedMgrs.filter(m=>waiverSlotsOpen(m.id)>0);
    const needsDropMgrs = affectedMgrs.filter(m=>waiverSlotsOpen(m.id)===0&&waiverSlotsForManager(m.id)>0);

    headerHtml=`<div class="info-box" style="margin-bottom:.75rem">
      <div style="margin-bottom:6px">🚨 ELIMINATED: <strong>${elimNames}</strong></div>
      ${openSlotMgrs.length?`<div style="margin-bottom:4px;color:var(--green);font-size:13px">✓ Ready to claim: ${openSlotMgrs.map(m=>m.name).join(', ')}</div>`:''}
      ${needsDropMgrs.length?`<div style="margin-bottom:4px;color:#ff9900;font-size:13px">⚠ Must drop first (go to Rosters): ${needsDropMgrs.map(m=>m.name).join(', ')}</div>`:''}
      ${tokenDisplay?`<div style="margin-bottom:6px;display:flex;flex-wrap:wrap;align-items:center;gap:4px">${getTokenImg(16)} TOKENS: ${tokenDisplay}</div>`:''}
      <div>PENDING CLAIMS: ${pendingCount>0?`<strong style="color:var(--accent2)">${pendingCount} claim${pendingCount>1?'s':''} queued</strong>`:'none yet'}</div>
    </div>`;
  }

  // ── Waiver priority order ──
  const priorityHtml=`<div class="card" style="margin-bottom:1rem">
    <div class="section-title" style="margin-bottom:.5rem">► WAIVER PRIORITY ORDER</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center">
      ${priority.map((mid,i)=>{
        const m=S.managers.find(x=>x.id===mid);
        if(!m) return '';
        const isMe=mid===myId;
        return `<div style="display:flex;align-items:center;gap:5px;padding:4px 10px;border:1px solid ${isMe?'var(--accent2)':'var(--border)'};background:${isMe?'rgba(245,166,35,.1)':'var(--bg2)'}">
          <span style="font-size:11px;color:var(--text3)">#${i+1}</span>
          <div style="width:32px;height:32px;border:2px solid ${getAvatarColor(m.id)};flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">${getAvatar(m.id,'sm')}</div>
          <span style="font-size:13px;color:${isMe?'var(--accent2)':'var(--text)'}">${m.name}</span>
        </div>`;
      }).join('')}
    </div>
    ${isCommissioner?`<div style="margin-top:.75rem;padding-top:.75rem;border-top:1px solid var(--border);display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <div style="font-size:13px;color:var(--text2);flex:1">Claims process automatically at midnight EST — or process manually now:</div>
      <button class="btn btn-sm" style="color:var(--accent2);border-color:var(--accent2)" onclick="processWaiverClaims()">⚡ PROCESS CLAIMS NOW</button>
    </div>`:''}
  </div>`;

  // ── My active claim ──
  let myClaimHtml='';
  if(myId!==null&&myId!=='viewer'&&myClaims.length>0){
    myClaimHtml=`<div class="card" style="margin-bottom:1rem;border-color:var(--accent2)">
      <div class="section-title" style="margin-bottom:.5rem;color:var(--accent2)">► YOUR QUEUED CLAIMS (${myClaims.length}/${waiverSlotsOpen(myId)} SLOTS)</div>
      ${myClaims.map((claim,i)=>{
        const cp=getPlayer(claim.pid);
        return `<div class="player-row">
          <span style="font-size:12px;color:var(--text3);min-width:24px">#${i+1}</span>
          <div style="flex:1">
            <div style="font-size:14px;color:var(--text)">${cp?cp.name:'Unknown'} <span class="pos-badge">${cp?cp.pos:''}</span></div>
            <div style="font-size:11px;color:var(--text3)">Submitted ${new Date(claim.submittedAt).toLocaleTimeString()}</div>
          </div>
          <button class="btn btn-sm btn-danger" onclick="cancelClaim(${claim.pid},${myId})">CANCEL</button>
        </div>`;
      }).join('')}
    </div>`;
  }

  // ── Player list ──
  // ── Team filter chips ──
  // Build chips directly from undrafted players — never depends on S.teams being up to date
  const waiverTeamsInPool = [...new Set(waiverPlayers().map(p=>p.team))].sort();
  const filterChipsHtml = `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:.75rem">
    <span class="team-chip ${!waiverTeamFilter?'sel':''}" onclick="waiverTeamFilter=null;render()">ALL</span>
    ${waiverTeamsInPool.map(tid=>{
      const t = getTeam(tid);
      return `<span class="team-chip ${t.eliminated?'elim':''} ${waiverTeamFilter===tid?'sel':''}"
        onclick="waiverTeamFilter='${tid}';render()">${tid}</span>`;
    }).join('')}
  </div>`;

  const avail=waiverPlayers().filter(p=>!waiverTeamFilter||p.team===waiverTeamFilter).sort((a,b)=>{
    const ae=getTeam(a.team).eliminated?1:0,be=getTeam(b.team).eliminated?1:0;
    if(ae!==be) return ae-be;
    // Sort by actual playoff fantasy points scored so far
    const aFP = playerFPPG(a.id)||playerStatScore(a.id)/100;
    const bFP = playerFPPG(b.id)||playerStatScore(b.id)/100;
    if(bFP !== aFP) return bFP - aFP;
    return espnScore(b)-espnScore(a);
  });

  const listHtml=!avail.length
    ?'<div style="text-align:center;padding:1.5rem;color:var(--text3);font-size:16px">NO UNDRAFTED PLAYERS AVAILABLE</div>'
    :avail.map(p=>{
      const t=getTeam(p.team),bd=espnBD(p),elim=t.eliminated;
      // All managers who claimed this player
      const playerClaims=(S.waiverClaims||[]).filter(c=>c.pid===p.id).sort((a,b)=>new Date(a.submittedAt)-new Date(b.submittedAt));
      const claim=playerClaims[0]||null;
      const isMyClaim=!!(S.waiverClaims||[]).find(c=>c.pid===p.id&&c.managerId===myId);
      const canClaim=myId!==null&&myId!=='viewer'&&mySlots>0&&!isMyClaim;
      const hasMyClaim=!!myClaim;

      let claimSection='';
      if(playerClaims.length>0){
        claimSection=`<div style="display:flex;align-items:center;gap:6px;margin-top:3px;flex-wrap:wrap">
          ${playerClaims.map(c=>`
            <div style="display:inline-flex;align-items:center;gap:4px;padding:2px 6px;background:rgba(245,166,35,.1);border:1px solid var(--accent2)">
              <div style="width:24px;height:24px;border:2px solid ${getAvatarColor(c.managerId)};display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0" title="${c.managerName}">${getAvatar(c.managerId,'sm')}</div>
              <span style="font-size:11px;color:var(--accent2)">${c.managerName}</span>
            </div>`).join('')}
          ${isMyClaim?`<button class="btn btn-sm btn-danger" style="padding:2px 8px;font-size:11px" onclick="cancelClaim(${p.id},${myId})">CANCEL</button>`:''}
        </div>`;
      }

      const actionBtn = myId===null||myId==='viewer' ? '' :
        isMyClaim
          ? `<button class="btn btn-sm btn-danger" onclick="cancelClaim(${p.id},${myId})">CANCEL</button>`
          : canClaim
            ? (()=>{ const lk=getWaiverLockoutStatus(); return lk.locked&&!isCommissioner
                ? `<span style="font-family:'Press Start 2P',monospace;font-size:6px;color:var(--red);padding:3px 6px;border:1px solid var(--red)33">⛔ LOCKED</span>`
                : `<button class="btn btn-sm btn-primary" onclick="submitClaim(${p.id},${myId})">CLAIM</button>`; })()
            : mySlots<=0
              ? `<span style="font-size:11px;color:var(--text3)">NO SLOT</span>`
              : `<span style="font-size:11px;color:var(--text3)">SLOTS FULL</span>`;

      // Build real playoff stats for this player
      const statScore = playerStatScore(p.id);
      const isLive = isPlayerLive(p.id);
      const savedStats = S.playerStats ? Object.values(S.playerStats).filter(s=>s.pid===p.id) : [];
      const live = livePlayerStats[p.id];
      const allStats = [...savedStats];
      if(live){ const dup = savedStats.some(s=>s.gameId&&s.gameId===live.gameId); if(!dup) allStats.push(live); }
      const agg = allStats.reduce((a,s)=>({
        pts:a.pts+(s.pts||0), reb:a.reb+(s.reb||0), ast:a.ast+(s.ast||0),
        stl:a.stl+(s.stl||0), blk:a.blk+(s.blk||0), to:a.to+(s.to||0),
        fgm:a.fgm+(s.fgm||0), fga:a.fga+(s.fga||0), gp: a.gp+1
      }), {pts:0,reb:0,ast:0,stl:0,blk:0,to:0,fgm:0,fga:0,gp:0});
      const hasStats = allStats.length > 0;
      const tc = (TEAM_LOGOS[p.team]?.color)||'#4a9eff';

      return `<div style="margin-bottom:.75rem;padding:.75rem;background:var(--panel);border:1px solid var(--border);border-left:3px solid ${elim?'#333':tc};${claim&&!isMyClaim?'background:rgba(245,166,35,.03)':''}opacity:${elim?0.6:1}">
        <!-- Header row: portrait + name + big FP + action -->
        <div style="display:flex;align-items:center;gap:10px">
          <div onclick="openPlayerModal(${p.id})" style="cursor:pointer;flex-shrink:0">
            ${playerLogoHtml(p.team, 48, p.name)}
          </div>
          <div style="flex:1;min-width:0">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
              <span style="font-size:16px;color:var(--text);cursor:pointer" onclick="openPlayerModal(${p.id})">${p.name}</span>
              <span class="pos-badge">${p.pos}</span>
              ${elim?'<span class="badge badge-elim">ELIM</span>':''}
              ${isLive?'<span class="score-live" style="font-size:8px">LIVE</span>':''}
              ${!elim?injuryBadgeHtml(p.name,true):''}
            </div>
            <div style="font-size:12px;color:var(--text3);margin-top:2px">${t.name} · ${agg.gp} playoff game${agg.gp!==1?'s':''}</div>
            ${claimSection}
          </div>
          <!-- Big FPPG, small total -->
          <div style="text-align:right;flex-shrink:0">
            <div style="font-family:'Press Start 2P',monospace;font-size:${hasStats?'20':'14'}px;color:${isLive?'var(--red)':hasStats&&statScore>0?'var(--accent2)':'var(--text3)'}">
              ${hasStats ? (playerFPPG(p.id)>0?'+':'')+playerFPPG(p.id).toFixed(1) : '—'}
            </div>
            <div style="font-size:10px;color:var(--text3);margin-top:1px">FPPG${hasStats&&agg.gp>0?' · '+statScore.toFixed(1)+' tot':''}</div>
          </div>
          <div style="flex-shrink:0;margin-left:6px">${actionBtn}</div>
        </div>
        <!-- Stats row -->
        ${hasStats ? `<div style="display:flex;gap:0;margin-top:.5rem;border-top:1px solid var(--border2);padding-top:.5rem;overflow-x:auto">
          ${[
            ['PTS', agg.pts],
            ['REB', agg.reb],
            ['AST', agg.ast],
            ['STL', agg.stl],
            ['BLK', agg.blk],
            ['TO',  agg.to],
            ['FG',  agg.fga>0?(agg.fgm/agg.fga*100).toFixed(0)+'%':'—'],
          ].map(([lbl,val])=>`<div style="flex:1;min-width:36px;text-align:center;padding:0 4px">
            <div style="font-size:14px;color:${lbl==='TO'&&agg.to>0?'var(--red)':'var(--text)'}">${val}</div>
            <div style="font-family:'Press Start 2P',monospace;font-size:6px;color:var(--text3);margin-top:2px">${lbl}</div>
          </div>`).join('')}
        </div>` : `<div style="margin-top:.5rem;font-size:12px;color:var(--text3)">No playoff stats yet</div>`}
      </div>`;
    }).join('');

  // ── Last results banner ──
  if(S.lastWaiverResults && S.lastWaiverResults.results && S.lastWaiverResults.results.length){
    const lr=S.lastWaiverResults;
    const time=new Date(lr.processedAt).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});
    const summary=lr.results.map(r=>{
      const p=getPlayer(r.pid);
      return r.won?`✓ ${r.name} → ${p?p.name:'?'}`:`✗ ${r.name} lost ${p?p.name:'?'}`;
    }).join(' · ');
    headerHtml+=`<div class="success-box" style="margin-bottom:.75rem;font-size:13px">
      LAST PROCESSED: ${time}<br>${summary}
      <button class="btn btn-sm" style="margin-top:6px;font-size:11px" onclick="S.lastWaiverResults=null;saveState();render()">DISMISS</button>
    </div>`;
  }
  document.getElementById('waiver-header').innerHTML=headerHtml;
  document.getElementById('waiver-list').innerHTML=priorityHtml+myClaimHtml+`<div class="card"><div class="section-title">► ALL AVAILABLE PLAYERS</div>${filterChipsHtml}${listHtml}</div>`;
}

function renderRosters(){
  // Re-check commissioner status freshly (handles session restore timing)
  const _isComm = isCommissioner || currentManagerId === 4;
  document.getElementById('rosters-comm-notice').innerHTML=_isComm
    ?`<div class="commissioner-bar">🔓 <span style="font-family:'Press Start 2P',monospace;font-size:9px">COMMISSIONER MODE — MANAGE TEAMS &amp; INJURIES BELOW</span></div>`
    :`<div class="notice">VIEW-ONLY MODE — COMMISSIONER CONTROLS LOCKED</div>`;

  // Global team elimination controls at top (commissioner only)
  const teamCtrlEl = document.getElementById('rosters-team-controls');
  if(teamCtrlEl){
    if(_isComm){
      const teamChips = S.teams.map(t=>{
        const survivalDropdown = `<select onchange="setSurvivedRounds('${t.id}',parseInt(this.value))" style="background:var(--bg2);border:1px solid var(--border2);color:var(--text2);font-size:10px;padding:1px 2px;width:46px;margin-left:2px">
          <option value="0" ${(t.survivedRounds||0)===0?'selected':''}>R0</option>
          <option value="1" ${(t.survivedRounds||0)===1?'selected':''}>R1✓</option>
          <option value="2" ${(t.survivedRounds||0)===2?'selected':''}>R2✓</option>
          <option value="3" ${(t.survivedRounds||0)===3?'selected':''}>R3✓</option>
        </select>`;
        return t.eliminated
          ? `<span style="display:inline-flex;align-items:center;gap:2px;opacity:.5"><span style="font-size:11px;color:#555">${t.id}</span><span style="font-size:9px;color:var(--red)">OUT</span></span>`
          : `<span style="display:inline-flex;align-items:center;gap:2px">
              <button onclick="toggleElim('${t.id}')" style="font-family:'Press Start 2P',monospace;font-size:8px;padding:3px 6px;background:rgba(255,51,68,.1);border:1px solid #ff334466;color:var(--text2);cursor:pointer" title="Mark ${t.id} eliminated">${t.id}</button>
              ${survivalDropdown}
            </span>`;
      }).join('');

      teamCtrlEl.innerHTML = `<div style="background:rgba(255,51,68,.05);border:2px solid #ff334433;padding:.625rem .75rem;margin-bottom:.75rem">
        <div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--red);margin-bottom:.5rem">⚡ ELIMINATE TEAMS / SET ROUNDS SURVIVED</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">${teamChips}</div>
        <div style="font-size:10px;color:var(--text3);margin-top:6px">Tap a team button to eliminate them. This removes their players from rosters, banks FP, and opens waiver slots.</div>
      </div>`;
    } else {
      teamCtrlEl.innerHTML = '';
    }
  }

  document.getElementById('rosters-list').innerHTML=S.managers.map(m=>{
    const players=getRosterOrder(m.id).map(pid=>getPlayer(pid)).filter(Boolean);
    const slotsOpen=waiverSlotsOpen(m.id);
    const aColor=getAvatarColor(m.id);
    const total=managerTotal(m.id);
    const statPts=managerStatScore(m.id);
    const bonusPts=managerBonusScore(m.id);

    // Horizontal boss card strip
    const bossGrid = players.length ? `
      <div style="display:flex;gap:${IS_MOBILE?4:6}px;overflow-x:auto;padding:${IS_MOBILE?'6px 0 8px':'8px 0 12px'};-webkit-overflow-scrolling:touch;scrollbar-width:thin;scrollbar-color:var(--border) transparent">
        ${getRosterOrder(m.id).map(pid=>getPlayer(pid)).filter(Boolean).map((p,cardIdx)=>{
          const t=getTeam(p.team);
          const inj=(S.injured[m.id]||[]).includes(p.id);
          const bonus=bonusForPlayer(p.id,m.id);
          const sr=t.survivedRounds||0;
          const teamColor=(TEAM_LOGOS[p.team]?.color)||TEAM_COLORS[p.team]||'#4a9eff';
          const statScore=playerStatScore(p.id);
          const isLive=isPlayerLive(p.id);
          const bd=espnBD(p);
          const hasPortrait=getActivePortrait(p.name);
          const logo=TEAM_LOGOS[p.team];
          const borderColor=t.eliminated?'#333':inj?'#ff9900':isLive?'#ff3344':teamColor;

          const isMyRoster = m.id === currentManagerId;
          return `<div
            onclick="openPlayerModal(${p.id})"
            ${isMyRoster ? `draggable="true"
            ondragstart="dragStart(event,${m.id},${cardIdx})"
            ondragend="dragEnd(event)"
            ondragover="dragOver(event)"
            ondragleave="dragLeave(event)"
            ondrop="dragDrop(event,${m.id},${cardIdx})"` : ''}
            style="
              flex-shrink:0;width:${IS_MOBILE?88:110}px;
              background:#020c18;
              border:2px solid ${borderColor};
              display:flex;flex-direction:column;
              opacity:${t.eliminated?0.45:1};
              font-family:'Press Start 2P',monospace;
              cursor:${isMyRoster?'grab':'default'};
              transition:border-color .15s;
            ">
            <!-- Portrait -->
            <div data-anim-pid="${p.id}" style="width:${IS_MOBILE?84:106}px;height:${IS_MOBILE?84:106}px;overflow:hidden;flex-shrink:0;background:#020c18;display:flex;align-items:center;justify-content:center;position:relative">
              ${hasPortrait
                ? `<img src="${getActivePortrait(p.name)}" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"/>`
                : logo
                  ? `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:10px">${logo.svg||`<img src="${logo.img}" style="width:80%;height:80%;object-fit:contain;image-rendering:pixelated"/>`}</div>`
                  : `<div style="font-size:11px;color:${teamColor}">${p.team}</div>`
              }
              ${isLive?`<div style="position:absolute;top:3px;left:3px;background:#ff3344;font-family:'Press Start 2P',monospace;font-size:5px;padding:2px 3px;color:#fff">LIVE</div>`:''}

              ${t.eliminated?`<div style="position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.55)"><span style="font-family:'Press Start 2P',monospace;font-size:8px;color:#ff3344;text-shadow:0 0 8px #ff3344">OUT</span></div>`:''}
              ${(()=>{
                if(t.eliminated) return '';
                if(inj) return `<div style="position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.45)"><span style="font-family:'Press Start 2P',monospace;font-size:8px;color:#ff9900;text-shadow:0 0 8px #ff9900">DTD</span></div>`;
                return injuryBadgeHtml(p.name);
              })()}
            </div>
            <!-- Gold divider like the preview -->
            <div style="height:2px;background:${borderColor}"></div>
            <!-- Name + pos -->
            <div style="padding:5px 5px 3px;background:#020c18">
              <div style="font-size:6px;color:${t.eliminated?'#555':teamColor};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:.03em">${p.name.toUpperCase()}</div>
              <div style="font-size:6px;color:var(--text3);margin-top:2px">${p.pos} · ${p.team}</div>
            </div>
            <!-- Stats row -->
            <div style="padding:3px 5px 5px;background:#041428;border-top:1px solid ${borderColor}40;display:flex;flex-direction:column;gap:2px">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span style="font-size:5px;color:var(--text3)">FPPG</span>
                <span style="font-size:6px;color:${isLive?'#ff3344':statScore!==0?'var(--accent2)':'var(--text3)'}">
                  ${statScore!==0||isLive?`${playerFPPG(p.id)>0?'+':''}${playerFPPG(p.id).toFixed(1)}`:'—'}
                </span>
              </div>
              ${playerGamesPlayed(p.id)>1?`<div style="display:flex;justify-content:space-between;align-items:center">
                <span style="font-size:5px;color:var(--text3)">TOTAL</span>
                <span style="font-size:5px;color:var(--text3)">${statScore>0?'+':''}${statScore.toFixed(1)}</span>
              </div>`:''}
              ${bonus>0?`<div style="display:flex;justify-content:space-between">
                <span style="font-size:5px;color:var(--text3)">BONUS</span>
                <span style="font-size:5px;color:${ROUND_FG[Math.min(sr,4)]}">+${bonus}</span>
              </div>`:''}
              ${(()=>{
                // Show INJ if: already injured (show OK), OR team played but player sat out
                if(t.eliminated) return '';
                const canManage = isCommissioner || currentManagerId===m.id;
                if(!canManage) return '';
                if(inj) return `<div style="display:flex;gap:2px;margin-top:2px"><button style="flex:1;font-size:5px;padding:2px;background:var(--green);border:none;cursor:pointer;color:#000;font-family:'Press Start 2P',monospace" onclick="event.stopPropagation();clearInjury(${m.id},${p.id})">✓ OK</button></div>`;
                // Check if team has played games but player has 0 stats in any of them
                // ESPN injury status overrides everything — show button if ESPN says Out/DTD
                const espnInj = getESPNInjury(p.name);
                const isESPNOut = espnInj && (espnInj.status==='Out' || espnInj.status==='Day-To-Day'); // OUT or DTD both eligible

                // Also check if player missed a game
                const teamGameIds = new Set(Object.values(S.playerStats||{}).filter(s=>{
                  const tp = PLAYERS.find(x=>x.id===s.pid);
                  return tp && tp.team===p.team;
                }).map(s=>s.gameId));
                const playerGameIds = new Set(Object.values(S.playerStats||{}).filter(s=>s.pid===p.id).map(s=>s.gameId));
                const sortedTeamGames = [...teamGameIds].sort();
                const latestTeamGame = sortedTeamGames[sortedTeamGames.length-1];
                const missedGame = [...teamGameIds].some(gid=>!playerGameIds.has(gid));
                const playedLatest = latestTeamGame && playerGameIds.has(latestTeamGame);
                // Show DROP if: ESPN says Out, OR player already marked injured
                const alreadyMarked = (S.injured[m.id]||[]).includes(p.id);
                const eligible = isESPNOut || alreadyMarked;
                if(!eligible) return '';
                if(alreadyMarked) return ''; // Already marked, show ✓ OK button instead
                return `<div style="display:flex;gap:2px;margin-top:2px"><button style="flex:1;font-size:5px;padding:2px;background:#ff3344;border:none;cursor:pointer;color:#fff;font-family:'Press Start 2P',monospace;font-weight:bold" onclick="event.stopPropagation();markInjured(${m.id},${p.id})">DROP</button></div>`;
              })()}
            </div>
          </div>`;
        }).join('')}
        ${Array(Math.max(0,8-players.length)).fill(0).map((_,i)=>`
          <div style="flex-shrink:0;width:${IS_MOBILE?88:110}px;height:${IS_MOBILE?150:180}px;background:#041428;border:2px dashed #1a3a5c;display:flex;align-items:center;justify-content:center">
            <span style="font-family:'Press Start 2P',monospace;font-size:12px;color:#1a3a5c">?</span>
          </div>`).join('')}
      </div>` : `<div style="font-size:15px;color:var(--text3);padding:1rem 0;text-align:center">NO PLAYERS DRAFTED YET</div>`;

    return `<div class="card" style="border-color:${aColor}40;margin-bottom:1rem">
      <!-- Manager header -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
        <div style="width:40px;height:40px;border:2px solid ${aColor};flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">${getAvatar(m.id,'sm')}</div>
        <div style="flex:1">
          <div style="font-size:16px;color:var(--text)">${m.name}</div>
          <div style="font-size:12px;color:var(--text3)">${players.length}/${ROSTER_SIZE} PLAYERS${slotsOpen>0?` · <span style="color:var(--green)">${slotsOpen} WAIVER SLOT${slotsOpen!==1?'S':''} OPEN</span>`:''}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:'Press Start 2P',monospace;font-size:14px;color:var(--accent2)">${total}</div>
          <div style="font-size:12px;color:var(--text3)">${statPts} STAT${bonusPts>0?` + <span style="color:var(--green)">${bonusPts} BONUS</span>`:''}</div>
        </div>
      </div>
      ${bossGrid}
      ${isCommissioner?`
      <div style="margin-top:.75rem;padding-top:.75rem;border-top:1px solid var(--border)">
        <div class="section-title" style="margin-bottom:.5rem;font-size:8px">TEAMS — TAP TO ELIMINATE · SET ROUNDS SURVIVED</div>
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
  // Show portrait uploader for commissioner (on rules tab)
  const uploaderCard = document.getElementById('portrait-uploader-card');
  if(uploaderCard) uploaderCard.classList.toggle('hidden', !isCommissioner);
  const animCard = document.getElementById('animation-uploader-card');
  if(animCard) animCard.classList.toggle('hidden', !isCommissioner);
  const logoCard = document.getElementById('logo-uploader-card');
  if(logoCard) logoCard.classList.toggle('hidden', !isCommissioner);
  renderExistingLogos();

  // Show injury notifications for commissioner
  const notifCard = document.getElementById('injury-notifications-card');
  if(notifCard){
    const notifs = S.injuryNotifications||[];
    const unread = notifs.filter(n=>!n.read);
    if(isCommissioner && notifs.length > 0){
      notifCard.classList.remove('hidden');
      notifCard.innerHTML = `
        <div style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--accent2);margin-bottom:.5rem">
          🤕 INJURY NOTIFICATIONS ${unread.length>0?`<span style="background:var(--red);color:#fff;padding:1px 5px;font-size:7px">${unread.length} NEW</span>`:''}
        </div>
        ${notifs.slice(0,10).map(n=>`
          <div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border2);opacity:${n.read?0.5:1}">
            <span style="font-size:12px">🤕</span>
            <div style="flex:1;font-size:13px;color:var(--text2)">
              <strong>${n.managerName}</strong> marked <strong>${n.playerName}</strong> as OUT
              <div style="font-size:11px;color:var(--text3)">${new Date(n.timestamp).toLocaleString()}</div>
            </div>
            ${!n.read?`<span style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--red)">NEW</span>`:''}
          </div>`).join('')}
        <button class="btn btn-sm" style="margin-top:.5rem;font-size:11px" onclick="markNotifsRead()">MARK ALL READ</button>
      `;
    } else {
      notifCard.classList.add('hidden');
    }
  }

  // Put current manager first, then sort rest by total
  const _allSorted = [...S.managers].sort((a,b)=>managerTotal(b.id)-managerTotal(a.id));
  const sortedMgrs = currentManagerId !== null && currentManagerId !== 'viewer'
    ? [S.managers.find(m=>m.id===currentManagerId), ..._allSorted.filter(m=>m.id!==currentManagerId)].filter(Boolean)
    : _allSorted;
  document.getElementById('scoring-breakdown').innerHTML=sortedMgrs.map(m=>{
    const players=S.rosters[m.id].map(pid=>getPlayer(pid)).filter(Boolean).sort((a,b)=>playerStatScore(b.id)-playerStatScore(a.id));
    const aColor=getAvatarColor(m.id);
    const mTotal=managerTotal(m.id);
    const mStat=managerStatScore(m.id);
    const mBonus=managerBonusScore(m.id);

    return `<div style="margin-bottom:1.25rem;padding-bottom:1.25rem;border-bottom:2px solid var(--border)">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:.625rem">
        <div style="width:36px;height:36px;border:2px solid ${aColor};flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">${getAvatar(m.id)}</div>
        <span style="font-size:17px;color:var(--text);font-weight:600">${m.name}</span>
        <div style="margin-left:auto;text-align:right">
          <div style="font-family:'Press Start 2P',monospace;font-size:13px;color:var(--accent2)">${mTotal} PTS</div>
          <div style="font-size:11px;color:var(--text3)">${mStat} STAT${mBonus>0?` + <span style="color:var(--green)">${mBonus} BONUS</span>`:''}</div>
        </div>
      </div>
      ${players.length?`
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:12px;min-width:420px">
          <thead>
            <tr style="border-bottom:1px solid var(--border)">
              <th style="text-align:left;padding:4px 6px;font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);font-weight:normal">PLAYER</th>
              <th style="padding:4px 4px;font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);font-weight:normal">FP/G</th>
              <th style="padding:4px 4px;font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);font-weight:normal">PTS</th>
              <th style="padding:4px 4px;font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);font-weight:normal">REB</th>
              <th style="padding:4px 4px;font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);font-weight:normal">AST</th>
              <th style="padding:4px 4px;font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);font-weight:normal">STL</th>
              <th style="padding:4px 4px;font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);font-weight:normal">BLK</th>
              <th style="padding:4px 4px;font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);font-weight:normal">TO</th>
              <th style="padding:4px 4px;font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);font-weight:normal">BONUS</th>
              <th style="padding:4px 6px;font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);font-weight:normal">TOTAL FP</th>
            </tr>
          </thead>
          <tbody>
            ${players.map(p=>{
              const t=getTeam(p.team);
              const statScore=playerStatScore(p.id,m.id);
              const acqDate = S.waiverAcquisitions?.[m.id+'_'+p.id]||null;
              const fullStatScore=acqDate?playerStatScore(p.id):statScore;
              const excludedFP=acqDate?+(fullStatScore-statScore).toFixed(1):0;
              const bonus=bonusForPlayer(p.id,m.id);
              const playerTotal=+(statScore+bonus).toFixed(1);
              const isLive=isPlayerLive(p.id);
              const inj=(S.injured[m.id]||[]).includes(p.id);
              const teamColor=(TEAM_LOGOS[p.team]?.color)||'#4a9eff';

              // Get aggregated stats for display
              const savedStats=S.playerStats
                ? Object.values(S.playerStats).filter(s=>s.pid===p.id)
                : [];
              const live=livePlayerStats[p.id];
              const allStats=[...savedStats];
              if(live){
                const alreadySaved=savedStats.some(s=>s.gameId&&s.gameId===live.gameId);
                if(!alreadySaved) allStats.push(live);
              }
              const agg=allStats.reduce((a,s)=>({
                pts:a.pts+(s.pts||0),reb:a.reb+(s.reb||0),ast:a.ast+(s.ast||0),
                stl:a.stl+(s.stl||0),blk:a.blk+(s.blk||0),to:a.to+(s.to||0),
                fgm:a.fgm+(s.fgm||0),fga:a.fga+(s.fga||0)
              }),{pts:0,reb:0,ast:0,stl:0,blk:0,to:0,fgm:0,fga:0});
              const hasStats=allStats.length>0;
              const missedFG=agg.fga-agg.fgm;

              return `<tr style="border-bottom:1px solid var(--bg2);${t.eliminated?'opacity:.5':''}">
                <td style="padding:5px 6px">
                  <div style="display:flex;align-items:center;gap:6px">
                    <div onclick="openPlayerModal(${p.id})" style="cursor:default">${playerLogoHtml(p.team,24,p.name)}</div>
                    <div>
                      <span style="color:var(--text);cursor:pointer" onclick="openPlayerModal(${p.id})">${p.name}</span>
                      <span class="pos-badge" style="font-size:9px">${p.pos}</span>
                      ${isLive?'<span class="score-live" style="font-size:7px;margin-left:3px">LIVE</span>':''}
                      ${acqDate?'<span style="font-size:9px;color:var(--text3);margin-left:4px">picked up R'+((S.round)||1)+'</span>':''}
                      ${t.eliminated?'<span class="badge badge-elim" style="font-size:9px">ELIM</span>':inj?'<span class="badge badge-inj" style="font-size:9px">INJ</span>':''}
                    </div>
                  </div>
                </td>
                <td style="text-align:center">
                  <div style="font-family:'Press Start 2P',monospace;font-size:9px;color:${isLive?'var(--red)':hasStats?'var(--accent)':'var(--text3)'}">
                    ${hasStats?((playerFPPG(p.id,m.id)||0)>0?'+':'')+(playerFPPG(p.id,m.id)||0).toFixed(1):'—'}
                  </div>
                  ${hasStats?`<div style="font-size:10px;color:var(--text3)">${statScore>0?'+':''}${statScore.toFixed(1)} tot</div>`:''}
                  ${excludedFP>0?`<div style="font-size:9px;color:var(--red)" title="Stats before pickup not counted">-${excludedFP} excl</div>`:''}
                </td>
                <td style="text-align:center;color:var(--text2)">${hasStats?agg.pts:'—'}</td>
                <td style="text-align:center;color:var(--text2)">${hasStats?agg.reb:'—'}</td>
                <td style="text-align:center;color:var(--text2)">${hasStats?agg.ast:'—'}</td>
                <td style="text-align:center;color:var(--text2)">${hasStats?agg.stl:'—'}</td>
                <td style="text-align:center;color:var(--text2)">${hasStats?agg.blk:'—'}</td>
                <td style="text-align:center;color:${agg.to>0?'var(--red)':'var(--text2)'}">${hasStats?agg.to:'—'}</td>
                <td style="text-align:center;color:var(--green)">${bonus>0?'+'+bonus:'—'}</td>
                <td style="text-align:center;font-family:'Press Start 2P',monospace;font-size:10px;color:${playerTotal>0?'var(--accent2)':playerTotal<0?'var(--red)':'var(--text3)'}">${hasStats||bonus>0?`${playerTotal>0?'+':''}${playerTotal.toFixed(1)}`:'—'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>`:'<div style="font-size:14px;color:var(--text3);padding:6px 0">NO PLAYERS DRAFTED</div>'}
    </div>`;
  }).join('');
}




function renderWaiverLog(){
  // Just update the count badge on the button
  const countEl = document.getElementById('waiver-log-count');
  if(countEl){
    const count = (S.waiverLog||[]).length;
    if(count > 0){
      countEl.textContent = count;
      countEl.style.display = 'inline';
    } else {
      countEl.style.display = 'none';
    }
  }
}

function closeTransactionLog(){ const m=document.getElementById("transaction-log-modal"); if(m) m.remove(); }
function openTransactionLog(){
  const existing = document.getElementById('transaction-log-modal');
  if(existing) { existing.remove(); return; }

  const log = S.waiverLog||[];
  const modal = document.createElement('div');
  modal.id = 'transaction-log-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:10000;display:flex;align-items:center;justify-content:center;padding:1rem';
  modal.onclick = e => { if(e.target===modal) modal.remove(); };

  const buildEntry = entry => {
    const aColor = getAvatarColor(entry.managerId);
    const addP = PLAYERS.find(p=>p.id===entry.addPid);
    const dropP = entry.dropPid ? PLAYERS.find(p=>p.id===entry.dropPid) : null;
    const addPortrait = addP ? getActivePortrait(addP.name) : null;
    const dropPortrait = dropP ? getActivePortrait(dropP.name) : null;
    const teamColor = p => p ? (TEAM_LOGOS[p.team]?.color||'#4a9eff') : '#4a9eff';
    const date = new Date(entry.ts).toLocaleDateString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});
    const miniPortrait = (p, portrait) => portrait
      ? '<img src="'+portrait+'" style="width:32px;height:32px;object-fit:cover;object-position:center top;image-rendering:pixelated;border:1px solid '+teamColor(p)+';flex-shrink:0"/>'
      : '<div style="width:32px;height:32px;background:'+teamColor(p)+'22;border:1px solid '+teamColor(p)+'44;flex-shrink:0"></div>';

    return '<div style="display:flex;align-items:flex-start;gap:10px;padding:.625rem 0;border-bottom:1px solid var(--border2)">'
      +'<div style="width:32px;height:32px;border:2px solid '+aColor+';flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">'+getAvatar(entry.managerId,'sm')+'</div>'
      +'<div style="flex:1;min-width:0">'
        +'<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px">'
          +'<span style="font-size:14px;color:'+aColor+';font-weight:600">'+entry.managerName+'</span>'
          +'<span style="font-family:var(--font-pixel),monospace;font-size:7px;color:var(--green)">+ADD</span>'
          +miniPortrait(addP, addPortrait)
          +'<span style="font-size:13px;color:var(--text)">'+entry.addName+'</span>'
        +'</div>'
        +(dropP ? '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px">'
          +'<span style="font-size:14px;color:transparent">'+entry.managerName+'</span>'
          +'<span style="font-family:var(--font-pixel),monospace;font-size:7px;color:var(--red)">−DROP</span>'
          +miniPortrait(dropP, dropPortrait)
          +'<span style="font-size:13px;color:var(--text3)">'+entry.dropName+'</span>'
          +(entry.droppedFP ? '<span style="font-family:var(--font-pixel),monospace;font-size:7px;color:var(--accent2)">+'+entry.droppedFP.toFixed(0)+' FP KEPT</span>' : '')
          +'</div>' : '')
        +'<div style="font-size:11px;color:var(--text3)">Round '+( entry.round||1)+' · '+date+'</div>'
      +'</div>'
      +'</div>';
  };

  modal.innerHTML = '<div style="background:var(--panel);border:2px solid var(--border);width:100%;max-width:540px;max-height:85vh;display:flex;flex-direction:column">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;padding:.75rem 1rem;border-bottom:2px solid var(--border);flex-shrink:0">'
      +'<span style="font-family:var(--font-pixel),monospace;font-size:9px;color:var(--accent3)">📋 TRANSACTION LOG</span>'
      +"<button onclick=\"closeTransactionLog()\" style=\"background:none;border:none;color:var(--text2);font-size:22px;cursor:pointer;line-height:1\">×</button>"
    +'</div>'
    +'<div style="overflow-y:auto;padding:.75rem 1rem;flex:1">'
      +(log.length ? log.map(buildEntry).join('') : '<div style="text-align:center;padding:2rem;color:var(--text3);font-size:13px">No transactions yet.</div>')
    +'</div>'
    +'</div>';

  document.body.appendChild(modal);
}

// ── Teams Gallery ────────────────────────────────────────────────
function renderTeams(){
  const el = document.getElementById('tab-teams');
  if(!el) return;

  // Build a lookup of who owns each player
  const ownerMap = {};
  if(S.managers && S.rosters){
    for(const m of S.managers){
      for(const pid of (S.rosters[m.id]||[])){
        ownerMap[pid] = m.name;
      }
    }
  }

  const teamFilter = window._teamGalleryFilter || null;
  const sortMode = window._playerSortMode || 'fp';

  // Highlight active sort button
  ['fp','name','team','pos'].forEach(s=>{
    const btn = document.getElementById('psort-'+s);
    if(btn) btn.style.borderColor = s===sortMode ? 'var(--accent2)' : 'var(--border)';
    if(btn) btn.style.color = s===sortMode ? 'var(--accent2)' : 'var(--text2)';
  });

  // Team selector chips
  const showAvailable = window._showAvailableOnly || false;

  // Count available players
  const allRosteredIds = new Set(Object.values(S.rosters||{}).flat());
  const availableCount = PLAYERS.filter(p=>!allRosteredIds.has(p.id)&&TEAMS.some(t=>t.id===p.team)&&!getTeam(p.team)?.eliminated).length;

  const availChip = `<button onclick="window._showAvailableOnly=!window._showAvailableOnly;window._teamGalleryFilter=null;renderTeams()" style="
    padding:4px 10px;border:2px solid ${showAvailable?'var(--green)':'var(--border)'};
    background:${showAvailable?'rgba(0,255,136,.15)':'transparent'};
    color:${showAvailable?'var(--green)':'var(--text3)'};
    font-family:'VT323',monospace;font-size:14px;cursor:pointer;font-weight:${showAvailable?'bold':'normal'}
  ">🟢 AVAILABLE (${availableCount})</button>`;

  const allChip = `<button onclick="window._showAvailableOnly=false;window._teamGalleryFilter=null;renderTeams()" style="
    padding:4px 10px;border:2px solid ${!teamFilter&&!showAvailable?'var(--accent2)':'var(--border)'};
    background:${!teamFilter&&!showAvailable?'rgba(255,204,0,.1)':'transparent'};
    color:${!teamFilter&&!showAvailable?'var(--accent2)':'var(--text3)'};
    font-family:'VT323',monospace;font-size:14px;cursor:pointer;
  ">ALL</button>`;

  const chipHtml = allChip + availChip + TEAMS.map(t=>{
    const tc = (TEAM_LOGOS[t.id]?.color)||'#4a9eff';
    const active = teamFilter===t.id && !showAvailable;
    return `<button onclick="window._showAvailableOnly=false;setTeamGalleryFilter('${t.id}')" style="
      padding:4px 10px;border:2px solid ${active?tc:'var(--border)'};
      background:${active?tc+'22':'transparent'};color:${active?tc:'var(--text3)'};
      font-family:'VT323',monospace;font-size:14px;cursor:pointer;
      ${t.eliminated?'opacity:.4;text-decoration:line-through':''}
    ">${t.id}</button>`;
  }).join('');

  // Players to show
  const _allRosteredIds = new Set(Object.values(S.rosters||{}).flat());
  const playersToShow = showAvailable
    ? PLAYERS.filter(p=>!_allRosteredIds.has(p.id)&&TEAMS.some(t=>t.id===p.team)&&!getTeam(p.team)?.eliminated)
    : teamFilter
      ? PLAYERS.filter(p=>p.team===teamFilter)
      : PLAYERS.filter(p=>TEAMS.some(t=>t.id===p.team));

  // Sort
  const sorted = [...playersToShow].sort((a,b)=>{
    if(sortMode==='name'){
      const aLast = a.name.split(' ').pop();
      const bLast = b.name.split(' ').pop();
      return aLast.localeCompare(bLast);
    }
    if(sortMode==='team') return a.team.localeCompare(b.team);
    if(sortMode==='pos') return a.pos.localeCompare(b.pos);
    // Default: FPPG (best per-game performers first)
    return playerFPPG(b.id) - playerFPPG(a.id);
  });

  const cardHtml = sorted.map(p=>{
    const t = TEAMS.find(t=>t.id===p.team);
    const tc = (TEAM_LOGOS[p.team]?.color)||'#4a9eff';
    const hasPortrait = getActivePortrait(p.name);
    const logo = TEAM_LOGOS[p.team];
    const owner = ownerMap[p.id];
    const statScore = playerStatScore(p.id);
    const fppg = playerFPPG(p.id);
    const isLive = isPlayerLive(p.id);
    const elim = t?.eliminated;

    const cardW = IS_MOBILE ? 88 : 110;
    const imgW = cardW - 4;
    return `<div onclick="openPlayerModal(${p.id})" style="
      flex-shrink:0;width:${cardW}px;cursor:pointer;
      background:#020c18;border:2px solid ${elim?'#333':tc};
      display:flex;flex-direction:column;
      opacity:${elim?0.4:1};
      transition:transform .1s;
    " onmouseenter="this.style.transform='scale(1.04)'" onmouseleave="this.style.transform='scale(1)'">
      <!-- Portrait -->
      <div style="width:${imgW}px;height:${imgW}px;overflow:hidden;flex-shrink:0;background:#020c18;display:flex;align-items:center;justify-content:center;position:relative">
        ${hasPortrait
          ? `<img src="${getActivePortrait(p.name)}" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"/>`
          : logo
            ? `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:12px">${logo.svg}</div>`
            : `<div style="font-family:'Press Start 2P',monospace;font-size:10px;color:${tc}">${p.team}</div>`
        }
        ${isLive?`<div style="position:absolute;top:3px;left:3px;background:#ff3344;font-family:'Press Start 2P',monospace;font-size:5px;padding:2px 3px;color:#fff">LIVE</div>`:''}
        ${owner?`<div style="position:absolute;bottom:3px;right:3px;background:rgba(0,0,0,.8);font-size:9px;padding:1px 4px;color:var(--accent3);white-space:nowrap;overflow:hidden;max-width:90px;text-overflow:ellipsis">${owner}</div>`:''}
      </div>
      <!-- Divider -->
      <div style="height:2px;background:${elim?'#333':tc}"></div>
      <!-- Name bar -->
      <div style="padding:4px 5px;background:#020c18;flex:1">
        <div style="font-family:'Press Start 2P',monospace;font-size:5px;color:${elim?'#444':tc};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name.toUpperCase()}</div>
        <div style="font-size:9px;color:var(--text3);margin-top:2px">${p.pos}</div>
      </div>
      <!-- Stats bar -->
      <div style="padding:3px 5px 4px;background:#041428;border-top:1px solid ${tc}40;display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:9px;color:var(--text3)">${p.team}</span>
          ${injuryBadgeHtml(p.name,true)}
          ${(()=>{
            const _elim = getTeam(p.team)?.eliminated;
            if(_elim) return `<span style="font-family:'Press Start 2P',monospace;font-size:5px;padding:2px 4px;background:#33333388;border:1px solid #555;color:#666;margin-left:4px;cursor:default">ELIM</span>`;
            if(currentManagerId===null||currentManagerId==='viewer') return '';
            return showAvailable
              ? `<button onclick="event.stopPropagation();addToWatchlist(currentManagerId,${p.id})" style="font-family:'Press Start 2P',monospace;font-size:5px;padding:2px 4px;background:rgba(0,255,136,.1);border:1px solid var(--green);color:var(--green);cursor:pointer;margin-left:4px">+ WATCH</button>`
              : `<span onclick="event.stopPropagation();addToWatchlist(currentManagerId,${p.id})" title="Add to watchlist" style="cursor:pointer;font-size:10px;margin-left:3px;opacity:.6" onmouseenter="this.style.opacity=1" onmouseleave="this.style.opacity=.6">👁</span>`;
          })()}
        <div style="text-align:right">
          <div style="font-family:'Press Start 2P',monospace;font-size:6px;color:${isLive?'var(--red)':statScore!==0?'var(--accent2)':'var(--text3)'}">
            ${fppg>0||isLive?`${fppg>0?'+':''}${fppg.toFixed(1)}`:'—'}
          </div>
          ${playerGamesPlayed(p.id)>1?`<div style="font-size:8px;color:var(--text3)">${statScore>0?'+':''}${statScore.toFixed(1)}</div>`:''}
        </div>
      </div>
    </div>`;
  }).join('');

  // Build injury alert for drafted players
  const draftedInjured = Object.values(espnInjuries).filter(inj => {
    const p = PLAYERS.find(x=>x.name.toLowerCase()===inj.name.toLowerCase());
    if(!p) return false;
    return Object.values(S.rosters||{}).some(r=>r.includes(p.id));
  });

  const injAlertHtml = draftedInjured.length ? `
    <div style="margin-bottom:.75rem;padding:.625rem;background:rgba(255,51,68,.08);border:2px solid var(--red)">
      <div style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--red);margin-bottom:.5rem">🚑 INJURY REPORT — DRAFTED PLAYERS</div>
      ${draftedInjured.map(inj=>{
        const p = PLAYERS.find(x=>x.name.toLowerCase()===inj.name.toLowerCase());
        const ownerMid = Object.entries(S.rosters||{}).find(([,r])=>r.includes(p?.id))?.[0];
        const owner = S.managers?.find(m=>String(m.id)===ownerMid);
        const color = inj.status==='Out'?'var(--red)':'#ff9900';
        return `<div style="display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid var(--border2)">
          ${getActivePortrait(inj.name)?`<img src="${getActivePortrait(inj.name)}" style="width:28px;height:28px;object-fit:cover;object-position:center top;image-rendering:pixelated;border:1px solid ${color}"/>`:''}
          <div style="flex:1">
            <span style="font-size:13px;color:var(--text)">${inj.name}</span>
            <span style="font-family:'Press Start 2P',monospace;font-size:7px;padding:1px 4px;background:${color};color:#000;margin-left:6px">${inj.status==='Out'?'OUT':'DTD'}</span>
            ${owner?`<span style="font-size:11px;color:var(--text3);margin-left:6px">→ ${owner.name}</span>`:''}
            <div style="font-size:11px;color:var(--text3);margin-top:2px">${inj.comment?.slice(0,100)||''}</div>
          </div>
        </div>`;
      }).join('')}
    </div>` : '';

  document.getElementById('teams-chips').innerHTML = chipHtml;
  document.getElementById('teams-injury-alert').innerHTML = injAlertHtml;
  document.getElementById('teams-gallery').innerHTML = sorted.length
    ? `<div style="display:flex;flex-wrap:wrap;gap:6px;padding:4px 0">${cardHtml}</div>`
    : `<div style="color:var(--text3);padding:1rem">No players found.</div>`;
}

function setTeamGalleryFilter(teamId){
  window._teamGalleryFilter = (window._teamGalleryFilter===teamId) ? null : teamId;
  renderTeams();
}

function setPlayerSort(mode){
  window._playerSortMode = mode;
  renderTeams();
}


// ── Top Players Ticker ────────────────────────────────────────────
let _tickerAnimFrame = null;

function renderTopPlayersBanner(){
  const el = document.getElementById('top-players-ticker');
  if(!el) return;

  // Determine which day to show — today first, fall back to yesterday
  // Use ET date (games are scheduled in Eastern Time)
  const etNow = new Date(new Date().toLocaleString('en-US', {timeZone:'America/New_York'}));
  const fmt = d => d.toISOString().split('T')[0].replace(/-/g,'');
  const todayStr = [etNow.getFullYear(), String(etNow.getMonth()+1).padStart(2,'0'), String(etNow.getDate()).padStart(2,'0')].join('');
  const yestDate = new Date(etNow); yestDate.setDate(yestDate.getDate()-1);
  const yestStr = [yestDate.getFullYear(), String(yestDate.getMonth()+1).padStart(2,'0'), String(yestDate.getDate()).padStart(2,'0')].join('');

  // Collect today's game IDs (live + saved with today's date)
  const todayGameIds = new Set();
  Object.values(livePlayerStats||{}).forEach(s=>{ if(s.gameId) todayGameIds.add(s.gameId); });
  Object.values(S.playerStats||{}).forEach(s=>{ if(s.date===todayStr && s.gameId) todayGameIds.add(s.gameId); });

  // Fall back to yesterday if nothing today yet
  let activeGameIds = todayGameIds;
  let isYesterday = false;
  if(todayGameIds.size === 0){
    const yestGameIds = new Set();
    Object.values(S.playerStats||{}).forEach(s=>{ if(s.date===yestStr && s.gameId) yestGameIds.add(s.gameId); });
    activeGameIds = yestGameIds;
    isYesterday = yestGameIds.size > 0;
  }

  // Aggregate FP per player across active game IDs
  const playerTodayFP = {};
  Object.values(S.playerStats||{}).filter(s=>activeGameIds.has(s.gameId)).forEach(s=>{
    playerTodayFP[s.pid] = (playerTodayFP[s.pid]||0) + (s.fp||0);
  });
  Object.entries(livePlayerStats||{}).forEach(([pid,s])=>{
    if(!activeGameIds.has(s.gameId)) return;
    const alreadySaved = Object.values(S.playerStats||{}).some(x=>x.pid===parseInt(pid)&&x.gameId===s.gameId);
    if(!alreadySaved) playerTodayFP[parseInt(pid)] = (playerTodayFP[parseInt(pid)]||0) + (s.fp||0);
  });

  // Sort and take top 5
  const top5 = Object.entries(playerTodayFP)
    .filter(([,fp])=>fp>0)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,10)
    .map(([pid,fp],i)=>{
      const p = PLAYERS.find(x=>x.id===parseInt(pid));
      if(!p) return null;
      const portrait = getActivePortrait(p.name);
      const tc = TEAM_LOGOS[p.team]?.color||'#4a9eff';
      const medal = i===0?'🥇':i===1?'🥈':i===2?'🥉':'';
      return `<div class="ticker-item" onclick="openPlayerModal(${p.id})" style="cursor:default">
        ${medal?`<span style="font-size:13px">${medal}</span>`:`<span class="ticker-rank">#${i+1}</span>`}
        ${portrait
          ? `<div class="ticker-item-portrait" style="border:1px solid ${tc}"><img src="${portrait}"/></div>`
          : `<div class="ticker-item-portrait" style="background:${tc}22;border:1px solid ${tc}44;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:${tc}">${p.team}</span></div>`}
        <span class="ticker-name">${p.name.split(' ').pop()}</span>
        <span class="ticker-team">${p.team}</span>
        <span class="ticker-fp">${fp>0?'+':''}${fp.toFixed(1)}</span>
      </div>`;
    }).filter(Boolean);

  if(!top5.length){
    const labelEl = document.getElementById('top-players-label');
  if(labelEl) labelEl.textContent = isYesterday ? '📅 YESTERDAY' : '🔥 TODAY';
  el.innerHTML = '<div style="padding:0 16px;font-size:12px;color:var(--text3)">No games yet today</div>';
    el.style.animation = 'none';
    el.style.transform = '';
    return;
  }

  // Duplicate items for seamless loop
  const itemsHtml = top5.join('');
  // Update label — only show TODAY/YESTERDAY once live stats have loaded
  const _labelEl = document.getElementById('top-players-label');
  if(_labelEl) _labelEl.textContent = _liveStatsReady ? (isYesterday ? '📅 YESTERDAY' : '🔥 TODAY') : '🔥 TOP SCORERS';
  el.innerHTML = itemsHtml + itemsHtml; // doubled for seamless scroll

  // Measure single set width and animate
  requestAnimationFrame(()=>{
    const singleWidth = el.scrollWidth / 2;
    const duration = Math.max(12, singleWidth / 40); // ~40px/s
    el.style.animation = 'none';
    el.style.transform = '';
    // Use JS animation for smooth seamless loop
    let startTime = null;
    let pos = 0;
    function animate(ts){
      if(!startTime) startTime = ts;
      const elapsed = (ts - startTime) / 1000;
      pos = (elapsed * 40) % singleWidth;
      if(el.parentElement) el.style.transform = `translateX(-${pos}px)`;
      _tickerAnimFrame = requestAnimationFrame(animate);
    }
    if(_tickerAnimFrame) cancelAnimationFrame(_tickerAnimFrame);
    _tickerAnimFrame = requestAnimationFrame(animate);
  });
}
// ── Bracket ───────────────────────────────────────────────────────

function renderTopLeaderboard(){
  const el = document.getElementById('top-leaderboard-list');
  if(!el) return;
  const sorted = [...S.managers].sort((a,b)=>managerTotal(b.id)-managerTotal(a.id));
  const maxTotal = Math.max(1,...sorted.map(m=>managerTotal(m.id)));

  el.innerHTML = sorted.map((m,i)=>{
    const aColor = getAvatarColor(m.id);
    const total = managerTotal(m.id);
    const barPct = Math.round((total/maxTotal)*100);
    const medal = i===0?'🥇':i===1?'🥈':i===2?'🥉':'';
    const isMe = currentManagerId!==null && currentManagerId!=='viewer' && m.id===currentManagerId;

    // Today FP
    const etNow2 = new Date(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}));
    const todayStr2 = [etNow2.getFullYear(),String(etNow2.getMonth()+1).padStart(2,'0'),String(etNow2.getDate()).padStart(2,'0')].join('');
    const yestDate2 = new Date(etNow2); yestDate2.setDate(yestDate2.getDate()-1);
    const yestStr2 = [yestDate2.getFullYear(),String(yestDate2.getMonth()+1).padStart(2,'0'),String(yestDate2.getDate()).padStart(2,'0')].join('');
    const tgids = new Set();
    Object.values(livePlayerStats||{}).forEach(s=>{ if(s.gameId) tgids.add(s.gameId); });
    Object.values(S.playerStats||{}).forEach(s=>{ if(s.date===todayStr2 && s.gameId) tgids.add(s.gameId); });
    let _isYestLB = false;
    if(!tgids.size){ Object.values(S.playerStats||{}).forEach(s=>{ if(s.date===yestStr2 && s.gameId) tgids.add(s.gameId); }); _isYestLB = tgids.size>0; }
    const todayFP2 = (S.rosters[m.id]||[]).reduce((sum,pid)=>{
      const acqDate=S.waiverAcquisitions?.[m.id+'_'+pid]||null;
      let fp=0;
      Object.values(S.playerStats||{}).filter(s=>s.pid===pid&&tgids.has(s.gameId)).forEach(s=>{if(!acqDate||s.date>=acqDate) fp+=s.fp||0;});
      const live=livePlayerStats[pid];
      if(live&&tgids.has(live.gameId)){const saved=Object.values(S.playerStats||{}).some(s=>s.pid===pid&&s.gameId===live.gameId);if(!saved) fp+=live.fp||0;}
      return sum+fp;
    },0);

    // Live players
    const liveNames = (S.rosters[m.id]||[]).filter(pid=>isPlayerLive(pid))
      .map(pid=>getPlayer(pid)?.name.split(' ').pop()).filter(Boolean);

    return `<div style="padding:.5rem .75rem;border-bottom:1px solid var(--border2);${isMe?'background:'+aColor+'10;':''}cursor:pointer" onclick="openManagerProfile(${m.id})">
      <div style="display:flex;align-items:center;gap:8px">
        <!-- Rank -->
        <div style="min-width:24px;text-align:center;font-size:22px">${medal||('<span style="font-family:var(--font-pixel),monospace;font-size:9px;color:var(--text3)">#'+(i+1)+'</span>')}</div>
        <!-- Avatar -->
        <div style="width:32px;height:32px;border:2px solid ${aColor};flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">${getAvatar(m.id,'sm')}</div>
        <!-- Name + live -->
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;color:${aColor};font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m.name}</div>
          ${liveNames.length?`<div style="font-size:10px;color:var(--red)">● ${liveNames.join(', ')}</div>`:''}
        </div>
        <!-- Today -->
        ${shouldShowTodayFP(todayFP2,_isYestLB)?`<div style="font-family:'Press Start 2P',monospace;font-size:8px;color:${todayFP2>0?'var(--green)':'var(--red)'};white-space:nowrap">${todayFP2>0?'+':''}${todayFP2.toFixed(0)}</div>`:''}
        <!-- Total -->
        <div style="font-family:'Press Start 2P',monospace;font-size:${i===0?'18':'14'}px;color:${aColor};min-width:50px;text-align:right">${total}</div>
      </div>
      <!-- Bar -->
      <div style="height:3px;background:var(--border);margin-top:5px;margin-left:64px;position:relative">
        <div style="position:absolute;left:0;top:0;height:100%;width:${barPct}%;background:${aColor};transition:width .3s"></div>
      </div>
    </div>`;
  }).join('');
}



function shouldShowTodayFP(todayFP, isFromYesterday){
  if(!todayFP || todayFP === 0) return false;
  if(!isFromYesterday) return true; // Always show real today FP
  // Yesterday's FP — only show after live stats have loaded (avoids flash) AND before noon ET
  if(!_liveStatsReady) return false; // Still loading — don't show yesterday yet
  const etNow = new Date(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}));
  return etNow.getHours() < 12;
}

function openManagerProfile(mid){
  const existing = document.getElementById('mgr-profile-modal');
  if(existing){ existing.remove(); return; }

  const m = S.managers.find(x=>x.id===mid);
  if(!m) return;
  const aColor = getAvatarColor(mid);
  const roster = S.rosters[mid]||[];
  const total = managerTotal(mid);
  const stat = managerStatScore(mid);
  const bonus = managerBonusScore(mid);

  // Today FP
  const etNow = new Date(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}));
  const todayStr = [etNow.getFullYear(),String(etNow.getMonth()+1).padStart(2,'0'),String(etNow.getDate()).padStart(2,'0')].join('');
  const yestDate = new Date(etNow); yestDate.setDate(yestDate.getDate()-1);
  const yestStr = [yestDate.getFullYear(),String(yestDate.getMonth()+1).padStart(2,'0'),String(yestDate.getDate()).padStart(2,'0')].join('');
  const tgids = new Set();
  Object.values(livePlayerStats||{}).forEach(s=>{ if(s.gameId) tgids.add(s.gameId); });
  Object.values(S.playerStats||{}).forEach(s=>{ if(s.date===todayStr && s.gameId) tgids.add(s.gameId); });
  if(!tgids.size) Object.values(S.playerStats||{}).forEach(s=>{ if(s.date===yestStr && s.gameId) tgids.add(s.gameId); });
  const todayFP = roster.reduce((sum,pid)=>{
    const acqDate=S.waiverAcquisitions?.[mid+'_'+pid]||null;
    let fp=0;
    Object.values(S.playerStats||{}).filter(s=>s.pid===pid&&tgids.has(s.gameId)).forEach(s=>{if(!acqDate||s.date>=acqDate) fp+=s.fp||0;});
    const live=livePlayerStats[pid];
    if(live&&tgids.has(live.gameId)){const saved=Object.values(S.playerStats||{}).some(s=>s.pid===pid&&s.gameId===live.gameId);if(!saved) fp+=live.fp||0;}
    return sum+fp;
  },0);

  // Best player game
  const allGames = Object.values(S.playerStats||{}).filter(s=>roster.includes(s.pid)).map(s=>{
    const acqDate=S.waiverAcquisitions?.[mid+'_'+s.pid]||null;
    if(acqDate&&s.date<acqDate) return null;
    return {pid:s.pid,fp:s.fp||0,date:s.date,name:getPlayer(s.pid)?.name||''};
  }).filter(Boolean);
  const bestGame = allGames.sort((a,b)=>b.fp-a.fp)[0];
  const bestGameFmt = bestGame ? new Date(bestGame.date.replace(/(\d{4})(\d{2})(\d{2})/,'$1-$2-$3')).toLocaleDateString('en-US',{month:'short',day:'numeric'}) : null;

  // Round MVP
  const mvp = roster.map(pid=>{
    const p=getPlayer(pid); if(!p) return null;
    return {pid,name:p.name,fppg:playerFPPG(pid,mid),gp:playerGamesPlayedForManager(pid,mid)};
  }).filter(x=>x&&x.gp>0).sort((a,b)=>b.fppg-a.fppg)[0];

  // Live players
  const livePids = roster.filter(pid=>isPlayerLive(pid));

  // Build roster rows
  const rosterHtml = roster.map(pid=>{
    const p=getPlayer(pid); if(!p) return '';
    const t=getTeam(p.team);
    const tc=TEAM_LOGOS[p.team]?.color||'#4a9eff';
    const portrait=getActivePortrait(p.name);
    const isLive=isPlayerLive(pid);
    const elim=t?.eliminated;
    const fp=playerStatScore(pid,mid);
    const fppg=playerFPPG(pid,mid);
    const acqDate=S.waiverAcquisitions?.[mid+'_'+pid];
    const espnInj=getESPNInjury(p.name);
    return '<div onclick="closeManagerProfile();openPlayerModal('+pid+')" style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border2);cursor:pointer;opacity:'+(elim?.5:1)+'">'
      +'<div style="width:36px;height:36px;overflow:hidden;flex-shrink:0;border:1px solid '+(isLive?'var(--red)':elim?'#333':tc)+';position:relative">'
      +(portrait?'<img src="'+portrait+'" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"/>'
        :'<div style="width:100%;height:100%;background:'+tc+'22;display:flex;align-items:center;justify-content:center;font-size:9px;color:'+tc+'">'+p.team+'</div>')
      +(isLive?'<div style="position:absolute;top:0;left:0;right:0;background:rgba(255,51,68,.8);text-align:center;font-size:4px;font-family:var(--font-pixel),monospace;color:#fff">LIVE</div>':'')
      +'</div>'
      +'<div style="flex:1;min-width:0">'
        +'<div style="font-size:12px;color:'+(elim?'var(--text3)':'var(--text)')+';white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'
          +p.name
          +(espnInj&&espnInj.status==='Out'?'<span style="font-family:var(--font-pixel),monospace;font-size:5px;padding:1px 3px;background:var(--red);color:#fff;margin-left:4px">OUT</span>':'')
          +(acqDate?'<span style="font-size:9px;color:var(--text3);margin-left:4px">pickup</span>':'')
        +'</div>'
        +'<div style="font-size:10px;color:var(--text3)">'+(elim?'ELIM · ':'')+p.team+' · '+fppg.toFixed(1)+'/g</div>'
      +'</div>'
      +'<div style="font-family:var(--font-pixel),monospace;font-size:9px;color:'+(isLive?'var(--red)':fp>0?'var(--accent2)':'var(--text3)')+';text-align:right">'
        +(fp>0?'+':'')+fp.toFixed(0)
      +'</div>'
      +'</div>';
  }).join('');

  // ── Dropped / Eliminated players ──
  const droppedPlayers = [];
  // From waiver log — injury drops
  (S.waiverLog||[]).forEach(e=>{
    if(e.managerId===mid && e.dropPid){
      if(!droppedPlayers.find(d=>d.pid===e.dropPid))
        droppedPlayers.push({pid:e.dropPid, name:e.dropName||getPlayer(e.dropPid)?.name||'Unknown', fp:e.droppedFP||0, source:'dropped'});
    }
  });
  // From waiverSlotUsage — eliminated players
  Object.entries(S.waiverSlotUsage||{}).forEach(([k,v])=>{
    const m2 = k.match(/^(\d+)_elim_(\d+)$/);
    if(m2 && parseInt(m2[1])===mid){
      const pid=parseInt(m2[2]);
      if(!droppedPlayers.find(d=>d.pid===pid)){
        const p2=getPlayer(pid);
        droppedPlayers.push({pid, name:p2?.name||'Unknown', fp:playerStatScore(pid,mid), source:'elim'});
      }
    }
  });

  const droppedHtml = droppedPlayers.length ? (
    '<div style="padding:3px 0;border-top:1px dashed var(--border2);margin-top:4px">'    +'<div style="font-size:8px;color:var(--text3);padding:4px 0 2px;letter-spacing:.05em">DROPPED / ELIMINATED</div>'    +droppedPlayers.map(d=>{
      const p=getPlayer(d.pid);
      const portrait=p?getActivePortrait(p.name):null;
      const tc=p?(TEAM_LOGOS[p.team]?.color||'#4a9eff'):'#555';
      const tag=d.source==='elim'?'ELIM':'DROPPED';
      const tagColor=d.source==='elim'?'#ff6600':'#888';
      return '<div style="display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid var(--border2);opacity:.65">'        +'<div style="width:36px;height:36px;overflow:hidden;flex-shrink:0;border:1px solid #333;position:relative;filter:grayscale(80%)">'        +(portrait?'<img src="'+portrait+'" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"/>'          :'<div style="width:100%;height:100%;background:#11111188;display:flex;align-items:center;justify-content:center;font-size:9px;color:#555">'+(p?.team||'?')+'</div>')        +'<div style="position:absolute;top:0;left:0;right:0;background:rgba(0,0,0,.6);text-align:center;font-family:var(--font-pixel),monospace;font-size:4px;color:'+tagColor+'">'+tag+'</div>'        +'</div>'        +'<div style="flex:1;min-width:0">'          +'<div style="font-size:12px;color:var(--text3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+(d.name||p?.name||'Unknown')+'</div>'          +'<div style="font-size:9px;color:#555">'+(p?.team||'')+'</div>'        +'</div>'        +'<div style="font-family:var(--font-pixel),monospace;font-size:9px;color:'+(d.fp>0?'#997744':'#555')+';text-align:right">'          +(d.fp>0?'+':'')+d.fp.toFixed(0)        +'</div>'        +'</div>';
    }).join('')    +'</div>'
  ) : '';

  const modal = document.createElement('div');
  modal.id = 'mgr-profile-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:10000;display:flex;align-items:center;justify-content:center;padding:1rem';
  modal.onclick = e=>{ if(e.target===modal) modal.remove(); };

  modal.innerHTML = '<div style="background:var(--panel);border:2px solid '+aColor+';width:100%;max-width:480px;max-height:88vh;display:flex;flex-direction:column;overflow:hidden">'
    // Header
    +'<div style="display:flex;align-items:center;gap:10px;padding:.75rem 1rem;border-bottom:2px solid var(--border);flex-shrink:0;background:'+aColor+'18">'
      +'<div style="width:44px;height:44px;border:2px solid '+aColor+';display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0">'+getAvatar(mid,'sm')+'</div>'
      +'<div style="flex:1">'
        +'<div style="font-family:var(--font-pixel),monospace;font-size:11px;color:'+aColor+'">'+m.name.toUpperCase()+'</div>'
        +'<div style="font-size:11px;color:var(--text3)">'+stat.toFixed(0)+' stat + '+bonus+' bonus</div>'
      +'</div>'
      +'<div style="text-align:right">'
        +'<div style="font-family:var(--font-pixel),monospace;font-size:22px;color:'+aColor+'">'+total+'</div>'
        +(todayFP!==0?'<div style="font-size:11px;color:'+(todayFP>0?'var(--green)':'var(--red)')+'"">'+(todayFP>0?'+':'')+todayFP.toFixed(0)+' today</div>':'')
      +'</div>'
      +"<button onclick=\"closeManagerProfile()\" style=\"background:none;border:none;color:var(--text3);font-size:22px;cursor:pointer;margin-left:4px;flex-shrink:0\">×</button>"
    +'</div>'
    // Live strip
    +(livePids.length?'<div style="background:rgba(255,51,68,.08);border-bottom:1px solid #ff334433;padding:5px 1rem;display:flex;align-items:center;gap:8px;flex-wrap:wrap;flex-shrink:0">'
      +'<span style="font-family:var(--font-pixel),monospace;font-size:7px;color:var(--red)">● LIVE NOW</span>'
      +livePids.map(pid=>{
        const p=getPlayer(pid);const live=livePlayerStats[pid];
        return '<span style="font-size:12px;color:var(--text)">'+p.name.split(' ').pop()+'</span>'
          +'<span style="font-family:var(--font-pixel),monospace;font-size:7px;color:var(--red)">'+(live?'+'+(live.fp||0).toFixed(0):'')+'</span>';
      }).join('<span style="color:var(--border2)"> · </span>')
      +'</div>':'')
    // Highlights bar
    +'<div style="display:flex;gap:0;border-bottom:1px solid var(--border);flex-shrink:0">'
      +(bestGame?'<div style="flex:1;padding:6px 10px;border-right:1px solid var(--border);text-align:center">'
        +'<div style="font-size:9px;color:var(--text3)">Best Game</div>'
        +'<div style="font-family:var(--font-pixel),monospace;font-size:9px;color:var(--accent2)">'+bestGame.fp+' FP</div>'
        +'<div style="font-size:10px;color:var(--text)">'+bestGame.name.split(' ').pop()+' · '+bestGameFmt+'</div>'
        +'</div>':'')
      +(mvp?'<div style="flex:1;padding:6px 10px;text-align:center">'
        +'<div style="font-size:9px;color:var(--text3)">Round MVP</div>'
        +'<div style="font-family:var(--font-pixel),monospace;font-size:9px;color:var(--accent2)">'+mvp.fppg.toFixed(1)+'/g</div>'
        +'<div style="font-size:10px;color:var(--text)">'+mvp.name.split(' ').pop()+'</div>'
        +'</div>':'')
    +'</div>'
    // Roster list
    +'<div style="overflow-y:auto;padding:.5rem 1rem;flex:1">'
      +rosterHtml+droppedHtml
    +'</div>'
    +'</div>';

  document.body.appendChild(modal);
}

function closeManagerProfile(){
  document.getElementById('mgr-profile-modal')?.remove();
}

function closeBracketModal(){ const m=document.getElementById("bracket-modal"); if(m) m.remove(); }
function openBracketModal(){
  const existing = document.getElementById('bracket-modal');
  if(existing){ existing.remove(); return; }
  // Make sure bracket is rendered
  renderBracket();
  const bracketHtml = document.getElementById('bracket-section')?.innerHTML||'';
  const modal = document.createElement('div');
  modal.id = 'bracket-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:10000;display:flex;align-items:center;justify-content:center;padding:1rem';
  modal.onclick = e=>{ if(e.target===modal) modal.remove(); };
  modal.innerHTML = '<div style="background:var(--panel);border:2px solid var(--border);width:100%;max-width:900px;max-height:90vh;overflow:auto">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;padding:.625rem .875rem;border-bottom:2px solid var(--border);position:sticky;top:0;background:var(--panel)">'
    +'<span style="font-family:var(--font-pixel),monospace;font-size:9px;color:var(--accent3)">🗓 2026 PLAYOFF BRACKET</span>'
    +"<button onclick=\"closeBracketModal()\" style=\"background:none;border:none;color:var(--text2);font-size:22px;cursor:pointer;line-height:1\">×</button>"
    +'</div>'
    +'<div style="padding:.75rem">'+bracketHtml+'</div>'
    +'</div>';
  document.body.appendChild(modal);
}

// ── BOSS BATTLE SYSTEM ───────────────────────────────────────────
// S.bossBattle = {
//   active: bool,
//   round: 2|3|4,
//   bossName: "Jayson Tatum",
//   bossPid: 1,
//   bossHP: 175,
//   bossPortraitIdx: 1, // which portrait index to use (0=normal, 1=boss)
//   bossLabel: "THE CELTICS EMPEROR",  // flavor text
//   reward: 25, // FP reward for winning
//   champions: {0:pid, 1:pid, ...}, // managerId -> champion pid
//   defeated: false,
//   defeatedTs: null,
//   badgesAwarded: false,
// }

function getBossBattle(){ return S.bossBattle||null; }

function getBossHP(){
  const bb = getBossBattle(); if(!bb) return 0;
  return bb.bossHP||0;
}

function getBossDamage(){
  // Sum FP of all selected champions
  const bb = getBossBattle(); if(!bb) return 0;
  return S.managers.reduce((sum,m)=>{
    const champPid = bb.champions?.[m.id];
    if(!champPid) return sum;
    return sum + playerStatScore(champPid, m.id);
  }, 0);
}

function getBossPortrait(){
  const bb = getBossBattle(); if(!bb) return null;
  const portraits = PLAYER_PORTRAITS[bb.bossName];
  if(!portraits) return null;
  const arr = Array.isArray(portraits) ? portraits : [portraits];
  const idx = Math.min(bb.bossPortraitIdx||0, arr.length-1);
  return arr[idx];
}

async function checkBossVictory(){
  const bb = getBossBattle();
  if(!bb||!bb.active||bb.defeated) return;
  const damage = getBossDamage();
  if(damage >= bb.bossHP){
    // VICTORY!
    bb.defeated = true;
    bb.defeatedTs = new Date().toISOString();
    // Award FP to all participants
    if(!S.droppedFP) S.droppedFP={};
    for(const m of S.managers){
      if(bb.champions?.[m.id]){
        S.droppedFP[m.id] = (S.droppedFP[m.id]||0) + (bb.reward||0);
      }
    }
    // Award badges
    if(!S.badges) S.badges={};
    const badgeName = bb.round===4?'final_boss':'boss_battle_r'+bb.round;
    for(const m of S.managers){
      if(bb.champions?.[m.id]){
        if(!S.badges[m.id]) S.badges[m.id]=[];
        if(!S.badges[m.id].includes(badgeName)) S.badges[m.id].push(badgeName);
      }
    }
    bb.badgesAwarded = true;
    await saveState();
    render();
    // Victory chat notification
    try{
      const chatState = await loadChatState();
      const dmg = getBossDamage().toFixed(0);
      chatState.push({
        id:Date.now(), name:'NBA ARCADE', managerId:'system', avatarIdx:0,
        text:`🏆 BOSS DEFEATED! ${bb.bossName} (${bb.bossHP} HP) has been slain! Combined damage: ${dmg} FP. +${bb.reward} FP awarded to all Champions! Badges earned! 🗡️`,
        ts: new Date().toISOString()
      });
      await db.from('leagues').upsert({id:'nba-chat-2026', state:JSON.stringify(chatState)});
    }catch(e){}
    showToast(`🏆 BOSS DEFEATED! +${bb.reward} FP awarded!`, 'warn');
  }
}

async function selectChampion(mid, pid){
  if(currentManagerId !== mid && !isCommissioner){showToast('You can only pick your own champion','error');return;}
  const bb = getBossBattle();
  if(!bb||!bb.active){showToast('No active Boss Battle','error');return;}
  if(bb.defeated){showToast('Battle is already over!','error');return;}
  if(!(S.rosters[mid]||[]).includes(pid)){showToast('Player must be on your roster','error');return;}
  const p = getPlayer(pid);
  const m = S.managers.find(x=>x.id===mid);
  if(!confirm(`Set ${p?.name} as your Champion for the Boss Battle?\n\nYou cannot change your champion once selected.`)) return;
  if(!S.bossBattle.champions) S.bossBattle.champions={};
  S.bossBattle.champions[mid] = pid;
  await saveState();
  render();
  showToast(`${p?.name} is now your Champion! ⚔`, 'info');
}

async function setBossConfig(bossData){
  if(!isCommissioner){showToast('Commissioner only','error');return;}
  S.bossBattle = {...(S.bossBattle||{}), ...bossData};
  await saveState();
  render();
  showToast('Boss Battle updated!','info');
}

// ── BOSS BATTLE SCENE — SNES FF3 Style ─────────────────────────
// Commissioner-only staging until battle is made public

// ── BOSS BATTLE V2 — Full RPG System ─────────────────────────────

// ── Champion HP from Series Record ──────────────────────────────
function getChampionHP(pid){
  const p = getPlayer(pid); if(!p) return 0;
  const team = getTeam(p.team);
  if(!team || team.eliminated) return 0;
  const allTeams = S.teams.filter(t=>t.id!==team.id);
  for(const opp of allTeams){
    const sr = getSeriesRecord(team.id, opp.id);
    if(!sr) continue;
    const tw = sr.wins[team.id]||0;
    const ow = sr.wins[opp.id]||0;
    if(tw+ow === 0) continue;
    return Math.max(0, 100 - (ow * 25));
  }
  return 100;
}

function getChampionSeriesStatus(pid){
  const p = getPlayer(pid); if(!p) return {wins:0,losses:0,summary:''};
  const team = getTeam(p.team);
  if(!team || team.eliminated) return {wins:0,losses:0,summary:'ELIMINATED'};
  const allTeams = S.teams.filter(t=>!t.eliminated && t.id!==team.id);
  for(const opp of allTeams){
    const sr = getSeriesRecord(team.id, opp.id);
    if(!sr) continue;
    const tw = sr.wins[team.id]||0;
    const ow = sr.wins[opp.id]||0;
    if(tw+ow === 0) continue;
    return {wins:tw, losses:ow, summary:sr.summary, opp:opp.id};
  }
  return {wins:0,losses:0,summary:'No series'};
}

// ── Attack System ────────────────────────────────────────────────
// S.bossBattle.attackPool[mid] = unspent FP available to attack with
// S.bossBattle.bossCurrentHP, minion1CurrentHP, minion2CurrentHP
// S.bossBattle.attackLog = [{mid, pid, fp, target, ts}]

async function directAttack(mid, target){
  // target: 'boss' | 'minion1' | 'minion2'
  if(currentManagerId !== mid && !isCommissioner){showToast('You can only attack with your own champion','error');return;}
  const bb = getBossBattle();
  if(!bb?.active || bb?.defeated){showToast('No active battle','error');return;}
  const champPid = bb.champions?.[mid];
  if(!champPid){showToast('Pick a champion first!','error');return;}

  // Calculate available attack FP (earned since last attack)
  const totalFP = playerStatScore(champPid, mid);
  const spentFP = (bb.attackLog||[]).filter(a=>a.mid===mid).reduce((s,a)=>s+a.fp,0);
  const availableFP = Math.max(0, totalFP - spentFP);

  if(availableFP <= 0){
    showToast('No FP available to attack with yet!','error');
    return;
  }

  const p = getPlayer(champPid);
  const targetLabels = {boss:bb?.bossLabel||'DUNKMAW',minion1:bb?.minion1Name||'GUS',minion2:bb?.minion2Name||'RIMREAPER'};
  if(!confirm(`${p?.name} attacks ${targetLabels[target]} for ${availableFP.toFixed(0)} FP damage!\n\nConfirm?`)) return;

  if(!S.bossBattle.attackLog) S.bossBattle.attackLog = [];
  S.bossBattle.attackLog.push({mid, pid:champPid, fp:availableFP, target, ts:new Date().toISOString()});

  // Apply damage
  const dmg = availableFP;
  if(target==='boss'){
    S.bossBattle.bossCurrentHP = Math.max(0,(S.bossBattle.bossCurrentHP??bb.bossHP) - dmg);
  } else if(target==='minion1'){
    S.bossBattle.minion1CurrentHP = Math.max(0,(S.bossBattle.minion1CurrentHP??bb.minion1HP??45) - dmg);
  } else if(target==='minion2'){
    S.bossBattle.minion2CurrentHP = Math.max(0,(S.bossBattle.minion2CurrentHP??bb.minion2HP??45) - dmg);
  }

  await saveState();
  render();
  showToast(`⚔ ${p?.name} deals ${dmg.toFixed(0)} DMG to ${targetLabels[target]}!`,'warn');

  // Trigger damage flash animation
  const flash = document.getElementById('damage-flash');
  if(flash){
    flash.style.background='rgba(255,220,0,.35)';
    setTimeout(()=>flash.style.background='rgba(255,220,0,0)',300);
  }

  // Check if boss/minions defeated
  await checkBossVictoryV2();
}

async function checkBossVictoryV2(){
  const bb = getBossBattle();
  if(!bb?.active || bb?.defeated) return;
  const bossHP = S.bossBattle.bossCurrentHP ?? bb.bossHP;
  if(bossHP <= 0){
    bb.defeated = true;
    bb.defeatedTs = new Date().toISOString();
    // Award FP + badges
    if(!S.droppedFP) S.droppedFP={};
    if(!S.badges) S.badges={};
    const badgeName = bb.round===4?'final_boss':'boss_battle_r'+bb.round;
    for(const m of S.managers){
      if(bb.champions?.[m.id]){
        S.droppedFP[m.id]=(S.droppedFP[m.id]||0)+(bb.reward||0);
        if(!S.badges[m.id]) S.badges[m.id]=[];
        if(!S.badges[m.id].includes(badgeName)) S.badges[m.id].push(badgeName);
      }
    }
    await saveState();
    render();
    try{
      const chatState = await loadChatState();
      chatState.push({id:Date.now(),name:'NBA ARCADE',managerId:'system',avatarIdx:0,
        text:`🏆 BOSS DEFEATED! The Basketball Monster has fallen! +${bb.reward} FP awarded to all Champions! Badges earned! ⚔`,
        ts:new Date().toISOString()});
      await db.from('leagues').upsert({id:'nba-chat-2026',state:JSON.stringify(chatState)});
    }catch(e){}
    showToast(`🏆 BOSS DEFEATED! +${bb.reward} FP awarded!`,'warn');
  }
}

// ── Main Render ──────────────────────────────────────────────────
function renderBossBattleScene(){
  const el = document.getElementById('boss-battle-content');
  if(!el) return;
  const bb = getBossBattle();
  const mid = currentManagerId;
  const isStaging = !bb?.active && isCommissioner;
  const isPublic = bb?.active;

  if(!isStaging && !isPublic){
    el.innerHTML = `<div style="padding:2rem;text-align:center">
      <div style="font-family:'Press Start 2P',monospace;font-size:16px;color:#ff3344;text-shadow:0 0 20px #ff334488;margin-bottom:.75rem">⚔ BOSS BATTLE</div>
      <div style="font-family:'Press Start 2P',monospace;font-size:9px;color:#ff9900;margin-bottom:.5rem;animation:blink .9s step-end infinite">COMING SOON</div>
      <div style="font-size:13px;color:var(--text3);max-width:300px;margin:0 auto .75rem">Each round a legendary basketball monster appears. Your champions must defeat it together.</div>
      ${(isCommissioner||currentManagerId===4)?renderBossCommPanel(bb):''}
    </div>`;
    return;
  }

  // Get sprites
  const getSprite = name => CUSTOM_LOGOS.find(l=>l.name.toLowerCase()===name.toLowerCase())?.dataUri||null;
  const bossSunImg  = getSprite('Boss_Main') || getSprite('Boss_Sun');
  const minion1Img  = getSprite('Boss_Minion1');
  const minion2Img  = getSprite('Boss_Minion2');

  // HP values
  const bossMaxHP = bb?.bossHP || 175;
  const bossCurrentHP = S.bossBattle?.bossCurrentHP ?? bossMaxHP;
  const minion1MaxHP = bb?.minion1HP || 45;
  const minion1CurrentHP = S.bossBattle?.minion1CurrentHP ?? minion1MaxHP;
  const minion2MaxHP = bb?.minion2HP || 45;
  const minion2CurrentHP = S.bossBattle?.minion2CurrentHP ?? minion2MaxHP;

  // Champion data
  const champions = S.managers.map(m=>{
    const pid = bb?.champions?.[m.id];
    const p = pid ? getPlayer(pid) : null;
    const portrait = p ? getActivePortrait(p.name) : null;
    // Only count Round 2 FP (May 5 onward)
    const R2_START = '20260505';
    const fp = p ? Object.values(S.playerStats||{}).filter(s=>s.pid===pid&&s.date>=R2_START).reduce((sum,s)=>{
      const acq=S.waiverAcquisitions?.[m.id+'_'+pid];
      return sum+((!acq||s.date>=acq)?s.fp||0:0);
    },0) : 0;
    // Add live FP if playing now and R2
    const _liveFP = p && isPlayerLive(pid) ? (() => {
      const live = livePlayerStats[pid];
      if(!live) return 0;
      const saved = Object.values(S.playerStats||{}).some(s=>s.pid===pid&&s.gameId===live.gameId);
      return saved ? 0 : (live.fp||0);
    })() : 0;
    const totalFP = fp + _liveFP;
    const spentFP = (bb?.attackLog||[]).filter(a=>a.mid===m.id).reduce((s,a)=>s+a.fp,0);
    const availFP = Math.max(0, totalFP - spentFP);
    const fp_display = totalFP;
    const hp = p ? getChampionHP(pid) : 0;
    const series = p ? getChampionSeriesStatus(pid) : null;
    const aColor = getAvatarColor(m.id);
    const isLive = p ? isPlayerLive(pid) : false;
    const isMe = m.id === mid;
    const isElim = p ? (getTeam(p.team)?.eliminated || hp===0) : false;
    return {m, p, pid, portrait, fp, spentFP, availFP, hp, series, aColor, isLive, isMe, isElim};
  });

  injectBossCSS();

  el.innerHTML = `<div style="font-family:'Press Start 2P',monospace">

    ${isStaging?`<div style="background:rgba(255,153,0,.12);border:1px dashed #ff9900;padding:5px 10px;text-align:center;font-size:7px;color:#ff9900;margin-bottom:8px">🔓 COMMISSIONER PREVIEW — NOT YET PUBLIC</div>`:''}

    <!-- ══ BATTLE ARENA ══ -->
    <div id="boss-arena" style="position:relative;width:100%;height:${IS_MOBILE?220:280}px;overflow:hidden;border:3px solid #2a1a0a;margin-bottom:0">
      <!-- Background: custom image if uploaded, else canvas animation -->
      ${(()=>{
        const bg = CUSTOM_LOGOS.find(l=>l.name==='Boss_Background');
        return bg
          ? `<img src="${bg.dataUri}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;image-rendering:pixelated"/>`
          : `<canvas id="boss-bg-canvas" style="position:absolute;inset:0;width:100%;height:100%"></canvas>`;
      })()}

      <!-- BOSS MONSTERS — center, full arena -->
      <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;z-index:4">
        <!-- Minions row above boss -->
        <div style="display:flex;gap:24px;margin-bottom:6px">
          ${[{img:minion1Img,label:bb?.minion1Name||'GUS',hp:minion1CurrentHP,max:minion1MaxHP},{img:minion2Img,label:bb?.minion2Name||'RIMREAPER',hp:minion2CurrentHP,max:minion2MaxHP}].map(mn=>`
          <div style="text-align:center;opacity:${mn.hp<=0?.3:1}">
            ${mn.hp<=0?'<div style="font-size:24px">💀</div>':
              mn.img?`<img src="${mn.img}" style="width:${IS_MOBILE?52:68}px;height:${IS_MOBILE?52:68}px;object-fit:contain;image-rendering:pixelated;animation:boss-float 2.8s ease-in-out infinite .3s"/>`:
              `<div style="font-size:${IS_MOBILE?36:48}px;animation:boss-float 2.8s ease-in-out infinite .3s">👹</div>`}
            <div style="font-family:'Press Start 2P',monospace;font-size:6px;color:#cc4400;margin-top:2px;text-shadow:0 0 6px #cc440066">${mn.label}</div>
            <div style="height:4px;width:${IS_MOBILE?52:68}px;background:#1a0808;border:1px solid #cc440044;margin-top:2px">
              <div style="height:100%;width:${Math.max(0,Math.round(mn.hp/mn.max*100))}%;background:${mn.hp/mn.max>.5?'#cc4400':'#ff3344'};transition:width .5s"></div>
            </div>
          </div>`).join('')}
        </div>
        <!-- Main Boss -->
        <div style="position:relative;text-align:center">
          ${bossCurrentHP<=0?`<div style="font-size:${IS_MOBILE?56:72}px">💀</div>`
            :bossSunImg?`<img src="${bossSunImg}" style="width:${IS_MOBILE?90:120}px;height:${IS_MOBILE?90:120}px;object-fit:contain;image-rendering:pixelated;animation:boss-float 3s ease-in-out infinite${bossCurrentHP/bossMaxHP<.3?',boss-shake .12s infinite':''}"/>`
            :`<div style="font-size:${IS_MOBILE?64:84}px;animation:boss-float 3s ease-in-out infinite">🏀</div>`}
          <div style="font-family:'Press Start 2P',monospace;font-size:7px;color:#ff6600;margin-top:3px;text-shadow:0 0 8px #ff660088">${(bb?.bossLabel||'DUNKMAW').toUpperCase()}</div>
        </div>
      </div>

      <!-- Damage flash -->
      <div id="damage-flash" style="position:absolute;inset:0;background:rgba(255,220,0,0);pointer-events:none;transition:background .15s;z-index:10"></div>

      <!-- Victory overlay -->
      ${bb?.defeated?`<div style="position:absolute;inset:0;background:rgba(0,0,0,.75);display:flex;align-items:center;justify-content:center;z-index:20">
        <div style="text-align:center">
          <div style="font-size:${IS_MOBILE?14:22}px;color:#ffcc00;text-shadow:0 0 20px #ffcc00;animation:victory-pulse 1s ease-in-out infinite">🏆 DEFEATED 🏆</div>
          <div style="font-size:8px;color:#fff;margin-top:8px">+${bb.reward} FP AWARDED TO ALL CHAMPIONS</div>
        </div>
      </div>`:''}
    </div>

    <!-- ══ CHAMPIONS ROW — below arena ══ -->
    <div style="background:#08040f;border:3px solid #2a1a0a;border-top:none;padding:8px 4px 6px;margin-bottom:8px">
      <div style="font-size:6px;color:#666;text-align:center;letter-spacing:.1em;margin-bottom:5px">⚔ CHAMPIONS</div>
      <div style="display:flex;justify-content:space-around;align-items:flex-start">
        ${champions.map(c=>`
        <div style="text-align:center;width:${IS_MOBILE?'15':'16'}%;opacity:${c.isElim?.4:1}">
          <!-- Portrait -->
          <div onclick="${c.isMe&&!bb?.defeated?'openChampionPicker('+c.m.id+')':''}"
            style="width:100%;aspect-ratio:1;overflow:hidden;border:2px solid ${c.p?c.aColor:'#333'};background:#0a0510;position:relative;cursor:${c.isMe&&!bb?.defeated?'pointer':'default'}">
            ${c.portrait?`<img src="${c.portrait}" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"/>`
              :c.p?`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:8px;color:${c.aColor}">${c.p.team}</div>`
              :`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:10px;color:#444">?</div>`}
            ${c.isLive?`<div style="position:absolute;top:0;left:0;right:0;background:rgba(255,51,68,.8);font-size:4px;text-align:center;padding:1px;color:#fff">LIVE</div>`:''}
            ${c.isElim?`<div style="position:absolute;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;font-size:10px">💀</div>`:''}
          </div>
          <!-- Manager name -->
          <div style="font-size:5px;color:${c.aColor};margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.m.name.toUpperCase()}</div>
          <!-- HP bar -->
          <div style="height:3px;background:#1a1a2a;margin-top:1px">
            <div style="height:100%;width:${c.hp}%;background:${c.hp>60?'var(--green)':c.hp>30?'#ff9900':'var(--red)'};transition:width .5s"></div>
          </div>
          <!-- FP/Attack bar -->
          <div style="height:3px;background:#1a1a2a;margin-top:1px">
            <div style="height:100%;width:${Math.min(100,c.availFP/(bossMaxHP/6)*100)}%;background:#ffcc00;transition:width .5s"></div>
          </div>
          <!-- Available FP -->
          ${c.availFP>0&&c.isMe&&!bb?.defeated?`<div style="font-size:5px;color:#ffcc00">⚔${c.availFP.toFixed(0)}</div>`:''}
        </div>`).join('')}
      </div>



      <!-- Victory overlay -->
      ${bb?.defeated?`<div style="position:absolute;inset:0;background:rgba(0,0,0,.75);display:flex;align-items:center;justify-content:center;z-index:20">
        <div style="text-align:center">
          <div style="font-size:${IS_MOBILE?14:22}px;color:#ffcc00;text-shadow:0 0 20px #ffcc00;animation:victory-pulse 1s ease-in-out infinite">🏆 DEFEATED 🏆</div>
          <div style="font-size:8px;color:#fff;margin-top:8px">+${bb.reward} FP AWARDED TO ALL CHAMPIONS</div>
        </div>
      </div>`:''}
    </div>

    <!-- ══ HP BARS ══ -->
    <div style="background:#050510;border:2px solid #2a1a3a;padding:.5rem .75rem;margin-bottom:6px">
      <div style="font-size:6px;color:#cc6600;margin-bottom:5px;letter-spacing:.1em">ENEMY HP</div>
      ${[
        {label:(bb?.bossLabel||'DUNKMAW').toUpperCase(),icon:'🏀',cur:bossCurrentHP,max:bossMaxHP,color:'#ff6600'},
        {label:(bb?.minion1Name||'GUS').toUpperCase(),icon:'👹',cur:minion1CurrentHP,max:minion1MaxHP,color:'#cc2200'},
        {label:(bb?.minion2Name||'RIMREAPER').toUpperCase(),icon:'👹',cur:minion2CurrentHP,max:minion2MaxHP,color:'#cc2200'},
      ].map(e=>{
        const pct=Math.max(0,Math.round(e.cur/e.max*100));
        const bc=pct>50?e.color:pct>25?'#ff9900':'#ff3344';
        return `<div style="margin-bottom:4px">
          <div style="display:flex;justify-content:space-between;margin-bottom:1px">
            <span style="font-size:6px;color:${e.color}">${e.icon} ${e.label}</span>
            <span style="font-size:6px;color:${bc}">${e.cur<=0?'DEFEATED':e.cur+'/'+e.max}</span>
          </div>
          <div style="height:10px;background:#0a0a0a;border:1px solid ${e.color}33;position:relative;overflow:hidden">
            <div style="position:absolute;left:0;top:0;height:100%;width:${pct}%;background:${bc};transition:width .6s;box-shadow:0 0 4px ${bc}66"></div>
          </div>
        </div>`;
      }).join('')}
    </div>

    <!-- ══ CHAMPION STATUS ══ -->
    <div style="background:#050510;border:2px solid #1a2a1a;padding:.5rem .75rem;margin-bottom:6px">
      <div style="font-size:6px;color:#00cc66;margin-bottom:5px;letter-spacing:.1em">CHAMPIONS</div>
      ${champions.map(c=>{
        const isMe = c.isMe && !bb?.defeated;
        const aColor = c.aColor;
        return `<div style="display:flex;align-items:center;gap:6px;padding:4px 0;border-bottom:1px solid #1a1a2a">
          <!-- Avatar -->
          <div style="width:16px;height:16px;border:1px solid ${aColor};overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">${getAvatar(c.m.id,'sm')}</div>
          <!-- Name + champion -->
          <div style="flex:1;min-width:0">
            <div style="font-size:6px;color:${aColor}">${c.m.name.toUpperCase()}</div>
            <div style="font-size:9px;color:${c.isElim?'#555':'var(--text2)'}">${c.p?c.p.name.split(' ').pop():(isMe?'⚔ PICK CHAMPION':'—')}</div>
          </div>
          <!-- Series record -->
          <div style="font-size:8px;color:var(--text3);text-align:center;min-width:40px">
            ${c.series?`${c.series.wins}-${c.series.losses}`:'—'}
            <div style="font-size:5px;color:${c.hp>60?'var(--green)':c.hp>30?'#ff9900':'var(--red)'}">HP ${c.hp}%</div>
          </div>
          <!-- Available FP + Attack button -->
          <div style="text-align:right;min-width:60px">
            <div style="font-size:8px;color:${c.availFP>0?'#ffcc00':'#444'}">⚔ ${c.availFP.toFixed(0)} FP</div>
            ${isMe&&c.availFP>0&&!c.isElim?`
            <div style="display:flex;gap:2px;margin-top:2px;flex-wrap:wrap">
              ${bossCurrentHP>0?`<button onclick="directAttack(${c.m.id},'boss')" style="font-size:5px;padding:2px 3px;background:rgba(255,102,0,.2);border:1px solid #ff6600;color:#ff6600;cursor:pointer">⚔${(bb?.bossLabel||'DUNKMAW').split(' ')[0]}</button>`:''}
              ${minion1CurrentHP>0?`<button onclick="directAttack(${c.m.id},'minion1')" style="font-size:5px;padding:2px 3px;background:rgba(204,34,0,.2);border:1px solid #cc2200;color:#cc2200;cursor:pointer">⚔${bb?.minion1Name||'GUS'}</button>`:''}
              ${minion2CurrentHP>0?`<button onclick="directAttack(${c.m.id},'minion2')" style="font-size:5px;padding:2px 3px;background:rgba(204,34,0,.2);border:1px solid #cc2200;color:#cc2200;cursor:pointer">⚔${bb?.minion2Name||'RIMREAPER'}</button>`:''}
            </div>`:''}
            ${isMe&&!c.p?`<button onclick="openChampionPicker(${c.m.id})" style="font-size:5px;padding:2px 4px;background:rgba(255,51,68,.15);border:1px solid var(--red);color:var(--red);cursor:pointer;margin-top:2px">PICK</button>`:''}
          </div>
        </div>`;
      }).join('')}
    </div>

    <!-- Attack Log -->
    ${(bb?.attackLog||[]).length?`
    <div style="background:#050510;border:1px solid #1a1a2a;padding:.5rem .75rem;margin-bottom:6px">
      <div style="font-size:6px;color:var(--text3);margin-bottom:4px;letter-spacing:.1em">ATTACK LOG</div>
      ${[...(bb.attackLog||[])].reverse().slice(0,6).map(a=>{
        const m=S.managers.find(x=>x.id===a.mid);
        const p=getPlayer(a.pid);
        const target={boss:'🏀 '+(bb?.bossLabel||'DUNKMAW'),minion1:'👹 '+(bb?.minion1Name||'GUS'),minion2:'👹 '+(bb?.minion2Name||'RIMREAPER')}[a.target]||a.target;
        const ts=new Date(a.ts).toLocaleDateString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});
        return `<div style="display:flex;gap:6px;font-size:9px;padding:2px 0;border-bottom:1px solid #0a0a1a;color:var(--text3)">
          <span style="color:${getAvatarColor(a.mid)}">${m?.name||'?'}</span>
          <span>${p?.name?.split(' ').pop()||'?'}</span>
          <span style="color:#ffcc00">⚔ ${a.fp.toFixed(0)}</span>
          <span>→ ${target}</span>
          <span style="margin-left:auto;font-size:8px">${ts}</span>
        </div>`;
      }).join('')}
    </div>`:''
    }

    <!-- Badges -->
    ${mid!==null&&mid!=='viewer'?renderBadges(mid):''}

    <!-- Commissioner panel -->
    ${isCommissioner?renderBossCommPanel(bb):''}
  </div>`;

  if(!CUSTOM_LOGOS.find(l=>l.name==='Boss_Background')) requestAnimationFrame(()=>drawDesertBg());
}

function renderBossBattle(){ renderBossBattleScene(); }

function _oldRenderBossBattle_unused(){
  const el = document.getElementById('boss-battle-content');
  if(!el) return;
  const bb = getBossBattle();
  const mid = currentManagerId;
  const isViewer = mid===null||mid==='viewer';
  const aColor = !isViewer ? getAvatarColor(mid) : '#4a9eff';

  // Commissioner setup panel
  const _isBossComm = isCommissioner || currentManagerId === 4;
  const commPanel = _isBossComm ? renderBossCommPanel(bb) : '';

  if(!bb||!bb.active){
    el.innerHTML = `<div style="padding:2rem;text-align:center">
      <div style="font-family:'Press Start 2P',monospace;font-size:16px;color:#ff3344;text-shadow:0 0 20px #ff334488;margin-bottom:.75rem">⚔ BOSS BATTLE</div>
      <div style="font-family:'Press Start 2P',monospace;font-size:9px;color:#ff9900;margin-bottom:.5rem;animation:blink .9s step-end infinite">COMING SOON</div>
      <div style="font-size:13px;color:var(--text3);margin-bottom:.75rem;max-width:300px;margin-left:auto;margin-right:auto">Each round a legendary player becomes the Boss. Your team fights together to defeat them. Winners earn bonus FP and exclusive badges.</div>
      ${commPanel}
    </div>`;
    return;
  }

  const bossPortrait = getBossPortrait();
  const bossHP = getBossHP();
  const damage = getBossDamage();
  const pct = Math.min(100, Math.round(damage/bossHP*100));
  const remaining = Math.max(0, bossHP-damage);
  const bossColor = '#ff3344';
  const roundLabel = bb.round===4?'🔥 FINAL BOSS':'⚔ BOSS BATTLE';
  const roundName = bb.round===4?'NBA Finals':bb.round===3?'Conf Finals':'Round '+bb.round;
  const myChampPid = bb.champions?.[mid];
  const myChamp = myChampPid ? getPlayer(myChampPid) : null;

  // HP bar color
  const barColor = pct>=100?'var(--green)':pct>=66?'var(--accent2)':pct>=33?'#ff9900':'var(--red)';

  el.innerHTML = `<div style="padding:.75rem 0">

    <!-- Boss Card -->
    <div style="background:rgba(255,51,68,.06);border:2px solid ${bossColor};padding:1rem;margin-bottom:.875rem;position:relative;overflow:hidden">
      <!-- Scanline effect -->
      <div style="position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.05) 2px,rgba(0,0,0,.05) 4px);pointer-events:none"></div>

      <div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:.875rem">
        <!-- Boss portrait -->
        <div style="flex-shrink:0">
          <div style="width:${IS_MOBILE?80:110}px;height:${IS_MOBILE?80:110}px;border:3px solid ${bossColor};overflow:hidden;box-shadow:0 0 20px ${bossColor}55;position:relative">
            ${bossPortrait
              ? `<img src="${bossPortrait}" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"/>`
              : `<div style="width:100%;height:100%;background:#1a0a0a;display:flex;align-items:center;justify-content:center;font-family:'Press Start 2P',monospace;font-size:10px;color:${bossColor}">BOSS</div>`}
            <div style="position:absolute;top:0;left:0;right:0;background:rgba(255,51,68,.9);text-align:center;font-family:'Press Start 2P',monospace;font-size:6px;padding:2px;color:#fff">${roundLabel}</div>
          </div>
        </div>

        <!-- Boss info -->
        <div style="flex:1;min-width:0">
          <div style="font-family:'Press Start 2P',monospace;font-size:${IS_MOBILE?10:13}px;color:${bossColor};margin-bottom:3px">${bb.bossName?.toUpperCase()}</div>
          ${bb.bossLabel?`<div style="font-size:11px;color:var(--text3);margin-bottom:6px;font-style:italic">"${bb.bossLabel}"</div>`:''}
          <div style="font-size:12px;color:var(--text2)">${roundName} · ${bb.bossHP} HP</div>
          <div style="font-size:12px;color:var(--text3);margin-top:2px">Reward: <span style="color:var(--accent2);font-family:'Press Start 2P',monospace;font-size:9px">+${bb.reward} FP</span> + Badge for all Champions</div>
        </div>

        <!-- HP remaining -->
        <div style="text-align:right;flex-shrink:0">
          <div style="font-family:'Press Start 2P',monospace;font-size:${IS_MOBILE?14:20}px;color:${remaining===0?'var(--green)':bossColor}">${remaining===0?'☠':'⚡'+remaining}</div>
          <div style="font-size:10px;color:var(--text3)">HP LEFT</div>
        </div>
      </div>

      <!-- HP Bar -->
      <div style="margin-bottom:.5rem">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span style="font-family:'Press Start 2P',monospace;font-size:7px;color:${bossColor}">BOSS HP</span>
          <span style="font-family:'Press Start 2P',monospace;font-size:7px;color:${barColor}">${damage.toFixed(0)} / ${bossHP} DMG</span>
        </div>
        <div style="height:14px;background:#1a0808;border:1px solid ${bossColor}44;position:relative;overflow:hidden">
          <div style="position:absolute;left:0;top:0;height:100%;width:${pct}%;background:${barColor};transition:width .5s;box-shadow:0 0 8px ${barColor}"></div>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Press Start 2P',monospace;font-size:7px;color:#fff;text-shadow:1px 1px 0 #000">${pct}%</div>
        </div>
      </div>

      ${bb.defeated?`
      <div style="text-align:center;padding:.75rem;background:rgba(0,255,136,.1);border:2px solid var(--green);font-family:'Press Start 2P',monospace;font-size:10px;color:var(--green)">
        🏆 BOSS DEFEATED! +${bb.reward} FP AWARDED!
      </div>`:''}
    </div>

    <!-- Champions section -->
    <div style="background:var(--panel);border:1px solid var(--border);padding:.75rem;margin-bottom:.875rem">
      <div style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--accent3);margin-bottom:.625rem">⚔ CHAMPIONS (${Object.keys(bb.champions||{}).length}/${S.managers.length})</div>
      <div style="display:grid;grid-template-columns:repeat(${IS_MOBILE?2:3},1fr);gap:6px">
        ${S.managers.map(m=>{
          const champPid = bb.champions?.[m.id];
          const champ = champPid ? getPlayer(champPid) : null;
          const mColor = getAvatarColor(m.id);
          const champFP = champ ? playerStatScore(champPid, m.id) : 0;
          const champPortrait = champ ? getActivePortrait(champ.name) : null;
          const isLive = champ ? isPlayerLive(champPid) : false;
          const isMe = m.id === mid;
          return `<div style="border:2px solid ${champ?mColor:'var(--border2)'};padding:6px;background:${champ?mColor+'0d':'transparent'};${isMe?'box-shadow:0 0 8px '+mColor+'44':''}">
            <div style="display:flex;align-items:center;gap:5px;margin-bottom:4px">
              <div style="width:18px;height:18px;border:1px solid ${mColor};display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0">${getAvatar(m.id,'sm')}</div>
              <span style="font-family:'Press Start 2P',monospace;font-size:6px;color:${mColor}">${m.name.toUpperCase()}</span>
            </div>
            ${champ?`
              <div style="display:flex;align-items:center;gap:5px">
                ${champPortrait?`<img src="${champPortrait}" style="width:32px;height:32px;object-fit:cover;object-position:center top;border:1px solid ${isLive?'var(--red)':mColor};image-rendering:pixelated;flex-shrink:0"/>`:''}
                <div>
                  <div style="font-size:10px;color:var(--text)">${champ.name.split(' ').pop()}</div>
                  <div style="font-family:'Press Start 2P',monospace;font-size:8px;color:${isLive?'var(--red)':'var(--accent2)'}">+${champFP.toFixed(0)}⚔</div>
                </div>
              </div>
              ${isMe&&!bb.defeated?`<button onclick="openChampionPicker(${m.id})" style="width:100%;margin-top:4px;font-family:'Press Start 2P',monospace;font-size:5px;padding:2px;background:${mColor}22;border:1px solid ${mColor};color:${mColor};cursor:pointer">CHANGE</button>`:''}
            `:`
              ${isMe&&!bb.defeated?`<button onclick="openChampionPicker(${m.id})" style="width:100%;font-family:'Press Start 2P',monospace;font-size:6px;padding:4px;background:rgba(255,51,68,.1);border:1px solid var(--red);color:var(--red);cursor:pointer">⚔ PICK CHAMPION</button>`:'<div style="font-size:10px;color:var(--text3);font-style:italic">No champion yet</div>'}
            `}
          </div>`;
        }).join('')}
      </div>
    </div>

    <!-- Badges section -->
    ${renderBadges(mid)}

    ${commPanel}
  </div>`;
}

function renderBadges(mid){
  if(mid===null||mid==='viewer') return '';
  const badges = S.badges?.[mid]||[];
  if(!badges.length) return '';
  const badgeInfo = {
    'boss_battle_r2': {label:'BOSS SLAYER R2', color:'#4a9eff', icon:'⚔'},
    'boss_battle_r3': {label:'BOSS SLAYER R3', color:'#cc44ff', icon:'⚔'},
    'final_boss': {label:'FINAL BOSS SLAYER', color:'#ffcc00', icon:'👑'},
  };
  return `<div style="background:var(--panel);border:1px solid var(--border);padding:.75rem;margin-bottom:.875rem">
    <div style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--accent3);margin-bottom:.5rem">🏅 MY BADGES</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px">
      ${badges.map(b=>{
        const info = badgeInfo[b]||{label:b.toUpperCase(),color:'var(--accent2)',icon:'🏅'};
        return `<div style="padding:4px 8px;border:2px solid ${info.color};background:${info.color}18;font-family:'Press Start 2P',monospace;font-size:6px;color:${info.color}">${info.icon} ${info.label}</div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderBossCommPanel(bb){
  const activated = bb?.active;
  return `<div style="background:rgba(255,153,0,.06);border:1px solid #ff990044;padding:.75rem;margin-top:.875rem">
    <div style="font-family:'Press Start 2P',monospace;font-size:7px;color:#ff9900;margin-bottom:.625rem">🔓 COMMISSIONER CONTROLS</div>
    <div style="display:flex;flex-direction:column;gap:6px">
      <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
        <label style="font-size:12px;color:var(--text2);min-width:80px">Boss HP:</label>
        <input id="boss-hp-input" type="number" value="${bb?.bossHP||300}" min="50" max="999" style="width:80px;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:3px;font-size:12px"/>
        <label style="font-size:12px;color:var(--text2)">Minion HP:</label>
        <input id="boss-minion-hp-input" type="number" value="${bb?.minion1HP||80}" min="10" max="300" style="width:60px;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:3px;font-size:12px"/>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
        <label style="font-size:12px;color:var(--text2);min-width:80px">Round:</label>
        <select id="boss-round-select" style="background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:3px;font-size:12px">
          <option value="2" ${bb?.round===2?'selected':''}>Round 2</option>
          <option value="3" ${bb?.round===3?'selected':''}>Conf Finals</option>
          <option value="4" ${bb?.round===4?'selected':''}>NBA Finals</option>
        </select>
        <label style="font-size:12px;color:var(--text2)">Reward FP:</label>
        <input id="boss-reward-input" type="number" value="${bb?.reward||25}" min="0" max="200" style="width:60px;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:3px;font-size:12px"/>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
        <label style="font-size:12px;color:var(--text2);min-width:80px">Boss Name:</label>
        <input id="boss-label-input" type="text" value="${bb?.bossLabel||'DUNKMAW'}" placeholder="e.g. DUNKMAW" style="flex:1;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:3px;font-size:12px"/>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
        <label style="font-size:12px;color:var(--text2);min-width:80px">Minion Names:</label>
        <input id="boss-minion1-name" type="text" value="${bb?.minion1Name||'GUS'}" placeholder="Minion 1" style="flex:1;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:3px;font-size:12px"/>
        <input id="boss-minion2-name" type="text" value="${bb?.minion2Name||'RIMREAPER'}" placeholder="Minion 2" style="flex:1;background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:3px;font-size:12px"/>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">
        <button onclick="saveBossConfig()" style="font-family:'Press Start 2P',monospace;font-size:7px;padding:5px 10px;background:rgba(255,153,0,.2);border:1px solid #ff9900;color:#ff9900;cursor:pointer">💾 SAVE CONFIG</button>
        <button onclick="startBossBattle()" style="font-family:'Press Start 2P',monospace;font-size:7px;padding:5px 10px;background:rgba(255,51,68,.2);border:1px solid var(--red);color:var(--red);cursor:pointer">⚔ ${activated?'UPDATE':'START'} BATTLE</button>
        ${activated?`<button onclick="endBossBattle()" style="font-family:'Press Start 2P',monospace;font-size:7px;padding:5px 10px;background:rgba(100,100,100,.2);border:1px solid #666;color:#666;cursor:pointer">■ END BATTLE</button>`:''}
      </div>
      <!-- Boss Asset Uploader -->
      <div style="margin-top:8px;padding-top:8px;border-top:1px solid #ff990033">
        <div style="font-size:7px;color:#ff9900;margin-bottom:6px">🖼 BOSS ASSETS (GIF-safe — no resize)</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
          ${['Boss_Main','Boss_Minion1','Boss_Minion2','Boss_Background'].map(name=>{
            const existing = CUSTOM_LOGOS.find(l=>l.name===name);
            return `<div style="font-size:9px;color:var(--text2)">
              <div style="color:var(--text3);margin-bottom:2px">${name}</div>
              ${existing?`<div style="display:flex;align-items:center;gap:4px"><span style="color:var(--green)">✓ Uploaded</span><button onclick="uploadBossAsset('${name}')" style="font-size:7px;padding:1px 4px;background:none;border:1px solid #555;color:#888;cursor:pointer">Replace</button></div>`
                :`<button onclick="uploadBossAsset('${name}')" style="font-size:7px;padding:3px 6px;background:rgba(255,153,0,.1);border:1px solid #ff990066;color:#ff9900;cursor:pointer">📁 Upload</button>`}
            </div>`;
          }).join('')}
        </div>
        <input type="file" id="boss-asset-input" accept="image/*,.gif" style="display:none" onchange="handleBossAssetUpload(this)"/>
        <div id="boss-asset-status" style="font-size:10px;color:var(--text3);margin-top:4px"></div>
      </div>
    </div>
  </div>`;
}

function openChampionPicker(mid){
  const existing = document.getElementById('champion-picker-modal');
  if(existing){ existing.remove(); return; }
  const bb = getBossBattle();
  if(!bb||!bb.active){ showToast('No active battle','error'); return; }
  const roster = S.rosters[mid]||[];
  const modal = document.createElement('div');
  modal.id = 'champion-picker-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:10001;display:flex;align-items:center;justify-content:center;padding:1rem';
  modal.onclick = e=>{ if(e.target===modal) modal.remove(); };
  const rows = roster.map(pid=>{
    const p = getPlayer(pid); if(!p) return '';
    const tc = TEAM_LOGOS[p.team]?.color||'#4a9eff';
    const portrait = getActivePortrait(p.name);
    const fp = playerStatScore(pid, mid);
    const fppg = playerFPPG(pid, mid);
    const isLive = isPlayerLive(pid);
    const isCurrent = bb.champions?.[mid]===pid;
    return '<div onclick="selectChampion('+mid+','+pid+');document.getElementById(\'champion-picker-modal\')?.remove()" '
      +'style="display:flex;align-items:center;gap:8px;padding:6px;border-bottom:1px solid var(--border2);cursor:pointer;background:'+(isCurrent?tc+'18':'transparent')+'">'
      +(portrait?'<img src="'+portrait+'" style="width:36px;height:36px;object-fit:cover;object-position:center top;border:2px solid '+(isLive?'var(--red)':tc)+';image-rendering:pixelated;flex-shrink:0"/>':'')
      +'<div style="flex:1">'
        +'<div style="font-size:13px;color:var(--text)">'+p.name+'</div>'
        +'<div style="font-size:10px;color:var(--text3)">'+p.team+' · '+fppg.toFixed(1)+'/g · +'+fp.toFixed(0)+' total</div>'
      +'</div>'
      +(isCurrent?'<span style="font-family:\'Press Start 2P\',monospace;font-size:7px;color:var(--accent2)">CURRENT</span>':'')
      +'<span style="font-family:\'Press Start 2P\',monospace;font-size:8px;color:var(--red)">⚔</span>'
      +'</div>';
  }).join('');
  modal.innerHTML = '<div style="background:var(--panel);border:2px solid var(--red);width:100%;max-width:400px;max-height:80vh;display:flex;flex-direction:column">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;padding:.625rem .875rem;border-bottom:2px solid var(--border);flex-shrink:0;background:rgba(255,51,68,.08)">'
    +'<span style="font-family:var(--font-pixel),monospace;font-size:9px;color:var(--red)">⚔ PICK YOUR CHAMPION</span>'
    +'<button onclick="document.getElementById(\'champion-picker-modal\').remove()" style="background:none;border:none;color:var(--text2);font-size:22px;cursor:pointer;line-height:1">×</button>'
    +'</div>'
    +'<div style="font-size:12px;color:var(--text3);padding:.5rem .875rem;border-bottom:1px solid var(--border2);flex-shrink:0">Your champion\'s FP counts as damage against the Boss.</div>'
    +'<div style="overflow-y:auto;flex:1">'+rows+'</div>'
    +'</div>';
  document.body.appendChild(modal);
}


// ── Boss Asset Upload (GIF-preserving) ──────────────────────────
let _pendingBossAssetName = null;

function uploadBossAsset(name){
  _pendingBossAssetName = name;
  const input = document.getElementById('boss-asset-input');
  if(input) input.click();
}

async function handleBossAssetUpload(input){
  const file = input.files?.[0];
  if(!file || !_pendingBossAssetName) return;
  const status = document.getElementById('boss-asset-status');
  if(status) status.textContent = 'Reading '+file.name+'...';

  // Read as raw base64 — preserves GIF animation, no canvas conversion
  const dataUri = await new Promise(resolve=>{
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.readAsDataURL(file);
  });

  // Store in CUSTOM_LOGOS (replace existing with same name)
  CUSTOM_LOGOS = CUSTOM_LOGOS.filter(l=>l.name!==_pendingBossAssetName);
  // For background, detect dominant color; for sprites use a default
  const color = _pendingBossAssetName==='Boss_Background'?'#8b3a00':'#ff6600';
  CUSTOM_LOGOS.push({name:_pendingBossAssetName, dataUri, color});

  try{
    await saveCustomLogos();
    if(status) status.textContent = '✓ '+_pendingBossAssetName+' saved! ('+Math.round(dataUri.length/1024)+'KB)';
    render();
  }catch(e){
    if(status) status.textContent = '✗ Error: '+e.message;
  }
  input.value='';
  _pendingBossAssetName = null;
}

async function saveBossConfig(){
  const minionHP = parseInt(document.getElementById('boss-minion-hp-input')?.value)||80;
  const config = {
    bossHP: parseInt(document.getElementById('boss-hp-input')?.value)||300,
    minion1HP: minionHP,
    minion2HP: minionHP,
    round: parseInt(document.getElementById('boss-round-select')?.value)||2,
    reward: parseInt(document.getElementById('boss-reward-input')?.value)||25,
    bossLabel: document.getElementById('boss-label-input')?.value||'DUNKMAW',
    minion1Name: document.getElementById('boss-minion1-name')?.value||'GUS',
    minion2Name: document.getElementById('boss-minion2-name')?.value||'RIMREAPER',
  };
  await setBossConfig(config);
}

async function startBossBattle(){
  await saveBossConfig();
  // No boss player required — pure monster with set HP
  if(!S.bossBattle.champions) S.bossBattle.champions={};
  S.bossBattle.active = true;
  S.bossBattle.defeated = false;
  S.bossBattle.defeatedTs = null;
  S.bossBattle.badgesAwarded = false;
  await saveState();
  render();
  // Chat announcement
  try{
    const chatState = await loadChatState();
    const bb = S.bossBattle;
    chatState.push({id:Date.now(),name:'NBA ARCADE',managerId:'system',avatarIdx:0,
      text:`⚔ BOSS BATTLE BEGINS! ${bb.bossName} (${bb.bossHP} HP) has appeared! Pick your Champion in the ⚔ BOSS tab. Reward: +${bb.reward} FP + Badge for all participants! 🗡️`,
      ts:new Date().toISOString()});
    await db.from('leagues').upsert({id:'nba-chat-2026',state:JSON.stringify(chatState)});
  }catch(e){}
  showToast('⚔ Boss Battle started!','warn');
}

async function endBossBattle(){
  if(!isCommissioner) return;
  if(!confirm('End the Boss Battle?')) return;
  S.bossBattle.active = false;
  await saveState();
  render();
  showToast('Boss Battle ended','info');
}


// ── NEWS BANNER ─────────────────────────────────────────────────
const NEWS_ITEMS = [
  "🏀 ROUND 2 IS HERE! The second round of the NBA Playoffs has begun — check your roster for eliminated players!",
  "⚔ BOSS BATTLE IS LIVE! Visit the BOSS tab to pick your Champion and attack DUNKMAW, GUS and RIMREAPER!",
  "🆕 RULE UPDATE: Players marked DTD (Day-To-Day) can now be dropped — same as OUT! Check your roster for DTD players."
];
const NEWS_DISMISSED_KEY = 'nba_news_dismissed_r2_2026';

function initNewsBanner(){
  const state = localStorage.getItem(NEWS_DISMISSED_KEY);
  const banner = document.getElementById('news-banner');
  const ticker = document.getElementById('news-ticker-inner');
  const miniNews = document.getElementById('mini-news-btn');
  if(!banner || !ticker) return;
  ticker.textContent = NEWS_ITEMS.join('   ·   ');
  if(state === 'collapsed'){
    banner.style.display = 'none';
    if(miniNews) miniNews.style.display = 'inline-flex';
  } else {
    banner.style.display = 'block';
    if(miniNews) miniNews.style.display = 'none';
  }
}

function dismissNews(){
  const banner = document.getElementById('news-banner');
  if(banner) banner.style.display = 'none';
  // Show mini NEWS button next to BRACKET button
  const miniNews = document.getElementById('mini-news-btn');
  if(miniNews) miniNews.style.display = 'inline-flex';
  localStorage.setItem(NEWS_DISMISSED_KEY, 'collapsed');
}

function showNewsBanner(){
  const banner = document.getElementById('news-banner');
  if(banner) banner.style.display = 'block';
  const miniNews = document.getElementById('mini-news-btn');
  if(miniNews) miniNews.style.display = 'none';
  localStorage.setItem(NEWS_DISMISSED_KEY, 'false');
}

function renderBracket(){
  const el = document.getElementById('bracket-section');
  if(!el) return;

  // Build team status lookup from S.teams
  const teamMap = {};
  (S.teams||[]).forEach(t=>teamMap[t.id]=t);

  // 2026 bracket — FINAL. PHX(W8), ORL(E8)
  const W = [
    {seed:1,id:'OKC',name:'Thunder'},
    {seed:2,id:'SAS',name:'Spurs'},
    {seed:3,id:'DEN',name:'Nuggets'},
    {seed:4,id:'LAL',name:'Lakers'},
    {seed:5,id:'HOU',name:'Rockets'},
    {seed:6,id:'MIN',name:'T-Wolves'},
    {seed:7,id:'POR',name:'Blazers'},
    {seed:8,id:'PHX',name:'Suns'},
  ];
  const E = [
    {seed:1,id:'DET',name:'Pistons'},
    {seed:2,id:'BOS',name:'Celtics'},
    {seed:3,id:'NYK',name:'Knicks'},
    {seed:4,id:'CLE',name:'Cavaliers'},
    {seed:5,id:'TOR',name:'Raptors'},
    {seed:6,id:'ATL',name:'Hawks'},
    {seed:7,id:'PHI',name:'76ers'},
    {seed:8,id:'ORL',name:'Magic'},
  ];

  // First round matchups: 1v8, 4v5, 3v6, 2v7
  const r1pairs = [[0,7],[3,4],[2,5],[1,6]]; // indices into seed array

  function teamStatus(id){
    const t = teamMap[id];
    if(!t) return 'active';
    if(t.eliminated) return 'eliminated';
    if((t.survivedRounds||0)>=1) return 'winner';
    return 'active';
  }

  function teamAdvanced(id, rounds){
    const t = teamMap[id];
    return t && (t.survivedRounds||0) >= rounds && !t.eliminated;
  }

  function bTeam(team, rounds, opponent){
    if(!team) return `<div class="b-team tbd"><span class="b-seed">?</span> TBD</div>`;
    const t = teamMap[team.id];
    const elim = t && t.eliminated;
    const survived = t ? (t.survivedRounds||0) : 0;
    const isWinner = survived >= rounds && !elim;

    let winsHtml = '';
    if(opponent){
      const sr = getSeriesRecord(team.id, opponent.id);
      if(sr && sr.wins){
        const myWins = sr.wins[team.id]||0;
        const oppWins = sr.wins[opponent.id]||0;
        const isLeading = myWins > oppWins;
        const isTied = myWins === oppWins && myWins > 0;
        const hasGames = myWins > 0 || oppWins > 0;
        if(hasGames || isWinner || elim){
          const color = isWinner ? 'var(--accent)' : isLeading ? 'var(--accent2)' : elim ? 'var(--red)' : 'var(--text3)';
          winsHtml = `<span style="font-family:'Press Start 2P',monospace;font-size:7px;margin-left:auto;padding-left:4px;color:${color}">${myWins}-${oppWins}</span>`;
        }
      }
    }
    return `<div class="b-team ${elim?'eliminated':isWinner?'winner':''}" style="display:flex;align-items:center;gap:2px">
      <span class="b-seed">${team.seed}</span>${team.name}${winsHtml}
    </div>`;
  }

  // Determine R2 teams (survived R1)
  function r2teams(conf){
    const arr = conf === 'W' ? W : E;
    return r1pairs.map(([a,b])=>{
      const ta = arr[a], tb = arr[b];
      const aWon = teamAdvanced(ta.id,1);
      const bWon = teamAdvanced(tb.id,1);
      if(aWon) return ta;
      if(bWon) return tb;
      return null; // TBD
    });
  }

  // R3 teams (survived R2)
  function r3teams(conf){
    const r2 = r2teams(conf);
    const pairs = [[0,1],[2,3]];
    return pairs.map(([a,b])=>{
      const ta=r2[a], tb=r2[b];
      if(!ta||!tb) return null;
      if(teamAdvanced(ta.id,2)) return ta;
      if(teamAdvanced(tb.id,2)) return tb;
      return null;
    });
  }

  // Finals teams (survived R3)
  function finalsTeam(conf){
    const r3 = r3teams(conf);
    for(const t of r3){
      if(t && teamAdvanced(t.id,3)) return t;
    }
    return null;
  }

  // Champion
  function champion(){
    const wf = finalsTeam('W'), ef = finalsTeam('E');
    if(wf && teamAdvanced(wf.id,4)) return wf;
    if(ef && teamAdvanced(ef.id,4)) return ef;
    return null;
  }

  function col(label, matchups){
    return `<div class="bracket-col">
      <div class="bracket-col-label">${label}</div>
      ${matchups.join('')}
    </div>`;
  }

  function matchup(t1, t2, rounds){
    return `<div class="b-matchup">${bTeam(t1,rounds,t2)}${bTeam(t2,rounds,t1)}</div>`;
  }

  // ── West R1 ──
  const wr1 = r1pairs.map(([a,b])=>matchup(W[a],W[b],1));
  // ── East R1 ──
  const er1 = r1pairs.map(([a,b])=>matchup(E[a],E[b],1));
  // ── West R2 ──
  const wr2t = r2teams('W');
  const wr2 = [[0,1],[2,3]].map(([a,b])=>matchup(wr2t[a],wr2t[b],2));
  // ── East R2 ──
  const er2t = r2teams('E');
  const er2 = [[0,1],[2,3]].map(([a,b])=>matchup(er2t[a],er2t[b],2));
  // ── Conf Finals ──
  const wr3t = r3teams('W');
  const wr3 = [matchup(wr3t[0],wr3t[1],3)];
  const er3t = r3teams('E');
  const er3 = [matchup(er3t[0],er3t[1],3)];
  // ── Finals ──
  const wf = finalsTeam('W'), ef = finalsTeam('E');
  const finals = [matchup(wf,ef,4)];
  // ── Champion ──
  const champ = champion();

  el.innerHTML = `<div class="bracket-wrap">
    <div class="bracket-title">
      <span>🏆 2026 PLAYOFF BRACKET</span>
      ${isCommissioner?'<span style="font-size:8px;color:var(--text3)">COMMISSIONER CONTROLS</span>':''}
    </div>
    <div style="display:flex;justify-content:space-between;margin-bottom:4px" class="bracket-conf-labels">
      <span style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--accent);letter-spacing:.06em">— WEST —</span>
      <span style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--accent);letter-spacing:.06em">— EAST —</span>
    </div>
    <div class="bracket-grid" style="margin-bottom:.75rem">
      ${col('R1',wr1)}
      ${col('SEMIS',wr2)}
      ${col('CONF FINALS',wr3)}
      <div class="bracket-col" style="display:flex;flex-direction:column;align-items:center;justify-content:center">
        <div class="b-champion">
          <div class="b-trophy">${champ?'🏆':'🏀'}</div>
          <div class="b-champ-name">${champ?champ.name.toUpperCase()+'\nCHAMPION':'FINALS\nTBD'}</div>
        </div>
      </div>
      ${col('CONF FINALS',er3)}
      ${col('SEMIS',er2)}
      ${col('R1',er1)}
    </div>
  </div>`;
}


// ── Chat System ────────────────────────────────────────────────
const CHAT_REACTIONS = ['🔥','💀','👀','🏀','😂'];
let chatOpen = false;
let chatPollingInterval = null;
let lastChatCount = -1; // -1 = uninitialized, set on first poll

function toggleChat(){
  chatOpen = !chatOpen;
  document.getElementById('chat-panel').style.display = chatOpen ? 'flex' : 'none';
  document.getElementById('chat-bubble').style.display = chatOpen ? 'none' : 'flex';
  if(chatOpen) clearNewMessageIndicator();
  if(chatOpen){
    renderChat();
    document.getElementById('chat-input').focus();
    // Scroll to TOP so you see oldest messages first (like a chat history)
    setTimeout(()=>{
      const msgs = document.getElementById('chat-messages');
      if(msgs) msgs.scrollTop = 0;
    }, 150);
  }
}

async function sendChat(){
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if(!msg) return;
  const name = currentManagerId !== null && currentManagerId !== 'viewer' && S
    ? (S.managers.find(m=>m.id===currentManagerId)?.name || 'VIEWER')
    : 'VIEWER';
  const avatarIdx = S && currentManagerId !== null && currentManagerId !== 'viewer'
    ? ((S.avatars&&S.avatars[currentManagerId]!==undefined)?S.avatars[currentManagerId]:currentManagerId%8)
    : 0;
  const entry = {
    id: Date.now()+'_'+Math.random().toString(36).slice(2,7),
    managerId: currentManagerId,
    name,
    avatarIdx,
    msg,
    ts: new Date().toISOString(),
    reactions: {}
  };
  // Load, append, save
  const chatState = await loadChatState();
  chatState.push(entry);
  // Keep last 200 messages
  if(chatState.length > 200) chatState.splice(0, chatState.length - 200);
  await saveChatState(chatState);
  input.value = '';
  renderChat();
}

async function deleteChat(id){
  if(!isCommissioner){ alert('COMMISSIONER ACCESS REQUIRED'); return; }
  const chatState = await loadChatState();
  const filtered = chatState.filter(e=>e.id!==id);
  await saveChatState(filtered);
  renderChat();
}

async function reactToChat(id, emoji){
  const chatState = await loadChatState();
  const entry = chatState.find(e=>e.id===id);
  if(!entry) return;
  if(!entry.reactions) entry.reactions = {};
  if(!entry.reactions[emoji]) entry.reactions[emoji] = [];
  const uid = String(currentManagerId);
  const idx = entry.reactions[emoji].indexOf(uid);
  if(idx>-1) entry.reactions[emoji].splice(idx,1);
  else entry.reactions[emoji].push(uid);
  await saveChatState(chatState);
  renderChat();
}

const CHAT_KEY = 'nba-2026-chat';

async function loadChatState(){
  if(!db) return [];
  try{
    const {data} = await db.from('leagues').select('state').eq('id', CHAT_KEY).single();
    if(data?.state) return JSON.parse(data.state);
  }catch(e){}
  return [];
}

async function saveChatState(msgs){
  if(!db) return;
  await db.from('leagues').upsert({
    id: CHAT_KEY,
    state: JSON.stringify(msgs),
    updated_at: new Date().toISOString()
  });
}

async function pollChat(){
  const msgs = await loadChatState();
  if(lastChatCount === -1){
    // First poll — initialize silently, no blink
    lastChatCount = msgs.length;
    if(chatOpen) renderChatMessages(msgs);
    return;
  }
  if(chatOpen){
    if(msgs.length !== lastChatCount){
      lastChatCount = msgs.length;
      renderChatMessages(msgs);
    }
    clearNewMessageIndicator();
  } else {
    if(msgs.length > lastChatCount){
      showNewMessageIndicator();
    }
  }
}

function showNewMessageIndicator(){
  const bubble = document.getElementById('chat-bubble');
  if(bubble) bubble.classList.add('has-new-message');
  const badge = document.getElementById('chat-unread');
  if(badge) badge.style.display = 'flex';
}

function clearNewMessageIndicator(){
  const bubble = document.getElementById('chat-bubble');
  if(bubble) bubble.classList.remove('has-new-message');
  const badge = document.getElementById('chat-unread');
  if(badge) badge.style.display = 'none';
  // Update lastChatCount so we don't keep triggering
  loadChatState().then(msgs => { lastChatCount = msgs.length; });
}

async function renderChat(){
  const msgs = await loadChatState();
  lastChatCount = msgs.length;
  renderChatMessages(msgs);
}

function renderChatMessages(msgs){
  const list = document.getElementById('chat-messages');
  if(!list) return;
  if(!msgs.length){
    list.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--text3);font-size:15px">NO MESSAGES YET.<br>BE THE FIRST TO TALK TRASH 🏀</div>';
    return;
  }
  list.innerHTML = msgs.map(e=>{
    // Always use current avatar for known managers
    const mid = e.managerId;
    const currentIdx = (S && S.avatars && mid !== null && mid !== 'viewer' && S.avatars[mid] !== undefined)
      ? S.avatars[mid] : (e.avatarIdx || 0);
    const av = getAvatarByIndex(currentIdx);
    const t = av.type==='ball' ? av.theme : AVATAR_THEMES[0];
    const aColor = av.type==='custom' ? (av.logo.color||'#4a9eff') : t.c1;
    const time = new Date(e.ts).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});
    const myUid = String(currentManagerId);
    const reactionHtml = CHAT_REACTIONS.map(emoji=>{
      const users = (e.reactions&&e.reactions[emoji]) || [];
      const count = users.length;
      const isMine = users.includes(myUid);
      return count>0||true ? `<button onclick="reactToChat('${e.id}','${emoji}')"
        style="padding:2px 7px;font-size:13px;border:1px solid ${isMine?'var(--accent3)':'var(--border)'};
        background:${isMine?'rgba(255,204,0,.15)':'var(--bg2)'};cursor:pointer;color:${isMine?'var(--accent3)':'var(--text3)'};
        font-family:'VT323',monospace;display:inline-flex;align-items:center;gap:3px">
        ${emoji}${count>0?`<span style="font-size:12px">${count}</span>`:''}
      </button>` : '';
    }).join('');
    const canDelete = isCommissioner;
    return `<div style="padding:10px 0;border-bottom:1px solid rgba(26,74,122,.4)">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
        <div style="width:24px;height:24px;border:2px solid ${aColor};flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">
          ${av.type==='custom'
            ? `<img src="${av.logo.dataUri}" style="width:100%;height:100%;object-fit:cover;image-rendering:pixelated"/>`
            : makeBallSVG(t,22)}
        </div>
        <span style="font-size:14px;color:${aColor};font-family:'Press Start 2P',monospace;font-size:7px">${e.name}</span>
        <span style="font-size:12px;color:var(--text3);margin-left:auto">${time}</span>
        ${canDelete?`<button onclick="deleteChat('${e.id}')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:12px;padding:0 4px" title="Delete">✕</button>`:''}
      </div>
      <div style="font-size:17px;color:var(--text);padding-left:32px;line-height:1.5;word-break:break-word">${e.msg}</div>
      <div style="padding-left:32px;margin-top:5px;display:flex;flex-wrap:wrap;gap:4px">${reactionHtml}</div>
    </div>`;
  }).reverse().join(''); // newest first... actually newest at bottom
  // Don't auto-scroll on render — let user control position
}

function startChatPolling(){
  if(chatPollingInterval) clearInterval(chatPollingInterval);
  chatPollingInterval = setInterval(pollChat, 8000);
}


// ── Live Stats System ─────────────────────────────────────────────

const ESPN_TEAM_MAP = {
  'OKC':'OKC','SA':'SAS','SAS':'SAS','DEN':'DEN','LAL':'LAL','HOU':'HOU',
  'MIN':'MIN','MINNE':'MIN','MINN':'MIN','TWolves':'MIN',
  'POR':'POR','LAC':'LAC','GS':'GSW','GSW':'GSW',
  'DET':'DET','BOS':'BOS','NY':'NYK','NYK':'NYK','CLE':'CLE',
  'TOR':'TOR','ATL':'ATL','PHI':'PHI','ORL':'ORL','CHA':'CHA',
  'MIA':'MIA','PHX':'PHX',
};

function espnTeamToOurs(abbr){ return ESPN_TEAM_MAP[abbr]||abbr; }

// Live stats are stored in memory (not Supabase) — refreshed each poll
// Completed game stats ARE saved to Supabase via playerStats
let livePlayerStats = {};
let _liveStatsReady = false; // set after first successful poll // pid -> {fp, pts, reb, ast, stl, blk, fgm, fga, ftm, fta, to, live, gameId}
let liveStatsLastUpdate = null;
let liveStatsPolling = null;
let liveGamesActive = false;

function parseSplit(s){ const p=String(s||'0-0').split('-'); return [parseInt(p[0])||0,parseInt(p[1])||0]; }

async function fetchGameBoxScore(eventId){
  const res = await fetch(`https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${eventId}`);
  const data = await res.json();
  const boxscore = data?.boxscore;
  if(!boxscore) return {};

  const stats = {};
  for(const teamData of (boxscore.players||[])){
    const ourTeam = espnTeamToOurs(teamData?.team?.abbreviation||'');
    for(const grp of (teamData.statistics||[])){
      for(const athlete of (grp.athletes||[])){
        const name = athlete?.athlete?.displayName||'';
        const s = athlete?.stats||[];
        if(!s.length||s[0]==='DNP'||s[0]==='DND') continue;

        // ESPN stat order: MIN, PTS, FG, 3PT, FT, REB, AST, TO, STL, BLK, OREB, DREB, PF, +/-
        // indices:          0    1    2   3    4   5    6    7   8    9    10    11    12   13
        const min = s[0]||'0';
        const pts = parseInt(s[1])||0;
        const [fgm,fga] = parseSplit(s[2]);
        const [ftm,fta] = parseSplit(s[4]);
        const reb = parseInt(s[5])||0;
        const ast = parseInt(s[6])||0;
        const to  = parseInt(s[7])||0;
        const stl = parseInt(s[8])||0;
        const blk = parseInt(s[9])||0;
        const pf  = parseInt(s[12])||0;
        const ff=0, tf=0; // ESPN doesn't separate flagrant/technical in this feed
        const fp = pts + reb + ast + stl + blk - (fga-fgm) - (fta-ftm) - to;

        const nameLower = name.toLowerCase();
        // Priority: exact match first, then last-name match (avoids Bronny/LeBron collision)
        const matched = 
          PLAYERS.find(p=>p.team===ourTeam && p.name.toLowerCase()===nameLower) ||
          PLAYERS.find(p=>{
            if(p.team!==ourTeam) return false;
            const pFirst = p.name.split(' ')[0].toLowerCase();
            const pLast = p.name.split(' ').pop().toLowerCase();
            const espnFirst = nameLower.split(' ')[0];
            const espnLast = nameLower.split(' ').pop();
            // Must match both first AND last to avoid false positives
            return pFirst===espnFirst && pLast===espnLast;
          }) ||
          PLAYERS.find(p=>{
            if(p.team!==ourTeam) return false;
            const pLast = p.name.split(' ').pop().toLowerCase();
            const espnLast = nameLower.split(' ').pop();
            // Last name only as final fallback — only if unique on team
            const sameTeamSameLast = PLAYERS.filter(x=>x.team===ourTeam && x.name.split(' ').pop().toLowerCase()===pLast);
            return pLast===espnLast && sameTeamSameLast.length===1;
          });
        const [tpm,tpa] = parseSplit(s[3]); // 3PT
        const oreb = parseInt(s[10])||0;
        const dreb = parseInt(s[11])||0;
        const plusMinus = parseInt(s[13])||0;
        // Derived stats
        const fgm2 = fgm-tpm, fga2 = fga-tpa;
        const fgPct  = fga>0  ? fgm/fga  : null;
        const tpPct  = tpa>0  ? tpm/tpa  : null;
        const fg2Pct = fga2>0 ? fgm2/fga2: null;
        const efgPct = fga>0  ? (fgm+0.5*tpm)/fga : null;
        const ftPct  = fta>0  ? ftm/fta  : null;
        // Game Score (John Hollinger)
        const gmSc = +(pts + 0.4*fgm - 0.7*fga - 0.4*(fta-ftm) + 0.7*oreb + 0.3*dreb + stl + 0.7*ast + 0.7*blk - 0.4*pf - to).toFixed(1);
        if(matched) stats[matched.id]={fp,pts,reb,ast,stl,blk,fgm,fga,ftm,fta,to,pf,min,name:matched.name,
          tpm,tpa,oreb,dreb,plusMinus,fgPct,tpPct,fg2Pct,efgPct,ftPct,gmSc,fgm2,fga2};
      }
    }
  }
  return stats;
}

async function refreshLiveStats(){
  try{
    // Get today + yesterday games
    const today = new Date();
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
    const fmt = d => d.toISOString().split('T')[0].replace(/-/g,'');

    // Only count stats from playoff games (April 18 onward) — not play-in games
    const PLAYOFFS_START = '20260418';
    let allEvents = [];
    for(const dateStr of [fmt(today), fmt(yesterday)]){
      if(dateStr < PLAYOFFS_START) continue; // skip play-in dates
      try{
        const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${dateStr}`);
        const data = await res.json();
        allEvents = allEvents.concat((data?.events||[]).map(e=>({...e,_dateStr:dateStr})));
      }catch(e){}
    }

    const newLive = {};
    let hasLive = false;
    let completedToSave = [];

    for(const event of allEvents){
      const status = event.status?.type;
      const isLive = !status?.completed && status?.state==='in';
      const isComplete = status?.completed;
      if(!isLive && !isComplete) continue;

      // Skip if already saved as completed
      const alreadySaved = isComplete && S.playerStats &&
        Object.keys(S.playerStats).some(k=>k.endsWith('_'+event._dateStr) && S.playerStats[k].gameId===event.id);

      try{
        const gameStats = await fetchGameBoxScore(event.id);
        for(const [pid, stat] of Object.entries(gameStats)){
          // Accumulate (player may play multiple games)
          // Get opponent teams for this game
          const _comps = event.competitions?.[0]?.competitors||[];
          const _teams = _comps.map(c=>espnTeamToOurs(c.team?.abbreviation||'')).filter(Boolean);
          if(!newLive[pid]) newLive[pid]={fp:0,pts:0,reb:0,ast:0,stl:0,blk:0,to:0,live:isLive,gameId:event.id,teams:_teams};
          newLive[pid].fp  += stat.fp;
          newLive[pid].pts += stat.pts;
          newLive[pid].reb += stat.reb;
          newLive[pid].ast += stat.ast;
          newLive[pid].stl += stat.stl;
          newLive[pid].blk += stat.blk;
          newLive[pid].to  += stat.to;
          if(isLive) newLive[pid].live = true;
        }
        if(isLive) hasLive = true;
        if(isComplete && !alreadySaved) completedToSave.push({event, stats:gameStats, dateStr:event._dateStr});
      }catch(e){ console.warn('Box score fetch failed:', event.id); }
    }

    livePlayerStats = newLive;
    liveGamesActive = hasLive;
    liveStatsLastUpdate = new Date();

    // Save completed game stats to Supabase
    if(completedToSave.length > 0){
      if(!S.playerStats) S.playerStats={};
      let changed = false;
      for(const {event, stats, dateStr} of completedToSave){
        for(const [pid, stat] of Object.entries(stats)){
          const key = pid+'_'+dateStr+'_'+event.id;
          if(!S.playerStats[key]){
            const _comps2 = event.competitions?.[0]?.competitors||[];
            const _teams2 = _comps2.map(c=>espnTeamToOurs(c.team?.abbreviation||'')).filter(Boolean);
            S.playerStats[key] = {...stat, pid:parseInt(pid), date:dateStr, gameId:event.id, teams:_teams2};
            changed = true;
          }
        }
      }
      if(changed) await saveState();
    }

    render();
    updateLiveStatsIndicator();
    rebuildGameTopPlayer(); // Update top player map with fresh live data
    renderTopLeaderboard(); // Update top leaderboard
    detectFPEvents(); // Trigger portrait animations
    fetchScores(); // Re-render scoreboard portraits with latest live FP leaders
    renderTopPlayersBanner(); // Update ticker with fresh live FP
  }catch(e){ console.warn('refreshLiveStats error:', e); }
}

function updateLiveStatsIndicator(){
  const el = document.getElementById('live-stats-indicator');
  if(!el) return;
  if(liveGamesActive){
    el.innerHTML = '<span class="score-live">LIVE</span> <span style="font-size:14px;color:var(--accent3)">SCORES UPDATING EVERY 60s</span>';
  } else if(liveStatsLastUpdate){
    el.innerHTML = `<span style="font-size:14px;color:var(--text3)">LAST UPDATED: ${liveStatsLastUpdate.toLocaleTimeString()}</span>`;
  }
}

function startLiveStatsPolling(){
  refreshLiveStats();
  if(liveStatsPolling) clearInterval(liveStatsPolling);
  liveStatsPolling = setInterval(refreshLiveStats, 60000);
}

// Total fantasy points for a player (saved completed + live in-progress)
function playerGamesPlayed(pid){
  const saved = Object.values(S.playerStats||{}).filter(s=>s.pid===pid);
  const live = livePlayerStats[pid];
  const gameIds = new Set(saved.map(s=>s.gameId).filter(Boolean));
  if(live && !gameIds.has(live.gameId)) return gameIds.size + 1;
  return gameIds.size;
}

function playerFPPG(pid, mid=null){
  const gp = playerGamesPlayedForManager(pid, mid);
  if(!gp) return 0;
  return +(playerStatScore(pid, mid)/gp).toFixed(1);
}

function playerGamesPlayedForManager(pid, mid=null){
  let acqDate = null;
  if(mid !== null && S.waiverAcquisitions){
    acqDate = S.waiverAcquisitions[mid+'_'+pid] || null;
  }
  const saved = Object.values(S.playerStats||{}).filter(s=>{
    if(s.pid !== pid) return false;
    if(acqDate && s.date && s.date < acqDate) return false;
    return true;
  });
  const live = livePlayerStats[pid];
  const gameIds = new Set(saved.map(s=>s.gameId).filter(Boolean));
  if(live && !gameIds.has(live.gameId)) return gameIds.size + 1;
  return gameIds.size;
}

function playerStatScore(pid, mid=null){
  // If mid provided, only count stats earned ON OR AFTER acquisition date
  let acqDate = null;
  if(mid !== null && S.waiverAcquisitions){
    acqDate = S.waiverAcquisitions[mid+'_'+pid] || null;
  }
  const saved = S.playerStats
    ? Object.values(S.playerStats).filter(s=>{
        if(s.pid!==pid) return false;
        if(acqDate && s.date && s.date < acqDate) return false; // exclude pre-acquisition
        return true;
      }).reduce((sum,s)=>sum+(s.fp||0),0)
    : 0;
  const live = livePlayerStats[pid];
  let liveContrib = 0;
  if(live){
    const alreadySaved = S.playerStats && Object.values(S.playerStats).some(
      s => s.pid===pid && s.gameId && s.gameId===live.gameId
    );
    if(!alreadySaved) liveContrib = live.fp||0;
  }
  return +(saved + liveContrib).toFixed(1);
}

function isPlayerLive(pid){
  return livePlayerStats[pid]?.live === true;
}

function managerStatScoreAuto(mid){
  // Pass mid so playerStatScore can filter pre-acquisition stats
  const rosterFP = (S.rosters[mid]||[]).reduce((s,pid)=>s+playerStatScore(pid,mid),0);
  const droppedFP = (S.droppedFP&&S.droppedFP[mid])||0; // points from dropped players
  return +(rosterFP + droppedFP).toFixed(1);
}



// ── Player Lightbox ──────────────────────────────────────────────
function openPlayerModal(pid){
  const p = getPlayer(pid);
  if(!p) return;
  const t = getTeam(p.team);
  const teamColor = (TEAM_LOGOS[p.team]?.color)||'#4a9eff';
  const hasPortrait = getActivePortrait(p.name);
  const logo = TEAM_LOGOS[p.team];

  // Get all saved game stats for this player
  const gameStats = [];
  if(S.playerStats){
    for(const [key, stat] of Object.entries(S.playerStats)){
      if(parseInt(stat.pid)===pid){
        gameStats.push({...stat, key});
      }
    }
  }
  // Also add live stats — but only if not already saved as a completed game
  const live = livePlayerStats[pid];
  if(live){
    const alreadySaved = gameStats.some(g => g.gameId && live.gameId && g.gameId === live.gameId);
    if(!alreadySaved) gameStats.push({...live, date:'TODAY', live:true});
  }

  gameStats.sort((a,b) => (a.date||'').localeCompare(b.date||''));

  const gp = gameStats.length;
  const totals = gameStats.reduce((acc,g)=>{
    acc.pts+=(g.pts||0); acc.reb+=(g.reb||0); acc.ast+=(g.ast||0);
    acc.stl+=(g.stl||0); acc.blk+=(g.blk||0); acc.to+=(g.to||0);
    acc.fgm+=(g.fgm||0); acc.fga+=(g.fga||0); acc.ftm+=(g.ftm||0); acc.fta+=(g.fta||0);
    acc.tpm+=(g.tpm||0); acc.tpa+=(g.tpa||0); acc.oreb+=(g.oreb||0); acc.dreb+=(g.dreb||0);
    acc.pf+=(g.pf||0); acc.fp+=(g.fp||0);
    return acc;
  }, {pts:0,reb:0,ast:0,stl:0,blk:0,to:0,fgm:0,fga:0,ftm:0,fta:0,tpm:0,tpa:0,oreb:0,dreb:0,pf:0,fp:0});

  // Helper: format percentage
  const pct = (m,a) => a>0 ? (m/a).toFixed(3).replace(/^0/,'') : '—';
  const efg = (fgm,tpm,fga) => fga>0 ? ((fgm+0.5*tpm)/fga).toFixed(3).replace(/^0/,'') : '—';

  const statRow = (g, isTotal=false, isAvg=false, playerName='') => {
    const fgm2 = (g.fgm||0)-(g.tpm||0), fga2 = (g.fga||0)-(g.tpa||0);
    const gmSc = g.gmSc != null ? g.gmSc :
      +((g.pts||0) + 0.4*(g.fgm||0) - 0.7*(g.fga||0) - 0.4*((g.fta||0)-(g.ftm||0)) +
        0.7*(g.oreb||0) + 0.3*(g.dreb||0) + (g.stl||0) + 0.7*(g.ast||0) + 0.7*(g.blk||0) -
        0.4*(g.pf||0) - (g.to||0)).toFixed(1);
    const dateLabel = isTotal ? 'TOT' : isAvg ? 'AVG' : (g.live ? '🔴' : (g.date||'?').slice(4,8).replace(/(\d{2})(\d{2})/,'$1/$2'));
    const fpStr = isAvg
      ? (gp>0 ? (g.fp/gp>=0?'+':'')+(g.fp/gp).toFixed(1) : '—')
      : (g.fp!=null?(g.fp>=0?'+':'')+parseFloat(g.fp).toFixed(1):'—');
    const rowColor = isTotal?'var(--accent2)':isAvg?'var(--accent3)':g.live?'var(--red)':'var(--text3)';
    const div = (n,d) => d>0?(n/d).toFixed(1):'—';
    // Build opponent label — find the non-player team from teams array
    let oppLabel = '—';
    if(!isTotal && !isAvg){
      if(g.teams && g.teams.length >= 2){
        const playerTeam = playerName ? (PLAYERS.find(p=>p.name===playerName)?.team||'') : '';
        const opp = g.teams.find(t=>t!==playerTeam) || g.teams[0];
        oppLabel = opp ? '@'+opp : (g.live ? '🔴' : '—');
      } else if(g.live){
        oppLabel = '🔴';
      }
    } else {
      oppLabel = '';
    }
    return `<tr class="${isTotal||isAvg?'boxscore-total':''}">
      <td style="color:${rowColor};font-family:'Press Start 2P',monospace;font-size:7px;white-space:nowrap">${dateLabel}</td>
      <td style="color:var(--text3);font-size:10px;white-space:nowrap">${oppLabel}</td>
      <td style="color:${isAvg?'var(--accent3)':isTotal?'var(--accent2)':parseFloat(g.fp||0)>=0?'var(--green)':'var(--red)'};font-family:'Press Start 2P',monospace;font-size:9px">${fpStr}</td>
      <td style="color:var(--text3);font-size:12px">${isAvg?div(parseInt(g.min||0),gp):g.min||'—'}</td>
      <td style="color:${(g.pts||0)>=25?'#00ff88':(g.pts||0)>=15?'var(--green)':(g.pts||0)>0?'var(--green)':'inherit'};font-weight:600">${isAvg?div(g.pts,gp):g.pts||0}</td>
      <td>${isAvg?div(g.fgm,gp):g.fgm||0}</td>
      <td>${isAvg?div(g.fga,gp):g.fga||0}</td>
      <td style="color:var(--text3)">${pct(g.fgm||0,g.fga||0)}</td>
      <td style="color:${(g.tpm||0)>=3?'#ffcc00':(g.tpm||0)>0?'#ffcc00':'inherit'}">${isAvg?div(g.tpm,gp):g.tpm||0}</td>
      <td>${isAvg?div(g.tpa,gp):g.tpa||0}</td>
      <td style="color:var(--text3)">${pct(g.tpm||0,g.tpa||0)}</td>
      <td>${isAvg?div(fgm2,gp):fgm2}</td>
      <td>${isAvg?div(fga2,gp):fga2}</td>
      <td style="color:var(--text3)">${pct(fgm2,fga2)}</td>
      <td style="color:var(--text3)">${efg(g.fgm||0,g.tpm||0,g.fga||0)}</td>
      <td>${isAvg?div(g.ftm,gp):g.ftm||0}</td>
      <td>${isAvg?div(g.fta,gp):g.fta||0}</td>
      <td style="color:var(--text3)">${pct(g.ftm||0,g.fta||0)}</td>
      <td style="color:var(--text3)">${isAvg?div(g.oreb,gp):g.oreb||0}</td>
      <td style="color:var(--text3)">${isAvg?div(g.dreb,gp):g.dreb||0}</td>
      <td style="color:${(g.reb||0)>=10?'#4a9eff':(g.reb||0)>0?'#4a9eff':'inherit'}">${isAvg?div(g.reb,gp):g.reb||0}</td>
      <td style="color:${(g.ast||0)>=8?'#ff69b4':(g.ast||0)>0?'#ff69b4':'inherit'}">${isAvg?div(g.ast,gp):g.ast||0}</td>
      <td style="color:${(g.stl||0)>0?'var(--accent3)':'inherit'}">${isAvg?div(g.stl,gp):g.stl||0}</td>
      <td style="color:${(g.blk||0)>=2?'#cc88ff':(g.blk||0)>0?'#cc88ff':'inherit'}">${isAvg?div(g.blk,gp):g.blk||0}</td>
      <td style="color:${(g.to||0)>0?'var(--red)':'inherit'}">${isAvg?div(g.to,gp):g.to||0}</td>
      <td style="color:var(--text3)">${isAvg?div(g.pf,gp):g.pf||0}</td>
      <td style="color:${parseFloat(gmSc)>=10?'var(--green)':parseFloat(gmSc)<0?'var(--red)':'inherit'}">${isAvg?div(parseFloat(gmSc)*gp,gp):gmSc}</td>
      <td style="color:${(g.plusMinus||0)>0?'var(--green)':(g.plusMinus||0)<0?'var(--red)':'inherit'}">${isAvg?'—':(g.plusMinus!=null?(g.plusMinus>0?'+':'')+g.plusMinus:'—')}</td>
    </tr>`;
  };

  // Summary stats bar (FPPG + totals at a glance)
  const fppg = gp>0 ? (totals.fp/gp).toFixed(1) : '—';
  const summaryHtml = gp>0 ? `
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:.75rem;padding:.625rem;background:var(--bg2);border:1px solid var(--border)">
      <div style="text-align:center"><div style="font-family:'Press Start 2P',monospace;font-size:14px;color:var(--accent2)">${fppg>0?'+':''}${fppg}</div><div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);margin-top:3px">FPPG</div></div>
      <div style="width:1px;background:var(--border)"></div>
      <div style="text-align:center"><div style="font-family:'Press Start 2P',monospace;font-size:14px;color:var(--accent)">${totals.fp>=0?'+':''}${totals.fp.toFixed(1)}</div><div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);margin-top:3px">TOTAL FP</div></div>
      <div style="width:1px;background:var(--border)"></div>
      <div style="text-align:center"><div style="font-size:16px;color:var(--text)">${gp}</div><div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);margin-top:3px">GP</div></div>
      <div style="width:1px;background:var(--border)"></div>
      <div style="text-align:center"><div style="font-size:16px;color:var(--text)">${(totals.pts/gp).toFixed(1)}</div><div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);margin-top:3px">PPG</div></div>
      <div style="text-align:center"><div style="font-size:16px;color:var(--text)">${(totals.reb/gp).toFixed(1)}</div><div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);margin-top:3px">RPG</div></div>
      <div style="text-align:center"><div style="font-size:16px;color:var(--text)">${(totals.ast/gp).toFixed(1)}</div><div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);margin-top:3px">APG</div></div>
      <div style="text-align:center"><div style="font-size:16px;color:var(--text)">${pct(totals.fgm,totals.fga)}</div><div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);margin-top:3px">FG%</div></div>
      <div style="text-align:center"><div style="font-size:16px;color:var(--text)">${efg(totals.fgm,totals.tpm,totals.fga)}</div><div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3);margin-top:3px">eFG%</div></div>
    </div>` : '';

  const tableHtml = gameStats.length ? `
    ${summaryHtml}
    <div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
    <table class="boxscore-table" style="font-size:11px;min-width:900px">
      <thead>
        <tr style="font-family:'Press Start 2P',monospace;font-size:6px;color:var(--text3)">
          <th>DATE</th><th>OPP</th><th style="color:var(--green)">FP</th><th>MP</th><th style="color:var(--green)">PTS</th>
          <th>FG</th><th>FGA</th><th style="color:var(--text3)">FG%</th>
          <th style="color:#ffcc00">3P</th><th>3PA</th><th style="color:var(--text3)">3P%</th>
          <th>2P</th><th>2PA</th><th style="color:var(--text3)">2P%</th>
          <th style="color:var(--text3)">eFG%</th>
          <th>FT</th><th>FTA</th><th style="color:var(--text3)">FT%</th>
          <th style="color:var(--text3)">ORB</th><th style="color:var(--text3)">DRB</th><th style="color:#4a9eff">TRB</th>
          <th style="color:#ff69b4">AST</th><th>STL</th><th style="color:#cc88ff">BLK</th>
          <th style="color:var(--red)">TOV</th><th style="color:var(--text3)">PF</th>
          <th>PTS</th><th>GmSc</th><th>+/-</th>
          <th style="color:var(--accent2)">FP</th>
        </tr>
      </thead>
      <tbody>
        ${gameStats.map(g=>statRow(g,false,false,p?.name||'')).join('')}
        ${gp>1?statRow(totals,true,false,p?.name||''):''}
        ${gp>1?statRow(totals,false,true,p?.name||''):''}
      </tbody>
    </table>
    </div>` :
    `<div style="padding:1.5rem;text-align:center;color:var(--text3);font-size:14px">No playoff stats yet</div>`;

  const modal = document.createElement('div');
  modal.className = 'player-modal';
  modal.id = 'player-modal';
  modal.dataset.pid = pid;
  modal.onclick = e => { if(e.target===modal) closePlayerModal(); };
  modal.innerHTML = `
    <div class="player-modal-inner">
      <div class="player-modal-header">
        <div style="position:relative;flex-shrink:0">
          <div class="player-modal-portrait" style="border-color:${teamColor}">
            ${hasPortrait
              ? `<img src="${getActivePortrait(p.name)}" style="width:100%;height:100%;object-fit:cover;object-position:center top"/>`
              : logo ? logo.svg : `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#020c18;font-family:'Press Start 2P',monospace;font-size:10px;color:${teamColor}">${p.team}</div>`}
          </div>
          ${getPortraitCount(p.name)>1?`
          <div style="position:absolute;bottom:0;left:0;right:0;display:flex;justify-content:space-between;align-items:center;background:rgba(0,0,0,.75);padding:3px 6px">
            <button onclick="event.stopPropagation();cyclePortrait('${p.name.replace(/'/g,"\'")}', -1)" style="background:none;border:none;color:var(--accent2);font-size:18px;cursor:pointer;padding:0;line-height:1">‹</button>
            <span style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3)">${getPortraitIndex(p.name)+1} / ${getPortraitCount(p.name)}</span>
            <button onclick="event.stopPropagation();cyclePortrait('${p.name.replace(/'/g,"\'")}', 1)" style="background:none;border:none;color:var(--accent2);font-size:18px;cursor:pointer;padding:0;line-height:1">›</button>
          </div>`:''}
        </div>
        <div style="flex:1">
          <div style="font-family:'Press Start 2P',monospace;font-size:11px;color:${teamColor}">${p.name.toUpperCase()}</div>
          <div style="font-size:13px;color:var(--text3);margin-top:4px">${p.pos} · ${t?.name||p.team}</div>
          ${t?.eliminated?'<span class="badge badge-elim" style="margin-top:4px">ELIMINATED</span>':''}
          ${live?`<div style="font-family:'Press Start 2P',monospace;font-size:10px;color:var(--red);margin-top:4px">LIVE: ${live.fp>=0?'+':''}${parseFloat(live.fp).toFixed(1)} FP</div>`:''}
        </div>
        <button class="player-modal-close" onclick="closePlayerModal()">✕</button>
      </div>
      <div style="padding:.75rem">
        <div style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--text3);margin-bottom:.5rem">PLAYOFF BOX SCORES</div>
        ${tableHtml}
      </div>
    </div>`;
  document.body.appendChild(modal);
}

function closePlayerModal(){
  const m = document.getElementById('player-modal');
  if(m) m.remove();
}


// ── Roster Drag Reorder ───────────────────────────────────────────
let dragSrcMid = null;
let dragSrcIdx = null;

function getRosterOrder(mid){
  const order = S.rosterOrder && S.rosterOrder[mid];
  const roster = S.rosters[mid] || [];
  if(!order) return [...roster];
  // Return roster in saved order, appending any new players not in order
  const ordered = order.filter(pid => roster.includes(pid));
  const extras = roster.filter(pid => !order.includes(pid));
  return [...ordered, ...extras];
}

function dragStart(e, mid, idx){
  dragSrcMid = mid;
  dragSrcIdx = idx;
  e.dataTransfer.effectAllowed = 'move';
  e.currentTarget.style.opacity = '0.4';
}

function dragEnd(e){
  e.currentTarget.style.opacity = '1';
}

function dragOver(e){
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  e.currentTarget.style.borderColor = 'var(--accent3)';
}

function dragLeave(e){
  e.currentTarget.style.borderColor = '';
}

async function dragDrop(e, mid, idx){
  e.preventDefault();
  e.currentTarget.style.borderColor = '';
  if(dragSrcMid !== mid || dragSrcIdx === idx) return;
  // Reorder
  const order = getRosterOrder(mid);
  const moved = order.splice(dragSrcIdx, 1)[0];
  order.splice(idx, 0, moved);
  if(!S.rosterOrder) S.rosterOrder = {};
  S.rosterOrder[mid] = order;
  await saveState();
  render();
}

// ── Boot ──────────────────────────────────────────────────────────

// ── Series Records ────────────────────────────────────────────────
let seriesRecords = {};
let gameTopPlayer = {}; // persists between fetchScores calls


// ── ESPN Injury Feed ─────────────────────────────────────────────
let espnInjuries = {}; // name_lower -> {status, comment, updated}

async function fetchInjuryReport(){
  try{
    const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/injuries');
    const d = await res.json();
    const newData = {};
    for(const teamData of (d.injuries||[])){
      for(const inj of (teamData.injuries||[])){
        const name = inj.athlete?.displayName;
        if(!name) continue;
        const status = inj.status; // "Out", "Day-To-Day", "Questionable"
        if(!status || status==='Active') continue;
        newData[name.toLowerCase()] = {
          name,
          status,
          comment: inj.shortComment||'',
          updated: inj.date||''
        };
      }
    }
    espnInjuries = newData;
    render(); // Re-render to show updated badges
    console.log('Injury report updated:', Object.keys(espnInjuries).length, 'players');
  }catch(e){ console.warn('fetchInjuryReport error:', e); }
}

function getESPNInjury(playerName){
  return espnInjuries[playerName?.toLowerCase()] || null;
}

function injuryBadgeHtml(playerName, small=false){
  const inj = getESPNInjury(playerName);
  if(!inj) return '';
  const color = inj.status==='Out' ? 'var(--red)' : inj.status==='Day-To-Day' ? '#ff9900' : '#ffcc00';
  const label = inj.status==='Out' ? 'OUT' : inj.status==='Day-To-Day' ? 'DTD' : 'Q';
  if(small) return `<span style="font-family:'Press Start 2P',monospace;font-size:6px;padding:1px 3px;background:${color};color:#000;margin-left:3px">${label}</span>`;
  return `<div style="position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.55)">
    <span style="font-family:'Press Start 2P',monospace;font-size:8px;color:${color};text-shadow:0 0 8px ${color}">${label}</span>
  </div>`;
}


// ── Player Animations ─────────────────────────────────────────────
// Stored in Supabase under 'nba-animations-2026'
// Format: {"Player Name": {idle:"data:video/mp4;base64,...", pos:"...", neg:"..."}}
let PLAYER_ANIMATIONS = {};
let prevLiveFP = {}; // pid -> fp from last poll, for delta detection
let activeAnimations = {}; // pid -> 'idle'|'pos'|'neg' currently playing

async function loadAnimations(){
  try{
    const {data} = await db.from('leagues').select('state').eq('id','nba-animations-2026').single();
    if(data?.state){
      PLAYER_ANIMATIONS = JSON.parse(data.state);
      console.log('Loaded animations for:', Object.keys(PLAYER_ANIMATIONS).length, 'players');
    }
  }catch(e){ /* no animations yet */ }
}

function getAnimation(playerName, type){
  const a = PLAYER_ANIMATIONS[playerName];
  if(!a) return null;
  return a[type] || null;
}

function hasAnimations(playerName){
  return !!PLAYER_ANIMATIONS[playerName];
}

// Called after each refreshLiveStats — detect FP changes and trigger animations
function detectFPEvents(){
  for(const [pidStr, stat] of Object.entries(livePlayerStats||{})){
    const pid = parseInt(pidStr);
    const currentFP = stat.fp||0;
    const prev = prevLiveFP[pid];
    if(prev === undefined){
      prevLiveFP[pid] = currentFP;
      continue;
    }
    const delta = currentFP - prev;
    if(Math.abs(delta) > 0){
      triggerPlayerAnimation(pid, delta > 0 ? 'pos' : 'neg', delta);
    }
    prevLiveFP[pid] = currentFP;
  }
}

function triggerPlayerAnimation(pid, type, delta){
  const p = PLAYERS.find(x=>x.id===pid);
  if(!p || !hasAnimations(p.name)) return;
  activeAnimations[pid] = {type, delta, ts: Date.now()};
  // Auto-clear after 6s (animation duration), revert to idle
  setTimeout(()=>{
    if(activeAnimations[pid]?.ts && Date.now() - activeAnimations[pid].ts >= 5800){
      activeAnimations[pid] = {type:'idle', delta:0, ts: Date.now()};
    }
    // Re-render affected cards
    renderAnimatedCards();
  }, 6100);
  renderAnimatedCards();
}

function renderAnimatedCards(){
  // Update all visible animated portrait containers
  document.querySelectorAll('[data-anim-pid]').forEach(el => {
    const pid = parseInt(el.dataset.animPid);
    updateAnimatedPortrait(el, pid);
  });
}

function updateAnimatedPortrait(container, pid){
  const p = PLAYERS.find(x=>x.id===pid);
  if(!p || !hasAnimations(p.name)) return;
  const anim = activeAnimations[pid];
  const isLiveNow = isPlayerLive(pid);
  if(!isLiveNow){ container.innerHTML = buildStaticPortrait(p, container.dataset); return; }

  const type = anim?.type || 'idle';
  const delta = anim?.delta || 0;
  const videoSrc = getAnimation(p.name, type) || getAnimation(p.name, 'idle');
  if(!videoSrc){ container.innerHTML = buildStaticPortrait(p, container.dataset); return; }

  const deltaColor = delta > 0 ? 'var(--green)' : delta < 0 ? 'var(--red)' : 'var(--text3)';
  const deltaStr = delta > 0 ? '+'+delta.toFixed(1) : delta < 0 ? delta.toFixed(1) : '';

  // LIVE badge — always visible while animating
  const liveTag = '<div style="position:absolute;top:3px;left:3px;background:#ff3344;font-family:var(--font-pixel),monospace;font-size:5px;padding:2px 3px;color:#fff;z-index:2;animation:blink .8s step-end infinite">LIVE</div>';

  // FP delta overlay — big, centered, dramatic float
  const fpOverlay = deltaStr ? '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:3">'
    + '<div style="font-family:var(--font-pixel),monospace;font-size:14px;color:'+deltaColor+';text-shadow:0 0 10px '+deltaColor+',0 0 20px '+deltaColor+';animation:fp-float 1.8s ease-out forwards;background:rgba(0,0,0,.5);padding:4px 8px">'+deltaStr+'</div>'
    + '</div>' : '';

  const onEnded = type !== 'idle' ? 'activeAnimations['+pid+']={type:"idle",delta:0,ts:Date.now()};updateAnimatedPortrait(this.parentElement,'+pid+')' : '';
  container.innerHTML = '<video autoplay '+(type==='idle'?'loop':'')+' muted playsinline onended="'+onEnded+'" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"><source src="'+videoSrc+'" type="video/mp4"></video>'+liveTag+fpOverlay;
}

function buildStaticPortrait(p, dataset){
  const portrait = getActivePortrait(p.name);
  const logo = TEAM_LOGOS[p.team];
  if(portrait) return '<img src="'+portrait+'" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"/>';
  if(logo) return '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:12px">'+logo.svg+'</div>';
  return '';
}

function rebuildGameTopPlayer(){
  gameTopPlayer = {};
  // Include ALL players — even fp=0 so we show someone for low-scoring early games
  const allStatSources = [
    ...Object.entries(livePlayerStats||{}).map(([pid,s])=>({...s, pid:parseInt(pid), isLive:true})),
    ...Object.values(S.playerStats||{}).map(s=>({...s, isLive:false}))
  ];
  for(const stat of allStatSources){
    const gid = stat.gameId;
    if(!gid) continue;
    const fp = typeof stat.fp === 'number' ? stat.fp : 0;
    const existing = gameTopPlayer[gid];
    if(existing && fp <= existing.fp) continue;
    const pid = parseInt(stat.pid||stat.id||0);
    const p = PLAYERS.find(x=>x.id===pid);
    if(p && getActivePortrait(p.name)){
      gameTopPlayer[gid] = {fp, name:p.name, pid:p.id, isLive:!!(stat.isLive)};
    }
  }
}




// ── Portrait Uploader ─────────────────────────────────────────────


async function handleLogoUpload(input){
  const files = [...input.files];
  if(!files.length) return;
  const status = document.getElementById('logo-upload-status');
  const preview = document.getElementById('logo-upload-preview');
  status.textContent = 'Processing ' + files.length + ' logo(s)...';
  status.style.color = 'var(--accent3)';
  preview.innerHTML = '';

  for(const file of files){
    const name = file.name.replace(/\.[^.]+$/, '').replace(/_/g, ' ');
    // Resize to 80x80
    const dataUri = await new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 80; canvas.height = 80;
          const ctx = canvas.getContext('2d');
          const size = Math.min(img.width, img.height);
          ctx.drawImage(img, (img.width-size)/2, (img.height-size)/2, size, size, 0, 0, 80, 80);
          resolve(canvas.toDataURL('image/png', 0.85));
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });

    // Sample multiple points, pick most vibrant color
    const canvas2 = document.createElement('canvas'); canvas2.width=80; canvas2.height=80;
    const ctx2 = canvas2.getContext('2d');
    const img2 = new Image(); img2.src = dataUri;
    await new Promise(r=>img2.onload=r);
    ctx2.drawImage(img2, 0, 0, 80, 80);
    // Sample a grid of pixels and find most saturated
    let bestColor = null, bestSat = -1;
    for(let sx=5; sx<=75; sx+=7){
      for(let sy=5; sy<=75; sy+=7){
        const px = ctx2.getImageData(sx,sy,1,1).data;
        const r2=px[0],g2=px[1],b2=px[2],a2=px[3];
        if(a2 < 128) continue; // skip transparent
        const max=Math.max(r2,g2,b2), min=Math.min(r2,g2,b2);
        const sat = max===0 ? 0 : (max-min)/max;
        const lum = (max+min)/2/255;
        // Must be bright enough and saturated enough
        if(sat > bestSat && lum > 0.2 && lum < 0.9){
          bestSat = sat;
          // Boost saturation: amplify towards max channel
          const boost = Math.min(255/max, 1.8);
          const br = Math.min(255, Math.round(r2*boost));
          const bg = Math.min(255, Math.round(g2*boost));
          const bb = Math.min(255, Math.round(b2*boost));
          bestColor = '#'+[br,bg,bb].map(x=>x.toString(16).padStart(2,'0')).join('');
        }
      }
    }
    // Fallback palette if image is too dark/desaturated
    const fallbackColors = ['#ff6b35','#00d4aa','#4a9eff','#cc44ff','#ffcc00','#ff3366','#00ff88','#ff8800'];
    const color = bestColor || fallbackColors[CUSTOM_LOGOS.length % fallbackColors.length];

    // Remove existing logo with same name
    CUSTOM_LOGOS = CUSTOM_LOGOS.filter(l=>l.name!==name);
    CUSTOM_LOGOS.push({name, dataUri, color});

    // Preview
    const div = document.createElement('div');
    div.style.cssText = 'text-align:center;width:70px';
    div.innerHTML = `<img src="${dataUri}" style="width:60px;height:60px;object-fit:cover;border:2px solid var(--accent2)"><div style="font-size:9px;color:var(--text3);margin-top:3px">${name}</div>`;
    preview.appendChild(div);
    status.textContent = 'Added: ' + name;
  }

  // Save
  status.textContent = 'Saving...';
  try{
    await saveCustomLogos();
    status.textContent = '✓ Saved ' + CUSTOM_LOGOS.length + ' custom logo(s)!';
    status.style.color = 'var(--green)';
    renderExistingLogos();
    render();
  }catch(e){
    status.textContent = '✗ Error: ' + e.message;
    status.style.color = 'var(--red)';
  }
  input.value = '';
}

function renderExistingLogos(){
  const el = document.getElementById('logo-existing');
  if(!el) return;
  if(!CUSTOM_LOGOS.length){ el.innerHTML = ''; return; }
  el.innerHTML = '<div style="font-family:var(--font-pixel),monospace;font-size:7px;color:var(--text3);margin-bottom:6px">EXISTING LOGOS</div>'
    + '<div style="display:flex;flex-wrap:wrap;gap:6px">'
    + CUSTOM_LOGOS.map((l,i)=>`
      <div style="text-align:center;width:70px">
        <img src="${l.dataUri}" style="width:60px;height:60px;object-fit:cover;border:2px solid ${l.color}"/>
        <div style="font-size:9px;color:var(--text3);margin-top:2px">${l.name}</div>
        <button onclick="deleteCustomLogo(${i})" style="font-size:8px;background:none;border:1px solid var(--red);color:var(--red);cursor:pointer;padding:1px 4px;margin-top:2px">✕</button>
      </div>`).join('')
    + '</div>';
}


async function editLogoColor(i){
  const logo = CUSTOM_LOGOS[i];
  if(!logo) return;
  const newColor = prompt('Enter hex color for "'+logo.name+'" (e.g. #ff6600):', logo.color);
  if(!newColor || !newColor.startsWith('#')) return;
  CUSTOM_LOGOS[i].color = newColor;
  await saveCustomLogos();
  renderExistingLogos();
  render();
}

async function deleteCustomLogo(i){
  if(!confirm('Delete "'+CUSTOM_LOGOS[i]?.name+'"?')) return;
  CUSTOM_LOGOS.splice(i,1);
  await saveCustomLogos();
  renderExistingLogos();
  render();
}

async function handleAnimationUpload(input){
  const files = [...input.files];
  if(!files.length) return;
  const status = document.getElementById('anim-upload-status');
  const preview = document.getElementById('anim-upload-preview');
  status.textContent = 'Processing ' + files.length + ' video(s)...';
  status.style.color = 'var(--accent3)';
  preview.innerHTML = '';
  let processed = 0;

  for(const file of files){
    // Parse filename: "Victor_Wembanyama_idle.mp4" -> name="Victor Wembanyama", type="idle"
    const base = file.name.replace(/\.[^.]+$/, '');
    const parts = base.split('_');
    const type = parts.pop().toLowerCase(); // last segment is type
    const playerName = parts.join(' ');
    if(!['idle','pos','neg','positive','negative'].includes(type)){
      status.textContent = 'Bad filename: ' + file.name + ' (must end in _idle, _pos, or _neg)';
      status.style.color = 'var(--red)';
      continue;
    }
    const normType = type==='positive'?'pos':type==='negative'?'neg':type;

    const dataUri = await new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.readAsDataURL(file);
    });

    if(!PLAYER_ANIMATIONS[playerName]) PLAYER_ANIMATIONS[playerName] = {};
    PLAYER_ANIMATIONS[playerName][normType] = dataUri;
    processed++;

    // Show preview
    const div = document.createElement('div');
    div.style.cssText = 'text-align:center;width:80px';
    const vid = document.createElement('video');
    vid.src = dataUri; vid.autoplay = true; vid.muted = true; vid.loop = true;
    vid.style.cssText = 'width:80px;height:80px;object-fit:cover;border:2px solid var(--green)';
    const label = document.createElement('div');
    label.style.cssText = 'font-size:9px;color:var(--text3);margin-top:3px';
    label.textContent = playerName + ' ' + normType.toUpperCase();
    div.appendChild(vid); div.appendChild(label);
    preview.appendChild(div);
    status.textContent = 'Processed ' + processed + '/' + files.length + '...';
  }

  // Save to Supabase
  status.textContent = 'Saving...';
  try{
    const result = await db.from('leagues').upsert({id:'nba-animations-2026', state:JSON.stringify(PLAYER_ANIMATIONS)});
    if(result.error) throw new Error(result.error.message);
    status.textContent = '✓ Saved animations for ' + Object.keys(PLAYER_ANIMATIONS).length + ' player(s)';
    status.style.color = 'var(--green)';
  }catch(e){
    status.textContent = '✗ Save failed: ' + e.message;
    status.style.color = 'var(--red)';
  }
  input.value = '';
}

async function resizePortrait(file){
  // Resize to 300x300 at 70% quality — keeps total DB size manageable
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 300; canvas.height = 300;
        const ctx = canvas.getContext('2d');
        // Crop to square from center-top
        const size = Math.min(img.width, img.height);
        const sx = (img.width - size) / 2;
        const sy = 0; // top-aligned
        ctx.drawImage(img, sx, sy, size, size, 0, 0, 300, 300);
        resolve(canvas.toDataURL('image/jpeg', 0.70));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}


function openPortraitManager(){
  const existing = document.getElementById('portrait-mgr-modal');
  if(existing){ existing.remove(); return; }

  const names = Object.keys(PLAYER_PORTRAITS).sort();
  const modal = document.createElement('div');
  modal.id = 'portrait-mgr-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:10000;display:flex;align-items:center;justify-content:center;padding:1rem';
  modal.onclick = e=>{ if(e.target===modal) modal.remove(); };

  const buildGrid = () => {
    const sorted = Object.keys(PLAYER_PORTRAITS).sort();
    return sorted.map(name => {
      const portraits = Array.isArray(PLAYER_PORTRAITS[name])
        ? PLAYER_PORTRAITS[name]
        : [PLAYER_PORTRAITS[name]];
      const thumbs = portraits.map((src, idx) =>
        '<div style="position:relative;display:inline-block;margin:2px">'
        +'<img src="'+src+'" style="width:52px;height:52px;object-fit:cover;object-position:center top;image-rendering:pixelated;border:2px solid var(--border)"/>'
        +'<button data-pname="'+name+'" data-pidx="'+idx+'" onclick="deletePortrait(this.dataset.pname,parseInt(this.dataset.pidx))" '
        +'style="position:absolute;top:-4px;right:-4px;width:16px;height:16px;background:var(--red);border:none;color:#fff;font-size:9px;cursor:pointer;border-radius:50%;display:flex;align-items:center;justify-content:center;line-height:1">✕</button>'
        +(portraits.length>1?'<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.6);font-size:8px;text-align:center;color:#fff">'+(idx+1)+'/'+portraits.length+'</div>':'')
        +'</div>'
      ).join('');
      return '<div style="padding:6px;border-bottom:1px solid var(--border2)">'
        +'<div style="font-size:11px;color:var(--text2);margin-bottom:4px">'+name+'</div>'
        +'<div>'+thumbs+'</div>'
        +'</div>';
    }).join('');
  };

  modal.innerHTML = '<div style="background:var(--panel);border:2px solid var(--border);width:100%;max-width:600px;max-height:88vh;display:flex;flex-direction:column">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;padding:.625rem .875rem;border-bottom:2px solid var(--border);flex-shrink:0">'
    +'<span style="font-family:var(--font-pixel),monospace;font-size:9px;color:var(--accent3)">🖼 PORTRAIT MANAGER</span>'
    +"<button onclick=\"document.getElementById('portrait-mgr-modal').remove()\" style=\"background:none;border:none;color:var(--text2);font-size:22px;cursor:pointer;line-height:1\">×</button>"
    +'</div>'
    +'<div style="font-size:12px;color:var(--text3);padding:.5rem .875rem;border-bottom:1px solid var(--border2);flex-shrink:0">Click ✕ on a portrait to delete it. Portraits numbered left to right.</div>'
    +'<div id="portrait-mgr-grid" style="overflow-y:auto;flex:1;padding:.5rem .875rem">'+buildGrid()+'</div>'
    +'</div>';

  document.body.appendChild(modal);
}

async function deletePortrait(playerName, idx){
  if(!confirm('Delete portrait '+(idx+1)+' for '+playerName+'?')) return;
  const existing = PLAYER_PORTRAITS[playerName];
  if(!existing) return;
  if(Array.isArray(existing)){
    existing.splice(idx, 1);
    if(existing.length === 1) PLAYER_PORTRAITS[playerName] = existing[0]; // back to string
    else if(existing.length === 0) delete PLAYER_PORTRAITS[playerName];
  } else {
    delete PLAYER_PORTRAITS[playerName];
  }
  // Save
  await db.from('leagues').upsert({id:'nba-portraits-2026', state:JSON.stringify(PLAYER_PORTRAITS)});
  render();
  // Refresh the manager modal grid
  const grid = document.getElementById('portrait-mgr-grid');
  if(grid){
    const names = Object.keys(PLAYER_PORTRAITS).sort();
    // rebuild
    openPortraitManager(); openPortraitManager(); // toggle to refresh
  }
}

async function handlePortraitUpload(input){
  const files = [...input.files];
  if(!files.length) return;

  const status = document.getElementById('portrait-upload-status');
  const preview = document.getElementById('portrait-upload-preview');
  status.textContent = 'Processing ' + files.length + ' image(s)...';
  status.style.color = 'var(--accent3)';
  preview.innerHTML = '';

  let processed = 0;
  const newPortraits = {};

  for(const file of files){
    const name = file.name.replace(/\.[^.]+$/, '').replace(/_/g, ' ');
    const dataUri = await resizePortrait(file);
    newPortraits[name] = dataUri;
    processed++;

    // Show preview
    const div = document.createElement('div');
    div.style.cssText = 'text-align:center;width:80px';
    div.innerHTML = `<img src="${dataUri}" style="width:80px;height:80px;object-fit:cover;border:2px solid var(--accent3)"><div style="font-size:9px;color:var(--text3);margin-top:3px;word-break:break-word">${name}</div>`;
    preview.appendChild(div);
    status.textContent = 'Processed ' + processed + '/' + files.length + '...';
  }

  // Merge into PLAYER_PORTRAITS
  const replaceMode = document.getElementById('portrait-replace-mode')?.checked || false;
  for(const [name, dataUri] of Object.entries(newPortraits)){
    const existing = PLAYER_PORTRAITS[name];
    if(!existing){
      PLAYER_PORTRAITS[name] = dataUri; // first portrait
    } else if(replaceMode){
      // REPLACE: swap the most recent portrait (last in array, or the single string)
      if(Array.isArray(existing)){
        existing[existing.length - 1] = dataUri; // replace last portrait
      } else {
        PLAYER_PORTRAITS[name] = dataUri; // replace single portrait
      }
    } else {
      // ADD: append as new alternate portrait
      if(Array.isArray(existing)){
        existing.push(dataUri);
      } else {
        PLAYER_PORTRAITS[name] = [existing, dataUri];
      }
    }
  }

  // Save — split into chunks of 20 portraits each to avoid timeout
  status.textContent = 'Saving to Supabase...';
  try{
    const result = await db.from('leagues').upsert({
      id: 'nba-portraits-2026',
      state: JSON.stringify(PLAYER_PORTRAITS)
    });
    if(result.error) throw new Error(result.error.message);
    status.textContent = '✓ Saved ' + processed + ' portrait(s)! Total: ' + Object.keys(PLAYER_PORTRAITS).length;
    status.style.color = 'var(--green)';
    render();
  } catch(e){
    status.textContent = '✗ Save failed: ' + e.message + ' — try uploading fewer images at once';
    status.style.color = 'var(--red)';
  }
  input.value = '';
}


// ── Game Box Score Modal ──────────────────────────────────────────
async function openGameModal(espnId, homeTricode, awayTricode, statusText){
  const existing = document.getElementById('game-modal');
  if(existing) existing.remove();

  const awayId = espnTeamToOurs(awayTricode||'');
  const homeId = espnTeamToOurs(homeTricode||'');
  const awayColor = TEAM_LOGOS[awayId]?.color||'#4a9eff';
  const homeColor = TEAM_LOGOS[homeId]?.color||'#4a9eff';

  const modal = document.createElement('div');
  modal.id = 'game-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:10000;display:flex;align-items:center;justify-content:center;padding:1rem';
  modal.onclick = e => { if(e.target===modal) modal.remove(); };
  modal.innerHTML = `
    <div style="background:var(--panel);border:2px solid var(--border);width:100%;max-width:700px;max-height:90vh;overflow-y:auto;overflow-x:hidden">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:.75rem 1rem;border-bottom:2px solid var(--border);position:sticky;top:0;background:var(--panel);z-index:1">
        <span style="font-family:'Press Start 2P',monospace;font-size:9px;color:var(--accent3)">${awayTricode} @ ${homeTricode} <span style="color:var(--text3);font-size:7px;margin-left:8px">${statusText||''}</span></span>
        <button onclick="document.getElementById('game-modal').remove()" style="background:none;border:none;color:var(--text2);font-size:22px;cursor:pointer;line-height:1">×</button>
      </div>
      <div id="game-modal-body" style="padding:.75rem 1rem">
        <div style="text-align:center;padding:2rem;color:var(--text3);font-family:'Press Start 2P',monospace;font-size:8px">LOADING...</div>
      </div>
    </div>`;
  document.body.appendChild(modal);

  try{
    const res = await fetch(`https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${espnId}`);
    const sd = await res.json();
    const box = sd.boxscore;
    const comp = sd.header?.competitions?.[0];
    const awayScore = comp?.competitors?.find(c=>c.team?.abbreviation===awayTricode)?.score||'';
    const homeScore = comp?.competitors?.find(c=>c.team?.abbreviation===homeTricode)?.score||'';

    function pSplit(str){ const p=(str||'0-0').split('-'); return [parseInt(p[0])||0,parseInt(p[1])||0]; }
    function calcFP(s){
      if(!s||s[0]==='DNP') return null;
      const pts=parseInt(s[1])||0, [fgm,fga]=pSplit(s[2]), [tpm,tpa]=pSplit(s[3]),
            [ftm,fta]=pSplit(s[4]), reb=parseInt(s[5])||0, ast=parseInt(s[6])||0,
            to=parseInt(s[7])||0, stl=parseInt(s[8])||0, blk=parseInt(s[9])||0;
      return pts+reb+ast+stl+blk-(fga-fgm)-(fta-ftm)-to;
    }

    function teamTable(teamData, color){
      if(!teamData) return '<div style="color:var(--text3);padding:.5rem">No data</div>';
      const grp = teamData.statistics?.[0];
      if(!grp) return '<div style="color:var(--text3);padding:.5rem">No stats</div>';
      const ourTeam = espnTeamToOurs(teamData.team?.abbreviation||'');

      const headerCols = ['PLAYER','MIN','PTS','FG','3P','2P','eFG','FT','FT%','REB','AST','TO','STL','BLK','+/-','FP'];
      const headerHtml = headerCols.map(h=>
        `<th style="padding:3px 4px;font-family:'Press Start 2P',monospace;font-size:6px;color:var(--text3);font-weight:normal;text-align:center;white-space:nowrap">${h}</th>`
      ).join('');

      const rows = (grp.athletes||[]).map(a => {
        const name = a.athlete?.displayName||'';
        const s = a.stats||[];
        const isDNP = !s.length || s[0]==='DNP';

        // Find player in our DB
        const matched = ourTeam ? (
          PLAYERS.find(p=>p.team===ourTeam && p.name.toLowerCase()===name.toLowerCase()) ||
          PLAYERS.find(p=>p.team===ourTeam && p.name.split(' ').pop().toLowerCase()===name.split(' ').pop().toLowerCase())
        ) : null;
        const portrait = matched ? getActivePortrait(matched.name) : null;
        const nameCell = portrait
          ? `<div style="display:flex;align-items:center;gap:5px;cursor:pointer" onclick="document.getElementById('game-modal').remove();openPlayerModal(${matched.id})">
               <div style="width:22px;height:22px;overflow:hidden;flex-shrink:0;border:1px solid ${color}"><img src="${portrait}" style="width:100%;height:100%;object-fit:cover;object-position:center top;image-rendering:pixelated"/></div>
               <span>${name}</span></div>`
          : `<span style="cursor:${matched?'pointer':'default'}" ${matched?`onclick="document.getElementById('game-modal').remove();openPlayerModal(${matched.id})"`:''}">${name}</span>`;

        if(isDNP) return `<tr style="opacity:.4"><td style="padding:3px 6px;font-size:11px;color:var(--text3)">${nameCell}</td><td colspan="15" style="padding:3px 6px;font-size:10px;color:var(--text3)">DNP</td></tr>`;

        const [fgm,fga]=pSplit(s[2]), [tpm,tpa]=pSplit(s[3]), [ftm,fta]=pSplit(s[4]);
        const fgm2=fgm-tpm, fga2=fga-tpa;
        const efg = fga>0?((fgm+.5*tpm)/fga).toFixed(3).replace(/^0/,''):'-';
        const ftpct = fta>0?(ftm/fta).toFixed(3).replace(/^0/,''):'-';
        const pm = s[13]||'0';
        const fp = calcFP(s);
        const pmN = parseInt(pm)||0;
        const toN = parseInt(s[7])||0;

        return `<tr style="border-bottom:1px solid var(--bg2)">
          <td style="padding:3px 6px;font-size:11px;white-space:nowrap">${nameCell}</td>
          <td style="padding:3px 4px;font-size:10px;color:var(--text3);text-align:center">${s[0]}</td>
          <td style="padding:3px 4px;font-size:11px;font-weight:600;color:var(--accent2);text-align:center">${s[1]}</td>
          <td style="padding:3px 4px;font-size:10px;color:var(--text3);text-align:center">${fgm}-${fga}</td>
          <td style="padding:3px 4px;font-size:10px;color:var(--text3);text-align:center">${tpm}-${tpa}</td>
          <td style="padding:3px 4px;font-size:10px;color:var(--text3);text-align:center">${fgm2}-${fga2}</td>
          <td style="padding:3px 4px;font-size:10px;color:var(--text3);text-align:center">${efg}</td>
          <td style="padding:3px 4px;font-size:10px;color:var(--text3);text-align:center">${ftm}-${fta}</td>
          <td style="padding:3px 4px;font-size:10px;color:var(--text3);text-align:center">${ftpct}</td>
          <td style="padding:3px 4px;font-size:11px;font-weight:600;color:var(--accent2);text-align:center">${s[5]}</td>
          <td style="padding:3px 4px;font-size:11px;font-weight:600;color:var(--accent2);text-align:center">${s[6]}</td>
          <td style="padding:3px 4px;font-size:11px;color:${toN>0?'var(--red)':'inherit'};text-align:center">${s[7]}</td>
          <td style="padding:3px 4px;font-size:11px;text-align:center">${s[8]}</td>
          <td style="padding:3px 4px;font-size:11px;text-align:center">${s[9]}</td>
          <td style="padding:3px 4px;font-size:10px;color:${pmN>0?'var(--green)':pmN<0?'var(--red)':'var(--text3)'};text-align:center">${pmN>0?'+':''}${pm}</td>
          <td style="padding:3px 4px;font-family:'Press Start 2P',monospace;font-size:8px;color:${fp>0?'var(--accent2)':fp<0?'var(--red)':'var(--text3)'};text-align:center">${fp!=null?(fp>0?'+':'')+fp:'-'}</td>
        </tr>`;
      }).join('');

      const totRow = (grp.totals||[]).length ? (()=>{
        const t = grp.totals;
        const [fgm,fga]=pSplit(t[2]), [tpm,tpa]=pSplit(t[3]), [ftm,fta]=pSplit(t[4]);
        const fgm2=fgm-tpm, fga2=fga-tpa;
        const efg = fga>0?((fgm+.5*tpm)/fga).toFixed(3).replace(/^0/,''):'-';
        const ftpct = fta>0?(ftm/fta).toFixed(3).replace(/^0/,''):'-';
        const fp = calcFP(t);
        return `<tr style="border-top:2px solid var(--border);background:var(--bg2);font-weight:600">
          <td style="padding:3px 6px;font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3)">TOTALS</td>
          <td style="padding:3px 4px;font-size:10px;color:var(--text3);text-align:center">${t[0]}</td>
          <td style="padding:3px 4px;font-size:11px;text-align:center">${t[1]}</td>
          <td style="padding:3px 4px;font-size:10px;text-align:center">${fgm}-${fga}</td>
          <td style="padding:3px 4px;font-size:10px;text-align:center">${tpm}-${tpa}</td>
          <td style="padding:3px 4px;font-size:10px;text-align:center">${fgm2}-${fga2}</td>
          <td style="padding:3px 4px;font-size:10px;color:var(--text3);text-align:center">${efg}</td>
          <td style="padding:3px 4px;font-size:10px;text-align:center">${ftm}-${fta}</td>
          <td style="padding:3px 4px;font-size:10px;color:var(--text3);text-align:center">${ftpct}</td>
          <td style="padding:3px 4px;font-size:11px;text-align:center">${t[5]}</td>
          <td style="padding:3px 4px;font-size:11px;text-align:center">${t[6]}</td>
          <td style="padding:3px 4px;font-size:11px;text-align:center">${t[7]}</td>
          <td style="padding:3px 4px;font-size:11px;text-align:center">${t[8]}</td>
          <td style="padding:3px 4px;font-size:11px;text-align:center">${t[9]}</td>
          <td style="padding:3px 4px;font-size:11px;text-align:center">-</td>
          <td style="padding:3px 4px;font-family:'Press Start 2P',monospace;font-size:8px;color:${fp>0?'var(--accent2)':fp<0?'var(--red)':'var(--text3)'};text-align:center">${fp!=null?(fp>0?'+':'')+fp:'-'}</td>
        </tr>`;
      })() : '';

      return `<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
        <table style="width:100%;border-collapse:collapse;min-width:580px">
          <thead><tr style="border-bottom:2px solid var(--border)">${headerHtml}</tr></thead>
          <tbody>${rows}${totRow}</tbody>
        </table></div>`;
    }

    document.getElementById('game-modal-body').innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;gap:24px;margin-bottom:1rem;padding:.75rem;background:var(--bg2);border:1px solid var(--border)">
        <div style="text-align:center"><div style="font-family:'Press Start 2P',monospace;font-size:9px;color:${awayColor}">${awayTricode}</div><div style="font-family:'Press Start 2P',monospace;font-size:28px;color:${awayColor};margin-top:4px">${awayScore||'-'}</div></div>
        <div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text3)">${statusText}</div>
        <div style="text-align:center"><div style="font-family:'Press Start 2P',monospace;font-size:9px;color:${homeColor}">${homeTricode}</div><div style="font-family:'Press Start 2P',monospace;font-size:28px;color:${homeColor};margin-top:4px">${homeScore||'-'}</div></div>
      </div>
      <div style="margin-bottom:1rem">
        <div style="font-family:'Press Start 2P',monospace;font-size:8px;color:${awayColor};margin-bottom:.5rem;padding:4px 6px;background:${awayColor}22;border-left:3px solid ${awayColor}">${awayTricode}</div>
        ${teamTable(box?.players?.find(p=>p.team?.abbreviation===awayTricode), awayColor)}
      </div>
      <div>
        <div style="font-family:'Press Start 2P',monospace;font-size:8px;color:${homeColor};margin-bottom:.5rem;padding:4px 6px;background:${homeColor}22;border-left:3px solid ${homeColor}">${homeTricode}</div>
        ${teamTable(box?.players?.find(p=>p.team?.abbreviation===homeTricode), homeColor)}
      </div>`;
  } catch(e){
    document.getElementById('game-modal-body').innerHTML = `<div style="color:var(--red);padding:1rem;font-size:13px">Error: ${e.message}</div>`;
  }
}

async function fetchSeriesRecords(){
  try{
    // Scan from playoffs start through next 60 days to capture all series
    const startDate = new Date('2026-04-18');
    const dates = [];
    for(let i=0;i<60;i++){
      const d = new Date(startDate);
      d.setDate(d.getDate()+i);
      dates.push(d.toISOString().slice(0,10).replace(/-/g,''));
    }

    const newRecords = {};

    // Batch dates in groups of 7 to avoid too many requests
    for(let i=0;i<dates.length;i+=7){
      const batch = dates.slice(i,i+7);
      await Promise.all(batch.map(async dateStr => {
        try{
          const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?seasontype=3&dates=${dateStr}`);
          const d = await res.json();
          for(const ev of (d.events||[])){
            const comp = ev.competitions?.[0];
            const series = comp?.series;
            if(!series) continue;
            const teams = comp?.competitors?.map(c=>espnTeamToOurs(c.team?.abbreviation||'')).filter(Boolean);
            if(teams.length<2) continue;
            const key = teams.slice().sort().join('-');
            const wins = {};
            (series.competitors||[]).forEach((c,i)=>{ if(teams[i]) wins[teams[i]]=(c.wins||0); });
            const summary = series.summary||'';
            // Always overwrite with latest data (higher total wins = more recent)
            const existing = newRecords[key];
            const newTotal = Object.values(wins).reduce((a,b)=>a+b,0);
            const existingTotal = existing ? Object.values(existing.wins).reduce((a,b)=>a+b,0) : -1;
            if(newTotal >= existingTotal){
              newRecords[key] = {summary, wins};
            }
          }
        }catch(e){}
      }));
    }

    if(Object.keys(newRecords).length){
      seriesRecords = newRecords;
      renderBracket(); // Re-render bracket with fresh series scores
    }
    console.log('Series records loaded:', Object.keys(newRecords).length, 'series');
  }catch(e){ console.warn('fetchSeriesRecords error:', e); }
}

function getSeriesRecord(team1, team2){
  const key = [team1,team2].sort().join('-');
  return seriesRecords[key] || null;
}


// ── Backfill missing playoff game stats ──────────────────────────
async function backfillMissingStats(){
  try{
    const PLAYOFFS_START = new Date('2026-04-18');
    const today = new Date();
    const fmt = d => d.toISOString().split('T')[0].replace(/-/g,'');
    
    // Build list of dates from playoffs start to yesterday (today fetched by refreshLiveStats)
    const dates = [];
    const d = new Date(PLAYOFFS_START);
    while(d < today){
      dates.push(fmt(new Date(d)));
      d.setDate(d.getDate()+1);
    }
    
    // Check which gameIds we already have
    const existingGameIds = new Set(Object.values(S.playerStats||{}).map(s=>s.gameId).filter(Boolean));
    
    let totalNew = 0;
    for(const dateStr of dates){
      const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?seasontype=3&dates=${dateStr}`);
      const d2 = await res.json();
      for(const ev of (d2.events||[])){
        if(!ev.status?.type?.completed) continue;
        if(existingGameIds.has(ev.id)) continue; // already have this game
        const stats = await fetchGameBoxScore(ev.id, dateStr);
        for(const [pid, stat] of Object.entries(stats)){
          const key = `${pid}_${dateStr}_${ev.id}`;
          if(!S.playerStats[key]){
            S.playerStats[key] = {...stat, pid:parseInt(pid), date:dateStr, gameId:ev.id};
            totalNew++;
          }
        }
      }
    }
    
    if(totalNew > 0){
      await saveState();
      render();
      console.log('Backfilled', totalNew, 'missing stat entries');
    }
  }catch(e){ console.warn('backfillMissingStats error:', e); }
}
async function boot(){
  initSupabase();
  try{ const s=localStorage.getItem('nba_mgr_2026'); if(s!==null) currentManagerId=s==='viewer'?'viewer':parseInt(s); }catch(e){}
  const hasState=await loadState();
  // Backfill any missing playoff game stats in background
  backfillMissingStats();
  // Fetch ESPN injury report
  fetchInjuryReport();
  // Load player animations
  loadAnimations();
  // Load custom logos — then re-render and update topbar avatar
  loadCustomLogos().then(()=>{
    render();
    // Update topbar avatar now that custom logos are available
    if(currentManagerId !== null && currentManagerId !== 'viewer'){
      const topbarAvatar = document.getElementById('topbar-avatar');
      if(topbarAvatar) topbarAvatar.innerHTML = getAvatar(currentManagerId,'sm');
      if(topbarAvatar) topbarAvatar.style.borderColor = getAvatarColor(currentManagerId);
    }
    if(document.getElementById('manager-picker') && !document.getElementById('manager-picker').classList.contains('hidden')) showManagerPicker();
  });
  setInterval(fetchInjuryReport, 600000); // refresh every 10 mins
  // Hide loading screen immediately — don't wait for portraits (13MB can be slow)
  document.getElementById('loading-overlay').style.display='none';
  // Load portraits in background, re-render when done
  loadPortraits().then(()=>render()).catch(()=>{});
  fetchSeriesRecords();
  setInterval(fetchSeriesRecords, 120000);
  if(hasState){
    currentManagerId===null?showManagerPicker():showMainScreen();
  } else {
    document.getElementById('setup-screen').classList.remove('hidden');
    renderSetup();
  }
}

boot();
