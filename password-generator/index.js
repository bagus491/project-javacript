let PanjangPassword = document.getElementById('PanjangPassword')
let cetakpassword = document.getElementById('cetakpassword')
let buttonsatu = document.getElementById('buttonsatu')


const generatorPasswrod = (leng) => {
    const lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
    const highAlpa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_+-=|\][}{';?><"

    const data = lowerAlpha+highAlpa+numeric+symbol
    let generator = ''
    for(let index = 0; index < leng ; index++){
        generator += data[~~(Math.random()*  data.length)]
    }
    return generator
}

function GetPassword(){
    const newpassword = generatorPasswrod(PanjangPassword.value)
    cetakpassword.value = newpassword
}
