/**
 * Modal Manager - Simple open/close with keyboard & backdrop handling
 * Usage: const modal = new Modal('modal-id');
 */

class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.trigger = document.getElementById(`${id}-trigger`);
    this.close = document.getElementById(`${id}-close`);
    this.cancel = document.getElementById(`${id}-cancel`);
    this.backdrop = this.modal;
    
    this.init();
  }
  
  init() {
    if (this.trigger) {
      this.trigger.addEventListener('click', () => this.open());
    }
    if (this.close) {
      this.close.addEventListener('click', () => this.close_());
    }
    if (this.cancel) {
      this.cancel.addEventListener('click', () => this.close_());
    }
    
    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop) {
        this.close_();
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
        this.close_();
      }
    });
  }
  
  open() {
    this.modal.classList.remove('hidden');
    this.modal.focus();
    document.body.style.overflow = 'hidden';
  }
  
  close_() {
    this.modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const modals = document.querySelectorAll('[role="dialog"][id$="-modal"], [role="dialog"][id]');
  modals.forEach(modal => {
    if (!modal.dataset.initialized) {
      new Modal(modal.id);
      modal.dataset.initialized = 'true';
    }
  });
});
