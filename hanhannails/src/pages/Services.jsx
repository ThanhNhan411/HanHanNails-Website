import React, { Suspense } from 'react';
import Item from '../components/Item';
import item_data from '../components/assets/itemData';
import './Services.css';
import Sidebar from '../components/Sidebar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Services(props) {
  return (
    <div className="services">
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar/>
        <div className="services-item">
          <h1 className='services-title'>Tất cả</h1>
          <div className="filter-services">
            <div className="filter-left">
            <DropdownButton id="dropdown-item-button" title="Lọc giá">
              <Dropdown.Item as="button">Dưới 100.000đ</Dropdown.Item>
              <Dropdown.Item as="button">Từ 100.000đ - 200.000đ</Dropdown.Item>
              <Dropdown.Item as="button">Từ 200.000đ - 300.000đ</Dropdown.Item>
            </DropdownButton>
            </div>
            <DropdownButton id="dropdown-item-button" title="Sắp xếp">
              <Dropdown.Item as="button">Dưới 100.000đ</Dropdown.Item>
              <Dropdown.Item as="button">Từ 100.000đ - 200.000đ</Dropdown.Item>
              <Dropdown.Item as="button">Từ 200.000đ - 300.000đ</Dropdown.Item>
            </DropdownButton>
          </div>
          {item_data.map((item, i) =>{
            if (props.type === 'all') {
              return (
                <Item 
                  key={i}
                  id={item.id}
                  img= {item.img[0]}
                  title={item.title}
                  star={item.star}
                  price={item.price}
                />
              )
            } else {
            if (item.type === props.type) {
          return (
            <Item 
              key={i}
              id={item.id}
              img= {item.img}
              title={item.title}
              star={item.star}
              price={item.price}
            />
          )
        }}
          })}
        </div>
      </Suspense>
    </div>
  );
}

export default Services;
