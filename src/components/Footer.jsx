
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p>© {year} seomix. All rights reserved.</p>
    </footer>
  )
}

export default Footer