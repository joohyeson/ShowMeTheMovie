import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './routes/MainPage';
import Detail from './routes/Detail';
import MovieChartPage from './routes/MovieChartPage';
import MovieDetailPage from './routes/MovieDetailPage';


function App() {

  return (<Router>
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route path={`${process.env.PUBLIC_URL}/movies`} element={<MovieChartPage />} />
      <Route path={`${process.env.PUBLIC_URL}/movies/detail-view`} element={<MovieDetailPage/>}/>
      {/* <Route path="/movie/:id" element={<Detail/>}/> */}
    </Routes>
  </Router>);
}

export default App;
