
import './App.css';
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}
function Profile1() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Katherine Johnson"
    />
  );
}
function Profile2() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    
    <section  className="App-header">
      <header className="header1"> List of scientists ! </header>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile1 />
      <Profile2 />
    </section>
  );
}
