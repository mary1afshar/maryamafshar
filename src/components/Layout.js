import NavBar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <>
        <NavBar></NavBar>
        <main>{children}</main>
        </>
    )
}

export default Layout