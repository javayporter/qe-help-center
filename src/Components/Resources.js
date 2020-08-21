import React, {Component} from 'react';

class Resources extends Component {
    render() {
        return(
            <div>
                <h1>Resources Page</h1>
                <h2>BMT Links</h2>
                <p>Should display Login Page and redirect to My Customers: https://qa-procenter.mhelpdesk.io/?u=https://office-stage5.plat.angieslist.com</p>
                <p>Should display Login Page and redirect to Lead Invoices: https://qa-procenter.mhelpdesk.io/?u=https://office-stage5.plat.angieslist.com&i=invoices&l=5748280</p>
                <p>Should display Error Page: https://qa-procenter.mhelpdesk.io</p>
                <p>Should continue to work as normal: https://qa-procenter.mhelpdesk.io/?s=SPID&t=TOKEN&u=https://office-stage5.plat.angieslist.com&i=my-customers</p>
                <h2>Random Helpful Sites/Tools</h2>
                <p>jwt.io</p>
                <p>Epoch Converter</p>
                <p>Developer Console (Browser)</p>
            </div>
        )
    }
}

export default Resources;