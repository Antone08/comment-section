import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://media.istockphoto.com/photos/brain-waves-thoughts-meditation-relax-concept-illustration-picture-id1167735120?b=1&k=20&m=1167735120&s=170667a&w=0&h=5mOy-LuTw9K7vw23ZG1Z9XOHLm1XgOePiDzxz5AnvLs="
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Objective</h1>
            <p>
            The purpose of this website is to help find an alternative way for, individuals, to find that level of creativity, calmness, focus, sleep, and even motivation through suggestions and tips.
            An an example of an alternative method is binural beats. Binural beats are either a style of instrumentals or frquencies that help facilitate the type of brainwave you're trying to achieve. 
            </p>
            {/* <h3>Sources</h3>
            <a href="https://github.com" target="_blank">Source</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

