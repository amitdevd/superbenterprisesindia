import React, { Component } from "react";
import { Link } from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                <div className="container-fluid">
                                    
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    About Us
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item dropdown"><Link className="dropdown-item" to="#">SEPL Group Companies</Link></li>
                                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Our  Accreditation
                                                        </a>
                                                        <ul className="dropdown-submenu">
                                                            <li className="nav-item dropdown">
                                                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Government Department</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><Link to="mea.asp">Ministry of External Affairs</Link></li>
                                                                    <li>
                                                                        <Link to="moiag-india.asp">Ministry of Overseas<br />
                                                                            Indian Affairs Govt. of India</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="nav-item dropdown-submenu">
                                                                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Diplomatic Mission</Link>
                                                                <ul className="dropdown-menu">
                                                                    <li><Link to="oman-embassy.asp">Embassy of the Sultanate
                                                                        <br />
                                                                        of Oman, New Delhi</Link></li>
                                                                    <li><Link to="saudi-embassy.asp">Royal Embassy of Saudi
                                                                        <br />
                                                                        Arabia, New Delhi</Link></li>
                                                                    <li><Link to="uae-emirates-embassy.asp">United Arab Emirates </Link></li>
                                                                    <li><Link to="nigera-embassy.asp">Embassy of the Federal
                                                                        <br />
                                                                        Republic of Nigeria</Link></li>
                                                                    <li><Link to="algeria-embassy.asp">Embassy of Algeria,<br />
                                                                        New Delhi</Link></li>
                                                                    <li><Link to="yemen-embassy.asp">Embassy of the Republic<br />
                                                                        of Yemen, Delhi</Link></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    <li>
                                                        <Link className="nav-link" to="moiag-india.asp">Mode of Payment</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="nav-link" to="verification-doc.asp">Verification of documents</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="nav-link" to="b2b-solution.asp">B2B Solutions</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="nav-link" to="b2b-solution.asp">Travel Solution</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">MEA Attestation Support Services</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item dropdown"><Link className="nav-link" to="general-attestation.asp">General attestation</Link></li>
                                                    <li className="nav-item dropdown"><Link className="nav-link" to="apostille.asp">Apostille Authentication</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Embassy Attestation</Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="nav-link" to="algeria.asp">Algeria Embassy Attestation</Link></li>
                                                    <li><Link className="nav-link" to="bahrain.asp">Bahrain Embassy</Link></li>
                                                    <li><Link className="nav-link" to="brazil.asp">Brazil Embassy</Link></li>
                                                    <li><Link className="nav-link" to="egypt.asp">Egypt Embassy</Link></li>
                                                    <li><Link className="nav-link" to="kuwait.asp">Kuwait Embassy</Link></li>
                                                    <li><Link className="nav-link" to="libya.asp">Libya Embassy</Link></li>
                                                    <li><Link className="nav-link" to="malaysia.asp">Malaysia Embassy</Link></li>
                                                    <li><Link className="nav-link" to="oman.asp">Oman Embassy</Link></li>
                                                    <li><Link className="nav-link" to="philippines.asp">Philippines Embassy</Link></li>
                                                    <li><Link className="nav-link" to="qatar.asp">Qatar Embassy</Link></li>
                                                    <li><Link className="nav-link" to="saudi.asp">Saudi Arabia Embassy</Link></li>
                                                //<Link to="uae.asp">UAE Embassy</Link>

                                                    <li className="dropdown-submenu xx">
                                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">UAE Embassy</Link>
                                                        <ul className="dropdown-menu">
                                                            <li><Link to="uae.asp">UAE Embassy
                                                                <br />
                                                                Attestation Procedure</Link></li>
                                                            <li>
                                                                <Link to="uae-fee.asp">UAE Embassy Fee<br />
                                                                    &amp; Service Charges</Link>

                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to="other.asp">Other Embassies</Link></li>

                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Visa Application</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-link">
                                                        <table className="tabmenu table-responsive" width="80%">
                                                            <tr>
                                                                <td className="trpadding">
                                                                    <ul className="trpadding">
                                                                        <li><Link className="nav-link" to="algeria-visa.asp">Algeria</Link></li>
                                                                        <li><Link className="nav-link" to="angola-visa.asp">Angola</Link></li>
                                                                        <li><Link className="nav-link" to="bahrain-visa.asp">Bahrain</Link></li>
                                                                        <li><Link className="nav-link" to="brazil-visa.asp">Brazil</Link></li>
                                                                        <li><Link className="nav-link" to="china-visa.asp">China</Link></li>
                                                                        <li><Link className="nav-link" to="egypt-visa.asp">Egypt</Link></li>
                                                                        <li><Link className="nav-link" to="ethiopia-visa.asp">Ethiopia </Link></li>
                                                                        <li><Link className="nav-link" to="kuwait-visa.asp">Kuwait </Link></li>
                                                                        <li><Link className="nav-link" to="libya-visa.asp">Libya</Link></li>
                                                                        <li><Link className="nav-link" to="malaysia-visa.asp">Malaysia</Link></li>
                                                                        <li><Link className="nav-link" to="mauritius-visa.asp">Mauritius</Link></li>
                                                                    </ul>
                                                                </td>
                                                                <td className="trpadding">
                                                                    <ul className="trpadding">
                                                                        <li><Link className="nav-link" to="nigeria-visa.asp">Nigeria</Link></li>
                                                                        <li><Link className="nav-link" to="philippines-visa.asp">Philippines</Link></li>
                                                                        <li><Link className="nav-link" to="saudi-arabia-visa.asp">Saudi Arabia</Link></li>
                                                                        <li><Link className="nav-link" to="singapore-visa.asp">Singapore</Link></li>
                                                                        <li><Link className="nav-link" to="schengen-visa.asp">Schengen countries (all)</Link></li>
                                                                        <li><Link className="nav-link" to="thailand-visa.asp">Thailand</Link></li>
                                                                        <li><Link className="nav-link" to="uae-visa.asp">UAE </Link></li>
                                                                        <li><Link className="nav-link" to="usa-visa.asp">USA</Link></li>
                                                                        <li><Link className="nav-link" to="uk-visa.asp">UK</Link></li>
                                                                        <li><Link className="nav-link" to="vietnam-visa.asp">Vietnam</Link></li>
                                                                        <li><Link className="nav-link" to="other-country.asp">Other countries</Link></li>
                                                                    </ul>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#" className="nav-link" role="button">Language Translation</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="#" className="nav-link" role="button">Overseas Recruitment</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="#" className="nav-link" role="button">Export & Import</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="#" className="nav-link" role="button">Contact Us</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="#" className="nav-link" role="button">MEA Approved Branches</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            
                        </div>
                    </div>
                </nav>
            </div >

        );
    }
}

export default Layout;