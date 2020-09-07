import axios from "axios";

class AuthService{
    constructor(){
        this.authenticated=true;
    }


    login(email,password,type, cb){
        console.log(email+" "+password+' '+type)
        if(type==='doctor'){
            if(email === 'kiran@portal.com', password === '123456'){
                this.authenticated=true;
            }else{
                this.authenticated=false;
            }
        }
        cb();
    }

    logout(cb){
        this.authenticated=false;
        cb();
    }

    checkAuth(){
        return this.authenticated;
    }

    getPatientProfile= async (id) => {
        const patient= await axios.get(`https://5f1e3ff157e3290016863049.mockapi.io/api/patients/${id}`);
        if(patient != null){
            return patient;
        }else{
            return null;
        }
    }
}

export default new AuthService();