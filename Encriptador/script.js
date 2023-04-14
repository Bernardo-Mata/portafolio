

// funcion que captura el string de un input, por medio de un if busca cada vocal del string y los sustituye por caracteres diferentes
// y los imprime en un parrafo a la derecha
const Encriptar = () => {
    var input = document.querySelector('.inputEncriptador').value;
    if( //busqueda de vocales en el string capturado
        input.includes('a') ||
        input.includes('e') ||
        input.includes('i') ||
        input.includes('o') ||
        input.includes('u')
        
        ){ //sustitucion de caracteres
            var nuevo =  input
            .replace(/e/gi, 'enter')
            .replace(/i/gi, 'imes')
            .replace(/a/gi, 'ai')
            .replace(/o/gi, 'ober')
            .replace(/u/gi, 'ufat');
            
        }
        //imprime el dato capturado en el parrafo
        var p = document.querySelector('#p');
        p.innerHTML = nuevo;
        document.getElementById('derecha').style.display = 'none';
        
    }
    var botonEn = document.getElementById('encriptar');
    botonEn.onclick = Encriptar;
    


    //funcion que desencripta lo que se encripto anteriormente


    const desEncriptar = () => {
        var input = document.querySelector('.inputEncriptador').value;
        if( //busqueda de vocales en el string capturado
            input.includes('ai') ||
            input.includes('enter') ||
            input.includes('imes') ||
            input.includes('ober') ||
            input.includes('ufat')
            
            ){ //sustitucion de caracteres
                var nuevo =  input
                .replace(/enter/gi, 'e')
                .replace(/imes/gi, 'i')
                .replace(/ai/gi, 'a')
                .replace(/ober/gi, 'o')
                .replace(/ufat/gi, 'u');
                
            }
            //imprime el dato capturado en el parrafo
            var p = document.querySelector('#p');
            p.innerHTML = nuevo;
            document.getElementById('derecha').style.display = 'none';
            
        }


        var botonDes = document.getElementById('desencriptar');
    botonDes.onclick = desEncriptar;
    

