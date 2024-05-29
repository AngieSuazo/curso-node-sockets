const express = require('express') 
const cors = require('cors'); 
const { socketController } = require('../controllers/sockets/controller');

class Server{
    constructor(){
        this.app = express()
        this.port=process.env.PORT;
        this.server = require('http').createServer(this.app);//propiedad en nuestro servidor para nuestro proyecto express
        this.io = require('socket.io')(this.server);//lugar de información de todos los clientes conectados (sockets conectados)


        this.paths={ };

        //Middleware: funciones que añaden otra funcionalidad al web server 
        this.middlewares();
        //Rutas de mi aplicación
        this.routes();

        //Sockets
        this.sockets();

    }
       
    
    middlewares(){
        //CORS
        this.app.use(cors());
   
        //Directorio público
        this.app.use(express.static('public')); 
     
    }


    routes (){
    //      this.app.use(this.paths.auth, require('../routes/auth'));
   }

   sockets(){
    this.io.on('connection',socketController);

   }



    listen (){
        this.server.listen(this.port,()=>{ //cambio de app a server
            console.log('Servidor corriendo ', process.env.PORT);
        })
    }
}

module.exports=Server;
