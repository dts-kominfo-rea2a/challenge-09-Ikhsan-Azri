import './App.css';

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';
import Contact from './components/Contact';
import Header from './components/Header';
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  const arrContact = contacts.map((e,i)=>{
    return <Contact data={e} key={i}/>;
  });
  
  return (
    <div className="App">
      <Header/>
      {/* <Contact data={contacts[0]}/> */}
      {/* <Contact data={contacts[1]}/>
      <Contact data={contacts[2]}/>
      <Contact data={contacts[3]}/>
      <Contact data={contacts[4]}/>
      <Contact data={contacts[5]}/> */}
      {arrContact}
    </div>
  );

}

export default App;
