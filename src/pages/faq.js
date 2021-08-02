import React from 'react'
import Link from "../components/Link"
import {
    FooterSection,
  } from "../sections/InnerPages"

  import {Accordion} from "react-bootstrap";
  import {AccordionItemFull} from "../components/Accordion"
  import {faqDataOne,faqDataTwo,faqDataThree,faqDataFour,faqDataFive} from "../data/faq"
  import PageWrapper from '../components/PageWrapper'
const Faq =()=>{
    return(
       <PageWrapper  innerPageHeader={true}>
  {/* Blog Single Area  */}
  <div className="faq-main-banner">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="content text-center">
            <h2>Frequently Asked Question</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="faq-main-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="faq-main-tab-area sticky">
            <ul className="list-unstyled">
              <li><Link to="#general">General</Link></li>
              <li><Link to="#account">Accounts</Link></li>
              <li><Link to="#sell">Sells</Link></li>
              <li><Link to="#support">Support License</Link></li>
              <li><Link to="#refund">Refund</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-6 col-lg-8 col-md-10 faq-single-all-items">
          <div className="faq-main-area-single" id="general">
            <h2>General</h2>
            <Accordion className="accordion">
                {faqDataOne.map(({question,answer,accKey
                },index)=>{return(
                    <AccordionItemFull question={question} answer={answer} accKey={accKey} key={index}/>
                )})}
            </Accordion>
          </div>
          <div className="faq-main-area-single" id="account">
            <h2>Accounts</h2>
            <Accordion className="accordion">
                {faqDataTwo.map(({question,answer,accKey
                },index)=>{return(
                    <AccordionItemFull question={question} answer={answer} accKey={accKey} key={index}/>
                )})}
            </Accordion>
          </div>
          <div className="faq-main-area-single" id="sell">
            <h2>Sales</h2>
            <Accordion className="accordion">
                {faqDataThree.map(({question,answer,accKey
                },index)=>{return(
                    <AccordionItemFull question={question} answer={answer} accKey={accKey} key={index}/>
                )})}
            </Accordion>
          </div>
          <div className="faq-main-area-single" id="support">
            <h2>Support License</h2>
            <Accordion className="accordion">
                {faqDataFour.map(({question,answer,accKey
                },index)=>{return(
                    <AccordionItemFull question={question} answer={answer} accKey={accKey} key={index}/>
                )})}
            </Accordion>
          </div>
          <div className="faq-main-area-single" id="refund">
            <h2>Refund</h2>
            <Accordion className="accordion">
                {faqDataFive.map(({question,answer,accKey
                },index)=>{return(
                    <AccordionItemFull question={question} answer={answer} accKey={accKey} key={index}/>
                )})}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer Area */}
  <FooterSection />
       </PageWrapper>
    )
}


export default Faq;