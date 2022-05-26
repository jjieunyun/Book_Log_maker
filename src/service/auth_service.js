import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth'



class AuthService {
    constructor(){
        this.firebaseAuth =getAuth();
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    }

    getProvider(providerName) {
        switch(providerName) {
            case 'Google' : 
            return this.googleProvider;

            case 'GitHub' :
            return this.githubProvider;

            default:
                throw new Error('not supported provider')
        }
    }

    //⭐로그인은 getProvider함수의 상태에 따라 변화한다.
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return signInWithPopup(this.firebaseAuth, authProvider);
    }
}

export default AuthService;