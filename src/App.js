
import Slack from './assets/slack.svg';
import Github from './assets/github.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <main className="profile">
        {/* Profile Section */}
        <Header />
        
        {/* The Links section */}
        <section className='profile-links'>
         
          <a
            id="btn__twitter"
            href="https://twitter.com/CDamiiisi"
          >
           Twitter Link
          </a>
          <a
            id="btn__zuri"
            href="https://training.zuri.team/"
          >
           Zuri Team
          </a>
          <a
            id="books"
            href="http://books.zuri.team"
          >
           Zuri Books
           {/* <small>Find books about design and coding.</small> */}
          </a>
          <a
            id="book__python"
            href="https://books.zuri.team/python-for-beginners?ref_id=tolumic"
          >
           Python Books
           <small></small>
          </a>
          <a
            id="pitch"
            href="https://background.zuri.team"
          >
           Background Check for Coders
           <small></small>
          </a>
          <a
            id="book__design"
            href="https://books.zuri.team/design-rules"
          >
           Design Books
          </a>

        </section>

        <section className='social-section'>
          <a className='' href='https://slack.com'>
            <img src={Slack} alt='slack icon' />
          </a>

          <a className='' href='https://github.com/damisi00'>
            <img src={Github} alt='github icon' />
          </a>

        </section>
      </main>
     <Footer />
    </div>
  );
}

export default App;
