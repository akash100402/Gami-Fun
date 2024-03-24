import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/Gami.png";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link to="/">
        <img src={logoImg} alt="" className="h-16 md:h-20" />
      </Link>
      <form>
        <TextInput
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden md:inline"
        />
      </form>
      <Button className="w-14 h-12 rounded-full sm:hidden" color="yellow">
        <AiOutlineSearch className="w-4 h-auto" />
      </Button>
      <Link to="/login">
        <Button
          gradientDuoTone="purpleToBlue"
          outline
          // className="rounded-full w-24 h-12"
        >
          Login
        </Button>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/explore"} as={"div"}>
          <Link to="/explore">Explore</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
