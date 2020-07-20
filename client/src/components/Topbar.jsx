import React from 'react';
import Logo from '../images/airbrb.png'
// import Subheader from './Subheader.jsx';
// import { Grid, Image, Button, Icon } from 'semantic-ui-react';

const headerContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
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
  transition: 'box-show 0.2 ease 0s'
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
  padding: '5px 5px 5px 5px'
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
  padding: '5px 5px 5px 5px'
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
  zIndex: '100'
}

class Topbar extends React.Component {

  constructor(props) {
    super(props);

  
    
  }

  



  render() {
    return(
      // <Grid columns='three'>
      //    <Grid.Row>
      //     <Grid.Column>
      //       <p>icon</p>
      //       {/* <Image src={Logo} height={32}/> */}
      //     </Grid.Column>
      //     <Grid.Column>
      //       <button>Add a location</button>
      //     </Grid.Column>
      //     <Grid.Column>
      //       <button className='language-selector'>language selector</button>
      //       <a href='#'>Help</a>
      //       <button>Language</button>
      //     </Grid.Column>
      //   </Grid.Row>
      // </Grid>
    <header style={headerContainer}>
        <div style={col}>
          <img src={Logo} height={32} style={png}/>
        </div>
        <div style={col}>
            <button style={buttonLocation}>
              <div>
                <i class="search icon" style={{color: '#ff385c'}}></i>
                Add a Location
              </div>
            </button>
        </div>
        <div style={col}>
          <button style={buttonLang}>
            <span style={{flex: '1'}}><i width={16} style={icon} class='world icon'/></span>
            <span style={{flex: '1'}}><i width={16} style={icon} class='angle down icon'/></span>
          </button>
          <button style={buttonUser}>
           <span style={{flex: '1'}}><i width={16} style={icon} class="bars icon"/></span>
           <span style={{flex: '1'}}><i width={16}style={icon} class='user circle icon'/></span>
        
          </button>
        </div>
    </header>
      
    )
  }
}

export default Topbar;