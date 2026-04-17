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

// ── Team Logos (Mega Man boss style) ─────────────────────────────
// Add team logos here — each player on that team shows the logo
// Border color matches team color
const TEAM_LOGOS = {
  "DEN": { img: "data:image/jpeg;base64,/9j/4QKQRXhpZgAASUkqAAgAAAADAA4BAgAMAQAAMgAAADsBAgAlAAAAPgEAAGmHBAABAAAAYwEAAAAAAABTaWduYXR1cmU6IHIvdXVkUklxZGxtSU5QSkpjenRlWXVuN0k1QXgxMW9VTFhLaHd3TDlrM1l4SlJhUTdYaVA2QUdpTlIzSnlGejdlNWZZWXZwUmc4eVd2ZXlxcVUxczhVYW8wdHk1WW4wOW4ySCtFM1JNVnQzRmRLckhSYTM3SzFNMkJOaXVMYTVWOFJyQm5yamNxaG5pT0RvRkpaOWpNRERpNlgzc2NqYjBVTHZJc0hESHZpaFlDd3Zsd2ZxWklBU1N5TUNjREV5RktSZVlkNy9td1NWVEJiMzZUbmxpUkZNSEVjcWVaeUVXK3I5WlNjRXdVeWlGYnRRSXoyK3RVaEU4N1FGbEFHZE0ANjUxYmZmYmQtYjhmZC00ZGNlLTk0ODYtZjVlOGZhNDYyZGYwAAEAhpIHABMBAAB1AQAAAAAAAEFTQ0lJAAAAU2lnbmF0dXJlOiByL3V1ZFJJcWRsbUlOUEpKY3p0ZVl1bjdJNUF4MTFvVUxYS2h3d0w5azNZeEpSYVE3WGlQNkFHaU5SM0p5Rno3ZTVmWVl2cFJnOHlXdmV5cXFVMXM4VWFvMHR5NVluMDluMkgrRTNSTVZ0M0ZkS3JIUmEzN0sxTTJCTml1TGE1VjhSckJucmpjcWhuaU9Eb0ZKWjlqTUREaTZYM3NjamIwVUx2SXNIREh2aWhZQ3d2bHdmcVpJQVNTeU1DY0RFeUZLUmVZZDcvbXdTVlRCYjM2VG5saVJGTUhFY3FlWnlFVytyOVpTY0V3VXlpRmJ0UUl6Mit0VWhFODdRRmxBR2RN/+AAEEpGSUYAAQEAAAEAAQAA/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/9sAQwECAgICAgIFAwMFCgcGBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK/8AAEQgDwAPAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFB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", color: "#fdb927" },
  // Add more teams as you generate them:
  // "OKC": { img: "data:image/png;base64,...", color: "#00b4ff" },
  // "SAS": { img: "data:image/png;base64,...", color: "#c0c0c0" },
  // etc.
};

// Team colors fallback (used for border when no logo yet)
const TEAM_COLORS = {
  OKC:"#00b4ff", SAS:"#c0c0c0", DEN:"#fdb927", LAL:"#fdb927",
  HOU:"#ce1141", MIN:"#236192", POR:"#e03a3e", GSW:"#ffc72c",
  DET:"#006bb6", BOS:"#007a33", NYK:"#f58426", CLE:"#860038",
  TOR:"#ce1141", ATL:"#e03a3e", PHI:"#006bb6", ORL:"#0077c0",
  PHX:"#e56020", CHA:"#00788c", LAC:"#c8102e",
};

function getTeamLogo(team){
  return TEAM_LOGOS[team] || null;
}

function playerLogoHtml(team, size=36){
  const logo = getTeamLogo(team);
  const color = (logo?.color) || TEAM_COLORS[team] || "#4a9eff";
  if(logo){
    return `<div style="width:${size}px;height:${size}px;flex-shrink:0;overflow:hidden;border:2px solid ${color};background:#020c18;display:flex;align-items:center;justify-content:center">
      <img src="${logo.img}" style="width:${size-4}px;height:${size-4}px;object-fit:contain;image-rendering:pixelated"/>
    </div>`;
  }
  // No logo yet — just show colored border box with team abbr
  return `<div style="width:${size}px;height:${size}px;flex-shrink:0;border:2px solid ${color};background:#020c18;display:flex;align-items:center;justify-content:center;font-family:'Press Start 2P',monospace;font-size:${Math.floor(size/5)}px;color:${color}">${team}</div>`;
}

// Keep old function name for compatibility
function playerPortraitHtml(name, team, size=36){
  return playerLogoHtml(team, size);
}

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
function availablePlayers(){const tk=draftedIds();return PLAYERS.filter(p=>!tk.includes(p.id)&&!getTeam(p.team).eliminated);}
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
      ${playerLogoHtml(p.team, 36)}
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
          ${playerLogoHtml(p.team, 28)}
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
        ${playerLogoHtml(p.team, 36)}
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
          ${playerLogoHtml(p.team, 36)}
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
