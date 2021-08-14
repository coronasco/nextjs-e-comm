function Item({title, price, image}) {
    return (
        <div className='w-full sm:w-[200px] h-[200px] overflow-hidden relative p-4 text-white'>
            <div className='relative z-50'>
                <div>{title}</div>
                <div>{price}</div>
            </div>
            <img src={image} alt="image" className='absolute top-0 left-0 w-full h-full object-cover' />
        </div>
    )
}

export default Item