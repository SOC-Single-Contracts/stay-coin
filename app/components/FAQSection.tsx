import AccordionItem from './AccordionItem'; // Ensure the path is correct

const FAQSection = () => {
  const faqData = [
    {
      question: "What chain is $BEER on?",
      answer: "The $BEER token is on the Ethereum blockchain."
    },
    {
      question: "When is the Pre-Sale?",
      answer: "The pre-sale starts on July 10th, 2024."
    },
    {
      question: "Are there any discounts or rewards for Pre-Sale investors?",
      answer: "Yes, early investors will receive a 10% bonus on their purchases during the pre-sale."
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center my-5">The What/ How/ Why/ When – the FAQs</h2>
      <div className="flex flex-col gap-2">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} title={faq.question} content={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
