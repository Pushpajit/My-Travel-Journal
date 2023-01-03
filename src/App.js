import './App.css';
import Navbar from './components/Navbar';
import ListItem from './components/ListItem';
import data from './data';

import australia from './images/img1.jpg';
import poland from './images/img2.jpg';
import india from './images/img3.jpg';
import thailand from './images/img4.jpg';
import Okinawa from './images/img5.jpg';
import fuji from './images/img6.jpg';

function App() {
  const pic = [fuji, australia, poland, india, thailand, Okinawa]
  const setpage = data.map((item, ind) => {
    return <ListItem 
      image = {pic[ind]} 
      {...item}
    />
  })

  return (
    <div className="container">
      <Navbar />
        {setpage}
    </div>
  );
}

export default App;
