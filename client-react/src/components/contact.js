import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button'

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();
      fetch('/comment', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type':"application/json"},
        body: JSON.stringify({
          'name': this.name.value,
          'email': this.email.value,
          'comment':this.comment.value
        })
      }).then(alert("Thank you for getting in touch! We will contact you shortly."));
    };
      render() {
        return (
          <div className='contact-container'>
            <div>
              <h1 className="title"> Contact Us </h1>
            </div>
            <div className="contact-information">
            <p>DJR Properites, LLC</p>
            <p>(860) 573-1360</p>
            <p>jetconsult@yahoo.com</p>
              </div>
              <div className='contact-form-container'>
                <div className='contact-form'>
                  <form onSubmit={this.handleSubmit}>
                    <p> Questions? Comments? Concerns? Leave us a note  </p>
                    <p>and we will get back to you ASAP. </p>
                    <strong> Name: </strong>  <br /> <input type="text" name="name" placeholder="" ref={(ref) => { this.name = ref; }} required/> <br />
                    <strong> Email: </strong> <br /> <input type="email" name="email" placeholder="" ref={(ref) => { this.email = ref; }} required/> <br />
                    <strong> Note: </strong> <br /> <textarea className="comment-input" type="text" name="comment" ref={(ref) => { this.comment = ref; }}/> <br />
                    <Button bsStyle='primary' type='submit'> Submit </Button>
                </form>
              </div>
            </div>
          </div>
        )
      };
    }

export default ContactUs;
