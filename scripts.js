const filme = {
    titulo: "vingadores",
    ano: 2018,
    diretor: "robin",
    personagem: "thor"
}
exibirproPropriedades (filme);
function exibirproPropriedades (obj) {
    for (prop in obj)
        if (typeof obj[prop] === "string")
            console.log ( prop, obj[prop])


}