import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import TalkToUsForm from "./TalkToUsForm";

function Home() {
  let homePageMsg = "Coming from Home Page";
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
        <div className="col-6 pt-5">
          <h4>Dream Software job in 6 months</h4>
          <p>Learn in demand skills from industry experts.</p>
        </div>
        <div className="col-6 pt-5">
          <TalkToUsForm message={homePageMsg} />
        </div>
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
