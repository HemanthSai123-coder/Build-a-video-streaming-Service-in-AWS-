import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Welcome to My Video Streaming Site</h2>
      <video width="700px" height="400px" controls>
        <source src="https://d3m8y1hfxsx06h.cloudfront.net/video_20230213_103623.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
