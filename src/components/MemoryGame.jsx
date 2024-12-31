import { useState } from "react";
import _ from "lodash";
import Gray from './../Pictures/grey.jpg';

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

const MemoryGame = ({ images }) => {
  const [imgs, setImgs] = useState(images.map((image) => {
    return { 
      image: image, 
      gray: true, 
      id: uuidv4(),
      won: false,
    }
  }));
  const [pic, setPic] = useState({id: '', image: ''});

  const shuffle = () => {
    const gray = imgs.map((img) => {
      return {
        image: img.image,
        id: img.id,
        gray: true,
        won: false,
      }
    })
    setImgs(_.shuffle(gray))
  };
  
  const flip = (image) => {
    const win = image.image === pic.image && image.id != pic.id;
    const result = imgs.map((img) => {
      return (img.id === image.id )
      ?  {
        image: img.image,
        id: img.id, 
        gray: false,
        won: win,
        }
      : {
        image: img.image,
        id: img.id, 
        gray: img.image === pic.image && win ? false : true,
        won: img.won || (img.image === pic.image && win)
      }
    });
    setImgs(result);
    setPic(image);
  }

  return (
    <div>
      <div style={{ display: 'flex', padding: "10px" }}>
        <button style={ { height: '30px'}} onClick={ shuffle }>Shuffle</button>
        <h2 style={ { padding: '10px'}}>Memory Game</h2>
      </div>
      {Array.isArray(imgs) && imgs.map((image) => (
        <img
          key={image.id}
          src={!image.gray || image.won ? image.image : Gray }
          style={{ width: "150px", padding: "10px" }}
          onClick={() => flip(image)}
        />
      ))}
    </div>
  );
};

export default MemoryGame;
