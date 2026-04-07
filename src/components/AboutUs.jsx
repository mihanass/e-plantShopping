function AboutUs({ goToProducts }) {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>
        Paradise Nursery is an online plant shop that offers a wide variety of indoor plants,
        including aromatic and medicinal plants. Our mission is to bring nature closer to your home
        by providing high-quality, fresh, and affordable plants.
      </p>
      <p>
        We carefully select each plant to ensure it thrives in indoor environments while enhancing
        your living space with beauty and freshness. Whether you're a beginner or a plant lover,
        Paradise Nursery has something for everyone.
      </p>
      <button onClick={goToProducts}>View Products</button>
    </div>
  );
}

export default AboutUs;
