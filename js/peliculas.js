const getPeliculas=async()=>{
    const id= new URLSearchParams(window.location.search).get('id');
    const data =await fetch(`http://localhost/cinestar_sweb_php/peliculas/${id}`);
        if(data.status=200){
            const prome=await data.json();
            let html='<br/><h1>Cartelera</h1><br/>';
            prome.data.forEach(element => {
                html+=`
                <div class="contenido-pelicula">
					<div class="datos-pelicula">
						<h2>${element.Titulo}</h2><br/>
						<p>
                            ${element.Sinopsis}
                        </p>
						<br/>
                       	<div class="boton-pelicula"> 
                       		<a href="pelicula.html?id=${element.id}" >
                       			<img src="img/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver info"/>
                       		</a>
               			</div>
               			<div class="boton-pelicula"> 
               				<a href="https://www.youtube.com/v/${element.Link}" target=_blank  onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )" >
               					<img src="img/varios/btn-trailer.jpg" width="120" height="30" alt="Ver trailer"/>
               				</a>
                        </div> 
					</div>
					<img src="img/pelicula/${element.id}.jpg" width="160" height="226"/><br/><br/>
				</div>
                `
            });
            document.getElementById('contenido-interno').innerHTML=html;
            console.log(prome)
        }
    // console.log(data)
}

getPeliculas();
