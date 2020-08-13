import React, { Component } from 'react'

import venom from './../img/venom-1.jpg';
import hulk from './../img/hulk-1.jpg';
import venom2 from './../img/venom-2.jpg';

export class Header extends Component {
  render() {
    return (
      <div>
        
          <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div class="search-bar">
          <input type="search" placeholder="Search" />
        </div>
                                                                                                                                                     
         {/* Sample Wallpaper  */}
        <div class="sample-wallpaper">
           {/* Wallpaper #1 */}
          <article class="wallpaper">
            <img src= {venom} alt="Wallpaper #1" class="wallpaper" />
          </article>

          {/* Wallpaper #2 */}
          <article class="wallpaper">
            <img src={hulk} alt="Wallpaper #1" class="wallpaper" />
          </article>

            {/* Wallpaper #3  */}
          <article class="wallpaper">
            <img src={venom2} alt="Wallpaper #1" class="wallpaper" />
          </article>
        </div>
      </div>
    </header>


      </div>
    )
  }
}

export default Header
