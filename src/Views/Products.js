import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Conponents/Loader'
import { useAxiosGet } from '../Hooks/HttpRequest'

function Product() {
    const { id } = useParams()
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`

    let product = useAxiosGet(url)

    let content = null

    if (product.error) {
        content = <p className="text-red-500 flex justify-center text-2xl">
            Something went wrong please try again
        </p>
    }

    if (product.loading) {
        content = <Loader></Loader>
    }

    if (product.data) {
        return (
            content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.title}
                </h1>

                <div>
                    <img
                        src={product.data.url}
                        alt={product.data.name}
                    />
                </div>

            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    )

}

export default Product