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
