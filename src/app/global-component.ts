import { environment } from "../environments/environment";

export const GlobalComponent = {

  //URL DEL API
  API_URL: environment.baseURL,

  //ENDPOINT PARA USUARIO
  EndPoint_get_Usuario_Listar : 'api/usuarios/userListar',
  EndPoint_get_Usuario_VerById : 'api/usuarios/userVerById/{id}',
  EndPoint_post_Usuario_Registrar : 'api/usuarios/userRegistrar',
  EndPoint_put_Usuario_Actualizar : 'api/usuarios/userActualizar/{id}',
  EndPoint_put_Usuario_Anular : 'api/usuarios/userAnular/{id}',
  EndPoint_delete_Usuario_Eliminar : 'api/usuarios/userEliminar/{id}',
}
