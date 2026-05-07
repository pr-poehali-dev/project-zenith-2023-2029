export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-[#f5ede8]">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/77f7b73f-4875-4775-9b44-04750f7eed13/files/747d7bb3-5368-4aa2-8ee6-fce3a06b2b7a.jpg"
          alt="Картины в галерее"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-[#a07b6a]">Каждый предмет — высказывание</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Мы отбираем вещи, которые живут вместе с вами. Скульптуры, вазы, арт-объекты — каждый предмет несёт форму, историю и характер.
        </p>
        <button className="bg-[#c9a89a] text-white border border-[#c9a89a] px-4 py-2 text-sm transition-all duration-300 hover:bg-transparent hover:text-[#c9a89a] cursor-pointer w-fit uppercase tracking-wide">
          Открыть каталог
        </button>
      </div>
    </div>
  );
}