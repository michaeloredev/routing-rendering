import React from 'react'

export default function page({ params }) {
    const newsId = params.id
  return (
    <div>page{newsId}</div>
  )
}
