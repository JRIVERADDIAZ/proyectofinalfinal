const finalizarCompra  = async () => {
    const carritoapagar = carrito.map(el => ({
        precio:el.precio,
        title:el.title,
        id:el.id,
        stock:el.stock,
        thumbnailUrl: "",
        cantad: el.cantidad,
    }))
    const resp = await fetch ('api url ',
    {
    method:'POST'
    headers: {
        Authorization: 'token api '

    },
    body: JSON.stringify( {
        items: carritoapagar
    })
})
const data = await resp.json()
console.log(data)
window.open(data.init_point, "_blank")
}

finalizarCompra()