import { Link, Switch, Route } from "react-router-dom";
import MainNavigtion from "./components/layout/MainNavigation";
import AllocatedLH from "./components/AllocatedLH";
import ShowAllLH from "./components/ShowAllLH";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/lecturehall/all">
            <ShowAllLH />
          </Route>
          <Route path="/lecturehall/available">
            <AllocatedLH />
          </Route>
          <Route path="/lecturehall">
            <App />
          </Route>
        </Switch>
      </Layout>
  );
}
