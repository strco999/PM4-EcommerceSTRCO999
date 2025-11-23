// => Capturamos el id de nuestro params (siempre llega como string)
// => Consulta al backend para extraer informacion asociada a un producto de ese Id.
// => En base a la respuesta ? renderizo o seteo un error.


// =>vamos a recibir unos params con un idproduct 
interface ProductDetailPageProps {
	params: {
		idProduct: string;
		
	}
}

// => componente asincrono
async function ProductDetailPage({ params }: ProductDetailPageProps) {
	// => Extraemos el idProduct de mis params de forma asyncrona
   const {idProduct} = await params;


  return (
    <div>ProductDetailPage {idProduct}</div>
  )
}

export default ProductDetailPage;