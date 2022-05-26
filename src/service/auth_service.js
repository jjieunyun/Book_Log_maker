import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/compat/auth'


class AuthService {
    constructor(){
        this.firebaseAuth =getAuth();
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    }
  login(providerName) {
    const authProvider = this.GoogleAuthProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }
}

export default AuthService