'use client';
import React from 'react'

export default function FilterError({ error }) {
  return (
    <div>
        <h1>An Error Occured</h1>
        <p> {error.message} </p>
    </div>
  )
}
