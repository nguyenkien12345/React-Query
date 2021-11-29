import { Route, Switch } from 'react-router-dom';
import { BookList } from './BookList';
import { CreateBook } from './CreateBook';
import { Navbar } from './Shared/Navbar';
import { UpdateBook } from './UpdateBook';

function App() {
  
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path='/create-book' component={CreateBook}/>
        <Route path='/update-book/:id' component={UpdateBook}/>
        <Route path='/' component={BookList}/>
      </Switch>
    </>
  );

}

export default App;
