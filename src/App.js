import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';
import axiosInstance from './helpers/Axios'
import { Grid } from '@mui/material';
function App() {




  return (
    <div className="App">
      <Grid container>
        <Grid item xs={8}>
           <Products/>
         </Grid>
        <Grid item xs={2}>
          <Cart />
         </Grid>
      </Grid>
    </div>
  );
}

export default App;