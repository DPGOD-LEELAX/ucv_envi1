    (function() {
      // mobile toggle
      const menuToggle = document.getElementById('menuToggle');
      const navLinks = document.getElementById('navLinks');
      if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          navLinks.classList.toggle('show');
        });
      }


      const navItems = document.querySelectorAll('.nav-links a');
      navItems.forEach(link => {
        link.addEventListener('click', (e) => {
          // only on mobile
          if (window.innerWidth <= 760) {
            navLinks.classList.remove('show');
          }

        });
      });


      document.addEventListener('click', (e) => {
        if (window.innerWidth <= 760 && navLinks.classList.contains('show')) {
          if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('show');
          }
        }
      });


      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          navbar.classList.add('shadow');
        } else {
          navbar.classList.remove('shadow');
        }
      });


      const treeStat = document.getElementById('treeStat');
      const waterStat = document.getElementById('waterStat');
      const energyStat = document.getElementById('energyStat');
      const peopleStat = document.getElementById('peopleStat');

      function updateStats() {
        let trees = parseFloat(treeStat.innerText) || 18.3;
        let water = parseFloat(waterStat.innerText) || 2.8;
        let energy = parseFloat(energyStat.innerText) || 9.2;
        let people = parseFloat(peopleStat.innerText) || 4.5;

        trees = (trees + 0.24).toFixed(1);
        water = (water + 0.16).toFixed(1);
        energy = (energy + 0.12).toFixed(1);
        people = (people + 0.18).toFixed(1);

        treeStat.innerText = trees + 'k';
        waterStat.innerText = water + 'M';
        energyStat.innerText = energy;
        peopleStat.innerText = people + 'k';
      }

      const statItems = document.querySelectorAll('.stat-item');
      statItems.forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          updateStats();

          item.style.background = '#daf0cf';
          item.style.borderRadius = '40px';
          setTimeout(() => {
            item.style.background = 'transparent';
          }, 150);
        });
      });


      const subBtn = document.getElementById('subscribeBtn');
      const emailInput = document.getElementById('emailInput');
      const feedback = document.getElementById('formFeedback');

      if (subBtn) {
        subBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const email = emailInput.value.trim();
          if (email && email.includes('@') && email.includes('.')) {
            feedback.innerHTML = '🌱 thanks for joining! we’ll be in touch.';
            emailInput.value = '';
          } else {
            feedback.innerHTML = '🌿 please enter a valid email address.';
          }
        });
      }
    })();