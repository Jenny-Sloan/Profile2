import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    //adding html
//     <html>

// <head>
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">;
//     <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light+Two" rel="stylesheet">
//     <link href="https://fonts.googleapis.com/css?family=Over+the+Rainbow" rel="stylesheet">



//     <style>
//         body {
//             font-family: 'Shadows Into Light Two', cursive;
//             font-size: 20px;
//             background-image: url("https://i.etsystatic.com/11598164/r/il/aae7ca/953297164/il_794xN.953297164_3p7s.jpg");
//             background-size: cover;
//             color: white;

//         }

//         div.fixed {
//             position: fixed;
//             top: 0;
//             right: center;
//             width: 100vw;
//             border: 3px solid black;
//             background: black;
//         }

//         h2 {
//             font-weight: bold;
//             font-style: italic;
//             text-decoration: underline;
//             color: maroon;
//         }

//         section {
//             margin: 25px;

//         }

//         h1 {
//             font-family: 'Over the Rainbow', cursive;
//             font-size: 80px;
//             padding: 30px;
//             text-align: center;
//             color: maroon;
//             font-weight: bold;
//             text-shadow: 2px 1px white;
//         }

//         section {
//             padding: 15px;
//             margin: 10px;
//             border: 2px hidden
//         }

//         .list ul {
//             list-style-type: none;
//             padding-left: 0;
//             display: flex;

//         }

//         .list {
//             display: inline-block;
//         }

//         .list a::after {
//             display: inline-block;
//             content: '>';
//             color: silver;
//             font-weight: bold;
//         }

//         hr {
//             overflow: visible;
//             height: 30px;
//             border-style: solid;
//             border-color:white;
//             border-width: 5px 0 0 0;
//             border-radius: 20px;

//         }
//     </style>
// </head>

// <head>
//     <title>Jenny Sloan</title>

// <body>
//     <section>
//         <header>
//             <h1>Jenny Sloan</h1>
//         </header>
//         <hr>
//     </section>
//     <header>
//         <div class="fixed">
//             <nav class="list">
//                 <ul>
//                     <li><a href="#about">About Me</a></li>
//                     <li><a href="#skills">Skills and Abilities</a></li>
//                     <li><a href="#exp">Experience</a></li>
//                     <li><a href="#achiev">Achievements</a></li>
//                     <li><a href="#edu">Education</a></li>
//                     <li><a href="#contact">Contact Me</a></li>
//                 </ul>
//             </nav>
//         </div>
//     </header>
//     <section>
//         <h2 id="about">About Me:</h2>
//         <p>
//             I have always enjoyed working with people. I have a drive to ensure that whichever customer I am working
//             with,
//             internal or external, gets the best experience possible. I want to challenge myself every day and continue
//             to learn with everything that I do. </p>
//     </section>
//     <section>
//         <h2 id="skills"> Skills and Abilities</h2>
//         <ul>
//             <li> Human Resources – Experience in performance management, payroll functions, scheduling, retention of a
//                 top performing team, coaching, mentoring and employee relations</li>
//             <li> Customer Service – Able to provide the best customer service to internal and external customers to help
//                 drive profitable top line sales</li>
//             <li> Talent Acquisition – Ability to attract top talent, recruited and create an external and internal bench
//                 of candidates, staffed a store of 60+ associates to support and drive sales</li>
//             <li> Leadership – Experience in leading and mentoring top talent to drive the business. Ability to
//                 communicate effectively with team, peers and senior management within the organization</li>
//             <li> Business Acumen – Able to analyze business to determine root causes and implement action plans</li>
//         </ul>
//     </section>
    <section>
        <h2 id="exp">Experience</h2>
        <ul>
            <li>Staffing Coordinator - US and Canada, Incorporate Massage</li>
            <ul>
                <li>Schedule Events and Programs for the multi-million-dollar company in the United States and Canada
                </li>
                <li>Coached employees to work performance and work schedules</li>
                <li>Responsible for customer experience from booking of event thru follow thru of completion of event
                </li>
                <li>Handled 80% of company's events with 0.2% No Show Rate</li>
            </ul>
            <li>Staffing Manager - Elwood Staffing</li>
            <ul>
                <li>Responsible for the full hiring cycle: onboarding, paperwork, coaching, placement in employment</li>
                <li>Processed payroll for 100+ associates. Processed supplemental billing and position billing</li>
                <li>Maintained professional contact with customer and associates alike</li>
                <li>Determined the right person and placement for each position. Followed up to determine the customers
                    needs</li>
                <li>Excellent written and verbal communication</li>
            </ul>
        </ul>
    </section>
//     <section>
//         <h2 id="achiev">Achievements</h2>
//         <p>
//             Won "Jingle All the Way" Contest for Bath and Body Works 2012 - #2 top grossing store in the entire company
//             nation wide
//         </p>
//         <p>Maintained a turnover rate of 1% during 7-year career at Bath and Body Works</p>

//     </section>
//     <section>
//         <h2 id="edu">Education</h2>
//         <p>2003-2008 Bachelors in Business Management – emphasis in Human Resource, Orem, UT, Utah Valley University</p>
//     </section>
//     <section>
//         <h2 id="contact">Contact Me</h2>
//         <address>
//             <a href="jennysloan83@gmail.com">jennysloan83@gmail.com</a><br />
//             <a href="tel:801.916.9916">801.916.9916</a><br />
//         </address>
//     </section>
// </body>
// </head>

// </html>
  );
}

export default App;
