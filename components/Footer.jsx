// components/Navbar.jsx
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
                <div class="container mx-auto px-4 pt-10 text-white"><div class="footer-content"><div class=" container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 ">
                    <div>
                        <h3 class="text-sm font-semibold  tracking-wider mb-4">Changeons notre mo(n)de durablement</h3>
                        <p class="text-sm">Refashion est l'éco-organisme de la Filière Textile (textiles, linge de maison et chaussures).</p>
                        <p class="text-sm">Notre mission : fédérer et accompagner tous les acteurs de la production, de la consommation jusqu’à la régénération, pour réduire les impacts et créer de la valeur.</p>
                        <p class="text-sm">Notre projet : S'inscrire dans la dynamique d'une économique circulaire : mettre en place un modèle innovant et durable, moteur d’activité et de performance environnementale, économique et sociale.</p></div><div>
                        <h3 class="text-sm font-semibold tracking-wider mb-4">A propos</h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="#" class="text-sm">Nous connaître</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm">Nos champs d’action</a></li><li><a href="#" class="text-sm">Avis du Comité des Parties Prenantes</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm">Nos actions et résultats</a></li><li><a href="#" class="text-sm">Nous Contacter</a>
                            </li>
                        </ul>
                    </div>
                    <div><h3 class="text-sm font-semibold tracking-wider mb-4">Nos sites</h3><ul class="space-y-2">
                        <li>
                            <a href="#" class="text-sm">ReFashion Pro</a>
                        </li>
                        <li><a href="#" class="text-sm">EcoDesign</a>
                        </li>
                        <li><a href="#" class="text-sm">Metteur en marché</a>
                        </li>
                        <li>
                            <a href="#" class="text-sm">Collectivité et Acteur Public</a>
                        </li>
                        <li><a href="#" class="text-sm">Opérateur</a>
                        </li>
                        <li><a href="#" class="text-sm">Réparateur</a></li>
                        <li><a href="#" class="text-sm">Plateforme Recycle</a>
                        </li>
                        <li><a href="#" class="text-sm">FAQ</a>
                        </li>
                    </ul>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold tracking-wider mb-4">Nous suivre</h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="#" class="text-sm">Facebook</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm">Twitter</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm">Instagram</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm">YouTube</a>
                            </li>
                        </ul>
                    </div>
                </div>
                    <div class="pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
                        <p class="text-sm">©2025 Refashion</p>
                        <div class="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" class="text-sm">Mentions <br />Légales</a>
                            <a href="#" class="text-sm">Conditions générales <br />d’utilisation</a>
                            <a href="#" class="text-sm">Politique de protection <br />des données personnelles</a>
                            <a href="#" class="text-sm">Politique de <br />Cookies</a>
                            <a href="#" class="text-sm">Déclaration <br />d’accessibilité</a>
                        </div>
                    </div>
                    <div class="px-20 lg:px-25 pt-50 lg:pb-10">
                        <a href="https://refashion.fr" rel="home" aria-label="Refashion, Aller à la page d’accueil" class="block opacity-50 hover:opacity-100 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="529" height="100" fill="none" viewBox="0 0 529 100" class="fill-white w-full h-auto">
                                <path d="M188.79 85.461h-54.247v14.537h54.247V85.46ZM219.463 27.663V39.66h-9.183v45.798h-14.608V39.66h-6.262V27.663h6.262v-3.236c0-6.953 1.844-12.032 5.531-15.233 3.687-3.201 9.493-4.799 17.423-4.799v12.313c-3.061 0-5.215.59-6.467 1.773-1.252 1.182-1.879 3.166-1.879 5.946v3.236h9.183Z"></path>
                                <path d="M258.066 69.03c3.061-3.025 4.588-7.18 4.588-12.465 0-5.284-1.533-9.439-4.588-12.465-3.061-3.025-6.643-4.54-10.746-4.54-4.102 0-7.667 1.497-10.692 4.488-3.026 2.99-4.542 7.128-4.542 12.418 0 5.29 1.528 9.457 4.594 12.517 3.061 3.061 6.625 4.594 10.693 4.594s7.632-1.515 10.693-4.54m-33.126 8.865c-5.185-5.6-7.772-12.746-7.772-21.442s2.575-15.806 7.719-21.337c5.145-5.53 11.688-8.292 19.618-8.292 7.93 0 13.982 3.271 18.155 9.808v-8.971h14.608v57.795H262.66V75.76c-4.384 7.028-10.47 10.54-18.26 10.54-7.79 0-14.28-2.798-19.46-8.398ZM281.326 44.563c0-5.01 2.119-9.217 6.368-12.623 4.243-3.406 9.879-5.109 16.902-5.109 7.023 0 12.659 1.685 16.902 5.062 4.243 3.377 6.502 7.947 6.783 13.717h-15.023c-.416-4.869-3.407-7.303-8.972-7.303-2.786 0-4.94.556-6.467 1.668-1.528 1.112-2.295 2.645-2.295 4.588s1.147 3.476 3.442 4.588c2.294 1.112 5.074 1.984 8.345 2.61 3.272.626 6.52 1.41 9.757 2.346 3.236.937 5.998 2.61 8.293 5.01 2.294 2.4 3.441 5.583 3.441 9.545 0 5.214-2.212 9.462-6.625 12.728-4.419 3.271-10.055 4.904-16.902 4.904-6.848 0-12.466-1.615-16.85-4.852-4.383-3.236-6.783-7.876-7.198-13.927h15.023c.556 4.868 3.652 7.303 9.288 7.303 2.716 0 4.905-.609 6.572-1.826 1.668-1.217 2.505-2.815 2.505-4.799 0-1.983-1.147-3.546-3.441-4.693-2.294-1.147-5.08-2.036-8.346-2.663a121.586 121.586 0 0 1-9.756-2.294c-3.236-.9-5.999-2.522-8.293-4.851-2.294-2.33-3.441-5.372-3.441-9.13M347.684 8.258v28.067c3.687-6.326 9.668-9.492 17.944-9.492 6.607 0 11.998 2.177 16.171 6.519 4.172 4.348 6.262 10.382 6.262 18.1v34.013h-14.608V53.54c0-4.523-1.147-7.982-3.441-10.381-2.295-2.4-5.426-3.599-9.388-3.599-3.962 0-7.111 1.2-9.44 3.599-2.329 2.4-3.494 5.858-3.494 10.382v31.922h-14.713V8.258h14.713-.006ZM392.762 27.663h14.713v57.795h-14.713V27.663Zm16.276-14.712c0 2.505-.872 4.63-2.61 6.367-1.739 1.738-3.846 2.61-6.315 2.61-2.47 0-4.577-.866-6.315-2.61-1.738-1.738-2.61-3.862-2.61-6.367s.866-4.623 2.61-6.367c1.744-1.744 3.845-2.61 6.315-2.61 2.469 0 4.57.872 6.315 2.61 1.738 1.738 2.61 3.863 2.61 6.367ZM440.442 73.88c4.103 0 7.632-1.51 10.587-4.535 2.956-3.025 4.437-7.303 4.437-12.833s-1.464-9.79-4.384-12.781c-2.92-2.99-6.455-4.489-10.593-4.489s-7.632 1.498-10.488 4.489c-2.856 2.99-4.278 7.268-4.278 12.833 0 5.566 1.422 9.844 4.278 12.834 2.85 2.99 6.327 4.489 10.435 4.489m-21.18 4.172c-5.636-5.495-8.451-12.693-8.451-21.594 0-8.901 2.85-16.064 8.556-21.489 5.701-5.425 12.782-8.14 21.233-8.14s15.527 2.715 21.233 8.14c5.701 5.425 8.557 12.588 8.557 21.489 0 8.9-2.868 16.105-8.609 21.594-5.742 5.495-12.853 8.24-21.339 8.24-8.486 0-15.544-2.745-21.18-8.24ZM488.432 27.662v8.661c3.687-6.326 9.668-9.492 17.944-9.492 6.608 0 11.998 2.177 16.171 6.52 4.172 4.347 6.262 10.38 6.262 18.1v34.012h-14.608V53.54c0-4.524-1.147-7.982-3.441-10.382-2.295-2.399-5.426-3.599-9.394-3.599s-7.111 1.2-9.44 3.6c-2.329 2.399-3.494 5.857-3.494 10.38v31.924h-14.713V27.662h14.713ZM115.281 41.327c-2.657-2.335-5.858-3.505-9.61-3.505-3.751 0-6.888 1.17-9.4 3.505-2.51 2.335-4.02 5.454-4.511 9.346h27.823c-.211-3.892-1.645-7.011-4.302-9.346Zm-9.821 44.382c-8.568 0-15.538-2.78-20.917-8.333-5.378-5.554-8.07-12.898-8.07-22.033 0-9.135 2.71-16.439 8.123-21.928 5.414-5.483 12.425-8.228 21.028-8.228 8.603 0 15.662 2.674 21.186 8.017 5.519 5.35 8.282 12.477 8.282 21.395 0 2.055-.141 3.962-.427 5.736h-42.9c.352 3.82 1.768 6.9 4.25 9.234 2.475 2.335 5.629 3.505 9.451 3.505 5.168 0 8.99-2.124 11.471-6.373h16.142c-1.698 5.595-4.993 10.16-9.874 13.7-4.887 3.54-10.798 5.308-17.733 5.308"></path>
                                <path d="M34.46 46.117c-2.423-1.018-4.764-3.57-3.383-6.262.714-1.392 2.072-2.188 3.395-2.13h.029c5.39 0 8.896 7.947 8.896 7.947-2.81 1.142-6.058 1.657-8.937.451m26.366 3.81s1.498-1.065 2.224-1.645c6.894-5.518 10.534-12.646 10.534-20.616 0-8.556-2.593-15.403-7.702-20.348C58.385.084 48.453-.032 46.768-.003H0v84.966h14.526V13.498h32.528c.457 0 5.953.093 9.505 3.593 1.2 1.182 2.095 2.692 2.675 4.535.562 1.738.843 3.746.843 6.04 0 .65-.053 1.275-.164 1.872-.387 3.184-1.885 6.765-6.052 9.832.135-.1-4.495-5.039-4.963-5.478-1.902-1.779-3.991-3.394-6.32-4.576-7.638-3.88-17.646-2.423-21.439 5.969-2.305 5.109-2.346 11.078 1.528 15.432 4.74 5.32 12.156 6.408 18.91 6.11.643-.03 7.005-.984 6.853-1.218l18.71 29.477h15.984l-22.31-35.16.012.007Z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                </div>
            </footer>

        </>
    )
};

export default Footer;