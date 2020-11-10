import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { IngresoComponent } from "./ingreso/ingreso/ingreso.component";
import { GastoComponent } from "./gasto/gasto/gasto.component";
import { FormularioComponent } from "./formulario/formulario/formulario.component";
import { CabeceraComponent } from "./cabecera/cabecera/cabecera.component";
import { IngresoService } from "./ingreso/ingreso/ingreso.service";
import { GastoService } from "./gasto/gasto/gasto.service";

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    GastoComponent,
    FormularioComponent,
    CabeceraComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [IngresoService, GastoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
