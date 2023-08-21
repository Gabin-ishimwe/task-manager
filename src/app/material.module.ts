import { Component, NgModule } from "@angular/core";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';




@NgModule({
    exports: [
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ]
})
export class MaterialModule{}