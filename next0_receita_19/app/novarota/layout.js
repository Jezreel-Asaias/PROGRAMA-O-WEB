export default function NovaRotaLayout({ children }) {
  console.log("montando layout da novarota")
  return (
    <section>
      <h2>Área da Nova Rota</h2>
      <div style={{ border: '1px solid gray', padding: '10px' }}>
        {children}
      </div>
    </section>
  )
}