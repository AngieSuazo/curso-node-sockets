//Referencias del HTML

const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');  
const btnEnviar  = document.querySelector('#btnEnviar');


//  Cliente que usa mi sitio web
const socket = io();

//on para estar escuchando eventos del cliente
socket.on('connect',() =>{
    //console.log('Conectado');

    lblOffline.style.display= 'none';
    lblOnline.style.display= '';
});

socket.on('disconnect',() =>{
    //console.log('Desonectado');

    lblOnline.style.display= 'none';
    lblOffline.style.display= '';
});


socket.on('enviar-mensaje', (payload)=>{
    console.log(payload);
})


//Mensaje del front al back
btnEnviar.addEventListener('click', ()=>{
    const mensaje=txtMensaje.value;
    const payload={
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    
    socket.emit('enviar-mensaje',payload , (id)=>{
        console.log('Desde el server', id);
    }); 

})