import React from 'react';



class UpSection extends React.Component {

    render() {
        return (
            <section className="uppsection">
                <div className="container">
                    <div className="row ">
                        <div className=" " >
                            <h1 className="hidden-xs">Land Top Talent to Your Projects</h1><h1 className="visible-xs">Get more done with freelancers</h1>

                            <p className="hidden-xs">Get more done with freelancers</p><p className="visible-xs">Grow your business with the top freelancing website</p>





                            <div className="row col-md-12">
                            <div className="form-inline  visible-lg visible-md">
  
                                <div className="input-group col-md-6">
                                    <input className="form-control " placeholder="What type of work do you need?" type="text"></input>
                                    
                                </div>
                                <div className="input-group">
                                    
                                    <a href="/dev" className="btn  btn-primary form-control " >
                                        Get Started
            </a>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>

            </section>

        )
    }
}

export default UpSection;