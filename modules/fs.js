const { error } = require('console')
const fs = require ('fs')
const path = require('path')

// //criar pasta
// fs.mkdir (path.join(__dirname, '/test'), (error) => {
//     if(error){
//         return    console.log('Erro: ', error)
//     }
//     console.log('pasta criada com sucesso')
// } )

//Criar arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello node', (error) => {
    if(error){
        return console.log('Erro: ', error)
    }
    console.log('Arquivo criado com sucesso')
    // Adcionar elementos a um arquivo
    fs.appendFile(path.join(__dirname, 'test', 'test.txt'), 'hello, world', (error) => {
        if(error) {
            return console.log('Error: ',  error)
        }
        console.log("Arquivo alterado com sucesso")
    }  )
    //Ler aquivo
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error,data) => {
    if(error) {
        return console.log('Error: ', error) 
    }
    console.log(data)

})
})




