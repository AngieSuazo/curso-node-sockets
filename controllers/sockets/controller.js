
const socketController = (socket) => {

    console.log('Cliente conectado',socket.id);

    socket.on('disconnect', ()=>{
        console.log('Cliente desconectado', socket.id);
    })

    socket.on('enviar-mensaje', (payload, callback)=>{
     const id =123456789;
     callback(id);
     ////callback({id, fecha: new Date().getTime() }); enviar lo menos de información posible
      socket.broadcast.emit('enviar-mensaje',payload); //devuelve el mensaje del socket-client
     })

   }

module.exports={
    socketController
}