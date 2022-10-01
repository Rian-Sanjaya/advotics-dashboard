function Header() {
  return (
    <div className="adv-header">
      <div className="logo">
        <div className="main-logo"><img src="/images/advotics-logo-optimize.jpeg" alt="Advotics Logo" /></div>
        <div className="power">
          <div className="text">powered by</div>
          <div className="logo"><img src="/images/advotics-logo-optimize.jpeg" alt="Advotic Logo" /></div>
        </div>
      </div>
      <ul>
        <li>
          <div>Username</div>
          <div>Company Name</div>
        </li>
        <li>
          <div><img src="/images/avatar.png" alt="avatar" /></div>
        </li>
        <li><img src="/images/logout.png" alt="logout" /></li>
      </ul>
    </div>
  )
}

export default Header;