import axios from "axios";
import { useEffect, useState } from "react";
import { Button,Modal, Row ,Container,Col} from 'reactstrap';
import Topbar from "./Layout/Topbar";

function DonnerLocation() {
 
const [id, setId] = useState("");
const [doonerid, setDonnerid] = useState("");
const [bloodgroup,setbloodgroup] = useState("");
const [city,setCity] = useState("");
const [lat,setLat] = useState("");
const [lang,setLang] = useState("");
const [contactno,setContactno] = useState("");

const [donners, setUsers] = useState([]);
const [filterdata, setFilterdata]= useState([]);
const [query, setQuery] = useState('');
 

  useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:7154/api/Donner/GetDonnerList");
    setUsers(result.data);
    console.log(result.data);
  }
  async function save(event) {
  
    event.preventDefault();
    try {
      await axios.post("https://localhost:7154/Donnerloc/Donnerlocation", {
        city: city,
        lat:lat,
        lang: lang,

      doonerid: doonerid,
      
      
      bloodgroup: bloodgroup,
     
      contactno: contactno,
      
      
      });
      alert("Donners Registation Successfully");
          setId("");
          setDonnerid("");
          setCity("");
      
    
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
  async function editDonner(donners) {
    setDonnerid(donners.doonerid);
    setCity(donners.city);
  
    setId(donners.id);
  }
 
  async function DeleteDonner(id) {
  await axios.delete("https://localhost:7016/api/Student/DeleteStudent/" + id);
   alert("Employee deleted Successfully");
   setId("");
   setCity("");
   Load();
  }
 
  async function update(event) {
    event.preventDefault();
    try {
 
  await axios.patch("https://localhost:7016/api/Student/UpdateStudent/"+ donners.find((u) => u.id === id).id || id,
        {
        id: id,
        city: city,
 
        }
      );
      alert("Registation Updateddddd");
      setId("");
      setCity("");
    
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
const handlesearch=(event)=>{
    const getSearch= event.target.value;
    if(getSearch.length > 0)
    {
    const searchdata= donners.filter( (item)=> item.city.toLowerCase().includes(getSearch));
    setUsers(searchdata);
    } else {
        setUsers(filterdata);
    }
    setQuery(getSearch);
    
    }
    return (
      <>
      <Topbar/>
      <Container>
        <Row>

      <Col className="bg-white border"       xs="4">
      <h1>Donners Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
          
            <input
              type="text"
              class="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
 
            <label> Donner Id</label>
            <input
              type="text"
              class="form-control"
              id="donnerid"
              value={doonerid}
              onChange={(event) => {
                setDonnerid(event.target.value);
              }}
            />
       
           
               <select id="bloodgroup"   onChange={(event) => {
                setbloodgroup(event.target.value);
              }}>
          <option >Select Blood Gruop</option>
          <option value="A+">A+ve</option>
          <option value="A-">A-ve</option>
          <option value="B+">B+ve</option>
          <option value="B-">B-ve</option>
          <option value="AB+">AB+ve</option>
          <option value="AB-">AB-ve</option>
          <option value="O+">O+ve</option>
          <option value="O-">O-ve</option>
          <option value="PNUll">P Null</option>
          
        </select>
          </div>
          <div class="form-group">
            
                 <select id="city"   onChange={(event) => {
                setCity(event.target.value);
              }}>
          <option >Select Donner  City</option>
          <option value="Wah Cantt">Wah Cantt</option>
          <option value="Taxila">Taxila</option>
          <option value="Rawalpindi">Rawalpindi</option>
          <option value="Islmabad">Islamabad</option>
          <option value="Attock">Attock</option>
          
          
        </select>
        <br/>
             <label>Latitude </label>
            <input
              type="text"
              class="form-control"
              id="lat"
              value={lat}
              onChange={(event) => {
                setLat(event.target.value);
              }}
            />
                 <label>Langitude </label>
            <input
              type="text"
              class="form-control"
              id="lang"
              value={lang}
              onChange={(event) => {
                setLang(event.target.value);
              }}
            />
            <label>contactno</label>
            <input
              type="text"
              class="form-control"
              id="contactno"
              value={contactno}
              onChange={(event) => {
                setContactno(event.target.value);
              }}
            />
     
          </div>
          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            
           
          </div>
        </form>
      </div>
    </Col>
    
    <Col className="bg-white border"       xs="8">
      
    <input type="text" name='name' value={query} className="form-control" onChange={(e)=>handlesearch(e)} placeholder='Search...' />

     
      
    <table class="table table-hover" align="center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">bloodgroup</th>

            <th scope="col">City</th>
            <th scope="col">contactno</th>

            <th scope="col">Option</th>
          </tr>
        </thead>
       
            <tbody>
            {
                
                donners.map( (donners, index)=>(
                   <tr key={index}>
                    <td>{index+1} </td>
                    
                <td>{donners.name}</td>
                <td>{donners.bloodgroup}</td>
                
                <td>{donners.city}</td>
                <td>{donners.contactno}</td>


                
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editDonner(donners)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteDonner(donners.id)}
                  >
                    Delete
                  </button>
                 

                </td>
              </tr>
          )) }
          </tbody>
          </table>
      
    </Col>
  </Row>
</Container>

       
      <br></br>
      </>
    );
  }
  
  export default DonnerLocation;