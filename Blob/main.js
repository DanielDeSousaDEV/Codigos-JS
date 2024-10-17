// import * as foto from "./Arquivos/homemAleatorio.jpg"

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

myReader.addEventListener("loadend",function (evento){
    console.log("evento de leitura")
    console.log(evento)
})

console.log("Instancia do leitor")
console.log(myReader)

console.log("Pedido de leitura")
myReader.readAsArrayBuffer(myBlob)

console.log("status da leitura")
console.log(myReader.readyState)


setTimeout(async () => {
    var url = URL.createObjectURL(myBlob)
    
    console.log("URL referente ao Blob")
    console.log(url)
})