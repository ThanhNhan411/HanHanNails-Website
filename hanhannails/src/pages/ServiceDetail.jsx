import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import ServiceDisplay from '../components/ServiceDisplay';

function ServiceDetail() {
    const {itemData} = useContext(ShopContext);
    const {itemId} = useParams();
    const service = itemData.find((e) => Number(e.id) === Number(itemId));
    console.log('itemData:', service);

  return (
    <div className='service-container'>
        <ServiceDisplay service={service}/>
    </div>
  )
}

export default ServiceDetail;