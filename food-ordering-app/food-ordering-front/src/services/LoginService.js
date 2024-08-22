import axios from "axios";
import TokenService from "./TokenService";

class LoginService{
    login(loginParams){
        return axios.post("http://34.229.86.245:8080/api/login", loginParams);
    }

    logout(){
        TokenService.setTokenInHeader();
        return axios.get("http://34.229.86.245:8080/api/logout");
    }
}

export default new LoginService();
