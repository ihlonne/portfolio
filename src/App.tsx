import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
