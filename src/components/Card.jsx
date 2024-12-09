function Card({ title, image, discription }) {
  return (
    <div className="m-16 rounded-lg">
      <h1 className="text-3xl font-mono font-semibold text-black text-center m-20 p-5">
        {title}
      </h1>
      <div className="grid lg:grid-cols-2 justify-center gap-32 items-center">
        <div className="flex items-center justify-center">
          <img className="rounded-xl w-[700px]" src={image} alt="" />
        </div>

        <div className="grid md:grid-cols-1 place-items-center w-auto max-w-[800px]">
          <div>
            <p className="text-2xl leading-10 text-center font-semibold font-mono antialiased text-pretty tracking-widest">
              {discription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
