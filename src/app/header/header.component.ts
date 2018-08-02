import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(private dishservice: DishService,
              private promotionService: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

}
