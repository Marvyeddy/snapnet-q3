import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/facebook.svg";
import Medium from "../assets/medium.svg";
import Logo from "../assets/Group 3511.svg";
import Menu from "../assets/align-text-left.svg";

const links = [Twitter, Medium, Facebook];

const Navbar = () => {
  return (
    <nav className="max-w-[1172px] mt-[58px] max-md:mt-[30px] flex items-center justify-between px-6 mx-auto">
      <ul className="gap-[26px] flex items-center max-md:hidden">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href="">
              <img src={link} alt="link" />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <img src={Logo} alt="logo" loading="lazy" />
        <h1 className="text-[26px] text-foreground">Finanace</h1>
      </div>

      <button className="cursor-pointer">
        <img src={Menu} alt="menu" loading="lazy" />
      </button>
    </nav>
  );
};

export default Navbar;
