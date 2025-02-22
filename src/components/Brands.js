export function Brands({ brands }) {
    return (
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold">Trusted by Leading Brands</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {brands.length > 0 ? (
            brands.map((brand) => (
              <div key={brand.id} className="p-4 border rounded-lg text-center">
                <img src={`/images/${brand.logo}`} alt={brand.name} className="h-16 mx-auto" />
                <p>{brand.name}</p>
              </div>
            ))
          ) : (
            <p>Loading brands...</p>
          )}
        </div>
      </section>
    );
  }