import React, { Component } from 'react';
import {Grid, Cell, Tab, Tabs} from 'react-mdl';
import ListGroup from 'react-bootstrap/ListGroup';
import './Automation.css';


class Automation extends Component {
    render() {
        return(

            
            <div style ={{width: '100%', margin: 'auto'}}>

            <div className="demo-tabs">
    <Tabs>
        <Tab>Front End</Tab>
        <Tab>Backend</Tab>
        <Tab>Mobile</Tab>
    </Tabs>
    <section>
        <div className="content"></div>
    </section>
</div>      

    <Grid className="demo-grid-1">
<Cell className="rounded-border" col={6}><h5>Creating an AL GitHub account</h5>
{/* Stage 5 Links */}
<h6>
<ul>Click the following link: https://github.com/ </ul>
<ul>Enter a unique Username (i.e javayporterAL) </ul>
<ul>Enter AL email in Email field </ul>
<ul>Enter Password </ul>
<ul>Click Sign up for GitHub</ul> </h6>

   </Cell>

   <Cell className="rounded-border" col={6}><h5>Creating an AL GitHub account</h5>
{/* Stage 5 Links */}
<h5>Stage</h5>

   </Cell>

   <Cell className="rounded-border" col={6}><h5>Creating an AL GitHub account</h5>
{/* Stage 5 Links */}
<h5>Stage</h5>

   </Cell>
   <Cell className="rounded-border" col={6}><h5>Creating an AL GitHub account</h5>
{/* Stage 5 Links */}
<h5>Stage</h5>

   </Cell>
<Cell className="rounded-border" col={6}><h5>Locating AL_PY_Automation Repo</h5>
    <p>jwt.io</p>
    <p>Epoch Converter</p>
    <p>Developer Console (Browser)</p></Cell>

<Cell className="rounded-border"  col={6}><h5>Cloning the AL_PY_AUTOMATION Repo </h5>
        {/* Other Links Links */}
  {/* <h5>JIRA/Confluence Links</h5> */}
  <ListGroup defaultActiveKey="https://jwt.io">
<ListGroup.Item action href="https://jwt.io">
JWT
</ListGroup.Item>
<ListGroup.Item action href="https://www.epochconverter.com/" disabled>
Epoch Converter
</ListGroup.Item>
<ListGroup.Item action href="https://www.developer.intuit.com/app/developer/sandbox" disabled>
Intuit Developer Sandbox 
</ListGroup.Item>
<ListGroup.Item action href="https://office-stage5.angieslist.com/app/bmt/priceList/13440497" disabled>
Price List Page (Office App)
</ListGroup.Item>
</ListGroup>
</Cell>

</Grid>
    
  
</div>

                
            
        )
    }
}

export default Automation;


