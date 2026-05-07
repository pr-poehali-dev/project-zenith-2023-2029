export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/77f7b73f-4875-4775-9b44-04750f7eed13/files/785c2a4a-5f8e-4e2f-ba2d-b1ea3a42dc3d.jpg"
          alt="Предметы искусства и декора"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Каждый предмет — высказывание</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Мы отбираем вещи, которые живут вместе с вами. Скульптуры, вазы, арт-объекты — каждый предмет несёт форму, историю и характер.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Открыть каталог
        </button>
      </div>
    </div>
  );
}