/**
 * Main UI Application Logic for Syed Fahad Hussain Portfolio
 */

document.addEventListener('DOMContentLoaded', async () => {
    initTypewriter();
    initMobileMenu();
    initContactForm();
    await renderProjects('all');
    initProjectFilters();
});

// Typewriter Effect for Hero Headline
function initTypewriter() {
    const typewriterEl = document.getElementById('typewriter');
    if (!typewriterEl) return;

    const phrases = [
        "Senior Android Engineer (6+ Yrs)",
        "Kotlin & Jetpack Compose Specialist",
        "Clean Architecture & MVVM Expert",
        "GitLab CI/CD Pipeline Architect"
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIdx];
        
        if (isDeleting) {
            typewriterEl.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typewriterEl.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIdx === currentPhrase.length) {
            speed = 2200; // Pause at full phrase
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    type();
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Render Projects to Grid
async function renderProjects(filterCategory = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400">
            <i class="fa-solid fa-circle-notch fa-spin text-2xl text-emerald-400 mb-2"></i>
            <p class="text-sm font-mono">Loading Enterprise Project Case Studies...</p>
        </div>
    `;

    const projects = await fetchGitLabProjects();
    const filtered = filterCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === filterCategory);

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-slate-400">
                <i class="fa-solid fa-folder-open text-3xl mb-2 text-slate-600"></i>
                <p>No projects found in this category.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(proj => `
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all flex flex-col justify-between group shadow-lg relative overflow-hidden">
            <!-- Subtle Top Accent Line -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500"></div>

            <div>
                <!-- Header Tags & Status -->
                <div class="flex items-center justify-between mb-4">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-400">
                        <i class="fa-brands fa-android text-emerald-400"></i> Production App
                    </span>
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400">
                        <i class="fa-solid fa-lock text-[10px]"></i> Private Repo (NDA)
                    </span>
                </div>

                <!-- Project Title & Scale -->
                <h4 class="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-1">
                    ${proj.name}
                </h4>
                <div class="text-xs font-mono text-indigo-400 mb-3 flex items-center gap-1.5">
                    <i class="fa-solid fa-cubes text-[10px]"></i> ${proj.scale}
                </div>

                <!-- Description -->
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                    ${proj.description}
                </p>
            </div>

            <div>
                <!-- Tech Badge Chips -->
                <div class="flex flex-wrap gap-1.5 mb-5">
                    ${proj.tags.map(t => `<span class="px-2 py-0.5 bg-slate-950 text-slate-300 border border-slate-800 rounded text-[10px] font-mono">${t}</span>`).join('')}
                </div>

                <!-- Action Button for Private Repo -->
                <a href="#contact" class="w-full py-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-semibold text-slate-300 transition-all flex items-center justify-center gap-2 group-hover:border-emerald-500/40">
                    <i class="fa-solid fa-lock text-amber-400"></i> Private Repo • Request Walkthrough
                </a>
            </div>
        </div>
    `).join('');
}

// Category Filter Controller
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('#project-filters .filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-filter');
            renderProjects(category);
        });
    });
}

// Contact Form Handler
function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (form && status) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            status.classList.remove('hidden', 'bg-red-500/10', 'text-red-400');
            status.classList.add('bg-emerald-500/10', 'text-emerald-400', 'border', 'border-emerald-500/20');
            status.innerHTML = `<i class="fa-solid fa-circle-check mr-2"></i> Thank you! Your message has been sent to Syed Fahad Hussain.`;
            form.reset();
        });
    }
}
