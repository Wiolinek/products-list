import ProductFilter from './ToggleFilter';
import Heading from './ui/Heading';

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-10 mt-[58px]">
      <Heading title="The Fab 4" type="h1" variant="transparent" />
      <ProductFilter />
      <Heading title="Buy multiples original canine or human products" type="h2" variant="yellow" />
    </header>
  );
};

export default Header;
