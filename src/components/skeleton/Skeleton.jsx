import React from 'react'

const Skeleton = () => {
    //Skeleton Card
let styles = `
w-full
skeleton
h-[75px]
flex
justify-between 
items-center
px-[10px]
bg-[#e8e8e8]
rounded-[5px]
       `
       
  return (
    <div className={styles}></div>
  )
}

export default Skeleton