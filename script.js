// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
});

// Contact section functionality (if needed)
// You can add contact-related functionality here

// Add scroll effect to header and progress indicator
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollProgress = document.querySelector('.scroll-progress');
    const progressFill = document.querySelector('.progress-ring-fill');
    
    // Header background effect
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.8)';
        header.style.backdropFilter = 'blur(15px)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = 'none';
    }
    
    // Progress indicator
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    if (scrollTop > 200) {
        scrollProgress.classList.add('visible');
    } else {
        scrollProgress.classList.remove('visible');
    }
    
    // Update progress ring
    const circumference = 175.93; // 2 * PI * 28
    const offset = circumference - (scrollPercent / 100) * circumference;
    progressFill.style.strokeDashoffset = offset;
});

// Scroll to top when progress indicator is clicked
document.addEventListener('DOMContentLoaded', function() {
    const scrollProgress = document.querySelector('.scroll-progress');
    
    if (scrollProgress) {
        scrollProgress.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Add cursor pointer style
        scrollProgress.style.cursor = 'pointer';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and gallery items
document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Hero section click handler (if needed)
// You can add click functionality to hero elements if needed

// Basit Portfolio Marquee
document.addEventListener('DOMContentLoaded', function() {
    // İlk satır - sola doğru
    const track1 = document.getElementById('portfolioTrack1');
    const group1 = document.getElementById('portfolioGroup1');
    
    if (track1 && group1) {
        const clone1 = group1.cloneNode(true);
        track1.appendChild(clone1);
        
        let offset1 = 0;
        function animate1() {
            offset1 -= 2;
            if (offset1 <= -group1.offsetWidth) {
                offset1 = 0;
            }
            track1.style.transform = `translateX(${offset1}px)`;
            requestAnimationFrame(animate1);
        }
        animate1();
    }
    
    // İkinci satır - sağa doğru
    const track2 = document.getElementById('portfolioTrack2');
    const group2 = document.getElementById('portfolioGroup2');
    
    if (track2 && group2) {
        const clone2 = group2.cloneNode(true);
        track2.appendChild(clone2);
        
        let offset2 = -group2.offsetWidth; // Sağa akış için -genişlik'ten başla
        function animate2() {
            offset2 += 2;
            if (offset2 >= 0) {
                offset2 = -group2.offsetWidth; // Reset
            }
            track2.style.transform = `translateX(${offset2}px)`;
            requestAnimationFrame(animate2);
        }
        animate2();
    }
    
    // Services Marquee
    const servicesTrack = document.getElementById('servicesTrack');
    const servicesGroup = document.getElementById('servicesGroup');
    
    if (servicesTrack && servicesGroup) {
        const clone = servicesGroup.cloneNode(true);
        servicesTrack.appendChild(clone);
        
        let offset = 0;
        function animateServices() {
            offset -= 1;
            if (offset <= -servicesGroup.offsetWidth) {
                offset = 0;
            }
            servicesTrack.style.transform = `translateX(${offset}px)`;
            requestAnimationFrame(animateServices);
        }
        animateServices();
    }
    
    // Services Marquee - Bottom (Sağa doğru)
    const servicesTrack2 = document.getElementById('servicesTrack2');
    const servicesGroup2 = document.getElementById('servicesGroup2');
    
    if (servicesTrack2 && servicesGroup2) {
        const clone2 = servicesGroup2.cloneNode(true);
        servicesTrack2.appendChild(clone2);
        
        let offset2 = -servicesGroup2.offsetWidth;
        function animateServices2() {
            offset2 += 1;
            if (offset2 >= 0) {
                offset2 = -servicesGroup2.offsetWidth;
            }
            servicesTrack2.style.transform = `translateX(${offset2}px)`;
            requestAnimationFrame(animateServices2);
        }
        animateServices2();
    }
});

// Accordion functionality for process steps
document.addEventListener('DOMContentLoaded', function() {
    const stepItems = document.querySelectorAll('.step-item');
    
    stepItems.forEach(item => {
        const header = item.querySelector('.step-header');
        const toggle = item.querySelector('.step-toggle');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            stepItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.step-toggle').textContent = '+';
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                toggle.textContent = '+';
            } else {
                item.classList.add('active');
                toggle.textContent = '−';
            }
        });
    });
    
    // Artists carousel functionality
    const navDots = document.querySelectorAll('.nav-dot');
    let currentArtist = 0;
    
    // Artist data (you can expand this with more artists)
    const artists = [
        {
            name: "Hasan Berat",
            role: "Dövme Sanatçısı",
            image: "Artist_2.png"
        },
        {
            name: "Hasan Berat",
            role: "Piercing Sanatçısı",
            image: "Artist_2.png"
        },
        {
            name: "Hasan Berat",
            role: "Cover-up Sanatçısı",
            image: "Artist_2.png"
        }
    ];
    
    function updateArtist(index) {
        const artistName = document.querySelector('.artist-name');
        const artistRole = document.querySelector('.artist-role');
        const artistImage = document.querySelector('.artist-image img');
        
        if (artistName && artistRole && artistImage) {
            artistName.textContent = artists[index].name;
            artistRole.textContent = artists[index].role;
            artistImage.src = artists[index].image;
        }
        
        // Update navigation dots
        navDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    // Add click event listeners to navigation dots
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentArtist = index;
            updateArtist(currentArtist);
        });
    });
    
    // Auto-rotate artists every 5 seconds
    setInterval(() => {
        currentArtist = (currentArtist + 1) % artists.length;
        updateArtist(currentArtist);
    }, 5000);
    
    // "See more" button functionality
    const artistBtn = document.querySelector('.artist-btn');
    if (artistBtn) {
        artistBtn.addEventListener('click', function() {
            // You can add functionality here like opening a modal or navigating to artist details
            alert(`Daha fazla bilgi için ${artists[currentArtist].name} ile iletişime geçin!`);
        });
    }
});
