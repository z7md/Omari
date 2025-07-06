import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <li className="flex flex-1 mx-4 mb-8 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link
        className="flex flex-col w-full no-underline"
        to={props.path}
        aria-label={props.label}
      >
        <figure
          className="relative w-full pt-[67%] overflow-hidden"
          data-category={props.label}
        >
          <img
            className="absolute top-0 right-0 w-full h-full object-cover transition-transform duration-200 ease-linear hover:scale-110"
            alt={props.text}
            src={props.src}
          />
          <figcaption className="absolute bottom-0 right-2 px-2 py-1 bg-[#ab8e3a] text-white font-bold text-xs rounded-tl-md rounded-bl-md select-none pointer-events-none">
            {props.label}
          </figcaption>
        </figure>
        <div className="p-5">
          <h5 className="text-gray-900 text-lg leading-6">{props.text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
