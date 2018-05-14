import React, {Component} from 'react';

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
      });
    };
      render() {
        return (
          <div>
            <h1> Contact Us </h1>
            <form onSubmit={this.handleSubmit}>
              <strong> Name: </strong> <input type="text" name="name" placeholder="name" ref={(ref) => { this.name = ref; }}/> <br />
              <strong> Email: </strong> <input type="email" name="email" placeholder="youremail@gmail.com" ref={(ref) => { this.email = ref; }}/> <br />
              <strong> Note: </strong> <input type="text" name="comment" placeholder="Questions? Comments? Concerns? Leave us a note and we will get back to you ASAP." ref={(ref) => { this.comment = ref; }}/> <br />
              <button type='submit'> Submit </button>
            </form>
          </div>
        )
      };
    }

export default ContactUs;
