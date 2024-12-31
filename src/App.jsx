import "./App.css";
import MemoryGame from "./components/MemoryGame";
import pic1 from './Pictures/Nature And Landscapes1.jpg'
import pic2 from './Pictures/Nature And Landscapes2.jpg'
import pic3 from './Pictures/Nature And Landscapes3.jpg'
import pic4 from './Pictures/Nature And Landscapes4.jpg'
import pic5 from './Pictures/Nature And Landscapes5.jpg'
import pic6 from './Pictures/Nature And Landscapes6.jpg'


function App() {
  const pictures = [
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
    "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
    "https://images.unsplash.com/photo-1520763185298-1b434c919102",
    "https://images.unsplash.com/photo-1442458017215-285b83f65851",
    "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
    "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    ];

    const images = [];
    pictures.map((pic) => images.push(pic));
    pictures.map((pic) => images.push(pic));


  return (
    <MemoryGame
      images={images}
    />
  );
}

export default App;
