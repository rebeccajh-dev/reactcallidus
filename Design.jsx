import React from 'react'

const Design = () => {
  <main className='principal'>
    <h2>Categoria Design</h2>
    {livros
        .filter((cat)=> cat.categoria === 'design')
        .map((livro)=>(
            <div className='card' key={livro.id}>
                <img
                    src={"/imagens/capa/" + livro.id + ".jpg"}
                    alt="Thumbnail da capa do livro.."
                />
            </div>
            {livros
                .filter((c)) => c.slug === livro.slug)
                .map
            }
        ))
  </main>
}

export default Design
