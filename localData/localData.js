const localData = {
    usuario: {
        nombre: "",
        email: "",
        contrasena: ""
    },
    productos: [
        {
            nombre: "Pizza Napolitana",
            id: 1,
            imagen: "images/products/pizzaNapolitana.jpg",
            descripcion: "Clásica pizza italiana con tomate, mozzarella fresca y albahaca.",
            comentarios: [
                {
                    nombreUsuario: "Laura Pérez",
                    texto: "La mejor combinación de sabores simples.",
                    imagenUsuario: ""
                }
            ]
        }, 
        {
            nombre: "Sushi",
            id: 2,
            imagen: "/images/products/sushi.jpg",
            descripcion: "Plato japonés a base de arroz avinagrado con pescado y vegetales.",
            comentarios: [
                {
                    nombreUsuario: "Kenji Yamamoto",
                    texto: "Me encanta el sashimi fresco, muy saludable.",
                    imagenUsuario: ""
                }
            ]
        }, 
        {
            nombre: "Hamburguesa Clásica",
            id: 3,
            imagen: "/images/products/hamburguesaClasica.jpg",
            descripcion: "Pan suave con carne jugosa, queso, lechuga y tomate.",
            comentarios: [
                {
                    nombreUsuario: "Tomás Rivas",
                    texto: "Nunca falla, perfecta con papas fritas.",
                    imagenUsuario: ""
                }
            ]
        }, 
        {
            nombre: "Paella Valenciana",
            id: 4,
            imagen: "/images/products/paellaValenciana.webp",
            descripcion: "Arroz español con mariscos, pollo, conejo y verduras.",
            comentarios: [
                {
                    nombreUsuario: "Isabel Torres",
                    texto: "La probé en Valencia, espectacular.",
                    imagenUsuario: ""
                }
            ]
        }, 
        {
            nombre: "Ramen",
            id: 5,
            imagen: "/images/products/ramen.webp",
            descripcion: "Sopa japonesa de fideos con caldo, carne, huevo y vegetales.",
            comentarios: [
                {
                    nombreUsuario: "Mateo Sánchez",
                    texto: "El caldo es increíble, muy reconfortante.",
                    imagenUsuario: ""
                }
            ]
        }, 
        {
            nombre: "Tacos Mexicanos",
            id: 6,
            imagen: "/images/products/tacosMexicanos.jpeg",
            descripcion: "Tortillas de maíz rellenas con carne, cebolla, cilantro y salsa.",
            comentarios: [
                {
                    nombreUsuario: "Ana Martínez",
                    texto: "Los de pastor son mis favoritos.",
                    imagenUsuario: ""
                }
            ]
        }, 
        {
            nombre: "Asado Argentino",
            id: 7,
            imagen: "/images/products/asadoArgentino.jpg",
            descripcion: "Carne a la parrilla, tradición y sabor en cada corte.",
            comentarios: [
                {
                    nombreUsuario: "Gonzalo Herrera",
                    texto: "El mejor plan de domingo con amigos.",
                    imagenUsuario: ""
                }
            ]
        }, 
        {
            nombre: "Ceviche Peruano",
            id: 8,
            imagen: "/images/products/cevichePeruano.avif",
            descripcion: "Pescado marinado en jugo de limón con cebolla, ají y cilantro.",
            comentarios: [
                {
                    nombreUsuario: "Camila Núñez",
                    texto: "Fresco y delicioso, ideal en verano.",
                    imagenUsuario: ""
                }
            ]
        }, 
        {
            nombre: "Pad Thai",
            id: 9,
            imagen: "/images/products/padThai.avif",
            descripcion: "Salteado tailandés de fideos de arroz con camarones, tofu y maní.",
            comentarios: [
                {
                    nombreUsuario: "David Romero",
                    texto: "El contraste dulce y salado es único.",
                    imagenUsuario: ""
                }
            ]
        }, 
        {
            nombre: "Helado Artesanal",
            id: 10,
            imagen: "/images/products/heladoArtesanal.jpg",
            descripcion: "Postre cremoso disponible en infinidad de sabores.",
            comentarios: [
                {
                    nombreUsuario: "Florencia Díaz",
                    texto: "Mi debilidad, sobre todo el de pistacho.",
                    imagenUsuario: ""
                }
            ]
        }        
    ]
}

module.exports = localData;