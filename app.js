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
  "DEN": { img: "data:image/jpeg;base64,/9j/4QJoRXhpZgAASUkqAAgAAAADAA4BAgD4AAAAMgAAADsBAgAlAAAAKgEAAGmHBAABAAAATwEAAAAAAABTaWduYXR1cmU6IEE4QTBGNkNKZTdHRWhDZzdtb0x6QXhMeXoxSGg4ZlhCSW92VXJsMzlXY1FUWXVxMVJpaW1RSnZVZTlJMk5sejZwYWZFb2Y2cHkwNUdsVytwbE5aL0prRDNMM04zRTZCSU01aDNubFl2M3lydWJ2ejdnQXptdTdJckczUzhwVmxmMEhsaUpzNHNFWG94V1hhUHlweGZ0cWFTSXdnOGVaeTd0UXBUYUlvaERocDlvTGZyZG4vYmJwWURXaFlBeFBUN25oUk5ydGc5UjFBZmVqN2ZEbmg0T0hQbHdpWGNTTHArSjRUOHJDdGFXd289AGJhNjdmMjM5LWRlMzEtNGU1My05MjE1LTVhNDdiZmY4OWYwOAABAIaSBwD/AAAAYQEAAAAAAABBU0NJSQAAAFNpZ25hdHVyZTogQThBMEY2Q0plN0dFaENnN21vTHpBeEx5ejFIaDhmWEJJb3ZVcmwzOVdjUVRZdXExUmlpbVFKdlVlOUkyTmx6NnBhZkVvZjZweTA1R2xXK3BsTlovSmtEM0wzTjNFNkJJTTVoM25sWXYzeXJ1YnZ6N2dBem11N0lyRzNTOHBWbGYwSGxpSnM0c0VYb3hXWGFQeXB4ZnRxYVNJd2c4ZVp5N3RRcFRhSW9oRGhwOW9MZnJkbi9iYnBZRFdoWUF4UFQ3bmhSTnJ0ZzlSMUFmZWo3ZkRuaDRPSFBsd2lYY1NMcCtKNFQ4ckN0YVd3bz3/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAPAA8ADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0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", color: "#fdb927" },
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
