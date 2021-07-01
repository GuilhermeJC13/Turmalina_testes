document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
          
        element.addEventListener('click', function (e) {
        let nextEl = element.nextElementSibling;
        let parentEl  = element.parentElement;	

            if(nextEl) {
                e.preventDefault();	
                let mycollapse = new bootstrap.Collapse(nextEl);
                     
                if(nextEl.classList.contains('show')){
                    mycollapse.hide();
                } else {
                    console.log("aqui");
                    mycollapse.show();
                }
            }
        });
    })
    }); 