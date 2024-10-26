import { Filters } from 'interfaces/filter.enum';
import { useAppContext } from 'context/AppContext';
import Button from 'components/ui/Button';

const ToggleFilter = () => {
  const { selectedFilter, setSelectedFilter } = useAppContext();

  return (
    <div className="flex justify-center" role="group" aria-label="Product Category Filter">
      <div className="flex items-center rounded-[14px] shadow-inner-box-shadow">
        <Button
          title="For Dogs"
          size="small"
          variant={selectedFilter === Filters.dogs ? 'yellow' : 'white'}
          onClick={() => setSelectedFilter(Filters.dogs)}
        />
        <Button
          title="For Humans"
          size="small"
          variant={selectedFilter === Filters.humans ? 'yellow' : 'white'}
          onClick={() => setSelectedFilter(Filters.humans)}
        />
      </div>
    </div>
  );
};

export default ToggleFilter;
