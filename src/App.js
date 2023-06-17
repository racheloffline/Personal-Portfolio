import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CustomButton from "./components/CustomButton";
import { ThemeProvider, createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import NavBar from "./components/NavBar";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
