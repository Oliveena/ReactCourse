import React from "react";
import Panel from "./components/Panel";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light text-center">
      <header className="bg-dark py-4">
        <Intro />
      </header>

      <main className="container my-5">
        <div className="row justify-content-center g-4">
          <div className="col-md-4 d-flex justify-content-center">
            <Panel image="/alexa.png" name="Alexa" aerobase="alexa99" creator="Amazon" />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <Panel image="/cortana.png" name="Cortana" aerobase="alexa32" creator="Microsoft" />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <Panel image="/siri.png" name="Siri" aerobase="siri01" creator="Apple" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

