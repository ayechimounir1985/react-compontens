import ProfilePhotos from './Components/ProfilePhotos'
import Adresse from './Components/Adresse'
import Fullname from './Components/Fullname';
import './App.css'
import aaaa from './Components/Image.jpg'

function App() {
  return (
    <form style={{width:'500px',color:'blue'}}>
    <div className="App">
   <ProfilePhotos>
   <img src={aaaa} alt="img" width='400px'/>
   </ProfilePhotos>
   <Fullname name={'AYACHI MOUNIR'}/>
   <Adresse Adress='Cite Eskan Benarous Tunis'/>
    </div>
    </form>
  );
}

export default App;
