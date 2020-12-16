let arrayPost = []

function criarPostArray() {
    const post = {
        titulo: document.getElementById("titulo-post"),
        autor: document.getElementById("autor-post"),
        conteudo: document.getElementById("conteudo-post")
    }
    arrayPost.push(post)
}

function criarPost() {
    criarPostArray()

    document.getElementById("titulo-post").value = " "
    document.getElementById("autor-post").value = " "
    document.getElementById("conteudo-post").value = " "

    console.log(arrayPost.slice(-1)[0]);
}


