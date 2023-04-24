let inputPlayersatu = document.getElementById('inputPlayersatu')
let inputPlayerdua = document.getElementById('inputPlayerdua')
let buttonStart = document.getElementById('buttonStart')
let boxkotaklogin = document.getElementById('box-login')
let spinnersatu = document.getElementById('spinner-satu')
let angkaawal = document.getElementById('angkaawal')

let containerketiga = document.getElementById('container-flex')
let containerkedua = document.getElementById('container-flex-start')
let containerboxgambarkedua = document.getElementById('container-row-two-sub')
let containerboxgambarpertama  = document.getElementById('container-row-two')


let buttonkedua = document.getElementById('buttonkedua')
let cetaksatu = document.getElementById('cetaksatu')
let cetakdua = document.getElementById('cetakdua')
let cetaktiga = document.getElementById('cetaktiga')
let cetakempat  = document.getElementById('cetakempat')

let cetakNamaSatu = document.getElementById('cetakNamaSatu')
let cetakNamadua = document.getElementById('cetakNamadua')
let spinnerkedua = document.getElementById('spinner-kedua')

let batuGambar = document.getElementById('batuGambar')
let batuGunting = document.getElementById('batuGunting')
let batuKertas = document.getElementById('batuKertas')
let batuGambartwo = document.getElementById('batuGambartwo')
let batuGuntingtwo = document.getElementById('batuGuntingtwo')
let batuKertastwo = document.getElementById('batuKertastwo')
let buttonNext = document.getElementById('buttonNext')
let buttonNextTwo = document.getElementById('buttonNextTwo')
let buttonReset  = document.getElementById('buttonReset')

cetaksatu.innerHTML = "1"
cetaksatu.style.display = "none"

cetakdua.innerHTML = "2"
cetakdua.style.display = "none"

cetaktiga.innerHTML = "3"
cetaktiga.style.display = "none"

cetakempat.innerHTML = "Waktu Telah Habis"
cetakempat.style.display = "none"

containerketiga.style.display = "none"
containerkedua.style.display = "none"

spinnersatu.style.display = "none"
spinnerkedua.style.display = "none"

buttonNextTwo.style.display = "none"
buttonNext.style.display = "none"

const StartGame = () => {
    localStorage.setItem("playerSatu", inputPlayersatu.value)
    localStorage.setItem("playerDua", inputPlayerdua.value)
    if(inputPlayersatu.value === "" && inputPlayerdua.value === ""){
        alert("anda tidak memasukan data")
    }else{
        alert(`selamat datang ${inputPlayersatu.value} dan ${inputPlayerdua.value}`)
    }
    boxkotaklogin.style.display = "none"
    spinnersatu.style.display = "block"
    setTimeout(function(){
        spinnersatu.style.display = "none"
        containerkedua.style.display = "block"
        localStorage.setItem("resContainer","res")
    },4000)

    containerboxgambarkedua.style.display = "none"
    localStorage.setItem("Result", "")
}

if(localStorage.getItem('playerSatu') && localStorage.getItem('playerDua')){
    boxkotaklogin.style.display = "none"
}

if(localStorage.getItem('resContainer')){
    containerkedua.style.display ="block"
    containerboxgambarkedua.style.display = "none"
}


const startBaru = () => {
    localStorage.setItem("Pres", "pres")
    buttonkedua.style.display = "none"
    cetaktiga.style.display = "block"
    cetakdua.style.display = "block"
    cetaksatu.style.display = "block"
    setTimeout(function(){
        cetaktiga.style.display = "none"
        containerketiga.style.display = "block"
        containerkedua.style.display = "none"
    },3000)
    setTimeout(function(){
        cetakdua.style.display = "none"
    },2000)
    setTimeout(function(){
        cetaksatu.style.display = "none"
       
    },1000)

    spinnerkedua.style.display = "block"
    cetakNamaSatu.innerHTML = localStorage.getItem("playerSatu")

    setTimeout(function(){
    spinnerkedua.style.display = "none"
    alert("Waktu Habis")
    cetakNamaSatu.style.display = "none"
    localStorage.setItem("waktuhabis", "done")
    cetakempat.style.display = "block"
    buttonNext.style.display = "block"
    },7000)
}

if(localStorage.getItem("Pres")){
    containerketiga.style.display = "block"
    containerkedua.style.display = "none"
    cetakempat.style.display = "block"
}


const ResetSes = () => {
     localStorage.clear()
    location.reload()
}

const gambarBatu = () =>{
   if(cetakempat.style.display === "block"){
    alert("maaf anda tidak bisa memilih")
   }else {
    localStorage.setItem("pilianpertama", "GambarBatu")
    alert("Jawaban dikunci")
   }
}


const gambarGunting = () => {
    if(cetakempat.style.display === "block"){
        alert("maaf anda tidak bisa memilih")
       }else {
        localStorage.setItem("pilianpertama", "GambarGunting")
        alert("Jawaban dikunci")
       }

}

const gambarKertas = () => {
    if(cetakempat.style.display === "block"){
        alert("maaf anda tidak bisa memilih")
       }else {
        localStorage.setItem("pilianpertama", "GambarKertas")
        alert("Jawaban dikunci")
       }
}


const gambarBatutwo = () =>{
    if(cetakempat.style.display === "block"){
     alert("maaf anda tidak bisa memilih")
    }else {
     localStorage.setItem("piliankedua", "GambarBatu")
     alert("Jawaban dikunci")
    }
 }
 
 
 const gambarGuntingtwo = () => {
     if(cetakempat.style.display === "block"){
         alert("maaf anda tidak bisa memilih")
        }else {
         localStorage.setItem("piliankedua", "GambarGunting")
         alert("Jawaban dikunci")
        }
 
 }
 
 const gambarKertastwo = () => {
     if(cetakempat.style.display === "block"){
         alert("maaf anda tidak bisa memilih")
        }else {
         localStorage.setItem("piliankedua", "GambarKertas")
         alert("Jawaban dikunci")
        }
 }
 

const NextSes = () => {
    if(localStorage.getItem('pilianpertama') === ""){
        alert("player satu kalah karena tidak memilih")
        alert("player kedua menang")
        location.reload()
    }

    cetakNamadua.innerHTML = localStorage.getItem("playerDua")
    localStorage.setItem("true","true")
    if(localStorage.getItem('pilihanpertama') !== ""){
        cetakempat.style.display = "none"
        cetakNamadua.style.display = "block"
        spinnerkedua.style.display = "block"
        buttonNextTwo.style.display = "none"
        containerboxgambarpertama.style.display = "none"
        containerboxgambarkedua.style.display = "flex"
        setTimeout(function(){
            cetakNamadua.style.display = "none"
            spinnerkedua.style.display = "none"
            cetakempat.style.display = "block"
            buttonNextTwo.style.display = "block"
            containerboxgambarkedua.style.display = "flex"
            containerboxgambarpertama.style.display = "none"
            alert("waktu habis")
            location.reload()
        },7000)
    }
    buttonNext.style.display = "none"
}

if(localStorage.getItem("true")){
    cetakempat.style.display = "block"
    cetakNamadua.style.display = "block"
    spinnerkedua.style.display = "none"
    buttonNextTwo.style.display = "block"
    buttonNext.style.display = "none"
    containerboxgambarpertama.style.display = "none"
}

let black = document.getElementById('black')
let boxkotakresult = document.getElementById('box-result')
let cetakPemenang = document.getElementById('cetakPemenang')

black.style.display = "none"
boxkotakresult.style.display = "none"

let Pemenangsatu = localStorage.getItem("playerSatu")
let Pemenangdua = localStorage.getItem("playerDua")
let cetakPoin = document.getElementById('cetakPoin')
let cetakPoindua = document.getElementById('cetakPoindua')

let pictpemilihanBatu = document.getElementById('pictpemilihanBatu')
let pictpemilihanGunting = document.getElementById('pictpemilihanGunting')
let pictpemilihanKertas  = document.getElementById('pictpemilihanKertas')
let pictpemilihanBatutwo = document.getElementById('pictpemilihanBatutwo')
let pictpemilihanGuntingtwo = document.getElementById('pictpemilihanGuntingtwo')
let pictpemilihanKertastwo  = document.getElementById('pictpemilihanKertastwo')
let buttonReplay = document.getElementById('buttonReplay')

let poinsatu = 0
let poindua = 0

let datapoin = []

pictpemilihanBatu.style.display = "none"
pictpemilihanBatutwo.style.display = "none"
pictpemilihanGunting.style.display = "none"
pictpemilihanGuntingtwo.style.display = "none"
pictpemilihanKertas.style.display = "none"
pictpemilihanKertastwo.style.display = "none"


const NextSestwo = () =>{
    black.style.display = "block"
    boxkotakresult.style.display = "flex"
    if(localStorage.getItem("pilianpertama") === "GambarBatu" && localStorage.getItem("piliankedua") === "GambarBatu"){
        console.log("Draw")
        localStorage.setItem("Result","draw")
        pictpemilihanBatu.style.display = "block"
        pictpemilihanBatutwo.style.display = "block"
    }if(localStorage.getItem("pilianpertama") === "GambarBatu" && localStorage.getItem("piliankedua") === "GambarGunting"){
        console.log("pemenang pertama")
        localStorage.setItem("Result", Pemenangsatu)
        pictpemilihanBatu.style.display = "block"
        pictpemilihanGuntingtwo.style.display = "block"
    }if(localStorage.getItem("pilianpertama") === "GambarBatu" && localStorage.getItem("piliankedua") === "GambarKertas"){
        console.log("pemenang kedua")
        localStorage.setItem("Result", Pemenangdua)
        pictpemilihanBatu.style.display = "block"
        pictpemilihanKertastwo.style.display = "block"
    }if(localStorage.getItem("pilianpertama") === "GambarGunting" && localStorage.getItem("piliankedua") === "GambarGunting"){
        console.log("draw")
        localStorage.setItem("Result","draw")
        pictpemilihanGunting.style.display = "block"
        pictpemilihanGuntingtwo.style.display = "block"
    } if(localStorage.getItem("pilianpertama") === "GambarGunting" && localStorage.getItem("piliankedua") === "GambarBatu"){
        console.log("pemenang kedua")
        localStorage.setItem("Result", Pemenangdua)
        pictpemilihanGunting.style.display = "block"
        pictpemilihanBatutwo.style.display = "block"
    }if(localStorage.getItem("pilianpertama") === "GambarGunting" && localStorage.getItem("piliankedua") === "GambarKertas"){
        console.log("pemenang pertama")
        localStorage.setItem("Result", Pemenangsatu)
        pictpemilihanGunting.style.display = "block"
        pictpemilihanKertastwo.style.display = "block"
    }if(localStorage.getItem("pilianpertama") === "GambarKertas" && localStorage.getItem("piliankedua") === "GambarKertas"){
        console.log("draw")
        localStorage.setItem("Result","draw")
        pictpemilihanKertas.style.display = "block"
        pictpemilihanKertastwo.style.display = "block"
    }if(localStorage.getItem("pilianpertama") === "GambarKertas" && localStorage.getItem("piliankedua") === "GambarBatu"){
        console.log("pemenang pertama")
        localStorage.setItem("Result",Pemenangsatu)
        pictpemilihanKertas.style.display = "block"
        pictpemilihanBatutwo.style.display = "block"
    }if(localStorage.getItem("pilianpertama") === "GambarKertas" && localStorage.getItem("piliankedua") === "GambarGunting"){
        console.log("pemenang kedua")
        localStorage.setItem("Result",Pemenangdua)
        pictpemilihanKertas.style.display = "block"
        pictpemilihanGuntingtwo.style.display = "block"
    }


    cetakPemenang.innerHTML = localStorage.getItem("Result")
    if(localStorage.getItem('Result') === localStorage.getItem('playerSatu')){
        let c =  poinsatu + 1
        cetakPoin.innerHTML = `${c} untuk ${localStorage.getItem(`playerSatu`)}` 
       
    }else if(localStorage.getItem('Result') === localStorage.getItem('playerDua')){
       let p = poindua + 1
        cetakPoindua.innerHTML = `${p} untuk  ${localStorage.getItem(`playerDua`)}`
    
    }else {
        alert("error")
    }
  

}

let buttonsilangsemua = document.getElementById('buttonsilangsemua')



const silangSemua = () => {
    black.style.display = "none"
    boxkotakresult.style.display = "none"
}

const  Replay = () => {
    localStorage.setItem("Pres", "")
    localStorage.setItem("pilianpertama", "")
    localStorage.setItem("piliankedua","")
    localStorage.setItem("true","")
    localStorage.setItem("Result","")
    alert("selamat bermain lagi")
    location.reload()
}