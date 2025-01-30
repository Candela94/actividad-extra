


export const Productos = ({productos}) => {

    return(
<>
<h2>Productos en venta</h2>

            {
                productos.map(producto => (


                    <div className="Card-producto">

                        <img src={image} alt="product" className="Card-img" />

                        <div className="Card-informacion">
                        <p className="Card-nombre">{name}</p>    
                        <p>{price}</p>
                        <p>{description}</p>

                        </div>


                    </div>


                ))
            }


</>

    )

}

   




