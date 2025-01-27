import React from 'react';
import {useNavigate } from 'react-router-dom'; 
  

function Dashboard(){
const Navigate = useNavigate(); 
    const upload=()=>{
        Navigate('/webcam');
    }
    const flashtoday=()=>{
        Navigate('/flashtoday')
    }
    const profile=()=>{
        Navigate('/profile');
    }
    const notification=()=>{
        Navigate('/notification');
    }
    return( 
        <div>
            <div class="sticky" id="header"> 
            <h1 >DashBoard</h1>
            </div>  
            
            <div class="dashboard">
            <h3 class="appname">App name</h3>
            <button class="profilebtn2" onClick={()=>profile()}>  
            <i class="fa fa-user" aria-hidden="true"></i> </button>
            <div class="header2">
            <button class="uploadbtn3" onClick={()=>upload()}><i class="fa fa-upload"></i>   <i class="fa fa-camera"></i></button></div>
            <button class="homebtn1"><i class="fa fa-home"></i> </button>
            {/* <image src="C:\Users\DELL\Desktop\login\login\public\assets\green.jpg"/> */}
            <button class="notificationbtn4" onClick={()=>notification()} ><i class="fa fa-bell"></i> </button><br></br> 
            <img class="greenimg"src=" assets/green.jpg" alt="greenary"/>



             
            <div class="toolbar">
                <a class="like">
                    <svg height="30" role="img" viewBox="0 0 48 48" width="24">
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                </a>
                <a class="comment">
                    <svg  fill="#262626" height="30" role="img" viewBox="0 0 48 48" width="24">
                    <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>
                </svg>
                </a>
                <a class="transfer">
                    <svg fill="#262626" height="30" viewBox="0 0 48 48" width="24">
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
                </a>
                <a class="signet">
                    <svg fill="#262626" height="30" viewBox="0 0 48 48" width="24">
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24  29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                    </svg>
                </a>
                </div>





            <img src=" assets/green.jpg" alt="greenary"/><br></br> 
            <br></br>
            <button onClick={()=>flashtoday()}><i class="fa fa-camera"></i>Flashtoday</button> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
            </link> 
            </div>  
            {/* <footer>
                <p>Author: Hege Refsnes<br/>
                <a href="mailto:hege@example.com">hege@example.com</a></p>
            </footer> */}

            <section>
                <div class="header">
                    <div class="user">Clément</div>
                    <div class="param">
                        <svg aria-label="Plus d’options" class="_8-yf5 " fill="#262626" height="16" role="img" viewBox="0 0 48 48" width="16">
                            <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
                            <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
                            <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle>
                        </svg>
                    </div>
                </div>
                <div class="img-container">
                <img src="https://i.ibb.co/0p5691d/t-l-chargement.jpg" alt="Publication Photo"></img>
                </div>
                <div class="toolbar">
                <a class="like">
                    <svg height="24" role="img" viewBox="0 0 48 48" width="24">
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                </a>
                <a class="comment">
                    <svg fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24">
                    <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>
                </svg>
                </a>
                <a class="transfer">
                    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
                </a>
                <a class="signet">
                    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                    </svg>
                </a>
                </div>
                <div class="description"><strong>Clément&nbsp;&nbsp;</strong>Apple 
                It is one of the 
                Big Five American information technology companies, along with Amazon, 
                Google, Microsoft, and Facebook.</div>
            </section>

        </div>
    )
};
export default Dashboard;

