// acá toma de el archivo gatitos.json los datos para el card del carousel del HTML
// function agregarTxtAp(el1,el2,el3,elImg) { 
//     fetch('./gatitos.json')
//         .then(response => response.json())
//         .then((gatitos)=>{
//             el1.innerText=gatitos[0]["nombre"];
//             el2.innerText=gatitos[0]["raza"];
//             el3.innerText=gatitos[0]["pelaje"];
//             elImg.src=gatitos[0]["imagen"];
//         })}
function agregaItemCarusel(jsonGatos,elementoPadre){    
    jsonGatos.forEach(i => {
                const elItemCarusel = `<div class="card">
                <img class="card-img-top" src="${i["imagen"]}" alt="animal">
                <p>nombre: ${i["nombre"]}</p>
                <p>raza: ${i["raza"]}</p>
                <p>pelaje: ${i["pelaje"]}</p>
            </div>`;
            const itemNuevo = document.createElement("div");
            if (elementoPadre.firstElementChild === null){
                itemNuevo.className = "carousel-item active";
            }
            else{
                itemNuevo.className = "carousel-item";
            }
            itemNuevo.innerHTML = elItemCarusel;
            elementoPadre.appendChild(itemNuevo);
        }
        );
   


    }

const elementoPadre = document.getElementById("elementoPadre");
fetch('./gatitos.json')
        .then(response => response.json())
        .then(gatitos=>{agregaItemCarusel(gatitos,elementoPadre)
        });
