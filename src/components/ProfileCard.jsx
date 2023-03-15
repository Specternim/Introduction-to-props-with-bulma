import React from "react";

const ProfileCard = ({ title, handle, image, desc }) => {
  return (
    <div className="card" style={{ minHeight: "100%" }}>
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>

        <div className="content" style={{ marginTop: "10px" }}>
          {desc}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
