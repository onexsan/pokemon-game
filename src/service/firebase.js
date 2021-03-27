import firebase from "firebase/app";
import 'firebase/database'

// const firebaseConfig = {
//   apiKey: "AIzaSyC411SaJoccTFNj6jFrlQK9ttFq62tBwdo",
//   authDomain: "pokemon-game-5f89d.firebaseapp.com",
//   databaseURL: "https://pokemon-game-5f89d-default-rtdb.firebaseio.com",
//   projectId: "pokemon-game-5f89d",
//   storageBucket: "pokemon-game-5f89d.appspot.com",
//   messagingSenderId: "472757784550",
//   appId: "1:472757784550:web:f67db61ae227666a07d027"
// };

var firebaseConfig = {
  apiKey: "AIzaSyDMhHpaqH4A_UKwamUed8aqvz58YMupAac",
  authDomain: "new-poke-game.firebaseapp.com",
  projectId: "new-poke-game",
  storageBucket: "new-poke-game.appspot.com",
  messagingSenderId: "749710256007",
  appId: "1:749710256007:web:ccde0f68b2f2e1ba341522"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSocket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val())
    })
  }

  offPokemonSocket = () => {
    this.database.ref('pokemons').off();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
  }
}

export default Firebase;

