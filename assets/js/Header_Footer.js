const header = document.querySelector("header");
const footer = document.querySelector("footer");        


if (header) {

    header.innerHTML = ` <ul class="nav nav-pills"> 
          <li class="nav-item"><a href="1-index.html" class="nav-link">Principal</a></li> 
          <li class="nav-item"><a href="#" class="nav-link">Menú</a></li>
          <li class="nav-item"><a href="2-Contacto.html" class="nav-link">Contacto</a></li>
          <li class="nav-item"><a href="#" class="nav-link bi bi-whatsapp"></a></li> 
          <li class="nav-item"><a href="#" class="nav-link bi bi-instagram"></a></li> 
        </ul>`;


  
}

if(footer){

  footer.innerHTML = ` <p class="col-md-4 mb-0 text-body-secondary">© 2025 Company, Inc</p> 
      
        <ul class="nav col-md-4 justify-content-end"> 
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li> 
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li> 
        </ul>`
        
}


