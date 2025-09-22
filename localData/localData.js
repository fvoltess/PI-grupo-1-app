const localData = {
  usuario: {
    nombre: "Leo Messi",
    email: "leo@gmail.com",
    contrasena: "pass123",
    imagenPerfil: "/images/users/leoMessi.png",
  },

  productos: [
    {
      id: 1,
      nombre: "Asado Argentino",
      imagen: "/images/products/asadoArgentino.jpg",
      descripcion: "Corte de carne asada con chimichurri.",
      comentarios: [
        {
          nombreUsuario: "Mili",
          texto: "Muy bueno.",
          imagenUsuario: "/images/users/mili.png",
        },
        {
          nombreUsuario: "Bauti",
          texto: "Excelente.",
          imagenUsuario: "/images/users/bauti.jpg",
        },
        {
          nombreUsuario: "Cristiano Ronaldo",
          texto: "Genial.",
          imagenUsuario: "/images/users/ronaldo.jpg",
        },
      ],
    },
    {
      id: 2,
      nombre: "Paella Valenciana",
      imagen: "/images/products/paellaValenciana.jpg",
      descripcion: "Arroz con mariscos, pollo, conejo y vegetales.",
      comentarios: [
        {
          nombreUsuario: "Mili",
          texto: "Muy bueno.",
          imagenUsuario: "/images/users/mili.png",
        },
        {
          nombreUsuario: "Leo Messi",
          texto: "Muy rico.",
          imagenUsuario: "/images/users/leoMessi.png",
        },
        {
          nombreUsuario: "Bauti",
          texto: "Genial.",
          imagenUsuario: "/images/users/bauti.jpg",
        },
      ],
    },
    {
      id: 3,
      nombre: "Arepas Venezolanas",
      imagen: "/images/products/arepasVenezolanas.jpg",
      descripcion: "Tortillas de maíz rellenas con queso y carne mechada.",
      comentarios: [
        {
          nombreUsuario: "Fede",
          texto: "Lo mejor de toda la página. Increíbles!",
          imagenUsuario: "/images/users/fede.png",
        },
        {
          nombreUsuario: "Cristiano Ronaldo",
          texto: "Espectaculares, no hay nada igual.",
          imagenUsuario: "/images/users/ronaldo.jpg",
        },
        {
          nombreUsuario: "Leo Messi",
          texto: "Son perfectas, las mejores del mundo.",
          imagenUsuario: "/images/users/leoMessi.png",
        },
      ],
    },
    {
      id: 4,
      nombre: "Empanadas",
      imagen: "/images/products/empanadasDeCarne.webp",
      descripcion: "Masa frita rellena de carne sazonada.",
      comentarios: [
        {
          nombreUsuario: "Fede",
          texto: "Muy bueno.",
          imagenUsuario: "/images/users/fede.png",
        },
        {
          nombreUsuario: "Bauti",
          texto: "Excelente.",
          imagenUsuario: "/images/users/bauti.jpg",
        },
        {
          nombreUsuario: "Leo Messi",
          texto: "Genial.",
          imagenUsuario: "/images/users/leoMessi.png",
        },
      ],
    },
    {
      id: 5,
      nombre: "Helado Artesanal",
      imagen: "/images/products/heladoArtesanal.jpg",
      descripcion: "Helado hecho a mano con ingredientes frescos.",
      comentarios: [
        {
          nombreUsuario: "Fede",
          texto: "Muy bueno.",
          imagenUsuario: "/images/users/fede.png",
        },
        {
          nombreUsuario: "Mili",
          texto: "Muy rico.",
          imagenUsuario: "/images/users/mili.png",
        },
        {
          nombreUsuario: "Cristiano Ronaldo",
          texto: "Excelente.",
          imagenUsuario: "/images/users/ronaldo.jpg",
        },
      ],
    },
    {
      id: 6,
      nombre: "Ceviche Peruano",
      imagen: "/images/products/cevichePeruano.jpg",
      descripcion: "Pescado marinado en limón con cebolla y cilantro.",
      comentarios: [
        {
          nombreUsuario: "Fede",
          texto: "Muy bueno.",
          imagenUsuario: "/images/users/fede.png",
        },
        {
          nombreUsuario: "Mili",
          texto: "Genial.",
          imagenUsuario: "/images/users/mili.png",
        },
        {
          nombreUsuario: "Leo Messi",
          texto: "Excelente.",
          imagenUsuario: "/images/users/leoMessi.png",
        },
      ],
    },
    {
      id: 7,
      nombre: "Pizza Napolitana",
      imagen: "/images/products/pizzaNapolitana.jpg",
      descripcion: "Pizza con tomate, mozzarella fresca y albahaca.",
      comentarios: [
        {
          nombreUsuario: "Fede",
          texto: "Muy bueno.",
          imagenUsuario: "/images/users/fede.png",
        },
        {
          nombreUsuario: "Mili",
          texto: "Excelente.",
          imagenUsuario: "/images/users/mili.png",
        },
        {
          nombreUsuario: "Bauti",
          texto: "Genial.",
          imagenUsuario: "/images/users/bauti.jpg",
        },
      ],
    },
    {
      id: 8,
      nombre: "Ramen Japonés",
      imagen: "/images/products/ramen.jpg",
      descripcion: "Sopa japonesa con fideos, caldo y carne de cerdo.",
      comentarios: [
        {
          nombreUsuario: "Fede",
          texto: "Muy bueno.",
          imagenUsuario: "/images/users/fede.png",
        },
        {
          nombreUsuario: "Mili",
          texto: "Genial.",
          imagenUsuario: "/images/users/mili.png",
        },
        {
          nombreUsuario: "Leo Messi",
          texto: "Excelente.",
          imagenUsuario: "/images/users/leoMessi.png",
        },
      ],
    },
    {
      id: 9,
      nombre: "Sushi Japonés",
      imagen: "/images/products/sushi.jpg",
      descripcion: "Rollos de arroz con pescado fresco y vegetales.",
      comentarios: [
        {
          nombreUsuario: "Fede",
          texto: "Muy bueno.",
          imagenUsuario: "/images/users/fede.png",
        },
        {
          nombreUsuario: "Bauti",
          texto: "Excelente.",
          imagenUsuario: "/images/users/bauti.jpg",
        },
        {
          nombreUsuario: "Cristiano Ronaldo",
          texto: "Genial.",
          imagenUsuario: "/images/users/ronaldo.jpg",
        },
      ],
    },

    {
      id: 10,
      nombre: "Tacos Mexicanos",
      imagen: "/images/products/tacosMexicanos.jpg",
      descripcion: "Tortillas de maíz rellenas de carne, cebolla y cilantro.",
      comentarios: [
        {
          nombreUsuario: "Fede",
          texto: "Muy bueno.",
          imagenUsuario: "/images/users/fede.png",
        },
        {
          nombreUsuario: "Mili",
          texto: "Excelente.",
          imagenUsuario: "/images/users/mili.png",
        },
        {
          nombreUsuario: "Bauti",
          texto: "Genial.",
          imagenUsuario: "/images/users/bauti.jpg",
        },
      ],
    }
  ],
};

module.exports = localData;
