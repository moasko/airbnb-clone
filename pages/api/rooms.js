import { faker } from '@faker-js/faker/locale/fr';

function generateListing() {
    const listing = {
      id: faker.datatype.uuid(),
      name: faker.lorem.words(),
      picture_url: `${faker.image.city()}?random=${Math.round(Math.random() * 1000)}?width=271?height=257`,
      price: faker.commerce.price(),
      location: faker.address.city(),
    };
    return listing;
  }


  
  export default function handler(req, res) {
    const createUsers = (numUsers = 10) => {
        return Array.from({length: numUsers}, generateListing);
    }
      res.status(200).json({data:createUsers(20)})
    }