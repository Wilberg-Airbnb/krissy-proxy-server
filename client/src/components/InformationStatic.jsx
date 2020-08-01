import React from 'react';
import { Grid } from 'semantic-ui-react';

const InformationContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative !important',
  zIndex: '1 !important',
  margin: 'auto',
  paddingTop: '10px',
  paddingBottom: '10px',
  width: '70%',
  fontSize: '12px',
  alignItems: 'end',
  borderBottom: '1px solid #c6c6c6',
  borderTop: '1px solid #c6c6c6',
  backgroundColor: 'rgb(247, 247, 247)'
};

const InformationBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'relative !important',
  zIndex: '1 !important',
  margin: 'auto',
  width: '100%',
  paddingTop: '10px',
  fontSize: '12px',
};

const Bolded = {
  fontWeight: 'bolder',
};

const ListingStyling = {
  marginTop: '8px',
};

class InformationStatic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid.Row style={InformationContainer}>
        <div>
          <div style={InformationBox}>
            <div style={Bolded}>ABOUT</div>
            <div style={ListingStyling}>How Aribnb Work</div>
            <div style={ListingStyling}>Diversity & Belonging</div>
            <div style={ListingStyling}>Against Discrimination</div>
            <div style={ListingStyling}>Accessibility</div>
            <div style={ListingStyling}>Trust & Safety</div>
            <div style={ListingStyling}>Airbnb Citizen</div>
            <div style={ListingStyling}>Olympics</div>
            <div style={ListingStyling}>Newsroom</div>
          </div>
        </div>

        <div>
          <div style={InformationBox}>
            <div style={Bolded}>COMMUNITY</div>
            <div style={ListingStyling}>Airbnb Magazine</div>
            <div style={ListingStyling}>Airbnb Associates</div>
            <div style={ListingStyling}>Airbnb for Works</div>
            <div style={ListingStyling}>Invite friends</div>
            <div style={ListingStyling}>Gift cards</div>
            <div style={ListingStyling}>Careers</div>
          </div>
        </div>

        <div>
          <div style={InformationBox}>
            <div style={Bolded}>HOST</div>
            <div style={ListingStyling}>Host your home</div>
            <div style={ListingStyling}>Host an online experience</div>
            <div style={ListingStyling}>Message from CEO Brian Chesky</div>
            <div style={ListingStyling}>Responsible hosting</div>
            <div style={ListingStyling}>Open Homes</div>
            <div style={ListingStyling}>Resource Center</div>
            <div style={ListingStyling}>Community Center</div>
          </div>
        </div>

        <div>
          <div style={InformationBox}>
            <div style={Bolded}>SUPPORT</div>
            <div style={ListingStyling}>Updates for COVID-19</div>
            <div style={ListingStyling}>Help Center</div>
            <div style={ListingStyling}> Cancellation options</div>
            <div style={ListingStyling}>Neighborhood Support</div>
          </div>
        </div>
      </Grid.Row>
    );
  }
}
export default InformationStatic;
