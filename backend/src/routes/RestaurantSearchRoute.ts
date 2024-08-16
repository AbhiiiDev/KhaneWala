import express from 'express';
import {param} from 'express-validator'
import RestaurantSearchController from '../controllers/RestaurantSearchController';

const router=express.Router();


// route for "api/v1/restaurant/Lucknow" - city bases search for particular city restaurants


router.get('/:restaurantId',param('restaurantId').notEmpty().trim().isString().withMessage('restaurantId parameter must be valid string'),RestaurantSearchController.getRestaurant);

//route to search the restaurant from search bar, along with filters and sortings

router.post('/search/:city',param('city').notEmpty().isString().trim().withMessage("city parameter must be valid string"),RestaurantSearchController.searchRestaurant)


export default router;