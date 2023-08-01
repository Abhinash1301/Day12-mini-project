import React from 'react'
import './findjob.css';
import './Companies';
import './details';
import './profile';
import {Link} from 'react-router-dom';
function dashboard() {
  return (
    <div>
	<header>

		<div class="logosec">
			<div class="logo">Recruito</div>
			
		</div>
	</header>
	<div class="main-container">
		<div class="navcontainer">
			<nav class="nav">
				<div class="nav-upper-options">
                <div class=" nav-option option16">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
							class="nav-img"
							alt="articles"></img>
						<h3> Find Job</h3>
					</div>
					<div class="nav-option option455">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
							class="nav-img"
							alt="blog"></img>
						<Link to="/profile"><h3> Profile</h3></Link>
					</div>
					
					<div class="nav-option option4">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
							class="nav-img"
							alt="institution"></img>
						<Link to="/Companies"><h3> Applied</h3></Link>
					</div>
                
					<div class="nav-option logout">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
							class="nav-img"
							alt="logout"></img>
						<Link to="/Login"><h3>Logout</h3></Link>
					</div>

				</div>
			</nav>
		</div>
		<div class="main">
            <div class="searchbar">
			<input type="text"
				placeholder="Search"></input>
			<div class="searchbtn">
			<img src="https://cdn-icons-png.flaticon.com/128/2811/2811790.png"class="icn srchicn"alt="search-icon"></img>
			</div>
		</div>
			<div class="box-container">
            <div class="report-container">
    
                    <div class="report-body">
                    <div class="box-container">
                    <div class="box box1">
                        <div class="text">
                        
                        <h2 class="topic">Responsible for desigining,planning.</h2>
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/10096/10096351.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h6 class="topic-heading">Amazon</h6>
                            <h2 class="topic">Senior UI/UX designer</h2>
                            <br></br>
                            <br></br>
                        <Link to="/applynow"><button class="button-34" role="button">Apply Now</button></Link>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
    
                    <div class="box box2">
                        <div class="text">
                     
                        <h2 class="topic">Collabrate with Marketing team</h2>
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/300/300221.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h2 class="topic-heading">Google</h2>
                            <h2 class="topic">Senior Motion Designer</h2><br></br>
                            <br></br>
                            <Link to="/details"> <button class="button-34" role="button">Apply Now</button></Link>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
    
                    <div class="box box3">
                        <div class="text">
                       
                        <h2 class="topic">Looking for Senior UI/UX designer</h2>
                        <br></br>
                        <img src=
    "https://www.freepnglogos.com/uploads/yahoo-logo-png/yahoo-logo-png-y-logo-yahoo-social-media-icons-2.png"
                            class="icn srchicn"></img>
                            <h2 class="topic-heading">Yahoo</h2>
                            <h2 class="topic">Graphic Designer</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Apply Now</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
    
                    <div class="box box4">
                        <div class="text">
                    
                        <h2 class="topic">Collabrate with product Marketing team</h2>
                        <br></br>
                        <img src=
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Zoho-logo.png"
                            class="icn srchicn"
                            ></img>
                            <h2 class="topic-heading">Zoho</h2>
                            <h2 class="topic">Product Manager</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Apply Now</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                        </div>      <div class="box box4">
                        <div class="text">
                    
                        <h2 class="topic">Collabrate with product Marketing team</h2>
                        <br></br>
                        <img src=
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Zoho-logo.png"
                            class="icn srchicn"
                            ></img>
                            <h2 class="topic-heading">Zoho</h2>
                            <h2 class="topic">Product Manager</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Apply Now</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                        </div>        <div class="box box2">
                        <div class="text">
                     
                        <h2 class="topic">Collabrate with Marketing team</h2>
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/300/300221.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h2 class="topic-heading">Google</h2>
                            <h2 class="topic">Senior Motion Designer</h2><br></br>
                            <br></br>
                        <button class="button-34" role="button">Apply Now</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
                    <div class="box box1">
                        <div class="text">
                        
                        <h2 class="topic">Responsible for desigining,planning.</h2>
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/10096/10096351.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h6 class="topic-heading">Amazon</h6>
                            <h2 class="topic">Senior UI/UX designer</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Apply Now</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>

                    
                </div>
</div>
</div>
</div>
            </div>
            </div></div>
           
)
}
export default dashboard