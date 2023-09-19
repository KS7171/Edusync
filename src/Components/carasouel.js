import React from 'react'
import "./css/main.css";
import "./css/bootstrap.css";
import "./css/animate.min.css";
// import "./css/font-awesome.min.css";
import "./css/jquery.DonutWidget.min.css";
import "./css/jquerysctipttop.css";
// import "./css/owl.carousel.css";
// import "./css/linearicons.css";
import "./css/magnific-popup.css";
import "./css/nice-select.css";

export default function carasouel() {
  return (
    <div>
    <div class="filters">
    <ul>
      <li class="active" data-filter="*">All</li>
      <li data-filter=".corporate">North</li>
      <li data-filter=".personal">Central</li>
      <li data-filter=".agency">North-Eastern</li>
      <li data-filter=".portal">South</li>
    </ul>
  </div>
  
  <div class="filters-content">
    <div class="row grid">
      <div class="single-portfolio col-sm-4 all corporate">
        <div class="item">
          <img src="edusync/src/Components/img/JAIPUR.jpg" alt="Work 1"/>
          <div class="p-inner">
              <h4>Jaipur</h4>
            <div class="cat">Hawa Mahel</div>
          </div>
        </div>
      </div>
      <div class="single-portfolio col-sm-4 all personal">
        <div class="item">
          <img src="./img/BIKANER.jpg" alt="Work 1"/>
          <div class="p-inner">
            <h4>Bikaner</h4>
            <div class="cat">Junagarh Fort</div>
          </div>
        </div>
      </div>
      <div class="single-portfolio col-sm-4 all agency">
        <div class="item">
          <img src="./img/UDAIPUR.jpg" alt="Work 1"/>
          <div class="p-inner">
            <h5>Udaipur</h5>
            <div class="cat">City Palace</div>
          </div>
        </div>
      </div>
      <div class="single-portfolio col-sm-4 all portal">
        <div class="item">
          <img src="./img/JODHPUR.jpg" alt="Work 1"/>
          <div class="p-inner">
            <h5>Jodhpur</h5>
            <div class="cat">Mehrangarh Fort</div>
          </div>
        </div>
      </div>

      <div class="single-portfolio col-sm-4 all corporate">
        <div class="item">
          <img src="./img/AJMER.jpg" alt="Work 1"/>
          <div class="p-inner">
            <h4>Ajmer</h4>
            <div class="cat">Ajmer Sharif Dargah</div>
          </div>
        </div>
      </div>
      <div class="single-portfolio col-sm-4 all personal">
        <div class="item">
          <img src="./img/MOUNT-ABU.jpg" alt="Work 1"/>
          <div class="p-inner">
            <h4>Mount Abu</h4>
            <div class="cat">Nakki Lake</div>
          </div>
        </div>
      </div>
      <div class="single-portfolio col-sm-4 all agency">
        <div class="item">
          <img src="./img/PUSHKAR.jpg" alt="Work 1"/>
          <div class="p-inner">
            <h5>Pushkar</h5>
            <div class="cat">Inder Temple</div>
          </div>
        </div>
      </div>
      <div class="single-portfolio col-sm-4 all portal">
        <div class="item">
          <img src="./img/CHITTORGARH.jpg" alt="Work 1"/>
          <div class="p-inner">
            <h5>Chittorgarh</h5>
            <div class="cat">Chittorgarh Fort</div>
          </div>
        </div>
      </div>		
      <div class="single-portfolio col-sm-4 all corporate">
        <div class="item">
          <img src="./img/JAISALMER.jpg" alt="Work 1"/>
          <div class="p-inner">
            <h4>Jaisalmer</h4>
            <div class="cat">Sahara Dessert</div>
          </div>
        </div>
      </div>
   </div>
  </div>
  </div>
  )
}
