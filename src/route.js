import { Navigate } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import Form from './Form';

const route = [
  {
    path: '/',
    children: [
      { path: 'Button', element: <Button /> },
      { path: 'Form', element: <Form /> },
      { path: 'Header', element: <Header /> },

     
    ]
  },
  
];

export default route;