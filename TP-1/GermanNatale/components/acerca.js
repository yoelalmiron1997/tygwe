Vue.component('acerca',{
    template: //html 
            `
            <div>    
                <h1>Sobre mí</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium mollitia quidem nam sint itaque repudiandae. Officiis, blanditiis et facilis error ipsum incidunt ut vitae recusandae eveniet ullam odio harum?</p>
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="container-fluid">
                            <h2>Presentación</h2>
                            <video width="320" controls>
                                <source src="images/presentacion.mp4" type="video/mp4">            
                                Su Navegador no soporta HTML5 video.
                            </video>
                        </div>      
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="container-fluid">
                            <h2>Información</h2>
                            <ul>
                                <li><strong>Nombre: </strong>Germán Natale</li>
                                <li><strong>Facultad: </strong>UTN FRLP</li>
                                <li><strong>Carrera: </strong>Sistemas de Información</li>
                                <li><strong>Catedra: </strong>Tenología y Gestión Web</li>
                                <li><strong>Legajo: </strong>14508</li>   
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `
})

