async function obtenerData(){
    //Usar fetch "solo" 
    //const response =await fetch("http://127.0.0.1:5500/Teoría/data.json");
    // const json = await response.json();
    // console.log(json);

    //Fetch then
    await fetch("http://127.0.0.1:5500/Teoría/data.json").then(response=>response.json()).then(json=> console.log(json)).catch(error => console.log('Solicitud fallida', error));
}

obtenerData();