import { Component } from "@angular/core";
import { Ingreso } from "./ingreso/ingreso/ingreso.model";
import { Gasto } from "./gasto/gasto/gasto.model";
import { IngresoService } from "./ingreso/ingreso/ingreso.service";
import { GastoService } from "./gasto/gasto/gasto.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  gastos: Gasto[] = [];

  constructor(
    private ingresoService: IngresoService,
    private gastoService: GastoService
  ) {
    this.ingresos = ingresoService.ingresos;
    this.gastos = gastoService.gastos;
  }

  getIngresoTotal() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getGastoTotal() {
    let gastoTotal: number = 0;
    this.gastos.forEach((gasto) => {
      gastoTotal += gasto.valor;
    });
    return gastoTotal;
  }

  getPorcentajeTotal() {
    return this.getGastoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getGastoTotal();
  }
}
