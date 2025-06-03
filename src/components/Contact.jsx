
import '../index.css';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 text-center bg-gray-900">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="space-y-3 text-lg">
        <p>Email: <a href="mailto:muaazahmed0111@gmail.com" className="text-orange-400">muaazahmed0111@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/muaaz-ahmed-353164368/" target="_blank" className="text-orange-400">/in/muaaz-ahmed</a></p>
        <p>GitHub: <a href="https://github.com/muaazahmed03" target="_blank" className="text-orange-400">/muaazahmed03</a></p>
        <p>Instagram: <a href="https://www.instagram.com/muaaz_ahmed_03/" target="_blank" className="text-orange-400">@muaaz_ahmed_03</a></p>
      </div>
    </section>
  )
}

export default Contact
