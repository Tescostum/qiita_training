import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><p>{{test}}</p>`,
})
export class AppComponent  {
  constructor(private http: Http) {
  }

  ngOnInit() {
    // viewChild is updated after the view has been checked
    console.log("ngOnInit");
    this.getHeroes();
  }
  name = 'Angular';
  test = "loading..."

  getHeroes() {
  	this.http.get(this.serviceJsonUri)
  	         .subscribe((res:Response) => {
                let json = res.json();
                if(json && json[0]) {
                  this.test = json[0].test;
                }
                
              });
  };

  private serviceJsonUri = './app/keys/keystorage.json';
  readSetting(key:string, label:string): string {
    return "aaa";
  }
}
