import React, { useState } from 'react';

function Tour({ id, image, info, title, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

console.log("from tour",);
  return (
    <>
      <article className='single-tour'>
        <img src={image} alt={title} />
        <footer>
          <div className='tour-info'>
            <h4>{title}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info?.substring(0, 100)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Show less' : 'Read more'}
            </button>
          </p>
          <button className='delete-btn' onClick={() => removeTour(id)}>
            Not interested
          </button>
        </footer>
      </article>
    </>
  );
}

export default Tour;





// import React, { useState } from 'react'

// function Tour({id,image,info,title,price,removeTour}) {
//     const[readMore,setReadMore] = useState(false);

//   return (
//     <>
//       <article className='single-tour'>
//         <img src={image} alt={title}/>
//         <footer>
//             <div className='tour-info'>
//                 <h4>{title}</h4>
//                 <h4 className='tour-price'>${price}</h4>
//             </div>
//             <p>
//                 {readMore?info:`${info.substring(0,200)}...`}
//                 <button onClick={()=>setReadMore(!readMore)}>
//                     {readMore?'show less':'read more'}
//                 </button>
//             </p>
//             <button className='delete-btn' onClick={()=>removeTour(id)}>
//                 not interested
//             </button>
//         </footer>

//       </article>
//     </>
//   )
// }

// export default Tour