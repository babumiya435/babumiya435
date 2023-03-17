import './App.css';
import { Button, TextField } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <div className='container'>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <Button color="primary" variant="contained"> Press me </Button> 
      </div>
      <div>
        <AccountCircle/>
      </div>
    </div>
  );
}

export default App;
