import './app.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
let name1="It is Outside"
function App() {
  let style= {
    color:"brown",
    textAlign:"center",
    border:"5px dashed green"
  }
  let name2="It is Inside"
  return (
    // className is used bcz it is predefined & interconnected
    <div className="App">
        <h1>Login Page</h1>            
        Email address: <input type="text" id="name" name="name" placeholder="Enter Email"></input><br/><br/>
        Password: <input type="password" id="name" name="name" placeholder="Enter Password"></input><br/><br/>
        <button>Login</button><br/><br/>

        <h1>Sign Up Page</h1>
        User Name:<input type="text" placeholder="Enter User Name"></input><br/><br/>
        User Email:<input type="text" placeholder="Enter User Email"></input><br/><br/>
        Mobile Number:<input type="" placeholer="Enter Mobile Number"></input><br/><br/>
        Password:<input type="password" placeholder="Enter Password"></input><br/><br/>
        Confirm Password:<input type="password" placeholder="Confirm Password"></input><br/><br/>
        <button>Sign Up</button>

        <h1>Table</h1> <br/>
        <table>
          <th>
            <tr>
              <td>Name</td>
              <td>Mobile</td>
              <td>Education</td>
            </tr>
            <tr>
              <td>Pooja</td>
              <td>9988776655</td>
              <td>BE</td>
            </tr>
            <tr>
              <td>Rakshita</td>
              <td>8877115577</td>
              <td>Bsc</td>
            </tr>
          </th>
        </table>

         <h1>Lists</h1>
        <div>
          <ul>
              <li>Mango</li>
              <li>Apple</li>
              <li>Apple</li>
              <li>Orange</li>
          </ul>
        </div>

        <div>
          <ol>
              <li>Mango</li>
              <li>Apple</li>
              <li>Apple</li>
              <li>Orange</li>
          </ol>
        </div>
        <div>
          <h1>Rules for writting a JXS</h1>
            <div>
              <h1>1) Welcome</h1>
            </div>
        </div>
        <>
          <h1>2) Welcome</h1>
        </>

        {/* <React.Fragment>
          <h1>3) Welcome</h1>
        </React.Fragment> */}
        <>
          <img src=""/>
        </>
        <>
          <h1 class="heading">Welcome to REACT Class</h1>
          <p id="para">Welcome to CSS file to the APP.js file</p>
          <h2>1st way of declaring inline CSS</h2><h1 style={{color:"brown", textAlign:"center",border:"5px dashed green"}}>Welcome to Patagonspace</h1>
          <h2>2nd way of declaring inline CSS</h2>
          <p style={style}>Same style is applied</p>
          <p style={style}>The main advantage is that same property can be added to the multple tags.</p>
        </>
        <>
        <h1>{name1}</h1>
        <h1>{name2}</h1>
        </>
        <>
        <FaWhatsapp style={{color:"green"}} />
        <br/>
        <FaFacebook />
        <br/>
        <FaHome />
        </>

    </div>
  );
}
export default App;
