import React from 'react'
import axios from "axios";

import { useEffect, useState } from "react";
import { Button,Modal, Row ,Container,Col, Navbar,Badge} from 'reactstrap';
import Topbar from './Layout/Topbar';
import Footer from './Layout/Footer';
const Bloodrequest = () => {
  const [error,setError]=useState(false)
    const [id, setId] = useState("");
    const [name, setName] = useState("");
 
    const [bloodgroup,setbloodgroup] = useState("");
    const [city,setCity] = useState("");
    const [address,setaddress] = useState("");
    const [email,setEmail] = useState("");
    const [contactno,setContactno] = useState("");
    
    const [unit,setUnit] = useState("");
    const [active,setActive] = useState("");

    const [requester, setUsers] = useState([]);
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
        
        const result = await axios.get("https://localhost:7154/api/Requester/GetRequesterList");
        setUsers(result.data);
        console.log(result.data);
      }
      async function save(event) {
      
        event.preventDefault();
        try {
          await axios.post("https://localhost:7154/api/Requester/AddRequest", {
            
          name: name,
          
          bloodgroup: bloodgroup,
          city: city,
          address: address,
           email:email,
          contactno: contactno,
          unit:unit,
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
     
      async function update(event) {
        event.preventDefault();
        try {
     
      await axios.patch("https://localhost:7016/api/Student/UpdateStudent/"+ requester.find((u) => u.id === id).id || id,
            {
            id: id,
            name: name,
            city: city,
     
            }
          );
          alert("Registation Updateddddd");
          setId("");
          setName("");
          setCity("");
        
          Load();
        } catch (err) {
          alert(err);
        }
      }
      const handleChnage =(val)=>{
        if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            setError(false)
            setEmail(val.target.value);
        }else{
            setError(true)
        }
    }
    const handlesearch=(event)=>{
        const getSearch= event.target.value;
        if(getSearch.length > 0)
        {
        const searchdata= requester.filter( (item)=> item.name.toLowerCase().includes(getSearch));
        setUsers(searchdata);
        } else {
            setUsers(filterdata);
        }
        setQuery(getSearch);
        event.preventDefault();
        }
        return (
          <>
           <Topbar/>
          <Container>
           
            <Row>
    
          <Col className="bg-white border"       xs="4">
          <h1>Blood Request Details</h1>
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
              
                 <label> Email</label>
                 <input  class="form-control" id="email"onChange={(e)=>handleChnage(e.target.value)} />

                            {error?<p style={{color:"red"}}>Enter valid Email</p>:''}

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
                 <label>Unit</label>
                <input
                  type="number"
                  class="form-control"
                  id="unit"
                  value={unit}
                  onChange={(event) => {
                    const limit = 5;
                    setUnit(event.target.value.slice(0, limit));
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
              <th scope="col">Sr</th>
                <th scope="col">Name</th>
                <th scope="col">Bloodgroup</th>
                <th scope="col">City</th>
                <th scope="col">Contactno</th>
                <th scope="col">Unit</th>
                <th scope="col">Status</th>
               
               

    
               
              </tr>
            </thead>
           
                <tbody>
                {
                    
                    requester.map( (Request, index)=>(
                       <tr key={index}>
                        <td>{index+1} </td>
                        {Request.id}
                        
                       
                    <td>{Request.name}</td>
                    <td>{Request.bloodgroup}</td>

                    <td>{Request.city}</td>
                   
                      
                    <td>{Request.contactno}</td>
                    <td>{Request.unit}</td>
                    <td>{Request.active==1?<Badge bg="Danger">Pending</Badge>:"Done"}</td>

    
    
                 
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

export default Bloodrequest