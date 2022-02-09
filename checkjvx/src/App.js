import logo from './logo.svg';
import './App.css';
import src from './FullMoon2010.jpg';
import myvideo from './this is me.mp4'

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>

<h1 className="title red">Your name here</h1>

<br/>

<img src={src} />

<br />

<img src="logo192.png"/>

</div>

<video width="320" height="240" controls>

<source src={myvideo} type='video/mp4' />

</video>
    </div>
  );
}

export default App;
