 import './App.css';
 import instance from './axios';
 import request from './request';

 instance.get(request.fetchTopRated).then(data => console.log(data))

function App() {
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
