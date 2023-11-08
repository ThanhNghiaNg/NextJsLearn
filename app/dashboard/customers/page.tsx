import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};

type Props = {}

export default function page({}: Props) {
  return (
    <div>Customer Page</div>
  )
}