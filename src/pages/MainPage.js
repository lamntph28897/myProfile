import { Admin, Information } from "../data";


const ContainerAbout= () => {
    return(
        /*html*/`
        <section class="container about" id="about">
        <div class="main-title">
            <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
        </div>
        <div class="about-container">
            <div class="left-about">
                <h4>Information About me</h4>
                ${Information.map(function(infor){
                    return `
                        ${infor.Content}
                        <br /> <br />
                        ${infor.Content2}
                    `
                })}
            </div>
            <div class="right-about">
                <div class="about-item">
                    <div class="abt-text">
                        <p class="large-text">MY SKILLS</p>
                        <p class="small-text"></p>
                    </div>
                </div>
                <div class="about-item">
                    <div class="abt-text">
                        <p class="large-text">HTML5</p>
                        <p class="small-text">Normal</p>
                    </div>
                </div>
                <div class="about-item">
                    <div class="abt-text">
                        <p class="large-text">CSS3</p>
                        <p class="small-text">Normal</p>
                    </div>
                </div>
                <div class="about-item">
                    <div class="abt-text">
                        <p class="large-text">JAVACRIPT</p>
                        <p class="small-text">Normal</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `
    )
};
const Container = () => {
    return(
        /*html*/`
        <section class="container" id="portfolio">
        <div class="main-title">
            <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
        </div>
        <p class="port-text">
            Here is some of my work that I've done in various programming languages.
        </p>
        <div class="portfolios">
            <div class="portfolio-item">
                <div class="image">
                    <img src="img/port1.jpg" alt="">
                </div>
                <div class="hover-items">
                    <h3>Project Source</h3>
                    <div class="icons">
                        <a href="https://github.com/lamntph28897/myProfile" class="icon">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/tenla.lam/" class="icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@PolyTuts" class="icon">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="image">
                    <img src="img/port2.jpg" alt="">
                </div>
                <div class="hover-items">
                    <h3>Project Source</h3>
                    <div class="icons">
                        <a href="https://github.com/lamntph28897/myProfile" class="icon">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/tenla.lam/" class="icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@PolyTuts" class="icon">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="image">
                    <img src="img/port3.jpg" alt="">
                </div>
                <div class="hover-items">
                    <h3>Project Source</h3>
                    <div class="icons">
                        <a href="https://github.com/lamntph28897/myProfile" class="icon">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/tenla.lam/" class="icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@PolyTuts" class="icon">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="image">
                    <img src="img/port4.jpg" alt="">
                </div>
                <div class="hover-items">
                    <h3>Project Source</h3>
                    <div class="icons">
                        <a href="https://github.com/lamntph28897/myProfile" class="icon">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/tenla.lam/" class="icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@PolyTuts" class="icon">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="image">
                    <img src="img/port5.jpg" alt="">
                </div>
                <div class="hover-items">
                    <h3>Project Source</h3>
                    <div class="icons">
                        <a href="https://github.com/lamntph28897/myProfile" class="icon">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/tenla.lam/" class="icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@PolyTuts" class="icon">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="image">
                    <img src="img/port2.jpg" alt="">
                </div>
                <div class="hover-items">
                    <h3>Project Source</h3>
                    <div class="icons">
                        <a href="https://github.com/lamntph28897/myProfile" class="icon">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/tenla.lam/" class="icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@PolyTuts" class="icon">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="image">
                    <img src="img/port7.jpg" alt="">
                </div>
                <div class="hover-items">
                    <h3>Project Source</h3>
                    <div class="icons">
                        <a href="https://github.com/lamntph28897/myProfile" class="icon">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/tenla.lam/" class="icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@PolyTuts" class="icon">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `
    )
};
const ContainerBlog=()=>{
    return /*html*/`
    <section class="container" id="blogs">
        <div class="blogs-content">
            <div class="main-title">
                <h2>My <span>Blogs</span><span class="bg-text">My Blogs</span></h2>
            </div>
            <div class="blogs">
                <div class="blog">
                    <img src="img/port6.jpg" alt="">
                    <div class="blog-text">
                        <h4>
                            How to Create Your Own Website
                        </h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Doloribus natus voluptas, eos obcaecati recusandae amet?
                        </p>
                    </div>
                </div>
                <div class="blog">
                    <img src="img/blog1.jpg" alt="">
                    <div class="blog-text">
                        <h4>
                            How to Become an Expert in Web Design
                        </h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Doloribus natus voluptas, eos obcaecati recusandae amet?
                        </p>
                    </div>
                </div>
                <div class="blog">
                    <img src="img/blog2.jpg" alt="">
                    <div class="blog-text">
                        <h4>
                            Become a Web Designer in 10 Days
                        </h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Doloribus natus voluptas, eos obcaecati recusandae amet?
                        </p>
                    </div>
                </div>
                <div class="blog">
                    <img src="img/blog3.jpg" alt="">
                    <div class="blog-text">
                        <h4>
                            Debbuging made easy with Web Inspector
                        </h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Doloribus natus voluptas, eos obcaecati recusandae amet?
                        </p>
                    </div>
                </div>
                <div class="blog">
                    <img src="img/port1.jpg" alt="">
                    <div class="blog-text">
                        <h4>
                            Get started with Web Design and UI Design
                        </h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Doloribus natus voluptas, eos obcaecati recusandae amet?
                        </p>
                    </div>
                </div>
                <div class="blog">
                    <img src="img/port3.jpg" alt="">
                    <div class="blog-text">
                        <h4>
                            This is what you need to know about Web Design
                        </h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Doloribus natus voluptas, eos obcaecati recusandae amet?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
};
const MainPage = () => {
return /*html*/`
    <main>
    <section class="container contact" id="contact">
        <div class="contact-container">
            <div class="main-title">
                <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
            </div>
            <div class="contact-content-con">
                <div class="left-contact">
                    <h4>Contact me here</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        In, laborum numquam? Quam excepturi perspiciatis quas quasi.
                    </p>
                    <div class="contact-info">
                    ${Admin.map(function(ad){
                        return`
                        <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Location</span>
                        </div>
                        <p>
                            : ${ad.location}
                        </p>
                    </div>
                    <div class="contact-item">
                            <div class="icon">
                                <i class="fas fa-envelope"></i>
                                <span>Email</span>
                            </div>
                            <p>
                                <span>: ${ad.email}</span>
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <i class="fas fa-user-graduate"></i>
                                <span>Education</span>
                            </div>
                            <p>
                                <span>: ${ad.education}</span>
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <i class="fas fa-user-graduate"></i>
                                <span>Mobile Number</span>
                            </div>
                            <p>
                                <span>: ${ad.numberPhone}</span>
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <i class="fas fa-globe-africa"></i>
                                <span>Languages</span>
                            </div>
                            <p>
                                <span>: ${ad.languages}</span>
                            </p>
                        </div>
                        `
                    })}
                    </div>
                    <div class="contact-icons">
                        <div class="contact-icon">
                            <a href="https://www.facebook.com/LeonNguyen26.3/" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/tenla.lam/" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://github.com/lamntph28897" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCyoeL38u4gtCAIU42l0ih7w" target="_blank">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="right-contact">
                    <form action="" class="contact-form">
                        <div class="input-control i-c-2">
                            <input type="text" required placeholder="YOUR NAME">
                            <input type="email" required placeholder="YOUR EMAIL">
                        </div>
                        <div class="input-control">
                            <input type="text" required placeholder="ENTER SUBJECT">
                        </div>
                        <div class="input-control">
                            <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                        </div>
                        <button class="ring ring-green-500 rounded-lg hover:bg-green-500 float-right p-0.5 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 ..." >SEND</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>
    `
};

export { MainPage,ContainerAbout,Container,ContainerBlog }