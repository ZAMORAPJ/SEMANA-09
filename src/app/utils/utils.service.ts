import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private httpClient: HttpClient) { }

  modalMensaje(mensaje : string) {
    Swal.fire(mensaje);
  }

  modalMensajeExito(mensaje : string) {
    Swal.fire({title: mensaje, icon: "success"});
  }

  modalMensajeError(mensaje : string) {
    Swal.fire({title: mensaje, icon: "error"});
  }

  modalMensajeAdvertencia(mensaje : string) {
    Swal.fire({title: mensaje, icon: "warning"});
  }

  modalMensajeInformacion(mensaje : string) {
    Swal.fire({title: mensaje, icon: "info"});
  }

  modalMensajeConfirmacionAnular(titulo: string, mensaje : string){
    return Swal.fire({
      title: titulo,
      text: mensaje,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Anular",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar"
    }).then((result) => { return result; });
  }

}
