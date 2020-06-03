import React from 'react';
import { Col,CardText,FormFeedback, Button, Form, FormGroup,Input,CustomInput } from 'reactstrap';

import axios from 'axios';

class FormData extends React.Component {
  state={
    nameValid:false,
    dobValid:false,
    name:'',
    email:'',
    password:'',
    gender:'',
    dob:'',
    users:[]


  };

   loginRequest =() =>{
    axios({ method: 'POST', url: 'https://lit-waters-85247.herokuapp.com/authUsers/login', headers: {'Content-Type': 'application/json'}, data: { email: 'adit@gmail.com',password: 'Bikramganj' } })
    .then(res=>{
       
          console.log(res)
   
   })

   } 
    getRequest =()=>{
    axios({ method: 'GET', url: 'https://lit-waters-85247.herokuapp.com/authUsers' })
    .then(res=>{
          const users = res.data.users;
        
          // // console.log(orders[0])
           this.setState({users})
         
          // console.log(this.state.scascan_rev)
          console.log(users)
   
     })

   } 

   signupRequest = (user) =>{
    axios({ method: 'POST', url: 'https://lit-waters-85247.herokuapp.com/authUsers/signup', headers: {'Content-Type': 'application/json'}, data: { email: user.email,password: user.password,dob:user.dob,gender:user.gender,name:user.name } })
    .then(res=>{
          // const orders = res.data.data;
        
          // // console.log(orders[0])
          // this.setState({orders})
         
          // console.log(this.state.scascan_rev)
          console.log(res)
          if(res.status === 201){
            alert("User Saved to database")
          }
   
   }).catch(err =>{
     if(user.email !== "")
     {alert("Account already exists with this email")}
   })

  } 

    handleSubmit = () =>{

    const newUser = {
      name : this.state.name,
      email : this.state.email,
      password:this.state.password,
      dob : this.state.dob,
      gender : this.state.gender
    }
    console.log(newUser)

    this.signupRequest(newUser)

  };

  

  componentDidMount(){
    this.handleSubmit()
  }

  



 
   

  render(){

   

   
  
  const  handleNameChange = (e) => {
      const text = e.target.value;
      console.log(this.state.nameValid)
  
      if(text.length > 30){
        this.setState(() => ({
          nameValid: true,
          name:text
          //error: `Maximum 30 characters allowed`
  
        }));
      }else{
        this.setState(() => ({
          nameValid: false,
          name:text
          //error: `Maximum 30 characters allowed`
  
        }));
  
      }
     
    };
  
   const handleDOBChange = (e) => {
      const text = e.target.value;
      
      console.log(this.state.dobValid)
      var re =  /^\d{4}-\d{1,2}-\d{1,2}$/;
  
      if(re.test(text)){
        this.setState(() => ({
          dobValid: false,
          dob:text
          //error: `Maximum 30 characters allowed`
  
        }));
      }else{
        this.setState(() => ({
          dobValid: true,
          dob:text
          //error: `Maximum 30 characters allowed`
  
        }));
  
      }
     
    };
  
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
  
    
   const handleGender = (e) =>{
      const gen = e.target.value;
      this.setState(() => ({
         gender:gen,
  
  
      }));
     }
  
  
    
    
  

    // const { users } = this.props.user
    // console.log(users);

  return (
    <div className ="container" style={{width:"600px"}} >
           
    <Form style={{marginTop:40}} >
      <FormGroup row >
      <Col  sm={4}>
          <CardText className="center">Name</CardText>
      </Col>
        <Col sm={6}>
          <Input invalid={this.state.nameValid}  
          valid={this.state.nameValid} type="text" name="name" id="nameInput" onChange={handleNameChange}placeholder="Name"  />
         <FormFeedback>Maximum 30 characters allowed</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
      <Col  sm={4}>
          <CardText className="center">Email</CardText>
      </Col>
        <Col sm={6}>
          <Input type="email"    name="email" id="emailInput" onChange={handleEmail} placeholder="Email"/>
          
        </Col>
      </FormGroup>
      <FormGroup row>
      <Col  sm={4}>
          <CardText className="center">Password</CardText>
      </Col>
        <Col sm={6}>
          <Input name="password" type="password"  placeholder="Password" onChange={handlePassword} />
          <FormFeedback>Maximum 30 characters allowed</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
      <Col  sm={4}>
          <CardText className="center">DOB</CardText>
      </Col>
        <Col sm={6}>
        <Input
          type="datetime"
          name="datetime"
          id="exampleDatetime"
          placeholder="yyyy-mm-dd" invalid={this.state.dobValid} onChange={handleDOBChange}
        />          <FormFeedback>Valid format is YYYY-MM-DD</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
      <Col  sm={4}>
          <CardText className="center">Gender</CardText>
      </Col>
        <Col sm={6}>
         
      
          <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Male" inline value="male" onChange={handleGender}/>
          <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Female"  inline value="female" onChange={handleGender}/>
          <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="Custom" inline value="custom" onChange={handleGender} />

    
        

        
          
        </Col>
      </FormGroup>



      <FormGroup row style={{marginTop:"40px"}}>
        <Col sm={{ size: 10, offset: 6 }}>
        
          <Button color="success" style={{marginLeft:15}} onClick={this.handleSubmit}>Sign Up</Button>
        </Col>
         

        </FormGroup>
        
    </Form>
       
        </div>
  );
  }
}


export default FormData;