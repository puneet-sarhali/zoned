import { Injectable } from '@angular/core';
import {Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  authState,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState: boolean = false;
  constructor(private auth: Auth) { 
    authState(auth).subscribe(res=>{
      if(res == null){
        this.authState = false
      }else{
        this.authState = true;
      }
    })
  }

  createUser(email: string, password: string){
    createUserWithEmailAndPassword(this.auth, email, password).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.error("Couldn't create user:  " + err)
    })
  }

  signIn(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  get userId(){
    return this.auth.currentUser?.uid;
  }
  get email(){
    return this.auth.currentUser?.email;
  }

  signout(){
    signOut(this.auth).then((res) => {
      console.log("logged out")
    }).catch((err) => {
      console.log("error logging out " + err)
    })
  }

  get isAuthenticated(){
    return this.authState;
  }
}
