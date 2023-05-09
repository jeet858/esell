import React from "react";
import Nav from "../components/Nav";

export default function Profile() {
  return (
    <>
      <Nav />
      <section class="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div
              class="col col-lg-6 mb-4 mb-lg-0"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div class="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div class="row g-0">
                  <div
                    class="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: "0.5rem",
                      borderBottomLeftRadius: "0.5rem",
                      background:
                        "linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      class="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
                    <h5>User</h5>
                    <i class="far fa-edit mb-5"></i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-4">
                      <h6>Information</h6>
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email</h6>
                          <p class="text-muted">info@example.com</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Phone</h6>
                          <p class="text-muted">123 456 789</p>
                        </div>
                      </div>
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email</h6>
                          <p class="text-muted">info@example.com</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Phone</h6>
                          <p class="text-muted">123 456 789</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                type="button"
                style={{ justifyContent: "center" }}
              >
                Request Edit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
