import { Router } from "@angular/router";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-hero-card",
	templateUrl: "./hero-card.component.html",
	styleUrls: ["./hero-card.component.css"]
})
export class HeroCardComponent implements OnInit {
	@Input() hero: any = {};
	@Input() index: number;

	@Output() heroSelected: EventEmitter<number>;

	constructor(private router: Router) {
		this.heroSelected = new EventEmitter();
	}

	ngOnInit(): void {}

	showHero() {
		this.heroSelected.emit(this.index);
		//this.router.navigate(["/hero", this.index]);
	}
}
