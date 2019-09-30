import React from 'react';
import logo from './logo.svg';
import './App.css';
import { State } from './store';
import { useSelector, useDispatch } from 'react-redux';
import { createAsyncSelectorResults } from 'async-selector-kit';


const text = (state: State) => (state.blah.text as string)

const [longText, loading] = createAsyncSelectorResults({
  async: async (text) => {
    await new Promise(res => setTimeout(res, 500));
    return '' + text + text;
  },
  defaultValue: '',
}, [text])



const App: React.FC = () => {
  const text = useSelector((state: State) => state.blah.text);
  const long = useSelector(longText);
  const pending = useSelector(loading);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input value={text} onChange={e => dispatch({ type: 'settext', text: e.target.value })} />
      <div>{long}</div>
      <div>{pending ? '...' : 'done'}</div>
    </div>
  );
}

export default App;
