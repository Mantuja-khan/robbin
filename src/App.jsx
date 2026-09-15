import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/index";
import AboutPage from "./routes/about";
import ServicesPage from "./routes/services";
import { HospitalityServicePage } from "./routes/services.hospitality";
import { CateringServicePage } from "./routes/services.catering";
import CertificatesPage from "./routes/certificates";
import GalleryPage from "./routes/gallery";
import ClientsPage from "./routes/clients";
import CareerPage from "./routes/career";
import ContactPage from "./routes/contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/hospitality" element={<HospitalityServicePage />} />
      <Route path="/hospitality" element={<HospitalityServicePage />} />
      <Route path="/services/catering" element={<CateringServicePage />} />
      <Route path="/catering" element={<CateringServicePage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/career" element={<CareerPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
