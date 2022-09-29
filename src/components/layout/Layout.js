import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <section className="adv-layout">
      <Header />
      <section className="main-wrapper">
        <Sidebar />
        <main>{ children }</main>
      </section>
    </section>
  )
}

export default Layout;