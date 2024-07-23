import { v4 as uuidv4 } from 'uuid';
function chillHop() {
  return [
    {
      name: "L'aventure",
      cover: "https://cms.chillhop.com/media/58779/squarel4f3665cbc74b2504a4ddf5a74188379f0f51a009.jpg",
      artist: "Enough Cereals",
      audio: "https://mp3.chillhop.com/serve.php?mp3=10075",
      color: ["#453DAA","#382C20"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Full Circle",
      cover: "https://cms.chillhop.com/media/69973/squarelb9075e97e63fed13651caac3821fecdc024d77ab.jpg",
      artist: "Enough Cereals",
      audio: "https://mp3.chillhop.com/serve.php?mp3=35507",
      color: ["#D8AA96","#A24E36"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "L'aventure",
      cover: "https://cms.chillhop.com/media/58779/squarel4f3665cbc74b2504a4ddf5a74188379f0f51a009.jpg",
      artist: "Enough Cereals",
      audio: "https://mp3.chillhop.com/serve.php?mp3=10075",
      color: ["#453DAA","#382C20"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Full Circle",
      cover: "https://cms.chillhop.com/media/69973/squarelb9075e97e63fed13651caac3821fecdc024d77ab.jpg",
      artist: "Enough Cereals",
      audio: "https://mp3.chillhop.com/serve.php?mp3=35507",
      color: ["#D8AA96","#A24E36"],
      id: uuidv4(),
      active: false,
    },
  ]
}

export default chillHop;