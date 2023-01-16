import React from 'react';
import Calendar from './calendar';

class StorePicker extends React.Component {
  myInput = React.createRef();
  generateCalendar = event => {
    event.preventDefault()
    const storeName = (this.myInput.current.value)
    this.props.history.push(`/store/${storeName}`);
  }
  render() {
    return (<form className="store-selector" onSubmit={this.generateCalendar}>
      <h2>Please enter the month</h2>
      <input type="month"
        ref={this.myInput}
        required placeholder="Month" />
      <button type="submit"> Check Availability</button>
      <Calendar />
    </form>)
  }
}

export default StorePicker;