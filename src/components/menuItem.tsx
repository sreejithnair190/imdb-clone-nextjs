import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface MenuItemProp{
    title:string;
    address:string;
    Icon: IconType
}

const MenuItem : React.FC<MenuItemProp> = ({title, address, Icon}) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <Icon className='text-2xl sm:hidden' /> 
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  );
}

export default MenuItem;
