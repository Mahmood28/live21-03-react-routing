import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router-dom";

const App = ({ instructors }) => {
  return (
    <AppWrapper>
      <Switch>
        <Route path="/instructors/:instructorSlug">
          <InstructorProfile instructors={instructors} />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route path="/:slug?">
          <Home instructors={instructors} />
        </Route>
      </Switch>
    </AppWrapper>
  );
};

export default App;
