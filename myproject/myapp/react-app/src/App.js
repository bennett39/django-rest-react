import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <form action="http://127.0.0.1:8000/users/" method="POST" enctype="multipart/form-data" className="form-horizontal" novalidate>
        <input type="hidden" name="csrfmiddlewaretoken" value="crIlEX8FyZlkOQEst6pdbZFCJ7NCQWlY29jxRS71n7dVhAtF590jb91PocyCGr7u" />
    <br />
        <label>Username
          <input name="username" type="text" />
        </label>
    <br />
        <label>Email address
          <input name="email" className="form-control" type="email" />
        </label>
    <br />
        <label>Groups
          <select multiple  className="form-control" >
            <option value="http://127.0.0.1:8000/groups/1/">test_group</option>
          </select>
        </label>
    <br />
        <button className="btn btn-primary js-tooltip" title="Make a POST request on the User List resource">POST</button>
      </form>

    </div>
  );
}

export default App;
