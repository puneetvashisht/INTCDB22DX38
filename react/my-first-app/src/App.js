import logo from './logo.svg';
import './App.css';
import Message from './Message';
import Badge from './Badge';

function App() {
  return (
    <div className="App">
      <Message></Message>
      <Badge caption="Inbox"></Badge>
      <Badge caption="Sent"></Badge>
    </div>
  );
}

export default App;
