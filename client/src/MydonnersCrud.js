import React from 'react'
import axios from "axios";

import { useEffect, useState } from "react";
import { Button,Modal, Row ,Container,Col, Navbar,Badge} from 'reactstrap';
import Topbar from './Comp/Layout/Topbar';
import Footer from './Comp/Layout/Footer';
const MydonnersCrud = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [cnic, setCnic] = useState("");

    const [bloodgroup,setbloodgroup] = useState("");
    const [city,setCity] = useState("");
    const [address,setaddress] = useState("");
    const [email,setEmail] = useState("");
    const [contactno,setContactno] = useState("");
    
    const [lat,setlat] = useState("");
    const [lan,setlan] = useState("");

    const [active,setActive] = useState("");

    const [Donner, setUsers] = useState([]);
    const [filterdata, setFilterdata]= useState([]);
    const [query, setQuery] = useState('');
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]   
    
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
          await axios.post("https://localhost:7154/api/Donner/AddDonner", {
            
          name: name,
          cnic:cnic,
          email:email,

          bloodgroup: bloodgroup,
          city: city,
          address: address,
          contactno: contactno,
          lat:lat,
          lan:lan,
          });
          alert(" blood Request Registation Successfully");
              setId("");
              setName("");
              setCity("");
          
        
          Load();
        } catch (err) {
          alert(err);
        }
      }
     
      async function editRequest(requester) {
        setName(requester.name);
        setCity(requester.city);
      
        setId(requester.id);
      }
     
      async function DeleteRequest(id) {
      await axios.delete("https://localhost:7016/api/Student/DeleteStudent/" + id);
       alert("Request deleted Successfully");
       setId("");
       setName("");
       setCity("");
       Load();
      }
     
   
    const handlesearch=(event)=>{
        const getSearch= event.target.value;
        if(getSearch.length > 0)
        {
        const searchdata= Donner.filter( (item)=> item.city.toLowerCase().includes(getSearch));
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
          <h1>Blood Donner</h1>
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
     
                <label> Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                  <label> CNIC</label>
                <input
                  type="number"
                  class="form-control"
                  id="cnic"
                  value={cnic}
                  onChange={(event) => {
                    const limit = 13;
                    setCnic(event.target.value.slice(0, limit));
                  }}
                />
              
                 <label> Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
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
              <option >Select City</option>
              <option value="Wah Cantt">Wah Cantt</option>
              <option value="Taxila">Taxila</option>
              <option value="Rawalpindi">Rawalpindi</option>
              <option value="Islmabad">Islamabad</option>
              <option value="Attock">Attock</option>
              
             
            </select>
            <br/>
                 <label>address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  value={address}
                  onChange={(event) => {
                    setaddress(event.target.value);
                  }}
                />
                <label>contactno</label>
                <input
                  type="number"
                  class="form-control"
                  id="contactno"
                  value={contactno}
                  onChange={(event) => {
                    const limit = 11;
                    setContactno(event.target.value.slice(0, limit));
                  }}
                />
                    <label>Lat</label>
                <input
                  type="number"
                  class="form-control"
                  id="lat"
                  value={lat}
                  onChange={(event) => {
                    setlat(event.target.value);
                  }}
                />
                    <label>lang</label>
                <input
                  type="number"
                  class="form-control"
                  id="lan"
                  value={lan}
                  onChange={(event) => {
                    setlan(event.target.value);
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

    
             
              </tr>
            </thead>
           
                <tbody>
                {
                    
                    Donner.map( (Donner, index)=>(
                       <tr key={index}>
                        <td>{index+1} </td>

                    <td>{Donner.name}</td>
                    <td>{Donner.bloodgroup}</td>

                    <td>{Donner.city}</td>
                      
                    <td>{Donner.contactno}</td>

    
    
                    
                    <td>
                     
             
                     
    
                    </td>
                  </tr>
              )) }
              </tbody>
              </table>
          
        </Col>
      </Row>
    </Container>
    
           <Footer/>
          <br></br>
          </>
  )
}

export default MydonnersCrud
