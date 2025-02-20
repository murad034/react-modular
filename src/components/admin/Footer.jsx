import {
  Box,
  Container,
  Text,
  Link as RouterLink,
  Image,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import baMainLogo from "@/assets/custom/images/ba-main-logo.webp";

import "@/assets/plugins/jquery/jquery.min.js";
import "@/assets/plugins/bootstrap/js/bootstrap.bundle.min.js";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-copyright">
        <div className="container">
          <div className="copyright-content">
            <p>
              Managed by
              <a className="clr-navyBlue" href="#">
                Business Automation Ltd
              </a>
              on behalf of Ministry Of Religious Affairs
              <br />
              Help Desk : <a href="tel:+8809602666707"> +8809602666707 </a>,
              Email <a href="mailto:info@hajj.gov.bd">info@hajj.gov.bd</a>
            </p>

            <div className="developed-by">
              <span>কারিগরি সহযোগিতায়</span>
              <Link to="/">
                <Image
                  src={baMainLogo}
                  alt="Business Automation Logo"
                  h="30px"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
