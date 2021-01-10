import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getNews } from './action/newsAction/newsAction'
import NewsDetails from './components/NewsDetails/NewsDetails'
import ElectionNews from './components/ElectionNews/ElectionNews'
import HealthcareNews from './components/HealthcareNews/HealthcareNews'
import WorldNews from './components/WorldNews/WorldNews'
import Login from './components/LogReg/Login'
import Register from './components/LogReg/Register'
import CreateNews from './components/Admin/CreateNews'
import AllNews from './components/Admin/AllNews'




function App() {
  const dispatch = useDispatch()
  const [id, setId] = useState(0)
  const [callback, setCallback] = useState(false)

  useEffect(() => {
    dispatch(getNews())
  }, [id, dispatch, callback])

  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/world">
          <WorldNews />
        </Route>
        <Route exact path="/election">
          <ElectionNews />
        </Route>
        <Route exact path="/healthcare">
          <HealthcareNews />
        </Route>
        <Route exact path="/newsDetails/:id">
          <NewsDetails />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/admin/create">
          <CreateNews id={id} setId={setId} callbacks={[callback, setCallback]} />
        </Route>
        <Route exact path="/admin/allNews">
          <AllNews setId={setId} />
        </Route>
      </Router>

    </>
  );
}

export default App;
