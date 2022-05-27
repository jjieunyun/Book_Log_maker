import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
} from 'firebase/auth'



class AuthService {
    constructor(){
        this.firebaseAuth = getAuth();
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    }

    //🍎로그인할때 로그인 하는 방법에 따라 구분
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

    //🍎로그인 처리 함수
    //⭐로그인은 getProvider함수의 상태에 따라 변화한다.
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return signInWithPopup(this.firebaseAuth, authProvider);
    }

    //🍎사용자의 로그인정보를 가져오는 함수
    //⭐사용자가 이미 로그인 되어있는 경우라면 기존의 로그인 정보를 가져와 준다
    onAuthChange(onUserChanged){
        this.firebaseAuth.onAuthStateChanged((user)=> {
            onUserChanged(user);
        })
    }

    //🍎로그아웃 처리 함수
    logout() {
        //⭐firebaseApp에서 기본적으로 제공하는 api를 사용할것!
        this.firebaseAuth.signOut();
    }
}

export default AuthService;