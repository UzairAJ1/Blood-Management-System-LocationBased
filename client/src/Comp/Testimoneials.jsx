import React from 'react'
import axios from "axios";
import { CardGroup,Card,CardSubtitle,
  CardBody,CardImg,CardTitle,CardText} from 'reactstrap';
  import LikeButton from './LikeButton';
import { useEffect, useState } from "react";
import { Button,Modal, Row ,Container,Col, Navbar,Badge} from 'reactstrap';
import Topbar from './Layout/Topbar';
import Footer from './Layout/Footer';
import Blogcard from './Blogcard';
import Navbarblog from './Layout/Navbarblog';
import Blog2 from './Blog2';
const Testimoneials = () => {

    const [id, setId] = useState("");
    const [newsid, setNewsid] = useState("");

    const [name, setName] = useState("");
 
    const [city,setCity] = useState("");
    const [msg,setMsg] = useState("");
    const [email,setEmail] = useState("");
    const [contactno,setContactno] = useState("");
    
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
        
        const result = await axios.get("https://localhost:7154/api/News/GetRemarks");
        setUsers(result.data);
        console.log(result.data);
      }
      async function save(event) {
      
        event.preventDefault();
        try {
          await axios.post("https://localhost:7154/api/UserComments/BlogRemarks", {
            
          name: name,
          
          msg: msg,
          city: city,
          
           email:email,
          
          
          });
          alert(" Thanks for Suggestion");
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
    
          <Col className="bg-white border"       xs="3">
          <h1>Your suggestion</h1>
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
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                  <label> Suggestion</label>
                <input
                  type="richtext"
                  class="form-control"
                  id="msg"
                  value={msg}
                  onChange={(event) => {
                    setMsg(event.target.value);
                  }}
                />
           
              </div>
              <div class="form-group">
                
                     <select id="city"   onChange={(event) => {
                    setCity(event.target.value);
                  }}>
              <option >Select   City</option>
              <option value="Wah Cantt">Wah Cantt</option>
              <option value="Taxila">Taxila</option>
              <option value="Rawalpindi">Rawalpindi</option>
              <option value="Islmabad">Islamabad</option>
              <option value="Attock">Attock</option>
              
              </select>
       
              </div>
              <div>
                <button class="btn btn-primary mt-4" onClick={save}>
                  Submit
                </button>
               
               
              </div>
            </form>
          </div>
          <Row>
  
    
      
</Row>
        </Col>
        
        <Col className="bg-white border"       xs="8">
      
        <h1>Your Coments/Suggestions </h1>

        <input type="text" name='name' value={query} className="form-control" onChange={(e)=>handlesearch(e)} placeholder='Search...' />
    
         
      
     
        
           
       
                {
                    
                    requester.map( (Request, index)=>(
                                 
                      <div class="container mt-4">
                        
       <Card>
         <CardImg
           alt="Card image cap"
           src="./img/c2.jpg"
      
           top
           width="100%"
         />
         <CardBody>
           <CardTitle tag="h5">
            {Request.name}
            
           </CardTitle>
           <CardSubtitle
             className="mb-2 text-muted"
             tag="h6"
           >
            {Request.city}
           </CardSubtitle>
           {Request.msg}
      
           <CardText>
            
           </CardText>
           <LikeButton/>
         </CardBody>
       </Card>

                        </div>
    
                    
              )) }
             
           
        </Col>
        <Col className="bg-white border"       xs="3">
          
          </Col>
      </Row>
    </Container>
    
           <Footer/>
          <br></br>
          </>
  )
}



export default Testimoneials