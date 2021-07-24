import {useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Cart from './cart'
import Home from './Home'
import {BroswerRouter,Switch,Route,Path} from 'react-router-dom'
import {auth, db } from './firebase'
import Login from './Login'
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const[cartItems,setCartItems] = useState([])
  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems);
    })
  }
  useEffect(() => {
    getCartItems();
  }, [])
  const signOut =() =>{
      auth.signOut().then(() =>{
          localStorage.removeItem('user');
          setUser(null)
      })
  }


  return (
      !user?(
        <Login setUser = {setUser}/>
      ):(
        <div className="App">
      <Header user={user} signOut={signOut} cartItems ={cartItems}/>
      <Switch>
          <Route path='/cart'><Cart cartItems={cartItems}/></Route>
          <Route path='/'><Home/></Route>
      </Switch>
      </div>
      )
  )
    
}

export default App;

