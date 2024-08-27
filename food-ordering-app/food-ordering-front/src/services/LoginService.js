import axios from "axios";
import TokenService from "./TokenService";

class LoginService{
    login(loginParams){
        return axios.post("http://18.232.132.83:8080/api/login", loginParams);
    }

    logout(){
        TokenService.setTokenInHeader();
        return axios.get("http://18.232.132.83:8080/api/logout");
    }
}

export default new LoginService();
