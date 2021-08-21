import './App.css';

import { Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Faq from './components/Pages/FAQ/Faq';
import AboutTW from './components/Pages/AboutTW/AboutTW';
import AboutRec from './components/Pages/AboutRec/AboutRec';
import Apply from './components/Pages/Apply/Apply';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/frequently-asked-questions" component={Faq} />
      <Route path="/about-tomasinoweb" component={AboutTW} />
      <Route path="/about-recruitment" component={AboutRec} />
      <Route path="/apply" component={Apply} />
    </Layout>
  );
}

export default App;
