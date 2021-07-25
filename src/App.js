import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Welcome!</h1>

        <p>This is my MUI Tailwind website!</p>

        <div>
          <Button variant="contained" color="primary">
            Button
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
