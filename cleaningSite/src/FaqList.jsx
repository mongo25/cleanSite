import FaqItem from "./FaqItem";

const FaqList = ({ faqList }) => {
  return (
    <div className=" mb-5">
      <h3 className="text-start text-custom-color-3 pt-2 pb-3 fw-bold">
        {faqList.heading}
      </h3>
      <div className="accordion relative" id={faqList.id}>
        {faqList.faqItems.map((list) => (
          <FaqItem key={list.headingId} faqListId={faqList.id} faqItem={list} />
        ))}
      </div>
    </div>
  );
};

export default FaqList;
