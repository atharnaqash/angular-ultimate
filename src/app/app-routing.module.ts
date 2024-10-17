import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InzaFormComponent} from "./admin/components/inza-form/inza-form.component";
import {InzaListComponent} from "./admin/containers/inza-list/inza-list.component";

export const routes: Routes = [
    //{path: 'inza-form', component: InzaFormComponent}, if you want to create a single route,,, following is nested routes
    {
        //better to declare them inside a specifc corresponding module. e.g. admin.module.ts search for
        // Lazyloading routing

        path: 'admin', children: [
            {path: 'inza-list', component: InzaListComponent},
            //used for the routerlink see inza-list.comp 'add item' button
            {path: 'inza-list/new', component: InzaFormComponent, data: { isEdit: false }},
            {path: 'inza-list/:id', component: InzaFormComponent, data: { isEdit: true }},
            {path: 'inza-form', component: InzaFormComponent},
            {path: '', pathMatch: 'full', redirectTo: 'inza-list'}
        ]
    },
    //use the following to redirect any route to another route
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin/inza-list'
    },
    {
        //redirect paths that have forexample typos
        path: '**',
        redirectTo: 'admin'
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
