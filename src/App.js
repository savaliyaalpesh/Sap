
import './App.css';
import { Routes, Route } from 'react-router';
import Header from './Componets/Header';
import Industries from './Componets/who/Industries'
import Company from './Componets/who/Company'
import Leadership from './Componets/who/Leadership'
import RISEwithSAP from './Componets/Solution/RISEwithSAP'
import Migration from './Componets/Solution/Migration';
import Successfactors from './Componets/Solution/Successfactors';
import Exim from './Componets/Solution/Exim';
import Consultant from './Componets/Solution/Consultant';
import Consulting from './Componets/Consulting/Consulting-services';
import Sapams from './Componets/Consulting/Sapams'
import Sapbtp from './Componets/Consulting/Sapbtp'
import Form from "./Componets/Form"
import Footer from './Componets/Footer'
import Career from './Componets/Career';
import Contact from './Componets/Contact';
import Blogs from './Componets/Blogs';



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

        <Route path="/fiori-consultants" element={<Consultant />} />
        <Route path="/successfactors-integration" element={<Successfactors />} />
        <Route path="/consulting-services" element={<Consulting />} />
        {/* <Route path="/technical" element={<Leadership />} />
        <Route path="/migration" element={<Leadership />} /> */}
        <Route path="/ams-support" element={<Sapams />} />
        {/* <Route path="/sap-btp" element={<Sapbtp />} /> */}
        {/* <Route path="/knowledge-center" element={<Leadership />} /> */}
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/ams-support" element={<Leadership />} /> */}
        {/* <Route path="/ams-support" element={<Leadership />} /> */}
        {/* <Route path="/ams-support" element={<Leadership />} /> */}
      </Routes>

      <Form />
      <Footer />

    </>
  );
}

export default App;
