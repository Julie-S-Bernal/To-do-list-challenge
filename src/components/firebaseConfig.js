import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const configuration = {
    apiKey: "AIzaSyCHzzNSC8Jz7y3mrGUsje-lVm_Sw9w9RNE",
    authDomain: "to-do-list-challenge.firebaseapp.com",
    databaseURL: "https://to-do-list-challenge.firebaseio.com",
    projectId: "to-do-list-challenge",
    storageBucket: "to-do-list-challenge.appspot.com",
    messagingSenderId: "690206682060",
    appId: "1:690206682060:web:8866e04172fb76152c0b69"
};

class FirebaseConfig{
    constructor(){
        firebase.initializeApp(configuration);
        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
    }

    async register(email,password){
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
          console.log(error);
        });
        return user;
    }

    async login(email,password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log(error);
        });
        return user;
    }

    async getUser(){
    return new Promise(resolve =>{
        this.auth.onAuthStateChanged(resolve);
    })};

    async logout(){
        await firebase.auth().signOut().catch(error => {
            console.log(error);
        });
    }

    async createToDo(toDo){
        let newToDo = {
            id: toDo.id,
            title: toDo.name,
            description: toDo.description,
            creationDate: toDo.creationDate,
        }
        debugger;
        const firebaseToDo = await firebase.firestore().collection('todos').add(newToDo).catch(error => {
          console.log(error);
        });
        return firebaseToDo;
        }

    async getToDos(){
        let toDoItems = [];
        const toDos = await firebase.firestore().collection('todos').get()
        toDos.forEach(item => {
            toDoItems.push({id:item.id, data:item.data() });
        })
        return toDoItems;
    }

    // async getToDo(toDoId){
    //     const toDo = await firebase.firestore().collection('todos').doc([toDoId].get());
    //     const toDoItem = toDo.data();
    //     return toDoItem;
    // }
}

export default new FirebaseConfig();
