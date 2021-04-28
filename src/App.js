import { useState } from 'react';
import { DatePicker, Divider, Input, Switch } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

import moment from "moment";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

function App() {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [allDay, setAllDay] = useState(true);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState([moment(), moment()]);

  return (
    <div className="App">
      <header className="App__header">
        Add to Calendar
        <Divider />
      </header>
      <section className='App__section'>
        <div className="App__section__container">
          <Input size="large" placeholder="Event title" value={title} onChange={e => setTitle(e.target.value)}/><br/><br/>
          <Input size="large" placeholder="Event location" value={location} onChange={e => setLocation(e.target.value)}/><br/><br/>
          <Switch checkedChildren="All Day Event" unCheckedChildren="All Day Event" defaultChecked onChange={e => setAllDay(!allDay)}/><br/><br/>
          {
            allDay ? (
              <RangePicker size="large" value={date} onChange={date => setDate(date)}/>
            ):(
              <RangePicker size="large" value={date} onChange={date => setDate(date)} showTime />
            )
          }
          <br/><br/>
          <TextArea
          size="large"
          placeholder="Event Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          autoSize={{ minRows: 3, maxRows: 50 }}
        /><br/><br/>
        <Input size="large" value={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${moment.utc(date[0]).format('YYYYMMDDTHHmmss') + 'Z%2F' + moment.utc(date[1]).format('YYYYMMDDTHHmmss') + 'Z'}&details=${description}&location=${location}`} /> <a href={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${moment.utc(date[0]).format('YYYYMMDDTHHmmss') + 'Z%2F' + moment.utc(date[1]).format('YYYYMMDDTHHmmss') + 'Z'}&details=${description}&location=${location}`}>Preview</a><br/>
        <Input size="large" value={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${moment.utc(date[0]).format('YYYYMMDDTHHmmss') + 'Z%2F' + moment.utc(date[1]).format('YYYYMMDDTHHmmss') + 'Z'}&details=${description}&location=${location}`} /><br/>
        <Input size="large" value={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${moment.utc(date[0]).format('YYYYMMDDTHHmmss') + 'Z%2F' + moment.utc(date[1]).format('YYYYMMDDTHHmmss') + 'Z'}&details=${description}&location=${location}`} /><br/>
        <Input size="large" value={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${moment.utc(date[0]).format('YYYYMMDDTHHmmss') + 'Z%2F' + moment.utc(date[1]).format('YYYYMMDDTHHmmss') + 'Z'}&details=${description}&location=${location}`} /><br/>  

        </div>
        
      </section>
    </div>
  );
}

export default App;
