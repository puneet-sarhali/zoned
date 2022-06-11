import { Injectable } from '@angular/core';
import { 
    Firestore, 
    collection, 
    collectionData,
    doc,
    docData, 
    setDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userCollectionRef = collection(this.firestore, 'users')
  constructor(private firestore: Firestore) { }

  getUserData(uid: string){
    const userData = collectionData(this.userCollectionRef) as Observable<any>;
    userData.subscribe((data)=>{
      console.log(data);
    })
  }

  setUserData(uid: string){
    setDoc(doc(this.userCollectionRef, uid), {
      name: "sandhu",
      uni: "SFU"
    })
  }
}
