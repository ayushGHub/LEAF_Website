import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Paymentpage from './components/Payments/Payments';
import Aboutpage from './components/Aboutpage/Aboutpage';
import Visionpage from './components/Visionpage/Visionpage';
import Team from './components/Team/Team';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Impactpage from './components/Impactpage/Impactpage';
import Infopage from './components/Infopage/Infopage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/payments' component={Paymentpage} />
        <Route exact path='/vision' component={Visionpage} />
        <Route exact path='/about' component={Aboutpage} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/impact' component={Impactpage} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/info' component={Infopage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
