/**
 * Main JavaScript for Lakshmi Sri Harsha Sallagundla Portfolio
 * Handles navigation, mobile drawer, scroll animations, project filtering,
 * clipboard copy, and contact form interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking any navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Sticky Navbar on Scroll ---
  const siteHeader = document.getElementById('siteHeader');
  const handleScroll = () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Active Navigation Link Spy ---
  const sections = document.querySelectorAll('section[id]');
  const observeSections = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

      if (targetNavLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  };
  window.addEventListener('scroll', observeSections, { passive: true });

  // --- Project Category Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // --- Copy Email to Clipboard ---
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailText = 'sriharsha.sallagundla@gmail.com';

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        // Fallback
        const tempInput = document.createElement('input');
        tempInput.value = emailText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('Email address copied to clipboard!');
      });
    });
  }

  // --- Toast Notification Helper ---
  function showToast(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // --- Contact Form Client-side Submission ---
  const contactForm = document.getElementById('contactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('messageSubject').value.trim();
      const message = document.getElementById('messageBody').value.trim();

      if (!name || !email || !subject || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Display polite frontend feedback
      if (formSuccessAlert) {
        formSuccessAlert.style.display = 'block';
        formSuccessAlert.innerHTML = `
          <strong>Thank you, ${name}!</strong><br>
          Your message has been captured. Since this is a frontend portfolio, you can also 
          <a href="mailto:sriharsha.sallagundla@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}" style="text-decoration: underline; color: #38bdf8; font-weight: 600;">
            click here to send directly via your email client
          </a>.
        `;
      }

      // Reset the form
      contactForm.reset();

      // Show toast confirmation
      showToast('Message prepared! Click email link or copy direct email.');
    });
  }

  // --- Dynamic Year for Footer Copyright ---
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
