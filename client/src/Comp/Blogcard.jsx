import React from 'react'
import { Button,Modal, Row ,Container,CardGroup,Card,CardSubtitle,
    CardBody,Col,CardImg,CardTitle, Navbar,Badge,CardText} from 'reactstrap';
    import LikeButton from './LikeButton';

function Blogcard  (Request,key)  {
  return (
    <div>  
      <CardGroup>
       
   
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
           
      
           <CardText>
             This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
           </CardText>
           <LikeButton/>
         </CardBody>
       </Card>
      </CardGroup>
</div>
  )
}

export default Blogcard