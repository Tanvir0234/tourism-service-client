
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import AddServisec from './Components/AddServices/AddServisec';
import Admin from './Components/Admin/Admin';
import Contact from './Components/Contact/Contact';
import AuthProvider from './Components/Context/AuthProvider';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import MyOrders from './Components/MyOrders/MyOrders';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Services from './Components/Services/Services';
import Details from './Details/Details';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
       </Route>
        <Route exact path ="/home">
          <Home></Home>
       </Route>
        <Route exact path ="/services">
          <Services></Services>
       </Route>
        <Route exact path ="/login">
          <Login></Login>
       </Route>
        <Route exact path ="/manageOrder">
         <ManageOrders></ManageOrders>
       </Route>
        <Route exact path ="/myOrders">
        <MyOrders></MyOrders>
       </Route>
        <Route exact path ="/addService">
        <AddServisec></AddServisec>
       </Route>
        <Route exact path ="/contactUs">
        <Contact></Contact>
       </Route>
        <Route exact path ="/admin">
        <Admin></Admin>
       </Route>
        <Route exact path ="/placeOrder">
        <PlaceOrder></PlaceOrder>
       </Route>
        <Route exact path ="/details/:serviceId">
        <Details></Details>
       </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
