
import './App.css';


function App() {
  return (
    <div className="dashboard">
        <nav>
            <div className="logo-name">
                <div className="logo-image">
                   <img src="images/logo.png" alt=""/>
                </div>
                <span className="logo_name">dashboard</span>
            </div>
    
            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                       
                        <span className="link-name">Dashboard</span>
                    </li>
                    <li>
                        <span className="icon uil uil-files-landscapes"/>
                        <span className="link-name">Content</span>
                    </li>
                    <li>
                        <span className="icon uil uil-chart"/>
                        <span className="link-name">Analytics</span>
                    </li>
                    <li>
                        <span className="icon uil uil-thumbs-up"/>
                        <span className="link-name">Like</span>
                    </li>
                    <li>
                        <span className="icon uil uil-comments"/>
                        <span className="link-name">Comment</span>
                    </li>
                    <li>
                        <span className="icon uil uil-share"/>
                        <span className="link-name">Share</span>
                    </li>
                </ul>
                
                <ul className="logout-mode">
                    <li>
                        <span className="icon uil uil-signout"/>
                        <span className="link-name">Logout</span>
                    </li>
    
                </ul>
            </div>
        </nav>
    
        <div className="content">
            <div className="top">
                <span className="icon uil uil-bars sidebar-toggle"/>
                <div className="search-box">
                    <span className="icon uil uil-search"/>
                    <input type="text" placeholder="Search here..."/>
                </div>
            </div>
    
            <div className="dash-content">
                <div className="overview">
                    <div className="title">
                        <span className="icon uil uil-tachometer-fast-alt"/>
                        <span className="text">Dashboard</span>
                    </div>
    
                    <div className="boxes">
                        <div className="box box1">
                            <span className="icon uil uil-thumbs-up"/>
                            <span className="text">Total Likes</span>
                            <span className="number">50,120</span>
                        </div>
                        <div className="box box2">
                            <span className="icon uil uil-comments"/>
                            <span className="text">Comments</span>
                            <span className="number">20,120</span>
                        </div>
                        <div className="box box3">
                            <span className="icon uil uil-share"/>
                            <span className="text">Total Share</span>
                            <span className="number">10,120</span>
                        </div>
                    </div>
                </div>
    
                <div className="activity">
                    <div className="title">
                        <span className="icon uil uil-clock-three"/>
                        <span className="text">Recent Activity</span>
                    </div>
    
                    <div className="activity-data">
          
                        <div className="data names">
                            <span className="data-title">Name</span>
                            <span className="data-list">Aravinth</span>
                            <span className="data-list">Deepak</span>
                            <span class="data-list">Manish</span>
                        <span class="data-list">pratish</span>
                        <span class="data-list">Mahi</span>
                        <span class="data-list">Gangu</span>
                      
                        </div>
                        <div className="data email">
                            <span className="data-title">Email</span>
                            <span className="data-list">aravinth@gmail.com</span>
                            <span class="data-list">deepak@gmail.com</span>
                        <span class="data-list">manish@gmail.com</span>
                        <span class="data-list">pratish@gmail.com</span>
                        <span class="data-list">mahi@gmail.com</span>
                        <span class="data-list">gangu@gmail.com</span>
                        </div>
                        <div class="data joined">
                        <span class="data-title">Joined</span>
                        <span class="data-list">2024-04-12</span>
                        <span class="data-list">2024-04-12</span>
                        <span class="data-list">2024-04-13</span>
                        <span class="data-list">2024-04-13</span>
                        <span class="data-list">2024-04-14</span>
                        <span class="data-list">2024-04-14</span>
                        
                    </div>
                    <div class="data type">
                        <span class="data-title">Type</span>
                        <span class="data-list">New</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">New</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">New</span>
                     
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;