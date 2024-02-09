import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
    foodDetails=[
      {
         id:1,
         foodName:"paneer Grilled Sandwich",
         foodDetails:"Pan-fried masala paneer.",
         foodPrice:200,
         foodImg:"../../../assets/images/paneer_grilled_sandwitch.jpg"
      },
      {
         id:2,
         foodName:"paneer Burger",
         foodDetails:"paneer",
         foodPrice:149,
         foodImg:"../../../assets/images/paneer_burger"
      },
      {
         id:3,
         foodName:"Veggie Supreme",
         foodDetails:"Onion| Green Capsicum|black olives , sweet corn ,Red paprika topped with Cheese",
         foodPrice:369,
         foodImg:"../../../assets/images/veggie_supreme.webp"
      },
      {
         id:4,
         foodName:"Veg Masala Roll In Naan",
         foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen",
         foodPrice:140,
         foodImg:"../../../assets/images/veg_masala_roll_in_naan.jpg"
      },
      {
         id:5,
         foodName:"Indulgence Brownie",
         foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crefted with love &topped with bitter-sweet chocolate that provide taste",
         foodPrice:105,
         foodImg:"../../../assets/images/indulgence_brownie"
      },
      {
         id:6,
         foodName:"Oreo Cheesecake Ice Cream",
         foodDetails:"Oreao ice cream",
         foodPrice:219,
         foodImg:"../../../assets/images/Oreo_cheesecake_icecream.jpg"
      }
    ]
}
