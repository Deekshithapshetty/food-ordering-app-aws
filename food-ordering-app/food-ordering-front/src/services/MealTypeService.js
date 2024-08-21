import axios from "axios";
import TokenService from "./TokenService";

class MealTypeService{

    getAllMealTypes(){
        return axios.get("http://3.87.79.153:8080/api/mealType/getAllMealTypes");
    }
    createMealType(fd){
        TokenService.setTokenInHeader();
        return axios.post("http://3.87.79.153:8080/api/mealType/createMealType", fd);
    }

    deleteMealType(mealTypeId){
        TokenService.setTokenInHeader();
        return axios.put("http://3.87.79.153:8080/api/mealType/deleteMealType/" + mealTypeId);
    }

    updateMealType(mealType){
        TokenService.setTokenInHeader();
        return axios.put("http://3.87.79.153:8080/api/mealType/updateMealType", mealType);
    }

}

export default new MealTypeService();
