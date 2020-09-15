import React from 'react';
import Card from './Card';

  const CardList = ({robots}) => {    
    let robotCards = robots.map(item => {
        return <Card
        key = {item.id}
        id = {item.id}
        name = {item.name}
        username = {item.username}
        email = {item.email}
        />
    })
      return <div className={'tc'}>
          {robotCards}
      </div>
  }
  
export default CardList;