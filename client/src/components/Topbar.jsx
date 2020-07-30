import React from 'react';
import Logo from '../images/airbrb.png'

const headerContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  height: '80px',
  position: 'relative !important',
  zIndex: '1 !important',
  borderBottom: '1px solid #c6c6c6'
};

const buttonLocation= {
  backgroundColor: 'transparent',
  border: '1px solid #c6c6c6',
  borderRadius: '24px',
  fontSize: '14px',
  height: '48px',
  width: '220px',
  transition: 'box-show 0.2 ease 0s',
  cursor: 'pointer'
};

const buttonLang = {
  height: '42',
  backgroundColor: 'transparent',
  border: '1px',
  borderRadius: '24px',
  display: 'inline-flex',
  overflow: 'visible',
  position: 'relative',
  verticalAlign: 'middle',
  padding: '5px 5px 5px 5px',
  cursor: 'pointer'
};

const buttonUser = {
  height: '42',
  margin: '0',
  padding: '0',
  backgroundColor: 'transparent',
  border: '1px solid #c6c6c6',
  borderRadius: '24px',
  display: 'inline-flex',
  overflow: 'visible',
  position: 'relative',
  verticalAlign: 'middle',
  padding: '5px 5px 5px 5px',
  cursor: 'pointer'
};

const col = {
  flex: '1'
};

const icon = {
  margin: '0',
  color: '#717171'
}

const png = {
  left: '0px',
  zIndex: '100',
  cursor: 'pointer'
}

class Topbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
    <header style={headerContainer}>
        <div style={col}>
          <img src={Logo} height={32} style={png}/>
        </div>
        <div style={col}>
            <button style={buttonLocation}>
              <div>
                <i className="search icon" style={{color: '#ff385c'}}></i>
                Add a Location
              </div>
            </button>
        </div>
        <div style={col}>
          <button style={buttonLang}>
            <span style={{flex: '1'}}><i width={16} style={icon} className='world icon'/></span>
            <span style={{flex: '1'}}><i width={16} style={icon} className='angle down icon'/></span>
          </button>
          <button style={buttonUser}>
           <span style={{flex: '1'}}><i width={16} style={icon} className="bars icon"/></span>
           <span style={{flex: '1'}}><i width={16}style={icon} className='user circle icon'/></span>
          </button>
        </div>
    </header>
      
    )
  }
}

export default Topbar;