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

// 2026 NBA Playoff Teams
// Confirmed: POR(W7), PHI(E7) | TBD tonight Apr 17: PHX vs GSW (W8), ORL vs CHA (E8)
// Eliminated: LAC, MIA
const TEAMS = [
  {id:"OKC",name:"Thunder",seed:"W1"},{id:"SAS",name:"Spurs",seed:"W2"},
  {id:"DEN",name:"Nuggets",seed:"W3"},{id:"LAL",name:"Lakers",seed:"W4"},
  {id:"HOU",name:"Rockets",seed:"W5"},{id:"MIN",name:"Timberwolves",seed:"W6"},
  {id:"POR",name:"Trail Blazers",seed:"W7"},
  {id:"GSW",name:"Warriors",seed:"W8*"},{id:"PHX",name:"Suns",seed:"W8*"},
  {id:"DET",name:"Pistons",seed:"E1"},{id:"BOS",name:"Celtics",seed:"E2"},
  {id:"NYK",name:"Knicks",seed:"E3"},{id:"CLE",name:"Cavaliers",seed:"E4"},
  {id:"TOR",name:"Raptors",seed:"E5"},{id:"ATL",name:"Hawks",seed:"E6"},
  {id:"PHI",name:"76ers",seed:"E7"},
  {id:"ORL",name:"Magic",seed:"E8*"},{id:"CHA",name:"Hornets",seed:"E8*"},
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
const PLAYER_PORTRAITS = {
  "Christian Braun": "data:image/png;base64,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",
};

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
  let b=0;
  for(let r=1;r<=(t.survivedRounds||0);r++){
    if(r > acquiredAfterRound) b+=ROUND_BONUS[r];
  }
  return b;
}
function isInactive(mid,pid){const t=getTeam(getPlayer(pid).team);return t.eliminated||(S.injured[mid]||[]).includes(pid);}
function managerStatScore(mid){
  return managerStatScoreAuto(mid);
}
function managerBonusScore(mid){return S.rosters[mid].reduce((s,pid)=>s+bonusForPlayer(pid,mid),0);}
function managerTotal(mid){return +(managerStatScore(mid)+managerBonusScore(mid)).toFixed(1);}
function waiverSlotsForManager(mid){return S.rosters[mid].filter(pid=>getTeam(getPlayer(pid).team).eliminated).length+(S.injured[mid]||[]).length;}
function waiverSlotsOpen(mid){return Math.max(0,waiverSlotsForManager(mid)-(S.waiverAdds[mid]||0));}
function draftedIds(){return Object.values(S.rosters).flat();}
function availablePlayers(){
  const tk=draftedIds();
  const activeTeamIds = new Set(S.teams.map(t=>t.id));
  return PLAYERS.filter(p=>!tk.includes(p.id) && activeTeamIds.has(p.team) && !getTeam(p.team).eliminated);
}
function waiverPlayers(){const tk=draftedIds();return PLAYERS.filter(p=>!tk.includes(p.id));}

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
  // Always sync team list from code so adding/removing teams takes effect immediately
  let teamsChanged = false;
  if(S && S.teams){
    const savedIds = new Set(S.teams.map(t=>t.id));
    const codeIds = new Set(TEAMS.map(t=>t.id));
    teamsChanged = [...codeIds].some(id=>!savedIds.has(id)) || [...savedIds].some(id=>!codeIds.has(id));
    const savedMap = {};
    S.teams.forEach(t => savedMap[t.id] = t);
    S.teams = TEAMS.map(t => ({
      ...t,
      eliminated: savedMap[t.id]?.eliminated || false,
      survivedRounds: savedMap[t.id]?.survivedRounds || 0,
    }));
  }
  return teamsChanged;
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

  // Today
  try{
    const res = await fetch('https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json');
    const data = await res.json();
    todayGames = (data?.scoreboard?.games||[]).map(g=>({...g,_day:'today'}));
  }catch(e){}

  // Yesterday — ESPN public API (no CORS issues)
  try{
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    const mm = String(yesterday.getMonth()+1).padStart(2,'0');
    const dd = String(yesterday.getDate()).padStart(2,'0');
    const yyyy = yesterday.getFullYear();
    const yUrl = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${yyyy}${mm}${dd}`;
    const yRes = await fetch(yUrl);
    const yData = await yRes.json();
    const events = yData?.events || [];
    yGames = events
      .filter(e=>e.status?.type?.completed)
      .map(e=>{
        const comps = e.competitions?.[0];
        const away = comps?.competitors?.find(c=>c.homeAway==='away');
        const home = comps?.competitors?.find(c=>c.homeAway==='home');
        return {
          _day:'yesterday', gameStatus:3,
          awayTeam:{teamTricode:away?.team?.abbreviation||'?', score:parseInt(away?.score)||0},
          homeTeam:{teamTricode:home?.team?.abbreviation||'?', score:parseInt(home?.score)||0}
        };
      });
  }catch(e){}

  const allGames = [...todayGames, ...yGames];

  if(!allGames.length){
    document.getElementById('scores-content').innerHTML = `<div class="score-item"><span style="color:var(--text3);font-size:14px">NO GAMES TODAY — PLAYOFFS BEGIN APR 18 🏀</span></div>`;
    return;
  }

  const renderGame = g => {
    const home=g.homeTeam, away=g.awayTeam;
    const status=g.gameStatusText||'';
    const isLive=g.gameStatus===2, isFinal=g.gameStatus===3;
    const isYday=g._day==='yesterday';
    const statusHtml = isLive
      ? `<span class="score-live">LIVE</span> <span style="font-size:13px;color:var(--text2)">${status}</span>`
      : isFinal
        ? `<span class="score-final">${isYday?'LAST NIGHT':'FINAL'}</span>`
        : `<span style="font-size:13px;color:var(--text3)">${status}</span>`;
    return `<div class="score-item">
      ${statusHtml}
      <span class="score-team">${away.teamTricode}</span>
      <span class="score-pts" style="${isFinal&&away.score>home.score?'color:var(--accent2)':''}">${away.score||0}</span>
      <span class="score-vs">—</span>
      <span class="score-pts" style="${isFinal&&home.score>away.score?'color:var(--accent2)':''}">${home.score||0}</span>
      <span class="score-team">${home.teamTricode}</span>
    </div>`;
  };

  const html = [...allGames,...allGames].map(renderGame).join('');
  document.getElementById('scores-content').className = 'scores-bar-inner';
  document.getElementById('scores-content').innerHTML = html;
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
    waiverPriority: waiverPriorityR,
    waiverClaims: {},
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
  startChatPolling();
  startLiveStatsPolling();
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
      <div style="display:flex;align-items:flex-start;gap:16px;margin-bottom:.875rem">
        <!-- Big pizza guy -->
        <div style="flex-shrink:0;filter:drop-shadow(3px 3px 0 #000)">
          <svg width="90" height="104" viewBox="0 0 64 72" xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">
            <rect x="4" y="52" width="56" height="12" rx="6" fill="#d4884a"/>
            <rect x="4" y="52" width="56" height="5" fill="#c47030"/>
            <circle cx="12" cy="56" r="2" fill="#e8a060" opacity=".6"/>
            <circle cx="22" cy="55" r="2.5" fill="#e8a060" opacity=".5"/>
            <circle cx="32" cy="57" r="2" fill="#e8a060" opacity=".6"/>
            <circle cx="42" cy="55" r="2.5" fill="#e8a060" opacity=".5"/>
            <circle cx="52" cy="56" r="2" fill="#e8a060" opacity=".6"/>
            <polygon points="32,4 58,52 6,52" fill="#f5a623"/>
            <polygon points="32,10 54,50 10,50" fill="#ffdd55"/>
            <polygon points="32,8 56,51 8,51" fill="none" stroke="#e05020" stroke-width="1.5"/>
            <circle cx="32" cy="34" r="4" fill="#cc2020" stroke="#aa1010" stroke-width="1"/>
            <circle cx="32" cy="34" r="2" fill="#dd3030" opacity=".5"/>
            <circle cx="22" cy="43" r="4" fill="#cc2020" stroke="#aa1010" stroke-width="1"/>
            <circle cx="22" cy="43" r="2" fill="#dd3030" opacity=".5"/>
            <circle cx="42" cy="43" r="4" fill="#cc2020" stroke="#aa1010" stroke-width="1"/>
            <circle cx="42" cy="43" r="2" fill="#dd3030" opacity=".5"/>
            <circle cx="27" cy="22" r="3" fill="#cc2020" stroke="#aa1010" stroke-width="1"/>
            <circle cx="39" cy="27" r="3" fill="#cc2020" stroke="#aa1010" stroke-width="1"/>
            <ellipse cx="18" cy="50" rx="4" ry="2" fill="#ffee77" opacity=".7"/>
            <ellipse cx="46" cy="50" rx="4" ry="2" fill="#ffee77" opacity=".7"/>
            <rect x="15" y="14" width="13" height="8" rx="2" fill="#111" stroke="#444" stroke-width="1.5"/>
            <rect x="30" y="14" width="13" height="8" rx="2" fill="#111" stroke="#444" stroke-width="1.5"/>
            <line x1="28" y1="18" x2="30" y2="18" stroke="#444" stroke-width="1.5"/>
            <rect x="16" y="15" width="4" height="2" fill="#555" rx="1"/>
            <rect x="31" y="15" width="4" height="2" fill="#555" rx="1"/>
            <path d="M21 26 Q32 34 43 26" stroke="#cc6600" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <circle cx="54" cy="62" r="8" fill="#e07020" stroke="#222" stroke-width="1.5"/>
            <line x1="46" y1="62" x2="62" y2="62" stroke="#222" stroke-width="1"/>
            <line x1="54" y1="54" x2="54" y2="70" stroke="#222" stroke-width="1"/>
            <path d="M47 56 Q54 60 61 56" stroke="#222" stroke-width="1" fill="none"/>
            <path d="M47 68 Q54 64 61 68" stroke="#222" stroke-width="1" fill="none"/>
            <line x1="46" y1="48" x2="50" y2="57" stroke="#e8952a" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </div>
        <!-- Speech bubble -->
        <div style="position:relative;flex:1;background:var(--panel2);border:2px solid var(--accent3);padding:12px 14px;">
          <!-- Bubble tail pointing left toward pizza guy -->
          <div style="position:absolute;left:-10px;top:24px;width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:10px solid var(--accent3)"></div>
          <div style="position:absolute;left:-7px;top:26px;width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:8px solid var(--panel2)"></div>
          <div style="font-size:16px;color:var(--text2);line-height:2">
            🏀 <span style="color:var(--accent3)">DRAFT 8 PLAYERS</span> — snake order, everyone picks one at a time.<br>
            📊 <span style="color:var(--accent3)">EARN POINTS</span> — stats daily (PTS+REB+AST+STL+BLK minus misses &amp; TOs) + bonuses when your players survive each round (+5 / +10 / +20 / +50).<br>
            🔄 <span style="color:var(--accent3)">WAIVERS</span> — a slot opens only when your player's team is eliminated or they're injured — no voluntary drops. Submit claims and they process nightly by priority order.
          </div>
        </div>
      </div>
      <div class="card card-accent">
        <div class="section-title">► WHO ARE YOU?</div>
        <p style="font-size:15px;color:var(--text2);margin-bottom:1rem">SELECT YOUR NAME TO JOIN THE DRAFT. YOU CAN ONLY PICK ON YOUR TURN.</p>
        <div id="mgr-pick-list">
          ${S.managers.map(m=>{
          const ac=getAvatarColor(m.id);
          return `<button class="mgr-pick-btn" onclick="selectManager(${m.id})">
            <div style="width:36px;height:36px;border:2px solid ${ac};flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">${getAvatar(m.id,'sm')}</div>
            <span style="color:${ac}">${m.name}</span>
          </button>`;
        }).join('')}
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
  startChatPolling();
  startLiveStatsPolling();
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

async function submitClaim(pid,mid){
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
  if(!isCommissioner){alert('COMMISSIONER ACCESS REQUIRED');return;}
  if(!S.waiverClaims||Object.keys(S.waiverClaims).length===0){
    alert('NO PENDING CLAIMS TO PROCESS');return;
  }
  if(!confirm('PROCESS ALL WAIVER CLAIMS NOW?\n\nHigher priority managers win ties. This cannot be undone.')) return;

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

      // Claim succeeds
      S.rosters[mid].push(claim.pid);
      S.waiverAdds[mid]=(S.waiverAdds[mid]||0)+1;
      claimedPids.add(claim.pid);
      managersWhoWon.add(mid);
      const idx = remainingClaims.findIndex(c=>c.managerId===mid&&c.pid===claim.pid);
      if(idx>-1) remainingClaims.splice(idx,1);
      results.push({mid, name:claim.managerName, pid:claim.pid, won:true});
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
  S.waiverClaims = {};

  await saveState(); render();

  // Show results
  const msg = results.map(r=>{
    const p = getPlayer(r.pid);
    return r.won
      ? `✓ ${r.name} gets ${p?p.name:'?'}`
      : `✗ ${r.name} loses claim on ${p?p.name:'?'}${r.reason?' ('+r.reason+')':''}`;
  }).join('\n');
  alert('WAIVER RESULTS:\n\n'+msg);
}

async function addFromWaiver(pid,mid){
  if(waiverSlotsOpen(mid)<=0){alert(`${S.managers[mid].name} HAS NO OPEN WAIVER SLOTS`);return;}
  S.rosters[mid].push(pid); S.waiverAdds[mid]=(S.waiverAdds[mid]||0)+1;
  if(!S.waiverAcquisitions) S.waiverAcquisitions={};
  S.waiverAcquisitions[mid+'_'+pid] = S.round||1;
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
  renderStandings();renderNameEdit();renderDraft();renderWaiver();renderRosters();renderScoring();renderBracket();renderDraftBanner();
  document.getElementById('m-avail').textContent=waiverPlayers().length;
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

    const aColor = getAvatarColor(m.id);
    return `<div class="player-row" style="flex-wrap:wrap">
      <span class="rank-num ${rankClass}">${medal||(showScores?i+1:'')}</span>
      <div style="width:40px;height:40px;flex-shrink:0;border:2px solid ${aColor};cursor:pointer;display:flex;align-items:center;justify-content:center;overflow:hidden" onclick="openAvatarModal(${m.id})" title="Change icon">${getAvatar(m.id,'sm')}</div>
      <div style="flex:1;min-width:100px">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span style="font-size:19px;font-weight:600;color:var(--text)">${m.name}</span>
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
  const elimNames=S.teams.filter(t=>t.eliminated).map(t=>t.name).join(', ');
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
  if(!elimNames){
    headerHtml=`<div class="notice">NO TEAMS ELIMINATED YET. WAIVERS OPEN ONCE A TEAM IS OUT OR A PLAYER IS INJURED.</div>`;
  } else {
  
    headerHtml=`<div class="info-box" style="margin-bottom:.75rem">
      ELIMINATED: ${elimNames}<br>
      OPEN SLOTS: ${slots.length?slots.map(x=>`<strong>${x.m.name}</strong> (${x.open})`).join(' · '):'NONE — all slots filled'}<br>
      PENDING CLAIMS: ${pendingCount>0?`<strong style="color:var(--accent2)">${pendingCount} claim${pendingCount>1?'s':''} queued</strong>`:'none yet'}
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
    // Claimed players first within each group
    const ac=(S.waiverClaims||[]).some(c=>c.pid===a.id)?0:1;
    const bc=(S.waiverClaims||[]).some(c=>c.pid===b.id)?0:1;
    if(ac!==bc) return ac-bc;
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
            ? `<button class="btn btn-sm btn-primary" onclick="submitClaim(${p.id},${myId})">CLAIM</button>`
            : mySlots<=0
              ? `<span style="font-size:11px;color:var(--text3)">NO SLOT</span>`
              : `<span style="font-size:11px;color:var(--text3)">SLOTS FULL</span>`;

      const wPortrait = playerPortraitHtml(p.name, p.team, 36);
      return `<div class="player-row" style="${elim?'opacity:.55':''}${claim&&!isMyClaim?';background:rgba(245,166,35,.05)':''}">
        ${playerLogoHtml(p.team, 36, p.name)}
        <div style="flex:1">
          <div style="font-size:14px;color:var(--text)">${p.name} <span class="pos-badge">${p.pos}</span>${elim?' <span class="badge badge-elim">ELIM</span>':''}</div>
          <div style="font-size:12px;color:var(--text2)">${t.name}${elim?' (eliminated)':''} · <span style="color:var(--green)">+${bd.pos}</span> <span style="color:var(--red)">−${bd.neg}</span> = <strong>${bd.net>0?'+':''}${bd.net}</strong></div>
          ${claimSection}
        </div>
        ${actionBtn}
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
  document.getElementById('rosters-comm-notice').innerHTML=isCommissioner
    ?`<div class="commissioner-bar">🔓 <span style="font-family:'Press Start 2P',monospace;font-size:9px">COMMISSIONER MODE — MANAGE TEAMS &amp; INJURIES BELOW</span></div>`
    :`<div class="notice">VIEW-ONLY MODE — COMMISSIONER CONTROLS LOCKED</div>`;

  document.getElementById('rosters-list').innerHTML=S.managers.map(m=>{
    const players=S.rosters[m.id].map(pid=>getPlayer(pid)),slotsOpen=waiverSlotsOpen(m.id);
    return `<div class="card">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:.875rem;flex-wrap:wrap">
        <div style="width:44px;height:44px;border:2px solid ${getAvatarColor(m.id)};flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">${getAvatar(m.id,'sm')}</div>
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
        const t=getTeam(p.team),bd=espnBD(p),bonus=bonusForPlayer(p.id,m.id),inj=(S.injured[m.id]||[]).includes(p.id),sr=t.survivedRounds||0;
        return `<div class="player-row">
          ${playerLogoHtml(p.team, 36, p.name)}
          <div style="flex:1">
            <div style="font-size:14px;color:var(--text)">${p.name} <span class="pos-badge">${p.pos}</span>
              ${t.eliminated?'<span class="badge badge-elim">ELIM</span>':inj?'<span class="badge badge-inj">INJ</span>':'<span class="badge badge-active">ACTIVE</span>'}
              ${getAcquiredRound(m.id,p.id)>0?`<span class="badge" style="border-color:var(--accent2);color:var(--accent2);font-size:10px">WAIVER R${getAcquiredRound(m.id,p.id)}+</span>`:''}
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
        <div style="width:28px;height:28px;border:2px solid ${getAvatarColor(m.id)};flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">${getAvatar(m.id)}</div>
        <span style="font-size:17px;color:var(--text)">${m.name}</span>
        <span style="font-family:'Press Start 2P',monospace;font-size:12px;color:var(--accent2);margin-left:auto">${managerTotal(m.id)} PTS</span>
      </div>
      ${players.length?players.map(p=>{
        const t=getTeam(p.team),bd=espnBD(p),bonus=bonusForPlayer(p.id,m.id),inactive=isInactive(m.id,p.id);
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


// ── Bracket ───────────────────────────────────────────────────────
function renderBracket(){
  const el = document.getElementById('bracket-section');
  if(!el) return;

  // Build team status lookup from S.teams
  const teamMap = {};
  (S.teams||[]).forEach(t=>teamMap[t.id]=t);

  // 2026 bracket structure — update seeds as play-in resolves
  // West: OKC(1) SAS(2) DEN(3) LAL(4) HOU(5) MIN(6) POR(7) W8-TBD(8)
  // East: DET(1) BOS(2) NYK(3) CLE(4) TOR(5) ATL(6) PHI(7) ORL(8)
  const W = [
    {seed:1,id:'OKC',name:'Thunder'},
    {seed:2,id:'SAS',name:'Spurs'},
    {seed:3,id:'DEN',name:'Nuggets'},
    {seed:4,id:'LAL',name:'Lakers'},
    {seed:5,id:'HOU',name:'Rockets'},
    {seed:6,id:'MIN',name:'T-Wolves'},
    {seed:7,id:'POR',name:'Blazers'},
    {seed:8,id:'LAC',name:'W8'},
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

  function bTeam(team, rounds){
    if(!team) return `<div class="b-team tbd"><span class="b-seed">?</span> TBD</div>`;
    const t = teamMap[team.id];
    const elim = t && t.eliminated;
    const survived = t ? (t.survivedRounds||0) : 0;
    const isWinner = survived >= rounds && !elim;
    return `<div class="b-team ${elim?'eliminated':isWinner?'winner':''}">
      <span class="b-seed">${team.seed}</span>${team.name}
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
    return `<div class="b-matchup">${bTeam(t1,rounds)}${bTeam(t2,rounds)}</div>`;
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
      <span style="font-size:8px;color:var(--text3)">UPDATE VIA COMMISSIONER CONTROLS</span>
    </div>
    <div style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--accent);margin-bottom:6px;letter-spacing:.06em">— WEST —</div>
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
    <div style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--accent);margin-bottom:6px;letter-spacing:.06em">— EAST —</div>
  </div>`;
}


// ── Chat System ────────────────────────────────────────────────
const CHAT_REACTIONS = ['🔥','💀','👀','🏀','😂'];
let chatOpen = false;
let chatPollingInterval = null;
let lastChatCount = 0;

function toggleChat(){
  chatOpen = !chatOpen;
  document.getElementById('chat-panel').style.display = chatOpen ? 'flex' : 'none';
  document.getElementById('chat-bubble').style.display = chatOpen ? 'none' : 'flex';
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
  if(!chatOpen) return;
  const msgs = await loadChatState();
  if(msgs.length !== lastChatCount){
    lastChatCount = msgs.length;
    renderChatMessages(msgs);
  }
  // Update unread badge
  if(!chatOpen && msgs.length > lastChatCount){
    const badge = document.getElementById('chat-unread');
    if(badge) badge.style.display = 'flex';
  }
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
    // Always use current avatar for known managers, fall back to stored avatarIdx
    const mid = e.managerId;
    const currentIdx = (S && S.avatars && mid !== null && mid !== 'viewer' && S.avatars[mid] !== undefined)
      ? S.avatars[mid] : (e.avatarIdx || 0);
    const t = AVATAR_THEMES[currentIdx] || AVATAR_THEMES[0];
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
        <div style="width:24px;height:24px;border:2px solid ${t.c1};flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden">
          ${makeBallSVG(t,22)}
        </div>
        <span style="font-size:14px;color:${t.c1};font-family:'Press Start 2P',monospace;font-size:7px">${e.name}</span>
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
  'MIN':'MIN','POR':'POR','LAC':'LAC','GS':'GSW','GSW':'GSW',
  'DET':'DET','BOS':'BOS','NY':'NYK','NYK':'NYK','CLE':'CLE',
  'TOR':'TOR','ATL':'ATL','PHI':'PHI','ORL':'ORL','CHA':'CHA',
  'MIA':'MIA','PHX':'PHX',
};

function espnTeamToOurs(abbr){ return ESPN_TEAM_MAP[abbr]||abbr; }

// Live stats are stored in memory (not Supabase) — refreshed each poll
// Completed game stats ARE saved to Supabase via playerStats
let livePlayerStats = {}; // pid -> {fp, pts, reb, ast, stl, blk, fgm, fga, ftm, fta, to, live, gameId}
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

        const [fgm,fga]=parseSplit(s[1]);
        const [ftm,fta]=parseSplit(s[3]);
        const reb=parseInt(s[6])||0, ast=parseInt(s[7])||0;
        const stl=parseInt(s[8])||0, blk=parseInt(s[9])||0;
        const to=parseInt(s[10])||0, pts=parseInt(s[13])||0;
        const fp = pts+reb+ast+stl+blk-(fga-fgm)-(fta-ftm)-to;

        const matched = PLAYERS.find(p=>
          p.team===ourTeam&&(
            p.name.toLowerCase()===name.toLowerCase()||
            name.toLowerCase().includes(p.name.split(' ').pop().toLowerCase())
          )
        );
        if(matched) stats[matched.id]={fp,pts,reb,ast,stl,blk,fgm,fga,ftm,fta,to,name:matched.name};
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
          if(!newLive[pid]) newLive[pid]={fp:0,pts:0,reb:0,ast:0,stl:0,blk:0,to:0,live:isLive,gameId:event.id};
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
            S.playerStats[key] = {...stat, pid:parseInt(pid), date:dateStr, gameId:event.id};
            changed = true;
          }
        }
      }
      if(changed) await saveState();
    }

    render();
    updateLiveStatsIndicator();
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
function playerStatScore(pid){
  // Saved completed game stats
  const saved = S.playerStats
    ? Object.values(S.playerStats).filter(s=>s.pid===pid).reduce((sum,s)=>sum+(s.fp||0),0)
    : 0;
  // Live stats (already include today's completed games from live fetch, avoid double-counting)
  // Only add live if no saved entry exists for today
  const today = new Date().toISOString().split('T')[0].replace(/-/g,'');
  const hasSavedToday = S.playerStats && Object.keys(S.playerStats).some(k=>k.includes('_'+today+'_'));
  const live = (!hasSavedToday && livePlayerStats[pid]) ? (livePlayerStats[pid].fp||0) : 0;
  return +(saved + live).toFixed(1);
}

function isPlayerLive(pid){
  return livePlayerStats[pid]?.live === true;
}

function managerStatScoreAuto(mid){
  return +(S.rosters[mid]||[]).reduce((s,pid)=>s+playerStatScore(pid),0).toFixed(1);
}

// ── Boot ──────────────────────────────────────────────────────────
async function boot(){
  initSupabase();
  try{ const s=sessionStorage.getItem('nba_mgr_2026'); if(s!==null) currentManagerId=s==='viewer'?'viewer':parseInt(s); }catch(e){}
  const hasState=await loadState();
  document.getElementById('loading-overlay').style.display='none';
  if(hasState){
    currentManagerId===null?showManagerPicker():showMainScreen();
  } else {
    document.getElementById('setup-screen').classList.remove('hidden');
    renderSetup();
  }
}

boot();
