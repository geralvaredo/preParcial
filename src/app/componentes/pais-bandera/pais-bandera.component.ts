import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pais-bandera',
  templateUrl: './pais-bandera.component.html',
  styleUrls: ['./pais-bandera.component.scss']
})
export class PaisBanderaComponent implements OnInit {

  @Input() pais;
  @Output() guardar: EventEmitter<string> = new EventEmitter();
  @Output() detalle: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  guardar(nombre: string): any{
    this.paisGuardado.emit(nombre);
  }
  detalle(pais: any): any{
    this.paisDetalle.emit(pais);
  }

}
