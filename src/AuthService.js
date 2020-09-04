class AuthService{
    constructor(){
        this.authenticated=true;
    }



    login(cb){
        this.authenticated=true;
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