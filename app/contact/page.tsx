export default function ContactPage() {
  return (
    <main className="flex-1 w-full bg-white text-black max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-6">
        Heb je een vraag over onze events of wil je met ons samenwerken?
        Neem gerust contact met ons op.
      </p>

      <ul className="space-y-2 text-lg">
        <li>
          E-mail:{" "}
          <a
            href="mailto:bestuur@szpdroeselare.be"
            className="text-blue-700 hover:underline"
          >
            bestuur@szpdroeselare.be
          </a>
        </li>

      
        <li>
        
    
          Instagram:{" "}
          <a
            href="https://www.instagram.com/szpd.roeselare/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            szpd.roeselare
          </a>
        </li>


            
        <li>
        
    
          facebook:{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61595088077732"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SZPD
          </a>
        </li>



    
      </ul>
    </main>
  );
}