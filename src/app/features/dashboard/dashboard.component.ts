import { Component } from "@angular/core";


@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: [
        "./dashboard.component.css"
    ]
})
export class DashboardComponent{
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
}