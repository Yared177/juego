let miPantalla;
let ctx;
let FPS = 50;
let imatgeProta;
let imatgePersonaje;

let anchoF = 50;
let altoF = 50;

let color;

let herba = '#9d9101'
let aigu = '#008080'
let terra = '#8B4513'
let pared = '#1c1c1c'
let cielo = '#51d1f6'
let nube = '#fdf5e6'
let tronco = '#7B3F00'
let hojas = '#228B22'
let llave = '#ff0000'
let puerta = '#EED09D'


let escenari = [
    [4, 5, 5, 5, 4, 4, 4, 4, 4, 4, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 4, 4, 4, 4, 4, 4, 5, 5, 5, 4, 4, 4],
    [4, 4, 5, 5, 5, 4, 4, 4, 4, 5, 5, 5, 5, 4, 4, 4, 5, 4, 4, 4, 4, 5, 5, 5, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4],
    [4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 6, 7, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 7, 6, 7, 0, 0, 0, 0, 0, 0, 3, 3, 3, 9],
    [0, 0, 6, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3],
    [0, 0, 6, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
    [0, 0, 0, 0, 2, 2, 1, 0, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 7],
    [0, 0, 0, 2, 2, 2, 1, 0, 0, 3, 3, 3, 3, 0, 1, 2, 2, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 7, 7],
    [0, 0, 2, 2, 2, 0, 1, 0, 0, 3, 3, 3, 3, 0, 1, 2, 2, 2, 2, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6],
    [0, 2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 1, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6],
    [2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 7, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 6],
    [2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 7, 0, 7, 7, 7, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
    [2, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 7, 7, 7, 7, 6, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 7, 6, 7, 0, 6, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 6, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]


function inicializar(){
    miPantalla = document.getElementById("pantalla")
    ctx = pantalla.getContext('2d');
    imatgeProta = new Image();
    imatgeProta.src = './bo2.jpg'
    imatgePersonaje = new Image();
    imatgePersonaje.src = './hola.png'
    


    setInterval(function(){
        principal()
    },1000/FPS)

}

function borrarPantalla(){
    miPantalla.width = 1800;
    miPantalla.height = 950;
}

function principal(){
    borrarPantalla()
    dibuixaEscenari();
    xavi.dibuixa();
    p1.dibuixa();
    p2.dibuixa();
    p3.dibuixa();
    p1.mueve();
    p2.mueve();
    p3.mueve();
    
}


let prota = function(x,y,ancho,alto){
    this.x = x;
    this.y = y;
    this.alto = alto
    this.ancho = ancho
    this.llave = false;

    this.muerte = function(y,x){
        if(this.y == y && this.x == x){
            alert("HAS MUERTO")
            this.x = 300
            this.y = 800
            escenari[4][10]=8

        }
    }

    this.colisio = function(y,x){
        let choque = false;

        if(escenari[y][x]==0||escenari[y][x]==1||escenari[y][x]==2||escenari[y][x]==2||escenari[y][x]==4||escenari[y][x]==5||escenari[y][x]==6||escenari[y][x]==7){
            choque = true;
        }
        if(escenari[y][x]==8){
            this.llave = true;
            alert("Has cogido la llave")
            escenari[y][x]=3
        }
        if(escenari[y][x]==9){
            if(this.llave == true){
                alert("Has ganado")
            }else{
                alert("Te falta la llave")
            }
        }

        return choque;
    }
    


    this.dibuixa = function(){
        ctx.drawImage(imatgeProta,this.x,this.y)
    }

    this.arriba = function(){

        if(this.colisio((this.y-50)/50,this.x/50)){
            
       }else{
            this.y-=50
       }
        
        
    }
    this.abajo = function(){
        if(this.colisio((this.y+50)/50,this.x/50)){

        }else{
         this.y+=50
        }
    }
    this.derecha = function(){
        if(this.colisio(this.y/50,(this.x+50)/50)){

        }else{
         this.x+=50
        }
    }
    this.izquierda = function(){

        if(this.colisio(this.y/50,(this.x-50)/50)){

        }else{
         this.x-=50
        }
    }
    

}

let personaje = function(x,y,ancho,alto){
    this.x = x;
    this.y = y;
    this.alto = alto
    this.ancho = ancho
    this.retraso = 25;
    this.fotograma = 0

    this.dibuixa = function(){
        ctx.drawImage(imatgePersonaje,this.x,this.y)
    }

    this.colisio = function(y,x){
        let choque = false;

        if(escenari[y][x]==2){
            choque = true;
        }

        return choque;
    }

    this.mueve = function(){
       xavi.muerte(this.y,this.x)
        if(this.fotograma < this.retraso){
            this.fotograma++
        }else{
            
            this.fotograma = 0;
            let posicio = Math.floor(Math.random()*4);



        if(posicio == 0){
            if(this.colisio((this.y-50)/50,(this.x)/50)){

            }else{
             this.y-=50
            }
        }else if(posicio == 1){
            if(this.colisio((this.y+50)/50,this.x/50)){

            }else{
             this.y+=50
            }
        }
        else if(posicio == 2){
            if(this.colisio(this.y/50,(this.x+50)/50)){

            }else{
             this.x+=50
            }
        }
        else if(posicio == 3){
            if(this.colisio(this.y/50,(this.x-50)/50)){

            }else{
             this.x-=50
            }
        }

        }

        
    }

}




let xavi = new prota(350, 850, 100, 100);
let p1 = new personaje(0, 100, 50, 50, 10);
let p2 = new personaje(0, 300, 25, 25, 5);
let p3 = new personaje(0, 500, 100, 100, 1);

document.addEventListener("keydown", function(e){
    if(e.key == "ArrowUp"){
        xavi.arriba();
    }
    if(e.key == "ArrowDown"){
        xavi.abajo();
    }
    if(e.key == "ArrowRight"){
        xavi.derecha();
    }
    if(e.key == "ArrowLeft"){
        xavi.izquierda();
    }
})


function dibuixaEscenari() {
    for (let y = 0; y < 19; y++) {
        for (let x = 0; x < 36; x++) {
            if (escenari[y][x] == 0) {
                color = herba
            }
            if (escenari[y][x] == 1) {
                color = pared
            }
            if (escenari[y][x] == 2) {
                color = aigu
            }
            if (escenari[y][x] == 3) {
                color = terra
            }
            if (escenari[y][x] == 4) {
                color = cielo
            }
            if (escenari[y][x] == 5) {
                color = nube
            }
            if (escenari[y][x] == 6) {
                color = tronco
            }
            if (escenari[y][x] == 7) {
                color = hojas
            }
            if (escenari[y][x] == 8) {
                color = llave
            }
            if (escenari[y][x] == 9) {
                color = puerta
            }
            //console.log(color)
            ctx.fillStyle = color;
            ctx.fillRect(x * anchoF, y * altoF, anchoF, altoF)


        }
    }

}