import { Component, OnInit, ViewChild } from "@angular/core";
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: [
        "./dashboard.component.css"
    ]
})
export class DashboardComponent implements OnInit{
    navElement:any = [
        {
            icon: "done_all",
            name: "Upcomming",
            num: 12,
            link: "upcoming"
        },
        {
            icon: "format_list_bulleted",
            name: "Today",
            num: 5,
            link: "today"
        },
        {
            icon: "calendar_today",
            name: "Calendar",
            link: "calendar"
        },
        {
            icon: "speaker_notes",
            name: "Sticky wall",
            link: "sticky-wall"
        },
    ]

    navList:any = [
        {
            color: "red",
            name: "Personal",
            num: 3,
            link: "personal"
        },
        {
            color: "blue",
            name: "Work",
            num: 6,
            link: "work"
        },
        {
            color: "Yellow",
            name: "List 1",
            num: 4,
            link: "list-1"
        },
    ]
    sideNavOpen: boolean = true;
    @ViewChild(MatSidenav)
    mobileSideNav!: MatSidenav;
    constructor(private responsive: BreakpointObserver){}
    ngOnInit(): void {
       this.responsive
       .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
       ])
       .subscribe(res => {
        const breakpoints = res.breakpoints
        if(breakpoints[Breakpoints.Small]) {
            this.mobileSideNav.mode = "over"
        } else {
            this.mobileSideNav.mode = "side"
        }
       })
    }
}