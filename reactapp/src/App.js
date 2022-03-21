import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-warning" id="userNavbar">
     <div class="container-fluid" >
    <a class="navbar-brand" href="#">Instrument Delight</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    &nbsp;&nbsp;
    <div class=" collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
        <FaHome size={30}/>
        </li>
        <li class="nav-item ">
          //comment
          <a class="nav-link" href="/components/counter" id="instrumentHomeButton">HOME </a>
        </li>
        &nbsp;&nbsp;
        <li class="nav-item">
        < BsFillCartFill size={25}/>
        </li>
        <li class="nav-item">
       
          <a class="nav-link" href="#" id="instrumentCartButton">CART</a>
        </li>
        &nbsp;&nbsp;
        <li class="nav-item">
        <img src="https://img.icons8.com/ios-filled/50/000000/edit-online-order.png" width={30}/>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="instrumentCartButton">MyOrder</a>
        </li>
      </ul>
      </div>
      <div class=" collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto ">
        <li >
          <BiLogOut size={35}/>
        </li>
        <li class="nav-item ">
      <a class="nav-link " href="#" id="logoutButton" >Logout</a></li>
      </ul>
    </div>
    </div>
  </nav>
  </div>
  );
}

export default App;
