import Welcome from '../components/Welcome';
import Home from '../components/Home';
import { useSelector } from 'react-redux';

function Index() {

  const user = useSelector((state) => state.user.value);

  return user.token ? <Home /> : <Welcome />;
}

export default Index;
