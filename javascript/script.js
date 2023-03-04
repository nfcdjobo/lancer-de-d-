
function ajouterDe(){
    let contenaire = document.querySelector(".contenaire");
    let nombreDe = document.querySelectorAll(".inner-de");
    if (nombreDe.length === 0 ){
        let inner_de = document.createElement("p");
        inner_de.setAttribute("class", "inner-de");

        let image = document.createElement("img");
        image.setAttribute("src", `./images/dé-${nombreDe.length+1}.png`);
        image.setAttribute("id", `de-${nombreDe.length + 1}`);
        image.setAttribute("alt", `dé-${nombreDe.length + 1}`);

        let numero = document.createElement("p");
        numero.setAttribute("class", "number");
        numero.setAttribute("id", `number-${nombreDe.length+1}`);
        numero.textContent = nombreDe.length + 1;

        contenaire.append(inner_de);
        inner_de.append(image);
        inner_de.append(numero);

    } else if (0 < nombreDe.length && nombreDe.length < 6){
        let urne = [];
        let inner_de = document.createElement("p");
        inner_de.setAttribute("class", "inner-de");
        let mesDe = document.querySelectorAll("img");
        mesDe.forEach(function(de){
            urne.push(parseInt(de.getAttribute("id").replace("de-", "")));
        });
        let grandeValeur = Math.max(...urne);
        let image = document.createElement("img");
        image.setAttribute("src", `./images/dé-${grandeValeur + 1}.png`);
        image.setAttribute("id", `de-${grandeValeur + 1}`);
        image.setAttribute("alt", `dé-${grandeValeur + 1}`);

        let numero = document.createElement("p");
        numero.setAttribute("class", "number");
        numero.setAttribute("id", `number-${grandeValeur + 1}`);
        numero.textContent = grandeValeur + 1;

        contenaire.append(inner_de);
        inner_de.append(image);
        inner_de.append(numero);
    }
    let ert = document.querySelectorAll(".inner-de");
    ert.forEach((all) => {
        all.addEventListener("click", lanceeDe);
    })
}

function lanceeDe(){
    let mesAleatoire = [];
    let monAleatoire = Math.floor(Math.random() * 7);
    for(let compte = 1; compte <= 6; compte++){
        mesAleatoire.push(monAleatoire);
        monAleatoire = Math.floor(Math.random() * 7);
    }
    
    while (mesAleatoire.some(function (aumoins) { return aumoins == 0 })){
        mesAleatoire = [];
        for (let compte = 1; compte <= 6; compte++) {
            monAleatoire = Math.floor(Math.random() * 7);
            mesAleatoire.push(monAleatoire);
        }
    } 
    let de1 = mesAleatoire[0];
    let de2 = mesAleatoire[1];
    let de3 = mesAleatoire[2];
    let de4 = mesAleatoire[3];
    let de5 = mesAleatoire[4];
    let de6 = mesAleatoire[5];
    let mesDe = document.querySelectorAll("img");
    let sommation =0;
    mesDe.forEach(function(key){
        let sonNumero = document.getElementById(key.id.replace("de", "number"))
        if(parseInt(key.id.replace("de-", "")) === 1){
            key.setAttribute("src", `images/dé-${de1}.png`);
            sonNumero.textContent = de1;
            sommation +=de1;
        }
        if (parseInt(key.id.replace("de-", "")) === 2) {
            key.setAttribute("src", `images/dé-${de2}.png`);
            sonNumero.textContent = de2;
            sommation += de2;
        }
        if (parseInt(key.id.replace("de-", "")) === 3) {
            key.setAttribute("src", `images/dé-${de3}.png`);
            sonNumero.textContent = de3;
            sommation += de3;
        }
        if (parseInt(key.id.replace("de-", "")) === 4) {
            key.setAttribute("src", `images/dé-${de4}.png`);
            sonNumero.textContent = de4;
            sommation += de4;
        }
        if (parseInt(key.id.replace("de-", "")) === 5) {
            key.setAttribute("src", `images/dé-${de5}.png`);
            sonNumero.textContent = de5;
            sommation += de5;
        }
        if (parseInt(key.id.replace("de-", "")) === 6) {
            key.setAttribute("src", `images/dé-${de6}.png`);
            sonNumero.textContent = de6;
            sommation += de6;
        }
    });
    document.getElementById("somme").textContent = sommation;
    alert(`La somme des valeur des dé est ${sommation}`);
}

document.getElementById("add").addEventListener("click", ajouterDe);
document.querySelectorAll(".inner-de").forEach((e)=>{
    e.addEventListener("click", lanceeDe);
})



