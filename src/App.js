import {Header, MovieInfo, MoviesList, UserInfo} from "./Components";
import {Route, Routes} from "react-router-dom";

import css from './App.module.css';
function App() {
  return (
    <div>
        <Header/>
        <div className={css.container}>
            <Routes>
                <Route path={'/'} element={<MoviesList/>}/>
                <Route path={':id/movieInfo'} element={<MovieInfo/>}/>
                <Route path={'/user'} element={<UserInfo/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
