const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

const COLORS = ["#4a9eff","#00d4aa","#e94560","#7b2fff","#f5a623","#ff6b9d","#5fd46a","#ff9f43"];
const ROUND_BONUS = [0, 5, 10, 20, 50];
const ROUND_BG = ["","rgba(24,95,165,.2)","rgba(59,109,17,.2)","rgba(133,79,11,.2)","rgba(153,53,86,.2)"];
const ROUND_FG = ["","#4a9eff","#5fd46a","#f5a623","#ff6b9d"];
const ROUND_BORDER = ["","#185FA5","#3B6D11","#854F0B","#993556"];
const ROSTER_SIZE = 8;
const ALL_TABS = ['standings','manage-names','draft','waiver','rosters','scoring'];
const LEAGUE_ID = 'nba-2026';

// 2026 NBA Playoff Teams (confirmed + W8 TBD Apr 17: LAC vs GSW)
const TEAMS = [
  {id:"OKC",name:"Thunder",seed:"W1"},{id:"SAS",name:"Spurs",seed:"W2"},
  {id:"DEN",name:"Nuggets",seed:"W3"},{id:"LAL",name:"Lakers",seed:"W4"},
  {id:"HOU",name:"Rockets",seed:"W5"},{id:"MIN",name:"Timberwolves",seed:"W6"},
  {id:"POR",name:"Trail Blazers",seed:"W7"},
  {id:"LAC",name:"Clippers",seed:"W8*"},{id:"GSW",name:"Warriors",seed:"W8*"},
  {id:"DET",name:"Pistons",seed:"E1"},{id:"BOS",name:"Celtics",seed:"E2"},
  {id:"NYK",name:"Knicks",seed:"E3"},{id:"CLE",name:"Cavaliers",seed:"E4"},
  {id:"TOR",name:"Raptors",seed:"E5"},{id:"ATL",name:"Hawks",seed:"E6"},
  {id:"PHI",name:"76ers",seed:"E7"},{id:"ORL",name:"Magic",seed:"E8"},
  {id:"CHA",name:"Hornets",seed:"E9"},
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
}

async function loadState(){
  if(db){
    const {data} = await db.from('leagues').select('state').eq('id',LEAGUE_ID).single();
    if(data?.state){ S=JSON.parse(data.state); migrateState(); return true; }
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
          ${S.managers.map(m=>{
          const ac=getAvatarColor(m.id);
          return `<button class="mgr-pick-btn" onclick="selectManager(${m.id})">
            <div style="width:36px;height:36px;border:2px solid ${ac};flex-shrink:0">${getAvatar(m.id,'sm')}</div>
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
  renderStandings();renderNameEdit();renderDraft();renderWaiver();renderRosters();renderScoring();renderBracket();
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

    const aColor = getAvatarColor(m.id);
    return `<div class="player-row" style="flex-wrap:wrap">
      <span class="rank-num ${rankClass}">${medal||(showScores?i+1:'')}</span>
      <div style="width:40px;height:40px;flex-shrink:0;border:2px solid ${aColor};cursor:pointer" onclick="openAvatarModal(${m.id})" title="Change icon">${getAvatar(m.id,'sm')}</div>
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
      <div style="width:44px;height:44px;flex-shrink:0;border:2px solid ${aColor};cursor:pointer" onclick="openAvatarModal(${m.id})" title="Change icon">
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
          <div style="width:20px;height:20px;border:1px solid ${getAvatarColor(m.id)};flex-shrink:0">${getAvatar(m.id,'sm')}</div>
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
  const waiverTeamsInPool = [...new Set(waiverPlayers().map(p=>p.team))];
  const filterChipsHtml = `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:.75rem">
    <span class="team-chip ${!waiverTeamFilter?'sel':''}" onclick="waiverTeamFilter=null;render()">ALL</span>
    ${S.teams.filter(t=>waiverTeamsInPool.includes(t.id)).map(t=>`
      <span class="team-chip ${t.eliminated?'elim':''} ${waiverTeamFilter===t.id?'sel':''}"
        onclick="waiverTeamFilter='${t.id}';render()">${t.id}</span>`).join('')}
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
              <div style="width:16px;height:16px;border:1px solid ${getAvatarColor(c.managerId)}" title="${c.managerName}">${getAvatar(c.managerId,'sm')}</div>
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

      return `<div class="player-row" style="${elim?'opacity:.55':''}${claim&&!isMyClaim?';background:rgba(245,166,35,.05)':''}">
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
        <div style="width:44px;height:44px;border:2px solid ${getAvatarColor(m.id)};flex-shrink:0">${getAvatar(m.id,'sm')}</div>
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
// This is a placeholder - actual waiver logic will be injected via patch
