import axios from "axios";
import TokenService from "./TokenService";

class LoginService{
    login(loginParams){
        return axios.post("http://3.87.79.153:8080/api/login", loginParams);
    }

    logout(){
        TokenService.setTokenInHeader();
        return axios.get("http://3.87.79.153:8080/api/logout");
    }
}

export default new LoginService();
