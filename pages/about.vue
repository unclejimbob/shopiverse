<template>
  <div class="page-body">
    <header class="about-header">
      <h1>About Us</h1>
    </header>
    <main class="about-main">
      <h2>Welcome to Shopiverse</h2>
      <p>
        At <strong>Shopiverse</strong>, we are your one-stop online destination for all things household.
        From stylish clothing to cutting-edge consumer electronics, we’re here to bring you the best products
        at unbeatable prices—all in one place.
      </p>

      <h2>Who We Are</h2>
      <p>
        Founded with a passion for quality and customer satisfaction, Shopiverse is committed to transforming your
        shopping experience. We believe shopping should be easy, convenient, and enjoyable. That’s why we offer a
        diverse range of products to meet all your daily needs.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Clothing:</strong> From casual wear to formal attire, we bring you the latest styles for every occasion.</li>
        <li><strong>Consumer Electronics:</strong> Upgrade your life with gadgets like smartphones, tablets, and home appliances.</li>
        <li><strong>Household Essentials:</strong> Discover must-have items for a well-organized and functional home.</li>
      </ul>

      <p>
        Whether you're shopping for yourself, your family, or your home, Shopiverse has everything you need to make life easier.
      </p>
    </main>
    <footer class="about-footer">
      <p>&copy; 2024 Shopiverse. All rights reserved.</p>
    </footer>
  </div>
</template>

  <style>
    /* Scoped styles for the About Us page */
    .about-header {
      background: #4CAF50;
      color: #fff;
      padding: 1rem 0;
      text-align: center;
    }
    .about-main {
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .about-main h1, .about-main h2 {
      color: #4CAF50;
    }
    .about-main p {
      margin: 1rem 0;
    }
    .about-main ul {
      list-style: none;
      padding: 0;
    }
    .about-main ul li {
      margin: 0.5rem 0;
      padding-left: 1.5rem;
      text-indent: -1.5rem;
    }
    .about-main ul li::before {
      content: "✔️";
      margin-right: 0.5rem;
      color: #4CAF50;
    }
    .about-footer {
      text-align: center;
      padding: 1rem 0;
      background: #333;
      color: #fff;
      margin-top: 2rem;
    }
  </style>
