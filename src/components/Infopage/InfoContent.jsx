const InfoContent = ({heading, data}) => {
    return (
      <div>
        <h1 className='text-center mt-4'>{heading}</h1>
        <p className='text-center px-2 my-3'>{data}</p>
      </div>
    );
}

export default InfoContent;
