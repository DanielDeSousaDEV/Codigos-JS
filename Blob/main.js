// import * as foto from "./Arquivos/homemAleatorio.jpg" deu errado

let fileParts = [
    '<h1>daniel</h1><br/><h2>sousa</h2>'
]

/**
 * @type(BlobPropertyBag)
 */
let options = {
    type: "text/html"
}

let myBlob = new Blob(fileParts, options)
console.log("Instancia do Blob")
console.log(Blob)

let myReader = new FileReader()

//Adiciona um ouvinte ao evento de fim de leitura do myReader
myReader.addEventListener("load", function (evento){
    console.log("evento de leitura")
    console.log(evento)

    console.log("Resultado da leitura")
    console.log(this.result)

    var url = URL.createObjectURL(myBlob)
    
    console.log("URL referente ao Blob")
    console.log(url)
})

//Adiciona um ouvinte ao evento de fim de leitura do myReader
myReader.onload = function () {
    alert("acabou uma leitura")
}

console.log("Instancia do leitor")
console.log(myReader)

console.log("Pedido de leitura")
/**
 * o result do fileReader vai depender do metodo que for usado aqui
 */
myReader.readAsArrayBuffer(myBlob)

console.log("status da leitura")
console.log(myReader.readyState)

setTimeout(() => {
    console.log('inicio de outra leitura')
    myReader.readAsArrayBuffer(myBlob)
}, 5000)

console.log("=====formulario=====");

let form = document.getElementById('form')
let fileInput = document.getElementById('fileInput')

form.addEventListener('submit', (submitEvent)=>{
    submitEvent.preventDefault()

    console.log(fileInput.files)
})