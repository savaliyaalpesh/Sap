
import './App.css';
import { Routes, Route } from 'react-router';
import Header from './Componets/Header';
import Industries from './Componets/who/Industries'
import Company from './Componets/who/Company'
import Leadership from './Componets/who/Leadership'
import RISEwithSAP from './Componets/Solution/RISEwithSAP'
import Migration from './Componets/Solution/Migration';

import Main from './Componets/Main';
import Expertise from './Componets/Expertise'
import Technologies from './Componets/Technologies';
import Testimonial from './Componets/Testimonial'
import Faqs from "./Componets/Faqs"
import Form from "./Componets/Form"
import Footer from './Componets/Footer'
import Exim from './Componets/Solution/Exim';



function App() {
  return (
    <>
      <Header />


      <Routes>
        <Route path="/industries" element={<Industries />} />
        <Route path="/" element={<Company />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/rise-with-sap" element={<RISEwithSAP />} />
        <Route path="/s4hana-migration" element={<Migration />} />
        <Route path="/exim" element={<Exim />} />

        {/* <Route path="/fiori-consultants" element={<Leadership />} />
        <Route path="/successfactors-integration" element={<Leadership />} />
        <Route path="/openui5-demo" element={<Leadership />} />
        <Route path="/consulting-services" element={<Leadership />} />
        <Route path="/technical" element={<Leadership />} />
        <Route path="/migration" element={<Leadership />} />
        <Route path="/ams-support" element={<Leadership />} />
        <Route path="/sap-btp" element={<Leadership />} />
        <Route path="/knowledge-center" element={<Leadership />} />
        <Route path="/career" element={<Leadership />} />
        <Route path="/contact" element={<Leadership />} />
        <Route path="/blogs" element={<Leadership />} />
        <Route path="/ams-support" element={<Leadership />} />
        <Route path="/ams-support" element={<Leadership />} />
        <Route path="/ams-support" element={<Leadership />} /> */}
      </Routes>
      {/* <Main />
      <Expertise />
      <Technologies />
      <Testimonial />
      <Faqs /> */}
      <Form />
      <Footer />

    </>
  );
}

export default App;
