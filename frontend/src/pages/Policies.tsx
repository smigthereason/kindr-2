import React, { useState } from "react";
import styled from "styled-components";
import backgroundImage from "../assets/faq.jpg"; // Use a similar background image or a different one

const PlatformPolicies: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const togglePolicy = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const policyItems = [
    {
      title: "Privacy Policy",
      content:
        "We are committed to protecting your privacy. Learn how we handle your data and maintain confidentiality. Our Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to ensure its security. We do not sell or share your personal information with third parties without your consent, and we comply with all relevant data protection laws to safeguard your rights.",
    },
    {
      title: "Refund Policy",
      content:
        "Understand the conditions under which refunds can be processed for donations made. Our Refund Policy ensures transparency in the donation process. While donations are generally considered final, we allow for refunds in cases of processing errors, fraudulent activity, or if a donation was made in error. Please contact our support team within 30 days of the transaction to initiate a refund.",
    },
    {
      title: "Data Security",
      content:
        "Discover our data protection practices to ensure your information is safe and secure. We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. This includes encryption, secure servers, and regular security audits. We are dedicated to maintaining the integrity of your data and continuously improving our security practices.",
    },
  ];

  return (
    <PoliciesContainer>
      <PoliciesBackground />
      <PoliciesContent>
        <PoliciesTitle>Platform Policies</PoliciesTitle>
        <PoliciesItems>
          {policyItems.map((item, index) => (
            <PolicyItem key={index}>
              <PolicyTitle onClick={() => togglePolicy(index)}>
                {item.title}
              </PolicyTitle>
              <PolicyContent isActive={activeIndex === index}>
                {item.content}
              </PolicyContent>
            </PolicyItem>
          ))}
        </PoliciesItems>
      </PoliciesContent>
    </PoliciesContainer>
  );
};

export default PlatformPolicies;

const PoliciesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PoliciesBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
background: linear-gradient(
    180deg,
    rgba(188, 165, 255, 0) 0%,
    #0d18208a 100%
  );
  z-index: -1;
`;

const PoliciesContent = styled.div`
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8 / 12%);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const PoliciesTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #ffffff;
`;

const PoliciesItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PolicyItem = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const PolicyTitle = styled.button`
  background: none;
  border: none;
  color: #f79030;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  cursor: pointer;
  outline: none;
`;

const PolicyContent = styled.div<{ isActive: boolean }>`
  margin-top: 10px;
  color: #fff;
  font-size: 1.25rem;
  text-align: center;
  max-height: ${(props) =>
    props.isActive ? "200px" : "0"}; /* Adjust max-height as needed */
  overflow: hidden;
  transition: max-height 1s ease-out;
`;
