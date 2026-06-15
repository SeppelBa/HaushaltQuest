let currentUser=null;
let currentRoom=null;

function joinGame(){
  const name=document.getElementById("name").value;
  const room=document.getElementById("room").value;
  const pass=document.getElementById("pass").value;

  currentUser=name;
  currentRoom=room;

  document.getElementById("login").style.display="none";
  document.getElementById("game").style.display="block";

  loadData();
}

function loadData(){
  document.getElementById("stats").innerText="Logged in as "+currentUser;

  loadQuests();
  loadShop();
}

function loadQuests(){
  const el=document.getElementById("quests");
  el.innerHTML="Demo Quest geladen";
}

function loadShop(){
  const el=document.getElementById("shop");
  el.innerHTML="Shop geladen";
}

// ADMIN
function addQuest(){
  alert("Firebase integration needed - placeholder");
}
