import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html"
})
export class StarComponent implements OnChanges {
    @Input() rating: any;

    @Output() raitingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {

    }


    onClick(): void {
        // console.log(`kliknuo si na ${this.rating + 1}`)
        this.raitingClicked.emit(`kliknuo si na ${this.rating + 1}`)
    }

}