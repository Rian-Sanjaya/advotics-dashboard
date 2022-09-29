function Header() {
  return (
    <div className="adv-header">
      <div className="logo">Logo</div>
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