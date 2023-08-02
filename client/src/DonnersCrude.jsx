import axios from "axios";
import { useEffect, useState } from "react";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

import { Button,Modal } from 'reactstrap';

function DonnersCrude() {
 
const [donnerid, setId] = useState("");
const [name, setName] = useState("");
const [cnic,setCnic] = useState("");
const [bloodgroup,setbloodgroup] = useState("");
const [city,setCity] = useState("");
const [address,setaddress] = useState("");
const [email,setEmail] = useState("");
const [contactno,setContactno] = useState("");
const [donnerData, setData] = useState([]);
const [record, setRecord] = useState([]);
  useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:7035/api/Donners/GetDonnerList");
    setData(result.data);
    setRecord(result.data);
    console.log(result.data);
  }
  async function save(event) {
  
    event.preventDefault();
    try {
      await axios.post("https://localhost:7035/api/Donners/AddDonner", {
        
        name: name,
        cnic: cnic,
        email:email,
        bloodgroup: bloodgroup,
        city: city,
        address: address,
       
        contactno: contactno,
      
      });
      alert("Donner Registation Successfully");
          setId("");
          setCity("");
          setaddress("");
          setEmail("");

      
    
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
  async function DeleteStudent(donnerid) {
  await axios.delete("https://localhost:7016/api/Student/DeleteStudent/" + donnerid);
   alert(" deleted Successfully");
   setId("");
   setName("");
   Load();
  }
 
  const searcData= (event)=>{
    setRecord(record.filter(f=>f.name.toLowerCase().includes(event.target.value)))
  }
 
    return (
      <>
        <h1>Donner's Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
          
            <input
              type="text"
              class="form-control"
              id="donnerid"
              hidden
              value={donnerid}
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
         
            <label>City</label>
            <input
              type="text"
              class="form-control"
              id="city"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
           
            <label>CNIC</label>
            <input
              type="text"
              class="form-control"
              id="cnic"
              value={cnic}
              onChange={(event) => {
                setCnic(event.target.value);
              }}
            />
             
            <label>Blood Group</label>
            <input
              type="text"
              class="form-control"
               id="bloodgroup"
              value={bloodgroup}
              onChange={(event) => {
                setbloodgroup(event.target.value);
              }}
            />
            
            <label>email</label>
            <input
              type="email"
              class="form-control"
               id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
             
            <label>Address</label>
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
        <Input type='text' placeholder="Search" onChange={searcData}/>
      
      <br></br>
 
      <table class="table table-hover" align="center">
        <thead>
          <tr>
             <th scope="col">Sr</th>

            <th scope="col">City</th>
            <th scope="col">Name</th>
            <th scope="col">Blood Group</th>
            <th scope="col">Contact No</th>
            <th scope="col">Address </th>
            <th scope="col">Nic</th>

        
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
{

donnerData.map( (getUser, index)=>(
<tr key={index}>
<td>{index+1} </td>
<td>{getUser.city}</td>
<td>{getUser.name}</td>
<td>{getUser.cnic}</td>
<td>{getUser.bloodgroup}</td>
<td>{getUser.address}</td>
<td>{getUser.contactno}</td>
<td>{getUser.email}</td>

</tr>
)) }
</tbody>

     
      </table>
     
      </>
    );
  }
  
  export default DonnersCrude;