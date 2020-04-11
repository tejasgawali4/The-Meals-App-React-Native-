import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals : MEALS,
    filteredMeals : MEALS,
    favMeals : []
}

const mealReducer = (state=initialState , action) => {

    switch(action.type){
        
        case TOGGLE_FAVORITE : 
            
            const existingIndex = state.filteredMeals.findIndex(meal => meal.id === action.mealId);
            //Found
            if(existingIndex >= 0){
                const updatedFavMeal = [...state.favMeals];
                updatedFavMeal.splice(existingIndex,1);
                return {...state,favMeals : updatedFavMeal};
            }else {//Not Found
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {...state,favMeals : state.favMeals.concat(meal)};
            }
        default : 
            return state;
    }
}

export default mealReducer;