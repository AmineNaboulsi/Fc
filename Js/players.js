let AllPlayersLis = []
function Display_All_Players(isFetched){
    
    !isFetched ? fetch('./Data/players.json')
    .then(res=>res.json())
    .then(data=> {
        // console.log(Array.from(formations[formationPicked][pn-1].post).slice(-2).join())
        AddPlaperPanel(data);
        AllPlayersLis = data;
    })
    :AddPlaperPanel(AllPlayersLis);
}

function AddPlaperPanel(data){
    let PlayerCards = ``;
    data && data.forEach((item , i)=>{
            PlayerCards += `
        <div class="flip-card">
            <div class="flip-card-inner">
            
                 <div class=' flip-card-front relative shadow-md cursor-pointer''>
                      <img src="${item.cover ?? './Assets/badge-white.png'}" 
                      class="w-36" alt="">
                      
                      <div class="absolute left-[25px] top-[40px] flex flex-col items-center">
                          <h2 class="m-0 p-0 font-bold text-ms ${item.rating>85 && (item.position != "GK" &&'text-[#FFD972]')}">${item.rating}</h2>
                          <span class="text-[8px] font-bold ${item.rating>85 && (item.position != "GK" &&'text-[#FFD972]')}">${item.position}</span>
                          <img class="w-5 ${item.rating>85 &&(item.position != "GK" &&'text-[#FFD972]')}" src="${item.flag}"  alt="" />
                      </div>
                      <img class="absolute right-4 w-24 top-6" src="${item.photo}" alt="" />
                      <div class="absolute left-8 right-8 top-32 font-bold text-xs flex justify-center items-center text-center">
                          <h2 class="${item.rating>85 && (item.position != "GK" &&'text-[#FFD972]')} ">${item.name}</h2>
                      </div>
                      
                  </div>
                  <div class="absolute  flip-card-back top-0  h-full w-full ">
                    <div class="relative">
                        <svg class="" viewBox="0 0 252 346" fill="#181717" xmlns="http://www.w3.org/2000/svg">
                            <path d="M175.972 310.77C175.972 310.77 135.032 306.807 126.287 329C120.723 310.77 90.5147 311.166 82.5652 310.77C74.6157 310.374 21.7516 314.733 22.5465 283.029C20.9567 265.592 23.3414 71.4042 23.3414 67.4412C45.9975 64.6671 71.4359 43.2668 83.7576 40.4927C96.0793 37.7186 100.452 37.7186 100.452 37.7186C100.452 37.7186 104.029 45.6446 111.978 45.6446C119.928 45.6446 126.287 29 126.287 29C126.287 29 134.237 45.2483 141.789 45.6446C149.341 46.041 151.726 37.7186 151.726 37.7186C151.726 37.7186 162.06 37.7186 171.6 40.4927C181.139 43.2668 203.795 62.2893 229.631 69.0264C229.631 72.5931 229.234 225.962 229.631 283.029C235.196 310.77 175.972 310.77 175.972 310.77Z" stroke="#A2A2A2" stroke-width="2"/>
                            <defs>
                            <linearGradient id="paint0_linear_11_3" x1="28.2759" y1="71.4528" x2="234.72" y2="288.345" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2B2B2B"/>
                            <stop offset="1"/>
                            </linearGradient>
                            </defs>
                          </svg>
                              <div class="absolute top-8 text-[8px] text-white flex justify-center gap-4 w-full  p-1">
                                    <div class="flex flex-col gap-1">
     
                                        <p class="grid grid-cols-[1fr]">
                                            <span>Rating : </span> 
                                            <span class="border-[2px] text-xs rounded-full
                                                 border-${item?.rating>=90 ? 'green-400' : item?.item>=60 ?'yellow-400' : 'red-400' } 
                                              px-[2px] py-[2px]">${item?.rating}</span>
                                        </p>
                                         <p class="grid grid-cols-[1fr]">
                                            <span>Pace : </span> 
                                            <span class="border-[2px] rounded-full 
                                                border-${(item?.pace ?? item.diving)>=90 ? 'green-400' : (item?.pace ?? item.diving)>=60 ?'yellow-400' : 'red-400' }
                                             px-[2px] py-[2px]">${item?.pace ?? item.diving}</span>
                                        </p>
                                        <p class="grid grid-cols-[1fr]">
                                            <span>Shooting : </span> 
                                            <span class="border-[2px] rounded-full 
                                                border-${(item?.shooting ?? item.handling)>=90 ? 'green-400' : (item?.shooting ?? item.handling)>=60 ?'yellow-400' : 'red-400' }
                                             px-[2px] py-[2px]">${item?.shooting ?? item.handling}</span>
                                        </p>
                                        <p class="grid grid-cols-[1fr]">
                                            <span>Physical : </span> 
                                            <span class="border-[2px] rounded-full 
                                                border-${(item?.physical ?? item.kicking)>=90 ? 'green-400' : (item?.physical ?? item.kicking)>=60 ?'yellow-400' : 'red-400' }
                                             px-[2px] py-[2px]">${item?.physical ?? item.kicking}</span>
                                        </p>
                                    </div>
                                    <div class="flex flex-col gap-1">
                                   
                                        <p class="grid grid-cols-[1fr]">
                                            <span>Passing : </span> 
                                            <span class="border-[2px] rounded-full 
                                             border-${(item?.passing ?? item.reflexes)>=90 ? 'green-400' : (item?.passing ?? item.reflexes)>=60 ?'yellow-400' : 'red-400' }
                                             px-[2px] py-[2px]">${item?.passing ?? item.reflexes}</span>
                                        </p>
                                        <p class="grid grid-cols-[1fr]">
                                            <span>Dribbling : </span> 
                                            <span class="border-[2px] rounded-full 
                                                border-${(item?.defending ?? item.positioning)>=90 ? 'green-400' : (item?.defending ?? item.positioning)>=60 ?'yellow-400' : 'red-400' }
                                            px-[2px] py-[2px]">${item?.dribbling ?? item.speed}</span>
                                        </p>
                                        <p class="grid grid-cols-[1fr]">
                                            <span>Defending : </span> 
                                            <span class="border-[2px] rounded-full gap-2
                                                border-${(item?.dribbling ?? item.speed)>=90 ? 'green-400' : (item?.dribbling ?? item.speed)>=60 ?'yellow-400' : 'red-400' }
                                              px-[2px] py-[2px]">${item?.defending ?? item.positioning}</span>
                                        </p>
                                        
                                    </div>
                                    
                                </div>
                    </div>
                    
      
                  </div>
              </div>
        </div>  
            ` 
      
    })

    document.getElementById("playerslist").innerHTML = `
        <div id="datalistplayers" class="h-[70vh] overflow-y-auto " >
                <div class="flex flex-wrap justify-center gap-1">
                ${PlayerCards.length>0 ? PlayerCards : `
                <div class="flex gap-2 ite px-5 py-2 w-full mt-10 border-2 border-gray-700 text-gray-200">
                Empty data players</span>
                </div>`}
                </div>
        </div>
    `;
}

Display_All_Players(false);

// <<<<<<< HEAD
// const rangeInput = document.getElementById("RangePlayerRating");
// const RatingDisplay = document.getElementById("RatingDisplay");

// const updateRating = () => {
//   RatingDisplay.textContent = `Rating (${rangeInput.value}):`;
// };

// rangeInput.addEventListener("input", updateRating);

// updateRating();
// =======
//input range event lkola wa7d

const inputRange = ['Rating' ,'Pace','Shooting','Passing','Defending','Dribbling','Physical'] 

inputRange.forEach((item)=>{
  document.getElementById("RangePlayer"+item).addEventListener("input", () => {
    const RatingDisplay = document.getElementById(item+"Display");
    RatingDisplay.textContent = `${item} (${document.getElementById("RangePlayer"+item).value}):`;
  });
})

let imageFile;

function AddPlayer(event){
  event.preventDefault();
  const PlayerData = {
      id : AllPlayersLis.length +1 ,
      name : document.getElementById("txtplayerName")?.value ,
      photo : "",
      cover : document.querySelector("#CoverCombo")?.value ,
      position : document.getElementById("ComboplayerPosition")?.value ,
      nationality : document.getElementById("FlagComboName")?.textContent ,
      flag : document.getElementById("FlagComboImg")?.getAttribute('src') ,

      club : document.getElementById("ClubComboName")?.textContent ,
      logo : document.getElementById("ClubComboImg")?.getAttribute('src') ,
      rating : document.getElementById("RangePlayerRating")?.value ,
      pace : document.getElementById("RangePlayerPace")?.value ,
      shooting : document.getElementById("RangePlayerShooting")?.value ,
      passing : document.getElementById("RangePlayerPassing")?.value ,
      dribbling : document.getElementById("RangePlayerDribbling")?.value ,
      defending : document.getElementById("RangePlayerDefending")?.value , 
      physical : document.getElementById("RangePlayerPhysical")?.value ,
  }

  console.log(PlayerData)
  if (checkfiledrequied(PlayerData)) {
    document.getElementById("panleform").style.opacity = '0.4' ;
    document.getElementById("panleform").style.pointerEvents = 'none' ;
    document.getElementById("progressloading").classList.remove('hidden');
    UploadImgOnImgBB(PlayerData);
} 

}


function checkfiledrequied(PlayerData){
  let Findtrouble = false
  PlayerData.club==undefined ?
   (document.getElementById('textClublabel').textContent = '*' , Findtrouble = true)
   :document.getElementById('textClublabel').textContent = ''
  PlayerData.cover=="" ? (document.getElementById('textcoverlabel').textContent = '*', Findtrouble = true)
  :document.getElementById('textcoverlabel').textContent = ''
  PlayerData.flag==undefined ? (document.getElementById('textflaglabel').textContent = '*', Findtrouble = true)
  :document.getElementById('textflaglabel').textContent = ''
  PlayerData.name=="" ? (document.getElementById('textNamelabel').textContent = '*', Findtrouble = true)
  :document.getElementById('textNamelabel').textContent = ''
  !imageFile ? (document.getElementById('imagepanelR').textContent = '*', Findtrouble = true)
  :document.getElementById('imagepanelR').textContent = ''
  return !Findtrouble
}

const input = document.querySelector("#fileInput");
input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    // console.log(event)
    if (file) {
        imageFile = file;   
        // console.log("File selected:", file.name);//ghir name
    }
});

async function UploadImgOnImgBB(PlayerData){

  const apiKey = "3831af7143a217e46e098a7018fb2522";
  //We have to make in it the env file to make it more secure lmohim 9di o 3adi
  const formData = new FormData();

  formData.append("image", imageFile);

  try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
          method: "POST",
          body: formData,
      });

      if (!response.ok) {
          throw new Error("Failed to upload image");
      }

      const data = await response.json();
      PlayerData.photo = data.data.url;

      AllPlayersLis.splice(0,0,PlayerData)
      Display_All_Players(true);
      console.log(AllPlayersLis)

      document.getElementById("panleform").style.opacity = '1' ;
      document.getElementById("panleform").style.pointerEvents = 'auto' ;
      document.getElementById("progressloading").classList.add('hidden');

  } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
  }

  
}

function uploadToImgBB(imageFile) {
  
}

function OpenFormPanel(){

  if(document.getElementById("FormPanel").getAttribute('isopned') == 'true'){
    document.getElementById("FormPanel").setAttribute('isopned','false')
    document.getElementById("FormPanel").classList.add("grid-cols-1")
    // document.getElementById("FormPanel").classList.remove("grid-cols-[1fr,auto]")  
    // if(window.width > 1150){
      
    // }else{
    //   document.getElementById("FormPanel").classList.remove("grid-cols-1")
    //   document.getElementById("FormPanel").classList.remove("grid-cols-[1fr,auto]")  
    //   // document.getElementById("FormPanel").classList.add("grid-rows-[auto,1fr]")
    //   // document.getElementById("datalistplayers").classList.remove('h-[70vh]')
    //   // document.getElementById("datalistplayers").classList.add('h-[20vh]')
    // }

    document.getElementById("FormPanelEdit").classList.add("hidden")
  }
  else{
    document.getElementById("FormPanel").setAttribute('isopned','true')

    document.getElementById("FormPanel").classList.remove("grid-cols-1")
    document.getElementById("FormPanel").classList.add("grid-cols-[1fr,auto]")
    if(window.width > 1150){
     
    }else{
      // document.getElementById("FormPanel").classList.remove("grid-cols-[1fr,auto]")
      // document.getElementById("FormPanel").classList.add("grid-rows-[auto,1fr]")
      // document.getElementById("FormPanel").classList.add("grid-cols-1")

      // document.getElementById("datalistplayers").classList.remove('h-[70vh]')
      // document.getElementById("datalistplayers").classList.add('h-[20vh]')

    
    }



    document.getElementById("FormPanelEdit").classList.remove("hidden")
  }
}


function ClosePopPUPFormulaire(e){
  e.preventDefault();
  document.getElementById("FormPanelEdit").classList.add('hidden')
}
new TomSelect('#FlagCombo',{
  valueField: 'img',
  labelField: 'name',
  searchField: 'name',
  load: function(query, callback) {

    fetch('./Data/nation.json')
      .then(response => response.json())
      .then(json => {
        callback(json);
      }).catch(()=>{
        callback();
      });

  },
  render: {
    option: function(item, escape) {
      return `<div class="custom-option grid grid-cols-[auto,1fr] gap-3 items-center">
          <img  class="h-4 w-4" src="${item.img}" >
          <span  >${item.name}</span>
        </div>`;
    },
    item: function(item, escape) {
      return `<div id="Flaginput" class="custom-option grid grid-cols-[auto,1fr] gap-3 items-center">
          <img id="FlagComboImg" class="h-4 w-4" src="${item.img}" >
          <span id="FlagComboName">${item.name}</span>
        </div>`;
    }
  },
});

new TomSelect('#ClubCombo',{
  valueField: 'img',
  labelField: 'name',
  searchField: 'name',
  load: function(query, callback) {

    fetch('./Data/teams.json')
      .then(response => response.json())
      .then(json => {
        callback(json);
      }).catch(()=>{
        callback();
      });

  },
  // custom rendering functions for options and items
  render: {
    option: function(item, escape) {
      return `<div class="custom-option grid grid-cols-[auto,1fr] gap-3 items-center">
          <img class="h-4 w-4" src="${item.img}" >
          <span>${item.name}</span>
        </div>`;
    },
    item: function(item, escape) {
      return `<div id="Flaginput" class="custom-option grid grid-cols-[auto,1fr] gap-3 items-center">
          <img id="ClubComboImg" class="h-4 w-4" src="${item.img}" >
          <span id="ClubComboName">${item.name}</span>
        </div>`;
    }
  },
});

new TomSelect('#CoverCombo',{
  valueField: 'img',
  labelField: 'name',
  searchField: 'name',
  // fetch remote data
  load: function(query, callback) {

    fetch('./Data/card.json')
      .then(response => response.json())
      .then(json => {
        callback(json);
      }).catch(()=>{
        callback();
      });

  },
  // custom rendering functions for options and items
  render: {
    option: function(item, escape) {
      return `<div class="custom-option grid grid-cols-[auto,1fr] gap-3 items-center">
          <img class="h-4 w-4" src="${item.img}" >
          <span>${item.name}</span>
        </div>`;
    },
    item: function(item, escape) {
      return `<div id="Flaginput" class="custom-option grid grid-cols-[auto,1fr] gap-3 items-center">
          <img class="h-4 w-4" src="${item.img}" >
          <span>${item.name}</span>
        </div>`;
    }
  },
});









