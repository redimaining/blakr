import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './Footer.css';

const credentialInfos = [
  {
    name: 'ByFishh',
    github: 'https://github.com/ByFishh',
    x: '',
  },
  {
    name: 'R0BIN0',
    github: 'https://github.com/R0BIN0',
  },
];

const Footer = () => {
  const renderLogo = useMemo(
    () => (
      <Link to="/">
        <div className="footer-logo-container">
          <img src="icon.svg" alt="zkFlow" />
          <p>
            zk<strong>FLOW</strong>
          </p>
        </div>
      </Link>
    ),
    [],
  );

  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div>{renderLogo}</div>
        <div className="footer-credential-section">
          <p className="footer-credential-title">DEVELOPPERS</p>
          <div className="footer-credential-container">
            {credentialInfos.map((item) => (
              <div className="footer-credential-item" key={uuidv4()}>
                <p className="footer-credential-item-title">{item.name}</p>
                {item.github && (
                  <p className="footer-credential-item-link">
                    Github: <a href={item.github}>{item.github}</a>
                  </p>
                )}
                {item.x && (
                  <p className="footer-credential-item-link">
                    Twitter: <a href={item.x}>{item.x}</a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-powered">Powered by ...</p>
      </div>
    </footer>
  );
};

export default Footer;