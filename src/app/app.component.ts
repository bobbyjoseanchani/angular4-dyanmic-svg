import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { RandomNumberService } from './random-number.service';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { FormControl }            from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit, OnDestroy {
  randomNumber: number;
  private interval: number;
  private alive: boolean;
  private randomValueArray: number[];
  meanValue: number;
  rectangleColor: string;
  valuesToDisplay: number;
  myChoice = new FormControl(1);
  
  constructor(private randomNumberService: RandomNumberService) { 
	this.interval = 3000;
    this.alive = true;
	this.randomValueArray = [];
	this.valuesToDisplay = 1;
  }
  
  ngOnInit() {
	IntervalObservable.create(this.interval)
      .subscribe(() => {
        this.getRandomNumber();
	  });
  }
  
  ngOnDestroy(){
    this.alive = false; // switches your TimerObservable off
  }

  private getRandomNumber(): void {
	this.randomNumberService.getRandomNumber().subscribe(myRandomNumber => {
	  this.randomNumber = myRandomNumber.data[0];
	  this.randomValueArray.push(myRandomNumber.data[0]);
	  this.calculateMean();
	});	
  } 
  
  private calculateMean(): void{
	let total = 0;
	for(let randomValue of this.randomValueArray){
		total += randomValue;		
	}
	this.meanValue = total/this.randomValueArray.length;
	this.getRectangleColor(this.randomNumber);
  }
  /*
  getRectangleColor(randomNumber): void{
	  if(randomNumber > this.meanValue){
		  this.rectangleColor = "green";
	  } else if(this.randomNumber < this.meanValue){
		  this.rectangleColor = "red";
	  } else{
		  this.rectangleColor = "orange";
	  }
  }
  */
	
  getRectangleColor(randomNumber): string{
	  if(randomNumber > this.meanValue){
		  return "green";
	  } else if(randomNumber < this.meanValue){
		  return "red";
	  } else{
		  return "orange";
	  }
  }
  
}
