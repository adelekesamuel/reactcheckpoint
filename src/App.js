
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <form class="col-md-4">
          <div class="mb-2">
            <label for="inputFirstName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputFirstName"></input>
          </div>

          <div class="mb-2">
            <label for="inputLastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="inputLastName"></input>
          </div>

          <div class="mb-2">
            <label for="inputAge" class="form-label">Age</label>
            <input type="number" class="form-control" id="inputAge"></input>
          </div>

          <div class="mb-2">
            <label for="inputContact" class="form-label">Contact</label>
            <input type="number" class="form-control" id="inputContact"></input>
          </div>

          <div class="mb-2">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress"></input>
          </div>

          <div class="mb-2">
            <label for="inputEmail" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="inputEmail"></input>
            <div id="emailText" class="form-text">Yor email is privately stored on our server</div>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
