# WordPress Template Export - Schildersbedrijf Frensch

## CSS Variabelen (voor style.css of custom CSS)

```css
/* Design System Variables */
:root {
  /* Light mode colors */
  --background: hsl(250, 100%, 99%);
  --foreground: hsl(230, 15%, 15%);
  --card: hsl(0, 0%, 100%);
  --card-foreground: hsl(230, 15%, 15%);
  --primary: hsl(221, 83%, 53%);
  --primary-foreground: hsl(0, 0%, 100%);
  --secondary: hsl(210, 40%, 96%);
  --secondary-foreground: hsl(230, 15%, 15%);
  --muted: hsl(220, 14%, 96%);
  --muted-foreground: hsl(220, 9%, 46%);
  --accent: hsl(221, 83%, 53%);
  --accent-foreground: hsl(0, 0%, 100%);
  --border: hsl(220, 13%, 91%);
  --input: hsl(220, 13%, 91%);
  
  /* Gradients */
  --hero-gradient: linear-gradient(135deg, hsl(221, 83%, 53%), hsl(221, 83%, 43%));
  --section-gradient: linear-gradient(180deg, hsl(250, 100%, 99%), hsl(220, 14%, 96%));
  
  /* Border radius */
  --radius: 0.5rem;
}

/* Dark mode (optional) */
@media (prefers-color-scheme: dark) {
  :root {
    --background: hsl(230, 20%, 9%);
    --foreground: hsl(0, 0%, 95%);
    --card: hsl(230, 20%, 9%);
    --card-foreground: hsl(0, 0%, 95%);
    --secondary: hsl(230, 20%, 14%);
    --secondary-foreground: hsl(0, 0%, 95%);
    --muted: hsl(230, 20%, 14%);
    --muted-foreground: hsl(230, 5%, 64%);
    --border: hsl(230, 20%, 18%);
    --input: hsl(230, 20%, 18%);
    --section-gradient: linear-gradient(180deg, hsl(230, 20%, 9%), hsl(230, 20%, 14%));
  }
}

/* Base styles */
body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Cards */
.card {
  background-color: var(--card);
  color: var(--card-foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.card-content {
  padding: 1.5rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.btn-primary:hover {
  background-color: hsl(221, 83%, 48%);
}

.btn-secondary {
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  border: 1px solid var(--border);
}

.btn-hero {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-hero:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Typography */
.text-primary {
  color: var(--primary);
}

.text-muted {
  color: var(--muted-foreground);
}

/* Backgrounds */
.bg-section-gradient {
  background: var(--section-gradient);
}

.bg-hero-gradient {
  background: var(--hero-gradient);
}

/* Animations */
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translateY(0);
  }
  40%, 43% {
    transform: translateY(-30px);
  }
  70% {
    transform: translateY(-15px);
  }
  90% {
    transform: translateY(-4px);
  }
}

/* Hover effects */
.hover-shadow:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.hover-scale:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}
```

## HTML Structuur voor WordPress Templates

### header.php
```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
  <div class="container">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" 
             alt="<?php bloginfo('name'); ?>" 
             class="h-12 w-auto">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/slogan.png" 
             alt="Kwaliteit is waar wij voor staan" 
             class="h-8 w-auto ml-3 hidden sm:block">
      </div>
      
      <!-- Navigation -->
      <nav class="hidden md:flex space-x-8">
        <a href="#home" class="text-foreground hover:text-primary">Home</a>
        <a href="#services" class="text-foreground hover:text-primary">Diensten</a>
        <a href="#about" class="text-foreground hover:text-primary">Over Ons</a>
        <a href="#contact" class="text-foreground hover:text-primary">Contact</a>
      </nav>
      
      <!-- CTA Button -->
      <a href="#contact" class="btn btn-primary hidden md:inline-flex">
        Gratis Offerte
      </a>
    </div>
  </div>
</header>
```

### index.php (Home Page)
```php
<?php get_header(); ?>

<!-- Hero Section -->
<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" 
       style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/hero-painting.jpg')">
    <div class="absolute inset-0" style="background-color: rgba(59, 130, 246, 0.75);"></div>
  </div>
  
  <div class="relative z-10 container text-center text-white">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Professioneel
        <span class="block" style="color: rgba(255, 255, 255, 0.9);">Schilderwerk</span>
      </h1>
      
      <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" style="color: rgba(255, 255, 255, 0.9);">
        Al meer dan 20 jaar uw betrouwbare partner voor binnen- en buitenschilderwerk in de regio. 
        Kwaliteit en vakmanschap staan centraal.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#contact" class="btn btn-primary bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
          Gratis Offerte →
        </a>
        
        <a href="tel:+31123456789" class="btn btn-hero text-lg px-8 py-6">
          📞 Direct Bellen
        </a>
      </div>

      <div class="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div class="text-center">
          <div class="text-3xl font-bold">20+</div>
          <div style="color: rgba(255, 255, 255, 0.8);">Jaar Ervaring</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold">500+</div>
          <div style="color: rgba(255, 255, 255, 0.8);">Tevreden Klanten</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold">100%</div>
          <div style="color: rgba(255, 255, 255, 0.8);">Tevredenheid</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
      <div class="w-1 h-3 bg-white rounded-full mt-2"></div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section id="services" class="py-20 bg-section-gradient">
  <div class="container">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Onze Diensten</h2>
      <p class="text-xl text-muted max-w-2xl mx-auto">
        Van klein onderhoudswerk tot grote renovatieprojecten. 
        Wij verzorgen al uw schilderwerk met vakmanschap en oog voor detail.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <!-- Service 1 -->
      <div class="card overflow-hidden hover-shadow">
        <div class="h-48 overflow-hidden">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/interior-painting.jpg" 
               alt="Binnenschilderwerk"
               class="w-full h-full object-cover hover-scale">
        </div>
        <div class="card-header">
          <div class="flex items-center gap-3 mb-2">
            <div class="text-primary">🏠</div>
            <h3 class="text-xl font-semibold">Binnenschilderwerk</h3>
          </div>
          <p class="text-base text-muted">
            Professioneel schilderen van wanden, plafonds en houtwerk in uw woning of kantoor.
          </p>
        </div>
        <div class="card-content">
          <ul class="space-y-2">
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Muurverf
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Latex spuiten
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Houtwerk
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Behang verwijderen
            </li>
          </ul>
        </div>
      </div>

      <!-- Service 2 -->
      <div class="card overflow-hidden hover-shadow">
        <div class="h-48 overflow-hidden">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/exterior-painting.jpg" 
               alt="Buitenschilderwerk"
               class="w-full h-full object-cover hover-scale">
        </div>
        <div class="card-header">
          <div class="flex items-center gap-3 mb-2">
            <div class="text-primary">🏢</div>
            <h3 class="text-xl font-semibold">Buitenschilderwerk</h3>
          </div>
          <p class="text-base text-muted">
            Bescherming en verfraaiing van uw gevel, kozijnen en buitenhoutwerk.
          </p>
        </div>
        <div class="card-content">
          <ul class="space-y-2">
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Gevelreiniging
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Kozijnen
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Dakgoten
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Weersbestendig
            </li>
          </ul>
        </div>
      </div>

      <!-- Service 3 -->
      <div class="card overflow-hidden hover-shadow">
        <div class="h-48 overflow-hidden">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/commercial-painting.jpg" 
               alt="Commercieel Schilderwerk"
               class="w-full h-full object-cover hover-scale">
        </div>
        <div class="card-header">
          <div class="flex items-center gap-3 mb-2">
            <div class="text-primary">🎨</div>
            <h3 class="text-xl font-semibold">Commercieel Schilderwerk</h3>
          </div>
          <p class="text-base text-muted">
            Groot- en kleinschalige schilderprojecten voor bedrijven en instellingen.
          </p>
        </div>
        <div class="card-content">
          <ul class="space-y-2">
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Kantoorgebouwen
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Winkels
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Scholen
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Ziekenhuizen
            </li>
          </ul>
        </div>
      </div>

      <!-- Service 4 -->
      <div class="card overflow-hidden hover-shadow">
        <div class="card-header">
          <div class="flex items-center gap-3 mb-2">
            <div class="text-primary">🎨</div>
            <h3 class="text-xl font-semibold">Kleuradvies</h3>
          </div>
          <p class="text-base text-muted">
            Deskundig advies bij het kiezen van de juiste kleuren en materialen.
          </p>
        </div>
        <div class="card-content">
          <ul class="space-y-2">
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Kleurenschema's
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Materiaaladvies
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Trendinzicht
            </li>
            <li class="flex items-center text-sm text-muted">
              <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
              3D Visualisatie
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a href="#contact" class="btn btn-primary px-8 py-6 text-lg">
        Vraag Uw Offerte Aan
      </a>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="py-20">
  <div class="container">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Meer dan 20 jaar
          <span class="block text-primary">uw schilderspecialist</span>
        </h2>
        
        <p class="text-lg text-muted mb-8 leading-relaxed">
          Schildersbedrijf Frensch is al sinds 2003 actief in de regio en heeft zich 
          ontwikkeld tot een betrouwbare partner voor particulieren en bedrijven. 
          Met ons ervaren team zorgen wij voor vakkundig schilderwerk van de hoogste kwaliteit.
        </p>

        <div class="space-y-4 mb-8">
          <div class="flex items-center gap-3">
            <span class="text-primary">✓</span>
            <span>Gebruik van hoogwaardige materialen</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-primary">✓</span>
            <span>Eerlijke en transparante prijzen</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-primary">✓</span>
            <span>Gratis vrijblijvende offerte</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-primary">✓</span>
            <span>Garantie op al ons werk</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-primary">✓</span>
            <span>Opruimen en netjes achterlaten</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-primary">✓</span>
            <span>Persoonlijke begeleiding van A tot Z</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="card p-6 hover-shadow">
          <div class="flex items-start gap-4">
            <div class="text-primary mt-1">🏆</div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Gecertificeerd Vakmanschap</h3>
              <p class="text-muted">Alle medewerkers zijn opgeleid en gecertificeerd volgens de laatste standaarden.</p>
            </div>
          </div>
        </div>

        <div class="card p-6 hover-shadow">
          <div class="flex items-start gap-4">
            <div class="text-primary mt-1">⏰</div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Betrouwbaar & Punctueel</h3>
              <p class="text-muted">Wij respecteren afspraken en leveren altijd op tijd volgens planning.</p>
            </div>
          </div>
        </div>

        <div class="card p-6 hover-shadow">
          <div class="flex items-start gap-4">
            <div class="text-primary mt-1">👥</div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Klanttevredenheid</h3>
              <p class="text-muted">Meer dan 95% van onze klanten beveelt ons aan bij familie en vrienden.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="text-4xl font-bold text-primary mb-2">20+</div>
        <div class="text-muted">Jaar ervaring</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-primary mb-2">500+</div>
        <div class="text-muted">Projecten voltooid</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-primary mb-2">95%</div>
        <div class="text-muted">Klanten tevreden</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-primary mb-2">24/7</div>
        <div class="text-muted">Service beschikbaar</div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-20 bg-section-gradient">
  <div class="container">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Contact & Offerte</h2>
      <p class="text-xl text-muted max-w-2xl mx-auto">
        Vraag vrijblijvend een offerte aan of neem direct contact met ons op. 
        Wij helpen u graag verder met al uw schildervragen.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="card">
        <div class="card-header">
          <h3 class="text-2xl font-semibold">Offerte Aanvragen</h3>
        </div>
        <div class="card-content">
          <?php echo do_shortcode('[contact-form-7 id="1" title="Offerte Form"]'); ?>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="space-y-6">
        <h3 class="text-2xl font-bold mb-6">Contactgegevens</h3>
        
        <div class="card p-4 hover-shadow" onclick="window.open('tel:+31123456789', '_self')">
          <div class="flex items-center gap-4">
            <div class="text-primary">📞</div>
            <div>
              <div class="font-semibold">Telefoon</div>
              <div class="text-muted">+31 (0)123 456 789</div>
            </div>
          </div>
        </div>

        <div class="card p-4 hover-shadow" onclick="window.open('mailto:info@schildersbedrijf-frensch.nl', '_self')">
          <div class="flex items-center gap-4">
            <div class="text-primary">✉️</div>
            <div>
              <div class="font-semibold">E-mail</div>
              <div class="text-muted">info@schildersbedrijf-frensch.nl</div>
            </div>
          </div>
        </div>

        <div class="card p-4 hover-shadow" onclick="window.open('https://maps.google.com/?q=Hoofdstraat+123+Voorbeeld', '_blank')">
          <div class="flex items-center gap-4">
            <div class="text-primary">📍</div>
            <div>
              <div class="font-semibold">Adres</div>
              <div class="text-muted">Hoofdstraat 123, 1234 AB Voorbeeld</div>
            </div>
          </div>
        </div>

        <div class="card p-4">
          <div class="flex items-center gap-4">
            <div class="text-primary">⏰</div>
            <div>
              <div class="font-semibold">Openingstijden</div>
              <div class="text-muted">Ma-Vr: 8:00-17:00</div>
            </div>
          </div>
        </div>

        <div class="card p-6 text-center" style="background-color: var(--primary); color: var(--primary-foreground);">
          <h4 class="text-xl font-bold mb-2">Gratis Offerte</h4>
          <p class="mb-4">
            Binnen 24 uur een vrijblijvende offerte op maat, 
            aangepast aan uw specifieke wensen en budget.
          </p>
          <div class="flex items-center justify-center gap-2 text-sm">
            <span>✓</span>
            <span>Geen verplichtingen</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
```

### footer.php
```php
<footer class="bg-gray-900 text-white py-12">
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-4"><?php bloginfo('name'); ?></h3>
        <p class="text-gray-300 mb-4">
          Al meer dan 20 jaar uw betrouwbare partner voor professioneel schilderwerk.
        </p>
      </div>
      
      <div>
        <h4 class="text-lg font-semibold mb-4">Diensten</h4>
        <ul class="space-y-2 text-gray-300">
          <li>Binnenschilderwerk</li>
          <li>Buitenschilderwerk</li>
          <li>Commercieel</li>
          <li>Kleuradvies</li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-lg font-semibold mb-4">Contact</h4>
        <div class="space-y-2 text-gray-300">
          <p>📞 +31 (0)123 456 789</p>
          <p>✉️ info@schildersbedrijf-frensch.nl</p>
          <p>📍 Hoofdstraat 123, 1234 AB Voorbeeld</p>
        </div>
      </div>
      
      <div>
        <h4 class="text-lg font-semibold mb-4">Openingstijden</h4>
        <div class="space-y-2 text-gray-300">
          <p>Maandag - Vrijdag: 8:00-17:00</p>
          <p>Weekend: Op afspraak</p>
        </div>
      </div>
    </div>
    
    <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Alle rechten voorbehouden.</p>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
```

## WordPress Setup Instructies

1. **Maak een child theme** of gebruik een framework zoals Underscores
2. **Installeer Contact Form 7** plugin voor het formulier
3. **Upload afbeeldingen** naar de `/assets/` map in je theme directory
4. **Kopieer de CSS** naar je `style.css`
5. **Pas de PHP templates** aan naar jouw thema structuur
6. **Configureer Contact Form 7** met de gewenste velden

## Contact Form 7 Configuratie

```
<label> Naam* [text* naam] </label>
<label> Telefoon* [tel* telefoon] </label>
<label> E-mail* [email* email] </label>
<label> Adres [text adres] </label>
<label> Type Werk [select service "Binnenschilderwerk" "Buitenschilderwerk" "Commercieel" "Onderhoud" "Kleuradvies"] </label>
<label> Omschrijving* [textarea* bericht] </label>
[submit "Verstuur Aanvraag"]
```

## Benodigde Afbeeldingen

- `/assets/hero-painting.jpg` - Hero achtergrond
- `/assets/interior-painting.jpg` - Binnenschilderwerk
- `/assets/exterior-painting.jpg` - Buitenschilderwerk  
- `/assets/commercial-painting.jpg` - Commercieel werk
- `/assets/logo.png` - Logo
- `/assets/slogan.png` - Slogan afbeelding

Deze export geeft je alle styling en structuur om de Lovable app om te zetten naar een WordPress theme!