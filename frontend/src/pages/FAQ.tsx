import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/faq.jpg';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    // FAQ items...
    { question: "How can I make a donation?",
      answer: "You can make a donation by clicking the 'Donate' button on our homepage. You'll be guided through a simple process where you can choose the amount, frequency, and payment method for your donation.",
    },
    {
        question: "Is my donation tax-deductible?",
        answer: "Yes, all donations made through our platform are tax-deductible. You will receive a receipt via email after your donation, which you can use for tax purposes.",
      },
      {
        question: "Can I choose where my donation goes?",
        answer: "Absolutely! During the donation process, you can select a specific program or cause you'd like to support. If you don't have a preference, your donation will go to our general fund, which supports a variety of projects.",
      },
      {
        question: "How do I know my donation is being used effectively?",
        answer: "We are committed to transparency. You can view detailed reports on our website that show how donations are being used. We also share impact stories and updates from the field so you can see the difference your contribution is making.",
      },
      {
        question: "Can I set up a recurring donation?",
        answer: "Yes, you can set up a recurring donation during the donation process. Choose the frequency that works best for you, whether it's weekly, monthly, or annually. You can modify or cancel your recurring donation at any time through your account settings.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "For now we accept two payment methods PayPal and M-pesa money transfers. We are also working on adding more options for your convenience.",
      },
      {
        question: "How secure is my payment information?",
        answer: "Your security is our priority. We use industry-standard encryption and security protocols to ensure that your payment information is protected. We do not store your payment details on our servers.",
      },
      {
        question: "Can I donate anonymously?",
        answer: "Yes, if you prefer to keep your identity private, you can choose to donate anonymously during the checkout process. Your donation will still make a big impact, even if your name isn't attached to it.",
      },
      {
        question: "What happens if I need to cancel my donation?",
        answer: "You can cancel a donation by contacting our support team within 24 hours for a full refund. Recurring donations can be canceled at any time through your account settings.",
      },
      {
        question: "How can I get involved beyond donating?",
        answer: "There are many ways to get involved! You can volunteer your time, attend events, or even start a fundraising campaign. Visit our 'Get Involved' section to learn more about these opportunities.",
      },
      {
        question: "Can I donate in someone else's name?",
        answer: "Yes, you can make a donation in honor or memory of someone. During the donation process, you'll have the option to add a dedication, and we can notify the honoree or their family if you wish.",
      },
      {
        question: "How do I access my donation history?",
        answer: "You can access your donation history by logging into your account on our website. There, you'll find a detailed record of all your contributions along with receipts for each donation.",
      },
      {
        question: "What should I do if I encounter an issue with the app?",
        answer: "If you experience any issues while using the app, please contact our support team through the 'Contact Us' page. We're here to help and will respond to your inquiry as soon as possible.",
      },
  ];

  return (
    
    <FAQContainer id="faq">
      <FAQBackground />
      <FAQContent>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQItems>
          {faqItems.map((item, index) => (
            <FAQItem key={index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {item.question}
              </FAQQuestion>
              <FAQAnswer isActive={activeIndex === index}>
                {item.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQItems>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQ;

const FAQContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
`;

const FAQBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: url(${backgroundImage}) no-repeat center center/cover;
  z-index: -1;
`;

const FAQContent = styled.div`
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8 / 24%);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const FAQTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #ffffff;
`;

const FAQItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FAQItem = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden; /* Ensure that content doesn't overflow */
`;

const FAQQuestion = styled.button`
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

const FAQAnswer = styled.div<{ isActive: boolean }>`
  margin-top: 10px;
  color: #fff;
  font-size: 1.25rem;
  text-align: center;
  max-height: ${props => (props.isActive ? '200px' : '0')}; /* Adjust max-height as needed */
  overflow: hidden;
  transition: max-height 1s ease-out;
`;
