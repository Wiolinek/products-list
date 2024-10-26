import { useState } from 'react';
import Button from './ui/Button';

const ProductFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<'dogs' | 'humans'>('dogs');

  return (
    <div className="flex justify-center" role="group" aria-label="Product Category Filter">
      <div className="flex items-center border border-[#151515]/20 rounded-[14px]">
        <Button
          title="For Dogs"
          size="small"
          variant={selectedFilter === 'dogs' ? 'yellow' : 'outlined'}
          onClick={() => setSelectedFilter('dogs')}
        />
        <Button
          title="For Humans"
          size="small"
          variant={selectedFilter === 'humans' ? 'yellow' : 'outlined'}
          onClick={() => setSelectedFilter('humans')}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
