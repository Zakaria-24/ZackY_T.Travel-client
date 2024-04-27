/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const SpotCrad = ({ spot }) => {
  const { cost, description, photoUrl, seasonality, spotName, time, visit } =
    spot;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl space-y-2">
        <figure>
          <img className=" h-60" src={photoUrl} alt="Sundarban_image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{spotName}!</h2>
          <p>{description.slice(0, 70)}...</p>
          <div className="card-actions justify-end mt-4">
            <div className="badge badge-outline">{time}</div>
            <div className="badge badge-outline">{cost}</div>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{seasonality}</div>
            <div className="badge badge-outline">{visit}</div>
          </div>
        </div>
        <Link to="/viewDetails" className="btn btn-outline w-full">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SpotCrad;
