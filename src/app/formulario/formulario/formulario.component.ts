import { Component, OnInit } from "@angular/core";
import { IngresoService } from "../../ingreso/ingreso/ingreso.service";
import { GastoService } from "../../gasto/gasto/gasto.service";
import { Ingreso } from "../../ingreso/ingreso/ingreso.model";
import { Gasto } from "../../gasto/gasto/gasto.model";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent implements OnInit {
  tipo: string = "ing";
  descripcionInput: string;
  valorInput: number;

  constructor(
    private ingresoService: IngresoService,
    private gastoService: GastoService
  ) {}

  ngOnInit() {}

  tipoOperacion(evento) {
    this.tipo = evento.target.value;
  }

  agregarValor() {
    if (this.tipo === "ing") {
      this.ingresoService.ingresos.push(
        new Ingreso(this.descripcionInput, this.valorInput)
      );
    } else {
      this.gastoService.gastos.push(
        new Gasto(this.descripcionInput, this.valorInput)
      );
    }
  }
}
