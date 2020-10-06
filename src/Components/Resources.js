import React, {Component} from 'react';
import {Grid, Cell, Tab, Tabs} from 'react-mdl';
import ListGroup from 'react-bootstrap/ListGroup';
import './Resources.css';


class Resources extends Component {
    render() {
        return(
         
            <div style ={{width: '100%', margin: 'auto'}}>

                        <div className="demo-tabs">
                <Tabs>
                    <Tab>Links</Tab>
                    <Tab>Pending</Tab>
                    <Tab>Pending</Tab>
                </Tabs>
                <section>
                    <div className="content"></div>
                </section>
            </div>      

                <Grid className="demo-grid-1">
        <Cell className="rounded-border" col={3}><h5>BMT Links</h5>
        {/* Stage 5 Links */}
            <h5>Stage 5</h5>
        <ListGroup defaultActiveKey="https://qa-procenter.mhelpdesk.io/?u=https://office-stage5.plat.angieslist.com">
    <ListGroup.Item action href="https://qa-procenter.mhelpdesk.io/?u=https://office-stage5.plat.angieslist.com">
      Login and redirect to Select A Customer Page
    </ListGroup.Item>
    <ListGroup.Item action href="https://qa-procenter.mhelpdesk.io/?u=https://office-stage5.plat.angieslist.com&i=invoices&l=5748280" disabled>
      Login and redirect to Lead Invoices Page
    </ListGroup.Item>
    <ListGroup.Item action href="https://office-stage5.angieslist.com/" disabled>
      Log into Office App 
    </ListGroup.Item>
    <ListGroup.Item action href="https://office-stage5.angieslist.com/app/bmt/priceList/13440497" disabled>
        Price List Page (Office App)
    </ListGroup.Item>
  </ListGroup>
          {/* Stage Sierra Links */}
          <h5>Stage Sierra</h5>
        <ListGroup defaultActiveKey="https://qa-procenter.mhelpdesk.io/?u=https://office-stagesierra.plat.angieslist.com">
    <ListGroup.Item variant="warning" action href="https://qa-procenter.mhelpdesk.io/?u=https://office-stagesierra.plat.angieslist.com">
      Login and redirect to Select A Customer Page
    </ListGroup.Item>
    <ListGroup.Item action href="https://qa-procenter.mhelpdesk.io/?u=https://office-stagesierra.plat.angieslist.com&i=invoices&l=5748280" disabled>
      Login and redirect to Lead Invoices Page
    </ListGroup.Item>
    <ListGroup.Item action href="https://office-stagesierra.angieslist.com/" disabled>
      Log into Office App 
    </ListGroup.Item>
    <ListGroup.Item action href="https://office-stagesierra.angieslist.com/app/bmt/priceList/17461629" disabled>
        Price List Page (Office App)
    </ListGroup.Item>
  </ListGroup>
            {/* Stage PROD Links */}
            <h5>Production</h5>
        <ListGroup defaultActiveKey="https://qa-procenter.mhelpdesk.io/?u=https://office.angieslist.com">
    <ListGroup.Item variant="info" action href="https://qa-procenter.mhelpdesk.io/?u=https://office.angieslist.com">
      Login and redirect to Select A Customer Page
    </ListGroup.Item>
    <ListGroup.Item action href="https://qa-procenter.mhelpdesk.io/?u=https://office.angieslist.com&i=invoices&l=5748280" disabled>
      Login and redirect to Lead Invoices Page
    </ListGroup.Item>
    <ListGroup.Item action href="https://office.angieslist.com/" disabled>
      Log into Office App 
    </ListGroup.Item>
    <ListGroup.Item action href="https://office.angieslist.com/app/bmt/priceList/13440497" disabled>
        Price List Page (Office App)
    </ListGroup.Item>
  </ListGroup>
               </Cell>
        <Cell className="rounded-border" col={6}><h5>JIRA/Confluence Links</h5>
                <p>jwt.io</p>
                <p>Epoch Converter</p>
                <p>Developer Console (Browser)</p></Cell>
        <Cell className="rounded-border" col={3}><h5>Other Links</h5>
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

export default Resources;