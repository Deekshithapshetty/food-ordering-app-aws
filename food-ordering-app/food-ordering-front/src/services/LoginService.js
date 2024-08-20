import axios from "axios";
import TokenService from "./TokenService";

class LoginService{
    login(loginParams){
        return axios.post("http://3.235.104.196:8080/api/login", loginParams);
    }

    logout(){
        TokenService.setTokenInHeader();
        return axios.get("http://3.235.104.196:8080/api/logout");
    }
}

export default new LoginService();
