import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);

  const modalOpen = () => {
    setModalShow(true);
  };

  const modalClose = () => {
    setModalShow(false);
  };

  return (
    <div id="app">
      <Header />
      <Main modalOpen={modalOpen} />
      <Footer />
      {modalShow && <Modal modalClose={modalClose} />}
    </div>
  );
}
export default App;
