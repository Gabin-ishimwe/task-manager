import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { Upcoming } from "./page";

export const dashboardRoutes:Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
        children: [
            {
                path: "upcoming",
                component: Upcoming
            }
        ]
    }
]