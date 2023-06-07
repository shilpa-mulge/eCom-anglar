import { Component } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent {
  constructor() {}
  ngOnInit(): void {}

  signUp(data: Object): void {
    console.warn(data);
  }
}
