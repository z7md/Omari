import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="py-16 bg-[#ffffff] text-right ">
      <h1 className="text-center text-3xl font-semibold mb-10">
        مشاريعنا
      </h1>
      <div className="flex flex-col items-center max-w-[1120px] w-[100%] mx-auto">
        <div className="relative my-12 w-full text-center">
          <ul className="flex flex-col md:flex-row mb-6">
            <CardItem
              src="./images/ishbilia.png"
              text="ضاحية سكنية نموذجية"
              label="ضاحية أشبيليا"
              path="/Ishbilia"
            />
            <CardItem
              src="./images/omaryCenter.png"
              text="ضاحية سكنية نموذجية"
              label="ضاحية أشبيليا"
              path="/services"
            />
          </ul>
          <ul className="flex flex-col md:flex-row">
            <CardItem
              src="./images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="./images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="./images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
