const formations = [
    [
        { pn : 1 , x: 0, y: 395 , post: 'GK' ,player : -1 },
        { pn : 2 ,x: 150, y: 180 , post: 'LB' ,player : -1},
        { pn : 3 ,x: 150, y: 610 , post: 'RB' ,player : -1},
        { pn : 4 ,x: 85, y: 280 , post: 'CB' ,player : -1},
        { pn : 5 ,x: 85, y: 510 , post: 'CB' ,player : -1},
        { pn : 6 ,x: 250, y: 300 , post: 'CM' ,player : -1},
        { pn : 7 ,x: 250, y: 495 , post: 'DM' ,player : -1},
        { pn : 8 ,x: 390, y: 220 , post: 'LW' ,player : -1},
        { pn : 9 ,x: 390, y: 570 , post: 'RW' ,player : -1},
        { pn : 10 ,x: 520, y: 360 , post: 'ST' ,player : -1},
        { pn : 11 ,x: 500, y: 470 , post: 'ST' ,player : -1},
    ],
    [ 
        { pn : 1 ,x: 0, y: 395 , post: 'GK' ,player : -1 },
        { pn : 2 ,x: 170, y: 180 , post: 'LB' ,player : -1},
        { pn : 3 ,x: 170, y: 610 , post: 'RB' ,player : -1},
        { pn : 4 ,x: 85, y: 280 , post: 'LCB' ,player : -1},
        { pn : 5 ,x: 85, y: 510 , post: 'RCB' ,player : -1},
        { pn : 6 ,x: 200, y: 400, post: 'CDM' ,player : -1},
        { pn : 7 ,x: 310, y: 500 , post: 'LCM' ,player : -1},
        { pn : 8 ,x: 310, y: 300 , post: 'RCM' ,player : -1},
        { pn : 9 ,x: 450, y: 560 , post: 'LW' ,player : -1},
        { pn : 10 ,x: 450, y: 220 , post: 'RW' ,player : -1},
        { pn : 11 ,x: 530, y: 395 , post: 'ST' ,player : -1},
    ]
]

const Subplayer =[
]
let formationPicked = 0;
const DefaultPositions = () =>{
   formationPicked = localStorage.getItem("fp") ?? 0 ;
    formations[formationPicked].forEach((item, index) => {
        const element = document.createElement('div');
        element.style.transition = "all .5s,transform 1s"
        element.style.transform = "rotateY(0deg)"
        element.classList.add("absolute")
        element.addEventListener("mouseover",()=>{
            element.style.filter = 'drop-shadow(1px 1px 10px #c4c4c46e)';
        })
        element.addEventListener("mouseleave",()=>{
            element.style.filter = 'none';
            
        })
        element.style.left = `${item.y}px` ;
        element.setAttribute("onclick" , `PickPlayer(${item.pn},true)`)
        element.style.bottom = `${item.x}px`
        element.setAttribute("id" ,`img${index + 1}` )
        element.classList.add('element');
        element.innerHTML = `
        
                <img id="imgcover${item.pn}" src="./Assets/image.png"  class="h-40 " alt="">
                    ${item.player == -1 && 
                    (`
                        <div id="addplayericon${item.pn}" class="absolute inset-0 flex justify-center items-center">
                            <div class="relative text-gray-400 text-2xl cursor-pointer">
                                <i class="fa-solid fa-plus"></i>
                            </div>    
                       
                        </div>
                        `)}
                    <div class="flex justify-center">
                        <p id="post${index}" class="px-3 text-white bg-gray-800 -translate-y-2 rounded-md w-auto">${item.post}</p>
                    </div>
                    <div class="absolute left-[18px] top-8 flex flex-col items-center">
                        <h2 id="ratingtext${item.pn}" class="m-0 p-0 font-bold text-ms"></h2>
                        <span id="posttext${item.pn}" class="text-[8px]"></span>
                        <img id="imgflag${item.pn}" class="w-5 " alt="" />
                    </div>
                    <img id="imgplayer${item.pn}" class="absolute left-10 w-16 top-6" alt="" />
                    <div class="absolute left-4 right-4 top-[88px]  text-[0.6rem] flex flex-col justify-center items-center text-center">
                        <h2 class="font-bold" id="playername${item.pn}" class=""></h2>
                        
                        <div class="flex flex-col items-center">
                            <span id="playerclub${item.pn}" class="text-[0.5rem]"></span>
                            <img id="imgclub${item.pn}" class="w-4" alt="" />
                        </div>
                        
                    </div>
                    
        ` ;
        canvas.appendChild(element);

    });
}
DefaultPositions();

localStorage.getItem("fp") && (document.getElementById('flabelfp').textContent = parseInt(localStorage.getItem("fp")) == 0 ? '4-3-3' : '4-4-2' );



let players = [];

for (let index = 0; index <= 11 ; index++) {
    const ele = document.getElementById("img"+index);
    ele && players.push(ele) ;
}

function onchangeformation(){
    const tt = document.getElementById("formationtaktik").value;
    tt && localStorage.setItem("fp",tt) 
    tt && (formationPicked = Number(tt) );

    document.getElementById('flabelfp').textContent = tt == 0 ? '4-3-3' : '4-4-2' ;
    
    formations.forEach((taktik,i)=>{
        i!=formationPicked && taktik.forEach((item,p)=>{
            item.player = formations[formationPicked][p].player;
        })
    })

    for (let i = 0; i < players.length; i++) {
        players[i].style.left =  `${formations[Number(tt)][i].y }px`;
        players[i].style.bottom = `${formations[Number(tt)][i].x }px`;
        const gg = document.getElementById(`post${i}`);
        gg && (gg.innerHTML = formations[Number(tt)][i].post );
    }
    console.log(formations)
}
function OpenFormationMenu(){
    const formations = document.getElementById('formations')
    const formationcontent = document.getElementById('formationcontent')
    const formationicon = document.getElementById('formationicon')
    if(formations.getAttribute("ipOpened") == 'true')
    {
        formationcontent.innerHTML = ``;
        formations.setAttribute("ipOpened",'false')
        formationicon.style.transform = `rotate(0deg)`;
    }
    else{
        formationicon.style.transform = `rotate(180deg)`;

        formationcontent.innerHTML = `<select name="" id="formationtaktik" 
                    class="mt-4 py-2  w-full text-gray-400 bg-transparent rounded-md border-2 border-gray-600"
                    onchange="onchangeformation()">
                        <option value="0" >4-4-2</option>
                        <option value="1" >4-3-3</option>
                        
                    </select>`;
        formations.setAttribute("ipOpened",'true');

        document.getElementById("formationtaktik").selectedIndex = formationPicked;
    }
}
function PickPlayer(pn,isOnterain){
    
    fetch('./Data/players.json')
    .then(res=>res.json())
    .then(data=> {
        // console.log(Array.from(formations[formationPicked][pn-1].post).slice(-2).join())
        AddPlaperPanel(data ,
             pn ,
             `${isOnterain == false ? "" :Array.from(formations[formationPicked][pn-1].post).slice(-2).join().replace(/,/g,"")}`,isOnterain)
    })//we can also use includes string but bina n3adbo rassna o safi
}
function ClosePanlePlayers(){
    document.getElementById("playerspanel").innerHTML = ``;
}
function checkplayerIdExist(pn){
    let isfind= 1;
    formations.forEach((tikitaka)=>{
        tikitaka.forEach((item)=>{
            if(item.player==pn){
                isfind =  0;
            }
        })
    })
    Subplayer.forEach((item)=>{
        if(item==pn){
            isfind =  0;
        }
    })
    return isfind ;
}
function AddPlaperPanel(data  , pn , post , isOnterain){
    let PlayerCards = ``;
    data && data.forEach((item , i)=>{
        let FindPlayer= data.find((row)=>row.id==item.id);
        (checkplayerIdExist(item.id)==1) && ( 
            (item.position.includes(""+post)) ? PlayerCards += `

                 
        <div class="flip-card"  onclick='PickedPlayer(${JSON.stringify(FindPlayer).replace(/'/g, "")},${pn},${item.id},${isOnterain})'>
         
            <div class="flip-card-inner">
            
                 <div class=' flip-card-front relative shadow-md cursor-pointer''>
                      <img src="${item.cover ?? './Assets/badge-white.png'}" 
                      class="w-32" alt="">
                      
                      <div class="absolute left-[25px] top-[40px] flex flex-col items-center">
                          <h2 class="m-0 p-0 font-bold text-ms ${item.rating>85 && (item.position != "GK" &&'text-[#FFD972]')}">${item.rating}</h2>
                          <span class="text-[8px] font-bold ${item.rating>85 && (item.position != "GK" &&'text-[#FFD972]')}">${item.position}</span>
                          <img class="w-5 ${item.rating>85 &&(item.position != "GK" &&'text-[#FFD972]')}" src="${item.flag}"  alt="" />
                      </div>
                      <img class="absolute right-4 w-20 top-6" src="${item.photo}" alt="" />
                      <div class="absolute left-2 right-2 top-28 font-bold text-xs flex justify-center items-center text-center">
                          <h2 class="${item.rating>85 && (item.position != "GK" &&'text-[#FFD972]')} ">${item.name}</h2>
                      </div>
                      
                  </div>
                  <div class="absolute  flip-card-back top-0  h-full w-full   cursor-pointer ">
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
                              <div onclick='OpenFormPanel(0,${item.id})' class="absolute top-7 text-[8px] text-white flex justify-center gap-4 w-full  p-1">
                                    <div class="flex flex-col gap-1">
     
                                        <p class="grid grid-cols-[1fr]">
                                            <span>Rating : </span> 
                                            <span class="border-[2px] rounded-full
                                                 border-${item?.rating>=90 ? 'green-400' : item?.item>=60 ?'yellow-400' : 'red-400' } 
                                              px-[2px] ">${item?.rating}</span>
                                        </p>
                                         <p class="grid grid-cols-[1fr]">
                                            <span>Pace : </span> 
                                            <span class="border-[2px] rounded-full 
                                                border-${(item?.pace ?? item.diving)>=90 ? 'green-400' : (item?.pace ?? item.diving)>=60 ?'yellow-400' : 'red-400' }
                                             px-[2px] ">${item?.pace ?? item.diving}</span>
                                        </p>
                                        <p class="grid grid-cols-[1fr]">
                                            <span>Shooting : </span> 
                                            <span class="border-[2px] rounded-full 
                                                border-${(item?.shooting ?? item.handling)>=90 ? 'green-400' : (item?.shooting ?? item.handling)>=60 ?'yellow-400' : 'red-400' }
                                             px-[2px] ">${item?.shooting ?? item.handling}</span>
                                        </p>
                                        <p class="grid grid-cols-[1fr]">
                                            <span>Physical : </span> 
                                            <span class="border-[2px] rounded-full 
                                                border-${(item?.physical ?? item.kicking)>=90 ? 'green-400' : (item?.physical ?? item.kicking)>=60 ?'yellow-400' : 'red-400' }
                                             px-[2px]">${item?.physical ?? item.kicking}</span>
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

            ` : ''
        )
      
    })

    document.getElementById("playerspanel").innerHTML = `
        <div class=" w-full py-5 px-6 h-96" >
            <div class="flex justify-between">
            <h3 class=" text-gray-100">Players</h3>
                <i class="fa-solid fa-xmark text-white cursor-pointer" onclick="ClosePanlePlayers()"></i>
                </div>
                <div class="flex flex-wrap gap-2">
                ${PlayerCards.length>0 ? PlayerCards : `
                <div class="flex gap-2 ite px-5 py-2 w-full mt-10 border-2 border-gray-700 text-gray-200">
                <i class="fa-regular fa-futbol"></i><span>0 player found</span>
                </div>`}
                </div>
        </div>
    `;
}
function PickedPlayer(playerObject , pn ,id,isOnterain){
    formations.forEach((tik ,i)=>{
        tik.forEach((itm ,i)=>{
            if(itm.pn==pn) {
                itm.player = id ;
            }
        })
    })
    if(!isOnterain){
        const findPlayer = Subplayer.find(ite=>ite==id)
        if(Subplayer.length<5 && !findPlayer){
            document.getElementById('subnumber').textContent = (Subplayer.length+1) +"/5" 
            const element = document.createElement('div');
            element.style.transition = "all .5s,transform 1s"
            element.style.transform = "rotateY(0deg)"
            element.addEventListener("mouseover",()=>{
                element.style.filter = 'drop-shadow(1px 1px 10px #c4c4c46e)';
            })
            element.addEventListener("mouseleave",()=>{
                element.style.filter = 'none';
                
            })
            element.setAttribute("onclick" , `PickPlayer(${id},false)`)
            element.setAttribute("id" ,`img${Subplayer.length+1}` )
            element.classList.add('element');
    
            element.innerHTML = `
                    <img id="imgcover${id}" src="${playerObject?.cover}"  class="h-40 " alt="">
                      
                        <div class="flex justify-center">
                            <p id="post${Subplayer.length+1}" class="px-3 text-white bg-gray-800 -translate-y-2 rounded-md w-auto">${playerObject?.position}</p>
                        </div>
                        <div class="absolute left-[18px] top-8 flex flex-col items-center">
                            <h2 id="ratingtext${id}" class="${playerObject.rating>85 && (playerObject.position != "GK" &&'text-[#FFD972]')} m-0 p-0 font-bold text-ms">${playerObject?.rating}</h2>
                            <span id="posttext${id}" class=" ${playerObject.rating>85 && (playerObject.position != "GK" &&'text-[#FFD972]')} text-[8px]">${playerObject?.position}</span>
                            <img id="imgflag${id}" class="w-5 " src="${playerObject?.flag}" alt="" />
                        </div>
                        <img id="imgplayer${id}" class="absolute left-10 w-16 top-6" src="${playerObject?.photo}" alt="" />
                        <div class="absolute left-4 right-4 top-[88px]  text-[0.6rem] flex flex-col justify-center items-center text-center">
                            <h2 class="${playerObject.rating>85 && (playerObject.position != "GK" &&'text-[#FFD972]')} font-bold" id="playername${id}" class="">${playerObject?.name}</h2>
                            <div class="flex flex-col items-center">
                                <span id="playerclub${id}" class="${playerObject.rating>85 && (playerObject.position != "GK" &&'text-[#FFD972]')} text-[0.5rem]">${playerObject?.club}</span>
                                <img id="imgclub${id}" class="w-4" alt="" src="${playerObject?.logo}" />
                            </div>
                        </div>
            `
            document.getElementById("subpanel").appendChild(element) ;
            Subplayer.push(id);
        }
        (Subplayer.length>=5) &&  (document.getElementById('cardtoadd').style.display = `none`)
        
    }
    else{
        const Card = document.getElementById(`img${pn}`);
        Card.innerHTML += 
        `
            <div onclick='getPlayerInfo(${JSON.stringify(playerObject)})' class="absolute z-20 cursor-pointer right-0 bottom-10 bg-gray-600 text-white rounded-full h-5 w-5 flex justify-center items-center shadow-sm">
                <span class="font-sans">i</span>
            </div>
        `;
        document.getElementById(`ratingtext${pn}`).innerHTML = playerObject?.rating;
        document.getElementById(`playername${pn}`).innerHTML = playerObject?.name;
        document.getElementById(`posttext${pn}`).innerHTML = playerObject?.position;
        document.getElementById(`playerclub${pn}`).innerHTML = playerObject?.club;
    
        (playerObject?.rating >85 && playerObject?.position != "GK" ) && 
        ( document.getElementById(`ratingtext${pn}`).classList.add('text-[#FFD972]'),
        document.getElementById(`playername${pn}`).classList.add('text-[#FFD972]'),
        document.getElementById(`posttext${pn}`).classList.add('text-[#FFD972]'),
        document.getElementById(`playerclub${pn}`).classList.add('text-[#FFD972]')
        )
        
    
        const addplayericon = document.getElementById(`addplayericon${pn}`);
        addplayericon.style.display = 'none';
        document.getElementById(`imgcover${pn}`).setAttribute("src" , playerObject?.cover )
        document.getElementById(`imgflag${pn}`).setAttribute("src" , playerObject?.flag )
        document.getElementById(`imgplayer${pn}`).setAttribute("src" , playerObject?.photo )
        document.getElementById(`imgclub${pn}`).setAttribute("src" , playerObject?.logo )
    
        Card.style.transform = "rotateY(0deg) scale(1.1)"
        setTimeout(()=>{
            Card.style.transform = "rotateY(0deg) scale(1)"
        },500)
    }
   
}
function getPlayerInfo(playerObject){
    document.getElementById(`playerinfo`).innerHTML = 
    `
        <div class="border-[#3C4053] rounded-md border-2 w-full py-3 px-6">
            <div class="flex justify-between">
            <h3 class=" text-gray-100">Player information</h3>
                <i class="fa-solid fa-xmark text-white cursor-pointer" onclick="ClosePanlePlayersinfo()"></i>
            </div>
            <div class="text-white text-xs grid grid-cols-[1fr,auto] mt-3 gap-2">
                <div class="flex flex-col w-full ">
                    <div class="flex flex-col items-center">
                        <div class="flex gap-3">
                            <img class="w-16" src="${playerObject?.flag}" alt="" >
                        </div>
                        <h3 class="font-semibold">${playerObject?.nationality}</h3>
                    </div>
                    <div class="grid grid-cols-2 gap-2 justify-between p-2">
                                    <div class="flex flex-col gap-1">
                                        <p class="grid grid-cols-[1fr]">
                                            <span>Rating : </span> 
                                            <div class="rounded-full  bg-gray-600 " >
                                                <div class="rounded-full
                                                 bg-${playerObject?.rating>=90 ? 'green-400' : playerObject?.rating>=60 ?'yellow-400' : 'red-400' } px-2 
                                                 w-[${playerObject?.rating}%]">${playerObject?.rating}</div>
                                            </div>
                                            
                                            </p>
                                         <p class="grid grid-cols-[auto]">
                                            <span>${(playerObject?.pace ?'Pace' : 'Diving')}  : </span>
                                            <div class="rounded-full  bg-gray-600 " >
                                                <div class="rounded-full 
                                                bg-${(playerObject?.pace ?? playerObject.diving)>=90 ? 'green-400' : (playerObject?.pace ?? playerObject.diving)>=60 ?'yellow-400' : 'red-400' }
                                                px-2 
                                                w-[${playerObject?.pace ?? playerObject.diving}%]">${playerObject?.pace ?? playerObject.diving}</div>
                                            </div>
                                            
                                        </p>
                                        <p class="grid grid-cols-[1fr]">
                                            <span>${(playerObject?.Shooting ?'Shooting' : 'Handling')} : </span> 
                                            <div class="rounded-full  bg-gray-600 " >
                                                <div class="rounded-full 
                                                bg-${(playerObject?.shooting ?? playerObject.handling)>=90 ? 'green-400' : (playerObject?.shooting ?? playerObject.handling)>=60 ?'yellow-400' : 'red-400' }
                                                 px-2 w-[${playerObject?.shooting ?? playerObject.handling}%]">${playerObject?.shooting ?? playerObject.handling}</div>
                                            </div>
                                        </p>
                                        <p class="grid grid-cols-[1fr]">
                                            <span>${(playerObject?.physical ?'Physical' : 'Kicking')}  : </span> 
                                             <div class="rounded-full  bg-gray-600 " >
                                               <div class="rounded-full 
                                                bg-${(playerObject?.physical ?? playerObject.kicking)>=90 ? 'green-400' : (playerObject?.physical ?? playerObject.kicking)>=60 ?'yellow-400' : 'red-400' }
                                                px-2  w-[${playerObject?.physical ?? playerObject.kicking}%]">${playerObject?.physical ?? playerObject.kicking}</div>
                                            </div>
                                        </p>
                                    </div>
                                    <div class="flex flex-col gap-1">
                                   
                                        <p class="grid grid-cols-[1fr]">
                                            <span>${(playerObject?.passing ?'Passing' : 'Reflexes')} : </span> 
                                             <div class="rounded-full  bg-gray-600 " >
                                                <div class="rounded-full 
                                                bg-${(playerObject?.passing ?? playerObject.reflexes)>=90 ? 'green-400' : (playerObject?.passing ?? playerObject.reflexes)>=60 ?'yellow-400' : 'red-400' }
                                                 px-2 w-[${playerObject?.passing ?? playerObject.reflexes}%]">${playerObject?.passing ?? playerObject.reflexes}</div>
                                            </div>
                                            </p>
                                        <p class="grid grid-cols-[1fr]">
                                            <span>${(playerObject?.dribbling ?'Dribbling' : 'Speed')} : </span> 
                                             <div class="rounded-full  bg-gray-600 " >
                                                <div class="rounded-full 
                                                bg-${(playerObject?.dribbling ?? playerObject.speed)>=90 ? 'green-400' : (playerObject?.dribbling ?? playerObject.speed)>=60 ?'yellow-400' : 'red-400' }
                                                px-2  w-[${playerObject?.dribbling ?? playerObject.speed}%]">${playerObject?.dribbling ?? playerObject.speed}</div>
                                            </div>
                                            </p>
                                        <p class="grid grid-cols-[1fr]">
                                            <span>${(playerObject?.defending ?'Defending' : 'Positioning')}  : </span> 
                                            <div class="rounded-full  bg-gray-600 " >
                                                <div class="rounded-full 
                                                bg-${(playerObject?.defending ?? playerObject.positioning)>=90 ? 'green-400' : (playerObject?.defending ?? playerObject.positioning)>=60 ?'yellow-400' : 'red-400' }
                                                 px-2 w-[${playerObject?.defending ?? playerObject.positioning}%]"  >${playerObject?.defending ?? playerObject.positioning}</div>
                                            </div>    
                                        </p>
                                        
                                    </div>
                        
                    </div>
                </div>
                <div class="flex flex-col items-center  gap-1">
                     <img class="w-28 border-2 border-gray-300 bg-[#3a357357] rounded-md" src="${playerObject?.photo}" alt="">
                     <h2 class="font-bold">${playerObject?.name}</h2>
                     <img class="w-10" src="${playerObject?.logo}" alt="" >
                </div>
                

            </div>
            

        </div>
    `;    
}
function ClosePanlePlayersinfo(){
    document.getElementById(`playerinfo`).innerHTML= ``;
}
function AddSubs(){
    PickPlayer(0,false)
}