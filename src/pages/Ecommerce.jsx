import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, ecomPieChartData, SparklineAreaData } from '../data/dummy';
import { ContextProvider } from '../context/ContextProvider';

const Ecommerce = () => (
  <div className="mt-12">
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="font-bold text-gray-400">Gains actuels</p>
            <p className="text-2xl">$67,8745.56</p>
          </div>
        </div>
        <div className="mt-6">
          <Button size="base" color="white" borderRadius="10px" bgColor="blue" text="Télécharger" />
        </div>
      </div>
    </div>
  </div>
);

export default Ecommerce;
