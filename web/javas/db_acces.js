const CONFING = { OK: 200, CREATED: 201, FOUND: 404 };
const extraer = async () => {
  fetch("javas/basededatos.json")
    .then((response) => {
      console.log(response.status);
      return response.status === CONFING.OK ? response.json() : CONFING.FOUND;
    })
    .then((response) => {
     productos = response.data
     pintar(response.data)// Callback
    
    
    })
    .catch((error) => console.log(error));
};