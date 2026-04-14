/**
 * Club Connect Demo Site — AI Typing Demo
 * Simulates the AI event creation conversation.
 */

function initTypingDemo(): void {
  const container = document.getElementById('typingDemo');
  if (!container) return;

  const userText = 'Training next Tuesday at 6pm';
  const aiResponse = 'Got it — a training on Tuesday, Apr 14 at 6:00 pm. Where will it be held?';
  const userReply = 'The usual pitch';
  const finalMessage = 'Here\'s what I\'ve got:';

  const userBubble = container.querySelector('.typing-demo__user') as HTMLElement;
  const aiBubble = container.querySelector('.typing-demo__ai') as HTMLElement;
  const userReplyBubble = container.querySelector('.typing-demo__user-reply') as HTMLElement;
  const resultCard = container.querySelector('.typing-demo__result') as HTMLElement;
  const cursor = container.querySelector('.typing-demo__cursor') as HTMLElement;

  if (!userBubble || !aiBubble) return;

  let hasPlayed = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayed) {
          hasPlayed = true;
          playSequence();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(container);

  async function playSequence(): Promise<void> {
    // Show cursor
    if (cursor) cursor.style.opacity = '1';

    // 1. Type user message
    await wait(600);
    await typeText(userBubble, userText, 40);
    userBubble.classList.add('is-sent');

    // 2. Show AI typing indicator, then response
    await wait(800);
    aiBubble.classList.add('is-visible');
    await wait(400);
    const aiTextEl = aiBubble.querySelector('.typing-demo__text');
    if (aiTextEl) {
      aiTextEl.textContent = '';
      await typeText(aiTextEl as HTMLElement, aiResponse, 25);
    }

    // 3. User reply
    if (userReplyBubble) {
      await wait(600);
      await typeText(userReplyBubble, userReply, 40);
      userReplyBubble.classList.add('is-sent');
    }

    // 4. Show result card
    if (resultCard) {
      await wait(800);
      resultCard.classList.add('is-visible');
    }

    // Hide cursor
    if (cursor) cursor.style.opacity = '0';
  }
}

function typeText(el: HTMLElement, text: string, speed: number): Promise<void> {
  return new Promise((resolve) => {
    let i = 0;
    el.textContent = '';
    el.style.visibility = 'visible';

    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', initTypingDemo);
