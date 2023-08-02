import axios from "axios";
import { useEffect, useState } from "react";
import { Button,Modal, Row ,Container,Col} from 'reactstrap';
import Topbar from "./Layout/Topbar";

const Requestatus = () => {
    
const [id, setId] = useState("");
const [requstid, setRequstid] = useState("");
const [patientid,setPatientid] = useState("");

const [patient , setPatient] = useState([]);
const [filterdata, setFilterdata]= useState([]);
const [query, setQuery] = useState('');

useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:7154/Trans/getStatus");
    setPatient(result.data);
    console.log(result.data);
  }
  
     
const handlesearch=(event)=>{
    const getSearch= event.target.value;
    if(getSearch.length > 0)
    {
    const searchdata= patient.filter( (item)=> item.requstid.toLowerCase().includes(getSearch));
    setPatient(searchdata);
    } else {
        setPatient(filterdata);
    }
    setQuery(getSearch);
    
    }
    return (
      <>  <Topbar/>
      <Container>
        <Row>
      <Col className="bg-white border"       xs="8">
      
      <input type="text" name='name' value={query} className="form-control" onChange={(e)=>handlesearch(e)} placeholder='Search...' />
  
       
        
      <table class="table table-hover" align="center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Patient Id</th>
              <th scope="col">bloodgroup</th>
  
              <th scope="col">Requst Id</th>
  
              <th scope="col">Option</th>
            </tr>
          </thead>
         
              <tbody>
              {
                  
                  patient.map( (patient, index)=>(
                     <tr key={index}>
                      <td>{index+1} </td>
                      
                  <td>{patient.patientid}</td>
                  <td>{patient.bloodgroup}</td>
                  
                  <td>{patient.requstid}</td>
  
  
                  
                  <td>
                  
                  
                   
  
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

export default Requestatus