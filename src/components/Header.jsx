const Header = ({ department }) => {

    return (
        <header>
          <div className="top__header">
            <h1 className="top__header__title">OFFICIAL RECEIPT</h1>
            <span className="top__header__number">OR#: { department.or_number }</span>
          </div>

          <div className="bottom__header">
            <h2 className="bottom__header__desc">CAZA - CAVITE</h2>
            <h2 className="bottom__header__desc">CAZA DELA ROSA</h2>
            <h2 className="bottom__header__desc">NON-VAT Reg. TIN</h2>
          </div>
        </header>
    )
}

export default Header;