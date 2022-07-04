import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './routes/MainPage';
import Detail from './routes/Detail';
import MovieDetail from './routes/MovieChartPage';

function App() {

  return (<Router>
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route path={`${process.env.PUBLIC_URL}/movie`} element={<MovieDetail />} />
      {/* <Route path="/movie/:id" element={<Detail/>}/> */}
    </Routes>
  </Router>);
}

export default App;
