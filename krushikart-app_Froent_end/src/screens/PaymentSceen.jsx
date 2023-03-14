import React from 'react'
import { Container } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'

const PaymentSceen = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1> Payment page </h1>
      <section
        class="p-4 p-md-5"
        // style={{
        //   // backgroundImage:
        //   //   'url(/images/Mobile-payment-gateway-integration-Header.jpg)',
        //   // backgroundRepeat: 'no-repeat',
        //   backgroundColor: 'red',
        // }}
        // style={{
        //   backgroundColor: 'cyan',
        // }}
      >
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-5">
            <div class="card rounded-3">
              <div class="card-body p-4">
                <div class="text-center mb-4">
                  <h3>Settings</h3>
                  <h6>Payment</h6>
                </div>
                <form action="">
                  <p class="fw-bold mb-4 pb-2">Saved cards:</p>

                  <div class="d-flex flex-row align-items-center mb-4 pb-1">
                    <img
                      class="img-fluid"
                      src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                    />
                    <div class="flex-fill mx-3">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="formControlLgXc"
                          class="form-control form-control-lg"
                          value="**** **** **** 3193"
                        />
                        <label class="form-label" for="formControlLgXc">
                          Card Number
                        </label>
                      </div>
                    </div>
                    {/* <a href="#!">Remove card</a> */}
                    <button className="btn btn-danger">Remove card</button>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4 pb-1">
                    <img
                      class="img-fluid"
                      src="https://img.icons8.com/color/48/000000/visa.png"
                    />
                    <div class="flex-fill mx-3">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="formControlLgXs"
                          class="form-control form-control-lg"
                          value=""
                        />
                        <label class="form-label" for="formControlLgXs">
                          Card Number
                        </label>
                      </div>
                    </div>
                    {/* <a href="#!">Remove card</a> */}
                    <button className="btn btn-danger">Remove card</button>
                  </div>

                  <p class="fw-bold mb-4">Add new card:</p>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="formControlLgXsd"
                      class="form-control form-control-lg"
                      value="Rohit Gadakh "
                    />
                    <label class="form-label" for="formControlLgXsd">
                      Cardholder's Name
                    </label>
                  </div>

                  <div class="row mb-4">
                    <div class="col-7">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="formControlLgXM"
                          class="form-control form-control-lg"
                          value="1234 5678 1234 5678"
                        />
                        <label class="form-label" for="formControlLgXM">
                          Card Number
                        </label>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="form-outline">
                        <input
                          type="password"
                          id="formControlLgExpk"
                          class="form-control form-control-lg"
                          placeholder="MM/YYYY"
                        />
                        <label class="form-label" for="formControlLgExpk">
                          Expire
                        </label>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="form-outline">
                        <input
                          type="password"
                          id="formControlLgcvv"
                          class="form-control form-control-lg"
                          placeholder="Cvv"
                        />
                        <label class="form-label" for="formControlLgcvv">
                          Cvv
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      class="btn btn-success btn-lg btn-block"
                      onClick={() => {
                        toast.success('Payment Successfull....')
                        navigate('/')
                      }}
                    >
                      Proceed To Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PaymentSceen
