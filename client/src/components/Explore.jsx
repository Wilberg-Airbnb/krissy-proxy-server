import React from 'react'

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

const exploreSubHeading = {
  marginTop: "5px"
}


const Explore = () => {
  return (
    <div>
      <section style={exploreSectionStyles}>
        <h3 style={{marginBottom: "5px"}}>Explore other options around the world</h3>
        <div style={{ margin: "50px, 0px" }}>
          <h5>More places to stay:</h5>
          <h6 style={exploreSubHeading} >Apartments•Houses•Bed and breakfasts•Lofts•Villas</h6>
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
    </div>
  )
}

export default Explore;