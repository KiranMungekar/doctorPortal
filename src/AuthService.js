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
}

export default new AuthService();