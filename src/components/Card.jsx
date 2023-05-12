/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {

  const {
    location,
    current,
  } = data;

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-xl min-h-[220px]">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-800">{location.name}</span>
        <span className="text-slate-600 text-md font-medium">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="font-bold text-slate-800 flex justify-center mt-4 text-center">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-3xl mt-3">°C</span>
      </div>

      <div className="flex justify-center flex-col items-center">
        <img src={current.condition.icon} alt="weather icon" />
        <span className="text-slate-800 font-medium">{current.condition.text}</span>
      </div>
    </div>
  );
}

export default Card;

Card.prototype = {
  data: propTypes.object,
}.isRequiered;
