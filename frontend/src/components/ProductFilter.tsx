import React, { useState } from 'react';

const ProductFilter: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'dogs' | 'humans'>('dogs');

  return (
    <div className="flex justify-center">
      <div className="flex items-center border border-[#151515]/20 rounded-[14px]">
        <button
          onClick={() => setSelectedFilter('dogs')}
          className={`h-full py-2 px-6 ${
            selectedFilter === 'dogs'
              ? 'bg-yellow-gradient text-white font-bold leading-5'
              : 'bg-white font-medium'
          } rounded-[14px] transition-colors duration-200`}
        >
          For Dogs
        </button>
        <button
          onClick={() => setSelectedFilter('humans')}
          className={`h-full py-2 px-6 ${
            selectedFilter === 'humans'
              ? 'bg-yellow-gradient text-white font-bold leading-5'
              : 'bg-white font-medium'
          } rounded-[14px] transition-colors duration-200`}
        >
          For Humans
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
