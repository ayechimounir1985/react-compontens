import ProfilePhotos from './Components/ProfilePhotos'
import Adresse from './Components/Adresse'
import Fullname from './Components/Fullname';
import './App.css'
function App() {
  return (
    <form style={{width:'500px',color:'blue'}}>
    <div className="App">
   <ProfilePhotos/>
   <Fullname/>
   <Adresse/>
    </div>
    </form>
  );
}

export default App;
