import { useMemo } from 'react';
import Chevron from '../../icons/Chevron/Chevron';
import './WalletDropDown.css';
import Settings from '../Settings/Settings';
import { useWalletDropDown } from './WalletDropDown.logic';
import { cutWalletAdress } from '../../utils/cutWalletAdress';
import { IGridInfo } from '../../types/Wallet/IGridInfo';
import GridInfo from '../GridInfo/GridInfo';

const WalletDropDown = (props: {
  details?: boolean;
  settings?: boolean;
  infos: {
    title: string;
    adress?: string;
    blockchain?: string[];
    gridInfo?: IGridInfo[];
  };
}) => {
  const logic = useWalletDropDown();

  const renderWalletTitle = useMemo(
    () => (
      <div className="walletDropDown-main-info">
        <p className="walletDropDown-name">{props.infos.title}</p>
        {props.infos.adress && <span>{cutWalletAdress(props.infos.adress)}</span>}
        {props.infos.blockchain && (
          <div className="walletDropDown-blockchain-container">
            {/* // Blockchains Logos */}
            <div className="fake-logo"></div>
            <div className="fake-logo"></div>
            <div className="fake-logo"></div>
          </div>
        )}
      </div>
    ),
    [],
  );

  return (
    <div className="walletDropDown-global-container">
      <div className="walletDropDown-container">
        <div className="walletDropDown-top">
          {renderWalletTitle}
          <div className="walletDropDown-right-container">
            {props.details && props.infos.gridInfo && (
              <button className="walletDropDown-details-btn" onClick={logic.toggleIsActive}>
                <p>More details</p>
                <Chevron isActive={logic.isActive} />
              </button>
            )}
            {props.settings && <Settings />}
          </div>
        </div>
      </div>
      {props.infos.gridInfo && logic.isActive && (
        <div className="walletDropDown-gridInfo-container">
          <GridInfo items={props.infos.gridInfo} />
        </div>
      )}
    </div>
  );
};

export default WalletDropDown;
