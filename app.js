let opcion=0;
let vHelados=[];
let vVentas=[];
while (opcion !== 6){
    redirigir(mostrarMenu())}

function redirigir(opcion) {
    if (opcion == 1){
        return op1()
    }
    if (opcion == 2){
        return op2()
    }
    if (opcion == 3){
        return op3()
    }
    if (opcion == 4){
        return op4()
    }
    if (opcion == 5){
        return op5()
    }
    if (opcion == 6){
        alert("Ha cerrado la sesión!")
        return
    }
}


function mostrarMenu() {
    let msj="Escriba el número que corresponda a la accióna que desea realizar en el sistema:\n1. Agregar un helado\n2. Modificar helado\n3. Eliminar helado\n4. Mostrar inventario\n5. Realizar venta\n6. Salir del sistema"
    opcion=parseInt(prompt(msj))
    return opcion
}

function op1() {
    let i=0
    let nombre=prompt("Nombre del helado:")
    let sabor=prompt("Sabor del helado:")
    let cant=parseInt(prompt("Cantidad en inventario:"))
    let precio=parseInt(prompt("Valor unitario:"))
    vHelados.push({
        id:i,
        nombre:nombre,
        sabor:sabor,
        cantidad:cant,
        precio:precio})
        i++
}

function op2() {
    let mensaje="Elije el número del helado a modificar\n"
    for(let i=0;i<vHelados.length;i++){
        mensaje+=`\n${i}: ${vHelados[i].nombre}`
    }
    let index=parseInt(prompt(mensaje));
    let helado=vHelados[index];
    let nombre=prompt(`nombre: ${helado.nombre}`, helado.nombre);
    let sabor=prompt(`sabor: ${helado.sabor}`,helado.sabor);
    let cantidad=prompt(`cantidad: ${helado.cantidad}`,helado.cantidad);
    let precio=prompt(`precio: ${helado.precio}`, helado.precio);
    vHelados[index]={
        id:helado.id,
        nombre,
        sabor,
        cantidad,
        precio
    }
}

function op3() {
    let mensaje="Elije el número del helado a eliminar\n"
    for(let i=0;i<vHelados.length;i++){
        mensaje+=`\n${i}: ${vHelados[i].nombre}`
    }
    let index=parseInt(prompt(mensaje));
    vHelados.splice(index,1)
    alert("Producto eliminado correctamente!")
}

function op4() {
    let mensaje="El inventario en este momento es:\n"
    for(let i=0;i<vHelados.length;i++){
        let precioTotal=(vHelados[i].cantidad)*(vHelados[i].precio)
        mensaje+=`\nSabor: ${vHelados[i].sabor}, cantidad: ${vHelados[i].cantidad}, precio unitario: $${vHelados[i].precio}, precio total: $${precioTotal}\n`}
    alert(mensaje);
}

function op5() {
    let mensaje="Elije el número del helado vendido\n"
    for(let i=0;i<vHelados.length;i++){
        mensaje+=`\n${i}: ${vHelados[i].nombre}`
    }
    let index=parseInt(prompt(mensaje));
    let cantidad=parseInt(prompt("Escriba la cantidad a vender:"))
    let total=(vHelados[index].precio)*(cantidad)
    window.confirm(`Desea hacer esta compra por valor de ${total}`)

    if (cantidad>vHelados[index].cantidad){
        alert("Error, no hay suficiente inventario")
    }
    else{
    vHelados[index].cantidad-=cantidad
    vVentas.push({
        nombre:vHelados[index].nombre,
        cantidad:cantidad,
        precio:total
    })
    alert("Compra realizada!")
    }
}