import { LOGO, ACCOUNT, INFORMATION, LEGAL, SUPPORT } from "./Menus";

const Item = ({ Links, title }) => {
  return (
    <ul className=" p-3">
      <h3 className="mb-1 font-semibold">{title}</h3>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-7 gap-0 divide-x divide-slate-600">
    <div className="col-span-2"><Item Links={LOGO} title="Blade ⟷ Runner" /></div>
      
      <Item Links={ACCOUNT} title="My account" />
      <Item Links={INFORMATION} title="Information" />
      <Item Links={LEGAL} title="Legal Pages" />
      <div className="col-span-2">
      <Item Links={SUPPORT} title="Inside Blade Runners" />
      </div>
      
    </div>
  );
};

export default ItemsContainer;