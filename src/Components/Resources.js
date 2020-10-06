import React, {Component} from 'react';
import {Grid, Cell, Tab, Tabs} from 'react-mdl';
import ListGroup from 'react-bootstrap/ListGroup';
import './Resources.css';


// Consts (Link Descriptions) //
const selectACustomerLinkDesc = 'Login and redirect to Select A Customer Page';
const officeAppLoginLinkDesc = 'Log into Office App';
const officeAppPriceListLink = 'Price List Page (Office App)';
const officeAppCustomersLink = 'Customers Page (Office App)';

// Consts (Links) //
// Stage 5
const stage5_selectACustomerLink = 'https://qa-procenter.mhelpdesk.io/?u=https://office-stage5.plat.angieslist.com';
const stage5_officeAppLoginLink = 'https://office-stage5.angieslist.com/'
const stage5_officeAppPriceListLink = 'https://office-stage5.angieslist.com/app/bmt/priceList/13440497';
const stage5_officeAppCustomersLink = 'https://office-stage5.angieslist.com/app/bmt/customers/13440497';

// Stage Siera
const stageSierra_selectACustomerLink = 'https://qa-procenter.mhelpdesk.io/?u=https://office-stagesierra.plat.angieslist.com';
const stageSierra_officeAppLoginLink = 'https://office-stage5.angieslist.com/'
const stageSierra_officeAppPriceListLink = 'https://office-stage5.angieslist.com/app/bmt/priceList/13440497';
const stageSierra_officeAppCustomersLink = 'https://office-stage5.angieslist.com/app/bmt/customers/13440497';

// PROD
const prod_selectACustomerLink = 'https://procenter.mhelpdesk.io/?u=https://office-stagesierra.plat.angieslist.com';
const prod_officeAppLoginLink = 'https://office.angieslist.com/'
const prod_officeAppPriceListLink = 'https://office.angieslist.com/app/bmt/priceList/13440497';
const prod_officeAppCustomersLink = 'https://office.angieslist.com/app/bmt/customers/13440497';


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

 {/* Links Grid */}     
<Grid className="demo-grid-1">
        <Cell className="rounded-border" col={3}><h5>BMT Links</h5>
        {/* Stage 5 Links */}
            <h5>Stage 5</h5>
        <ListGroup defaultActiveKey={stage5_selectACustomerLink}>
    <ListGroup.Item action href={stage5_selectACustomerLink}>
      {selectACustomerLinkDesc}
    </ListGroup.Item>
    
    <ListGroup.Item action href={stage5_officeAppLoginLink} disabled>
      {officeAppLoginLinkDesc}
    </ListGroup.Item>
    <ListGroup.Item action href={stage5_officeAppPriceListLink} disabled>
        {officeAppPriceListLink}
    </ListGroup.Item>
    <ListGroup.Item action href={stage5_officeAppCustomersLink} disabled>
      {officeAppCustomersLink}
    </ListGroup.Item>
  </ListGroup>
          {/* Stage Sierra Links */}
          <h5>Stage Sierra</h5>
        <ListGroup defaultActiveKey={stageSierra_selectACustomerLink}>
    <ListGroup.Item variant="warning" action href={stageSierra_selectACustomerLink}>
      {selectACustomerLinkDesc}
    </ListGroup.Item>

    <ListGroup.Item action href={stageSierra_officeAppLoginLink} disabled>
      {officeAppLoginLinkDesc} 
    </ListGroup.Item>
    <ListGroup.Item action href={stageSierra_officeAppPriceListLink} disabled>
        {officeAppPriceListLink}
    </ListGroup.Item>
    <ListGroup.Item action href={stageSierra_officeAppCustomersLink} disabled>
      {officeAppCustomersLink}
    </ListGroup.Item>
  </ListGroup>
            {/* Stage PROD Links */}
            <h5>Production</h5>
            <ListGroup defaultActiveKey={prod_selectACustomerLink}>
    <ListGroup.Item variant="info" action href={prod_selectACustomerLink}>
      {selectACustomerLinkDesc}
    </ListGroup.Item>

    <ListGroup.Item action href={prod_officeAppLoginLink} disabled>
      {officeAppLoginLinkDesc}
    </ListGroup.Item>
    <ListGroup.Item action href={prod_officeAppPriceListLink} disabled>
        {officeAppPriceListLink}
    </ListGroup.Item>
    <ListGroup.Item action href={prod_officeAppCustomersLink} disabled>
      {prod_officeAppCustomersLink}
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