import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelMenuModule} from 'primeng/panelmenu';
import {CheckboxModule} from 'primeng/checkbox';
import {ListboxModule} from 'primeng/listbox';
import {ToastModule} from 'primeng/toast';
import {RadioButtonModule} from 'primeng/radiobutton';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';

import {AutoCompleteModule} from 'primeng/autocomplete';

@NgModule({
    declarations: [],
    exports: [
        TableModule,
        PanelMenuModule,
        ProgressSpinnerModule,
        DialogModule,
        AccordionModule,
        ButtonModule,
        CalendarModule,
        DropdownModule,
        FieldsetModule,
        CheckboxModule,
        ListboxModule,
        ToastModule,
        RadioButtonModule,
        PanelModule,
        InputTextModule,
        PaginatorModule,
        AutoCompleteModule
    ],
    providers: []
})
export class AppPrimeNgModule { }
