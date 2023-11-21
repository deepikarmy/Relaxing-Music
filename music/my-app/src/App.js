import React from "react";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <div className="grid-container">
        <Card
          image="https://cdn.pixabay.com/photo/2016/06/16/13/00/rain-stoppers-1461288_1280.jpg"
          heading="RAIN SOUNDS"
          audio="music/rain.mp3"
        />

        <Card
          image="https://cdn.pixabay.com/photo/2020/02/05/13/02/waterfalls-4821153_1280.jpg"
          heading="WATER FLOWING"
          audio="music/water.mp3"
        />
        <Card
          image="https://media.istockphoto.com/id/113494458/photo/fire-isolated-over-black-background.jpg?s=612x612&w=0&k=20&c=u6STGsSpJAyBN8kDeqnVUla4-0SnLpdaTsehFsey2p0="
          heading="FIRE FLAMES"
          audio="music/fire.mp3"
        />
        <Card
          image="https://media.istockphoto.com/id/183412466/photo/eastern-bluebirds-male-and-female.jpg?s=612x612&w=0&k=20&c=6_EQHnGedwdjM9QTUF2c1ce7cC3XtlxvMPpU5HAouhc="
          heading="BIRD CHIRPING"
          audio="music/bird.mp3"
        />
        <Card
          image="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/ZEFIRO-a-bullet-train.jpg"
          heading="TRAIN SOUNDS"
          audio="music/train.mp3"
        />
        <Card
          image="https://images.theconversation.com/files/358150/original/file-20200915-18-1949weq.jpg?ixlib=rb-1.1.0&rect=40%2C8%2C5399%2C3612&q=45&auto=format&w=926&fit=clip"
          heading="ASMR"
          audio="music/asmr.mp3"
        />

        <Card
          image="images/sleep.jpg"
          heading="DEEP SLEEP"
          audio="music/sleep.mp3"
        />
        <Card
          image="https://imgs.search.brave.com/Xk-6Shchg7aJzaMRk1Nwf8kY9KJLzRwSKu6hnnOAvmA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zcHJpbmctZm9y/ZXN0LXRyZWVzLW5h/dHVyZS1ncmVlbi13/b29kLXN1bmxpZ2h0/LWJhY2tncm91bmRz/XzkzMjAwLTQ4NjYu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
          heading="JUST RELAX"
          audio="music/relax.mp3"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
