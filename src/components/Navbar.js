import Logo from "./images/logo.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <img src={Logo} className="logo-nav"></img>
      <h5>Neha Sawhney</h5>
    </div>
  );
}
