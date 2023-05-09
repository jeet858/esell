import React from "react";
import Nav from "../components/Nav";

export default function UploadProduct() {
  return (
    <div>
      <Nav name="upload" />
      <div style={{ marginTop: "100px" }}>
        <div class="col-md-6 offset-md-3 mt-5">
          <form>
            <div class="form-group">
              <label for="exampleInputName">Product Name</label>
              <input
                type="text"
                name="fullname"
                class="form-control"
                id="exampleInputName"
                placeholder="Enter your name and surname"
                required="required"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" required="required">
                Product Price
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <hr />
            <div class="form-group mt-3">
              <label class="mr-2" style={{ marginRight: "10px" }}>
                Upload Your Product Picture:{" "}
              </label>

              <input type="file" name="file" />
            </div>
            <hr />
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
