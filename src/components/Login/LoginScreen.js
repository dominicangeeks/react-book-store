import React from 'react'

export const LoginScreen = () => {
    return (
        <>
            <form>
                <div className="container">
                    <div className="login-form">
                        <div className=" col-sm-6 col-md-6 col-lg-6">
                            <img width="100" className="img-center" src="https://c7.uihere.com/files/658/781/220/shop-building-facade-retail-clip-art-book-store.jpg"></img>

                            <hr/>

                            <legend className="text-center">Log In</legend>

                            <div className="row mt-3">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control"  />
                            </div>

                            <div className="row mt-3">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" />
                            </div>

                            <div className="row mt-3">
                                <button className="btn btn-primary form-control"> Log In</button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
