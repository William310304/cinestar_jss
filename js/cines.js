const getCines= async()=>{
    const data = await fetch(`http://localhost/cinestar_sweb_php/cines`)
    if(data.status=200){
        const prome=await data.json();
        console.log(prome)    
        let html='<br/><h1>Nuestros Cines</h1><br/>';
        prome.data.forEach(element => {
            html+= `
               <div class="contenido-cine">
                <img src="img/cine/${element.id}.1.jpg" width="227" height="170"/>
                <div class="datos-cine">
                        <h4>${element.RazonSocial}</h4><br/>
                    <span>${element.Direccion}<br/><br/>Teléfono: ${element.Telefonos}</span>
                </div>
                <br/>
                <a href="cines.html?id=${element.id}">
                    <img src="img/varios/ico-info2.png" width="150" height="40"/>
                </a>
            </div> 
            `
        });
        document.getElementById('contenido-interno').innerHTML=html;
        
    }
    
}

getCines()













