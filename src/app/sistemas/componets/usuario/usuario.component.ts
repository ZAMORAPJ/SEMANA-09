import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from '../../../services/usuarios.service';
import { Usuario } from '../../../models/usuario';
import { Constantes } from '../../../utils/constantes';
import { UtilsService } from '../../../utils/utils.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{

  ngAccion!: string;
  submitted = false;

  //============= TABLA =================
  tabla_ListaUsuarios: Usuario[] = [];

  //=============  FORMULARIO NUEVO =================
  formGroup_FormUsuario!: UntypedFormGroup;
  ngFrmVal_id!: number;
  ngFrmVal_nombre!: string;
  ngFrmVal_login!: string;
  ngFrmVal_password!: string;
  ngFrmVal_estado!: number;

   //=============  MODAL =================
   public mostrarDialogUsuario: boolean = false;
   public headerDialogUsuario: String = '';

  constructor(
    private modalService: NgbModal,
    private ufb: UntypedFormBuilder,
    public usuariosService: UsuariosService,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.formGroup_FormUsuario = this.ufb.group({
      formTxhId: [''],
      formTxtNombre : ['', Validators.required],
      formTxtLogin : ['', Validators.required],
      formTxtPassword : ['', Validators.required]
    });
    this.fnListarUsuarios();
  }

  fnListarUsuarios(){

    this.usuariosService.getUsuariosListar().subscribe((data: any) => {
      this.tabla_ListaUsuarios = data;
    }, error => {
      console.log(error);
    });
  }

  fnOpenModal(content: any, xId: any) {

    this.submitted = false;
    this.ngAccion = (xId != '') ? Constantes.ACCION_EDITAR: Constantes.ACCION_NUEVO;
    this.modalService.open(content, { size: 'lg', centered: true, backdrop: 'static', keyboard: false});

    if(xId !=''){
      this.usuariosService.getUsuarioVerById(xId).subscribe((data: any) => {
        this.ngFrmVal_id = data.id;
        this.ngFrmVal_nombre = data.nombre;
        this.ngFrmVal_login = data.login;
        this.ngFrmVal_password = data.password;
      });
    }else{
      this.fnLimpiarFormulario();
    }
  }


  fnLimpiarFormulario() {
      this.ngFrmVal_id = null as any;
      this.ngFrmVal_nombre = "";
      this.ngFrmVal_login = "";
      this.ngFrmVal_password = "";
      this.ngFrmVal_estado = null as any;
  }


  fnAnularRegistro(xId: any): void {
    this.utilsService.modalMensajeConfirmacionAnular("Está seguro de anular este registro?", "¡No podrá revertir si hace esto!").then((response: any) => {
      if (response.isConfirmed) {
        this.usuariosService.voidUsuarioAnular(xId).subscribe((data: any) => {
          this.mostrarDialogUsuario = false;
          if(data.estado == 'OK'){
            this.fnListarUsuarios();
            this.utilsService.modalMensajeExito(data.mensaje);
          }
        });
      }
    });
  }


  btnGuardarRegistro() {

    if(this.formGroup_FormUsuario.valid){

      let paramsUsuario = new Usuario();
      paramsUsuario = {
        id: this.ngFrmVal_id,
        nombre: this.ngFrmVal_nombre,
        login: this.ngFrmVal_login,
        password: this.ngFrmVal_password,
        estado: 1
      };
      console.log(paramsUsuario);

      if(this.ngAccion == Constantes.ACCION_NUEVO){

        this.usuariosService.voidUsuarioRegistrar(paramsUsuario).subscribe((data: any) => {
          this.mostrarDialogUsuario = false;
          if(data.estado == 'OK'){
            this.fnListarUsuarios();
            this.fnLimpiarFormulario();
            this.utilsService.modalMensajeExito(data.mensaje);
            this.submitted = true;
            this.modalService.dismissAll();
            this.ngAccion = "";
          }
        });

      }else if(this.ngAccion == Constantes.ACCION_EDITAR){

        this.usuariosService.voidUsuarioActualizar(this.ngFrmVal_id ,paramsUsuario).subscribe((data: any) => {
          this.mostrarDialogUsuario = false;
          if(data.estado == 'OK'){
            this.fnListarUsuarios();
            this.fnLimpiarFormulario();
            this.utilsService.modalMensajeExito(data.mensaje);
            this.submitted = true;
            this.modalService.dismissAll();
            this.ngAccion = "";
          }
        });

      }


    }else{
      this.utilsService.modalMensajeAdvertencia('Debe ingresar información');
    }

  }

}
