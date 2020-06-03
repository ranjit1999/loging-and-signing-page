import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,Col, Row, FormGroup, Label, Input
} from 'reactstrap';
import axios from 'axios';



class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      email: '',
      password:''

    };
  }

  
  
  loginRequest =(user) =>{
    axios({ method: 'POST', url: 'https://lit-waters-85247.herokuapp.com/authUsers/login', headers: {'Content-Type': 'application/json'}, data: { email:user.email,password: user.password } })
    .then(res=>{
          console.log(res);
       
          if(res.status === 200){
            alert(`Login Sucess \nUser Details \n name : ${res.data.user[0].name}\n email : ${user.email}\n dob : ${res.data.user[0].dob}\n gender : ${res.data.user[0].gender}`);
          }
   
   }).catch(error => {
     if(user.email !== "")
      {alert("Incorrect Email and Password");}
   

   } )
  }


   handleSubmit = () =>{

    const newUser = {
      
      email : this.state.email,
      password:this.state.password,
     
    }
    console.log(newUser)

    this.loginRequest(newUser)

  };

  

  componentDidMount(){
    this.handleSubmit()
  }

  
  


  render(){

    const handleEmail = (e) =>{
  
      const text = e.target.value;
      //console.log(this.state.nameValid)
  
     
        this.setState(() => ({
          email: text,
          //error: `Maximum 30 characters allowed`
  
        }));
  
      
  
    };
  
  const  handlePassword = (e) =>{
  
      const text = e.target.value;
      //console.log(this.state.nameValid)
  
     
        this.setState(() => ({
          password: text,
          //error: `Maximum 30 characters allowed`
  
        }));
  
      
  
    };


  //const [isOpen, setIsOpen] = useState(false);
  const isOpen = this.state.isOpen;
  const setIsOpen = (isOpen) =>{
    this.setState({ isOpen: !isOpen })
  }

  const toggle = () => setIsOpen( isOpen);

  return (
    <div>
      <Navbar dark  expand="md">
        <NavbarBrand href="/" style={{fontSize:"30px"}}>PretVa</NavbarBrand>
        <NavbarToggler onClick={toggle} style={{color:"#fff"}}  />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavItem>
              <Row form>
                    <Col md={5}>
                    <FormGroup>
                        <Label for="Email" style={{color:"#fff"}}>Email</Label>
                        <Input type="email" name="email" id="Email" placeholder="email" onChange={handleEmail} />
                    </FormGroup>
                    </Col>
                    <Col md={5}>
                    <FormGroup>
                        <Label for="Password" style={{color:"#fff"}}>Password</Label>
                        <Input type="password" name="password" id="Password" placeholder="password" onChange={handlePassword} />
                    </FormGroup>
                    </Col>
                    <Col>
                    
                        <Button style={{backgroundColor:"#01579B",border:"1px solid #000",marginTop:"32px",height:"35px",padding:"5px",marginBottom:"20px"}} onClick={this.handleSubmit}>Log In</Button>

                    </Col>
                </Row>
                  
              </NavItem>
             
          
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
  }
}

export default NavBar;