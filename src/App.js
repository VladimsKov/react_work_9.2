import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react"
import './App.css';
import { LinkContext } from './contexts/LinkContext';
import List from './components/List';
import ListItemView from './components/ListItemView';
import ListItemCreate from './components/ListItemCreate';
import { getData } from './requests';

function App() {
  const { baseUrl } = useContext(LinkContext);
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getData(`${baseUrl}/posts`, setList)
  }, [update])

  return (
    <Router>
      <div className="container">
        <Link to='/'><h2 className="header">Список постов</h2></Link>
        <Link to='/posts/new'><button className="btn create-btn">Создать пост</button></Link>
        <div className='posts'>
          <Routes>
            <Route path='/' element={<List list={list} />} />
            <Route path='/posts/:id' element={<ListItemView list={list} setUpdate={setUpdate} />} />
            <Route path='/posts/new/' element={<ListItemCreate setUpdate={setUpdate} />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
