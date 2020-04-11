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
            const existingIndex = state.favMeals.findIndex(
                meal => meal.id === action.id
            );
            //Found
            if(existingIndex >= 0){
                const updatedFavMeal = [...state.favMeals];
                updatedFavMeal.splice(existingIndex,1);
                return {...state,favMeals : updatedFavMeal};
            }else {//Not Found
                const mealz = state.meals.find(meal => meal.id === action.id);
                return {...state,favMeals : state.favMeals.concat(mealz)};
            }
        default : 
            return state;
    }
}

export default mealReducer;