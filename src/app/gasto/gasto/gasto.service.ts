import { Injectable } from "@angular/core";
import { Gasto } from "./gasto.model";

@Injectable({
  providedIn: "root",
})
export class GastoService {
  gastos: Gasto[] = [new Gasto("Alquiler", 900), new Gasto("Ropa", 200)];

  eliminar(gasto: Gasto) {
    const indice: number = this.gastos.indexOf(gasto);
    this.gastos.splice(indice, 1);
  }

  constructor() {}
}
