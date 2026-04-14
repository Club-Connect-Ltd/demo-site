/**
 * Club Connect Demo Site — Exploded View
 * Full-screen overlay with annotated callouts for each screenshot.
 */

import { annotations, type Callout } from '../data/annotations';

let currentPhones: HTMLElement[] = [];
let currentIndex = 0;

function init(): void {
  const overlay = document.getElementById('explodedOverlay');
  const backdrop = document.getElementById('explodedBackdrop');
  const closeBtn = document.getElementById('explodedClose');
  const prevBtn = document.getElementById('explodedPrev');
  const nextBtn = document.getElementById('explodedNext');

  if (!overlay) return;

  // Collect all annotated frames (phone + browser)
  currentPhones = Array.from(document.querySelectorAll<HTMLElement>('[data-annotation]'));

  // Click handlers on phone frames
  currentPhones.forEach((phone, idx) => {
    const handler = (e: Event) => {
      e.preventDefault();
      currentIndex = idx;
      openOverlay(phone);
    };
    phone.addEventListener('click', handler);
    phone.addEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter' || (e as KeyboardEvent).key === ' ') {
        e.preventDefault();
        currentIndex = idx;
        openOverlay(phone);
      }
    });
  });

  // Close handlers
  backdrop?.addEventListener('click', closeOverlay);
  closeBtn?.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeOverlay();
    if (overlay.classList.contains('is-active')) {
      if (e.key === 'ArrowLeft') navigatePrev();
      if (e.key === 'ArrowRight') navigateNext();
    }
  });

  // Nav handlers
  prevBtn?.addEventListener('click', navigatePrev);
  nextBtn?.addEventListener('click', navigateNext);
}

function openOverlay(phone: HTMLElement): void {
  const overlay = document.getElementById('explodedOverlay');
  if (!overlay) return;

  const annotationId = phone.dataset.annotation || '';
  const annotation = annotations[annotationId];
  if (!annotation) return;

  // Get the image src from the frame (phone or browser)
  const img = phone.querySelector('img');
  if (!img) return;

  // Detect landscape (browser) vs portrait (phone) screenshots
  const isBrowser = phone.classList.contains('browser-frame');
  const isLandscape = isBrowser || (img.naturalWidth > img.naturalHeight);

  const explodedImg = document.getElementById('explodedImage') as HTMLImageElement;
  const titleEl = document.getElementById('explodedTitle');
  const descEl = document.getElementById('explodedDescription');
  const detailsEl = document.getElementById('explodedDetails');
  const calloutsEl = document.getElementById('explodedCallouts');
  const counterEl = document.getElementById('explodedCounter');

  if (explodedImg) {
    explodedImg.src = img.src;
    explodedImg.alt = img.alt;
  }

  // Toggle landscape layout
  overlay.classList.toggle('is-landscape', isLandscape);

  if (titleEl) titleEl.textContent = annotation.title;
  if (descEl) descEl.textContent = annotation.description;
  if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${currentPhones.length}`;

  // Render callout details in sidebar
  if (detailsEl) {
    detailsEl.innerHTML = annotation.callouts
      .map(
        (c) => `
        <div class="detail-item">
          <div class="detail-item__dot"></div>
          <div class="detail-item__content">
            <strong class="detail-item__label">${c.label}</strong>
            <span class="detail-item__text">${c.detail}</span>
          </div>
        </div>
      `
      )
      .join('');
  }

  // Render callout dots on image
  if (calloutsEl) {
    calloutsEl.innerHTML = annotation.callouts
      .map(
        (c, i) => `
        <div class="callout-dot" style="left: ${c.x}%; top: ${c.y}%; --callout-delay: ${i * 0.15 + 0.4}s" title="${c.label}">
          <div class="callout-dot__ping"></div>
          <div class="callout-dot__center"></div>
        </div>
      `
      )
      .join('');
  }

  // Show overlay
  overlay.classList.add('is-active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeOverlay(): void {
  const overlay = document.getElementById('explodedOverlay');
  if (!overlay) return;

  overlay.classList.remove('is-active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function navigatePrev(): void {
  if (currentPhones.length === 0) return;
  currentIndex = (currentIndex - 1 + currentPhones.length) % currentPhones.length;
  openOverlay(currentPhones[currentIndex]);
}

function navigateNext(): void {
  if (currentPhones.length === 0) return;
  currentIndex = (currentIndex + 1) % currentPhones.length;
  openOverlay(currentPhones[currentIndex]);
}

// Initialize
document.addEventListener('DOMContentLoaded', init);
