import Button from '../components/Button';
import Nav from '../components/Nav';
import styles from '../App.css';

const Home = ({onClick, text}) => {
  return (
    <div className={styles.app}>
        <Nav />
        <p>
          Hello there
        </p>
        <a
          className="App-link"
          href="https://github.com/zenxha/muse"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
        <Button text="Cat Fact" onClick={onClick}/>
        {text}
    </div>
  );
}

export default Home;