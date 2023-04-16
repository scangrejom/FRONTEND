const miBoton= document.getElementById("submit");

miBoton.addEventListener(
    'click',
    async (event)=>{
       event.preventDefault();

        const numero1=parseFloat(document.getElementById("numero1").value);
        const numero2=parseFloat(document.getElementById("numero2").value);

        const respuesta= await fetch(

            'http://localhost:3010/api/sumar',

            {
                "method":"POST",
                "headers":{ "Content-Type":"application/json"},
                "body": JSON.stringify({numero1,numero2})
            }

        );
        const dato=await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;
    }

    
);

miBoton.addEventListener(
    'click',
    async (event)=>{
       event.preventDefault();

        const numero1=parseFloat(document.getElementById("numero1").value);
        const numero2=parseFloat(document.getElementById("numero2").value);

        const respuesta= await fetch(

            'http://localhost:3010/api/restar',

            {
                "method":"POST",
                "headers":{ "Content-Type":"application/json"},
                "body": JSON.stringify({numero1,numero2})
            }

        );
        const dato=await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;
    }

    
);