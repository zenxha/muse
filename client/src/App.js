import Home from './routes/Home';
import About from './routes/About';
import Nav from './components/Nav'
import Login from './routes/Login';
import Profile from './routes/Profile'
import SignUp from './routes/Signup';

import {
  useParams,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <>
    <Nav />
    <div className="App App-header">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<ProfilePageWithUserId/> } />
        <Route path="/create_account" element={<SignUp />} />
      </Routes>
    </div>

    </>
  );
}
function ProfilePageWithUserId() {
  const { username } = useParams();
  return <Profile username={username} />;
}

export default App;
