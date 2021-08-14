import { BrowserRouter, Switch, Route } from "react-router-dom";
import Video from "./conponents/Pages/Video";
import Home from "./conponents/Pages/Home";
import NavBar from "./conponents/NavBar";
import HM_Index from "./conponents/Pages/HM_Index";
import DLR_Index from "./conponents/Pages/DLR_Index";
import MDM_Index from "./conponents/Pages/MDM_Index";
import SD_Index from "./conponents/Pages/SD_Index";
import PT_Index from "./conponents/Pages/PT_Index";
import Footer from "./conponents/Footer";
import Registro from "./conponents/Pages/Registro";
import Loading from "./conponents/Pages/Loading";
import ConfirmarCorreo from "./conponents/Pages/ConfirmarCorreo";
import MuroIngreso from "./conponents/MuroIngreso";


function App() {

  return (
    <>
    
    <BrowserRouter>
      
      <MuroIngreso />
      
      <NavBar />
        
        <Switch>
      
          <Route exact path="/" component={Home} />
          <Route exact path="/hola_mendoza" component={HM_Index} />
          <Route exact path="/desde_redaccion" component={DLR_Index} />
          <Route exact path="/mejor_maniana" component={MDM_Index} />
          <Route exact path="/septimo_dia" component={SD_Index} />
          <Route exact path="/para_todo" component={PT_Index} />
          <Route exact path="/play_video" component={Video} />
          <Route exact path="/loading" component={Loading}  />
          <Route exact path="/registro" component={Registro}  />
          <Route exact path="/users/verify/:uuid" component={ConfirmarCorreo} />
              
        </Switch>
        
      <Footer />
      
    </BrowserRouter>
    
    </>

  );
  
}

export default App;
