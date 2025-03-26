import React from "react";
import AboutArea from "../../components/About/AboutArea";
import BannerOne from "../../components/Banner/BannerOne";
import ConsultationArea from "../../components/Consultation/ConsultationArea";
import ProjectArea from "../../components/Project/ProjectArea";
import TeamArea from "../../components/Team/TeamArea";
import TestimonialArea from "../../components/Testimonial/TestimonialArea";
import Layout from "../../layouts/Layout";
import FaqSection from "../../components/QAFs/FaqSection"; // FAQ Section
import ServicesSection from "../../components/Services/ServicesSection";
import CroServicesSection from "../../components/CRO/CroServicesSection";
import CompanyLogosSection from "../../components/Technology/CompanyLogosSection";

const CreativeAgency = () => {

  return (
    <Layout header={1} footer={1}>
      <BannerOne />
      <CroServicesSection />
      <ServicesSection />
      <AboutArea />
      <CompanyLogosSection />
      <TeamArea />
      <ProjectArea />
      <TestimonialArea />
      <ConsultationArea />
      <FaqSection />
    </Layout>
  );
};

export default CreativeAgency;
