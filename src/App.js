import { useState } from 'react';
import { DatePicker, Divider, Input, Switch, Button } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

import { CopyFilled, GithubOutlined } from '@ant-design/icons';

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
        <p style={{fontWeight: 400, fontSize: '17px', color: '#565656', marginTop: '20px'}}>Generate Add to Calendar  links and event reminder buttons for Google Calendar</p>
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
          />
          <br/><br/>
          <Input 
            size="large" 
            value={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${moment.utc(date[0]).format('YYYYMMDDTHHmmss') + 'Z%2F' + moment.utc(date[1]).format('YYYYMMDDTHHmmss') + 'Z'}&details=${description}&location=${location}`}
            suffix={<CopyFilled style={{cursor: 'pointer'}} 
            onClick={() => navigator.clipboard.writeText(`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${moment.utc(date[0]).format('YYYYMMDDTHHmmss') + 'Z%2F' + moment.utc(date[1]).format('YYYYMMDDTHHmmss') + 'Z'}&details=${description}&location=${location}`)}/>} 
            />
            <br/><br/>
          <Button onClick={() => window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${moment.utc(date[0]).format('YYYYMMDDTHHmmss') + 'Z%2F' + moment.utc(date[1]).format('YYYYMMDDTHHmmss') + 'Z'}&details=${description}&location=${location}`, '_blank')}>
            Preview
          </Button>  
        </div>
      </section>
      <footer className="App__footer">
        <Divider/>
        Source Code: <a href="https://github.com/vaibhav111tandon" target="_blank" rel="noreferrer"> <GithubOutlined/></a>  
      </footer>
    </div>
  );
}

export default App;
