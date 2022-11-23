import './App.css';
import SignUp from './Components/SignUp';
import { ThemeProvider,createTheme} from '@mui/material/styles';
import {BrowserRouter} from 'react-router-dom';
import Login from './Components/Login';
function App() {
  const theme = createTheme();
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
         {/* <SignUp/> */}
         <Login/>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
