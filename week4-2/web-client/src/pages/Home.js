import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-1"></div>
        <div className="col-6">
          <h1 className="mt-3 text-white">Bloggy</h1>
          <h4 className="text-white">Where word come to life</h4>
          <div className="mb-3">
            <NavLink to="/create">
              <button className="w-75 bg-white text-dark rounded-2 border-0 py-2">
                Create
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/posts">
              <button className="w-75 bg-danger text-white rounded-2 border-0 py-2">
                View Post
              </button>
            </NavLink>
          </div>
        </div>
        <div className="col-4">
          <img
            className="resim"
            alt="logo"
            src="https://hicoders.ch/wp-content/uploads/2022/03/11-Fullstack-Web-Programming.png"
          />
        </div>
      </div>
      <div class="card text-center mt-5 mx-5 ">
        <div class="card-header">Quote</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <footer class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Home;
