import axios from 'axios';
import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Admin.module.css'

const index = ({orders, products}) => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h1 className={styles.title}>Products</h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Images</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                {
                    products.map((product) => (
                    <tbody key={product._id}>
                        <tr className={styles.trTitle}>
                            <td>
                                <Image
                                    src={product.img}
                                    width={50}
                                    height={50}
                                    ObjectFit="cover"
                                    alt=""
                                />
                            </td>
                            <td>{product._id.slice(0, 5)}...</td>
                            <td>{product.title}</td>
                            <td>${product.prices[0]}</td>
                            <td>
                                <button className={styles.button}>Edit</button>
                                <button 
                                    className={styles.button}
                                    onClick={() => handleDelete(product._id)}
                                >Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    ))
                }
            </table>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Id</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tbody>

                <tbody>
                    <tr className={styles.trTitle}>
                        <td>{"45678954344067".slice(0, 5)}...</td>
                        <td>John Doe</td>
                        <td>$50</td>
                        <td>paid</td>
                        <td>preparing</td>
                        <td>
                            <button className={styles.button}>Next Stage</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
};

export const getServerSideProps = async () => {
    const productRes = await axios.get("http://localhost:3000/api/products");
    const orderRes = await axios.get("http://localhost:3000/api/orders");

    return {
        props: {
            orders: orderRes.data,
            products: productRes.data,
        }
    }
}

export default index