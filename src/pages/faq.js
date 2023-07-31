import React from 'react'
import Breadcrum from '../components/common/Breadcrum'
import Layout from '../components/Layout/Layout'

function Faq() {
  return (
    <Layout>
        <Breadcrum pageName="FAQ" pageTitle="FAQ"/>

        <div className="faq-page pt-120 mb-120">
  <div className="container">
    <div className="row mb-120 g-4">
      <div className="col-lg-8">
        <div className="faq-wrap">
          <h3>Frequently Asked Questions</h3>
          <p>Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai quam nulla, venenatis eget dapibus ac, catali topuny wekemdini iaculis vitae nulla. Morbi mattis nec.</p>
          <div className="faq-item">
            <h5 id="heading10" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-controls="collapse10" aria-expanded="true">
              01. Curious about how to build your own UX strategy? Here are.
            </h5>
            <div id="collapse10" className="accordion-collapse collapse show" aria-labelledby="heading10">
              <div className="faq-body">
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucanola ligula. Orci varius natoque penatibus ethemen magnis disc parturient montego tyni nascete ridiculus musclineorto 
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading11" className="accordion-button  collapsed" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-controls="collapse11" aria-expanded="true">
              02. Where Could a Career in UX Take You? Agency vs. In-House ?
            </h5>
            <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11">
              <div className="faq-body">
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucanola ligula. Orci varius natoque penatibus ethemen magnis disc parturient montego tyni nascete ridiculus musclineorto 
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading12" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-controls="collapse12">
              03. What Is a Problem Statement in UX? (And How To Write One)?
            </h5>
            <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12">
              <div className="faq-body">
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucanola ligula. Orci varius natoque penatibus ethemen magnis disc parturient montego tyni nascete ridiculus musclineorto 
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading13" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-controls="collapse13">
              04. There are several techniques UX designers employ to arrive?
            </h5>
            <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13">
              <div className="faq-body">
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucanola ligula. Orci varius natoque penatibus ethemen magnis disc parturient montego tyni nascete ridiculus musclineorto 
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading14" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-controls="collapse14">
              05. What are the users are facing? What are they trying to?
            </h5>
            <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14">
              <div className="faq-body">
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucanola ligula. Orci varius natoque penatibus ethemen magnis disc parturient montego tyni nascete ridiculus musclineorto 
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading15" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-controls="collapse14">
              06. Why is this important? Why will users benefit from solving?
            </h5>
            <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15">
              <div className="faq-body">
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucanola ligula. Orci varius natoque penatibus ethemen magnis disc parturient montego tyni nascete ridiculus musclineorto 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="faq-form">
          <h3>Feel free to ask:</h3>
          <form>
            <div className="form-inner mb-30">
              <input type="text" placeholder="Your Name :" />
            </div>
            <div className="form-inner mb-30">
              <input type="email" placeholder="Your Email :" />
            </div>
            <div className="form-inner mb-30">
              <input type="text" placeholder="Subject :" />
            </div>
            <div className="form-inner mb-30">
              <textarea placeholder="Write Message" cols={30} rows={10} defaultValue={""} />
            </div>
            <div className="form-inner">
              <button type="submit">Send Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default Faq