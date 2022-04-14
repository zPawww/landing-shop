const textos = {
    textoOne: document.querySelector(".one"),
    textoTwo: document.querySelector(".two"),
    textoThree: document.querySelector(".three")
}

function showText(){
    setTimeout(() => {
        textos.textoTwo.setAttribute("hidden","true")
        textos.textoThree.setAttribute("hidden","true")

        /* First Text */

        textos.textoOne.style = "animation: blur 3s ease";

        /* Second Text */

        setTimeout(() => {
            textos.textoTwo.removeAttribute("hidden", "true");
            textos.textoTwo.style = "animation: blur 3s ease";
        }, 1700);

        /* Three Text */

        setTimeout(() => {
            textos.textoThree.removeAttribute("hidden","true");
            textos.textoThree.style = "animation: blur 3s ease"
        }, 3400);
    },0000)
}

showText()
