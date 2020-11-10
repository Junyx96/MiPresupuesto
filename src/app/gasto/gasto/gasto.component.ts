import { Component, Input, OnInit } from "@angular/core";
import { Gasto } from "./gasto.model";
import { GastoService } from "./gasto.service";

@Component({
  selector: "app-gasto",
  templateUrl: "./gasto.component.html",
  styleUrls: ["./gasto.component.css"],
})
export class GastoComponent implements OnInit {
  gastos: Gasto[] = [];
  @Input() ingresoTotal: number;
  constructor(private gastoService: GastoService) {}

  ngOnInit(): void {
    this.gastos = this.gastoService.gastos;
  }

  eliminarGasto(gasto: Gasto) {
    this.gastoService.eliminar(gasto);
  }

  calcularPorcentaje(gasto: Gasto) {
    return gasto.valor / this.ingresoTotal;
  }
}
