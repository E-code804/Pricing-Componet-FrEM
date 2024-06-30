import PropTypes from "prop-types";

const PriceCard = ({ data, toggle }) => {
  const { plan, price_monthly, price_annually, storage, num_users, upload_size } = data;
  const cardStyle = plan === "Professional" ? "price-card-prof lg:h-[525px]" : "price-card-norm";
  const btnStyle = plan === "Professional" ? "prof-btn" : "norm-btn";

  return (
    // in css make media query to adjust height of prof to normal, ternary here.
    <div className={`${cardStyle} price-card flex flex-col items-center rounded-lg px-6 py-12 space-y-5 shadow-lg`}>
      <h1 className={plan === "Professional" ? "lg:mt-5" : ""}>{plan}</h1>

      <div className="flex items-center space-x-2">
        <p className="text-4xl">$</p>
        <h3 className="text-6xl">{toggle ? price_annually : price_monthly}</h3>
      </div>

      <div className="w-full h-[0.5px] bg-light-grayish-blue my-4" />

      <h3>{storage} Storage</h3>
      <div className="w-full h-[0.5px] bg-light-grayish-blue my-4" />

      <h3>{num_users} Users Allowed</h3>
      <div className="w-full h-[0.5px] bg-light-grayish-blue my-4" />

      <h3>Send up to {upload_size}GB</h3>
      <div className="w-full h-[0.5px] bg-light-grayish-blue my-4" />

      <button className={`price-card-btn ${btnStyle} mt-5`}>LEARN MORE</button>
    </div>
  );
};

PriceCard.propTypes = {
  data: PropTypes.shape({
    plan: PropTypes.string.isRequired,
    price_monthly: PropTypes.number.isRequired,
    price_annually: PropTypes.number.isRequired,
    storage: PropTypes.string.isRequired,
    num_users: PropTypes.number.isRequired,
    upload_size: PropTypes.number.isRequired,
  }).isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default PriceCard;
