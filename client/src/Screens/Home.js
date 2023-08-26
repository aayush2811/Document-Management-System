import React from "react";
import Particles from "react-particles";
import {Card, Grid, Typography, Avatar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

// const pinataSDK = require('@pinata/sdk');
// const pinata = new pinataSDK('2e4bc76edfa660bcb6ee','be52154cef1bc02c89bad49a9f78e207f027151743a8f6dc555ebfb27263c042')

// pinata.testAuthentication().then((result) => {
//   console.log(result);

// }).catch((err) => {
//   console.log(err);
// });


const particleOpt = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};


export default function Home() {
  const navigate = useNavigate();  
  const email = localStorage.getItem("email");
  const account = localStorage.getItem("account");
  return (
    
 <div style={{ height: "750px", backgroundColor: "#2196f3" }}>
        <Particles params={particleOpt} />

        <div style={{ position: "absolute", top: "50px", left: "100px" }}>
          <Grid container justify="center">
            <Grid item md={3}>
              <div
                style={{ position: "absolute", marginLeft: "250px" }}
                className="shadow"
              >
                <Card
                  style={{
                    width: "400px",
                    height: "480px",
                    backgroundColor: "#e3f2fd"
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", padding: "25px" }}
                  >
                    Student
                  </Typography>
                  <Grid container justify="center">
                    <Avatar style={{ width: "200px", height: "200px" }}>
                      <img
                        src="https://cdn5.vectorstock.com/i/1000x1000/38/44/student-graduate-avatar-icon-vector-11983844.jpg"
                        alt=""
                        style={{ height: "300px", margin: "10px" }}
                      />
                    </Avatar>
                  </Grid>
                  <Grid container justify="center">
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        this.setState({ s: true });
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        this.setState({ stud: true });
                      }}
                    >
                      Sign Up
                    </Button>{" "}
                  </Grid>
                </Card>
              </div>
            </Grid>
            <Grid item md={6} />
            <Grid item md={3}>
              <div
                style={{ position: "absolute", marginLeft: "750px" }}
                className="shadow"
              >
                <Card
                  style={{
                    width: "400px",
                    height: "480px",
                    backgroundColor: "#e3f2fd"
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", padding: "25px" }}
                  >
                    Company
                  </Typography>
                  <Grid container justify="center">
                    <Avatar style={{ width: "200px", height: "200px" }}>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2SbeJHWl1xQ0KnVooa9VnslY1z6wk5Jzdw&usqp=CAU"
                        alt=""
                        style={{ height: "300px", margin: "10px" }}
                      />
                    </Avatar>
                  </Grid>
                  <Grid container justify="center">
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        navigate("/Signup")
                        //this.setState({ i: true });
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        this.setState({ inst: true });
                      }}
                    >
                      Sign Up
                    </Button>{" "}
                  </Grid>
                </Card>
              </div>
            </Grid>
          </Grid>
          {/* <Particles params={particleOpt} /> */}
        </div>
        
      </div>
    
// <div>
//       <h3>Your account: {account} </h3>
//       <h3>Your email: {email} </h3>
//       <button
//         style={button}
//         onClick={() => {
//           localStorage.removeItem("email");
//           localStorage.removeItem("account");
//           window.location.reload();
//         }}
//       >
//         {" "}
//         Log out
//       </button>
//     </div>
  );
}
const button = {
  width: 100,
  padding: 10,
  borderRadius: 5,
  margin: 10,
  cursor: "pointer",
  fontSize: 17,
  color: "white",
  backgroundColor: "#9D27CD",
  border: "none",
};

// import React, { useState } from 'react';
// import { sha1, sha256, sha384, sha512 } from 'crypto-hash';
// import './hashing.css';

// export default function HashingForm() {
//     //const [algorithms] = useState(['sha1', 'sha256', 'sha384', 'sha512']);
//     let [text_input, setTextInput] = useState('');
//     let [file_input, setFileInput] = useState('');
//     let [algorithm, setAlgorithm] = useState('sha1');
//     let [output, setOutput] = useState('');
//     // For handling text input
//     const handleTextInput = async (e) => {
//         // Get the value
//         let value = e.target.value;

//         let result = '';

//         // Get the current active algorithm and hash the value using it.
//         // if (algorithm == 'sha1') {
//         //     result = await sha1(value);
//         // } else if (algorithm == 'sha256') {
//         //     result = await sha256(value);
//         // } else if (algorithm == 'sha384') {
//         //     result = await sha384(value);
//         // } else if (algorithm == 'sha512') {
//         //     result = await sha512(value);
//         // }
//          result = await sha256(value);

//         // Set the hashed text as output
//         setOutput(result);

//         // Set the value of the text input
//         setTextInput(value);
//     }

//     // For handling file input
//     const handleFileInput = (e) => {

//         // Initializing the file reader
//         const fr = new FileReader();

//         // Listening to when the file has been read.
//         fr.onload = async () => {

//             let result = '';

//             // Hashing the content based on the active algorithm
//             // if (algorithm == 'sha1') {
//             //     result = await sha1(fr.result);
//             // } else if (algorithm == 'sha256') {
//             //     result = await sha256(fr.result);
//             // } else if (algorithm == 'sha384') {
//             //     result = await sha384(fr.result);
//             // } else if (algorithm == 'sha512') {
//             //     result = await sha512(fr.result);
//             // }
//             result = await sha256(fr.result);

//             // Setting the hashed text as the output
//             setOutput(result);

//             // Setting the content of the file as file input
//             setFileInput(fr.result);
//         }

//         // Reading the file.
//         fr.readAsText(e.target.files[0]);
//     }

//     // For handling algorithm change
//     const handleAlgorithmChange = async (e) => {

//         // Get the selected algorithm
//         let value = e.target.value;

//         let result = '';

//         // Check if we have a text input
//         if (text_input) {

//             // Hash the text based on the selected algorithm
//             // if (value == 'sha1') {
//             //     result = await sha1(text_input);
//             // } else if (value == 'sha256') {
//             //     result = await sha256(text_input);
//             // }
//             // else if (value == 'sha384') {
//             //     result = await sha384(text_input);
//             // }
//             // else if (value == 'sha512') {
//             //     result = await sha512(text_input);
//             // }


//         }

//         // Check if we have a file input
//         if (file_input) {

//             // Hash the file content based on the selected algorithm
//             // if (value == 'sha1') {
//             //     result = await sha1(file_input);
//             // } else if (value == 'sha256') {
//             //     result = await sha256(file_input);
//             // } else if (value == 'sha384') {
//             //     result = await sha384(file_input);
//             // } else if (value == 'sha512') {
//             //     result = await sha512(file_input);
//             // }
//                 result = await sha256(file_input);

//         }

//         // Set the selected algorithm
//         setAlgorithm(value);

//         // Set the hashed text
//         setOutput(result);
//     }

//     return (
//         <div className='hashing-container'>
//             <div className='hashing-content'>

//                 <div className="hashing-form">
//                     <h4 className="hashing-form-heading">Input</h4>
//                     <form>
//                         <div className="form-group">
//                             <label htmlFor="text-input">Text</label>
//                             <input type="text" className="form-control" id="text-input" placeholder='Write some text' value={text_input} onChange={handleTextInput} />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="file-input">File Input</label>
//                             <input type="file" className="form-control" id="file-input" onChange={handleFileInput} />
//                         </div>
//                     </form>
//                 </div>


//                 <div className="hashed-output">
//                     <h4 className="hashed-algorithm-heading">Output</h4>
//                     <div className="hashed-algorithm-container">
//                         <p className="hashed-algorithm-text">
//                             {output}
//                         </p>
//                     </div>
//                 </div>
//                   <button onClick={handleAlgorithmChange}>
//         {" "}
//         Submit
//       </button>
//             </div>
//         </div>

//     );

// }