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
  "DEN": { img: "data:image/png;base64,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", color: "#fdb927" },
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
