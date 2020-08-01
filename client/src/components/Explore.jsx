import React from 'react';
import { Grid } from 'semantic-ui-react';

const exploreSectionStyles = {
  margin: "200px, 20px",
  width: "1120px",
  height: "1118.75"
}

const listOfPlacesStyles = {
  width: "1120px",
  height: "300px"
}

const exploreColumnStyles = {
  width: "25%",
  height: "100%",
  display: "inline-block",
  verticalAlign: "top",
}

const exploreCellStyles = {
  width: "100%",
  height: "25%",
  paddingTop: "20px"
}


const Explore = () => {
  return (
    <Grid.Row style={{background: "#F7F7F7", borderTop: "1px solid #c6c6c6", paddingTop: '48px'}}>
      <section style={exploreSectionStyles}>
        <h2 style={{marginBottom: "5px"}}>Explore other options around the world</h2>
        <div style={{ margin: "50px, 0px" }}>
          <h4>More places to stay:</h4>
          <h6 style={{marginTop: "5px"}} >Apartments•Houses•Bed and breakfasts•Lofts•Villas</h6>
        </div>
        <aside style={listOfPlacesStyles}>
          <article style={exploreColumnStyles}>
            <aside style={exploreCellStyles}><p>Hawaii</p></aside>
            <aside style={exploreCellStyles}><p>Beijing</p></aside>
            <aside style={exploreCellStyles}><p>Sydney</p></aside>
            <aside style={exploreCellStyles}><p>Cusco</p></aside>
          </article>
          <article style={exploreColumnStyles}>
            <aside style={exploreCellStyles}><p>New York</p></aside>
            <aside style={exploreCellStyles}><p>Berlin</p></aside>
            <aside style={exploreCellStyles}><p>Paris</p></aside>
            <aside style={exploreCellStyles}><p>Istanbul</p></aside>
          </article>
          <article style={exploreColumnStyles}>
            <aside style={exploreCellStyles}><p>Hong Kong</p></aside>
            <aside style={exploreCellStyles}><p>Rio De Janeiro</p></aside>
            <aside style={exploreCellStyles}><p>Auckland</p></aside>
            <aside style={exploreCellStyles}><p>Prague</p></aside>
          </article>
          <article style={exploreColumnStyles}>
            <aside style={exploreCellStyles}><p>Tokyo</p></aside>
            <aside style={exploreCellStyles}><p>Amsterdam</p></aside>
            <aside style={exploreCellStyles}><p>Mexico City</p></aside>
            <aside style={exploreCellStyles}><p>Dublin</p></aside>
          </article>
        </aside>
      </section>
      </Grid.Row>
  )
}

export default Explore;