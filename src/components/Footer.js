import React from 'react'



const Footer = () => {

     // 
    //  justify-content-center
    return (
        <footer className="container-fluid bg-dark px-4">
            <div className="row text-light py-2 px-0 aboutContact">
                <div className="col-sm-6 text-center px-0">
                    <h5 className="pb-3">About Us</h5>
                    <p className="small">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Amet tenetur ut vero ea quisquam numquam expedita quod aliquid exercitationem nisi,
                        Amet tenetur ut vero ea quisquam numquam expedita quod aliquid exercitationem nisi,
                        quasi odio itaque deserunt unde!
                    </p>
                </div>
               
                <div className="col-sm-6 text-center px-0">
                   
                    <h5 className="pb-3">Contact</h5>
                    <p className="text-light">Phone: 5555-555</p>
                    <p className="text-light">Adress: Street 1000, Mogadishu, Somalia </p>
                    <p className="text-light">Email: moviesapp@gmail.com</p>

                </div>
            </div>
            <div className="row d-block p-4 secondPart">  
                    <div className="text-center p-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="mx-sm-4 mx-2 fab fa-facebook fa-3x text-primary"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="mx-sm-4 mx-2 fab fa-instagram fa-3x insta"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="mx-sm-4 mx-2 fab fa-twitter fa-3x text-info"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="mx-sm-4 mx-2 fab fa-linkedin fa-3x text-primary"></i>
                        </a>
                    </div>         
                <div className=" text-center text-light mt-3 ">
                    <p>Copyright &copy; 2020. Made by Dick Steel</p>
                </div>
            </div>
    </footer>
    )
}

export default Footer
