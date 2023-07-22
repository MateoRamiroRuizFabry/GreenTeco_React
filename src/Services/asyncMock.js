
const productosJoyas = [
  {
    id: 1,
    stock: 10,
    descripcion: "Anillo de plata con piedra",
    img: "https://pandoraar.vtexassets.com/arquivos/ids/280121-800-auto?v=638017566649830000&width=800&height=auto&aspect=true",
    precio: 50,
    categoria: "Anillo",
  },
  {
    id: 2,
    stock: 5,
    descripcion: "Collar de oro rosa con dije de corazón",
    img: "https://pandorapa.vtexassets.com/arquivos/ids/183485-800-auto?v=638052547864500000&width=800&height=auto&aspect=true",
    precio: 90,
    categoria:"Collar",
  },
  {
    id: 3,
    stock: 3,
    descripcion: "Pulsera de perlas con cierre de plata",
    img: "https://cdn.abicart.com/shop/images/17178549-origpic-c54ba8/25118/art18/h8549/S%C3%B6tvattensp%C3%A4rlarmband.png",
    precio: 60,
    categoria:"Pulsera",
  },
  {
      id: 4,
      stock: 10,
      descripcion: "Anillo de plata con piedra",
      img: "https://global.zancangioielli.com/8437-large_default/anillo-de-plata-con-piedra-de-ojo-de-tigre.jpg",
      precio: 50,
      categoria:"Anillo",
    },
    {
      id: 5,
      stock: 8,
      descripcion: "Aretes de plata",
      img: "https://pandoraar.vtexassets.com/arquivos/ids/248313-800-auto?v=637649412820770000&width=800&height=auto&aspect=true",
      precio: 70,
      categoria: "Aretes",
    },
    {
      id: 6,
      stock: 12,
      descripcion: "Alianza de oro",
      img: "https://www.joyeriasanchez.com/54761-large_default/alianza-wedding-classic-oro-18k-3-mm.jpg",
      precio: 300,
      categoria: "Anillo",
    },
    {
      id: 7,
      stock: 6,
      descripcion: "Pendientes de plata con diseño de flores",
      img: "https://pandorapa.vtexassets.com/arquivos/ids/179354-800-auto?v=638052499501530000&width=800&height=auto&aspect=true",
      precio: 40,
      categoria: "Aretes",
    },
    {
      id: 8,
      stock: 4,
      descripcion: "Collar de perlas",
      img: "https://benditaeva.es/cdn/shop/products/collar-perlas-naturales-plata_4a1d4241-471b-4480-91fb-7e2c32d33ae7_1445x.png?v=1659446308",
      precio: 80,
      categoria: "Collar",
    },
    {
      id: 9,
      stock: 2,
      descripcion: "Pulsera de oro",
      img: "https://orobriz.es/wp-content/uploads/2021/03/pulsera-oro.png",
      precio: 150,
      categoria: "Pulsera",
    },
    {
      id: 10,
      stock: 15,
      descripcion: "Anillo de plata con forma de corazon",
      img: "https://www.nicepng.com/png/full/296-2965154_anillos-plata-png-anillo-d-plata.png",
      precio: 30,
      categoria: "Anillo",
    },
  ];
function getData (){
    return new Promise( (resolve,reject) => {

      

        setTimeout( () => {
            resolve(productosJoyas)
        }, 1000 )
    })
};

export function getProductData (id){


  return new Promise( (resolve,reject) => {
      
      setTimeout( () => {
          resolve(productosJoyas.find((x) => x.id === Number(id)))
      }, 1000 )
  })
};

export function getProductByCategory (category){


  return new Promise( (resolve,reject) => {
      
      setTimeout( () => {
          resolve(productosJoyas.filter((x) => x.categoria === category))
      }, 1000 )
  })
};

export default getData;