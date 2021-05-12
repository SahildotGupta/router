import React from "react";

import Grid from "@material-ui/core/Grid";

function About() {
  return (
    <Grid align="center">
      <div className="card" style={{ width: "21rem", marginTop: "40px" }}>
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1516831984111-f049ea0415f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Card image cap"
          height="280px"
        />
        <div className="card-body" style={{ paddingTop: "0px" }}>
          '<h5 className="card-title">About</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam idnm
            rhoncus quam, in ullamcorper justo. Vivamus tristique diam eudsas
            facilisis dictum. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos
          </p>
        </div>
      </div>
    </Grid>
  );
}

export default About;

{
  /*
<Grid align = "center">
      
    <Card className = 'about' style={{ width :'20%', border : '1px solid ', borderRadius : '1px' }}>
   <Card.Img variant="top" src="https://images.unsplash.com/photo-1620589025695-d6a796305be5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" width = '70%' />
   <Card.Body>
     <Card.Title>About</Card.Title>
     <Card.Text>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim lectus id mauris sodales egestas.
     Praesent a tincidunt elit. Etiam ullamcorper quam et fermentum blandit.
     </p> 
      
     </Card.Text>
     
   </Card.Body>
 </Card>

</Grid>

*/
}
