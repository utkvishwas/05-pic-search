import React from "react";

const Results = (props) => {
  const list = props.resultdata;
  const imagelist = list.map(function (x) {
    const { id, urls, alt_description } = x;
    return (
      <div
        key={id}
        className="cards"
        style={{
          backgroundImage: "url(" + urls.small + ")",
          backgroundSize: "cover",
        }}
      >
        {/* <img src={urls.small} alt={alt_description} /> */}
      </div>
    );
  });
  return <div className="results">{imagelist}</div>;
};

export default Results;
