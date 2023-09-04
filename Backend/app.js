const express=require('express');
const cors=require('cors')
const app=express();


app.use(cors());//Es impresindible para que se puedan comunicar las paginas 

app.use(express.json());//nos permite procesar el cuerpo de la solicitud post


const {usuarios}=require("./datos/usuarios.js");

app.post("/",(req,res)=>{
    let nuevouser=req.body;
    usuarios.push(nuevouser);
    res.send(JSON.stringify(usuarios));

});
app.get("/",(req,res)=>{
     res.send(JSON.stringify(usuarios));
     console.log(usuarios);

});

app.delete("/:nombre",(req,res)=>{
    const nombre=req.params.nombre;
    const indice=usuarios.findIndex(us=>us.nombre);
    if (indice>=0) {
        usuarios.splice(indice,1);
    }
    res.send(JSON.stringify(usuarios));
})



const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});










// for (let i = 0; i <= 151; i++) {
//     fetch(URL + i)
//       .then((response) => response.json())//Esta función convierte la respuesta de la solicitud en un objeto JSON, ya que la respuesta originalmente es una representación de datos en formato de texto.
//       .then((data) => mostrarPokemon(data))//Llamamos a la funcion mostrar Pokemon y le pasamos los datos del pokemon en un objeto
//       .catch((MenError)=>{
//                 console.log(MenError);
//             });
//   }