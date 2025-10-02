import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import UserDropDown from "./UserDropDown";
const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            className="h-8 w-auto cursor-pointer"
            src="/assets/images/logo.png"
            alt="Signalist logo"
            width={140}
            height={32}
          />
        </Link>
        {/* hidden by default, displayed as block on screens 640px or bigger */}
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropDown />
      </div>
    </header>
  );
};

export default Header;
