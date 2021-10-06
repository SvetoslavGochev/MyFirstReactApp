function Header(props) {
    // let headingMessage = 'Hello React Word another :)';

    return (
        <header>
            <h1>{props.children}</h1>
            {/* <h1>headingMessage</h1> */}
            <h2>From Custom Component</h2>
        </header>
    )
}

export default Header;