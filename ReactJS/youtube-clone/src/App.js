import './App.css';
import { Button, TextField } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Header from './Header';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <div className='container'>
        <TextField id="outlined-basic" label="User Name" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button color="primary" variant="contained"> Log In </Button> 
      </div>
      <div className='signInIcon'>
        <AccountCircle/>
      </div>
      <div>
        <Blog />
      </div>
    </div>
    
  );
}

export default App;
