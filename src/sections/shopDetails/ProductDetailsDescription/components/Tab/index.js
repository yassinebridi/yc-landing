import React from 'react'
import {Tab,Nav} from 'react-bootstrap'
const ProductTab = () => {
    return(
        <div className="product-description-tabs">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav className="nav-tabs">
            <Nav.Link eventKey="first">Description</Nav.Link>
            <Nav.Link eventKey="second">Specification</Nav.Link>
            <Nav.Link eventKey="third">Reviews</Nav.Link>
        </Nav>
            <Tab.Content
              className="tab-content product-des-tab-content"
              id="nav-tabContent"
            >
            <Tab.Pane eventKey="first"className="tab-pan">
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and
                  empowerment.Leverage agile frameworks to provide a robust
                  synopsis for high level overviews.
                </p>
                <p>
                  I terative approaches to corporate strategy foster
                  collaborative thinking to further the overall value
                  proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
                <p>
                  
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.Capitalize on low hanging fruit to
                  identify a ballpark value added activity to beta test.
                  Override the digital divide with additional clickthroughs from
                  DevOps. Nanotechnology immersion along the information highway
                  will close the loop on focusing solely on the bottom line.
                </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second"className="tab-pan">
                <p>
                  
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.Capitalize on low hanging fruit to
                  identify a ballpark value added activity to beta test.
                  Override the digital divide with additional clickthroughs from
                  DevOps. Nanotechnology immersion along the information highway
                  will close the loop on focusing solely on the bottom line.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="third"className="tab-pan">
                <p>
                  terative approaches to corporate strategy foster collaborative
                  thinking to further the overall value proposition. Organically
                  grow the holistic world view of disruptive innovation via
                  workplace diversity and empowerment.
                </p>
              </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
        </div>
    )
}


export default ProductTab;