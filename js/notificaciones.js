export function confirmarAgregarProducto(nombreProducto) {
  return Swal.fire({
    title: '¿Agregar al carrito?',        
    text: `¿Deseas agregar "${nombreProducto}" al carrito?`, 
    icon: 'question',                     
    showCancelButton: true,               
    confirmButtonText: 'Sí, agregar',     
    cancelButtonText: 'Cancelar',         
    confirmButtonColor: '#3498db',      
    cancelButtonColor: '#95a5a6'        
  });
}

export function confirmarEliminarProducto(nombreProducto) {
  return Swal.fire({
    title: '¿Eliminar del carrito?',      
    text: `¿Deseas eliminar "${nombreProducto}" del carrito?`, 
    icon: 'warning',                      
    showCancelButton: true,               
    confirmButtonText: 'Sí, eliminar',    
    cancelButtonText: 'Cancelar',         
    confirmButtonColor: '#e74c3c',      
    cancelButtonColor: '#95a5a6'        
  });
}

export function mostrarToastExito(mensaje) {
  Swal.fire({
    toast: true,                          
    position: 'top-end',                  
    icon: 'success',                      
    title: mensaje,                       
    showConfirmButton: false,             
    timer: 3000,                          
    timerProgressBar: true                
  });
}

export function mostrarToastError(mensaje) {
  Swal.fire({
    toast: true,                          
    position: 'top-end',                  
    icon: 'error',                        
    title: mensaje,                       
    showConfirmButton: false,             
    timer: 3000,                          
    timerProgressBar: true                
  });
}