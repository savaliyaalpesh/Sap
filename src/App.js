
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
import SapDevelopment from './Componets/Consulting/Techanical/SapDevelopment';
import SapBasis from './Componets/Consulting/Techanical/SapBasis';
import BoService from './Componets/Consulting/Techanical/BoService';
import PiPoConsultant from './Componets/Consulting/Techanical/Pi-PoConsultant';
import DataServices from './Componets/Consulting/Techanical/DataServices';
import HanaMigration from './Componets/Consulting/Migration/HanaMigration';
import CloudService from './Componets/Consulting/Migration/CloudService';
import DBMigration from './Componets/Consulting/Migration/DBMigration';



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

        {/* technical */}
        <Route path="/sap-abap-development-consultant" element={<SapDevelopment />} />
        <Route path="/sap-basis-consultantation-service" element={<SapBasis />} />
        <Route path="/sap-bi-bo-consultantation-service" element={<BoService />} />
        <Route path="/sap-cpi-pi-po-consultant" element={<PiPoConsultant />} />
        <Route path="/sap-data-services-designer" element={<DataServices />} />

        {/* migration */}
        <Route path="/ecc-to-s4-hana-data-migration" element={<HanaMigration />} />
        <Route path="/sap-on-premise-to-cloud-migration" element={<CloudService />} />
        <Route path="/os-db-migration-sap" element={<DBMigration />} />

        <Route path="/ams-support" element={<Sapams />} />
        <Route path="/sap-btp" element={<Sapbtp />} />

        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />





      </Routes>

      <Form />
      <Footer />

    </>
  );
}

export default App;
