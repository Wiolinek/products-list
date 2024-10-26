import { useState } from 'react';
import Button from './ui/Button';

const ToggleFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<'dogs' | 'humans'>('dogs');

  return (
    <div className="flex justify-center" role="group" aria-label="Product Category Filter">
      <div className="flex items-center rounded-[14px] shadow-inner-box-shadow">
        <Button
          title="For Dogs"
          size="small"
          variant={selectedFilter === 'dogs' ? 'yellow' : 'white'}
          onClick={() => setSelectedFilter('dogs')}
        />
        <Button
          title="For Humans"
          size="small"
          variant={selectedFilter === 'humans' ? 'yellow' : 'white'}
          onClick={() => setSelectedFilter('humans')}
        />
      </div>
    </div>
  );
};

export default ToggleFilter;
